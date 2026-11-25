// Interaction layer: storm / hurricane / night / view + time-lapse + FPS HUD.
let T=null;
function grab(){T=window.__tideline;if(!T)return requestAnimationFrame(grab);
  T.set({autopilot:false});
  const drift=document.getElementById("drift");
  if(drift){drift.classList.remove("on");drift.setAttribute("aria-pressed","false");const s=drift.querySelector("span");if(s)s.textContent="Camera drift off";}
  T.look(2.5,3.0,17,0,0.8,-7);
  const views=[[2.5,3.0,17],[-8,3.5,14],[1,2.2,13],[4,5,15],[0,0.35,10],[-3,-0.6,7]];let vi=0;
  let storm=false,hurricane=false,night=false,speed=0,tod=14;
  const timeEl=document.getElementById("sTime"),seaEl=document.getElementById("sSea"),fpsEl=document.getElementById("fps");
  const bStorm=document.getElementById("btnStorm"),bHur=document.getElementById("btnHurricane"),bNight=document.getElementById("btnNight"),bView=document.getElementById("btnView");

  function applyMode(strike){
    let p;
    if(hurricane){
      // hurricane: waveHeight bypasses the slider cap — this is the giant-swell lever
      p={wind:8,waveHeight:storm?4.0:3.2,foam:1,clouds:1,rain:storm?1:.9,exposure:.86};
    }else if(storm){
      p={wind:8,waveHeight:1.85,foam:1,clouds:1,rain:1,exposure:.9};
    }else if(night){
      p={wind:2.2,waveHeight:.7,foam:.4,clouds:.3,rain:0,exposure:.95};
    }else{
      p={wind:2.6,waveHeight:.72,foam:.42,clouds:.24,rain:0,exposure:1.08};
    }
    T.set(p);
    if(strike&&T.strike)T.strike();
  }

  bStorm.onclick=()=>{storm=!storm;bStorm.classList.toggle("on",storm);applyMode(true);};
  if(bHur)bHur.onclick=()=>{hurricane=!hurricane;bHur.classList.toggle("on",hurricane);applyMode(true);};
  bNight.onclick=()=>{night=!night;bNight.classList.toggle("on",night);tod=night?22.5:14;T.set({time:tod});applyMode(false);};
  bView.onclick=()=>{vi=(vi+1)%views.length;const v=views[vi];var ty=v[1]<0?-1.2:0.8;T.look(v[0],v[1],v[2],0,ty,-7);};
  var pv=new URLSearchParams(location.search).get("view");if(pv&&views[+pv]){var v=views[+pv];vi=+pv;var ty=v[1]<0?-1.2:0.8;T.look(v[0],v[1],v[2],0,ty,-7);}

  addEventListener("keydown",e=>{
    if(e.code==="Space"&&!e.repeat){e.preventDefault();storm=true;bStorm.classList.add("on");applyMode(true);}
    if(e.key==="1")speed=4;else if(e.key==="2")speed=12;else if(e.key==="0"||e.key==="3")speed=0;
  });
  addEventListener("keyup",e=>{if(e.code==="Space"){e.preventDefault();storm=false;bStorm.classList.remove("on");applyMode(false);}});

  let last=performance.now(),acc=0,frames=0,fpsAcc=0,ownStart=performance.now();
  function loop(now){requestAnimationFrame(loop);const dt=(now-last)/1000;last=now;
    if(speed>0&&!storm&&!hurricane){tod=(tod+dt*speed*0.12)%24;T.set({time:tod});}
    if(timeEl)timeEl.textContent=tod<6||tod>20?"子夜":tod<11?"黎明":tod<16?"正午":"黄昏";
    if(seaEl)seaEl.textContent=hurricane?(storm?"飓风+风暴":"飓风"):storm?"风暴":(T.state.waveHeight>1?"涌浪":"微澜");
    if(fpsEl){var real=window.__tidelineFps;if(real){fpsEl.textContent=real;}else if(dt>0&&dt<0.5){frames++;fpsAcc+=dt;if(fpsAcc>=1&&now-ownStart>2000){fpsEl.textContent=Math.max(1,Math.min(120,Math.round(frames/fpsAcc)));frames=0;fpsAcc=0;}}}
  }
  requestAnimationFrame(loop);
  console.log("[ctrl] storm + hurricane ready");
}
window.addEventListener("load",()=>requestAnimationFrame(grab));