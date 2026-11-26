// Real 3D shark & fish from GLB models (Animated Fish Bundle, GPL-3.0; see README).
// Loads asynchronously, normalizes scale, clones into a swimming shoal + patrolling shark.
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import * as SkeletonUtils from "three/addons/utils/SkeletonUtils.js";

window.addEventListener("load",()=>{
  function wait(){const T=window.__tideline;if(!T||!T.scene)return requestAnimationFrame(wait);init(T.scene);}
  function init(scene){
    const loader=new GLTFLoader(),G=new THREE.Group();G.name="real-fauna";scene.add(G);
    const load=(url)=>new Promise(res=>loader.load(url,g=>res(g.scene),undefined,()=>res(null)));
    const base="assets/";
    const files={shark:"shark_v3.glb",fish:["barramundi.glb","BlueTang.glb","fish0.glb","fish1.glb","fish2.glb","fish3.glb","fish4.glb"]};
    Promise.all([load(base+files.shark),...files.fish.map(f=>load(base+f))]).then(models=>{
      const sharkSrc=models[0],fishSrcs=models.slice(1).filter(Boolean);
      if(!sharkSrc&&!fishSrcs.length){console.warn("[fauna] no models loaded");return;}
      // normalize a model to a target length along X, return a Group
      function cloneNorm(src,target){
        const o=SkeletonUtils.clone(src);
        // These GLBs use a 100x root node; bypass SkinnedMesh bbox quirk by scaling the clone directly.
        const wrap=new THREE.Group();o.scale.multiplyScalar(0.01);wrap.add(o);
        wrap.userData.raw=o;wrap.userData.target=target;
        return wrap;
      }
      function finishScale(wrap){
        const o=wrap.userData.raw,bb=new THREE.Box3().setFromObject(o);
        if(bb.isEmpty())return;
        const sz=bb.getSize(new THREE.Vector3()),m=Math.max(sz.x,sz.y,sz.z);
        if(m>0.001){const s=wrap.userData.target/m;o.scale.multiplyScalar(s);}
        const ctr=bb.getCenter(new THREE.Vector3());o.position.sub(ctr.multiplyScalar(1));
      }
      // Shark: one large, patrolling beneath the surface
      let shark=null;
      if(sharkSrc){shark=cloneNorm(sharkSrc,3.4);finishScale(shark);shark.userData={a:0,r:6,y:-0.9,sp:.12};G.add(shark);}
      // Fish shoals: several clusters of real fish with animated swimming
      const shoals=[];
      for(let k=0;k<3;k++){
        const grp=new THREE.Group(),cnt=k===0?2:7;
        for(let i=0;i<cnt;i++){
          const real=k===0;const src=fishSrcs[real?0:1+((i+k)%(fishSrcs.length-1))],f=cloneNorm(src,real?1.4:0.45+Math.random()*0.25);finishScale(f);
          f.position.set(real?(i-0.5)*2.2:(Math.random()-.5)*3,(Math.random()-.5)*1.2,(Math.random()-.5)*3);
          f.rotation.y=Math.random()*6.28;f.userData.phase=Math.random()*6.28;grp.add(f);
        }
        grp.userData={cen:[k===0?0:(Math.random()-.5)*26,-0.45-Math.random()*0.5,k===0?2:-8-Math.random()*18],phase:Math.random()*6.28,sp:.2+Math.random()*.2};
        G.add(grp);shoals.push(grp);
      }
      // animations + play GLB clips
      const mixers=[];
      [shark,...shoals.flatMap(g=>g.children)].forEach((o,i)=>{
        const src=i===0?sharkSrc:fishSrcs[i%fishSrcs.length];
        if(src&&src.animations&&src.animations.length&&o.traverse){
          const m=new THREE.AnimationMixer(o);mixers.push({m,clip:src.animations[0]});m.clipAction(src.animations[0]).play();
        }
      });
      G.traverse(o=>{if(o.isMesh&&o.material){const ms=Array.isArray(o.material)?o.material:[o.material];ms.forEach(m=>{if(m.color&&m.color.getHexString()==='000000')m.color.setHex(0x556677);if(m.emissive)m.emissive.setHex(0x101820);});}});
      let t0=performance.now();
      (function loop(){requestAnimationFrame(loop);const dt=(performance.now()-t0)/1000;
        mixers.forEach(x=>x.m.update(dt));
        if(shark){const u=shark.userData,a=u.a+dt*u.sp;shark.position.set(Math.cos(a)*u.r,u.y+Math.sin(a*2)*.4,Math.sin(a)*u.r-6);shark.rotation.y=-a+Math.PI/2;shark.rotation.z=Math.sin(a*3)*.06;}
        for(const g of shoals){const u=g.userData,cx=u.cen[0]+Math.sin(dt*u.sp+u.phase)*3;
          g.position.set(cx,u.cen[1],u.cen[2]);if(g===shoals[0]){g.position.set(0,-0.5,3);}
          g.children.forEach((f,i)=>{f.rotation.y+=Math.sin(dt*2+f.userData.phase)*.0008;});}
      })();
      console.log("[fauna] loaded real models: 1 shark, "+shoals.length+" shoals x "+shoals[0].children.length+" fish");
    });
  }
  requestAnimationFrame(wait);
});