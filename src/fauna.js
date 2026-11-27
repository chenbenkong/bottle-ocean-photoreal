// Voxel ocean fauna — big shark with fin-above-water cruise + periodic breaching, plus 24 fish.
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
const rand=(a,b)=>a+Math.random()*(b-a);
window.addEventListener("load",()=>{
  function wait(){const T=window.__tideline;if(!T||!T.scene)return requestAnimationFrame(wait);init(T.scene);}
  function init(scene){
    const loader=new GLTFLoader(),G=new THREE.Group();G.name="voxel-fauna";scene.add(G);
    const load=(u)=>new Promise(res=>loader.load(u,g=>res(g.scene),undefined,()=>res(null)));
    Promise.all([load("assets/voxel_shark_fine.glb"),load("assets/voxel_fish_fine.glb")]).then(([sharkSrc,fishSrc])=>{
      if(!sharkSrc&&!fishSrc){console.warn("[fauna] voxel models missing");return;}
      function prep(src,target){
        const o=src;const bb=new THREE.Box3().setFromObject(o),sz=bb.getSize(new THREE.Vector3());
        const m=Math.max(sz.x,sz.y,sz.z)||1;const wrap=new THREE.Group();o.scale.setScalar(target/m);
        o.updateMatrixWorld(true);const bb2=new THREE.Box3().setFromObject(o),c=bb2.getCenter(new THREE.Vector3());o.position.sub(c);
        wrap.add(o);return wrap;
      }
      // shark: 2x bigger (5.5 -> 11), long cruise radius so it can surface
      let shark=null;
      const SHARK_LEN=11;
      if(sharkSrc){
        shark=prep(sharkSrc.clone(true),SHARK_LEN);
        shark.userData={a:-1.4,r:8.5,sp:.09,
          cycle:0,            // 0 = cruising, 1 = breaching
          nextBreach:6,       // seconds until first breach
          y:0, pitch:0};
        G.add(shark);
      }
      const species={orange:[],blue:[],yellow:[]};
      if(fishSrc){
        fishSrc.traverse(o=>{
          if(!o.isMesh)return;
          const n=o.name.toLowerCase();
          for(const key of Object.keys(species)) if(n.includes(key)) species[key].push(o);
        });
      }
      const fish=[];
      for(const [key,parts] of Object.entries(species)){
        if(!parts.length)continue;
        const srcGroup=new THREE.Group();
        parts.forEach(p=>{const c=p.clone(true);c.position.set(0,0,0);srcGroup.add(c);});
        for(let i=0;i<8;i++){
          const f=prep(srcGroup.clone(true),rand(0.75,1.15));
          f.userData={a:rand(0,6.28),r:rand(4,15),y:rand(-2.6,-0.8),sp:rand(.25,.5),phase:rand(0,6.28)};
          G.add(f);fish.push(f);
        }
      }
      let t0=performance.now(),last=t0;
      let breachT=-1, breachFrom=null;
      (function loop(){
        requestAnimationFrame(loop);
        const now=performance.now(),t=(now-t0)/1000,dt=Math.min((now-last)/1000,0.05);last=now;

        if(shark){
          const u=shark.userData;
          // advance cruise angle
          u.a+=dt*u.sp;
          const ang=u.a;
          const baseY=-1.9;                       // body centre when cruising deep
          // ---- breach scheduling ----
          if(breachT<0){
            u.nextBreach-=dt;
            if(u.nextBreach<=0){breachT=0;breachFrom=ang;u.nextBreach=rand(11,19);}
          }
          let y=baseY, pitch=0, extraRise=0;
          if(breachT>=0){
            breachT+=dt;
            const DUR=2.4;                        // whole breach lasts 2.4s
            const p=breachT/DUR;
            if(p>=1){breachT=-1;}
            else{
              // parabola: up then down; peak ~ +14
              const arc=Math.sin(Math.min(p,1)*Math.PI);
              y=baseY+arc*15.5;
              pitch=-Math.cos(Math.min(p,1)*Math.PI)*1.05;   // nose up then down
              extraRise=1;
            }
          }else{
            // cruising: body sits just below surface so the dorsal fin breaks water
            const bob=Math.sin(t*1.1)*0.22;
            y=baseY+bob*0.5+1.55;                 // raised: fin pokes out
            pitch=Math.sin(t*1.1)*0.05;
          }
          const rX=Math.cos(ang)*u.r, rZ=Math.sin(ang)*u.r*0.72-6;
          shark.position.set(rX,y,rZ);
          shark.rotation.y=-ang+Math.PI/2;
          shark.rotation.z=pitch;
          shark.rotation.x=Math.sin(t*2.2)*0.04*(breachT<0?1:0);
        }
        for(const f of fish){
          const u=f.userData,a=u.a+t*u.sp;
          f.position.set(Math.cos(a)*u.r,u.y+Math.sin(a*2+u.phase)*0.15,Math.sin(a)*u.r*.6-10);
          f.rotation.y=-a+Math.PI/2;
        }
      })();
      console.log("[fauna] voxel: big shark ("+SHARK_LEN+"u, breaching) + "+fish.length+" fish");
    });
  }
  requestAnimationFrame(wait);
});