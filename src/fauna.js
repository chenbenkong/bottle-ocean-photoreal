// Fauna: real CC0 photo-based fish (fish-kit) + voxel breaching shark.
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
const rand=(a,b)=>a+Math.random()*(b-a);

window.addEventListener("load",()=>{
  function wait(){const T=window.__tideline;if(!T||!T.scene)return requestAnimationFrame(wait);init(T.scene,T.camera);}
  function init(scene,camera){
    const loader=new GLTFLoader(),G=new THREE.Group();G.name="fauna";scene.add(G);
    let loadFish=null,createFish=null,fishStats=null;
    const kitReady=import("../assets/fishkit/fish-kit.js").then(m=>{loadFish=m.loadFish;createFish=m.createFish;fishStats=m.fishStats;console.log("[fauna] fish-kit module ok");})
      .catch(e=>{console.error("[fauna] fish-kit import FAILED",e&&e.message);});
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
    // ---- real fish species (fish-kit) ----
    const SPECIES=["madai","saba","aji","buri","kurodai","magochi","kasago","mebaru","sawara","hiramasa","kihada",
                       "isaki","isaki_young","kamasu","katakuchi","kuchibuto","onagagure","shibudai","suzuki","tachiuo"];
    const fishLoad=kitReady.then(()=>{
      if(!loadFish)return null;
      return loadFish("assets/fishkit/fish/",SPECIES).then(()=>{
        if(fishStats){
          const ok=SPECIES.filter(s=>{try{return !!fishStats(s);}catch(e){return false;}});
          const bad=SPECIES.filter(s=>ok.indexOf(s)<0);
          console.log("[fauna] registered species:",ok.length+"/"+SPECIES.length, bad.length?("MISSING: "+bad.join(",")):"");
        }
      }).catch(e=>{console.error("[fauna] fishkit load fail",e&&e.message);});
    });

    Promise.all([fishLoad]).then(()=>{
      try{
        // ---- fish schools using real models ----
        // [species, bearingDeg, radius, depthY, count, spread]
        // fully scattered, no schools: each fish gets its own roaming volume
        // [species, count]  -> 3x previous total (~237 fish)
        const PLAN=[
          ["madai",7],["saba",8],["aji",7],["buri",6],["kurodai",6],["magochi",6],
          ["kasago",5],["mebaru",5],["sawara",5],["hiramasa",5],["kihada",5],
          ["isaki",5],["isaki_young",5],["kamasu",5],["katakuchi",4],["kuchibuto",4],
          ["onagagure",4],["shibudai",4],["suzuki",4],["tachiuo",4]
        ];
        // roaming volume: covers most of the sea (radius 4..34, depth -0.6..-3.4)
        const REGION={rMin:4,rMax:34,yMin:-3.4,yMax:-0.6};
        const fish=[];
        const MOTION_POOL=["swim","power","turn","hover","range"];   // cruising only — no fishing states
        for(const [sp,cnt] of PLAN){
          for(let i=0;i<cnt;i++){
            let inst=null;
            try{inst=createFish(sp,rand(75,165));}catch(e){continue;}
            if(!inst)continue;
            const o=inst.object;
            // independent roaming: each fish has its own orbit + vertical band + speed
            o.userData={
              inst,
              r:rand(REGION.rMin,REGION.rMax),
              y:rand(REGION.yMin,REGION.yMax),
              a:rand(0,Math.PI*2),
              sp:rand(0.28,0.62),              // faster cruising
              ySp:rand(0.15,0.5),
              yPh:rand(0,6.28),
              rDrift:rand(0.4,2.2),
              rDriftPh:rand(0,6.28),
              rDriftSp:rand(0.15,0.5),
              motionTimer:rand(8,18),
              motionIdx:Math.floor(Math.random()*MOTION_POOL.length)
            };
            try{o.userData.inst.setMotion(MOTION_POOL[o.userData.motionIdx]);}catch(e){}
            G.add(o);fish.push(o);
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
          // real fish: each roams independently across most of the sea
          for(const o of fish){
            const u=o.userData;
            // horizontal orbit with drifting radius
            u.a+=dt*u.sp;
            const rr=u.r+Math.sin(t*u.rDriftSp+u.rDriftPh)*u.rDrift;
            const cx=Math.cos(u.a)*rr, cz=Math.sin(u.a)*rr*0.85-8;
            // vertical band with slow bobbing
            const cy=u.y+Math.sin(t*u.ySp+u.yPh)*0.6;
            o.position.set(cx,cy,cz);
            // face travel direction
            o.rotation.y=-u.a+Math.PI/2;
            o.rotation.z=Math.sin(t*u.ySp*1.3+u.yPh)*0.08;
            // switch motion periodically so fish visibly change behaviour
            u.motionTimer-=dt;
            if(u.motionTimer<=0){
              u.motionTimer=rand(10,22);
              u.motionIdx=(u.motionIdx+1+Math.floor(Math.random()*(MOTION_POOL.length-1)))%MOTION_POOL.length;
              try{u.inst.setMotion(MOTION_POOL[u.motionIdx]);}catch(e){}
            }
            // perf tiers: near=every frame, mid=1/2, far=1/4, beyond=skip
            const dist=camera?o.position.distanceTo(camera.position):20;
            u.skip=(u.skip||0)+1;
            if(dist<18){ try{u.inst.update(dt);}catch(e){} }
            else if(dist<36){ if(u.skip%2===0){ try{u.inst.update(dt*2);}catch(e){} } }
            else if(dist<60){ if(u.skip%4===0){ try{u.inst.update(dt*4);}catch(e){} } }
          }
        })();
        console.log("[fauna] scattered real fish: "+fish.length+" individuals, region r"+REGION.rMin+"-"+REGION.rMax+", y"+REGION.yMin+"-"+REGION.yMax);
      }catch(err){console.error("[fauna] INIT ERROR",err&&(err.message||err));}
    });
  }
  requestAnimationFrame(wait);
});