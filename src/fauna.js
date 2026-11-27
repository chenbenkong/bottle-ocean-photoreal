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
    const SPECIES_FAST=SPECIES.slice(0,6);
    const fishLoad=kitReady.then(()=>{
      if(!loadFish)return null;
      return loadFish("assets/fishkit/fish/",SPECIES_FAST)
        .then(()=>{console.log("[fauna] fast batch ready: "+SPECIES_FAST.join(","));})
        .catch(e=>{console.error("[fauna] fast batch fail",e&&e.message);});
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
        // full water column: surface -0.5 down to just above the seabed (-7.2)
        const REGION={rMin:4,rMax:30,yMin:-6.9,yMax:-0.5};  // keep inside the visible band
        // depth bands weighted toward the bottom (seabed sits at ~-7.2)
        // repeated entries act as weights: 4x bottom, 2x lower-mid, 1x mid, 1x upper
        const BANDS=[
          [-6.9,-6.0],[-6.9,-6.0],[-6.9,-6.0],[-6.9,-6.0],   // bottom hugging
          [-6.2,-4.8],[-6.2,-4.8],                            // lower mid
          [-5.0,-3.0],                                        // mid
          [-3.0,-0.8]                                         // upper only 1/8
        ];
        const SPAWN_COUNTS={madai:7,saba:8,aji:7,buri:6,kurodai:6,magochi:6,kasago:5,mebaru:5,sawara:5,hiramasa:5,kihada:5,isaki:5,isaki_young:5,kamasu:5,katakuchi:4,kuchibuto:4,onagagure:4,shibudai:4,suzuki:4,tachiuo:4};
        // ---- simple direct spawn (no pool): fixed set of fish, cheap updates ----
        const fish=[];
        function spawnSpecies(list){
          for(const sp of list){
            const cnt=SPAWN_COUNTS[sp]||6;
            for(let i=0;i<cnt;i++){
              let inst=null;
              try{inst=createFish(sp,rand(80,150));}catch(e){continue;}
              if(!inst)continue;
              const o=inst.object;
              const b0=BANDS[Math.floor(Math.random()*BANDS.length)];
              const rad0=rand(REGION.rMin+3,REGION.rMax-6), ang0=rand(0,Math.PI*2);
              o.position.set(Math.cos(ang0)*rad0, rand(b0[0],b0[1]), Math.sin(ang0)*rad0*0.85-8);
              o.userData={inst,heading:rand(0,Math.PI*2),speed:rand(0.7,1.6),
                turnRate:rand(-0.28,0.28),turnTimer:rand(2,6),band:b0,
                yTarget:rand(b0[0],b0[1]),motionTimer:rand(10,22),
                motionIdx:Math.floor(Math.random()*MOTION_POOL.length)};
              try{o.userData.inst.setMotion(MOTION_POOL[o.userData.motionIdx]);}catch(e){}
              G.add(o);fish.push(o);
            }
          }
        }
        const MOTION_POOL=["swim","power","turn","range"];   // cruising only — no hover, no fishing states
        // phase 1: spawn the species already loaded (instant paint)
        spawnSpecies(SPECIES_FAST);
        // phase 2: background-load the remaining species, then spawn them
        const SPECIES_REST=SPECIES.slice(SPECIES_FAST.length,SPECIES_FAST.length+13);
        kitReady.then(()=>loadFish("assets/fishkit/fish/",SPECIES_REST))
          .then(()=>{spawnSpecies(SPECIES_REST);console.log("[fauna] phase2 +"+SPECIES_REST.length+" species, total "+fish.length);})
          .catch(e=>console.warn("[fauna] phase2 skip",e&&e.message));

        let t0=performance.now(),last=t0,u_frame=0;
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
          // real fish: forward cruising with gentle turns and soft boundary steering
          for(const o of fish){
            const u=o.userData;
            // slow turn-rate wander: change the turn rate every few seconds
            u.turnTimer-=dt;
            if(u.turnTimer<=0){u.turnTimer=rand(2.5,7);u.turnRate=rand(-0.3,0.3);}
            // soft boundary: steer back toward the region centre when too far out
            const px=o.position.x, pz=o.position.z+8;
            const rad=Math.hypot(px,pz*1.15);
            if(rad>REGION.rMax-2){
              const toCentre=Math.atan2(-px,-pz*1.15);
              let d=toCentre-u.heading;
              while(d>Math.PI)d-=Math.PI*2; while(d<-Math.PI)d+=Math.PI*2;
              u.heading+=d*Math.min(1,dt*1.6);      // steer inward
            }else{
              u.heading+=u.turnRate*dt;
            }
            // advance along heading
            const v=u.speed;
            o.position.x+=Math.cos(u.heading)*v*dt;
            o.position.z+=Math.sin(u.heading)*v*dt*0.85;
            // keep inside depth band with slow vertical drift
            const dy=u.yTarget-o.position.y;
            if(Math.abs(dy)<0.15)u.yTarget=rand(u.band[0],u.band[1]);
            o.position.y+=Math.sign(dy)*Math.min(Math.abs(dy),0.35*dt);
            // face travel direction (model faces +Z, back up)
            o.rotation.y=-u.heading+Math.PI/2;
            o.rotation.z=Math.sin(t*1.4+u.motionIdx)*0.05;
            // motion state changes (cruising set only)
            u.motionTimer-=dt;
            if(u.motionTimer<=0){
              u.motionTimer=rand(10,22);
              u.motionIdx=(u.motionIdx+1+Math.floor(Math.random()*(MOTION_POOL.length-1)))%MOTION_POOL.length;
              try{u.inst.setMotion(MOTION_POOL[u.motionIdx]);}catch(e){}
            }
            // perf tiers unchanged
            const dist=camera?o.position.distanceTo(camera.position):20;
            u.skip=(u.skip||0)+1;
            if(dist<22){ try{u.inst.update(dt);}catch(e){} }
            else if(dist<40){ if(u.skip%2===0){ try{u.inst.update(dt*2);}catch(e){} } }
            else if(u.skip%5===0){ try{u.inst.update(dt*5);}catch(e){} }
          }
        })();
        console.log("[fauna] fish "+fish.length+" | r"+REGION.rMin+"-"+REGION.rMax+" | y"+REGION.yMin+".."+REGION.yMax+" | bands "+BANDS.length+" (seabed ~-7.2)");
      }catch(err){console.error("[fauna] INIT ERROR",err&&(err.message||err));}
    });
  }
  requestAnimationFrame(wait);
});