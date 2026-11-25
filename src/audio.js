// Procedural ambient audio via Web Audio API — no external files.
// Ocean/wind bed, storm intensity, and periodic foghorn. Starts after first user gesture.
let ctx=null,started=false,muted=false,master=null;
let windGain=null,seaGain=null,hornTimer=null;
function noiseBuffer(ac,sec=3){
  const len=ac.sampleRate*sec,buf=ac.createBuffer(1,len,ac.sampleRate),d=buf.getChannelData(0);
  let last=0;for(let i=0;i<len;i++){const w=Math.random()*2-1;last=(last+0.02*w)/1.02;d[i]=last*3.2;}return buf;
}
function start(){
  if(started)return;started=true;
  try{ctx=new (window.AudioContext||window.webkitAudioContext)();}catch(e){return;}
  master=ctx.createGain();master.gain.value=muted?0:0.5;master.connect(ctx.destination);
  // filtered brown noise = sea/wind bed, looped
  const src=ctx.createBufferSource();src.buffer=noiseBuffer(ctx,4);src.loop=true;
  const lp=ctx.createBiquadFilter();lp.type="lowpass";lp.frequency.value=520;lp.Q.value=0.6;
  seaGain=ctx.createGain();seaGain.gain.value=0.18;
  src.connect(lp).connect(seaGain).connect(master);src.start();
  // higher band for wind/howling
  const src2=ctx.createBufferSource();src2.buffer=noiseBuffer(ctx,3);src2.loop=true;
  const bp=ctx.createBiquadFilter();bp.type="bandpass";bp.frequency.value=900;bp.Q.value=0.8;
  windGain=ctx.createGain();windGain.gain.value=0.0;
  src2.connect(bp).connect(windGain).connect(master);src2.start();
  // slow swell LFO on sea gain
  const lfo=ctx.createOscillator();lfo.frequency.value=0.12;const lg=ctx.createGain();lg.gain.value=0.06;
  lfo.connect(lg).connect(seaGain.gain);lfo.start();
  scheduleHorn();
  console.log("[audio] ambient started");
}
function foghorn(){
  if(!ctx||muted)return;
  const now=ctx.currentTime,o=ctx.createOscillator(),g=ctx.createGain();
  o.type="sawtooth";o.frequency.setValueAtTime(92,now);o.frequency.linearRampToValueAtTime(84,now+1.6);
  const f=ctx.createBiquadFilter();f.type="lowpass";f.frequency.value=240;
  g.gain.setValueAtTime(0,now);g.gain.linearRampToValueAtTime(0.16,now+0.25);g.gain.setValueAtTime(0.16,now+1.2);g.gain.linearRampToValueAtTime(0,now+2.0);
  o.connect(f).connect(g).connect(master);o.start(now);o.stop(now+2.1);
}
function scheduleHorn(){clearTimeout(hornTimer);hornTimer=setTimeout(()=>{foghorn();scheduleHorn();},14000+Math.random()*12000);}
function storm(amount){if(!ctx||!windGain)return;const t=ctx.currentTime;
  windGain.gain.setTargetAtTime(0.02+amount*0.32,t,0.8);
  seaGain.gain.setTargetAtTime(0.18+amount*0.22,t,0.8);
}
window.__seaAudio={start,storm,toggle(){start();var b=document.getElementById("btnAudio");muted=b?b.getAttribute("data-muted")!=="1":!muted;if(master&&ctx)master.gain.setTargetAtTime(muted?0:0.5,ctx.currentTime,0.2);return muted;},get muted(){return muted;},get ready(){return started;}};
// start on first gesture
["pointerdown","keydown"].forEach(ev=>addEventListener(ev,()=>start(),{once:true}));
// react to sea state from HUD
setInterval(()=>{
  if(!ctx)return;const s=(document.getElementById("sSea")?.textContent)||"";
  const amt=s.includes("飓风")?1:s.includes("风暴")?0.6:s.includes("涌浪")?0.25:0;
  storm(amt);
},700);