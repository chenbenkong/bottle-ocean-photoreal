// Fauna: real CC0 photo-based fish (fish-kit) + voxel breaching shark.
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { loadFish, createFish } from "../assets/fishkit/fish-kit.js";
const rand=(a,b)=>a+Math.random()*(b-a);

window.addEventListener("load",()=>{
  function wait(){const T=window.__tideline;if(!T||!T.scene)return requestAnimationFrame(wait);init(T.scene);}
  function init(scene){
    const loader=new GLTFLoader(),G=new THREE.Group();G.name="fauna";scene.add(G);
    const load=(u)=>new Promise(res=>loader.load(u,g=>res(g.scene),undefined,e=>{console.error("[fauna] fail",u);res(null);}));

    // ---- splash / ripple state ----
    const SPLASH_N=320;
    const splashGeo=new THREE.BufferGeometry();
    splashGeo.setAttribute("position",new THREE.BufferAttribute(new Float32Array(SPLASH_N*3),3));
    const splashMat=new THREE.PointsMaterial({color:0xdff2f7,size:0.95,transparent:true,opacity:0,depthWrite:false});
    G.add(new THREE.Points(splashGeo,splashMat));
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
      for(const r of ripples){if(r.life<=0){r.life=1;r.mesh.position.set(x,0.12,z);r.mesh.visible=true;r.mesh.scale.setScalar(0.8);break;}}
    }

    // ---- shark (voxel) ----
    const SHARK_LEN=11;
    const sharkP=load("assets/voxel_shark_ultra.glb");
    // ---- real fish species (fish-kit) ----
    const SPECIES=["madai","buri","saba","aji","kurodai","magochi","kasago","mebaru","suzuki","sawara","hiramasa","kihada"];
    const fishLoad=loadFish("assets/fishkit/fish/",SPECIES).catch(e=>{console.error("[fauna] fishkit load fail",e);});

    Promise.all([sharkP,fishLoad]).then(([sharkSrc])=>{
      try{
        // shark
        let shark=null;
        if(sharkSrc){
          const bb=new THREE.Box3().setFromObject(sharkSrc),sz=bb.getSize(new THREE.Vector3());
          const m=Math.max(sz.x,sz.y,sz.z)||1;
          sharkSrc.scale.setScalar(SHARK_LEN/m);sharkSrc.updateMatrixWorld(true);
          const c=new THREE.Box3().setFromObject(sharkSrc).getCenter(new THREE.Vector3());
          sharkSrc.position.sub(c);
          shark=new THREE.Group();shark.add(sharkSrc);
          shark.userData={a:-1.4,r:14.5,sp:.16,nextBreach:5,prevH:undefined,breachP:-1};
          G.add(shark);
        }

        // ---- fish schools using real models ----
        // [species, bearingDeg, radius, depthY, count, spread]
        const PLAN=[
          ["madai",   -35,  6.5, -1.0, 7, 1.8],["saba",    120, 12.0, -2.1, 10, 2.4],["aji",     210,  9.0, -1.5, 9, 2.0],
          ["buri",     10,  8.0, -1.9, 6, 2.0],["kurodai", 160, 15.0, -2.6, 8, 2.6],["kasago",  285,  7.0, -0.9, 6, 1.6],
          ["suzuki",   75, 10.5, -1.3, 7, 1.9],["magochi", 250, 13.5, -2.3, 8, 2.3],["mebaru",  -80, 11.5, -1.7, 6, 1.9],
          ["sawara",   45,  9.5, -1.6, 6, 1.8],["hiramasa",195, 14.5, -2.0, 7, 2.2],["kihada",  320,  8.5, -1.1, 6, 1.8]
        ];
        const fish=[];
        for(const [sp,deg,radius,depY,cnt,spread] of PLAN){
          let proto=null;
          try{proto=createFish(sp,120);}catch(e){continue;}
          if(!proto)continue;
          const bear=deg*Math.PI/180;
          for(let i=0;i<cnt;i++){
            const inst=createFish(sp,rand(90,160));
            if(!inst)continue;
            try{inst.setMotion('swim');}catch(e){}
            inst.object.userData={
              bear,radius,baseY:depY,inst,
              off:new THREE.Vector3(rand(-spread,spread),rand(-spread*0.35,spread*0.35),rand(-spread,spread)),
              drift:rand(0,6.28),driftSp:rand(0.05,0.14),
              wob:rand(0,6.28),wobSp:rand(0.6,1.5),wobAmp:rand(0.12,0.3),
              sp:rand(0.015,0.035)
            };
            G.add(inst.object);fish.push(inst);
          }
        }

        let t0=performance.now(),last=t0;
        (function loop(){
          requestAnimationFrame(loop);
          const now=performance.now(),t=(now-t0)/1000,dt=Math.min((now-last)/1000,0.05);last=now;
          // splash
          if(splashLife>0){
            splashLife-=dt*0.55;
            const pos=splashGeo.attributes.position.array;
            for(let i=0;i<SPLASH_N;i++){
              splashVel[i].y-=9.8*dt;
              pos[i*3]+=splashVel[i].x*dt;pos[i*3+1]+=splashVel[i].y*dt;pos[i*3+2]+=splashVel[i].z*dt;
              if(pos[i*3+1]<0.05){pos[i*3+1]=0.05;splashVel[i].y*=-0.15;splashVel[i].x*=0.7;splashVel[i].z*=0.7;}
            }
            splashGeo.attributes.position.needsUpdate=true;
            splashMat.opacity=Math.max(0,splashLife);
          }
          for(const r of ripples){
            if(r.life>0){r.life-=dt*0.5;
              if(r.life<=0){r.mesh.visible=false;r.mesh.material.opacity=0;}
              else{r.mesh.scale.setScalar(0.8+(1-r.life)*13);r.mesh.material.opacity=r.life*0.65;}}
          }
          // shark
          if(shark){
            const u=shark.userData;
            u.a+=dt*u.sp;
            const ang=u.a,baseY=-1.9;
            if(u.breachP<0){u.nextBreach-=dt;if(u.nextBreach<=0){u.breachP=0;u.nextBreach=rand(10,17);}}
            let y=baseY,pitch=0;
            if(u.breachP>=0){
              u.breachP+=dt/2.9;const p=u.breachP;
              if(p>=1){u.breachP=-1;}
              else{
                const rise=Math.min(p/0.42,1),fall=Math.max((p-0.42)/0.58,0);
                const arc=Math.max(0,(1-Math.pow(1-rise,2.4))-Math.pow(fall,1.9));
                y=baseY+arc*3.2;pitch=-Math.cos(Math.PI*Math.min(p,1))*0.34;
              }
            }else{
              const bob=Math.sin(t*1.1)*0.22;y=baseY+bob*0.5+1.55;pitch=Math.sin(t*1.1)*0.05;
            }
            const rX=Math.cos(ang)*u.r,rZ=Math.sin(ang)*u.r*0.72-6;
            shark.position.set(rX,y,rZ);
            shark.rotation.order='YXZ';
            shark.rotation.y=-ang+Math.PI/2;
            shark.rotation.x=pitch;
            if(u.prevH!==undefined){
              if(u.prevH>0.5&&y<=0.5)spawnSplash(rX,rZ,1.35);
              else if(u.prevH<=0.5&&y>0.5)spawnSplash(rX,rZ,0.9);
            }
            u.prevH=y;
          }
          // real fish
          for(const inst of fish){
            const u=inst.object.userData;
            const ang=u.bear+t*u.sp;
            const drift=Math.sin(t*u.driftSp+u.drift)*2.2;
            const cx=Math.cos(ang)*(u.radius+drift);
            const cz=Math.sin(ang)*(u.radius+drift)*0.75-6;
            const cy=u.baseY+Math.sin(t*u.wobSp*0.4+u.drift)*0.5;
            const wob=Math.sin(t*u.wobSp+u.wob)*u.wobAmp;
            inst.object.position.set(cx+u.off.x+wob,cy+u.off.y+wob*0.5,cz+u.off.z);
            inst.object.rotation.y=-ang+Math.PI/2+Math.sin(t*u.wobSp+u.wob)*0.14;
            try{inst.update(dt);}catch(e){}
          }
        })();
        console.log("[fauna] real fish-kit: "+fish.length+" fish across "+new Set(fish.map(f=>f.object.userData.bear)).size+" schools (CC0)");
      }catch(err){console.error("[fauna] INIT ERROR",err&&(err.message||err));}
    });
  }
  requestAnimationFrame(wait);
});