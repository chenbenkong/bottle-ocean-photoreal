// Voxel ocean fauna (MC-style) — one big shark + multiple fish species, each species many individuals.
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
      // ---- shark: bigger and closer ----
      let shark=null;
      if(sharkSrc){shark=prep(sharkSrc.clone(true),5.5);shark.userData={a:0,r:7,y:-1.5,sp:.11};G.add(shark);}
      // ---- split fish GLB into 3 species by object-name prefix, then spawn many of each ----
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
        const COUNT=8;
        for(let i=0;i<COUNT;i++){
          const f=prep(srcGroup.clone(true),rand(0.75,1.15));
          f.userData={a:rand(0,6.28),r:rand(4,15),y:rand(-2.2,-0.5),sp:rand(.25,.5),phase:rand(0,6.28)};
          G.add(f);fish.push(f);
        }
      }
      let t0=performance.now();
      (function loop(){requestAnimationFrame(loop);const t=(performance.now()-t0)/1000;
        if(shark){const u=shark.userData,a=u.a+t*u.sp;shark.position.set(Math.cos(a)*u.r,u.y+Math.sin(a*2)*0.3,Math.sin(a)*u.r-6);shark.rotation.y=-a+Math.PI/2;shark.rotation.z=Math.sin(t*3)*0.05;}
        for(const f of fish){const u=f.userData,a=u.a+t*u.sp;f.position.set(Math.cos(a)*u.r,u.y+Math.sin(a*2+u.phase)*0.15,Math.sin(a)*u.r*.6-10);f.rotation.y=-a+Math.PI/2;}
      })();
      console.log("[fauna] voxel: 1 big shark, "+fish.length+" fish ("+Object.keys(species).filter(k=>species[k].length).join('/')+")");
    });
  }
  requestAnimationFrame(wait);
});