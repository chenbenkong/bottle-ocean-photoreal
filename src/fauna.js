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
    const SPLASH_N=150;
    const splashGeo=new THREE.BufferGeometry();
    splashGeo.setAttribute("position",new THREE.BufferAttribute(new Float32Array(SPLASH_N*3),3));
    const splashMat=new THREE.PointsMaterial({color:0xdff2f7,size:0.5,transparent:true,opacity:0,depthWrite:false});
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
      splashLife=1;splashMat.opacity=0.95;
      const pos=splashGeo.attributes.position.array;
      for(let i=0;i<SPLASH_N;i++){
        pos[i*3]=x+(Math.random()-0.5)*1.6;pos[i*3+1]=0.2;pos[i*3+2]=z+(Math.random()-0.5)*1.6;
        const a=Math.random()*Math.PI*2,v=0.7+Math.random()*1.6*power;
        splashVel[i].set(Math.cos(a)*v*0.5,1.8+Math.random()*3*power,Math.sin(a)*v*0.5);
      }
      splashGeo.attributes.position.needsUpdate=true;
      for(const r of ripples){if(r.life<=0){r.life=1;r.mesh.position.set(x,0.12,z);r.mesh.visible=true;r.mesh.scale.setScalar(0.6);break;}}
    }

    Promise.all([load("assets/voxel_shark_fine.glb"),load("assets/voxel_fish_fine.glb")]).then(([sharkSrc,fishSrc])=>{
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
          shark.userData={a:-1.4,r:8.5,sp:.09,nextBreach:5,prevH:undefined,breachP:-1};
          G.add(shark);
        }
        // fish species split
        const species={orange:[],blue:[],yellow:[]};
        if(fishSrc)fishSrc.traverse(o=>{if(!o.isMesh)return;const n=o.name.toLowerCase();for(const k of Object.keys(species))if(n.includes(k))species[k].push(o);});
        const fish=[];
        for(const [k,parts] of Object.entries(species)){
          if(!parts.length)continue;
          const sg=new THREE.Group();parts.forEach(p=>sg.add(p.clone(true)));
          for(let i=0;i<8;i++){
            const f=prep(sg.clone(true),rand(0.75,1.15));
            f.userData={a:rand(0,6.28),r:rand(4,15),y:rand(-2.6,-0.8),sp:rand(.25,.5),phase:rand(0,6.28)};
            G.add(f);fish.push(f);
          }
        }
        let t0=performance.now(),last=t0;
        (function loop(){
          requestAnimationFrame(loop);
          const now=performance.now(),t=(now-t0)/1000,dt=Math.min((now-last)/1000,0.05);last=now;
          // splash update
          if(splashLife>0){
            splashLife-=dt*0.8;
            const pos=splashGeo.attributes.position.array;
            for(let i=0;i<SPLASH_N;i++){
              splashVel[i].y-=9.8*dt;
              pos[i*3]+=splashVel[i].x*dt;pos[i*3+1]+=splashVel[i].y*dt;pos[i*3+2]+=splashVel[i].z*dt;
              if(pos[i*3+1]<0.05){pos[i*3+1]=0.05;splashVel[i].y*=-0.15;splashVel[i].x*=0.7;splashVel[i].z*=0.7;}
            }
            splashGeo.attributes.position.needsUpdate=true;
            splashMat.opacity=Math.max(0,splashLife*0.95);
          }
          for(const r of ripples){
            if(r.life>0){r.life-=dt*0.5;
              if(r.life<=0){r.mesh.visible=false;r.mesh.material.opacity=0;}
              else{r.mesh.scale.setScalar(0.6+(1-r.life)*8);r.mesh.material.opacity=r.life*0.5;}}
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
            shark.rotation.y=-ang+Math.PI/2;
            shark.rotation.z=pitch;
            // water entry detection
            if(u.prevH!==undefined&&u.prevH>0.5&&y<=0.5){spawnSplash(rX,rZ,1.0);}
            u.prevH=y;
          }
          for(const f of fish){
            const u=f.userData,a=u.a+t*u.sp;
            f.position.set(Math.cos(a)*u.r,u.y+Math.sin(a*2+u.phase)*0.15,Math.sin(a)*u.r*.6-10);
            f.rotation.y=-a+Math.PI/2;
          }
        })();
        console.log("[fauna] ready: shark "+SHARK_LEN+"u + "+fish.length+" fish");
      }catch(err){console.error("[fauna] INIT ERROR",err&&(err.message||err));}
    });
  }
  requestAnimationFrame(wait);
});