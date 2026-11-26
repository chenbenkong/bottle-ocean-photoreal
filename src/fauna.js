// Voxel ocean fauna (MC-style block critters) from Blender-built GLBs.
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const rand=(a,b)=>a+Math.random()*(b-a);
window.addEventListener("load",()=>{
  function wait(){const T=window.__tideline;if(!T||!T.scene)return requestAnimationFrame(wait);init(T.scene);}
  function init(scene){
    const loader=new GLTFLoader(),G=new THREE.Group();G.name="voxel-fauna";scene.add(G);
    const load=(u)=>new Promise(res=>loader.load(u,g=>res(g.scene),undefined,()=>res(null)));
    Promise.all([load("assets/voxel_shark.glb"),load("assets/voxel_fish.glb")]).then(([sharkSrc,fishSrc])=>{
      if(!sharkSrc&&!fishSrc){console.warn("[fauna] voxel models missing");return;}
      // normalize helper: scale by bounding box to target length
      function prep(src,target){
        const o=src.clone(true);const bb=new THREE.Box3().setFromObject(o),sz=bb.getSize(new THREE.Vector3());
        const m=Math.max(sz.x,sz.y,sz.z)||1;o.scale.setScalar(target/m);
        const bb2=new THREE.Box3().setFromObject(o),c=bb2.getCenter(new THREE.Vector3());o.position.sub(c);
        const wrap=new THREE.Group();wrap.add(o);return wrap;
      }
      // shark
      let shark=null;
      if(sharkSrc){shark=prep(sharkSrc,2.8);shark.userData={a:0,r:10,y:-1.2,sp:.13};G.add(shark);}
      // fish: the GLB has 3 species stacked along Y; split into 3 groups by cloning and offsetting
      const fish=[];
      if(fishSrc){
        // three species are at oy 0,3,6 units in source; clone whole and recolor not possible, so place 3 copies then translate
        for(let k=0;k<3;k++){
          const f=prep(fishSrc,0.9);f.userData={a:Math.random()*6.28,r:rand(5,14),y:-0.8-Math.random()*0.8,sp:rand(.25,.45)};
          G.add(f);fish.push(f);
        }
      }
        let t0=performance.now();
      (function loop(){requestAnimationFrame(loop);const t=(performance.now()-t0)/1000;
        if(shark){const u=shark.userData,a=u.a+t*u.sp;shark.position.set(Math.cos(a)*u.r,u.y+Math.sin(a*2)*0.3,Math.sin(a)*u.r-8);shark.rotation.y=-a+Math.PI/2;shark.rotation.z=Math.sin(t*3)*0.05;}
        for(const f of fish){const u=f.userData,a=u.a+t*u.sp;f.position.set(Math.cos(a)*u.r,u.y+Math.sin(a*2)*0.12,Math.sin(a)*u.r*.6-12);f.rotation.y=-a+Math.PI/2;}
      })();
      console.log("[fauna] voxel: "+(shark?1:0)+" shark, "+fish.length+" fish shoals");
    });
  }
  requestAnimationFrame(wait);
});