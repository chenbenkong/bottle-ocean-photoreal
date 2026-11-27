// Voxel ocean fauna — big shark (breaching + dorsal fin above water) and 24 fish.
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
const rand=(a,b)=>a+Math.random()*(b-a);

window.addEventListener("load",()=>{
  function wait(){const T=window.__tideline;if(!T||!T.scene)return requestAnimationFrame(wait);init(T.scene);}
  function init(scene){
    const loader=new GLTFLoader(),G=new THREE.Group();G.name="voxel-fauna";scene.add(G);
    const load=(u)=>new Promise(res=>loader.load(u,g=>res(g.scene),undefined,e=>{console.error("[fauna] load fail",u,e&&e.message);res(null);}));

    // ---- splash / ripple state: module scope inside init so the loop can see it ----
    const SPLASH_N=320;
    const splashGeo=new THREE.BufferGeometry();
    splashGeo.setAttribute("position",new THREE.BufferAttribute(new Float32Array(SPLASH_N*3),3));
    const splashMat=new THREE.PointsMaterial({color:0xdff2f7,size:0.95,transparent:true,opacity:0,depthWrite:false});
    const splash=new THREE.Points(splashGeo,splashMat);G.add(splash);
    const splashVel=[];for(let i=0;i<SPLASH_N;i++)splashVel.push(new THREE.Vector3());
    let splashLife=0;
    const ripples=[];
    for(let i=0;i<3;i++){
      const ring=new THREE.Mesh(new THREE.RingGeometry(0.6,0.85,32),
        new THREE.MeshBasicMaterial({color:0xcfeef5,transparent:true,opacity:0,side:THREE.DoubleSide,depthWrite:false}));
      ring.rotation.x=-Math.PI/2;ring.visible=false;G.add(ring);ripples.push({mesh:ring,life:0});
    }
    function spawnSplash(x,z,power){
      splashLife=1;splashMat.opacity=1.0;
      const pos=splashGeo.attributes.position.array;
      for(let i=0;i<SPLASH_N;i++){
        pos[i*3]=x+(Math.random()-0.5)*2.8;pos[i*3+1]=0.25;pos[i*3+2]=z+(Math.random()-0.5)*2.8;
        const a=Math.random()*Math.PI*2,v=1.2+Math.random()*2.4*power;
        splashVel[i].set(Math.cos(a)*v*0.9,3.2+Math.random()*5.5*power,Math.sin(a)*v*0.9);
      }
      splashGeo.attributes.position.needsUpdate=true;
      for(const r of ripples){if(r.life<=0){r.life=1;r.mesh.position.set(x,0.12,z);r.mesh.visible=true;r.mesh.scale.setScalar(0.6);break;}}
    }

    Promise.all([load("assets/voxel_shark_ultra.glb"),load("assets/voxel_fish_fine.glb")]).then(([sharkSrc,fishSrc])=>{
      try{
        if(!sharkSrc&&!fishSrc){console.warn("[fauna] models missing");return;}
        function prep(src,target){
          const bb=new THREE.Box3().setFromObject(src),sz=bb.getSize(new THREE.Vector3());
          const m=Math.max(sz.x,sz.y,sz.z)||1;
          src.scale.setScalar(target/m);src.updateMatrixWorld(true);
          const bb2=new THREE.Box3().setFromObject(src),c=bb2.getCenter(new THREE.Vector3());
          src.position.sub(c);
          const wrap=new THREE.Group();wrap.add(src);return wrap;
        }
        const SHARK_LEN=11;
        let shark=null;
        if(sharkSrc){
          shark=prep(sharkSrc,SHARK_LEN);
          shark.userData={a:-1.4,r:14.5,sp:.16,nextBreach:5,prevH:undefined,breachP:-1};
          G.add(shark);
        }
        // fish species split
        const species={orange:[],blue:[],yellow:[]};
        if(fishSrc)fishSrc.traverse(o=>{if(!o.isMesh)return;const n=o.name.toLowerCase();for(const k of Object.keys(species))if(n.includes(k))species[k].push(o);});
        // ---- realistic ecosystem layout: each species forms multiple schools
        // anchored in different regions (bearing / radius / depth band), fish spread inside the school
        const fish=[];
        const SCHOOL_PLAN={
          // species: [ [bearingDeg, radius, depthY, count, spreadXY], ... ]
          orange:[[ -35,  9, -0.9, 10, 2.4],[ 120, 21, -2.0,  8, 3.0],[ 210, 15, -1.4,  7, 2.6]],
          blue:  [[  10, 12, -1.8, 12, 3.2],[ 160, 26, -2.6,  9, 3.4],[ 285, 10, -0.8,  8, 2.2]],
          yellow:[[  75, 16, -1.2,  9, 2.6],[ 250, 22, -2.2, 11, 3.2],[ -80, 18, -1.6,  7, 2.4]]
        };
        console.log("[fauna] species parts:",Object.keys(species).map(k=>k+"="+species[k].length).join(", "));
        for(const [k,parts] of Object.entries(species)){
          if(!parts.length)continue;
          const sg=new THREE.Group();parts.forEach(p=>sg.add(p.clone(true)));
          for(const [deg,radius,depY,cnt,spread] of SCHOOL_PLAN[k]||[]){
            const bear=deg*Math.PI/180;
            for(let i=0;i<cnt;i++){
              const f=prep(sg.clone(true),rand(0.7,1.15));
              f.userData={
                // school anchor (slowly drifting orbit), fish offset inside it
                bear, radius, baseY:depY,
                off:new THREE.Vector3(rand(-spread,spread),rand(-spread*0.35,spread*0.35),rand(-spread,spread)),
                drift:rand(0,6.28), driftSp:rand(0.05,0.14),
                wob:rand(0,6.28), wobSp:rand(0.6,1.5), wobAmp:rand(0.12,0.3),
                sp:rand(0.015,0.035)   // school orbit speed (rad/s)
              };
              G.add(f);fish.push(f);
            }
          }
        }
        let t0=performance.now(),last=t0;
        (function loop(){
          requestAnimationFrame(loop);
          const now=performance.now(),t=(now-t0)/1000,dt=Math.min((now-last)/1000,0.05);last=now;
          // splash update
          if(splashLife>0){
            splashLife-=dt*0.55;
            const pos=splashGeo.attributes.position.array;
            for(let i=0;i<SPLASH_N;i++){
              splashVel[i].y-=9.8*dt;
              pos[i*3]+=splashVel[i].x*dt;pos[i*3+1]+=splashVel[i].y*dt;pos[i*3+2]+=splashVel[i].z*dt;
              if(pos[i*3+1]<0.05){pos[i*3+1]=0.05;splashVel[i].y*=-0.15;splashVel[i].x*=0.7;splashVel[i].z*=0.7;}
            }
            splashGeo.attributes.position.needsUpdate=true;
            splashMat.opacity=Math.max(0,splashLife*1.0);
          }
          for(const r of ripples){
            if(r.life>0){r.life-=dt*0.5;
              if(r.life<=0){r.mesh.visible=false;r.mesh.material.opacity=0;}
              else{r.mesh.scale.setScalar(0.8+(1-r.life)*13);r.mesh.material.opacity=r.life*0.65;}}
          }
          if(shark){
            const u=shark.userData;
            u.a+=dt*u.sp;
            const ang=u.a,baseY=-1.9;
            if(u.breachP<0){
              u.nextBreach-=dt;
              if(u.nextBreach<=0){u.breachP=0;u.nextBreach=rand(10,17);}
            }
            let y=baseY,pitch=0;
            if(u.breachP>=0){
              u.breachP+=dt/2.9;
              const p=u.breachP;
              if(p>=1){u.breachP=-1;}
              else{
                const rise=Math.min(p/0.42,1),fall=Math.max((p-0.42)/0.58,0);
                const up=1-Math.pow(1-rise,2.4),down=Math.pow(fall,1.9);
                const arc=Math.max(0,up-down);
                y=baseY+arc*3.2;
                pitch=-Math.cos(Math.PI*Math.min(p,1))*0.34;
              }
            }else{
              const bob=Math.sin(t*1.1)*0.22;
              y=baseY+bob*0.5+1.55;
              pitch=Math.sin(t*1.1)*0.05;
            }
            const rX=Math.cos(ang)*u.r,rZ=Math.sin(ang)*u.r*0.72-6;
            shark.position.set(rX,y,rZ);
            shark.rotation.order='YXZ';
            shark.rotation.y=-ang+Math.PI/2;
            shark.rotation.x=pitch;   // pitch about local X (model faces -X) => nose up/down, never rolls
            // water entry detection
            if(u.prevH!==undefined){
              if(u.prevH>0.5&&y<=0.5){spawnSplash(rX,rZ,1.35);}   // re-entry: big burst
              else if(u.prevH<=0.5&&y>0.5){spawnSplash(rX,rZ,0.9);} // takeoff: smaller burst
            }
            u.prevH=y;
          }
          for(const f of fish){
            const u=f.userData;
            // school slowly circles the scene; individual fish keeps its offset inside the school
            const ang=u.bear+t*u.sp;
            const drift=Math.sin(t*u.driftSp+u.drift)*2.2;           // school-wide meander
            const cx=Math.cos(ang)*(u.radius+drift);
            const cz=Math.sin(ang)*(u.radius+drift)*0.75-6;
            const cy=u.baseY+Math.sin(t*u.wobSp*0.4+u.drift)*0.5;   // slow vertical migration
            const wob=Math.sin(t*u.wobSp+u.wob)*u.wobAmp;
            f.position.set(cx+u.off.x+wob, cy+u.off.y+wob*0.5, cz+u.off.z);
            // face along the orbit tangent
            f.rotation.y=-ang+Math.PI/2+Math.sin(t*u.wobSp+u.wob)*0.14;
            f.rotation.z=Math.sin(t*u.wobSp*1.3+u.wob)*0.06;
          }
        })();
        console.log("[fauna] ready: shark "+SHARK_LEN+"u + "+fish.length+" fish (plan keys: "+Object.keys(SCHOOL_PLAN).join("/")+")");
      }catch(err){console.error("[fauna] INIT ERROR",err&&(err.message||err));}
    });
  }
  requestAnimationFrame(wait);
});