// Interaction layer: storm / night / view, time-lapse day-night cycle.
let T=null;
function grab(){T=window.__tideline;if(!T)return requestAnimationFrame(grab);
  T.set({autopilot:false});
  const drift=document.getElementById("drift");if(drift){drift.classList.remove("on");drift.setAttribute("aria-pressed","false");const s=drift.querySelector("span");if(s)s.textContent="Camera drift off";}
  T.look(2.5,3.0,17,0,0.8,-7);
  const views=[[2.5,3.0,17],[-8,3.5,14],[1,2.2,13],[4,5,15]];let vi=0;
  const clearMode=()=>T.set({wind:2.6,waveHeight:.72,foam:.42,clouds:.24,rain:0,time:14,exposure:1.08});
  let storm=false,night=false,speed=0,tod=14;
  const timeEl=document.getElementById("sTime"),seaEl=document.getElementById("sSea"),fpsEl=document.getElementById("fps");
  const bStorm=document.getElementById("btnStorm"),bNight=document.getElementById("btnNight"),bView=document.getElementById("btnView");
  bStorm.onclick=()=>{storm=!storm;bStorm.classList.toggle("on",storm);
    if(storm){T.set({wind:8,waveHeight:1.85,foam:1,clouds:1,rain:1,exposure:.9});T.strike&&T.strike();}else{night?T.set({wind:2.2,waveHeight:.7,foam:.4,clouds:.3,rain:0,exposure:.95}):clearMode();}
  };
  bNight.onclick=()=>{night=!night;bNight.classList.toggle("on",night);
    if(night)T.set({time:22.5,clouds:.28,exposure:.95});else T.set({time:14,exposure:1.08});tod=night?22.5:14;
  };
  bView.onclick=()=>{vi=(vi+1)%views.length;const v=views[vi];T.look(v[0],v[1],v[2],0,.8,-7);};
  // optional timelapse via keyboard 1/2/3/0
  addEventListener("keydown",e=>{
    if(e.key==="1")speed=4;else if(e.key==="2")speed=12;else if(e.key==="0"||e.key==="3")speed=0;
  });
  // per-frame UI + timelapse (light: just update DOM + state occasionally)
  let last=performance.now(),acc=0,frames=0,fpsAcc=0,ownStart=performance.now();
  function loop(now){requestAnimationFrame(loop);const dt=(now-last)/1000;last=now;
    if(speed>0&&!storm){tod=(tod+dt*speed*0.12)%24;T.set({time:tod});}
    if(timeEl)timeEl.textContent=tod<6||tod>20?"子夜":tod<11?"黎明":tod<16?"正午":"黄昏";
    if(seaEl)seaEl.textContent=storm?"风暴":(T.state.waveHeight>1?"涌浪":"微澜");
    if(fpsEl){var real=window.__tidelineFps;if(real){fpsEl.textContent=real;}else if(dt>0&&dt<0.5){frames++;fpsAcc+=dt;if(fpsAcc>=1&&now-ownStart>2000){fpsEl.textContent=Math.max(1,Math.min(120,Math.round(frames/fpsAcc)));frames=0;fpsAcc=0;}}}
  }
  requestAnimationFrame(loop);
  console.log("[ctrl] interactions ready");
}
window.addEventListener("load",()=>requestAnimationFrame(grab));