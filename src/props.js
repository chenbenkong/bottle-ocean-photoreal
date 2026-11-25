// Extra sea props injected into tideline's scene: fleet of boats, buoys, birds, whale.
import * as THREE from "three";
window.addEventListener("load", () => {
  function wait(){const T=window.__tideline;if(!T||!T.scene)return requestAnimationFrame(wait);inject(T);}
  function inject(T){
    const rand=(a,b)=>a+Math.random()*(b-a);const scene=T.scene, G=new THREE.Group();G.name="extra-props";scene.add(G);
    const box=new THREE.BoxGeometry(1,1,1);
    const M=(c,r=.8,m=.02)=>new THREE.MeshStandardMaterial({color:c,roughness:r,metalness:m});
    const wood=M(0x6b4a2e),sail=M(0xe8e0cc,.9),hull=M(0x4a3526),red=M(0xb04034),brass=M(0xc9a24a,.35,.8);
    function vb(g,c,x,y,z,sx,sy,sz,mat){const o=new THREE.Mesh(box,mat||M(c));o.position.set(x,y,z);o.scale.set(sx,sy,sz);o.castShadow=true;g.add(o);return o;}
    // small sailing boats scattered across the visible sea, each with hull + mast + sail
    const boats=[];
    const spots=[[-13,-9,1.0],[10,-16,1.3],[-20,-26,1.6],[16,-30,1.1],[-6,-38,1.4],[24,-44,1.7]];
    for(const [x,z,s] of spots){
      const b=new THREE.Group();b.position.set(x,0,z);b.scale.setScalar(s);
      vb(b,0,0,-0.1,0,2.6,.5,.9,hull);vb(b,0,0,.15,0,2.2,.12,.8,wood);
      const mast=new THREE.Mesh(new THREE.CylinderGeometry(.05,.06,2.2,8),wood);mast.position.y=1.2;b.add(mast);
      const sh=new THREE.Shape();sh.moveTo(-0.7,-0.55);sh.lineTo(0.7,-0.55);sh.lineTo(0.0,0.85);sh.closePath();
      const sg=new THREE.ShapeGeometry(sh);const sa=new THREE.Mesh(sg,new THREE.MeshStandardMaterial({color:Math.random()>.6?0xb04034:0xe8e0cc,roughness:.9,side:THREE.DoubleSide}));sa.position.y=1.15;b.add(sa);
      const jib=new THREE.Shape();jib.moveTo(0.05,-0.5);jib.lineTo(0.75,-0.5);jib.lineTo(0.08,0.5);jib.closePath();const jm=new THREE.Mesh(new THREE.ShapeGeometry(jib),sa.material);jm.position.set(0.25,0.95,.05);b.add(jm);
      b.userData={baseY:0,phase:Math.random()*6.28,drift:rand(.05,.15)};
      G.add(b);boats.push(b);
    }
    // buoy cluster
    const buoys=[];
    for(let i=0;i<7;i++){
      const b=new THREE.Group();b.position.set(rand(-24,24),0,rand(-40,-6));
      vb(b,0,0,.25,0,.28,.5,.28,i%2?red:M(0xe0d8c4));vb(b,0,0,.52,0,.12,.14,.12,brass);
      b.userData={phase:Math.random()*6.28};G.add(b);buoys.push(b);
    }
    // seabirds circling above
    const birds=[];
    for(let i=0;i<10;i++){
      const g=new THREE.Group();vb(g,0,0,0,0,.22,.09,.34,M(0xf2f0e8));
      const wl=vb(g,0,-.3,.02,0,.32,.03,.12,M(0xe8e6df)),wr=vb(g,0,.3,.02,0,.32,.03,.12,M(0xe8e6df));
      g.userData={a:Math.random()*6.28,r:rand(6,16),y:rand(2,6),sp:rand(.2,.5),wl,wr};G.add(g);birds.push(g);
    }
    // whale surfacing periodically in the distance
    const whale=new THREE.Group();whale.position.set(-18,-3,-34);
    vb(whale,0,0,0,0,3.2,1.1,1.4,M(0x3f5a72));vb(whale,0,-1.7,.1,0,1.2,.8,.9,M(0x355066));
    vb(whale,0,1.8,0,0,.3,1.2,1.2,M(0x355066));
    G.add(whale);
    // fish shoals underwater (InstancedMesh) + a patrolling shark
    const fishGeo=new THREE.ConeGeometry(0.12,0.4,5);fishGeo.rotateX(Math.PI/2);
    const shoals=[];
    for(let s=0;s<3;s++){
      const cnt=26, im=new THREE.InstancedMesh(fishGeo,M(s===1?0x9fd8c8:0xbfe4d8,.6),cnt);
      const cen=[rand(-16,16),rand(-2.6,-0.8),rand(-28,-8)];const ps=[];
      for(let i=0;i<cnt;i++)ps.push([cen[0]+rand(-2.5,2.5),cen[1]+rand(-0.7,0.7),cen[2]+rand(-2.5,2.5),rand(-3,3)]);
      im.userData={cen,ps,phase:rand(0,6.28),sp:rand(.2,.4)};G.add(im);shoals.push(im);
    }
    const shark=new THREE.Group();
    const body=vb(shark,0,0,0,0,3.6,.9,1.0,M(0x5b7280,.7));
    vb(shark,0,-1.9,0,0,.5,.9,1.4,M(0x4e626e,.7)); // tail fin
    vb(shark,0,.2,.55,0,.9,.15,.5,M(0x8fa4ac,.7)); // dorsal-ish
    const finL=vb(shark,0,-.1,-.9,0,1.1,.08,.5,M(0x6d8490,.7));
    const finR=vb(shark,0,-.1,.9,0,1.1,.08,.5,M(0x6d8490,.7));
    shark.userData={a:rand(0,6.28),r:rand(9,18),y:-1.9,sp:.16};
    G.add(shark);
    // animate
    let t0=performance.now();
    (function loop(){requestAnimationFrame(loop);const t=(performance.now()-t0)/1000;
      for(const b of boats){const u=b.userData;b.position.y=Math.sin(t*1.3+u.phase)*.18;b.rotation.z=Math.sin(t+u.phase)*.05;b.position.x+=u.drift*0.004;}
      for(const b of buoys){b.position.y=Math.sin(t*1.7+b.userData.phase)*.22;b.rotation.z=Math.sin(t*1.1+b.userData.phase)*.12;}
      for(const g of birds){const u=g.userData,a=u.a+t*u.sp;g.position.set(Math.cos(a)*u.r,u.y+Math.sin(a*2)*.25,Math.sin(a)*u.r*.6-16);g.rotation.y=-a+Math.PI/2;const f=Math.sin(t*6+u.a)*.4;u.wl.rotation.z=f;u.wr.rotation.z=-f;}
      for(const im of shoals){const u=im.userData,d=new THREE.Object3D();const cx=u.cen[0]+Math.sin(t*u.sp+u.phase)*3;
        for(let i=0;i<u.ps.length;i++){const p=u.ps[i];d.position.set(cx+p[0]+Math.sin(t*2+i)*.1,p[1]+Math.sin(t*1.3+i)*.08,p[2]);d.rotation.set(0,p[3]+Math.sin(t*.5)*.3,0);d.scale.set(1,1,1);d.updateMatrix();im.setMatrixAt(i,d.matrix);}im.instanceMatrix.needsUpdate=true;}
      const su=shark.userData,sa=su.a+t*su.sp;shark.position.set(Math.cos(sa)*su.r,su.y+Math.sin(sa*2)*.4,Math.sin(sa)*su.r-14);shark.rotation.y=-sa+Math.PI/2;
      const wp=(t%20)/20;whale.visible=wp>.5&&wp<.72;if(whale.visible){const q=(wp-.5)/.22;whale.position.y=-3+Math.sin(q*Math.PI)*4.2;whale.rotation.z=(q-.5)*1.1;}
    })();
    console.log("[props] "+boats.length+" boats, "+buoys.length+" buoys, "+birds.length+" birds, 3 fish shoals, 1 shark injected");
  }
  requestAnimationFrame(wait);
});