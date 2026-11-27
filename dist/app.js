(()=>{var Vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rd=0,Hc=1,od=2;var ho=1,qa=2,or=3,Wn=0,Yt=1,ut=2,ti=0,ss=1,_s=2,Vc=3,Gc=4,ad=5;var Ui=100,ld=101,cd=102,hd=103,ud=104,dd=200,fd=201,pd=202,md=203,ha=204,ua=205,gd=206,_d=207,xd=208,vd=209,yd=210,Md=211,Sd=212,bd=213,Ed=214,da=0,fa=1,pa=2,rs=3,ma=4,ga=5,_a=6,xa=7,Wc=0,Td=1,wd=2,hn=0,Xc=1,qc=2,Yc=3,uo=4,Zc=5,Kc=6,Jc=7,Tc="attached",Ad="detached",jc=300,Wi=301,xs=302,Ya=303,Za=304,fo=306,Fi=1e3,Nn=1001,Ws=1002,Gt=1003,Ka=1004;var vs=1005;var Rt=1006,ar=1007;var Yn=1008;var bn=1009,$c=1010,Qc=1011,lr=1012,Ja=1013,Zn=1014,Cn=1015,Pn=1016,ja=1017,$a=1018,cr=1020,eh=35902,th=35899,nh=1021,ih=1022,In=1023,$n=1026,Xi=1027,Qa=1028,el=1029,qi=1030,tl=1031;var nl=1033,po=33776,mo=33777,go=33778,_o=33779,il=35840,sl=35841,rl=35842,ol=35843,al=36196,ll=37492,cl=37496,hl=37488,ul=37489,xo=37490,dl=37491,fl=37808,pl=37809,ml=37810,gl=37811,_l=37812,xl=37813,vl=37814,yl=37815,Ml=37816,Sl=37817,bl=37818,El=37819,Tl=37820,wl=37821,Al=36492,Rl=36494,Cl=36495,Pl=36283,Il=36284,vo=36285,Ll=36286;var os=2300,as=2301,ca=2302,wc=2303,Ac=2400,Rc=2401,Cc=2402,Rd=2500;var sh=0,yo=1,hr=2,Cd=3200;var Dl=0,Pd=1,Ti="",Ht="srgb",fn="srgb-linear",Pr="linear",pt="srgb";var ns=7680;var Pc=519,Id=512,Ld=513,Dd=514,Nl=515,Nd=516,Ud=517,Ul=518,Fd=519,va=35044;var rh="300 es",Gn=2e3,Xs=2001;function jf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $f(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Od(){let i=qs("canvas");return i.style.display="block",i}var gu={},Ys=null;function Ir(...i){let e="THREE."+i.shift();Ys?Ys("log",e,...i):console.log(e,...i)}function Bd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ce(...i){i=Bd(i);let e="THREE."+i.shift();if(Ys)Ys("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ge(...i){i=Bd(i);let e="THREE."+i.shift();if(Ys)Ys("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function is(...i){let e=i.join(" ");e in gu||(gu[e]=!0,Ce(...i))}function zd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var kd={[da]:fa,[pa]:_a,[ma]:xa,[rs]:ga,[fa]:da,[_a]:pa,[xa]:ma,[ga]:rs},Xn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_u=1234567,wr=Math.PI/180,ls=180/Math.PI;function Un(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function oh(i,e){return(i%e+e)%e}function Qf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ep(i,e,t){return i!==e?(t-i)/(e-i):0}function Ar(i,e,t){return(1-t)*i+t*e}function tp(i,e,t,n){return Ar(i,e,1-Math.exp(-t*n))}function np(i,e=1){return e-Math.abs(oh(i,e*2)-e)}function ip(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function sp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function op(i,e){return i+Math.random()*(e-i)}function ap(i){return i*(.5-Math.random())}function lp(i){i!==void 0&&(_u=i);let e=_u+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cp(i){return i*wr}function hp(i){return i*ls}function up(i){return(i&i-1)===0&&i!==0}function dp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pp(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var yt={DEG2RAD:wr,RAD2DEG:ls,generateUUID:Un,clamp:Je,euclideanModulo:oh,mapLinear:Qf,inverseLerp:ep,lerp:Ar,damp:tp,pingpong:np,smoothstep:ip,smootherstep:sp,randInt:rp,randFloat:op,randFloatSpread:ap,seededRandom:lp,degToRad:cp,radToDeg:hp,isPowerOfTwo:up,ceilPowerOfTwo:dp,floorPowerOfTwo:fp,setQuaternionFromProperEuler:pp,normalize:gt,denormalize:Vn},dh=class dh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dh.prototype.isVector2=!0;var he=dh,$t=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(u!==y||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*y;m<0&&(d=-d,f=-f,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){let M=Math.acos(m),S=Math.sin(M);p=Math.sin(p*M)/S,a=Math.sin(a*M)/S,l=l*p+d*a,c=c*p+f*a,h=h*p+g*a,u=u*p+y*a}else{l=l*p+d*a,c=c*p+f*a,h=h*p+g*a,u=u*p+y*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},fh=class fh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jl.copy(this).projectOnVector(e),this.sub(Jl)}reflect(e){return this.sub(Jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fh.prototype.isVector3=!0;var L=fh,Jl=new L,xu=new $t,ph=class ph{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],M=s[1],S=s[4],v=s[7],E=s[2],w=s[5],A=s[8];return r[0]=o*y+a*M+l*E,r[3]=o*m+a*S+l*w,r[6]=o*p+a*v+l*A,r[1]=c*y+h*M+u*E,r[4]=c*m+h*S+u*w,r[7]=c*p+h*v+u*A,r[2]=d*y+f*M+g*E,r[5]=d*m+f*S+g*w,r[8]=d*p+f*v+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*c-h*n)*y,e[2]=(a*n-s*o)*y,e[3]=d*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jl.makeScale(e,t)),this}rotate(e){return is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jl.makeRotation(-e)),this}translate(e,t){return is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ph.prototype.isMatrix3=!0;var Ye=ph,jl=new Ye,vu=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mp(){let i={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(s.r=Vs(s.r),s.g=Vs(s.g),s.b=Vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?Pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fn]:{primaries:e,whitePoint:n,transfer:Pr,toXYZ:vu,fromXYZ:yu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:vu,fromXYZ:yu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),i}var tt=mp();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Rs,ya=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rs===void 0&&(Rs=qs("canvas")),Rs.width=e.width,Rs.height=e.height;let s=Rs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Rs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gp=0,Zs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Un(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($l(s[o].image)):r.push($l(s[o]))}else r=$l(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function $l(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ya.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}var _p=0,Ql=new L,Qt=class i extends Xn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Nn,s=Nn,r=Rt,o=Yn,a=In,l=bn,c=i.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Un(),this.name="",this.source=new Zs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ql).x}get height(){return this.source.getSize(Ql).y}get depth(){return this.source.getSize(Ql).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fi:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case Ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fi:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case Ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=jc;Qt.DEFAULT_ANISOTROPY=1;var mh=class mh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(f+1)/2,E=(p+1)/2,w=(h+d)/4,A=(u+y)/4,_=(g+m)/4;return S>v&&S>E?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=w/n,r=A/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=_/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=A/r,s=_/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-y)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mh.prototype.isVector4=!0;var at=mh,Ma=class extends Xn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Qt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zs(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends Ma{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Lr=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sa=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xa=class Xa{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,g,y,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xa().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Cs.setFromMatrixColumn(e,0).length(),r=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,y=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d+y*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d-y*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,y=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xp,e,vp)}lookAt(e,t,n){let s=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ri.crossVectors(n,wn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ri.crossVectors(n,wn)),Ri.normalize(),Uo.crossVectors(wn,Ri),s[0]=Ri.x,s[4]=Uo.x,s[8]=wn.x,s[1]=Ri.y,s[5]=Uo.y,s[9]=wn.y,s[2]=Ri.z,s[6]=Uo.z,s[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],M=n[3],S=n[7],v=n[11],E=n[15],w=s[0],A=s[4],_=s[8],T=s[12],P=s[1],R=s[5],D=s[9],z=s[13],q=s[2],U=s[6],H=s[10],V=s[14],Y=s[3],ne=s[7],ie=s[11],fe=s[15];return r[0]=o*w+a*P+l*q+c*Y,r[4]=o*A+a*R+l*U+c*ne,r[8]=o*_+a*D+l*H+c*ie,r[12]=o*T+a*z+l*V+c*fe,r[1]=h*w+u*P+d*q+f*Y,r[5]=h*A+u*R+d*U+f*ne,r[9]=h*_+u*D+d*H+f*ie,r[13]=h*T+u*z+d*V+f*fe,r[2]=g*w+y*P+m*q+p*Y,r[6]=g*A+y*R+m*U+p*ne,r[10]=g*_+y*D+m*H+p*ie,r[14]=g*T+y*z+m*V+p*fe,r[3]=M*w+S*P+v*q+E*Y,r[7]=M*A+S*R+v*U+E*ne,r[11]=M*_+S*D+v*H+E*ie,r[15]=M*T+S*z+v*V+E*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],M=l*f-c*d,S=a*f-c*u,v=a*d-l*u,E=o*f-c*h,w=o*d-l*h,A=o*u-a*h;return t*(y*M-m*S+p*v)-n*(g*M-m*E+p*w)+s*(g*S-y*E+p*A)-r*(g*v-y*w+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],M=t*a-n*o,S=t*l-s*o,v=t*c-r*o,E=n*l-s*a,w=n*c-r*a,A=s*c-r*l,_=h*y-u*g,T=h*m-d*g,P=h*p-f*g,R=u*m-d*y,D=u*p-f*y,z=d*p-f*m,q=M*z-S*D+v*R+E*P-w*T+A*_;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/q;return e[0]=(a*z-l*D+c*R)*U,e[1]=(s*D-n*z-r*R)*U,e[2]=(y*A-m*w+p*E)*U,e[3]=(d*w-u*A-f*E)*U,e[4]=(l*P-o*z-c*T)*U,e[5]=(t*z-s*P+r*T)*U,e[6]=(m*v-g*A-p*S)*U,e[7]=(h*A-d*v+f*S)*U,e[8]=(o*D-a*P+c*_)*U,e[9]=(n*P-t*D-r*_)*U,e[10]=(g*w-y*v+p*M)*U,e[11]=(u*v-h*w-f*M)*U,e[12]=(a*T-o*R-l*_)*U,e[13]=(t*R-n*T+s*_)*U,e[14]=(y*S-g*E-m*M)*U,e[15]=(h*E-u*S+d*M)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,y=o*h,m=o*u,p=a*u,M=l*c,S=l*h,v=l*u,E=n.x,w=n.y,A=n.z;return s[0]=(1-(y+p))*E,s[1]=(f+v)*E,s[2]=(g-S)*E,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(d+p))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+S)*A,s[9]=(m-M)*A,s[10]=(1-(d+y))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Cs.set(s[0],s[1],s[2]).length(),a=Cs.set(s[4],s[5],s[6]).length(),l=Cs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),zn.copy(this);let c=1/o,h=1/a,u=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,t.setFromRotationMatrix(zn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Gn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===Gn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Xs)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Gn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===Gn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Xs)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Xa.prototype.isMatrix4=!0;var We=Xa,Cs=new L,zn=new We,xp=new L(0,0,0),vp=new L(1,1,1),Ri=new L,Uo=new L,wn=new L,Mu=new We,Su=new $t,qn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Su.setFromEuler(this),this.setFromQuaternion(Su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var Dr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yp=0,bu=new L,Ps=new $t,ci=new We,Fo=new L,_r=new L,Mp=new L,Sp=new $t,Eu=new L(1,0,0),Tu=new L(0,1,0),wu=new L(0,0,1),Au={type:"added"},bp={type:"removed"},Is={type:"childadded",child:null},ec={type:"childremoved",child:null},Nt=class i extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new qn,n=new $t,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new Ye}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(Eu,e)}rotateY(e){return this.rotateOnAxis(Tu,e)}rotateZ(e){return this.rotateOnAxis(wu,e)}translateOnAxis(e,t){return bu.copy(e).applyQuaternion(this.quaternion),this.position.add(bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eu,e)}translateY(e){return this.translateOnAxis(Tu,e)}translateZ(e){return this.translateOnAxis(wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fo.copy(e):Fo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(_r,Fo,this.up):ci.lookAt(Fo,_r,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(ci),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Au),Is.child=e,this.dispatchEvent(Is),Is.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bp),ec.child=e,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Au),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,e,Mp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,Sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Nt.DEFAULT_UP=new L(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ft=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ep={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ep)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function tc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=oh(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=tc(o,r,e+1/3),this.g=tc(o,r,e),this.b=tc(o,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let n=Hd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return tt.workingToColorSpace(rn.copy(this),e),Math.round(Je(rn.r*255,0,255))*65536+Math.round(Je(rn.g*255,0,255))*256+Math.round(Je(rn.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(rn.copy(this),t);let n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Ht){tt.workingToColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,s=rn.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(Oo);let n=Ar(Ci.h,Oo.h,t),s=Ar(Ci.s,Oo.s,t),r=Ar(Ci.l,Oo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new re;re.NAMES=Hd;var Nr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new re(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ur=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},kn=new L,hi=new L,nc=new L,ui=new L,Ls=new L,Ds=new L,Ru=new L,ic=new L,sc=new L,rc=new L,oc=new at,ac=new at,lc=new at,Ni=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),kn.subVectors(e,t),s.cross(kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){kn.subVectors(s,t),hi.subVectors(n,t),nc.subVectors(e,t);let o=kn.dot(kn),a=kn.dot(hi),l=kn.dot(nc),c=hi.dot(hi),h=hi.dot(nc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return oc.setScalar(0),ac.setScalar(0),lc.setScalar(0),oc.fromBufferAttribute(e,t),ac.fromBufferAttribute(e,n),lc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(oc,r.x),o.addScaledVector(ac,r.y),o.addScaledVector(lc,r.z),o}static isFrontFacing(e,t,n,s){return kn.subVectors(n,t),hi.subVectors(e,t),kn.cross(hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),kn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ls.subVectors(s,n),Ds.subVectors(r,n),ic.subVectors(e,n);let l=Ls.dot(ic),c=Ds.dot(ic);if(l<=0&&c<=0)return t.copy(n);sc.subVectors(e,s);let h=Ls.dot(sc),u=Ds.dot(sc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ls,o);rc.subVectors(e,r);let f=Ls.dot(rc),g=Ds.dot(rc);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ds,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ru.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Ru,a);let p=1/(m+y+d);return o=y*p,a=d*p,t.copy(n).addScaledVector(Ls,o).addScaledVector(Ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},an=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bo.copy(n.boundingBox)),Bo.applyMatrix4(e.matrixWorld),this.union(Bo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),zo.subVectors(this.max,xr),Ns.subVectors(e.a,xr),Us.subVectors(e.b,xr),Fs.subVectors(e.c,xr),Pi.subVectors(Us,Ns),Ii.subVectors(Fs,Us),$i.subVectors(Ns,Fs);let t=[0,-Pi.z,Pi.y,0,-Ii.z,Ii.y,0,-$i.z,$i.y,Pi.z,0,-Pi.x,Ii.z,0,-Ii.x,$i.z,0,-$i.x,-Pi.y,Pi.x,0,-Ii.y,Ii.x,0,-$i.y,$i.x,0];return!cc(t,Ns,Us,Fs,zo)||(t=[1,0,0,0,1,0,0,0,1],!cc(t,Ns,Us,Fs,zo))?!1:(ko.crossVectors(Pi,Ii),t=[ko.x,ko.y,ko.z],cc(t,Ns,Us,Fs,zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},di=[new L,new L,new L,new L,new L,new L,new L,new L],Hn=new L,Bo=new an,Ns=new L,Us=new L,Fs=new L,Pi=new L,Ii=new L,$i=new L,xr=new L,zo=new L,ko=new L,Qi=new L;function cc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qi.fromArray(i,r);let a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var qt=new L,Ho=new he,Tp=0,Pt=class extends Xn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=va,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ho.fromBufferAttribute(this,t),Ho.applyMatrix3(e),this.setXY(t,Ho.x,Ho.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==va&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Fr=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Or=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},wp=new an,vr=new L,hc=new L,vn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);let t=vr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(vr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(hc)),this.expandByPoint(vr.copy(e.center).sub(hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ap=0,Dn=new We,uc=new Nt,Os=new L,An=new an,yr=new an,jt=new L,_t=class i extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jf(e)?Or:Fr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(An.min,yr.min),An.expandByPoint(jt),jt.addVectors(An.max,yr.max),An.expandByPoint(jt)):(An.expandByPoint(yr.min),An.expandByPoint(yr.max))}An.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)jt.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(e,c),jt.add(Os)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Pt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new L,l[_]=new L;let c=new L,h=new L,u=new L,d=new he,f=new he,g=new he,y=new L,m=new L;function p(_,T,P){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,P),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[_].add(y),a[T].add(y),a[P].add(y),l[_].add(m),l[T].add(m),l[P].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,T=M.length;_<T;++_){let P=M[_],R=P.start,D=P.count;for(let z=R,q=R+D;z<q;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let S=new L,v=new L,E=new L,w=new L;function A(_){E.fromBufferAttribute(s,_),w.copy(E);let T=a[_];S.copy(T),S.sub(E.multiplyScalar(E.dot(T))).normalize(),v.crossVectors(w,T);let R=v.dot(l[_])<0?-1:1;o.setXYZW(_,S.x,S.y,S.z,R)}for(let _=0,T=M.length;_<T;++_){let P=M[_],R=P.start,D=P.count;for(let z=R,q=R+D;z<q;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Pt(d,h,u)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Js=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=va,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new L,js=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ir("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ir("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Rp=0,yn=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=ss,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ha,this.blendDst=ua,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ha&&(n.blendSrc=this.blendSrc),this.blendDst!==ua&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var fi=new L,dc=new L,Vo=new L,Li=new L,fc=new L,Go=new L,pc=new L,gi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){dc.copy(e).add(t).multiplyScalar(.5),Vo.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(dc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Vo),a=Li.dot(this.direction),l=-Li.dot(Vo),c=Li.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(dc).addScaledVector(Vo,d),f}intersectSphere(e,t){fi.subVectors(e.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,s,r){fc.subVectors(t,e),Go.subVectors(n,e),pc.crossVectors(fc,Go);let o=this.direction.dot(pc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);let l=a*this.direction.dot(Go.crossVectors(Li,Go));if(l<0)return null;let c=a*this.direction.dot(fc.cross(Li));if(c<0||l+c>o)return null;let h=-a*Li.dot(pc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ln=class extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Cu=new We,es=new gi,Wo=new vn,Pu=new L,Xo=new L,qo=new L,Yo=new L,mc=new L,Zo=new L,Iu=new L,Ko=new L,ke=class extends Nt{constructor(e=new _t,t=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(mc.fromBufferAttribute(u,e),o?Zo.addScaledVector(mc,h):Zo.addScaledVector(mc.sub(t),h))}t.add(Zo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(Wo.containsPoint(es.origin)===!1&&(es.intersectSphere(Wo,Pu)===null||es.origin.distanceToSquared(Pu)>(e.far-e.near)**2))&&(Cu.copy(r).invert(),es.copy(e.ray).applyMatrix4(Cu),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,E=S;v<E;v+=3){let w=a.getX(v),A=a.getX(v+1),_=a.getX(v+2);s=Jo(this,p,e,n,c,h,u,w,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let M=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);s=Jo(this,o,e,n,c,h,u,M,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,E=S;v<E;v+=3){let w=v,A=v+1,_=v+2;s=Jo(this,p,e,n,c,h,u,w,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let M=m,S=m+1,v=m+2;s=Jo(this,o,e,n,c,h,u,M,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Cp(i,e,t,n,s,r,o,a){let l;if(e.side===Yt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Wn,a),l===null)return null;Ko.copy(a),Ko.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ko);return c<t.near||c>t.far?null:{distance:c,point:Ko.clone(),object:i}}function Jo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Xo),i.getVertexPosition(l,qo),i.getVertexPosition(c,Yo);let h=Cp(i,e,t,n,Xo,qo,Yo,Iu);if(h){let u=new L;Ni.getBarycoord(Iu,Xo,qo,Yo,u),s&&(h.uv=Ni.getInterpolatedAttribute(s,a,l,c,u,new he)),r&&(h.uv1=Ni.getInterpolatedAttribute(r,a,l,c,u,new he)),o&&(h.normal=Ni.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};Ni.getNormal(Xo,qo,Yo,d.normal),h.face=d,h.barycoord=u}return h}var Mr=new at,Lu=new at,Du=new at,Pp=new at,Nu=new We,jo=new L,gc=new vn,Uu=new We,_c=new gi,Br=class extends ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tc,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new an),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jo),this.boundingBox.expandByPoint(jo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jo),this.boundingSphere.expandByPoint(jo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gc.copy(this.boundingSphere),gc.applyMatrix4(s),e.ray.intersectsSphere(gc)!==!1&&(Uu.copy(s).invert(),_c.copy(e.ray).applyMatrix4(Uu),!(this.boundingBox!==null&&_c.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_c)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ad?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ce("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Lu.fromBufferAttribute(s.attributes.skinIndex,e),Du.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Mr.copy(t),t.set(0,0,0,0)):(Mr.set(...t,1),t.set(0,0,0)),Mr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Du.getComponent(r);if(o!==0){let a=Lu.getComponent(r);Nu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Pp.copy(Mr).applyMatrix4(Nu),o)}}return t.isVector4&&(t.w=Mr.w),t.applyMatrix4(this.bindMatrixInverse)}},$s=class extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Qs=class extends Qt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Gt,h=Gt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Fu=new We,Ip=new We,zr=class i{constructor(e=[],t=[]){this.uuid=Un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ce("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Ip;Fu.multiplyMatrices(a,t[r]),Fu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Qs(t,e,e,In,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ce("Skeleton: No bone found with UUID:",r),o=new $s),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Fn=class extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Bs=new We,Ou=new We,$o=[],Bu=new an,Lp=new We,Sr=new ke,br=new vn,kr=class extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new an),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bs),Bu.copy(e.boundingBox).applyMatrix4(Bs),this.boundingBox.union(Bu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bs),br.copy(e.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),e.ray.intersectsSphere(br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bs),Ou.multiplyMatrices(n,Bs),Sr.matrixWorld=Ou,Sr.raycast(e,$o);for(let o=0,a=$o.length;o<a;o++){let l=$o[o];l.instanceId=r,l.object=this,t.push(l)}$o.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Fn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qs(new Float32Array(s*this.count),s,this.count,Qa,Cn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xc=new L,Dp=new L,Np=new Ye,xn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xc.subVectors(n,t).cross(Dp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(xc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Np.getNormalMatrix(e),s=this.coplanarPoint(xc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ts=new vn,Up=new he(.5,.5),Qo=new L,er=class{constructor(e=new xn,t=new xn,n=new xn,s=new xn,r=new xn,o=new xn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],M=r[12],S=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-o,f-h,p-g,E-M).normalize(),s[1].setComponents(c+o,f+h,p+g,E+M).normalize(),s[2].setComponents(c+a,f+u,p+y,E+S).normalize(),s[3].setComponents(c-a,f-u,p-y,E-S).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,p-m,E-v).normalize();else if(s[4].setComponents(c-l,f-d,p-m,E-v).normalize(),t===Gn)s[5].setComponents(c+l,f+d,p+m,E+v).normalize();else if(t===Xs)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);let t=Up.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Qo.x=s.normal.x>0?e.max.x:e.min.x,Qo.y=s.normal.y>0?e.max.y:e.min.y,Qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Oi=class extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ba=new L,Ea=new L,zu=new We,Er=new gi,ea=new vn,vc=new L,ku=new L,cs=class extends Nt{constructor(e=new _t,t=new Oi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ba.fromBufferAttribute(t,s-1),Ea.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ba.distanceTo(Ea);e.setAttribute("lineDistance",new nt(n,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),ea.radius+=r,e.ray.intersectsSphere(ea)===!1)return;zu.copy(s).invert(),Er.copy(e.ray).applyMatrix4(zu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=c){let p=h.getX(y),M=h.getX(y+1),S=ta(this,e,Er,l,p,M,y);S&&t.push(S)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),p=ta(this,e,Er,l,y,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=c){let p=ta(this,e,Er,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=ta(this,e,Er,l,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ta(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(ba.fromBufferAttribute(a,s),Ea.fromBufferAttribute(a,r),t.distanceSqToSegment(ba,Ea,vc,ku)>n)return;vc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(vc);if(!(c<e.near||c>e.far))return{distance:c,point:ku.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Hu=new L,Vu=new L,hs=class extends cs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Hu.fromBufferAttribute(t,s),Vu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Hu.distanceTo(Vu);e.setAttribute("lineDistance",new nt(n,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Hr=class extends cs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Bi=class extends yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gu=new We,Ic=new gi,na=new vn,ia=new L,us=class extends Nt{constructor(e=new _t,t=new Bi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(s),na.radius+=r,e.ray.intersectsSphere(na)===!1)return;Gu.copy(s).invert(),Ic.copy(e.ray).applyMatrix4(Gu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,y=f;g<y;g++){let m=c.getX(g);ia.fromBufferAttribute(u,m),Wu(ia,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,y=f;g<y;g++)ia.fromBufferAttribute(u,g),Wu(ia,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wu(i,e,t,n,s,r,o){let a=Ic.distanceSqToPoint(i);if(a<t){let l=new L;Ic.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Vr=class extends Qt{constructor(e=[],t=Wi,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var _i=class extends Qt{constructor(e,t,n=Zn,s,r,o,a=Gt,l=Gt,c,h=$n,u=1){if(h!==$n&&h!==Xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ta=class extends _i{constructor(e,t=Zn,n=Wi,s,r,o=Gt,a=Gt,l,c=$n){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Gr=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ut=class i extends _t{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2));function g(y,m,p,M,S,v,E,w,A,_,T){let P=v/A,R=E/_,D=v/2,z=E/2,q=w/2,U=A+1,H=_+1,V=0,Y=0,ne=new L;for(let ie=0;ie<H;ie++){let fe=ie*R-z;for(let be=0;be<U;be++){let Ze=be*P-D;ne[y]=Ze*M,ne[m]=fe*S,ne[p]=q,c.push(ne.x,ne.y,ne.z),ne[y]=0,ne[m]=0,ne[p]=w>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(be/A),u.push(1-ie/_),V+=1}}for(let ie=0;ie<_;ie++)for(let fe=0;fe<A;fe++){let be=d+fe+U*ie,Ze=d+fe+U*(ie+1),mt=d+(fe+1)+U*(ie+1),Be=d+(fe+1)+U*ie;l.push(be,Ze,Be),l.push(Ze,mt,Be),Y+=6}a.addGroup(f,Y,T),f+=Y,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Tt=class i extends _t{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],m=n/2,p=0;M(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(f,2));function M(){let v=new L,E=new L,w=0,A=(t-e)/n;for(let _=0;_<=r;_++){let T=[],P=_/r,R=P*(t-e)+e;for(let D=0;D<=s;D++){let z=D/s,q=z*l+a,U=Math.sin(q),H=Math.cos(q);E.x=R*U,E.y=-P*n+m,E.z=R*H,u.push(E.x,E.y,E.z),v.set(U,A,H).normalize(),d.push(v.x,v.y,v.z),f.push(z,1-P),T.push(g++)}y.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let P=y[T][_],R=y[T+1][_],D=y[T+1][_+1],z=y[T][_+1];(e>0||T!==0)&&(h.push(P,R,z),w+=3),(t>0||T!==r-1)&&(h.push(R,D,z),w+=3)}c.addGroup(p,w,0),p+=w}function S(v){let E=g,w=new he,A=new L,_=0,T=v===!0?e:t,P=v===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*P,0),d.push(0,P,0),f.push(.5,.5),g++;let R=g;for(let D=0;D<=s;D++){let q=D/s*l+a,U=Math.cos(q),H=Math.sin(q);A.x=T*H,A.y=m*P,A.z=T*U,u.push(A.x,A.y,A.z),d.push(0,P,0),w.x=U*.5+.5,w.y=H*.5*P+.5,f.push(w.x,w.y),g++}for(let D=0;D<s;D++){let z=E+D,q=R+D;v===!0?h.push(q,q+1,z):h.push(q+1,q,z),_+=3}c.addGroup(p,_,v===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ds=class i extends Tt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},wa=class i extends _t{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let S=new L,v=new L,E=new L;for(let w=0;w<t.length;w+=3)f(t[w+0],S),f(t[w+1],v),f(t[w+2],E),l(S,v,E,M)}function l(M,S,v,E){let w=E+1,A=[];for(let _=0;_<=w;_++){A[_]=[];let T=M.clone().lerp(v,_/w),P=S.clone().lerp(v,_/w),R=w-_;for(let D=0;D<=R;D++)D===0&&_===w?A[_][D]=T:A[_][D]=T.clone().lerp(P,D/R)}for(let _=0;_<w;_++)for(let T=0;T<2*(w-_)-1;T++){let P=Math.floor(T/2);T%2===0?(d(A[_][P+1]),d(A[_+1][P]),d(A[_][P])):(d(A[_][P+1]),d(A[_+1][P+1]),d(A[_+1][P]))}}function c(M){let S=new L;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(M),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){let M=new L;for(let S=0;S<r.length;S+=3){M.x=r[S+0],M.y=r[S+1],M.z=r[S+2];let v=m(M)/2/Math.PI+.5,E=p(M)/Math.PI+.5;o.push(v,1-E)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let S=o[M+0],v=o[M+2],E=o[M+4],w=Math.max(S,v,E),A=Math.min(S,v,E);w>.9&&A<.1&&(S<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),E<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,S){let v=M*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function g(){let M=new L,S=new L,v=new L,E=new L,w=new he,A=new he,_=new he;for(let T=0,P=0;T<r.length;T+=9,P+=6){M.set(r[T+0],r[T+1],r[T+2]),S.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),w.set(o[P+0],o[P+1]),A.set(o[P+2],o[P+3]),_.set(o[P+4],o[P+5]),E.copy(M).add(S).add(v).divideScalar(3);let R=m(E);y(w,P+0,M,R),y(A,P+2,S,R),y(_,P+4,v,R)}}function y(M,S,v,E){E<0&&M.x===1&&(o[S]=M.x-1),v.x===0&&v.z===0&&(o[S]=E/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ce("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new he:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],o=[],a=new L,l=new We;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Je(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},tr=class extends Rn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Aa=class extends tr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ah(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Xu=new L,qu=new L,yc=new ah,Mc=new ah,Sc=new ah,Ra=class extends Rn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(qu.subVectors(s[0],s[1]).add(s[0]),c=qu);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Xu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),yc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),Mc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),Sc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(yc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Mc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Sc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(yc.calc(l),Mc.calc(l),Sc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yu(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Fp(i,e){let t=1-i;return t*t*e}function Op(i,e){return 2*(1-i)*i*e}function Bp(i,e){return i*i*e}function Rr(i,e,t,n){return Fp(i,e)+Op(i,t)+Bp(i,n)}function zp(i,e){let t=1-i;return t*t*t*e}function kp(i,e){let t=1-i;return 3*t*t*i*e}function Hp(i,e){return 3*(1-i)*i*i*e}function Vp(i,e){return i*i*i*e}function Cr(i,e,t,n,s){return zp(i,e)+kp(i,t)+Hp(i,n)+Vp(i,s)}var Wr=class extends Rn{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(e,s.x,r.x,o.x,a.x),Cr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ca=class extends Rn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(e,s.x,r.x,o.x,a.x),Cr(e,s.y,r.y,o.y,a.y),Cr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xr=class extends Rn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends Rn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qr=class extends Rn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,s.x,r.x,o.x),Rr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ia=class extends Rn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,s.x,r.x,o.x),Rr(e,s.y,r.y,o.y),Rr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yr=class extends Rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Yu(a,l.x,c.x,h.x,u.x),Yu(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},Zu=Object.freeze({__proto__:null,ArcCurve:Aa,CatmullRomCurve3:Ra,CubicBezierCurve:Wr,CubicBezierCurve3:Ca,EllipseCurve:tr,LineCurve:Xr,LineCurve3:Pa,QuadraticBezierCurve:qr,QuadraticBezierCurve3:Ia,SplineCurve:Yr}),La=class extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Zu[s.type]().fromJSON(s))}return this}},Zr=class extends La{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Xr(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new qr(this.currentPoint.clone(),new he(e,t),new he(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Wr(this.currentPoint.clone(),new he(e,t),new he(n,s),new he(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Yr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new tr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},xi=class extends Zr{constructor(e){super(e),this.uuid=Un(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Zr().fromJSON(s))}return this}};function Gp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Vd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Zp(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,u=l;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Kr(r,o,t,a,l,c,0),o}function Vd(i,e,t,n,s){let r;if(s===rm(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ku(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ku(o/n|0,i[o],i[o+1],r);return r&&nr(r,r.next)&&(jr(r),r=r.next),r}function fs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(nr(t,t.next)||Ft(t.prev,t,t.next)===0)){if(jr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Kr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Qp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Xp(i,n,s,r):Wp(i)){e.push(l.i,i.i,c.i),jr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=qp(fs(i),e),Kr(i,e,t,n,s,r,2)):o===2&&Yp(i,e,t,n,s,r):Kr(fs(i),e,t,n,s,r,1);break}}}function Wp(i){let e=i.prev,t=i,n=i.next;if(Ft(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Tr(s,a,r,l,o,c,g.x,g.y)&&Ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Xp(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ft(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),y=Math.max(a,l,c),m=Math.max(h,u,d),p=Lc(f,g,e,t,n),M=Lc(y,m,e,t,n),S=i.prevZ,v=i.nextZ;for(;S&&S.z>=p&&v&&v.z<=M;){if(S.x>=f&&S.x<=y&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Tr(a,h,l,u,c,d,S.x,S.y)&&Ft(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Tr(a,h,l,u,c,d,v.x,v.y)&&Ft(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=y&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Tr(a,h,l,u,c,d,S.x,S.y)&&Ft(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Tr(a,h,l,u,c,d,v.x,v.y)&&Ft(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function qp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!nr(n,s)&&Wd(n,t,t.next,s)&&Jr(n,s)&&Jr(s,n)&&(e.push(n.i,t.i,s.i),jr(t),jr(t.next),t=i=s),t=t.next}while(t!==i);return fs(t)}function Yp(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&nm(o,a)){let l=Xd(o,a);o=fs(o,o.next),l=fs(l,l.next),Kr(o,e,t,n,s,r,0),Kr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Zp(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Vd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(tm(c))}s.sort(Kp);for(let r=0;r<s.length;r++)t=Jp(s[r],t);return t}function Kp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Jp(i,e){let t=jp(i,e);if(!t)return e;let n=Xd(t,i);return fs(n,n.next),fs(t,t.next)}function jp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(nr(i,t))return t;do{if(nr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Gd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Jr(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&$p(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function $p(i,e){return Ft(i.prev,i,e.prev)<0&&Ft(e.next,i,i.next)<0}function Qp(i,e,t,n){let s=i;do s.z===0&&(s.z=Lc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,em(s)}function em(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Lc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function tm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Gd(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Tr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Gd(i,e,t,n,s,r,o,a)}function nm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!im(i,e)&&(Jr(i,e)&&Jr(e,i)&&sm(i,e)&&(Ft(i.prev,i,e.prev)||Ft(i,e.prev,e))||nr(i,e)&&Ft(i.prev,i,i.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function nr(i,e){return i.x===e.x&&i.y===e.y}function Wd(i,e,t,n){let s=ra(Ft(i,e,t)),r=ra(Ft(i,e,n)),o=ra(Ft(t,n,i)),a=ra(Ft(t,n,e));return!!(s!==r&&o!==a||s===0&&sa(i,t,e)||r===0&&sa(i,n,e)||o===0&&sa(t,i,n)||a===0&&sa(t,e,n))}function sa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ra(i){return i>0?1:i<0?-1:0}function im(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Wd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Jr(i,e){return Ft(i.prev,i,i.next)<0?Ft(i,e,i.next)>=0&&Ft(i,i.prev,e)>=0:Ft(i,e,i.prev)<0||Ft(i,i.next,e)<0}function sm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Xd(i,e){let t=Dc(i.i,i.x,i.y),n=Dc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ku(i,e,t,n){let s=Dc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function jr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Dc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rm(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Nc=class{static triangulate(e,t,n=2){return Gp(e,t,n)}},Gs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ju(e),ju(n,e);let o=e.length;t.forEach(Ju);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,ju(n,t[l]);let a=Nc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ju(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ju(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var $r=class i extends wa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var cn=class i extends _t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let M=p*d-o;for(let S=0;S<c;S++){let v=S*u-r;g.push(v,-M,0),y.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let S=M+c*p,v=M+c*(p+1),E=M+1+c*(p+1),w=M+1+c*p;f.push(S,v,w),f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(y,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ps=class i extends _t{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new L,g=new he;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let M=p+m,S=M,v=M+n+1,E=M+n+2,w=M+1;a.push(S,v,w),a.push(v,E,w)}}this.setIndex(a),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},zi=class i extends _t{constructor(e=new xi([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new nt(s,3)),this.setAttribute("normal",new nt(r,3)),this.setAttribute("uv",new nt(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;Gs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];Gs.isClockWise(M)===!0&&(g[m]=M.reverse())}let y=Gs.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){let M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=y.length;m<p;m++){let M=y[m],S=M[0]+u,v=M[1]+u,E=M[2]+u;n.push(S,v,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return om(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function om(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var vi=class i extends _t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,d=new L,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let M=[],S=p/n,v=o+S*a,E=e*Math.cos(v),w=Math.sqrt(e*e-E*E),A=0;p===0&&o===0?A=.5/t:p===n&&l===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){let T=_/t,P=s+T*r;u.x=-w*Math.cos(P),u.y=E,u.z=w*Math.sin(P),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(T+A,1-S),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let S=h[p][M+1],v=h[p][M],E=h[p+1][M],w=h[p+1][M+1];(p!==0||o>0)&&f.push(S,v,w),(p!==n-1||l<Math.PI)&&f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(y,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qr=class i extends _t{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new L,f=new L,g=new L;for(let y=0;y<=n;y++){let m=o+y/n*a;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,M=(s+1)*(y-1)+m-1,S=(s+1)*(y-1)+m,v=(s+1)*y+m;l.push(p,M,v),l.push(M,S,v)}this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function ys(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if($u(s))s.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if($u(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=ys(i[t]);for(let s in n)e[s]=n[s]}return e}function $u(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function am(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var qd={clone:ys,merge:un},lm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ot=class extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lm,this.fragmentShader=cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new re().setHex(s.value);break;case"v2":this.uniforms[n].value=new he().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new at().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[n].value=new We().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Da=class extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ht=class extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mn=class extends ht{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Na=class extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ua=class extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function oa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function hm(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Qu(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function um(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Qn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fa=class extends Qn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ac,endingEnd:Ac}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rc:r=e,a=2*t-n;break;case Cc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rc:o=e,l=2*n-t;break;case Cc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,M=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+M*o[c+E]+S*o[l+E]+v*o[u+E];return r}},Oa=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Ba=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},za=class extends Qn{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),y=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*y+o[l+m]*g;return r}let d=a*2,f=e-1;for(let g=0;g!==a;++g){let y=o[c+g],m=o[l+g],p=f*d+g*2,M=u[p],S=u[p+1],v=e*d+g*2,E=h[v],w=h[v+1],A=(n-t)/(s-t),_,T,P,R,D;for(let z=0;z<8;z++){_=A*A,T=_*A,P=1-A,R=P*P,D=R*P;let U=D*t+3*R*A*M+3*P*_*E+T*s-n;if(Math.abs(U)<1e-10)break;let H=3*R*(M-t)+6*P*A*(E-M)+3*_*(s-E);if(Math.abs(H)<1e-10)break;A=A-U/H,A=Math.max(0,Math.min(1,A))}r[g]=D*y+3*R*A*S+3*P*_*w+T*m}return r}},Sn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oa(t,this.TimeBufferType),this.values=oa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:oa(e.times,Array),values:oa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new za(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case os:t=this.InterpolantFactoryMethodDiscrete;break;case as:t=this.InterpolantFactoryMethodLinear;break;case ca:t=this.InterpolantFactoryMethodSmooth;break;case wc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return os;case this.InterpolantFactoryMethodLinear:return as;case this.InterpolantFactoryMethodSmooth:return ca;case this.InterpolantFactoryMethodBezier:return wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ge("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&$f(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ca,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=as;var yi=class extends Sn{constructor(e,t,n){super(e,t,n)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=os;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends Sn{constructor(e,t,n,s){super(e,t,n,s)}};eo.prototype.ValueTypeName="color";var Mi=class extends Sn{constructor(e,t,n,s){super(e,t,n,s)}};Mi.prototype.ValueTypeName="number";var ka=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)$t.slerpFlat(r,0,o,c-a,o,c,l);return r}},Si=class extends Sn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ka(this.times,this.values,this.getValueSize(),e)}};Si.prototype.ValueTypeName="quaternion";Si.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends Sn{constructor(e,t,n){super(e,t,n)}};bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=os;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Sn{constructor(e,t,n,s){super(e,t,n,s)}};ki.prototype.ValueTypeName="vector";var to=class{constructor(e="",t=-1,n=[],s=Rd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Un(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(fm(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Sn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=hm(l);l=Qu(l,1,h),c=Qu(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Mi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function dm(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mi;case"vector":case"vector2":case"vector3":case"vector4":return ki;case"color":return eo;case"quaternion":return Si;case"bool":case"boolean":return yi;case"string":return bi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function fm(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=dm(i.type);if(i.times===void 0){let t=[],n=[];um(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var jn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(ed(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!ed(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function ed(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ha=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Yd=new Ha,ei=class{constructor(e){this.manager=e!==void 0?e:Yd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ei.DEFAULT_MATERIAL_NAME="__DEFAULT";var pi={},Uc=class extends Error{constructor(e,t){super(e),this.response=t}},ir=class extends ei{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=jn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:n,onError:s});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ce("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=pi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,y=0,m=new ReadableStream({start(p){M();function M(){u.read().then(({done:S,value:v})=>{if(S)p.close();else{y+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let w=0,A=h.length;w<A;w++){let _=h[w];_.onProgress&&_.onProgress(E)}p.enqueue(v),M()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Uc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{jn.add(`file:${e}`,c);let h=pi[e];delete pi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=pi[e];if(h===void 0)throw this.manager.itemError(e),c;delete pi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var zs=new WeakMap,Va=class extends ei{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=jn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=zs.get(o);u===void 0&&(u=[],zs.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=qs("img");function l(){h(),t&&t(this);let u=zs.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}zs.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),jn.remove(`image:${e}`);let d=zs.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}zs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),jn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var no=class extends ei{constructor(e){super(e)}load(e,t,n,s){let r=new Qt,o=new Va(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ms=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new re(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},io=class extends ms{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},bc=new We,td=new L,nd=new L,so=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new er,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;td.setFromMatrixPosition(e.matrixWorld),t.position.copy(td),nd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nd),t.updateMatrixWorld(),bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Xs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},aa=new L,la=new $t,Jn=new L,ro=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(aa,la,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,la,Jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(aa,la,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,la,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Di=new L,id=new he,sd=new he,Vt=class extends ro{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,id,sd),t.subVectors(sd,id)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fc=class extends so{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ls*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},oo=class extends ms{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Oc=class extends so{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0}},ao=class extends ms{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Oc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Hi=class extends ro{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bc=class extends so{constructor(){super(new Hi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gs=class extends ms{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Bc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ei=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},sr=class extends _t{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Ec=new WeakMap,lo=class extends ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ce("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ce("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=jn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Ec.has(o)===!0?(s&&s(Ec.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){jn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),Ec.set(l,c),jn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});jn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ks=-90,Hs=1,Ga=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(ks,Hs,e,t);s.layers=this.layers,this.add(s);let r=new Vt(ks,Hs,e,t);r.layers=this.layers,this.add(r);let o=new Vt(ks,Hs,e,t);o.layers=this.layers,this.add(o);let a=new Vt(ks,Hs,e,t);a.layers=this.layers,this.add(a);let l=new Vt(ks,Hs,e,t);l.layers=this.layers,this.add(l);let c=new Vt(ks,Hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Wa=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ch="\\[\\]\\.:\\/",pm=new RegExp("["+ch+"]","g"),hh="[^"+ch+"]",mm="[^"+ch.replace("\\.","")+"]",gm=/((?:WC+[\/:])*)/.source.replace("WC",hh),_m=/(WCOD+)?/.source.replace("WCOD",mm),xm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),vm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),ym=new RegExp("^"+gm+_m+xm+vm+"$"),Mm=["material","materials","bones","map"],zc=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pm,"")}static parseTrackName(e){let t=ym.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Mm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=zc;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jv=new Float32Array(1);var rr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var gh=class gh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};gh.prototype.isMatrix2=!0;var kc=gh;var co=class extends Xn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ce("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function uh(i,e,t,n){let s=Sm(n);switch(t){case nh:return i*e;case Qa:return i*e/s.components*s.byteLength;case el:return i*e/s.components*s.byteLength;case qi:return i*e*2/s.components*s.byteLength;case tl:return i*e*2/s.components*s.byteLength;case ih:return i*e*3/s.components*s.byteLength;case In:return i*e*4/s.components*s.byteLength;case nl:return i*e*4/s.components*s.byteLength;case po:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case go:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sl:case ol:return Math.max(i,16)*Math.max(e,8)/4;case il:case rl:return Math.max(i,8)*Math.max(e,8)/2;case al:case ll:case hl:case ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cl:case xo:case dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Al:case Rl:case Cl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Pl:case Il:return Math.ceil(i/4)*Math.ceil(e/4)*8;case vo:case Ll:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sm(i){switch(i){case bn:case $c:return{byteLength:1,components:1};case lr:case Qc:case Pn:return{byteLength:2,components:1};case ja:case $a:return{byteLength:2,components:4};case Zn:case Ja:case Cn:return{byteLength:4,components:1};case eh:case th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function _f(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Em(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Tm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Im=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Om=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Zm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Km=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t0="gl_FragColor = linearToOutputTexel( gl_FragColor );",n0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,r0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,f0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,_0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,x0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,b0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,E0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,T0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,R0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,U0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,V0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,W0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Z0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,K0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ng=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$g=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,e_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:Tm,alphahash_pars_fragment:wm,alphamap_fragment:Am,alphamap_pars_fragment:Rm,alphatest_fragment:Cm,alphatest_pars_fragment:Pm,aomap_fragment:Im,aomap_pars_fragment:Lm,batching_pars_vertex:Dm,batching_vertex:Nm,begin_vertex:Um,beginnormal_vertex:Fm,bsdfs:Om,iridescence_fragment:Bm,bumpmap_pars_fragment:zm,clipping_planes_fragment:km,clipping_planes_pars_fragment:Hm,clipping_planes_pars_vertex:Vm,clipping_planes_vertex:Gm,color_fragment:Wm,color_pars_fragment:Xm,color_pars_vertex:qm,color_vertex:Ym,common:Zm,cube_uv_reflection_fragment:Km,defaultnormal_vertex:Jm,displacementmap_pars_vertex:jm,displacementmap_vertex:$m,emissivemap_fragment:Qm,emissivemap_pars_fragment:e0,colorspace_fragment:t0,colorspace_pars_fragment:n0,envmap_fragment:i0,envmap_common_pars_fragment:s0,envmap_pars_fragment:r0,envmap_pars_vertex:o0,envmap_physical_pars_fragment:_0,envmap_vertex:a0,fog_vertex:l0,fog_pars_vertex:c0,fog_fragment:h0,fog_pars_fragment:u0,gradientmap_pars_fragment:d0,lightmap_pars_fragment:f0,lights_lambert_fragment:p0,lights_lambert_pars_fragment:m0,lights_pars_begin:g0,lights_toon_fragment:x0,lights_toon_pars_fragment:v0,lights_phong_fragment:y0,lights_phong_pars_fragment:M0,lights_physical_fragment:S0,lights_physical_pars_fragment:b0,lights_fragment_begin:E0,lights_fragment_maps:T0,lights_fragment_end:w0,lightprobes_pars_fragment:A0,logdepthbuf_fragment:R0,logdepthbuf_pars_fragment:C0,logdepthbuf_pars_vertex:P0,logdepthbuf_vertex:I0,map_fragment:L0,map_pars_fragment:D0,map_particle_fragment:N0,map_particle_pars_fragment:U0,metalnessmap_fragment:F0,metalnessmap_pars_fragment:O0,morphinstance_vertex:B0,morphcolor_vertex:z0,morphnormal_vertex:k0,morphtarget_pars_vertex:H0,morphtarget_vertex:V0,normal_fragment_begin:G0,normal_fragment_maps:W0,normal_pars_fragment:X0,normal_pars_vertex:q0,normal_vertex:Y0,normalmap_pars_fragment:Z0,clearcoat_normal_fragment_begin:K0,clearcoat_normal_fragment_maps:J0,clearcoat_pars_fragment:j0,iridescence_pars_fragment:$0,opaque_fragment:Q0,packing:eg,premultiplied_alpha_fragment:tg,project_vertex:ng,dithering_fragment:ig,dithering_pars_fragment:sg,roughnessmap_fragment:rg,roughnessmap_pars_fragment:og,shadowmap_pars_fragment:ag,shadowmap_pars_vertex:lg,shadowmap_vertex:cg,shadowmask_pars_fragment:hg,skinbase_vertex:ug,skinning_pars_vertex:dg,skinning_vertex:fg,skinnormal_vertex:pg,specularmap_fragment:mg,specularmap_pars_fragment:gg,tonemapping_fragment:_g,tonemapping_pars_fragment:xg,transmission_fragment:vg,transmission_pars_fragment:yg,uv_pars_fragment:Mg,uv_pars_vertex:Sg,uv_vertex:bg,worldpos_vertex:Eg,background_vert:Tg,background_frag:wg,backgroundCube_vert:Ag,backgroundCube_frag:Rg,cube_vert:Cg,cube_frag:Pg,depth_vert:Ig,depth_frag:Lg,distance_vert:Dg,distance_frag:Ng,equirect_vert:Ug,equirect_frag:Fg,linedashed_vert:Og,linedashed_frag:Bg,meshbasic_vert:zg,meshbasic_frag:kg,meshlambert_vert:Hg,meshlambert_frag:Vg,meshmatcap_vert:Gg,meshmatcap_frag:Wg,meshnormal_vert:Xg,meshnormal_frag:qg,meshphong_vert:Yg,meshphong_frag:Zg,meshphysical_vert:Kg,meshphysical_frag:Jg,meshtoon_vert:jg,meshtoon_frag:$g,points_vert:Qg,points_frag:e_,shadow_vert:t_,shadow_frag:n_,sprite_vert:i_,sprite_frag:s_},Me={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ii={basic:{uniforms:un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:un([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:un([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new re(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:un([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:un([Me.points,Me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:un([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:un([Me.common,Me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:un([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:un([Me.sprite,Me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:un([Me.common,Me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:un([Me.lights,Me.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ii.physical={uniforms:un([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var Fl={r:0,b:0,g:0},r_=new We,xf=new Ye;xf.set(-1,0,0,0,1,0,0,0,1);function o_(i,e,t,n,s,r){let o=new re(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){let v=M.backgroundBlurriness>0;S=e.get(S,v)}return S}function g(M){let S=!1,v=f(M);v===null?m(o,a):v&&v.isColor&&(m(v,1),S=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,S){let v=f(S);v&&(v.isCubeTexture||v.mapping===fo)?(c===void 0&&(c=new ke(new Ut(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:ys(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(r_.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(xf),c.material.toneMapped=tt.getTransfer(v.colorSpace)!==pt,(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ke(new cn(2,2),new Ot({name:"BackgroundMaterial",uniforms:ys(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=tt.getTransfer(v.colorSpace)!==pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,S){M.getRGB(Fl,lh(i)),t.buffers.color.setClear(Fl.r,Fl.g,Fl.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:y,dispose:p}}function a_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(R,D,z,q,U){let H=!1,V=u(R,q,z,D);r!==V&&(r=V,c(r.object)),H=f(R,q,z,U),H&&g(R,q,z,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(R,D,z,q),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function u(R,D,z,q){let U=q.wireframe===!0,H=n[D.id];H===void 0&&(H={},n[D.id]=H);let V=R.isInstancedMesh===!0?R.id:0,Y=H[V];Y===void 0&&(Y={},H[V]=Y);let ne=Y[z.id];ne===void 0&&(ne={},Y[z.id]=ne);let ie=ne[U];return ie===void 0&&(ie=d(l()),ne[U]=ie),ie}function d(R){let D=[],z=[],q=[];for(let U=0;U<t;U++)D[U]=0,z[U]=0,q[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:q,object:R,attributes:{},index:null}}function f(R,D,z,q){let U=r.attributes,H=D.attributes,V=0,Y=z.getAttributes();for(let ne in Y)if(Y[ne].location>=0){let fe=U[ne],be=H[ne];if(be===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(be=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(be=R.instanceColor)),fe===void 0||fe.attribute!==be||be&&fe.data!==be.data)return!0;V++}return r.attributesNum!==V||r.index!==q}function g(R,D,z,q){let U={},H=D.attributes,V=0,Y=z.getAttributes();for(let ne in Y)if(Y[ne].location>=0){let fe=H[ne];fe===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor));let be={};be.attribute=fe,fe&&fe.data&&(be.data=fe.data),U[ne]=be,V++}r.attributes=U,r.attributesNum=V,r.index=q}function y(){let R=r.newAttributes;for(let D=0,z=R.length;D<z;D++)R[D]=0}function m(R){p(R,0)}function p(R,D){let z=r.newAttributes,q=r.enabledAttributes,U=r.attributeDivisors;z[R]=1,q[R]===0&&(i.enableVertexAttribArray(R),q[R]=1),U[R]!==D&&(i.vertexAttribDivisor(R,D),U[R]=D)}function M(){let R=r.newAttributes,D=r.enabledAttributes;for(let z=0,q=D.length;z<q;z++)D[z]!==R[z]&&(i.disableVertexAttribArray(z),D[z]=0)}function S(R,D,z,q,U,H,V){V===!0?i.vertexAttribIPointer(R,D,z,U,H):i.vertexAttribPointer(R,D,z,q,U,H)}function v(R,D,z,q){y();let U=q.attributes,H=z.getAttributes(),V=D.defaultAttributeValues;for(let Y in H){let ne=H[Y];if(ne.location>=0){let ie=U[Y];if(ie===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),ie!==void 0){let fe=ie.normalized,be=ie.itemSize,Ze=e.get(ie);if(Ze===void 0)continue;let mt=Ze.buffer,Be=Ze.type,K=Ze.bytesPerElement,ue=Be===i.INT||Be===i.UNSIGNED_INT||ie.gpuType===Ja;if(ie.isInterleavedBufferAttribute){let se=ie.data,Ue=se.stride,He=ie.offset;if(se.isInstancedInterleavedBuffer){for(let Ie=0;Ie<ne.locationSize;Ie++)p(ne.location+Ie,se.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ie=0;Ie<ne.locationSize;Ie++)m(ne.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let Ie=0;Ie<ne.locationSize;Ie++)S(ne.location+Ie,be/ne.locationSize,Be,fe,Ue*K,(He+be/ne.locationSize*Ie)*K,ue)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<ne.locationSize;se++)p(ne.location+se,ie.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<ne.locationSize;se++)m(ne.location+se);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let se=0;se<ne.locationSize;se++)S(ne.location+se,be/ne.locationSize,Be,fe,be*K,be/ne.locationSize*se*K,ue)}}else if(V!==void 0){let fe=V[Y];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(ne.location,fe);break;case 3:i.vertexAttrib3fv(ne.location,fe);break;case 4:i.vertexAttrib4fv(ne.location,fe);break;default:i.vertexAttrib1fv(ne.location,fe)}}}}M()}function E(){T();for(let R in n){let D=n[R];for(let z in D){let q=D[z];for(let U in q){let H=q[U];for(let V in H)h(H[V].object),delete H[V];delete q[U]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;let D=n[R.id];for(let z in D){let q=D[z];for(let U in q){let H=q[U];for(let V in H)h(H[V].object),delete H[V];delete q[U]}}delete n[R.id]}function A(R){for(let D in n){let z=n[D];for(let q in z){let U=z[q];if(U[R.id]===void 0)continue;let H=U[R.id];for(let V in H)h(H[V].object),delete H[V];delete U[R.id]}}}function _(R){for(let D in n){let z=n[D],q=R.isInstancedMesh===!0?R.id:0,U=z[q];if(U!==void 0){for(let H in U){let V=U[H];for(let Y in V)h(V[Y].object),delete V[Y];delete U[H]}delete z[q],Object.keys(z).length===0&&delete n[D]}}}function T(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function l_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function c_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==In&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let _=A===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==bn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Cn&&!_)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ce("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:v,maxSamples:E,samples:w}}function h_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new xn,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,S=M*4,v=p.clippingState||null;l.value=v,v=h(g,d,S,f);for(let E=0;E!==S;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=f;S!==y;++S,v+=4)o.copy(u[S]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Yi=4,Zd=[.125,.215,.35,.446,.526,.582],Ms=20,u_=256,Mo=new Hi,Kd=new re,_h=null,xh=0,vh=0,yh=!1,d_=new L,Bl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=d_}=r;_h=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_h,xh,vh),this._renderer.xr.enabled=yh,e.scissorTest=!1,ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wi||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_h=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Pn,format:In,colorSpace:fn,depthBuffer:!1},s=Jd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=f_(r)),this._blurMaterial=m_(r,e,t),this._ggxMaterial=p_(r,e,t)}return s}_compileMaterial(e){let t=new ke(new _t,e);this._renderer.compile(t,Mo)}_sceneToCubeUV(e,t,n,s,r){let l=new Vt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Kd),u.toneMapping=hn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ke(new Ut,new ln({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Kd),p=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let E=this._cubeSize;ur(s,v*E,S>2?E:0,E,E),u.setRenderTarget(s),p&&u.render(y,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Wi||e.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$d()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ur(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Mo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-Yi?n-g+Yi:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ur(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(a,Mo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,ur(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(a,Mo)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ge("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[s];u.material=c;let d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ms-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Ms;m>Ms&&Ce(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ms}`);let p=[],M=0;for(let A=0;A<Ms;++A){let _=A/y,T=Math.exp(-_*_/2);p.push(T),A===0?M+=T:A<m&&(M+=2*T)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let v=this._sizeLods[s],E=3*v*(s>S-Yi?s-S+Yi:0),w=4*(this._cubeSize-v);ur(t,E,w,3*v,2*v),l.setRenderTarget(t),l.render(u,Mo)}};function f_(i){let e=[],t=[],n=[],s=i,r=i-Yi+1+Zd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Yi?l=Zd[o-i+Yi-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,m=2,p=1,M=new Float32Array(y*g*f),S=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){let A=w%3*2/3-1,_=w>2?0:-1,T=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];M.set(T,y*g*w),S.set(d,m*g*w);let P=[w,w,w,w,w,w];v.set(P,p*g*w)}let E=new _t;E.setAttribute("position",new Pt(M,y)),E.setAttribute("uv",new Pt(S,m)),E.setAttribute("faceIndex",new Pt(v,p)),n.push(new ke(E,null)),s>Yi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Jd(i,e,t){let n=new on(i,e,t);return n.texture.mapping=fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function p_(i,e,t){return new Ot({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:u_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function m_(i,e,t){let n=new Float32Array(Ms),s=new L(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function jd(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function $d(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Hl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var zl=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Vr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ut(5,5,5),r=new Ot({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:ti});r.uniforms.tEquirect.value=t;let o=new ke(s,r),a=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Rt),new Ga(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function g_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Ya||f===Za)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new zl(g.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",c),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,g=f===Ya||f===Za,y=f===Wi||f===xs;if(g||y){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Bl(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return g&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new Bl(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Ya?d.mapping=Wi:f===Za&&(d.mapping=xs),d}function l(d){let f=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function __(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&is("WebGLRenderer: "+n+" extension not supported."),s}}}function x_(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(g===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let S=0,v=M.length;S<v;S+=3){let E=M[S+0],w=M[S+1],A=M[S+2];d.push(E,w,w,A,A,E)}}else{let M=g.array;y=g.version;for(let S=0,v=M.length/3-1;S<v;S+=3){let E=S+0,w=S+1,A=S+2;d.push(E,w,w,A,A,E)}}let m=new(g.count>=65535?Or:Fr)(d,1);m.version=y;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function v_(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];t.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function y_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ge("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function M_(i,e,t){let n=new WeakMap,s=new at;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),y===!0&&(S=3);let v=a.attributes.position.count*S,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*E*4*u),A=new Lr(w,v,E,u);A.type=Cn,A.needsUpdate=!0;let _=S*4;for(let P=0;P<u;P++){let R=m[P],D=p[P],z=M[P],q=v*E*4*P;for(let U=0;U<R.count;U++){let H=U*_;f===!0&&(s.fromBufferAttribute(R,U),w[q+H+0]=s.x,w[q+H+1]=s.y,w[q+H+2]=s.z,w[q+H+3]=0),g===!0&&(s.fromBufferAttribute(D,U),w[q+H+4]=s.x,w[q+H+5]=s.y,w[q+H+6]=s.z,w[q+H+7]=0),y===!0&&(s.fromBufferAttribute(z,U),w[q+H+8]=s.x,w[q+H+9]=s.y,w[q+H+10]=s.z,w[q+H+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new he(v,E)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function S_(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var b_={[Xc]:"LINEAR_TONE_MAPPING",[qc]:"REINHARD_TONE_MAPPING",[Yc]:"CINEON_TONE_MAPPING",[uo]:"ACES_FILMIC_TONE_MAPPING",[Kc]:"AGX_TONE_MAPPING",[Jc]:"NEUTRAL_TONE_MAPPING",[Zc]:"CUSTOM_TONE_MAPPING"};function E_(i,e,t,n,s,r){let o=new on(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new _i(e,t):void 0}),a=new on(e,t,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),l=new _t;l.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new nt([0,2,0,0,2,0],2));let c=new Da({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ke(l,c),u=new Hi(-1,1,1,-1,0,1),d=null,f=null,g=!1,y,m=null,p=[],M=!1;this.setSize=function(S,v){o.setSize(S,v),a.setSize(S,v);for(let E=0;E<p.length;E++){let w=p[E];w.setSize&&w.setSize(S,v)}},this.setEffects=function(S){p=S,M=p.length>0&&p[0].isRenderPass===!0;let v=o.width,E=o.height;for(let w=0;w<p.length;w++){let A=p[w];A.setSize&&A.setSize(v,E)}},this.begin=function(S,v){if(g||S.toneMapping===hn&&p.length===0)return!1;if(m=v,v!==null){let E=v.width,w=v.height;(o.width!==E||o.height!==w)&&this.setSize(E,w)}return M===!1&&S.setRenderTarget(o),y=S.toneMapping,S.toneMapping=hn,!0},this.hasRenderPass=function(){return M},this.end=function(S,v){S.toneMapping=y,g=!0;let E=o,w=a;for(let A=0;A<p.length;A++){let _=p[A];if(_.enabled!==!1&&(_.render(S,w,E,v),_.needsSwap!==!1)){let T=E;E=w,w=T}}if(d!==S.outputColorSpace||f!==S.toneMapping){d=S.outputColorSpace,f=S.toneMapping,c.defines={},tt.getTransfer(d)===pt&&(c.defines.SRGB_TRANSFER="");let A=b_[f];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(m),S.render(h,u),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}var vf=new Qt,bh=new _i(1,1),yf=new Lr,Mf=new Sa,Sf=new Vr,Qd=[],ef=[],tf=new Float32Array(16),nf=new Float32Array(9),sf=new Float32Array(4);function fr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Qd[s];if(r===void 0&&(r=new Float32Array(s),Qd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vl(i,e){let t=ef[e];t===void 0&&(t=new Int32Array(e),ef[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function T_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function w_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function A_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function R_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function C_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;sf.set(n),i.uniformMatrix2fv(this.addr,!1,sf),Kt(t,n)}}function P_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;nf.set(n),i.uniformMatrix3fv(this.addr,!1,nf),Kt(t,n)}}function I_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;tf.set(n),i.uniformMatrix4fv(this.addr,!1,tf),Kt(t,n)}}function L_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function D_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function N_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function U_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function F_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function O_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function B_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function k_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bh.compareFunction=t.isReversedDepthBuffer()?Ul:Nl,r=bh):r=vf,t.setTexture2D(e||r,s)}function H_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Mf,s)}function V_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Sf,s)}function G_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||yf,s)}function W_(i){switch(i){case 5126:return T_;case 35664:return w_;case 35665:return A_;case 35666:return R_;case 35674:return C_;case 35675:return P_;case 35676:return I_;case 5124:case 35670:return L_;case 35667:case 35671:return D_;case 35668:case 35672:return N_;case 35669:case 35673:return U_;case 5125:return F_;case 36294:return O_;case 36295:return B_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return G_}}function X_(i,e){i.uniform1fv(this.addr,e)}function q_(i,e){let t=fr(e,this.size,2);i.uniform2fv(this.addr,t)}function Y_(i,e){let t=fr(e,this.size,3);i.uniform3fv(this.addr,t)}function Z_(i,e){let t=fr(e,this.size,4);i.uniform4fv(this.addr,t)}function K_(i,e){let t=fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function J_(i,e){let t=fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function j_(i,e){let t=fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $_(i,e){i.uniform1iv(this.addr,e)}function Q_(i,e){i.uniform2iv(this.addr,e)}function ex(i,e){i.uniform3iv(this.addr,e)}function tx(i,e){i.uniform4iv(this.addr,e)}function nx(i,e){i.uniform1uiv(this.addr,e)}function ix(i,e){i.uniform2uiv(this.addr,e)}function sx(i,e){i.uniform3uiv(this.addr,e)}function rx(i,e){i.uniform4uiv(this.addr,e)}function ox(i,e,t){let n=this.cache,s=e.length,r=Vl(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=bh:o=vf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function ax(i,e,t){let n=this.cache,s=e.length,r=Vl(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Mf,r[o])}function lx(i,e,t){let n=this.cache,s=e.length,r=Vl(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Sf,r[o])}function cx(i,e,t){let n=this.cache,s=e.length,r=Vl(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||yf,r[o])}function hx(i){switch(i){case 5126:return X_;case 35664:return q_;case 35665:return Y_;case 35666:return Z_;case 35674:return K_;case 35675:return J_;case 35676:return j_;case 5124:case 35670:return $_;case 35667:case 35671:return Q_;case 35668:case 35672:return ex;case 35669:case 35673:return tx;case 5125:return nx;case 36294:return ix;case 36295:return sx;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return cx}}var Eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=W_(t.type)}},Th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hx(t.type)}},wh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Mh=/(\w+)(\])?(\[|\.)?/g;function rf(i,e){i.seq.push(e),i.map[e.id]=e}function ux(i,e,t){let n=i.name,s=n.length;for(Mh.lastIndex=0;;){let r=Mh.exec(n),o=Mh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rf(t,c===void 0?new Eh(a,i,e):new Th(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new wh(a),rf(t,u)),t=u}}}var dr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);ux(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function of(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var dx=37297,fx=0;function px(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var af=new Ye;function mx(i){tt._getMatrix(af,tt.workingColorSpace,i);let e=`mat3( ${af.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Pr:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+px(i.getShaderSource(e),a)}else return r}function gx(i,e){let t=mx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var _x={[Xc]:"Linear",[qc]:"Reinhard",[Yc]:"Cineon",[uo]:"ACESFilmic",[Kc]:"AgX",[Jc]:"Neutral",[Zc]:"Custom"};function xx(i,e){let t=_x[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ol=new L;function vx(){tt.getLuminanceCoefficients(Ol);let i=Ol.x.toFixed(4),e=Ol.y.toFixed(4),t=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function Mx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function bo(i){return i!==""}function cf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(i){return i.replace(bx,Tx)}var Ex=new Map;function Tx(i,e){let t=Qe[e];if(t===void 0){let n=Ex.get(e);if(n!==void 0)t=Qe[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ah(t)}var wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(i){return i.replace(wx,Ax)}function Ax(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function df(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Rx={[ho]:"SHADOWMAP_TYPE_PCF",[or]:"SHADOWMAP_TYPE_VSM"};function Cx(i){return Rx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Px={[Wi]:"ENVMAP_TYPE_CUBE",[xs]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE_UV"};function Ix(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Px[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Lx={[xs]:"ENVMAP_MODE_REFRACTION"};function Dx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Lx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Nx={[Wc]:"ENVMAP_BLENDING_MULTIPLY",[Td]:"ENVMAP_BLENDING_MIX",[wd]:"ENVMAP_BLENDING_ADD"};function Ux(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Nx[i.combine]||"ENVMAP_BLENDING_NONE"}function Fx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ox(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Cx(t),c=Ix(t),h=Dx(t),u=Ux(t),d=Fx(t),f=yx(t),g=Mx(r),y=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bo).join(`
`),p.length>0&&(p+=`
`)):(m=[df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),p=[df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hn?"#define TONE_MAPPING":"",t.toneMapping!==hn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==hn?xx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,gx("linearToOutputTexel",t.outputColorSpace),vx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bo).join(`
`)),o=Ah(o),o=cf(o,t),o=hf(o,t),a=Ah(a),a=cf(a,t),a=hf(a,t),o=uf(o),a=uf(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=M+m+o,v=M+p+a,E=of(s,s.VERTEX_SHADER,S),w=of(s,s.FRAGMENT_SHADER,v);s.attachShader(y,E),s.attachShader(y,w),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(R){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(y)||"",z=s.getShaderInfoLog(E)||"",q=s.getShaderInfoLog(w)||"",U=D.trim(),H=z.trim(),V=q.trim(),Y=!0,ne=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,E,w);else{let ie=lf(s,E,"vertex"),fe=lf(s,w,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+ie+`
`+fe)}else U!==""?Ce("WebGLProgram: Program Info Log:",U):(H===""||V==="")&&(ne=!1);ne&&(R.diagnostics={runnable:Y,programLog:U,vertexShader:{log:H,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(E),s.deleteShader(w),_=new dr(s,y),T=Sx(s,y)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,dx)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fx++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=w,this}var Bx=0,Rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ch(e),t.set(e,n)),n}},Ch=class{constructor(e){this.id=Bx++,this.code=e,this.usedTimes=0}};function zx(i){return i===qi||i===xo||i===vo}function kx(i,e,t,n,s,r){let o=new Dr,a=new Rh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,T,P,R,D,z){let q=R.fog,U=D.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Y=e.get(_.envMap||H,V),ne=Y&&Y.mapping===fo?Y.image.height:null,ie=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Ce("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let fe=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,be=fe!==void 0?fe.length:0,Ze=0;U.morphAttributes.position!==void 0&&(Ze=1),U.morphAttributes.normal!==void 0&&(Ze=2),U.morphAttributes.color!==void 0&&(Ze=3);let mt,Be,K,ue;if(ie){let Ae=ii[ie];mt=Ae.vertexShader,Be=Ae.fragmentShader}else{mt=_.vertexShader,Be=_.fragmentShader;let Ae=a.getVertexShaderStage(_),Ke=a.getFragmentShaderStage(_);a.update(_,Ae,Ke),K=Ae.id,ue=Ke.id}let se=i.getRenderTarget(),Ue=i.state.buffers.depth.getReversed(),He=D.isInstancedMesh===!0,Ie=D.isBatchedMesh===!0,Ct=!!_.map,Fe=!!_.matcap,ot=!!Y,et=!!_.aoMap,ze=!!_.lightMap,wt=!!_.bumpMap&&_.wireframe===!1,At=!!_.normalMap,Dt=!!_.displacementMap,de=!!_.emissiveMap,Ee=!!_.metalnessMap,Te=!!_.roughnessMap,N=_.anisotropy>0,qe=_.clearcoat>0,Oe=_.dispersion>0,C=_.iridescence>0,x=_.sheen>0,B=_.transmission>0,W=N&&!!_.anisotropyMap,Z=qe&&!!_.clearcoatMap,ce=qe&&!!_.clearcoatNormalMap,me=qe&&!!_.clearcoatRoughnessMap,J=C&&!!_.iridescenceMap,j=C&&!!_.iridescenceThicknessMap,_e=x&&!!_.sheenColorMap,we=x&&!!_.sheenRoughnessMap,xe=!!_.specularMap,ge=!!_.specularColorMap,De=!!_.specularIntensityMap,Ne=B&&!!_.transmissionMap,Pe=B&&!!_.thicknessMap,F=!!_.gradientMap,ae=!!_.alphaMap,$=_.alphaTest>0,ve=!!_.alphaHash,pe=!!_.extensions,ee=hn;_.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ee=i.toneMapping);let Re={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:mt,fragmentShader:Be,defines:_.defines,customVertexShaderID:K,customFragmentShaderID:ue,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Ie,batchingColor:Ie&&D._colorsTexture!==null,instancing:He,instancingColor:He&&D.instanceColor!==null,instancingMorph:He&&D.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ct,matcap:Fe,envMap:ot,envMapMode:ot&&Y.mapping,envMapCubeUVHeight:ne,aoMap:et,lightMap:ze,bumpMap:wt,normalMap:At,displacementMap:Dt,emissiveMap:de,normalMapObjectSpace:At&&_.normalMapType===Pd,normalMapTangentSpace:At&&_.normalMapType===Dl,packedNormalMap:At&&_.normalMapType===Dl&&zx(_.normalMap.format),metalnessMap:Ee,roughnessMap:Te,anisotropy:N,anisotropyMap:W,clearcoat:qe,clearcoatMap:Z,clearcoatNormalMap:ce,clearcoatRoughnessMap:me,dispersion:Oe,iridescence:C,iridescenceMap:J,iridescenceThicknessMap:j,sheen:x,sheenColorMap:_e,sheenRoughnessMap:we,specularMap:xe,specularColorMap:ge,specularIntensityMap:De,transmission:B,transmissionMap:Ne,thicknessMap:Pe,gradientMap:F,opaque:_.transparent===!1&&_.blending===ss&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:$,alphaHash:ve,combine:_.combine,mapUv:Ct&&g(_.map.channel),aoMapUv:et&&g(_.aoMap.channel),lightMapUv:ze&&g(_.lightMap.channel),bumpMapUv:wt&&g(_.bumpMap.channel),normalMapUv:At&&g(_.normalMap.channel),displacementMapUv:Dt&&g(_.displacementMap.channel),emissiveMapUv:de&&g(_.emissiveMap.channel),metalnessMapUv:Ee&&g(_.metalnessMap.channel),roughnessMapUv:Te&&g(_.roughnessMap.channel),anisotropyMapUv:W&&g(_.anisotropyMap.channel),clearcoatMapUv:Z&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:j&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(_.sheenRoughnessMap.channel),specularMapUv:xe&&g(_.specularMap.channel),specularColorMapUv:ge&&g(_.specularColorMap.channel),specularIntensityMapUv:De&&g(_.specularIntensityMap.channel),transmissionMapUv:Ne&&g(_.transmissionMap.channel),thicknessMapUv:Pe&&g(_.thicknessMap.channel),alphaMapUv:ae&&g(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(At||N),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(Ct||ae),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&At===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ue,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ze,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,decodeVideoTexture:Ct&&_.map.isVideoTexture===!0&&tt.getTransfer(_.map.colorSpace)===pt,decodeVideoTextureEmissive:de&&_.emissiveMap.isVideoTexture===!0&&tt.getTransfer(_.emissiveMap.colorSpace)===pt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ut,flipSided:_.side===Yt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&_.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)T.push(P),T.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(T,_),M(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function M(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function S(_){let T=f[_.type],P;if(T){let R=ii[T];P=qd.clone(R.uniforms)}else P=_.uniforms;return P}function v(_,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new Ox(i,T,_,s),c.push(P),h.set(T,P)),P}function E(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function A(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:S,acquireProgram:v,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:A}}function Hx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Vx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ff(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,y,m,p){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:p},i[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=o(d),M.groupOrder=y,M.renderOrder=d.renderOrder,M.z=m,M.group=p),e++,M}function l(d,f,g,y,m,p){let M=a(d,f,g,y,m,p);g.transmission>0?n.push(M):g.transparent===!0?s.push(M):t.push(M)}function c(d,f,g,y,m,p){let M=a(d,f,g,y,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,f,g){t.length>1&&t.sort(d||Vx),n.length>1&&n.sort(f||ff),s.length>1&&s.sort(f||ff),g&&(t.reverse(),n.reverse(),s.reverse())}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Gx(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new pf,i.set(n,[o])):s>=r.length?(o=new pf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Wx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new re};break;case"SpotLight":t={position:new L,direction:new L,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Xx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var qx=0;function Yx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Zx(i){let e=new Wx,t=Xx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new We,o=new We;function a(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,M=0,S=0,v=0,E=0,w=0,A=0;c.sort(Yx);for(let T=0,P=c.length;T<P;T++){let R=c[T],D=R.color,z=R.intensity,q=R.distance,U=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===qi?U=R.shadow.map.texture:U=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=D.r*z,u+=D.g*z,d+=D.b*z;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],z);A++}else if(R.isDirectionalLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let V=R.shadow,Y=t.get(R);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=R.shadow.matrix,M++}n.directional[f]=H,f++}else if(R.isSpotLight){let H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(D).multiplyScalar(z),H.distance=q,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[y]=H;let V=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,V.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[y]=V.matrix,R.castShadow){let Y=t.get(R);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,n.spotShadow[y]=Y,n.spotShadowMap[y]=U,v++}y++}else if(R.isRectAreaLight){let H=e.get(R);H.color.copy(D).multiplyScalar(z),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=H,m++}else if(R.isPointLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let V=R.shadow,Y=t.get(R);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,Y.shadowCameraNear=V.camera.near,Y.shadowCameraFar=V.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=H,g++}else if(R.isHemisphereLight){let H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(z),H.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let _=n.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==y||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==M||_.numPointShadows!==S||_.numSpotShadows!==v||_.numSpotMaps!==E||_.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,_.directionalLength=f,_.pointLength=g,_.spotLength=y,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=M,_.numPointShadows=S,_.numSpotShadows=v,_.numSpotMaps=E,_.numLightProbes=A,n.version=qx++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let S=c[p];if(S.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(S.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function mf(i){let e=new Zx(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Kx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new mf(i),e.set(s,[a])):r>=o.length?(a=new mf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Jx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$x=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Qx=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],gf=new We,So=new L,Sh=new L;function ev(i,e,t){let n=new er,s=new he,r=new he,o=new at,a=new Na,l=new Ua,c={},h=t.maxTextureSize,u={[Wn]:Yt,[Yt]:Wn,[ut]:ut},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Jx,fragmentShader:jx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new _t;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ke(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ho;let p=this.type;this.render=function(w,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===qa&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ho);let T=i.getRenderTarget(),P=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ti),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let z=p!==this.type;z&&A.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(U=>U.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,U=w.length;q<U;q++){let H=w[q],V=H.shadow;if(V===void 0){Ce("WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Y=V.getFrameExtents();s.multiply(Y),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,V.mapSize.y=r.y));let ne=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ne,V.map===null||z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===or){if(H.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new on(s.x,s.y,{format:qi,type:Pn,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),V.map.texture.name=H.name+".shadowMap",V.map.depthTexture=new _i(s.x,s.y,Cn),V.map.depthTexture.name=H.name+".shadowMapDepth",V.map.depthTexture.format=$n,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Gt,V.map.depthTexture.magFilter=Gt}else H.isPointLight?(V.map=new zl(s.x),V.map.depthTexture=new Ta(s.x,Zn)):(V.map=new on(s.x,s.y),V.map.depthTexture=new _i(s.x,s.y,Zn)),V.map.depthTexture.name=H.name+".shadowMap",V.map.depthTexture.format=$n,this.type===ho?(V.map.depthTexture.compareFunction=ne?Ul:Nl,V.map.depthTexture.minFilter=Rt,V.map.depthTexture.magFilter=Rt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Gt,V.map.depthTexture.magFilter=Gt);V.camera.updateProjectionMatrix()}let ie=V.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<ie;fe++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,fe),i.clear();else{fe===0&&(i.setRenderTarget(V.map),i.clear());let be=V.getViewport(fe);o.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),D.viewport(o)}if(H.isPointLight){let be=V.camera,Ze=V.matrix,mt=H.distance||be.far;mt!==be.far&&(be.far=mt,be.updateProjectionMatrix()),So.setFromMatrixPosition(H.matrixWorld),be.position.copy(So),Sh.copy(be.position),Sh.add($x[fe]),be.up.copy(Qx[fe]),be.lookAt(Sh),be.updateMatrixWorld(),Ze.makeTranslation(-So.x,-So.y,-So.z),gf.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),V._frustum.setFromProjectionMatrix(gf,be.coordinateSystem,be.reversedDepth)}else V.updateMatrices(H);n=V.getFrustum(),v(A,_,V.camera,H,this.type)}V.isPointLightShadow!==!0&&this.type===or&&M(V,_),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,P,R)};function M(w,A){let _=e.update(y);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new on(s.x,s.y,{format:qi,type:Pn})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,_,d,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,_,f,y,null)}function S(w,A,_,T){let P=null,R=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)P=R;else if(P=_.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let D=P.uuid,z=A.uuid,q=c[D];q===void 0&&(q={},c[D]=q);let U=q[z];U===void 0&&(U=P.clone(),q[z]=U,A.addEventListener("dispose",E)),P=U}if(P.visible=A.visible,P.wireframe=A.wireframe,T===or?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:u[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let D=i.properties.get(P);D.light=_}return P}function v(w,A,_,T,P){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===or)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let z=e.update(w),q=w.material;if(Array.isArray(q)){let U=z.groups;for(let H=0,V=U.length;H<V;H++){let Y=U[H],ne=q[Y.materialIndex];if(ne&&ne.visible){let ie=S(w,ne,T,P);w.onBeforeShadow(i,w,A,_,z,ie,Y),i.renderBufferDirect(_,null,z,ie,w,Y),w.onAfterShadow(i,w,A,_,z,ie,Y)}}}else if(q.visible){let U=S(w,q,T,P);w.onBeforeShadow(i,w,A,_,z,U,null),i.renderBufferDirect(_,null,z,U,w,null),w.onAfterShadow(i,w,A,_,z,U,null)}}let D=w.children;for(let z=0,q=D.length;z<q;z++)v(D[z],A,_,T,P)}function E(w){w.target.removeEventListener("dispose",E);for(let _ in c){let T=c[_],P=w.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function tv(i,e){function t(){let F=!1,ae=new at,$=null,ve=new at(0,0,0,0);return{setMask:function(pe){$!==pe&&!F&&(i.colorMask(pe,pe,pe,pe),$=pe)},setLocked:function(pe){F=pe},setClear:function(pe,ee,Re,Ae,Ke){Ke===!0&&(pe*=Ae,ee*=Ae,Re*=Ae),ae.set(pe,ee,Re,Ae),ve.equals(ae)===!1&&(i.clearColor(pe,ee,Re,Ae),ve.copy(ae))},reset:function(){F=!1,$=null,ve.set(-1,0,0,0)}}}function n(){let F=!1,ae=!1,$=null,ve=null,pe=null;return{setReversed:function(ee){if(ae!==ee){let Re=e.get("EXT_clip_control");ee?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ae=ee;let Ae=pe;pe=null,this.setClear(Ae)}},getReversed:function(){return ae},setTest:function(ee){ee?se(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(ee){$!==ee&&!F&&(i.depthMask(ee),$=ee)},setFunc:function(ee){if(ae&&(ee=kd[ee]),ve!==ee){switch(ee){case da:i.depthFunc(i.NEVER);break;case fa:i.depthFunc(i.ALWAYS);break;case pa:i.depthFunc(i.LESS);break;case rs:i.depthFunc(i.LEQUAL);break;case ma:i.depthFunc(i.EQUAL);break;case ga:i.depthFunc(i.GEQUAL);break;case _a:i.depthFunc(i.GREATER);break;case xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=ee}},setLocked:function(ee){F=ee},setClear:function(ee){pe!==ee&&(pe=ee,ae&&(ee=1-ee),i.clearDepth(ee))},reset:function(){F=!1,$=null,ve=null,pe=null,ae=!1}}}function s(){let F=!1,ae=null,$=null,ve=null,pe=null,ee=null,Re=null,Ae=null,Ke=null;return{setTest:function(st){F||(st?se(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(st){ae!==st&&!F&&(i.stencilMask(st),ae=st)},setFunc:function(st,pn,Tn){($!==st||ve!==pn||pe!==Tn)&&(i.stencilFunc(st,pn,Tn),$=st,ve=pn,pe=Tn)},setOp:function(st,pn,Tn){(ee!==st||Re!==pn||Ae!==Tn)&&(i.stencilOp(st,pn,Tn),ee=st,Re=pn,Ae=Tn)},setLocked:function(st){F=st},setClear:function(st){Ke!==st&&(i.clearStencil(st),Ke=st)},reset:function(){F=!1,ae=null,$=null,ve=null,pe=null,ee=null,Re=null,Ae=null,Ke=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,S=null,v=null,E=null,w=null,A=null,_=new re(0,0,0),T=0,P=!1,R=null,D=null,z=null,q=null,U=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Y=0,ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ne)[1]),V=Y>=1):ne.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),V=Y>=2);let ie=null,fe={},be=i.getParameter(i.SCISSOR_BOX),Ze=i.getParameter(i.VIEWPORT),mt=new at().fromArray(be),Be=new at().fromArray(Ze);function K(F,ae,$,ve){let pe=new Uint8Array(4),ee=i.createTexture();i.bindTexture(F,ee),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<$;Re++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ae+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return ee}let ue={};ue[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(rs),wt(!1),At(Hc),se(i.CULL_FACE),et(ti);function se(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Ue(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function He(F,ae){return d[F]!==ae?(i.bindFramebuffer(F,ae),d[F]=ae,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ae),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ie(F,ae){let $=g,ve=!1;if(F){$=f.get(ae),$===void 0&&($=[],f.set(ae,$));let pe=F.textures;if($.length!==pe.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Re=pe.length;ee<Re;ee++)$[ee]=i.COLOR_ATTACHMENT0+ee;$.length=pe.length,ve=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ve=!0);ve&&i.drawBuffers($)}function Ct(F){return y!==F?(i.useProgram(F),y=F,!0):!1}let Fe={[Ui]:i.FUNC_ADD,[ld]:i.FUNC_SUBTRACT,[cd]:i.FUNC_REVERSE_SUBTRACT};Fe[hd]=i.MIN,Fe[ud]=i.MAX;let ot={[dd]:i.ZERO,[fd]:i.ONE,[pd]:i.SRC_COLOR,[ha]:i.SRC_ALPHA,[yd]:i.SRC_ALPHA_SATURATE,[xd]:i.DST_COLOR,[gd]:i.DST_ALPHA,[md]:i.ONE_MINUS_SRC_COLOR,[ua]:i.ONE_MINUS_SRC_ALPHA,[vd]:i.ONE_MINUS_DST_COLOR,[_d]:i.ONE_MINUS_DST_ALPHA,[Md]:i.CONSTANT_COLOR,[Sd]:i.ONE_MINUS_CONSTANT_COLOR,[bd]:i.CONSTANT_ALPHA,[Ed]:i.ONE_MINUS_CONSTANT_ALPHA};function et(F,ae,$,ve,pe,ee,Re,Ae,Ke,st){if(F===ti){m===!0&&(Ue(i.BLEND),m=!1);return}if(m===!1&&(se(i.BLEND),m=!0),F!==ad){if(F!==p||st!==P){if((M!==Ui||E!==Ui)&&(i.blendEquation(i.FUNC_ADD),M=Ui,E=Ui),st)switch(F){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _s:i.blendFunc(i.ONE,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ge("WebGLState: Invalid blending: ",F);break}else switch(F){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vc:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gc:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",F);break}S=null,v=null,w=null,A=null,_.set(0,0,0),T=0,p=F,P=st}return}pe=pe||ae,ee=ee||$,Re=Re||ve,(ae!==M||pe!==E)&&(i.blendEquationSeparate(Fe[ae],Fe[pe]),M=ae,E=pe),($!==S||ve!==v||ee!==w||Re!==A)&&(i.blendFuncSeparate(ot[$],ot[ve],ot[ee],ot[Re]),S=$,v=ve,w=ee,A=Re),(Ae.equals(_)===!1||Ke!==T)&&(i.blendColor(Ae.r,Ae.g,Ae.b,Ke),_.copy(Ae),T=Ke),p=F,P=!1}function ze(F,ae){F.side===ut?Ue(i.CULL_FACE):se(i.CULL_FACE);let $=F.side===Yt;ae&&($=!$),wt($),F.blending===ss&&F.transparent===!1?et(ti):et(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let ve=F.stencilWrite;a.setTest(ve),ve&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),de(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(F){R!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),R=F)}function At(F){F!==rd?(se(i.CULL_FACE),F!==D&&(F===Hc?i.cullFace(i.BACK):F===od?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),D=F}function Dt(F){F!==z&&(V&&i.lineWidth(F),z=F)}function de(F,ae,$){F?(se(i.POLYGON_OFFSET_FILL),(q!==ae||U!==$)&&(q=ae,U=$,o.getReversed()&&(ae=-ae),i.polygonOffset(ae,$))):Ue(i.POLYGON_OFFSET_FILL)}function Ee(F){F?se(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function Te(F){F===void 0&&(F=i.TEXTURE0+H-1),ie!==F&&(i.activeTexture(F),ie=F)}function N(F,ae,$){$===void 0&&(ie===null?$=i.TEXTURE0+H-1:$=ie);let ve=fe[$];ve===void 0&&(ve={type:void 0,texture:void 0},fe[$]=ve),(ve.type!==F||ve.texture!==ae)&&(ie!==$&&(i.activeTexture($),ie=$),i.bindTexture(F,ae||ue[F]),ve.type=F,ve.texture=ae)}function qe(){let F=fe[ie];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Oe(){try{i.compressedTexImage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function x(){try{i.texSubImage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function B(){try{i.texSubImage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function ce(){try{i.texStorage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function me(){try{i.texStorage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function J(){try{i.texImage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function j(){try{i.texImage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function _e(F){return u[F]!==void 0?u[F]:i.getParameter(F)}function we(F,ae){u[F]!==ae&&(i.pixelStorei(F,ae),u[F]=ae)}function xe(F){mt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),mt.copy(F))}function ge(F){Be.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Be.copy(F))}function De(F,ae){let $=c.get(ae);$===void 0&&($=new WeakMap,c.set(ae,$));let ve=$.get(F);ve===void 0&&(ve=i.getUniformBlockIndex(ae,F.name),$.set(F,ve))}function Ne(F,ae){let ve=c.get(ae).get(F);l.get(ae)!==ve&&(i.uniformBlockBinding(ae,ve,F.__bindingPointIndex),l.set(ae,ve))}function Pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ie=null,fe={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,S=null,v=null,E=null,w=null,A=null,_=new re(0,0,0),T=0,P=!1,R=null,D=null,z=null,q=null,U=null,mt.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:Ue,bindFramebuffer:He,drawBuffers:Ie,useProgram:Ct,setBlending:et,setMaterial:ze,setFlipSided:wt,setCullFace:At,setLineWidth:Dt,setPolygonOffset:de,setScissorTest:Ee,activeTexture:Te,bindTexture:N,unbindTexture:qe,compressedTexImage2D:Oe,compressedTexImage3D:C,texImage2D:J,texImage3D:j,pixelStorei:we,getParameter:_e,updateUBOMapping:De,uniformBlockBinding:Ne,texStorage2D:ce,texStorage3D:me,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:xe,viewport:ge,reset:Pe}}function nv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,x){return g?new OffscreenCanvas(C,x):qs("canvas")}function m(C,x,B){let W=1,Z=Oe(C);if((Z.width>B||Z.height>B)&&(W=B/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ce=Math.floor(W*Z.width),me=Math.floor(W*Z.height);d===void 0&&(d=y(ce,me));let J=x?y(ce,me):d;return J.width=ce,J.height=me,J.getContext("2d").drawImage(C,0,0,ce,me),Ce("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ce+"x"+me+")."),J}else return"data"in C&&Ce("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function p(C){return C.generateMipmaps}function M(C){i.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,x,B,W,Z,ce=!1){if(C!==null){if(i[C]!==void 0)return i[C];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let me;W&&(me=e.get("EXT_texture_norm16"),me||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8),B===i.UNSIGNED_SHORT&&me&&(J=me.R16_EXT),B===i.SHORT&&me&&(J=me.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),x===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8),B===i.UNSIGNED_SHORT&&me&&(J=me.RG16_EXT),B===i.SHORT&&me&&(J=me.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&me&&(J=me.RGB16_EXT),B===i.SHORT&&me&&(J=me.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){let j=ce?Pr:tt.getTransfer(Z);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=j===pt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&me&&(J=me.RGBA16_EXT),B===i.SHORT&&me&&(J=me.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function E(C,x){let B;return C?x===null||x===Zn||x===cr?B=i.DEPTH24_STENCIL8:x===Cn?B=i.DEPTH32F_STENCIL8:x===lr&&(B=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Zn||x===cr?B=i.DEPTH_COMPONENT24:x===Cn?B=i.DEPTH_COMPONENT32F:x===lr&&(B=i.DEPTH_COMPONENT16),B}function w(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Gt&&C.minFilter!==Rt?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function A(C){let x=C.target;x.removeEventListener("dispose",A),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&u.delete(x)}function _(C){let x=C.target;x.removeEventListener("dispose",_),R(x)}function T(C){let x=n.get(C);if(x.__webglInit===void 0)return;let B=C.source,W=f.get(B);if(W){let Z=W[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(C),Object.keys(W).length===0&&f.delete(B)}n.remove(C)}function P(C){let x=n.get(C);i.deleteTexture(x.__webglTexture);let B=C.source,W=f.get(B);delete W[x.__cacheKey],o.memory.textures--}function R(C){let x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let Z=0;Z<x.__webglFramebuffer[W].length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[W][Z]);else i.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)i.deleteFramebuffer(x.__webglFramebuffer[W]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=C.textures;for(let W=0,Z=B.length;W<Z;W++){let ce=n.get(B[W]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(B[W])}n.remove(C)}let D=0;function z(){D=0}function q(){return D}function U(C){D=C}function H(){let C=D;return C>=s.maxTextures&&Ce("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function V(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function Y(C,x){let B=n.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let W=C.image;if(W===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(B,C,x);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function ne(C,x){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){Ue(B,C,x);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function ie(C,x){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){Ue(B,C,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function fe(C,x){let B=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){He(B,C,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let be={[Fi]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[Ws]:i.MIRRORED_REPEAT},Ze={[Gt]:i.NEAREST,[Ka]:i.NEAREST_MIPMAP_NEAREST,[vs]:i.NEAREST_MIPMAP_LINEAR,[Rt]:i.LINEAR,[ar]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},mt={[Id]:i.NEVER,[Fd]:i.ALWAYS,[Ld]:i.LESS,[Nl]:i.LEQUAL,[Dd]:i.EQUAL,[Ul]:i.GEQUAL,[Nd]:i.GREATER,[Ud]:i.NOTEQUAL};function Be(C,x){if(x.type===Cn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Rt||x.magFilter===ar||x.magFilter===vs||x.magFilter===Yn||x.minFilter===Rt||x.minFilter===ar||x.minFilter===vs||x.minFilter===Yn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,be[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,be[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,be[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Ze[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Ze[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,mt[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Gt||x.minFilter!==vs&&x.minFilter!==Yn||x.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function K(C,x){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",A));let W=x.source,Z=f.get(W);Z===void 0&&(Z={},f.set(W,Z));let ce=V(x);if(ce!==C.__cacheKey){Z[ce]===void 0&&(Z[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[ce].usedTimes++;let me=Z[C.__cacheKey];me!==void 0&&(Z[C.__cacheKey].usedTimes--,me.usedTimes===0&&P(x)),C.__cacheKey=ce,C.__webglTexture=Z[ce].texture}return B}function ue(C,x,B){return Math.floor(Math.floor(C/B)/x)}function se(C,x,B,W){let ce=C.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,W,x.data);else{ce.sort((we,xe)=>we.start-xe.start);let me=0;for(let we=1;we<ce.length;we++){let xe=ce[me],ge=ce[we],De=xe.start+xe.count,Ne=ue(ge.start,x.width,4),Pe=ue(xe.start,x.width,4);ge.start<=De+1&&Ne===Pe&&ue(ge.start+ge.count-1,x.width,4)===Ne?xe.count=Math.max(xe.count,ge.start+ge.count-xe.start):(++me,ce[me]=ge)}ce.length=me+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),_e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let we=0,xe=ce.length;we<xe;we++){let ge=ce[we],De=Math.floor(ge.start/4),Ne=Math.ceil(ge.count/4),Pe=De%x.width,F=Math.floor(De/x.width),ae=Ne,$=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Pe,F,ae,$,B,W,x.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function Ue(C,x,B){let W=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=i.TEXTURE_3D);let Z=K(C,x),ce=x.source;t.bindTexture(W,C.__webglTexture,i.TEXTURE0+B);let me=n.get(ce);if(ce.version!==me.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let $=tt.getPrimaries(tt.workingColorSpace),ve=x.colorSpace===Ti?null:tt.getPrimaries(x.colorSpace),pe=x.colorSpace===Ti||$===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let j=m(x.image,!1,s.maxTextureSize);j=qe(x,j);let _e=r.convert(x.format,x.colorSpace),we=r.convert(x.type),xe=v(x.internalFormat,_e,we,x.normalized,x.colorSpace,x.isVideoTexture);Be(W,x);let ge,De=x.mipmaps,Ne=x.isVideoTexture!==!0,Pe=me.__version===void 0||Z===!0,F=ce.dataReady,ae=w(x,j);if(x.isDepthTexture)xe=E(x.format===Xi,x.type),Pe&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,xe,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,xe,j.width,j.height,0,_e,we,null));else if(x.isDataTexture)if(De.length>0){Ne&&Pe&&t.texStorage2D(i.TEXTURE_2D,ae,xe,De[0].width,De[0].height);for(let $=0,ve=De.length;$<ve;$++)ge=De[$],Ne?F&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ge.width,ge.height,_e,we,ge.data):t.texImage2D(i.TEXTURE_2D,$,xe,ge.width,ge.height,0,_e,we,ge.data);x.generateMipmaps=!1}else Ne?(Pe&&t.texStorage2D(i.TEXTURE_2D,ae,xe,j.width,j.height),F&&se(x,j,_e,we)):t.texImage2D(i.TEXTURE_2D,0,xe,j.width,j.height,0,_e,we,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ne&&Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,xe,De[0].width,De[0].height,j.depth);for(let $=0,ve=De.length;$<ve;$++)if(ge=De[$],x.format!==In)if(_e!==null)if(Ne){if(F)if(x.layerUpdates.size>0){let pe=uh(ge.width,ge.height,x.format,x.type);for(let ee of x.layerUpdates){let Re=ge.data.subarray(ee*pe/ge.data.BYTES_PER_ELEMENT,(ee+1)*pe/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ee,ge.width,ge.height,1,_e,Re)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ge.width,ge.height,j.depth,_e,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,xe,ge.width,ge.height,j.depth,0,ge.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ge.width,ge.height,j.depth,_e,we,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,xe,ge.width,ge.height,j.depth,0,_e,we,ge.data)}else{Ne&&Pe&&t.texStorage2D(i.TEXTURE_2D,ae,xe,De[0].width,De[0].height);for(let $=0,ve=De.length;$<ve;$++)ge=De[$],x.format!==In?_e!==null?Ne?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,ge.width,ge.height,_e,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,$,xe,ge.width,ge.height,0,ge.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?F&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ge.width,ge.height,_e,we,ge.data):t.texImage2D(i.TEXTURE_2D,$,xe,ge.width,ge.height,0,_e,we,ge.data)}else if(x.isDataArrayTexture)if(Ne){if(Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,xe,j.width,j.height,j.depth),F)if(x.layerUpdates.size>0){let $=uh(j.width,j.height,x.format,x.type);for(let ve of x.layerUpdates){let pe=j.data.subarray(ve*$/j.data.BYTES_PER_ELEMENT,(ve+1)*$/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,j.width,j.height,1,_e,we,pe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,_e,we,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,j.width,j.height,j.depth,0,_e,we,j.data);else if(x.isData3DTexture)Ne?(Pe&&t.texStorage3D(i.TEXTURE_3D,ae,xe,j.width,j.height,j.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,_e,we,j.data)):t.texImage3D(i.TEXTURE_3D,0,xe,j.width,j.height,j.depth,0,_e,we,j.data);else if(x.isFramebufferTexture){if(Pe)if(Ne)t.texStorage2D(i.TEXTURE_2D,ae,xe,j.width,j.height);else{let $=j.width,ve=j.height;for(let pe=0;pe<ae;pe++)t.texImage2D(i.TEXTURE_2D,pe,xe,$,ve,0,_e,we,null),$>>=1,ve>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),j.parentNode!==$){$.appendChild(j),u.add(x),$.onpaint=ve=>{let pe=ve.changedElements;for(let ee of u)pe.includes(ee.image)&&(ee.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let pe=i.RGBA,ee=i.RGBA,Re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pe,ee,Re,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(De.length>0){if(Ne&&Pe){let $=Oe(De[0]);t.texStorage2D(i.TEXTURE_2D,ae,xe,$.width,$.height)}for(let $=0,ve=De.length;$<ve;$++)ge=De[$],Ne?F&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,_e,we,ge):t.texImage2D(i.TEXTURE_2D,$,xe,_e,we,ge);x.generateMipmaps=!1}else if(Ne){if(Pe){let $=Oe(j);t.texStorage2D(i.TEXTURE_2D,ae,xe,$.width,$.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,we,j)}else t.texImage2D(i.TEXTURE_2D,0,xe,_e,we,j);p(x)&&M(W),me.__version=ce.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function He(C,x,B){if(x.image.length!==6)return;let W=K(C,x),Z=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);let ce=n.get(Z);if(Z.version!==ce.__version||W===!0){t.activeTexture(i.TEXTURE0+B);let me=tt.getPrimaries(tt.workingColorSpace),J=x.colorSpace===Ti?null:tt.getPrimaries(x.colorSpace),j=x.colorSpace===Ti||me===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let _e=x.isCompressedTexture||x.image[0].isCompressedTexture,we=x.image[0]&&x.image[0].isDataTexture,xe=[];for(let ee=0;ee<6;ee++)!_e&&!we?xe[ee]=m(x.image[ee],!0,s.maxCubemapSize):xe[ee]=we?x.image[ee].image:x.image[ee],xe[ee]=qe(x,xe[ee]);let ge=xe[0],De=r.convert(x.format,x.colorSpace),Ne=r.convert(x.type),Pe=v(x.internalFormat,De,Ne,x.normalized,x.colorSpace),F=x.isVideoTexture!==!0,ae=ce.__version===void 0||W===!0,$=Z.dataReady,ve=w(x,ge);Be(i.TEXTURE_CUBE_MAP,x);let pe;if(_e){F&&ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Pe,ge.width,ge.height);for(let ee=0;ee<6;ee++){pe=xe[ee].mipmaps;for(let Re=0;Re<pe.length;Re++){let Ae=pe[Re];x.format!==In?De!==null?F?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,0,0,Ae.width,Ae.height,De,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,Pe,Ae.width,Ae.height,0,Ae.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,0,0,Ae.width,Ae.height,De,Ne,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,Pe,Ae.width,Ae.height,0,De,Ne,Ae.data)}}}else{if(pe=x.mipmaps,F&&ae){pe.length>0&&ve++;let ee=Oe(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Pe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(we){F?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,xe[ee].width,xe[ee].height,De,Ne,xe[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Pe,xe[ee].width,xe[ee].height,0,De,Ne,xe[ee].data);for(let Re=0;Re<pe.length;Re++){let Ke=pe[Re].image[ee].image;F?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,0,0,Ke.width,Ke.height,De,Ne,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,Pe,Ke.width,Ke.height,0,De,Ne,Ke.data)}}else{F?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,De,Ne,xe[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Pe,De,Ne,xe[ee]);for(let Re=0;Re<pe.length;Re++){let Ae=pe[Re];F?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,0,0,De,Ne,Ae.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,Pe,De,Ne,Ae.image[ee])}}}p(x)&&M(i.TEXTURE_CUBE_MAP),ce.__version=Z.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Ie(C,x,B,W,Z,ce){let me=r.convert(B.format,B.colorSpace),J=r.convert(B.type),j=v(B.internalFormat,me,J,B.normalized,B.colorSpace),_e=n.get(x),we=n.get(B);if(we.__renderTarget=x,!_e.__hasExternalTextures){let xe=Math.max(1,x.width>>ce),ge=Math.max(1,x.height>>ce);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,ce,j,xe,ge,x.depth,0,me,J,null):t.texImage2D(Z,ce,j,xe,ge,0,me,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Te(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Z,we.__webglTexture,0,Ee(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Z,we.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(C,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){let W=x.depthTexture,Z=W&&W.isDepthTexture?W.type:null,ce=E(x.stencilBuffer,Z),me=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Te(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee(x),ce,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee(x),ce,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ce,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,C)}else{let W=x.textures;for(let Z=0;Z<W.length;Z++){let ce=W[Z],me=r.convert(ce.format,ce.colorSpace),J=r.convert(ce.type),j=v(ce.internalFormat,me,J,ce.normalized,ce.colorSpace);Te(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee(x),j,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee(x),j,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,j,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(C,x,B){let W=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(x.depthTexture);if(Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Be(i.TEXTURE_CUBE_MAP,x.depthTexture);let _e=r.convert(x.depthTexture.format),we=r.convert(x.depthTexture.type),xe;x.depthTexture.format===$n?xe=i.DEPTH_COMPONENT24:x.depthTexture.format===Xi&&(xe=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xe,x.width,x.height,0,_e,we,null)}}else Y(x.depthTexture,0);let ce=Z.__webglTexture,me=Ee(x),J=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,j=x.depthTexture.format===Xi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===$n)Te(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,ce,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,j,J,ce,0);else if(x.depthTexture.format===Xi)Te(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,ce,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,j,J,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(C){let x=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let W=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){let Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=W}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let W=0;W<6;W++)Fe(x.__webglFramebuffer[W],C,W);else{let W=C.texture.mipmaps;W&&W.length>0?Fe(x.__webglFramebuffer[0],C,0):Fe(x.__webglFramebuffer,C,0)}else if(B){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=i.createRenderbuffer(),Ct(x.__webglDepthbuffer[W],C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=x.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ce)}}else{let W=C.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ct(x.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(C,x,B){let W=n.get(C);x!==void 0&&Ie(W.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ot(C)}function ze(C){let x=C.texture,B=n.get(C),W=n.get(x);C.addEventListener("dispose",_);let Z=C.textures,ce=C.isWebGLCubeRenderTarget===!0,me=Z.length>1;if(me||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=x.version,o.memory.textures++),ce){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let j=0;j<x.mipmaps.length;j++)B.__webglFramebuffer[J][j]=i.createFramebuffer()}else B.__webglFramebuffer[J]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)B.__webglFramebuffer[J]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(me)for(let J=0,j=Z.length;J<j;J++){let _e=n.get(Z[J]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Te(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let j=Z[J];B.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[J]);let _e=r.convert(j.format,j.colorSpace),we=r.convert(j.type),xe=v(j.internalFormat,_e,we,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),ge=Ee(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,xe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,B.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Be(i.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)Ie(B.__webglFramebuffer[J][j],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,j);else Ie(B.__webglFramebuffer[J],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(x)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let J=0,j=Z.length;J<j;J++){let _e=Z[J],we=n.get(_e),xe=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,we.__webglTexture),Be(xe,_e),Ie(B.__webglFramebuffer,C,_e,i.COLOR_ATTACHMENT0+J,xe,0),p(_e)&&M(xe)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,W.__webglTexture),Be(J,x),x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)Ie(B.__webglFramebuffer[j],C,x,i.COLOR_ATTACHMENT0,J,j);else Ie(B.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,J,0);p(x)&&M(J),t.unbindTexture()}C.depthBuffer&&ot(C)}function wt(C){let x=C.textures;for(let B=0,W=x.length;B<W;B++){let Z=x[B];if(p(Z)){let ce=S(C),me=n.get(Z).__webglTexture;t.bindTexture(ce,me),M(ce),t.unbindTexture()}}}let At=[],Dt=[];function de(C){if(C.samples>0){if(Te(C)===!1){let x=C.textures,B=C.width,W=C.height,Z=i.COLOR_BUFFER_BIT,ce=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(C),J=x.length>1;if(J)for(let _e=0;_e<x.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let j=C.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let _e=0;_e<x.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);let we=n.get(x[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,B,W,0,0,B,W,Z,i.NEAREST),l===!0&&(At.length=0,Dt.length=0,At.push(i.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(At.push(ce),Dt.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,At))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let _e=0;_e<x.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);let we=n.get(x[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ee(C){return Math.min(s.maxSamples,C.samples)}function Te(C){let x=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(C){let x=o.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function qe(C,x){let B=C.colorSpace,W=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==fn&&B!==Ti&&(tt.getTransfer(B)===pt?(W!==In||Z!==bn)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",B)),x}function Oe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.getTextureUnits=q,this.setTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=ne,this.setTexture3D=ie,this.setTextureCube=fe,this.rebindTextures=et,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function iv(i,e){function t(n,s=Ti){let r,o=tt.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===th)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$c)return i.BYTE;if(n===Qc)return i.SHORT;if(n===lr)return i.UNSIGNED_SHORT;if(n===Ja)return i.INT;if(n===Zn)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Pn)return i.HALF_FLOAT;if(n===nh)return i.ALPHA;if(n===ih)return i.RGB;if(n===In)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===Xi)return i.DEPTH_STENCIL;if(n===Qa)return i.RED;if(n===el)return i.RED_INTEGER;if(n===qi)return i.RG;if(n===tl)return i.RG_INTEGER;if(n===nl)return i.RGBA_INTEGER;if(n===po||n===mo||n===go||n===_o)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===il||n===sl||n===rl||n===ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===al||n===ll||n===cl||n===hl||n===ul||n===xo||n===dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===al||n===ll)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===hl)return r.COMPRESSED_R11_EAC;if(n===ul)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xo)return r.COMPRESSED_RG11_EAC;if(n===dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl||n===Ml||n===Sl||n===bl||n===El||n===Tl||n===wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ml)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_l)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ml)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===El)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Al||n===Rl||n===Cl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Al)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pl||n===Il||n===vo||n===Ll)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ph=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Gr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ot({vertexShader:sv,fragmentShader:rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ih=class extends Xn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new Ph,p={},M=t.getContextAttributes(),S=null,v=null,E=[],w=[],A=new he,_=null,T=new Vt;T.viewport=new at;let P=new Vt;P.viewport=new at;let R=[T,P],D=new Wa,z=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ue=E[K];return ue===void 0&&(ue=new Ks,E[K]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(K){let ue=E[K];return ue===void 0&&(ue=new Ks,E[K]=ue),ue.getGripSpace()},this.getHand=function(K){let ue=E[K];return ue===void 0&&(ue=new Ks,E[K]=ue),ue.getHandSpace()};function U(K){let ue=w.indexOf(K.inputSource);if(ue===-1)return;let se=E[ue];se!==void 0&&(se.update(K.inputSource,K.frame,c||o),se.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",V);for(let K=0;K<E.length;K++){let ue=w[K];ue!==null&&(w[K]=null,E[K].disconnect(ue))}z=null,q=null,m.reset();for(let K in p)delete p[K];e.setRenderTarget(S),f=null,d=null,u=null,s=null,v=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",H),s.addEventListener("inputsourceschange",V),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ue=null,He=null;M.depth&&(He=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=M.stencil?Xi:$n,Ue=M.stencil?cr:Zn);let Ie={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ie),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new on(d.textureWidth,d.textureHeight,{format:In,type:bn,depthTexture:new _i(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let se={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new on(f.framebufferWidth,f.framebufferHeight,{format:In,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Be.setContext(s),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(K){for(let ue=0;ue<K.removed.length;ue++){let se=K.removed[ue],Ue=w.indexOf(se);Ue>=0&&(w[Ue]=null,E[Ue].disconnect(se))}for(let ue=0;ue<K.added.length;ue++){let se=K.added[ue],Ue=w.indexOf(se);if(Ue===-1){for(let Ie=0;Ie<E.length;Ie++)if(Ie>=w.length){w.push(se),Ue=Ie;break}else if(w[Ie]===null){w[Ie]=se,Ue=Ie;break}if(Ue===-1)break}let He=E[Ue];He&&He.connect(se)}}let Y=new L,ne=new L;function ie(K,ue,se){Y.setFromMatrixPosition(ue.matrixWorld),ne.setFromMatrixPosition(se.matrixWorld);let Ue=Y.distanceTo(ne),He=ue.projectionMatrix.elements,Ie=se.projectionMatrix.elements,Ct=He[14]/(He[10]-1),Fe=He[14]/(He[10]+1),ot=(He[9]+1)/He[5],et=(He[9]-1)/He[5],ze=(He[8]-1)/He[0],wt=(Ie[8]+1)/Ie[0],At=Ct*ze,Dt=Ct*wt,de=Ue/(-ze+wt),Ee=de*-ze;if(ue.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ee),K.translateZ(de),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),He[10]===-1)K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let Te=Ct+de,N=Fe+de,qe=At-Ee,Oe=Dt+(Ue-Ee),C=ot*Fe/N*Te,x=et*Fe/N*Te;K.projectionMatrix.makePerspective(qe,Oe,C,x,Te,N),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function fe(K,ue){ue===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ue.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ue=K.near,se=K.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(se=m.depthFar)),D.near=P.near=T.near=ue,D.far=P.far=T.far=se,(z!==D.near||q!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),z=D.near,q=D.far),D.layers.mask=K.layers.mask|6,T.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;let Ue=K.parent,He=D.cameras;fe(D,Ue);for(let Ie=0;Ie<He.length;Ie++)fe(He[Ie],Ue);He.length===2?ie(D,T,P):D.projectionMatrix.copy(T.projectionMatrix),be(K,D,Ue)};function be(K,ue,se){se===null?K.matrix.copy(ue.matrixWorld):(K.matrix.copy(se.matrixWorld),K.matrix.invert(),K.matrix.multiply(ue.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ls*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(K){return p[K]};let Ze=null;function mt(K,ue){if(h=ue.getViewerPose(c||o),g=ue,h!==null){let se=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ue=!1;se.length!==D.cameras.length&&(D.cameras.length=0,Ue=!0);for(let Fe=0;Fe<se.length;Fe++){let ot=se[Fe],et=null;if(f!==null)et=f.getViewport(ot);else{let wt=u.getViewSubImage(d,ot);et=wt.viewport,Fe===0&&(e.setRenderTargetTextures(v,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(v))}let ze=R[Fe];ze===void 0&&(ze=new Vt,ze.layers.enable(Fe),ze.viewport=new at,R[Fe]=ze),ze.matrix.fromArray(ot.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(ot.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(et.x,et.y,et.width,et.height),Fe===0&&(D.matrix.copy(ze.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ue===!0&&D.cameras.push(ze)}let He=s.enabledFeatures;if(He&&He.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let Fe=u.getDepthInformation(se[0]);Fe&&Fe.isValid&&Fe.texture&&m.init(Fe,s.renderState)}if(He&&He.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let Fe=0;Fe<se.length;Fe++){let ot=se[Fe].camera;if(ot){let et=p[ot];et||(et=new Gr,p[ot]=et);let ze=u.getCameraImage(ot);et.sourceTexture=ze}}}}for(let se=0;se<E.length;se++){let Ue=w[se],He=E[se];Ue!==null&&He!==void 0&&He.update(Ue,ue,c||o)}Ze&&Ze(K,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),g=null}let Be=new _f;Be.setAnimationLoop(mt),this.setAnimationLoop=function(K){Ze=K},this.dispose=function(){}}},ov=new We,bf=new Ye;bf.set(-1,0,0,0,1,0,0,0,1);function av(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,S,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),S=M.envMap,v=M.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(ov.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(bf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lv(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let w=E.program;n.uniformBlockBinding(v,w)}function c(v,E){let w=s[v.id];w===void 0&&(m(v),w=h(v),s[v.id]=w,v.addEventListener("dispose",M));let A=E.program;n.updateUBOMapping(v,A);let _=e.render.frame;r[v.id]!==_&&(d(v),r[v.id]=_)}function h(v){let E=u();v.__bindingPointIndex=E;let w=i.createBuffer(),A=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,w),w}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let E=s[v.id],w=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let _=0,T=w.length;_<T;_++){let P=w[_];if(Array.isArray(P))for(let R=0,D=P.length;R<D;R++)f(P[R],_,R,A);else f(P,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,E,w,A){if(y(v,E,w,A)===!0){let _=v.__offset,T=v.value;if(Array.isArray(T)){let P=0;for(let R=0;R<T.length;R++){let D=T[R],z=p(D);g(D,v.__data,P),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(P+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function g(v,E,w){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,w)}function y(v,E,w,A){let _=v.value,T=E+"_"+w;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{let P=A[T];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(v){let E=v.uniforms,w=0,A=16;for(let T=0,P=E.length;T<P;T++){let R=Array.isArray(E[T])?E[T]:[E[T]];for(let D=0,z=R.length;D<z;D++){let q=R[D],U=Array.isArray(q.value)?q.value:[q.value];for(let H=0,V=U.length;H<V;H++){let Y=U[H],ne=p(Y),ie=w%A,fe=ie%ne.boundary,be=ie+fe;w+=fe,be!==0&&A-be<ne.storage&&(w+=A-be),q.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=w,w+=ne.storage}}}let _=w%A;return _>0&&(w+=A-_),v.__size=w,v.__cache={},this}function p(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",v),E}function M(v){let E=v.target;E.removeEventListener("dispose",M);let w=o.indexOf(E.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function S(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:S}}var cv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function hv(){return ni===null&&(ni=new Qs(cv,16,16,qi,Pn),ni.name="DFG_LUT",ni.minFilter=Rt,ni.magFilter=Rt,ni.wrapS=Nn,ni.wrapT=Nn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var kl=class{constructor(e={}){let{canvas:t=Od(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=bn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=f,m=new Set([nl,tl,el]),p=new Set([bn,Zn,lr,cr,ja,$a]),M=new Uint32Array(4),S=new Int32Array(4),v=new L,E=null,w=null,A=[],_=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,R=!1,D=null,z=null,q=null,U=null;this._outputColorSpace=Ht;let H=0,V=0,Y=null,ne=-1,ie=null,fe=new at,be=new at,Ze=null,mt=new re(0),Be=0,K=t.width,ue=t.height,se=1,Ue=null,He=null,Ie=new at(0,0,K,ue),Ct=new at(0,0,K,ue),Fe=!1,ot=new er,et=!1,ze=!1,wt=new We,At=new L,Dt=new at,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ee=!1;function Te(){return Y===null?se:1}let N=n;function qe(b,O){return t.getContext(b,O)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",pn,!1),N===null){let O="webgl2";if(N=qe(O,b),N===null)throw qe(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Ge("WebGLRenderer: "+b.message),b}let Oe,C,x,B,W,Z,ce,me,J,j,_e,we,xe,ge,De,Ne,Pe,F,ae,$,ve,pe,ee;function Re(){Oe=new __(N),Oe.init(),ve=new iv(N,Oe),C=new c_(N,Oe,e,ve),x=new tv(N,Oe),C.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),z=N.createFramebuffer(),q=N.createFramebuffer(),U=N.createFramebuffer(),B=new y_(N),W=new Hx,Z=new nv(N,Oe,x,W,C,ve,B),ce=new g_(P),me=new Em(N),pe=new a_(N,me),J=new x_(N,me,B,pe),j=new S_(N,J,me,pe,B),F=new M_(N,C,Z),De=new h_(W),_e=new kx(P,ce,Oe,C,pe,De),we=new av(P,W),xe=new Gx,ge=new Kx(Oe),Pe=new o_(P,ce,x,j,g,l),Ne=new ev(P,j,C),ee=new lv(N,B,C,x),ae=new l_(N,Oe,B),$=new v_(N,Oe,B),B.programs=_e.programs,P.capabilities=C,P.extensions=Oe,P.properties=W,P.renderLists=xe,P.shadowMap=Ne,P.state=x,P.info=B}Re(),y!==bn&&(T=new E_(y,t.width,t.height,a,s,r));let Ae=new Ih(P,N);this.xr=Ae,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=Oe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Oe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(b){b!==void 0&&(se=b,this.setSize(K,ue,!1))},this.getSize=function(b){return b.set(K,ue)},this.setSize=function(b,O,X=!0){if(Ae.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,ue=O,t.width=Math.floor(b*se),t.height=Math.floor(O*se),X===!0&&(t.style.width=b+"px",t.style.height=O+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(K*se,ue*se).floor()},this.setDrawingBufferSize=function(b,O,X){K=b,ue=O,se=X,t.width=Math.floor(b*X),t.height=Math.floor(O*X),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(y===bn){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(fe)},this.getViewport=function(b){return b.copy(Ie)},this.setViewport=function(b,O,X,G){b.isVector4?Ie.set(b.x,b.y,b.z,b.w):Ie.set(b,O,X,G),x.viewport(fe.copy(Ie).multiplyScalar(se).round())},this.getScissor=function(b){return b.copy(Ct)},this.setScissor=function(b,O,X,G){b.isVector4?Ct.set(b.x,b.y,b.z,b.w):Ct.set(b,O,X,G),x.scissor(be.copy(Ct).multiplyScalar(se).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(b){x.setScissorTest(Fe=b)},this.setOpaqueSort=function(b){Ue=b},this.setTransparentSort=function(b){He=b},this.getClearColor=function(b){return b.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,X=!0){let G=0;if(b){let I=!1;if(Y!==null){let k=Y.texture.format;I=m.has(k)}if(I){let k=Y.texture.type,te=p.has(k),Q=Pe.getClearColor(),oe=Pe.getClearAlpha(),le=Q.r,Le=Q.g,Xe=Q.b;te?(M[0]=le,M[1]=Le,M[2]=Xe,M[3]=oe,N.clearBufferuiv(N.COLOR,0,M)):(S[0]=le,S[1]=Le,S[2]=Xe,S[3]=oe,N.clearBufferiv(N.COLOR,0,S))}else G|=N.COLOR_BUFFER_BIT}O&&(G|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),D=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",pn,!1),Pe.dispose(),xe.dispose(),ge.dispose(),W.dispose(),ce.dispose(),j.dispose(),pe.dispose(),ee.dispose(),_e.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Lo),Ae.removeEventListener("sessionend",ai),mn.stop()};function Ke(b){b.preventDefault(),Ir("WebGLRenderer: Context Lost."),R=!0}function st(){Ir("WebGLRenderer: Context Restored."),R=!1;let b=B.autoReset,O=Ne.enabled,X=Ne.autoUpdate,G=Ne.needsUpdate,I=Ne.type;Re(),B.autoReset=b,Ne.enabled=O,Ne.autoUpdate=X,Ne.needsUpdate=G,Ne.type=I}function pn(b){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Tn(b){let O=b.target;O.removeEventListener("dispose",Tn),Po(O)}function Po(b){Io(b),W.remove(b)}function Io(b){let O=W.get(b).programs;O!==void 0&&(O.forEach(function(X){_e.releaseProgram(X)}),b.isShaderMaterial&&_e.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,X,G,I,k){O===null&&(O=de);let te=I.isMesh&&I.matrixWorld.determinantAffine()<0,Q=As(b,O,X,G,I);x.setMaterial(G,te);let oe=X.index,le=1;if(G.wireframe===!0){if(oe=J.getWireframeAttribute(X),oe===void 0)return;le=2}let Le=X.drawRange,Xe=X.attributes.position,Se=Le.start*le,je=(Le.start+Le.count)*le;k!==null&&(Se=Math.max(Se,k.start*le),je=Math.min(je,(k.start+k.count)*le)),oe!==null?(Se=Math.max(Se,0),je=Math.min(je,oe.count)):Xe!=null&&(Se=Math.max(Se,0),je=Math.min(je,Xe.count));let xt=je-Se;if(xt<0||xt===1/0)return;pe.setup(I,G,Q,X,oe);let lt,$e=ae;if(oe!==null&&(lt=me.get(oe),$e=$,$e.setIndex(lt)),I.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*Te()),$e.setMode(N.LINES)):$e.setMode(N.TRIANGLES);else if(I.isLine){let Bt=G.linewidth;Bt===void 0&&(Bt=1),x.setLineWidth(Bt*Te()),I.isLineSegments?$e.setMode(N.LINES):I.isLineLoop?$e.setMode(N.LINE_LOOP):$e.setMode(N.LINE_STRIP)}else I.isPoints?$e.setMode(N.POINTS):I.isSprite&&$e.setMode(N.TRIANGLES);if(I.isBatchedMesh)if(Oe.get("WEBGL_multi_draw"))$e.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let Bt=I._multiDrawStarts,ye=I._multiDrawCounts,zt=I._multiDrawCount,Ve=oe?me.get(oe).bytesPerElement:1,bt=W.get(G).currentProgram.getUniforms();for(let tn=0;tn<zt;tn++)bt.setValue(N,"_gl_DrawID",tn),$e.render(Bt[tn]/Ve,ye[tn])}else if(I.isInstancedMesh)$e.renderInstances(Se,xt,I.count);else if(X.isInstancedBufferGeometry){let Bt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ye=Math.min(X.instanceCount,Bt);$e.renderInstances(Se,xt,ye)}else $e.render(Se,xt)};function mr(b,O,X){b.transparent===!0&&b.side===ut&&b.forceSinglePass===!1?(b.side=Yt,b.needsUpdate=!0,Ts(b,O,X),b.side=Wn,b.needsUpdate=!0,Ts(b,O,X),b.side=ut):Ts(b,O,X)}this.compile=function(b,O,X=null){X===null&&(X=b),w=ge.get(X),w.init(O),_.push(w),X.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(w.pushLight(I),I.castShadow&&w.pushShadow(I))}),b!==X&&b.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(w.pushLight(I),I.castShadow&&w.pushShadow(I))}),w.setupLights();let G=new Set;return b.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let k=I.material;if(k)if(Array.isArray(k))for(let te=0;te<k.length;te++){let Q=k[te];mr(Q,X,I),G.add(Q)}else mr(k,X,I),G.add(k)}),w=_.pop(),G},this.compileAsync=function(b,O,X=null){let G=this.compile(b,O,X);return new Promise(I=>{function k(){if(G.forEach(function(te){W.get(te).currentProgram.isReady()&&G.delete(te)}),G.size===0){I(b);return}setTimeout(k,10)}Oe.get("KHR_parallel_shader_compile")!==null?k():setTimeout(k,10)})};let Es=null;function St(b){Es&&Es(b)}function Lo(){mn.stop()}function ai(){mn.start()}let mn=new _f;mn.setAnimationLoop(St),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(b){Es=b,Ae.setAnimationLoop(b),b===null?mn.stop():mn.start()},Ae.addEventListener("sessionstart",Lo),Ae.addEventListener("sessionend",ai),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D!==null&&D.renderStart(b,O);let X=Ae.enabled===!0&&Ae.isPresenting===!0,G=T!==null&&(Y===null||X)&&T.begin(P,Y);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(O),O=Ae.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,O,Y),w=ge.get(b,_.length),w.init(O),w.state.textureUnits=Z.getTextureUnits(),_.push(w),wt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ot.setFromProjectionMatrix(wt,Gn,O.reversedDepth),ze=this.localClippingEnabled,et=De.init(this.clippingPlanes,ze),E=xe.get(b,A.length),E.init(),A.push(E),Ae.enabled===!0&&Ae.isPresenting===!0){let te=P.xr.getDepthSensingMesh();te!==null&&Ki(te,O,-1/0,P.sortObjects)}Ki(b,O,0,P.sortObjects),E.finish(),P.sortObjects===!0&&E.sort(Ue,He,O.reversedDepth),Ee=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,Ee&&Pe.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&De.beginShadows();let I=w.state.shadowsArray;if(Ne.render(I,b,O),et===!0&&De.endShadows(),(G&&T.hasRenderPass())===!1){let te=E.opaque,Q=E.transmissive;if(w.setupLights(),O.isArrayCamera){let oe=O.cameras;if(Q.length>0)for(let le=0,Le=oe.length;le<Le;le++){let Xe=oe[le];Kn(te,Q,b,Xe)}Ee&&Pe.render(b);for(let le=0,Le=oe.length;le<Le;le++){let Xe=oe[le];li(E,b,Xe,Xe.viewport)}}else Q.length>0&&Kn(te,Q,b,O),Ee&&Pe.render(b),li(E,b,O)}Y!==null&&V===0&&(Z.updateMultisampleRenderTarget(Y),Z.updateRenderTargetMipmap(Y)),G&&T.end(P),b.isScene===!0&&b.onAfterRender(P,b,O),pe.resetDefaultState(),ne=-1,ie=null,_.pop(),_.length>0?(w=_[_.length-1],Z.setTextureUnits(w.state.textureUnits),et===!0&&De.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?E=A[A.length-1]:E=null,D!==null&&D.renderEnd()};function Ki(b,O,X,G){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ot.intersectsSprite(b)){G&&Dt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(wt);let te=j.update(b),Q=b.material;Q.visible&&E.push(b,te,Q,X,Dt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ot.intersectsObject(b))){let te=j.update(b),Q=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Dt.copy(b.boundingSphere.center)):(te.boundingSphere===null&&te.computeBoundingSphere(),Dt.copy(te.boundingSphere.center)),Dt.applyMatrix4(b.matrixWorld).applyMatrix4(wt)),Array.isArray(Q)){let oe=te.groups;for(let le=0,Le=oe.length;le<Le;le++){let Xe=oe[le],Se=Q[Xe.materialIndex];Se&&Se.visible&&E.push(b,te,Se,X,Dt.z,Xe)}}else Q.visible&&E.push(b,te,Q,X,Dt.z,null)}}let k=b.children;for(let te=0,Q=k.length;te<Q;te++)Ki(k[te],O,X,G)}function li(b,O,X,G){let{opaque:I,transmissive:k,transparent:te}=b;w.setupLightsView(X),et===!0&&De.setGlobalState(P.clippingPlanes,X),G&&x.viewport(fe.copy(G)),I.length>0&&Ji(I,O,X),k.length>0&&Ji(k,O,X),te.length>0&&Ji(te,O,X),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Kn(b,O,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){let Se=Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new on(1,1,{generateMipmaps:!0,type:Se?Pn:bn,minFilter:Yn,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace})}let k=w.state.transmissionRenderTarget[G.id],te=G.viewport||fe;k.setSize(te.z*P.transmissionResolutionScale,te.w*P.transmissionResolutionScale);let Q=P.getRenderTarget(),oe=P.getActiveCubeFace(),le=P.getActiveMipmapLevel();P.setRenderTarget(k),P.getClearColor(mt),Be=P.getClearAlpha(),Be<1&&P.setClearColor(16777215,.5),P.clear(),Ee&&Pe.render(X);let Le=P.toneMapping;P.toneMapping=hn;let Xe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),et===!0&&De.setGlobalState(P.clippingPlanes,G),Ji(b,X,G),Z.updateMultisampleRenderTarget(k),Z.updateRenderTargetMipmap(k),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let je=0,xt=O.length;je<xt;je++){let lt=O[je],{object:$e,geometry:Bt,material:ye,group:zt}=lt;if(ye.side===ut&&$e.layers.test(G.layers)){let Ve=ye.side;ye.side=Yt,ye.needsUpdate=!0,gr($e,X,G,Bt,ye,zt),ye.side=Ve,ye.needsUpdate=!0,Se=!0}}Se===!0&&(Z.updateMultisampleRenderTarget(k),Z.updateRenderTargetMipmap(k))}P.setRenderTarget(Q,oe,le),P.setClearColor(mt,Be),Xe!==void 0&&(G.viewport=Xe),P.toneMapping=Le}function Ji(b,O,X){let G=O.isScene===!0?O.overrideMaterial:null;for(let I=0,k=b.length;I<k;I++){let te=b[I],{object:Q,geometry:oe,group:le}=te,Le=te.material;Le.allowOverride===!0&&G!==null&&(Le=G),Q.layers.test(X.layers)&&gr(Q,O,X,oe,Le,le)}}function gr(b,O,X,G,I,k){b.onBeforeRender(P,O,X,G,I,k),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),I.onBeforeRender(P,O,X,G,b,k),I.transparent===!0&&I.side===ut&&I.forceSinglePass===!1?(I.side=Yt,I.needsUpdate=!0,P.renderBufferDirect(X,O,G,I,b,k),I.side=Wn,I.needsUpdate=!0,P.renderBufferDirect(X,O,G,I,b,k),I.side=ut):P.renderBufferDirect(X,O,G,I,b,k),b.onAfterRender(P,O,X,G,I,k)}function Ts(b,O,X){O.isScene!==!0&&(O=de);let G=W.get(b),I=w.state.lights,k=w.state.shadowsArray,te=I.state.version,Q=_e.getParameters(b,I.state,k,O,X,w.state.lightProbeGridArray),oe=_e.getProgramCacheKey(Q),le=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;let Le=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=ce.get(b.envMap||G.environment,Le),G.envMapRotation=G.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,le===void 0&&(b.addEventListener("dispose",Tn),le=new Map,G.programs=le);let Xe=le.get(oe);if(Xe!==void 0){if(G.currentProgram===Xe&&G.lightsStateVersion===te)return ws(b,Q),Xe}else Q.uniforms=_e.getUniforms(b),D!==null&&b.isNodeMaterial&&D.build(b,X,Q),b.onBeforeCompile(Q,P),Xe=_e.acquireProgram(Q,oe),le.set(oe,Xe),G.uniforms=Q.uniforms;let Se=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Se.clippingPlanes=De.uniform),ws(b,Q),G.needsLights=Ai(b),G.lightsStateVersion=te,G.needsLights&&(Se.ambientLightColor.value=I.state.ambient,Se.lightProbe.value=I.state.probe,Se.directionalLights.value=I.state.directional,Se.directionalLightShadows.value=I.state.directionalShadow,Se.spotLights.value=I.state.spot,Se.spotLightShadows.value=I.state.spotShadow,Se.rectAreaLights.value=I.state.rectArea,Se.ltc_1.value=I.state.rectAreaLTC1,Se.ltc_2.value=I.state.rectAreaLTC2,Se.pointLights.value=I.state.point,Se.pointLightShadows.value=I.state.pointShadow,Se.hemisphereLights.value=I.state.hemi,Se.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Se.spotLightMatrix.value=I.state.spotLightMatrix,Se.spotLightMap.value=I.state.spotLightMap,Se.pointShadowMatrix.value=I.state.pointShadowMatrix),G.lightProbeGrid=w.state.lightProbeGridArray.length>0,G.currentProgram=Xe,G.uniformsList=null,Xe}function Do(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=dr.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function ws(b,O){let X=W.get(b);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function No(b,O){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(O.matrixWorld);for(let X=0,G=b.length;X<G;X++){let I=b[X];if(I.texture!==null&&I.boundingBox.containsPoint(v))return I}return null}function As(b,O,X,G,I){O.isScene!==!0&&(O=de),Z.resetTextureUnits();let k=O.fog,te=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,Q=Y===null?P.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:tt.workingColorSpace,oe=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,le=ce.get(G.envMap||te,oe),Le=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xe=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Se=!!X.morphAttributes.position,je=!!X.morphAttributes.normal,xt=!!X.morphAttributes.color,lt=hn;G.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(lt=P.toneMapping);let $e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Bt=$e!==void 0?$e.length:0,ye=W.get(G),zt=w.state.lights;if(et===!0&&(ze===!0||b!==ie)){let rt=b===ie&&G.id===ne;De.setState(G,b,rt)}let Ve=!1;G.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==zt.state.version||ye.outputColorSpace!==Q||I.isBatchedMesh&&ye.batching===!1||!I.isBatchedMesh&&ye.batching===!0||I.isBatchedMesh&&ye.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&ye.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&ye.instancing===!1||!I.isInstancedMesh&&ye.instancing===!0||I.isSkinnedMesh&&ye.skinning===!1||!I.isSkinnedMesh&&ye.skinning===!0||I.isInstancedMesh&&ye.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&ye.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&ye.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&ye.instancingMorph===!1&&I.morphTexture!==null||ye.envMap!==le||G.fog===!0&&ye.fog!==k||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==De.numPlanes||ye.numIntersection!==De.numIntersection)||ye.vertexAlphas!==Le||ye.vertexTangents!==Xe||ye.morphTargets!==Se||ye.morphNormals!==je||ye.morphColors!==xt||ye.toneMapping!==lt||ye.morphTargetsCount!==Bt||!!ye.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ve=!0):(Ve=!0,ye.__version=G.version);let bt=ye.currentProgram;Ve===!0&&(bt=Ts(G,O,I),D&&G.isNodeMaterial&&D.onUpdateProgram(G,bt,ye));let tn=!1,gn=!1,Ln=!1,dt=bt.getUniforms(),ct=ye.uniforms;if(x.useProgram(bt.program)&&(tn=!0,gn=!0,Ln=!0),G.id!==ne&&(ne=G.id,gn=!0),ye.needsLights){let rt=No(w.state.lightProbeGridArray,I);ye.lightProbeGrid!==rt&&(ye.lightProbeGrid=rt,gn=!0)}if(tn||ie!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),dt.setValue(N,"projectionMatrix",b.projectionMatrix),dt.setValue(N,"viewMatrix",b.matrixWorldInverse);let Xt=dt.map.cameraPosition;Xt!==void 0&&Xt.setValue(N,At.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&dt.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&dt.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),ie!==b&&(ie=b,gn=!0,Ln=!0)}if(ye.needsLights&&(zt.state.directionalShadowMap.length>0&&dt.setValue(N,"directionalShadowMap",zt.state.directionalShadowMap,Z),zt.state.spotShadowMap.length>0&&dt.setValue(N,"spotShadowMap",zt.state.spotShadowMap,Z),zt.state.pointShadowMap.length>0&&dt.setValue(N,"pointShadowMap",zt.state.pointShadowMap,Z)),I.isSkinnedMesh){dt.setOptional(N,I,"bindMatrix"),dt.setOptional(N,I,"bindMatrixInverse");let rt=I.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),dt.setValue(N,"boneTexture",rt.boneTexture,Z))}I.isBatchedMesh&&(dt.setOptional(N,I,"batchingTexture"),dt.setValue(N,"batchingTexture",I._matricesTexture,Z),dt.setOptional(N,I,"batchingIdTexture"),dt.setValue(N,"batchingIdTexture",I._indirectTexture,Z),dt.setOptional(N,I,"batchingColorTexture"),I._colorsTexture!==null&&dt.setValue(N,"batchingColorTexture",I._colorsTexture,Z));let _n=X.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&F.update(I,X,bt),(gn||ye.receiveShadow!==I.receiveShadow)&&(ye.receiveShadow=I.receiveShadow,dt.setValue(N,"receiveShadow",I.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(ct.envMapIntensity.value=O.environmentIntensity),ct.dfgLUT!==void 0&&(ct.dfgLUT.value=hv()),gn){if(dt.setValue(N,"toneMappingExposure",P.toneMappingExposure),ye.needsLights&&ji(ct,Ln),k&&G.fog===!0&&we.refreshFogUniforms(ct,k),we.refreshMaterialUniforms(ct,G,se,ue,w.state.transmissionRenderTarget[b.id]),ye.needsLights&&ye.lightProbeGrid){let rt=ye.lightProbeGrid;ct.probesSH.value=rt.texture,ct.probesMin.value.copy(rt.boundingBox.min),ct.probesMax.value.copy(rt.boundingBox.max),ct.probesResolution.value.copy(rt.resolution)}dr.upload(N,Do(ye),ct,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(dr.upload(N,Do(ye),ct,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&dt.setValue(N,"center",I.center),dt.setValue(N,"modelViewMatrix",I.modelViewMatrix),dt.setValue(N,"normalMatrix",I.normalMatrix),dt.setValue(N,"modelMatrix",I.matrixWorld),G.uniformsGroups!==void 0){let rt=G.uniformsGroups;for(let Xt=0,nn=rt.length;Xt<nn;Xt++){let vt=rt[Xt];ee.update(vt,bt),ee.bind(vt,bt)}}return bt}function ji(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Ai(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(b,O,X){let G=W.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(b.texture).__webglTexture=O,W.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let X=W.get(b);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,X=0){Y=b,H=O,V=X;let G=null,I=!1,k=!1;if(b){let Q=W.get(b);if(Q.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(N.FRAMEBUFFER,Q.__webglFramebuffer),fe.copy(b.viewport),be.copy(b.scissor),Ze=b.scissorTest,x.viewport(fe),x.scissor(be),x.setScissorTest(Ze),ne=-1;return}else if(Q.__webglFramebuffer===void 0)Z.setupRenderTarget(b);else if(Q.__hasExternalTextures)Z.rebindTextures(b,W.get(b.texture).__webglTexture,W.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Le=b.depthTexture;if(Q.__boundDepthTexture!==Le){if(Le!==null&&W.has(Le)&&(b.width!==Le.image.width||b.height!==Le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(b)}}let oe=b.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(k=!0);let le=W.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(le[O])?G=le[O][X]:G=le[O],I=!0):b.samples>0&&Z.useMultisampledRTT(b)===!1?G=W.get(b).__webglMultisampledFramebuffer:Array.isArray(le)?G=le[X]:G=le,fe.copy(b.viewport),be.copy(b.scissor),Ze=b.scissorTest}else fe.copy(Ie).multiplyScalar(se).floor(),be.copy(Ct).multiplyScalar(se).floor(),Ze=Fe;if(X!==0&&(G=z),x.bindFramebuffer(N.FRAMEBUFFER,G)&&x.drawBuffers(b,G),x.viewport(fe),x.scissor(be),x.setScissorTest(Ze),I){let Q=W.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,Q.__webglTexture,X)}else if(k){let Q=O;for(let oe=0;oe<b.textures.length;oe++){let le=W.get(b.textures[oe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+oe,le.__webglTexture,X,Q)}}else if(b!==null&&X!==0){let Q=W.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Q.__webglTexture,X)}ne=-1},this.readRenderTargetPixels=function(b,O,X,G,I,k,te,Q=0){if(!(b&&b.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let oe=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&te!==void 0&&(oe=oe[te]),oe){x.bindFramebuffer(N.FRAMEBUFFER,oe);try{let le=b.textures[Q],Le=le.format,Xe=le.type;if(b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Q),!C.textureFormatReadable(Le)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Xe)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-G&&X>=0&&X<=b.height-I&&N.readPixels(O,X,G,I,ve.convert(Le),ve.convert(Xe),k)}finally{let le=Y!==null?W.get(Y).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,le)}}},this.readRenderTargetPixelsAsync=async function(b,O,X,G,I,k,te,Q=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let oe=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&te!==void 0&&(oe=oe[te]),oe)if(O>=0&&O<=b.width-G&&X>=0&&X<=b.height-I){x.bindFramebuffer(N.FRAMEBUFFER,oe);let le=b.textures[Q],Le=le.format,Xe=le.type;if(b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Q),!C.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Se=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Se),N.bufferData(N.PIXEL_PACK_BUFFER,k.byteLength,N.STREAM_READ),N.readPixels(O,X,G,I,ve.convert(Le),ve.convert(Xe),0);let je=Y!==null?W.get(Y).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,je);let xt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await zd(N,xt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Se),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,k),N.deleteBuffer(Se),N.deleteSync(xt),k}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,X=0){let G=Math.pow(2,-X),I=Math.floor(b.image.width*G),k=Math.floor(b.image.height*G),te=O!==null?O.x:0,Q=O!==null?O.y:0;Z.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,te,Q,I,k),x.unbindTexture()},this.copyTextureToTexture=function(b,O,X=null,G=null,I=0,k=0){let te,Q,oe,le,Le,Xe,Se,je,xt,lt=b.isCompressedTexture?b.mipmaps[k]:b.image;if(X!==null)te=X.max.x-X.min.x,Q=X.max.y-X.min.y,oe=X.isBox3?X.max.z-X.min.z:1,le=X.min.x,Le=X.min.y,Xe=X.isBox3?X.min.z:0;else{let ct=Math.pow(2,-I);te=Math.floor(lt.width*ct),Q=Math.floor(lt.height*ct),b.isDataArrayTexture?oe=lt.depth:b.isData3DTexture?oe=Math.floor(lt.depth*ct):oe=1,le=0,Le=0,Xe=0}G!==null?(Se=G.x,je=G.y,xt=G.z):(Se=0,je=0,xt=0);let $e=ve.convert(O.format),Bt=ve.convert(O.type),ye;O.isData3DTexture?(Z.setTexture3D(O,0),ye=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Z.setTexture2DArray(O,0),ye=N.TEXTURE_2D_ARRAY):(Z.setTexture2D(O,0),ye=N.TEXTURE_2D),x.activeTexture(N.TEXTURE0),x.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),x.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),x.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);let zt=x.getParameter(N.UNPACK_ROW_LENGTH),Ve=x.getParameter(N.UNPACK_IMAGE_HEIGHT),bt=x.getParameter(N.UNPACK_SKIP_PIXELS),tn=x.getParameter(N.UNPACK_SKIP_ROWS),gn=x.getParameter(N.UNPACK_SKIP_IMAGES);x.pixelStorei(N.UNPACK_ROW_LENGTH,lt.width),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,lt.height),x.pixelStorei(N.UNPACK_SKIP_PIXELS,le),x.pixelStorei(N.UNPACK_SKIP_ROWS,Le),x.pixelStorei(N.UNPACK_SKIP_IMAGES,Xe);let Ln=b.isDataArrayTexture||b.isData3DTexture,dt=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let ct=W.get(b),_n=W.get(O),rt=W.get(ct.__renderTarget),Xt=W.get(_n.__renderTarget);x.bindFramebuffer(N.READ_FRAMEBUFFER,rt.__webglFramebuffer),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let nn=0;nn<oe;nn++)Ln&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(b).__webglTexture,I,Xe+nn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(O).__webglTexture,k,xt+nn)),N.blitFramebuffer(le,Le,te,Q,Se,je,te,Q,N.DEPTH_BUFFER_BIT,N.NEAREST);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(I!==0||b.isRenderTargetTexture||W.has(b)){let ct=W.get(b),_n=W.get(O);x.bindFramebuffer(N.READ_FRAMEBUFFER,q),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,U);for(let rt=0;rt<oe;rt++)Ln?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ct.__webglTexture,I,Xe+rt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ct.__webglTexture,I),dt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_n.__webglTexture,k,xt+rt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_n.__webglTexture,k),I!==0?N.blitFramebuffer(le,Le,te,Q,Se,je,te,Q,N.COLOR_BUFFER_BIT,N.NEAREST):dt?N.copyTexSubImage3D(ye,k,Se,je,xt+rt,le,Le,te,Q):N.copyTexSubImage2D(ye,k,Se,je,le,Le,te,Q);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else dt?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(ye,k,Se,je,xt,te,Q,oe,$e,Bt,lt.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(ye,k,Se,je,xt,te,Q,oe,$e,lt.data):N.texSubImage3D(ye,k,Se,je,xt,te,Q,oe,$e,Bt,lt):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,k,Se,je,te,Q,$e,Bt,lt.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,k,Se,je,lt.width,lt.height,$e,lt.data):N.texSubImage2D(N.TEXTURE_2D,k,Se,je,te,Q,$e,Bt,lt);x.pixelStorei(N.UNPACK_ROW_LENGTH,zt),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ve),x.pixelStorei(N.UNPACK_SKIP_PIXELS,bt),x.pixelStorei(N.UNPACK_SKIP_ROWS,tn),x.pixelStorei(N.UNPACK_SKIP_IMAGES,gn),k===0&&O.generateMipmaps&&N.generateMipmap(ye),x.unbindTexture()},this.initRenderTarget=function(b){W.get(b).__webglFramebuffer===void 0&&Z.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Z.setTextureCube(b,0):b.isData3DTexture?Z.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Z.setTexture2DArray(b,0):Z.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){H=0,V=0,Y=null,x.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};var Ef={type:"change"},Dh={type:"start"},wf={type:"end"},Gl=new gi,Tf=new xn,uv=Math.cos(70*yt.DEG2RAD),Jt=new L,En=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lh=1e-6,Wl=class extends co{constructor(e,t=null){super(e,t),this.state=Mt.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vi.ROTATE,MIDDLE:Vi.DOLLY,RIGHT:Vi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new $t,this._lastTargetPosition=new L,this._quat=new $t().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rr,this._sphericalDelta=new rr,this._scale=1,this._panOffset=new L,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new L,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fv.bind(this),this._onPointerDown=dv.bind(this),this._onPointerUp=pv.bind(this),this._onContextMenu=Mv.bind(this),this._onMouseWheel=_v.bind(this),this._onKeyDown=xv.bind(this),this._onTouchStart=vv.bind(this),this._onTouchMove=yv.bind(this),this._onMouseDown=mv.bind(this),this._onMouseMove=gv.bind(this),this._interceptControlDown=Sv.bind(this),this._interceptControlUp=bv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ef),this.update(),this.state=Mt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Jt.copy(t).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=En:n>Math.PI&&(n-=En),s<-Math.PI?s+=En:s>Math.PI&&(s-=En),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Jt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Gl.origin.copy(this.object.position),Gl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gl.direction))<uv?this.object.lookAt(this.target):(Tf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gl.intersectPlane(Tf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Lh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lh||this._lastTargetPosition.distanceToSquared(this.target)>Lh?(this.dispatchEvent(Ef),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?En/60*this.autoRotateSpeed*e:En/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Jt.setFromMatrixColumn(t,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,t){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(t,1):(Jt.setFromMatrixColumn(t,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Jt.copy(s).sub(this.target);let r=Jt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(En*this._rotateDelta.x/t.clientHeight),this._rotateUp(En*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(En*this._rotateDelta.x/t.clientHeight),this._rotateUp(En*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new he,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function dv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function fv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function pv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wf),this.state=Mt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function mv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Mt.DOLLY;break;case Vi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Mt.ROTATE}break;case Vi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Dh)}function gv(i){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function _v(i){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(i.preventDefault(),this.dispatchEvent(Dh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(wf))}function xv(i){this.enabled!==!1&&this._handleKeyDown(i)}function vv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Mt.TOUCH_ROTATE;break;case Gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case Gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Mt.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Dh)}function yv(i){switch(this._trackPointer(i),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Mt.NONE}}function Mv(i){this.enabled!==!1&&i.preventDefault()}function Sv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Af(i=0){let e=(Math.imul(i+1,2654435761)^2654435769)>>>0;function t(){return e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296}function n(U,H){return U+(H-U)*t()}let s=new ft,r=new L(0,1,0),o=n(3.9,5.3),a=n(.5,1.2),l=t()*Math.PI*2,c=Math.cos(l),h=Math.sin(l),u=6+Math.floor(t()*4),d=n(.16,.2),f=d*.55;function g(U){let H=Math.pow(U,1.7);return new L(c*a*H,U*o,h*a*H)}function y(U){return d+(f-d)*U}let m=new ht({color:9071178,roughness:.95}),p=new ht({color:7690558,roughness:.95});for(let U=0;U<u;U++){let H=U/u,V=(U+1)/u,Y=g(H),ne=g(V),ie=new L().subVectors(ne,Y),fe=ie.length();ie.normalize();let be=new Tt(y(V),y(H),fe*1.08,7,1,!0),Ze=new ke(be,U%2===0?m:p);Ze.quaternion.setFromUnitVectors(r,ie),Ze.position.copy(Y).add(ne).multiplyScalar(.5),s.add(Ze)}let M=new ft,S=g(1),v=g(1-1/u),E=new L().subVectors(S,v).normalize();M.position.copy(S),M.quaternion.setFromUnitVectors(r,E),s.add(M);let w=new re(2972714).lerp(new re(3832373),t()),A=w.clone().offsetHSL(.01,.05,.035),_=new ht({color:w,roughness:.9,side:ut}),T=new ht({color:A,roughness:.9,side:ut});function P(U,H){let V=new cn(.55,2.4,1,10);V.translate(0,1.2,0);let Y=V.attributes.position,ne=2.4/U;for(let ie=0;ie<Y.count;ie++){let fe=Y.getX(ie),Ze=Y.getY(ie)/2.4,mt=fe*(1-.82*Ze),Be=U*Ze,K=ne*Math.sin(Be),ue=ne*(1-Math.cos(Be))+Math.abs(mt)*H;Y.setXYZ(ie,mt,K,ue)}return Y.needsUpdate=!0,V.computeVertexNormals(),V}let R=7+Math.floor(t()*4);for(let U=0;U<R;U++){let H=U/R*Math.PI*2+n(-.25,.25),V=t(),Y=.4+V*.95,ne=.85+V*.8+n(-.1,.1),ie=new ke(P(ne,n(.15,.3)),U%2===0?_:T);ie.scale.setScalar(n(.85,1.1)),ie.rotation.order="YXZ",ie.rotation.y=H,ie.rotation.x=Y,ie.rotation.z=n(-.15,.15),ie.position.y=.05,M.add(ie)}let D=new ht({color:6047017,roughness:.85}),z=new vi(.11,7,5),q=2+Math.floor(t()*3);for(let U=0;U<q;U++){let H=new ke(z,D),V=t()*Math.PI*2,Y=n(.12,.22);H.position.set(Math.cos(V)*Y,n(-.14,-.04),Math.sin(V)*Y),H.scale.setScalar(n(.8,1.1)),M.add(H)}return s.traverse(function(U){U.isMesh&&(U.castShadow=!0)}),s}function Rf(i=0){let e=(Math.imul(i+1,2246822519)^2246822507)>>>0;function t(){return e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296}let n=Math.imul(i+1,374761393)>>>0;function s(u,d,f){let g=Math.round(u*1e3),y=Math.round(d*1e3),m=Math.round(f*1e3),p=(2166136261^n)>>>0;return p=Math.imul(p^g,16777619),p=Math.imul(p^y,16777619),p=Math.imul(p^m,16777619),p^=p>>>13,p=Math.imul(p,1274126177),p^=p>>>16,(p>>>0)/4294967295}let r=new $r(.6,1),o=r.attributes.position,a=new L;for(let u=0;u<o.count;u++){a.set(o.getX(u),o.getY(u),o.getZ(u));let d=s(a.x,a.y,a.z);a.multiplyScalar(1+(d-.5)*.5),o.setXYZ(u,a.x,a.y,a.z)}o.needsUpdate=!0,r.scale(1,.75,1),r.computeVertexNormals();let l=new re(8218192);l.offsetHSL((t()-.5)*.03,(t()-.5)*.08,(t()-.5)*.07);let c=new ht({color:l,roughness:1}),h=new ke(r,c);return h.rotation.y=t()*Math.PI*2,h.castShadow=!0,h.receiveShadow=!0,h}function Nh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new _t,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Cf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][d]);let g=Cf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Cf(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Pt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let y=h.getComponent(d,g);a.setComponent(d+u,g,y)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Uh(i,e){if(e===sh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===hr||e===yo){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===hr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Pf(){let i=new ft;i.name="galleon";function e(de,Ee,Te){let N=Math.min(1,Math.max(0,(Te-de)/(Ee-de)));return N*N*(3-2*N)}let t=1.75;function n(de){let Ee=1-.88*e(-2.5,-8.2,de),Te=1-.28*e(4.5,8.2,de);return Ee*Te}function s(de){return t*n(de)}function r(de){return .32*e(-2.5,-8.2,de)+.5*e(3,8.2,de)}let o=new ht({color:7034176,roughness:.92,metalness:0}),a=new ht({color:8217160,roughness:.95,metalness:0}),l=new ht({color:4338474,roughness:.9,metalness:0}),c=new ht({color:6048308,roughness:.88,metalness:0}),h=new ht({color:15261900,roughness:.85,metalness:0,side:ut}),u=new ht({color:12168594,roughness:.9,metalness:0}),d=new ht({color:854019,emissive:16756820,emissiveIntensity:1.25,roughness:.35,side:ut}),f=new ht({color:854019,emissive:12610088,emissiveIntensity:.5,roughness:.35,side:ut}),g=new ht({color:658448,emissive:0,roughness:.18,metalness:.4,side:ut}),y=new ht({color:657930,roughness:.9,side:ut}),m=new ht({color:9071407,roughness:.45,metalness:.65}),p=new ht({color:4465152,emissive:16763256,emissiveIntensity:1.6,roughness:.5}),M=[];function S(de,Ee,Te,N,qe){let Oe=new ke(de,Ee);return Oe.position.set(Te,N,qe),i.add(Oe),Oe}let v=new Ut(t*2,2,16,8,6,24);{let de=v.attributes.position;for(let Ee=0;Ee<de.count;Ee++){let Te=de.getX(Ee),N=de.getY(Ee),qe=de.getZ(Ee),Oe=Te*n(qe),C=Math.max(0,-N);Oe*=1-.5*Math.pow(C,1.6);let x=N,B=.55*e(-5.5,-8.2,qe)+.35*e(6,8.2,qe);x+=B*C,x+=r(qe)*Math.max(0,N),de.setXYZ(Ee,Oe,x,qe)}v.translate(0,.1,0),v.computeVertexNormals()}let E=new ke(v,[o,o,a,o,o,o]);i.add(E);for(let de of[-1,1]){let Ee=new Ut(1,.5,12.4,1,1,24),Te=Ee.attributes.position;for(let N=0;N<Te.count;N++){let qe=Te.getZ(N)-1.5,Oe=s(qe);Te.setX(N,de*(Oe-.1+Te.getX(N)*.11)),Te.setY(N,Te.getY(N)+r(qe))}Ee.computeVertexNormals(),S(Ee,l,0,1.32,-1.5)}S(new Ut(1.2,.4,1.8),l,0,1.42,-5.2),S(new Ut(.85,.12,1.3),l,0,1.16,-1.8),S(new Tt(.14,.2,.34,10),c,0,1.27,2.3);let w=S(new Ut(.14,1.7,.5),o,0,1,-8);w.rotation.x=-.42,S(new Ut(3.2,1,4),o,0,1.95,5.9),S(new Ut(2.95,.8,2.9),o,0,2.85,6.7),S(new Ut(2.6,.6,1.8),o,0,3.55,7.3);let A=new Ut(.34,.05,.07),_=new Ut(.05,.3,.07),T=new Ut(.4,.045,.1),P=new cn(.26,.32),R=new Ut(.026,.3,.02),D=new Ut(.26,.026,.02),z=[],q=[[],[],[]],U=0,H=new We,V=new $t,Y=new qn,ne=new L(1,1,1);function ie(de,Ee,Te,N,qe){let Oe=Ee.clone();Oe.translate(Te,N,qe),Oe.applyMatrix4(H),de.push(Oe)}function fe(de,Ee,Te,N){Y.set(0,N,0),V.setFromEuler(Y),H.compose(new L(de,Ee,Te),V,ne),ie(z,A,0,.175,0),ie(z,A,0,-.175,0),ie(z,_,-.145,0,0),ie(z,_,.145,0,0),ie(z,T,0,-.215,.012),ie(z,R,0,0,.008),ie(z,D,0,0,.008);let qe=[0,2,0,1,0,2,1,0,1,0,2,0,1,0,0,2,1][U%17];U++,ie(q[qe],P,0,0,-.02)}function be(){let de=new ke(Nh(z),l);i.add(de);let Ee=[d,f,g];for(let Te=0;Te<3;Te++){if(!q[Te].length)continue;let N=new ke(Nh(q[Te]),Ee[Te]);i.add(N),M.push(N)}S(new Ut(3.15,.09,.16),l,0,2.45,7.94),S(new Ut(2.75,.08,.16),l,0,3.25,8.18),i.userData.paneMats={bright:d,dim:f}}for(let de of[-1.05,-.35,.35,1.05])fe(de,1.95,7.93,0);for(let de of[-.7,0,.7])fe(de,2.85,8.18,0);for(let de of[-.45,.45])fe(de,3.55,8.23,0);for(let de of[4.7,5.9,7.1])fe(1.62,1.95,de,Math.PI/2),fe(-1.62,1.95,de,-Math.PI/2);be(),S(new Tt(.03,.03,.4,6),m,0,4.05,7.9);let Ze=S(new vi(.13,10,8),p,0,4.32,7.9);M.push(Ze),S(new ds(.11,.14,8),m,0,4.5,7.9);let mt=S(new Tt(.055,.09,4.6,8),c,0,1.9,-7.8);mt.rotation.x=.38-Math.PI/2,S(new Tt(.09,.14,9,10),c,0,5,-4.2),S(new Tt(.1,.16,11,10),c,0,5.9,.5),S(new Tt(.08,.12,7.5,10),c,0,4.35,4.6),S(new Tt(.36,.36,.1,12),l,0,6.35,-4.2),S(new Tt(.38,.38,.1,12),l,0,7.65,.5),S(new Tt(.32,.32,.1,12),l,0,5.45,4.6);function Be(de,Ee,Te,N){let qe=S(new Tt(N,N,Te,8),l,0,Ee,de);return qe.rotation.z=Math.PI/2,qe}function K(de,Ee,Te,N){let qe=new cn(Te,N,10,10),Oe=qe.attributes.position,C=Te*.22;for(let x=0;x<Oe.count;x++){let B=Oe.getX(x)/Te+.5,W=Oe.getY(x)/N+.5,Z=Math.sin(B*Math.PI)*(.3+.7*Math.sin(W*Math.PI));Oe.setZ(x,-C*Z)}qe.computeVertexNormals(),S(qe,h,0,Ee,de)}Be(-4.34,5,3.8,.05),K(-4.38,3.95,3.4,2),Be(-4.34,7.2,3,.045),K(-4.37,6.32,2.7,1.7),Be(.36,5.8,4.4,.055),K(.32,4.55,4,2.4),Be(.36,8.6,3.4,.05),K(.33,7.55,3,2),Be(.38,10.3,2.6,.045);let ue=S(new Tt(.1,.1,2.35,8),u,0,10.3,.38);ue.rotation.z=Math.PI/2,Be(4.48,4.9,2.9,.045);let se=S(new Tt(.1,.1,2.6,8),u,0,4.9,4.48);se.rotation.z=Math.PI/2;let Ue=new xi;Ue.moveTo(0,0),Ue.lineTo(2.3,.5),Ue.lineTo(0,2.6),Ue.lineTo(0,0);let He=S(new zi(Ue),h,0,3.9,4.6);He.rotation.y=-Math.PI/2;let Ie=S(new Tt(.04,.04,3.1,8),l,0,5.45,5.75);Ie.rotation.x=Math.atan2(2.3,-2.1);let Ct=S(new Tt(.04,.04,2.4,8),l,0,4.15,5.75);Ct.rotation.x=Math.atan2(2.3,.5);let Fe=new cn(1.4,.34,8,2);{let de=Fe.attributes.position;for(let Ee=0;Ee<de.count;Ee++){let Te=de.getX(Ee)/1.4+.5;de.setY(Ee,de.getY(Ee)*(1-.6*Te)),de.setZ(Ee,.1*Math.sin(Te*6)*Te)}Fe.translate(.7,0,0),Fe.computeVertexNormals()}let ot=S(Fe,y,0,11.35,.5);ot.rotation.y=Math.PI/2;let et=[];function ze(de,Ee,Te,N,qe,Oe){et.push(de,Ee,Te,N,qe,Oe)}let wt=[{z:-4.2,top:6.3,feet:[-5.1,-4.5,-3.9,-3.3]},{z:.5,top:7.6,feet:[-.4,.1,.7,1.3]},{z:4.6,top:5.4,feet:[3.7,4.2,4.8,5.3]}];for(let de of wt)for(let Ee of[-1,1])for(let Te of de.feet)ze(Ee*.1,de.top,de.z,Ee*(s(Te)+.02),1.45+r(Te),Te);ze(0,2.75,-9.93,0,9.4,-4.2),ze(0,2.14,-8.4,0,6.3,-4.2),ze(0,9.4,-4.2,0,11.3,.5),ze(0,11.3,.5,0,8,4.6),ze(0,8,4.6,0,3.95,7.5),ze(0,2.75,-9.93,0,.35,-7.9);for(let de of[-1,1])ze(de*1.9,5,-4.34,0,8.8,-4.2),ze(de*2.2,5.8,.36,0,10.6,.5);for(let de of[-1,1])ze(de*1.9,5,-4.34,0,6.5,.5),ze(de*1.5,7.2,-4.34,0,8.2,.5),ze(de*2.2,5.8,.36,0,5.8,4.6),ze(de*1.7,8.6,.36,0,7.7,4.6);let At=new _t;At.setAttribute("position",new nt(et,3));let Dt=new hs(At,new Oi({color:1314828,transparent:!0,opacity:.8}));i.add(Dt),i.traverse(function(de){de.isMesh&&(de.castShadow=!0,de.receiveShadow=!0)});for(let de of M)de.castShadow=!1;return i}var Ff={Calm:{wind:.8,waveHeight:.34,foam:.14,time:9.2,clouds:.18,exposure:1.02,rain:0},Azure:{wind:2.6,waveHeight:.72,foam:.42,time:13.6,clouds:.22,exposure:1.05,rain:0},Golden:{wind:1.9,waveHeight:.6,foam:.3,time:17.9,clouds:.34,exposure:1.1,rain:0},Rain:{wind:3.4,waveHeight:.85,foam:.5,time:15.2,clouds:.8,exposure:.95,rain:.6},Storm:{wind:7.8,waveHeight:1.8,foam:1,time:16.4,clouds:.98,exposure:.9,rain:.85},Tempest:{wind:8,waveHeight:1.85,foam:1,time:17.4,clouds:1,exposure:.85,rain:1}},It={...Ff.Azure,autopilot:!0},Of=[[-8,62,.205,.34],[14,39,.167,.38],[58,30,.075,.4],[-28,24,.135,.44],[-50,18.5,.062,.48],[33,15.5,.108,.5],[5,10.2,.088,.55],[40,8.3,.045,.58],[-42,6.8,.071,.62],[24,4.4,.055,.68],[-33,3.5,.028,.69],[-15,2.9,.045,.7],[49,1.9,.034,.72],[-55,1.25,.026,.74]],Xl=Of.length,Ev=.72,Tv=9.81,ql=.35,Bf=Of.map(([i,e,t,n],s)=>{let r=2*Math.PI/e,o=i*Math.PI/180;return{kx:Math.cos(o)*r,ky:Math.sin(o)*r,k:r,omega:Math.sqrt(Tv*r),amp:t,q:n,seed:s*2.399963%(2*Math.PI),envDepth:yt.lerp(.45,.16,yt.smoothstep(r,.3,2.2))}}),To=Bf.map(()=>({kx:0,ky:0,amp:0,q:0,phase:0,gphase:0,omega:0,envDepth:0})),If=Math.PI*2;function wv(i,e,t){let n=i/Ev*.85,s=yt.clamp(.3+e*.24,.3,1.55),r=yt.clamp(.48+e*.15,.5,1.35);for(let o=0;o<Xl;o++){let a=Bf[o],l=To[o],c=yt.smoothstep(a.k,.28,2.6);l.kx=a.kx,l.ky=a.ky,l.omega=a.omega,l.amp=a.amp*n*yt.lerp(1,s,c),l.q=Math.min(a.q*r,1.15),l.envDepth=a.envDepth,l.phase=(a.omega*t+a.seed)%If,l.gphase=(ql*.5*a.omega*t+a.seed*1.7)%If}}var zh=7.2,en={x:-26,z:-52,r:30,peak:8.9};function Av(i,e){let t=Math.hypot(i-en.x,e-en.z)/en.r;return t>=1?0:Math.pow(Math.cos(t*Math.PI*.5),1.7)*en.peak}function Rv(i,e){return Math.sin(i*.051+e*.083)*.3+Math.sin(i*.11-e*.061+2.1)*.17+Math.sin(-i*.023+e*.037+4.2)*.22}function si(i,e){let t=Av(i,e),n=Math.max(0,1-t/2.5);return-zh+t+Rv(i,e)*.4*n}var Cv=`
  float floorHeightApprox(vec2 p) {
    float d = distance(p, vec2(${en.x.toFixed(1)}, ${en.z.toFixed(1)})) / ${en.r.toFixed(1)};
    float island = d < 1.0 ? pow(cos(d * 1.5707963), 1.7) * ${en.peak.toFixed(2)} : 0.0;
    return -${zh.toFixed(1)} + island;
  }
`;function wo(i,e,t){let n=0;for(let s=0;s<Xl;s++){let r=To[s],o=r.kx*i+r.ky*e,a=1+r.envDepth*Math.sin(ql*o-r.gphase);n+=r.amp*a*Math.sin(o-r.phase)}return n}function Lf(i,e,t,n){let s=wo(i,e,t);return{h:s,dx:wo(i+n,e,t)-s,dz:wo(i,e+n,t)-s}}var Fh=`
  varying vec3 vWorldPosition;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorldPosition = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
    gl_Position.z = gl_Position.w; // pin to far plane
  }
`,Oh=`
  varying vec3 vWorldPosition;
  uniform vec3 uSunDir;
  uniform vec3 uMoonDir;
  uniform float uTurbidity;
  uniform float uRayleigh;
  uniform float uMieCoefficient;
  uniform float uMieDirectionalG;
  uniform float uTime;
  uniform float uCloudCover;
  uniform float uDay;
  uniform float uSkyGamma;
  uniform float uSkyGain;
  uniform float uSkyLift;
  uniform float uSkySat;
  uniform float uHazeBand;
  uniform float uHazeMix;
  uniform float uCloudScale;
  uniform float uCloudSharp;
  uniform vec3 uSunTint;
  uniform vec3 uCloudAmbient;
  uniform vec3 uFogColor;
  uniform vec3 uUnderFog;
  uniform float uUnderwater;
  uniform float uLightning;
  uniform float uRainSky;

  const vec3 up = vec3(0.0, 1.0, 0.0);
  const float pi = 3.141592653589793;
  const vec3 totalRayleigh = vec3(5.804542996261093e-6, 1.3562911419845635e-5, 3.0265902468824876e-5);
  const vec3 mieConst = vec3(1.8399918514433978e14, 2.7798023919660528e14, 4.0790479543861094e14);
  const float cutoffAngle = 1.6110731556870734;
  const float steepness = 1.5;
  const float EE = 1000.0;

  float sunIntensity(float zenithAngleCos) {
    zenithAngleCos = clamp(zenithAngleCos, -1.0, 1.0);
    return EE * max(0.0, 1.0 - pow(2.718281828, -((cutoffAngle - acos(zenithAngleCos)) / steepness)));
  }
  vec3 totalMie(float t) {
    float c = (0.2 * t) * 10e-18;
    return 0.434 * c * mieConst;
  }
  float rayleighPhase(float cosTheta) { return (3.0 / (16.0 * pi)) * (1.0 + cosTheta * cosTheta); }
  float hgPhase(float cosTheta, float g) {
    float g2 = g * g;
    return (1.0 / (4.0 * pi)) * ((1.0 - g2) / pow(1.0 - 2.0 * g * cosTheta + g2, 1.5));
  }

  float hash12(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  float hash13(vec3 p3) {
    p3 = fract(p3 * 0.1031);
    p3 += dot(p3, p3.zyx + 31.32);
    return fract((p3.x + p3.y) * p3.z);
  }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x),
      mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < FBM_OCT; i++) { v += a * vnoise(p); p = p * 2.11 + vec2(13.7, 7.3); a *= 0.52; }
    return v;
  }
  float vnoise3(vec3 p) {
    vec3 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float n000 = hash13(i);
    float n100 = hash13(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash13(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash13(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash13(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash13(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash13(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash13(i + vec3(1.0, 1.0, 1.0));
    return mix(
      mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y),
      mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y), f.z);
  }
  float fbm3(vec3 p) {
    return vnoise3(p) * 0.62 + vnoise3(p * 2.73 + 11.3) * 0.38;
  }

  const float CLOUD_BASE = 700.0;
  const float CLOUD_TOP = 1750.0;
  // dedicated 3-octave coverage noise \u2014 the full FBM_OCT fbm is too
  // expensive inside a raymarch loop
  float cloudFbm(vec2 p) {
    float v = vnoise(p) * 0.52;
    p = p * 2.11 + vec2(13.7, 7.3);
    v += vnoise(p) * 0.28;
    p = p * 2.11 + vec2(13.7, 7.3);
    return v + vnoise(p) * 0.2;
  }
  // coarse mass only \u2014 used by the shadow probes
  float cloudMass(vec3 pos, vec2 windDrift, float covLo) {
    float y01 = clamp((pos.y - CLOUD_BASE) / (CLOUD_TOP - CLOUD_BASE), 0.0, 1.0);
    vec2 cuv = pos.xz * 0.00042 * uCloudScale + windDrift * 0.001;
    float mass = smoothstep(covLo, covLo + 0.42, cloudFbm(cuv));
    float prof = smoothstep(0.0, 0.08, y01) * smoothstep(1.0, 0.35 + mass * 0.45, y01);
    return mass * prof;
  }
  float cloudField(vec3 pos, vec2 windDrift, float covLo, float rayDist) {
    float y01 = clamp((pos.y - CLOUD_BASE) / (CLOUD_TOP - CLOUD_BASE), 0.0, 1.0);
    vec2 cuv = pos.xz * 0.00042 * uCloudScale + windDrift * 0.001;
    float mass = smoothstep(covLo, covLo + 0.42, cloudFbm(cuv));
    if (mass < 0.015) return 0.0; // empty air: skip the expensive 3D work
    // true 3D base modulation: without this the 2D coverage smears into
    // striation lines along the view ray
    float m3 = vnoise3(vec3(pos.x + windDrift.x * 2.4, pos.y * 1.45, pos.z + windDrift.y * 2.4) * 0.0011);
    mass *= 0.58 + 0.62 * m3;
    float prof = smoothstep(0.0, 0.08, y01) * smoothstep(1.0, 0.22 + mass * 0.62, y01);
    float shape = mass * prof;
    if (shape < 0.01) return 0.0;
    float eroAmp = 0.62 * (1.0 + (1.0 - covLo) * 0.55);
    float ero = fbm3(vec3(pos.x + windDrift.x * 2.4, pos.y * 1.6, pos.z + windDrift.y * 2.4) * 0.0023);
    float d = clamp((shape - (ero - 0.38) * eroAmp * (1.15 - shape)) * 1.7 - 0.22, 0.0, 1.0);
    return d * smoothstep(0.04, 0.3, mass);
  }

  void main() {
    vec3 direction = normalize(vWorldPosition - cameraPosition);

    /* ---- Rayleigh / Mie scattering ---- */
    float sunfade = 1.0 - clamp(1.0 - exp(uSunDir.y * 2.4), 0.0, 1.0);
    float rayleighCoefficient = uRayleigh - (1.0 - sunfade);
    vec3 betaR = totalRayleigh * rayleighCoefficient;
    vec3 betaM = totalMie(uTurbidity) * uMieCoefficient;
    float sunE = sunIntensity(dot(uSunDir, up));

    // lift low elevations toward the zenith hue so the visible band stays blue
    float yAtmo = mix(max(direction.y, 0.0), 0.42, uSkyLift * (1.0 - max(direction.y, 0.0)));
    float zenithAngle = acos(min(yAtmo, 1.0));
    float inverseZ = 1.0 / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));
    float sR = 8400.0 * inverseZ;
    float sM = 1250.0 * inverseZ;
    vec3 Fex = exp(-(betaR * sR + betaM * sM));

    float cosTheta = dot(direction, uSunDir);
    vec3 betaRTheta = betaR * rayleighPhase(cosTheta * 0.5 + 0.5);
    vec3 betaMTheta = betaM * hgPhase(cosTheta, uMieDirectionalG);
    vec3 Lin = pow(sunE * ((betaRTheta + betaMTheta) / (betaR + betaM)) * (1.0 - Fex), vec3(1.5));
    Lin *= mix(vec3(1.0),
      pow(sunE * ((betaRTheta + betaMTheta) / (betaR + betaM)) * Fex, vec3(0.5)),
      clamp(pow(1.0 - dot(up, uSunDir), 5.0), 0.0, 1.0));

    vec3 L0 = vec3(0.1) * Fex;
    vec3 sky = (Lin + L0) * 0.04 + vec3(0.0, 0.0003, 0.00075);
    sky = pow(sky, vec3(1.0 / (uSkyGamma + uSkyGamma * sunfade)));
    sky *= uSkyGain; // the Preetham fit is calibrated for ~0.5 exposure; rescale for ours
    float skyLuma = dot(sky, vec3(0.2126, 0.7152, 0.0722));
    sky = max(mix(vec3(skyLuma), sky, uSkySat), 0.0);
    sky *= 1.0 - uCloudCover * 0.66; // heavy overcast blocks direct scattering
    sky *= 1.0 - uRainSky * 0.45;    // a downpour blackens the whole vault

    /* ---- night sky base ---- */
    float night = 1.0 - uDay;
    float deepNight = smoothstep(0.72, 1.0, night);
    vec3 nightSky = mix(vec3(0.012, 0.021, 0.045), vec3(0.001, 0.003, 0.01), clamp(direction.y * 1.4 + 0.2, 0.0, 1.0));
    sky += nightSky * night;

    /* ---- stars + milky way (skipped in the mirror pass) ---- */
    #ifndef MIRROR_PASS
    if (deepNight > 0.02 && direction.y > 0.0) {
      vec3 sd = floor(direction * 340.0);
      float star = step(0.9986, hash13(sd));
      float mag = hash13(sd + 17.0);
      float twinkle = 0.72 + 0.28 * sin(uTime * (1.5 + mag * 4.0) + mag * 40.0);
      sky += vec3(0.9, 0.94, 1.0) * star * pow(mag, 3.0) * twinkle * deepNight * smoothstep(0.0, 0.18, direction.y) * 0.55;
      // milky way: soft granular band along a tilted great circle
      vec3 mwNormal = normalize(vec3(0.42, 0.55, 0.72));
      float bandDist = abs(dot(direction, mwNormal));
      float band = exp(-bandDist * bandDist * 26.0);
      vec2 mwUv = vec2(dot(direction, normalize(cross(mwNormal, vec3(0.0, 1.0, 0.0)))),
                       dot(direction, normalize(cross(mwNormal, cross(mwNormal, vec3(0.0, 1.0, 0.0))))));
      float grain = fbm(mwUv * 7.0) * 0.65 + fbm(mwUv * 19.0) * 0.35;
      float lanes = smoothstep(0.35, 0.75, grain);
      sky += vec3(0.5, 0.56, 0.72) * band * lanes * 0.085 * deepNight * smoothstep(0.0, 0.2, direction.y);
    }
    #endif

    /* ---- moon ---- */
    float moonNight = smoothstep(0.45, 0.95, night);
    float moonDot = dot(direction, uMoonDir);
    float moonDisc = smoothstep(0.99965, 0.99985, moonDot);
    float moonGlow = pow(max(moonDot, 0.0), 220.0) * 0.2 + pow(max(moonDot, 0.0), 24.0) * 0.02;
    sky += (vec3(0.9, 0.93, 1.0) * moonDisc * 1.4 + vec3(0.55, 0.65, 0.85) * moonGlow) * moonNight;

    /* ---- sun disc + 22-degree halo (before clouds so cover occludes) ---- */
    float sundisk = smoothstep(0.99925, 0.99972, cosTheta);
    sky += (sunE * 1900.0 * Fex) * sundisk * 0.00022 * uDay * (1.0 - uCloudCover) * (1.0 - uCloudCover);
    float haloBand = exp(-pow((cosTheta - 0.927) * 220.0, 2.0));
    sky += uSunTint * haloBand * 0.05 * uDay * (1.0 - uCloudCover * 0.8);

    /* ---- volumetric cumulus: raymarched slab with sun lighting ---- */
    float horizonFade = smoothstep(0.0, 0.045, direction.y);
    float cloudFade = smoothstep(0.05, 0.17, direction.y); // haze owns the horizon band
    float cover = clamp(uCloudCover, 0.0, 1.0);
    float cloudShadow = 0.0;
    #if defined(MIRROR_PASS) || defined(CLOUD_FLAT)
    /* mirror pass / low-power tier: a flat deck is enough */
    if (direction.y > 0.02 && cover > 0.02) {
      vec2 mcuv = direction.xz / (direction.y + 0.15) * 0.9 * uCloudScale
        + vec2(1.0, 0.35) * uTime * 0.0045;
      float flatCloud = smoothstep(1.0 - cover * 0.95, 1.32 - cover * 0.95, cloudFbm(mcuv));
      sky = mix(sky, (uCloudAmbient * (0.55 + 0.5 * uDay) + uSunTint * 0.2) * (1.0 - uRainSky * 0.5),
        flatCloud * horizonFade * 0.9);
      cloudShadow = flatCloud * 0.8;
      sky += uLightning * vec3(0.72, 0.78, 1.0) * (0.22 + flatCloud * 0.9);
    }
    #else
    if (direction.y > 0.05 && uUnderwater < 0.9 && cover > 0.02) {
      vec2 windDrift = vec2(1.0, 0.35) * uTime * 4.5;

      float t0 = CLOUD_BASE / max(direction.y, 0.05);
      float t1 = CLOUD_TOP / max(direction.y, 0.05);
      t1 = min(t1, t0 + 6500.0);
      float dt = (t1 - t0) / float(CLOUD_STEPS);
      // interleaved gradient noise: clean ordered dither, static so it never crawls
      float jitter = hash12(gl_FragCoord.xy * 1.37); // white noise: no ordered moire
      float t = t0 + dt * jitter * 0.45;

      float transmittance = 1.0;
      vec3 scattered = vec3(0.0);

      // day: the sun drives cloud lighting; night: the moon does
      float dayPick = step(0.35, uDay);
      vec3 skyLightDir = normalize(mix(uMoonDir, uSunDir, dayPick));
      float cosPh = dot(direction, skyLightDir);

      // dual-lobe Henyey-Greenstein: strong forward (silver lining) + mild back
      float g1 = 0.62, g2 = -0.18;
      float ph1 = (1.0 - g1 * g1) / pow(1.0 + g1 * g1 - 2.0 * g1 * cosPh, 1.5);
      float ph2 = (1.0 - g2 * g2) / pow(1.0 + g2 * g2 - 2.0 * g2 * cosPh, 1.5);
      float phase = mix(ph2, ph1, 0.62) * 0.3;

      vec3 sunCol = (uSunTint * (2.6 * uDay + 0.04)
        + vec3(0.55, 0.65, 0.85) * (1.0 - uDay) * 0.25) // moonlight at night
        * (1.0 - uRainSky * 0.55);
      vec3 ambient = uCloudAmbient * (0.7 + 0.6 * uDay) * (1.0 - uRainSky * 0.5) * (0.26 + 0.74 * clamp(skyLightDir.y * 2.2, 0.0, 1.0));

      float covLo = 1.0 - cover * 0.88;
      // shadow probes stretch when the light sits low so decks stay coherent
      float lt = 120.0 / clamp(skyLightDir.y + 0.2, 0.35, 1.0);

      for (int i = 0; i < CLOUD_STEPS; i++) {
        vec3 pos = direction * t;
        float density = cloudField(pos, windDrift, covLo, t);
        if (density > 0.004) {
          // short probe = the cloud shades its own far side; long probe = neighbours
          float shadowAcc = cloudField(pos + skyLightDir * 55.0, windDrift, covLo, t) * 1.5;
          for (int j = 1; j <= CLOUD_LSTEPS; j++) {
            shadowAcc += cloudMass(pos + skyLightDir * lt * float(j), windDrift, covLo);
          }
          float sunLight = exp(-shadowAcc * 2.3);
          // powder term keeps rims bright, cores shaded
          float powder = 1.0 - exp(-density * 3.5);
          float y01 = clamp((pos.y - CLOUD_BASE) / (CLOUD_TOP - CLOUD_BASE), 0.0, 1.0);
          vec3 sampleLight = sunCol * sunLight * phase * mix(1.0, powder, 0.55) + ambient * (0.35 + 0.65 * y01);
          float stepOpacity = 1.0 - exp(-density * dt * 0.012);
          scattered += sampleLight * stepOpacity * transmittance;
          transmittance *= 1.0 - stepOpacity;
          if (transmittance < 0.015) break;
        }
        t += dt;
      }

      float cloudAmount = (1.0 - transmittance) * cloudFade;
      cloudShadow = cloudAmount;
      // fade the thinnest fringes \u2014 at low opacity the march dither shows
      float fringe = smoothstep(0.02, 0.14, cloudAmount);
      cloudAmount *= fringe;
      sky = sky * (1.0 - cloudAmount) + scattered * cloudFade * fringe;
      // lightning lights the deck from inside
      sky += uLightning * vec3(0.72, 0.78, 1.0) * (0.22 + cloudAmount * 1.2);
      // moonlit rims
      sky += vec3(0.6, 0.68, 0.85) * pow(max(moonDot, 0.0), 14.0) * cloudAmount * night * 0.12;
    } else {
      sky += uLightning * vec3(0.72, 0.78, 1.0) * 0.22 * (1.0 - uUnderwater);
    }
    #endif

    /* ---- thin cirrus veil above everything ---- */
    if (direction.y > 0.02) {
      vec2 ciruv = direction.xz / (direction.y + 0.22) * 0.85 + vec2(uTime * 0.004, uTime * 0.0015);
      float cir = fbm(ciruv * vec2(1.0, 2.6));
      float cirMask = smoothstep(0.62, 0.9, cir) * (0.35 + cover * 0.3);
      sky = mix(sky, uSunTint * 0.9 + uCloudAmbient * 0.5, cirMask * 0.4 * horizonFade * uDay);
    }

    /* ---- crepuscular rays fan out when the sun sits low ---- */
    float lowSun = clamp(1.0 - uSunDir.y * 3.0, 0.0, 1.0) * uDay;
    if (lowSun > 0.05 && cosTheta > 0.15) {
      vec3 basisA = normalize(cross(uSunDir, up));
      vec3 basisB = normalize(cross(uSunDir, basisA));
      vec3 rel = normalize(direction - uSunDir * cosTheta);
      float phi = atan(dot(rel, basisB), dot(rel, basisA));
      float spokes = vnoise(vec2(phi * 3.5 + 7.0, 0.5)) * 0.6 + vnoise(vec2(phi * 9.0, 2.5)) * 0.4;
      spokes = smoothstep(0.45, 0.85, spokes);
      sky += uSunTint * spokes * pow(max(cosTheta, 0.0), 5.0) * lowSun
        * (1.0 - cloudShadow) * (1.0 - uCloudCover * 0.45) * 0.5;
    }

    /* ---- distant rain curtains smear the horizon in a downpour ---- */
    float rainVeil = uRainSky * smoothstep(0.35, 0.02, direction.y)
      * (0.35 + 0.5 * vnoise(vec2(atan(direction.z, direction.x) * 6.0, direction.y * 1.2 - uTime * 0.1)));
    sky = mix(sky, uFogColor * 1.06, clamp(rainVeil, 0.0, 1.0) * 0.55);

    /* ---- horizon haze \u2014 matches the water fog color for a seamless line ---- */
    float haze = smoothstep(uHazeBand, 0.0, max(direction.y, 0.0));
    haze *= 1.0 - pow(max(cosTheta, 0.0), 6.0) * 0.85 * uDay; // sun glow burns through
    vec3 hazeCol = uFogColor * mix(0.55, 1.35, pow(max(cosTheta, 0.0), 3.0) * uDay);
    sky = mix(sky, hazeCol, haze * uHazeMix);

    /* ---- residual sun glow that penetrates haze and thin cloud ---- */
    sky += uSunTint * pow(max(cosTheta, 0.0), 160.0) * 0.35 * uDay * (1.0 - uCloudCover * 0.7) * (1.0 - uRainSky * 0.85);

    /* ---- submerged: the sky dome becomes the water column itself \u2014
       bright downwelling ceiling above, deep gloom below, a blurred
       sun ball and god-ray spokes fanning down from the surface ---- */
    if (uUnderwater > 0.002) {
      float upness = clamp(direction.y, -1.0, 1.0);
      vec3 uw = mix(uUnderFog, uUnderFog * vec3(0.30, 0.42, 0.55), smoothstep(0.0, -0.65, upness));
      uw = mix(uw, uUnderFog * vec3(2.3, 2.15, 1.9) + vec3(0.010, 0.028, 0.034) * uDay,
        smoothstep(0.02, 0.65, upness));
      float cosSun = dot(direction, uSunDir);
      // near the horizontal the dome must equal the flat under-fog exactly,
      // or it shows as a bright seam through the far edge of the water plane
      float horizonGate = smoothstep(0.015, 0.1, abs(upness));
      // sun ball diffused by the water, plus wide forward scatter
      uw += uSunTint * (pow(max(cosSun, 0.0), 34.0) * 3.2 + pow(max(cosSun, 0.0), 5.0) * 0.5)
        * uDay * horizonGate;
      if (cosSun > 0.15) {
        // god rays: noise spokes around the sun axis, drifting slowly
        vec3 gA = normalize(cross(uSunDir, up));
        vec3 gB = normalize(cross(uSunDir, gA));
        vec3 gRel = normalize(direction - uSunDir * cosSun);
        float gPhi = atan(dot(gRel, gB), dot(gRel, gA));
        float rays = vnoise(vec2(gPhi * 5.5 + uTime * 0.06, 1.7)) * 0.6
                   + vnoise(vec2(gPhi * 12.0 - uTime * 0.045, 6.1)) * 0.4;
        rays = smoothstep(0.44, 0.9, rays);
        uw += uSunTint * rays * pow(max(cosSun, 0.0), 7.0) * 2.4 * uDay * horizonGate;
      }
      sky = mix(sky, uw, uUnderwater);
    }

    // dither against banding
    sky += (hash12(gl_FragCoord.xy) - 0.5) * 0.004;

    gl_FragColor = vec4(sky, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Df=`
  uniform vec4 uWaveData[NW];  // kx, ky, amp, Q
  uniform vec4 uWavePhase[NW]; // phase, groupPhase, omega, envDepth
  varying vec3 vWorldPosition;
  varying vec2 vUndisplaced;

  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vec2 p = world.xz;
    vec3 displaced = world.xyz;
    #ifndef FAR_PLANE
      float fade = 1.0 - smoothstep(150.0, 200.0, length(p));
      for (int i = 0; i < NW; i++) {
        vec4 w = uWaveData[i];
        vec4 ph = uWavePhase[i];
        float k = length(w.xy);
        float along = dot(w.xy, p);
        float env = 1.0 + ph.w * sin(${ql} * along - ph.y);
        float amp = w.z * env * fade;
        float phase = along - ph.x;
        displaced.y += amp * sin(phase);
        displaced.xz += (w.xy / k) * (w.w * amp * cos(phase));
      }
    #endif
    vWorldPosition = displaced;
    vUndisplaced = p;
    gl_Position = projectionMatrix * viewMatrix * vec4(displaced, 1.0);
  }
`,Nf=`
  uniform vec4 uWaveData[NW];  // kx, ky, amp, Q
  uniform vec4 uWavePhase[NW]; // phase, groupPhase, omega, envDepth
  uniform float uTime;
  uniform sampler2D uMirror;
  uniform mat4 uMirrorMatrix;
  uniform vec3 uLightDir;
  uniform vec3 uLightColor;
  uniform vec3 uDeepColor;
  uniform vec3 uShallowColor;
  uniform vec3 uScatterColor;
  uniform vec3 uFogColor;
  uniform vec3 uFoamColor;
  uniform float uFoamAmount;
  uniform float uFogDensity;
  uniform float uDetailAmp;
  uniform vec3 uUnderFog;
  uniform vec3 uSkyZenith;
  uniform sampler2D uRefraction;
  uniform vec2 uScreenSize;
  uniform float uCloudCover2;
  uniform float uSubmerged;
  uniform float uRain;
  uniform float uDay;

  varying vec3 vWorldPosition;
  varying vec2 vUndisplaced;

  float hash12(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x),
      mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++) { v += a * vnoise(p); p = p * 2.13 + vec2(11.3, 5.7); a *= 0.5; }
    return v;
  }
  ${Cv}
  float ridge(float n) { return 1.0 - abs(2.0 * n - 1.0); }
  float caustic(vec2 uv) {
    float c1 = ridge(vnoise(uv * 0.9 + vec2(uTime * 0.21, uTime * 0.17)));
    float c2 = ridge(vnoise(uv * 1.15 - vec2(uTime * 0.16, -uTime * 0.19)));
    return pow(c1 * c2, 2.4) * 2.6;
  }

  void main() {
    vec2 p = vUndisplaced;
    float dist = length(cameraPosition - vWorldPosition);

    /* ---- analytic Gerstner normal + Jacobian, evaluated per-pixel ---- */
    vec2 slope = vec2(0.0);
    float jxx = 1.0, jyy = 1.0, jxy = 0.0;
    float jxxOld = 1.0, jyyOld = 1.0, jxyOld = 0.0;
    float qSum = 0.0;
    float elevation = 0.0;
    for (int i = 0; i < NW; i++) {
      vec4 w = uWaveData[i];
      vec4 ph = uWavePhase[i];
      float k = length(w.xy);
      vec2 d = w.xy / k;
      float along = dot(w.xy, p);
      float env = 1.0 + ph.w * sin(${ql} * along - ph.y);
      float amp = w.z * env;
      float phase = along - ph.x;
      float s = sin(phase), c = cos(phase);
      float qak = w.w * amp * k;
      slope += d * (amp * k * c);
      elevation += amp * s;
      jxx -= qak * d.x * d.x * s;
      jyy -= qak * d.y * d.y * s;
      jxy -= qak * d.x * d.y * s;
      qSum -= qak * s;
      // Jacobian a moment ago \u2014 fakes lingering foam decay
      float sOld = sin(phase + ph.z * 0.85);
      jxxOld -= qak * d.x * d.x * sOld;
      jyyOld -= qak * d.y * d.y * sOld;
      jxyOld -= qak * d.x * d.y * sOld;
    }
    vec3 normal = normalize(vec3(-slope.x, 1.0 + qSum * 0.5, -slope.y));

    /* ---- high-frequency detail ripples (finite-difference fbm) ----
       Sampled on the DISPLACED surface so ripples ride the swells
       instead of sliding underneath them. */
    vec2 q = vWorldPosition.xz;
    vec2 wdir = vec2(0.9578, 0.2873);
    vec2 wperp = vec2(-0.2873, 0.9578);
    float detailFade = uDetailAmp / (1.0 + dist * 0.055);
    vec2 duv = q * 0.9 + wdir * (uTime * 0.42);
    vec2 duv2 = q * 2.7 - wdir * (uTime * 0.33) + wperp * (uTime * 0.12);
    float e = 0.09;
    float n0 = fbm(duv) + fbm(duv2) * 0.5;
    float nx = fbm(duv + vec2(e, 0.0)) + fbm(duv2 + vec2(e * 3.0, 0.0)) * 0.5;
    float ny = fbm(duv + vec2(0.0, e)) + fbm(duv2 + vec2(0.0, e * 3.0)) * 0.5;
    vec2 detailHF = vec2(n0 - nx, n0 - ny) * 3.2;
    normal.xz += detailHF * detailFade;
    normal = normalize(normal);

    /* ---- raindrop impacts: expanding rings + splash crowns that ride
       the displaced surface. Cells activate with rain intensity, so
       light rain plips sparsely and a downpour boils. ---- */
    float rainCrown = 0.0;
    if (uRain > 0.02) {
      vec2 rippleGrad = vec2(0.0);
      float proximity = smoothstep(95.0, 20.0, dist);
      for (int l = 0; l < 2; l++) {
        float sc = l == 0 ? 2.1 : 0.9;
        vec2 uv = q * sc + float(l) * 17.7;
        vec2 cell = floor(uv);
        vec2 f = fract(uv) - 0.5;
        float h = hash12(cell + float(l) * 31.0);
        // only a rain-dependent share of cells fires this cycle
        float cellOn = step(hash12(cell + 57.3), uRain * (l == 0 ? 1.15 : 0.75));
        float life = fract(uTime * (1.4 + h * 1.3) + h * 11.0);
        vec2 center = (vec2(hash12(cell + 3.1), hash12(cell + 5.7)) - 0.5) * 0.62;
        vec2 rel = f - center;
        float r = length(rel) + 1e-4;
        float radius = life * 0.34;
        float env = (1.0 - life) * (1.0 - life) * cellOn;
        float gauss = exp(-pow((r - radius) * 11.0, 2.0));
        float dring = -242.0 * (r - radius) * gauss * env;
        rippleGrad += (rel / r) * dring * 0.014;
        // white crown right at the impact point, brief and bright
        rainCrown += exp(-r * sc * 26.0) * pow(1.0 - life, 3.0) * env;
      }
      normal = normalize(normal + vec3(rippleGrad.x, 0.0, rippleGrad.y) * uRain * proximity);
      rainCrown *= uRain * proximity;
    }

    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    vec3 color;

    if (gl_FrontFacing) {
    /* ================= surface seen from above ================= */
    float facing = clamp(dot(normal, viewDir), 0.0, 1.0);
    float fresnel = 0.02 + 0.98 * pow(1.0 - facing, 5.0);

    /* ---- mirror reflection ---- */
    vec4 mirrorCoord = uMirrorMatrix * vec4(vWorldPosition, 1.0);
    vec2 mUv = mirrorCoord.xy / mirrorCoord.w;
    float distortion = 0.13 / (1.0 + dist * 0.045);
    mUv += normal.xz * distortion;
    mUv = clamp(mUv, vec2(0.002), vec2(0.998));
    vec3 reflection = texture2D(uMirror, mUv).rgb;

    /* ---- water body: depth tint + crest subsurface scattering ---- */
    float transmission = pow(facing, 1.8);
    vec3 body = mix(uDeepColor, uShallowColor, transmission * 0.65 + clamp(elevation * 0.35 + 0.15, 0.0, 0.55));
    float towardLight = pow(max(dot(viewDir, -uLightDir), 0.0), 3.0);
    float crest = clamp(elevation * 0.65 + 0.2, 0.0, 1.0);
    body += uScatterColor * (towardLight * crest * 1.4 + crest * 0.08) * (1.0 - fresnel);

    /* ---- true refraction: the rendered underwater scene sampled
       through the rippled surface, attenuated by the water column ---- */
    vec3 refr = refract(-viewDir, normal, 0.7519);
    float floorY = floorHeightApprox(p);
    float tDist = (vWorldPosition.y - floorY) / max(-refr.y, 0.08);
    vec2 hitP = p + refr.xz * clamp(tDist, 0.0, 140.0);
    floorY = floorHeightApprox(hitP);
    tDist = clamp((vWorldPosition.y - floorY) / max(-refr.y, 0.08), 0.0, 140.0);
    vec2 screenUv = gl_FragCoord.xy / uScreenSize;
    float wobble = clamp(6.0 / (1.0 + dist * 0.35), 0.12, 1.2);
    vec2 refrUv = clamp(screenUv + normal.xz * 0.16 * wobble, vec2(0.004), vec2(0.996));
    vec3 bottomCol = texture2D(uRefraction, refrUv).rgb;
    vec3 transmit = exp(-vec3(0.24, 0.08, 0.055) * tDist);
    body = mix(body, bottomCol, transmit);

    color = mix(body, reflection, fresnel);

    /* ---- sun/moon specular + glitter ---- */
    vec3 halfDir = normalize(uLightDir + viewDir);
    float ndh = max(dot(normal, halfDir), 0.0);
    float specPower = mix(360.0, 60.0, clamp(dist / 500.0, 0.0, 1.0));
    float spec = pow(ndh, specPower) * (0.35 + fresnel * 3.2);
    float glitterGate = smoothstep(0.55, 0.95, vnoise(q * 5.5 + vec2(uTime * 0.7, -uTime * 0.5)));
    float glitter = pow(ndh, 1400.0 * detailFade + 90.0) * glitterGate * 7.0 * detailFade;
    color += uLightColor * (spec * 1.6 + glitter) * max(uLightDir.y * 3.5 + 0.15, 0.0);

    /* ---- whitecap foam from wave-pinch Jacobian ---- */
    float j = jxx * jyy - jxy * jxy;
    float jOld = jxxOld * jyyOld - jxyOld * jxyOld;
    float foamThreshold = mix(-0.1, 0.42, uFoamAmount);
    float foamFresh = smoothstep(foamThreshold, foamThreshold - 0.38, j);
    float foamTrail = smoothstep(foamThreshold, foamThreshold - 0.38, jOld) * 0.35;
    float foamMask = max(foamFresh, foamTrail);
    float mottle = fbm(q * 1.5 + vec2(uTime * 0.1, -uTime * 0.07));
    foamMask *= smoothstep(0.28, 0.72, mottle + foamMask * 0.32);
    // wind streaks at high foam settings
    float streaks = fbm(vec2(q.x * 0.18 + q.y * 0.06, q.y * 0.9) + vec2(uTime * 0.05, 0.0));
    foamMask = max(foamMask, smoothstep(1.12, 1.5, streaks + uFoamAmount * 0.45) * 0.28);
    /* breaking wash where the water shoals against the beach */
    float columnDepth = vWorldPosition.y - floorY;
    float shoreFoam = smoothstep(0.55, 0.06, columnDepth)
      * (0.35 + 0.65 * ridge(vnoise(hitP * 2.4 + vec2(uTime * 0.35, uTime * 0.22))));
    foamMask = max(foamMask, shoreFoam * 0.7);
    /* rain roughens the surface with fizzing micro-splash */
    foamMask = max(foamMask, uRain * 0.14 * smoothstep(0.55, 0.9, vnoise(q * 6.0 + vec2(uTime * 1.7, -uTime * 1.3))));
    foamMask = clamp(foamMask, 0.0, 1.0) * smoothstep(420.0, 55.0, dist);
    vec3 foamCol = uFoamColor * (0.55 + 0.45 * max(uLightDir.y, 0.12));
    color = mix(color, foamCol, foamMask * 0.92);
    /* splash crowns flash white where drops strike */
    color += foamCol * rainCrown * 0.85;

    /* ---- aerial fog toward horizon ---- */
    float fog = 1.0 - exp(-pow(dist * uFogDensity, 2.0));
    color = mix(color, uFogColor, clamp(fog, 0.0, 1.0));
    /* a submerged camera sees distant front faces through murk, not air */
    float fogW = 1.0 - exp(-pow(dist * 0.03, 2.0));
    color = mix(color, uUnderFog, uSubmerged * clamp(fogW, 0.0, 1.0));

    } else {
    /* ================= surface seen from below =================
       Refract the eye ray through the rippled surface into the air
       and evaluate a live sky (gradient + clouds + sun glare); rays
       past the critical angle mirror the murky\u6C34 interior instead. */
    /* the underside normal field must read as flowing molten glass:
       large, smooth, wind-stretched swirls (domain-warped low-octave
       noise), not fractal speckle. A whisper of the fine churn is
       blended back in close to the camera only. */
    vec2 sq = vec2(dot(q, wdir), dot(q, wperp));
    vec2 su = sq * vec2(0.27, 0.4) + vec2(uTime * 0.2, uTime * 0.03);
    su += (vec2(vnoise(su * 1.6 + 3.1), vnoise(su * 1.6 + 9.7)) - 0.5) * 1.1;
    float s0 = vnoise(su);
    vec2 sg = vec2(s0 - vnoise(su + vec2(0.14, 0.0)), s0 - vnoise(su + vec2(0.0, 0.14))) * 6.5;
    sg = wdir * sg.x + wperp * sg.y; // rotate the gradient back to world xz
    float swirlAmp = 1.15 / (1.0 + dist * 0.045);
    float underDetail = uDetailAmp * 0.3 / (1.0 + dist * 0.12);
    vec3 nUnder = normalize(normal
      + vec3(sg.x * swirlAmp + detailHF.x * underDetail, 0.0, sg.y * swirlAmp + detailHF.y * underDetail));
    vec3 airDir = refract(-viewDir, -nUnder, 1.33);
    float tir = step(dot(airDir, airDir), 1e-6); // 1 = total internal reflection
    airDir = normalize(airDir + vec3(0.0, 1e-4, 0.0));

    /* Snell's window: the sky seen through the surface stays close to
       its TRUE brightness and hue \u2014 bright, milky, with clouds legible */
    float skyLift = clamp(airDir.y, 0.0, 1.0);
    vec3 skyCol = mix(uFogColor * 2.2, uSkyZenith * 3.6, pow(skyLift, 0.6));
    vec2 cuv = airDir.xz / (airDir.y + 0.25);
    float cl = fbm(cuv * 0.7 + vec2(uTime * 0.012, uTime * 0.004));
    float cloudMask = smoothstep(mix(0.74, 0.32, uCloudCover2), mix(0.95, 0.62, uCloudCover2), cl);
    skyCol = mix(skyCol, vec3(0.95, 0.97, 1.0) * (0.4 + 0.9 * uDay), cloudMask * 0.85);
    // submerged: the refraction target holds the real world above the
    // surface \u2014 ship, island, sky \u2014 wobbled hard by the ripples so the
    // window churns the way real footage does
    vec2 wUv = clamp(gl_FragCoord.xy / uScreenSize + nUnder.xz * 0.38, vec2(0.004), vec2(0.996));
    skyCol = mix(skyCol, texture2D(uRefraction, wUv).rgb * 1.15, uSubmerged);
    // grazing paths cross more churned surface \u2014 the window edge burns milky
    skyCol *= 1.0 + 0.85 * pow(1.0 - skyLift, 2.0) * (0.3 + 0.7 * uDay);
    float sunGlare = pow(max(dot(airDir, uLightDir), 0.0), 60.0);
    skyCol += uLightColor * sunGlare * 8.0;

    /* total internal reflection: past the critical angle the underside is
       a true mirror of the underwater scene \u2014 deep water, seabed and
       kelp reflected \u2014 with caustic webs playing across it */
    float bounce = min(caustic(q * 0.35 + vec2(3.7, 1.3)), 1.6) * 0.5
      + min(caustic(q * 1.4 + vec2(9.1, 5.2)), 1.6) * 0.45;
    vec4 mCo = uMirrorMatrix * vec4(vWorldPosition, 1.0);
    vec2 mUv2 = clamp(mCo.xy / max(mCo.w, 1e-4) + nUnder.xz * (0.4 / (1.0 + dist * 0.05)),
      vec2(0.002), vec2(0.998));
    vec3 sceneRefl = texture2D(uMirror, mUv2).rgb;
    // procedural fallback for the rare back faces seen from above the water
    vec3 tirProc = uUnderFog * (1.85 + 1.25 * bounce)
      + vec3(0.055, 0.10, 0.115) * (0.25 + 0.75 * uDay);
    vec3 tirCol = mix(tirProc, sceneRefl, uSubmerged);
    tirCol += uUnderFog * bounce * (0.7 + 1.1 * max(uLightDir.y, 0.0));
    // silvery sparkle on steep ripple flanks \u2014 near the camera only
    float crest = smoothstep(0.2, 0.55, length(nUnder.xz)) * smoothstep(55.0, 12.0, dist);
    tirCol += vec3(0.5, 0.68, 0.66) * crest * (0.2 + 0.5 * uDay);

    float edge = smoothstep(0.0, 0.3, airDir.y) * (1.0 - tir);
    color = mix(tirCol, skyCol, edge);
    // silvery rim where rays graze the critical angle \u2014 softens with range
    float rim = pow(1.0 - abs(edge * 2.0 - 1.0), 3.0) * smoothstep(90.0, 18.0, dist);
    color += vec3(0.75, 0.86, 0.87) * rim * 0.42 * (0.3 + 0.7 * uDay);
    float fogU = 1.0 - exp(-pow(dist * 0.028, 2.0));
    color = mix(color, uUnderFog, clamp(fogU, 0.0, 1.0));
    }

    color += (hash12(gl_FragCoord.xy * 1.7) - 0.5) * 0.003;

    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Pv=`
  varying vec3 vWorldPos;
  varying vec3 vNormal;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorldPos = world.xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Iv=`
  uniform vec3 uLightDir;
  uniform vec3 uLightColor;
  uniform vec3 uAmbient;
  uniform vec3 uFogColor2;
  uniform float uFogDensity2;
  uniform float uTime;
  varying vec3 vWorldPos;
  varying vec3 vNormal;

  float hash12(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x),
      mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  float ridge(float n) { return 1.0 - abs(2.0 * n - 1.0); }
  float caustic(vec2 uv) {
    float c1 = ridge(vnoise(uv * 0.9 + vec2(uTime * 0.21, uTime * 0.17)));
    float c2 = ridge(vnoise(uv * 1.15 - vec2(uTime * 0.16, -uTime * 0.19)));
    return pow(c1 * c2, 2.4) * 2.6;
  }

  void main() {
    vec2 p = vWorldPos.xz;
    float h = vWorldPos.y;

    /* sand with grain \u2014 extra contrast so it survives depth absorption */
    float grain = vnoise(p * 6.3) * 0.55 + vnoise(p * 23.0) * 0.45;
    grain = grain * grain * 1.4;
    vec3 albedo = mix(vec3(0.47, 0.4, 0.27), vec3(0.8, 0.72, 0.52), grain);

    /* scattered flat paving stones in patches */
    vec2 cellUv = p / 1.9;
    vec2 cell = floor(cellUv);
    vec2 f = fract(cellUv) - 0.5;
    float cellHash = hash12(cell);
    vec2 offs = vec2(hash12(cell + 7.1), hash12(cell + 3.7)) - 0.5;
    float stoneR = 0.13 + cellHash * 0.13;
    float dStone = length(f - offs * 0.4);
    float stonePatch = smoothstep(0.6, 0.72, vnoise(p * 0.045 + 11.0))
      * smoothstep(0.2, -0.3, h); // submerged pavement only \u2014 the cay stays clean sand
    float stoneMask = smoothstep(stoneR, stoneR - 0.07, dStone) * stonePatch;
    vec3 stoneCol = mix(vec3(0.3, 0.28, 0.25), vec3(0.44, 0.39, 0.33), cellHash);
    albedo = mix(albedo, stoneCol, stoneMask * 0.92);

    /* wet band at the shoreline */
    albedo *= 1.0 - 0.26 * smoothstep(0.55, 0.05, abs(h));

    /* caustic light webs under water */
    float underwaterFactor = smoothstep(0.12, -0.35, h);
    float cf = caustic(p) * underwaterFactor * exp(h * 0.1) * max(uLightDir.y, 0.0);

    float diff = max(dot(vNormal, uLightDir), 0.0);
    vec3 color = albedo * (uAmbient + uLightColor * (diff * 0.85 + min(cf, 1.5) * 1.15));

    /* sunlight loses red with depth */
    color *= mix(vec3(1.0), exp(vec3(0.30, 0.11, 0.075) * h * 0.6), underwaterFactor);

    float fog = 1.0 - exp(-pow(length(cameraPosition - vWorldPos) * uFogDensity2, 2.0));
    color = mix(color, uFogColor2, clamp(fog, 0.0, 1.0));

    color += (hash12(gl_FragCoord.xy * 1.3) - 0.5) * 0.004;
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    #ifdef DEBUG_MAGENTA
    gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #endif
  }
`,Lv=`
  uniform float uTime;
  varying float vBlade;
  varying float vT;
  varying vec3 vWorldPos;
  void main() {
    vT = clamp(position.y / 3.2 + 0.5, 0.0, 1.0);
    vBlade = position.x / 0.8 + 0.5;
    vec4 world = modelMatrix * vec4(position, 1.0);
    float sway = sin(uTime * 0.7 + world.x * 0.45 + world.z * 0.5);
    world.x += sway * vT * vT * 0.65;
    world.z += cos(uTime * 0.55 + world.x * 0.35) * vT * vT * 0.4;
    vWorldPos = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Dv=`
  uniform vec3 uFogColor2;
  uniform float uFogDensity2;
  uniform vec3 uAmbient;
  uniform vec3 uLightColor;
  varying float vBlade;
  varying float vT;
  varying vec3 vWorldPos;
  float hash12(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x),
      mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  void main() {
    float seed = floor(vWorldPos.x * 0.3 + vWorldPos.z * 0.7);
    float halfW = (1.0 - vT * 0.72) * (0.5 + 0.5 * vnoise(vec2(vT * 7.0 + seed, seed * 1.3)));
    if (abs(vBlade - 0.5) * 2.0 > halfW) discard;
    vec3 color = mix(vec3(0.024, 0.05, 0.024), vec3(0.05, 0.1, 0.038), vT)
      * (uAmbient * 1.2 + uLightColor * 0.3);
    /* same depth absorption as the seabed */
    color *= exp(vec3(0.30, 0.11, 0.075) * min(vWorldPos.y, 0.0) * 0.6);
    float fog = 1.0 - exp(-pow(length(cameraPosition - vWorldPos) * uFogDensity2, 2.0));
    color = mix(color, uFogColor2, clamp(fog, 0.0, 1.0));
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function Nv(i,e){let t=(i-6)/12*Math.PI;return e.set(Math.cos(t)*.74,Math.sin(t)*.82,-.55).normalize()}var kt={white:new re(1,.97,.92),ember:new re(1.25,.42,.15),grey:new re(.6,.63,.66),moon:new re(.5,.62,.85),dayFog:new re(.44,.57,.7),duskFog:new re(.83,.51,.32),nightFog:new re(.05,.075,.115),stormFog:new re(.3,.34,.39),dayAmbient:new re(.78,.84,.9),duskAmbient:new re(.55,.4,.38),nightAmbient:new re(.05,.07,.12),deepDay:new re(.011,.052,.083),shallowDay:new re(.05,.33,.42),scatterDay:new re(.05,.42,.45),deepStorm:new re(.022,.042,.05),shallowStorm:new re(.1,.16,.18),underFogDay:new re(.05,.205,.26),shaftTint:new re(.45,.85,.9)},Uf={a:new re,b:new re};function Uv(i,e){let t=i.y,n=yt.smoothstep(t,-.1,.16),s=Math.pow(yt.clamp(1-Math.abs(t-.05)/.3,0,1),1.4),r=yt.clamp(e*.85,0,1),o=Uf.a.copy(kt.white).lerp(kt.ember,s).lerp(kt.grey,r*.75),a=yt.smoothstep(e,.5,.95),l=Uf.b.copy(kt.dayFog).lerp(kt.duskFog,s*.85).lerp(kt.stormFog,a*.85);return l.lerp(kt.nightFog,1-n),{day:n,warm:s,overcast:r,sunTint:o,fog:l}}function Bh(i,e=.7,t=0){return new ht({color:i,roughness:e,metalness:t})}function Fv(){let i=new ft,e=Bh(16014143,.42,.08),t=Bh(15789797,.55),n=Bh(1319979,.6),s=new ke(new Tt(.28,.38,.72,20),e);s.position.y=.37,s.castShadow=!0,i.add(s);let r=new ke(new Tt(.285,.385,.18,20),t);r.position.y=.35,i.add(r);let o=new ke(new Tt(.035,.045,.86,10),n);o.position.y=1.05,i.add(o);let a=new ke(new ds(.23,.38,16),e);a.position.y=1.57,i.add(a);let l=new ke(new Qr(.43,.045,8,28),n);return l.rotation.x=Math.PI/2,l.position.y=.52,i.add(l),i}function Ov(){let i={wind:{display:r=>`${r.toFixed(1)} m/s`},waveHeight:{display:r=>`${r.toFixed(2)} m`},foam:{display:r=>`${Math.round(r*100)}%`},time:{display:r=>`${Math.floor(r)}:${Math.round(r%1*60).toString().padStart(2,"0")}`},clouds:{display:r=>`${Math.round(r*100)}%`},rain:{display:r=>`${Math.round(r*100)}%`},exposure:{display:r=>r.toFixed(2)}},e=r=>{let o=document.getElementById(r),a=i[r],l=It[r];o.value=String(l),o.style.setProperty("--fill",`${(l-Number(o.min))/(Number(o.max)-Number(o.min))*100}%`),document.getElementById(`${r}-out`).textContent=a.display(l)};Object.keys(i).forEach(r=>{let o=document.getElementById(r);e(r),o.addEventListener("input",()=>{It[r]=Number(o.value),e(r),document.querySelectorAll(".preset").forEach(a=>a.classList.remove("active"))})}),document.querySelectorAll(".preset").forEach(r=>r.addEventListener("click",()=>{Object.assign(It,Ff[r.dataset.preset]),Object.keys(i).forEach(e),document.querySelectorAll(".preset").forEach(o=>o.classList.toggle("active",o===r))}));let t=document.getElementById("panel"),n=document.getElementById("collapse");n.addEventListener("click",()=>{let r=t.classList.toggle("collapsed");n.setAttribute("aria-expanded",String(!r)),n.setAttribute("aria-label",r?"Open controls":"Close controls")});let s=document.getElementById("drift");s.addEventListener("click",()=>{It.autopilot=!It.autopilot,s.classList.toggle("on",It.autopilot),s.setAttribute("aria-pressed",String(It.autopilot)),s.querySelector("span").textContent=It.autopilot?"Camera drift on":"Camera drift off"})}function Bv(){Ov();let i=document.getElementById("stage"),e=document.getElementById("error"),t;try{t=new kl({antialias:!0,powerPreference:"high-performance"})}catch{e.classList.add("show");return}let n=innerWidth<700,s=new Ur,r=new Vt(48,innerWidth/innerHeight,.1,2e4);r.position.set(6.8,3.1,13);let o=0,a=()=>Math.min(devicePixelRatio,n?1:1.3)*Math.pow(.75,o);t.setSize(innerWidth,innerHeight),t.setPixelRatio(a()),t.outputColorSpace=Ht,t.toneMapping=uo,t.toneMappingExposure=It.exposure,t.shadowMap.enabled=!n,t.shadowMap.type=qa,i.appendChild(t.domElement);let l=matchMedia("(prefers-reduced-motion: reduce)"),c=new Wl(r,t.domElement);c.enableDamping=!0,c.dampingFactor=.045,c.target.set(0,.7,-7),c.minDistance=4,c.maxDistance=46,c.minPolarAngle=.55,c.maxPolarAngle=Math.PI*.985,c.autoRotate=It.autopilot&&!l.matches,c.autoRotateSpeed=.2;let h=new L(0,1,0),u=new L(0,1,0),d=new L(0,1,0),f={uSunDir:{value:h},uMoonDir:{value:u},uTurbidity:{value:2.5},uRayleigh:{value:2.2},uMieCoefficient:{value:.005},uMieDirectionalG:{value:.8},uTime:{value:0},uCloudCover:{value:It.clouds},uDay:{value:1},uSkyGamma:{value:1.05},uSkyGain:{value:.22},uSkyLift:{value:.65},uSkySat:{value:1.35},uHazeBand:{value:.07},uHazeMix:{value:.75},uCloudScale:{value:1.2},uCloudSharp:{value:.2},uUnderFog:{value:new re(.02,.1,.13)},uUnderwater:{value:0},uLightning:{value:0},uRainSky:{value:0},uSunTint:{value:new re(1,1,1)},uCloudAmbient:{value:new re(.5,.55,.62)},uFogColor:{value:new re(.7,.79,.86)}},g=new Ot({vertexShader:Fh,fragmentShader:Oh,uniforms:f,side:Yt,depthWrite:!1,defines:{FBM_OCT:4,CLOUD_STEPS:10,CLOUD_LSTEPS:1}}),y=new ke(new vi(9e3,48,28),g);s.add(y);let m=g,p=new Ot({vertexShader:Fh,fragmentShader:Oh,uniforms:f,side:Yt,depthWrite:!1,defines:{FBM_OCT:3,MIRROR_PASS:1,CLOUD_STEPS:5,CLOUD_LSTEPS:1}}),M=new Ot({vertexShader:Fh,fragmentShader:Oh,uniforms:f,side:Yt,depthWrite:!1,defines:{FBM_OCT:4,CLOUD_FLAT:1,CLOUD_STEPS:2,CLOUD_LSTEPS:1}}),S=n?384:512,v=new on(S,S,{type:Pn,minFilter:Rt,magFilter:Rt}),E=new Vt,w=new We,A=new on(640,360,{type:Pn,minFilter:Rt,magFilter:Rt}),_={uWaveData:{value:To.map(()=>new at)},uWavePhase:{value:To.map(()=>new at)},uTime:{value:0},uMirror:{value:v.texture},uMirrorMatrix:{value:w},uLightDir:{value:d},uLightColor:{value:new re(1,1,1)},uDeepColor:{value:new re},uShallowColor:{value:new re},uScatterColor:{value:new re},uFogColor:{value:f.uFogColor.value},uFoamColor:{value:new re(.92,.97,.98)},uFoamAmount:{value:It.foam},uFogDensity:{value:.0035},uDetailAmp:{value:1},uUnderFog:{value:new re(.02,.1,.13)},uSkyZenith:{value:new re(.1,.28,.55)},uRefraction:{value:A.texture},uScreenSize:{value:new he(innerWidth,innerHeight)},uCloudCover2:{value:It.clouds},uSubmerged:{value:0},uRain:{value:0},uDay:{value:1}},T={NW:Xl},P=n?256:448,R=new ke(new cn(420,420,P,P),new Ot({vertexShader:Df,fragmentShader:Nf,uniforms:_,side:ut,defines:{...T}}));R.rotation.x=-Math.PI/2,s.add(R);let D=new ke(new ps(204,5200,96,12),new Ot({vertexShader:Df,fragmentShader:Nf,uniforms:_,side:ut,defines:{...T,FAR_PLANE:1}}));D.rotation.x=-Math.PI/2,D.position.y=-.04,s.add(D);let z={uLightDir:{value:d},uLightColor:{value:new re(1,1,1)},uAmbient:{value:new re(.35,.4,.45)},uFogColor2:{value:new re(.05,.1,.13)},uFogDensity2:{value:.0035},uTime:{value:0}},q=new Ot({vertexShader:Pv,fragmentShader:Iv,uniforms:z}),U=new cn(150,150,150,150);{let I=U.attributes.position;for(let k=0;k<I.count;k++){let te=I.getX(k)+en.x,Q=-I.getY(k)+en.z;I.setZ(k,si(te,Q))}I.needsUpdate=!0,U.computeVertexNormals()}let H=new ke(U,q);H.rotation.x=-Math.PI/2,H.position.set(en.x,0,en.z),H.receiveShadow=!0,s.add(H);let V=new cn(2600,2600,48,48);{let I=V.attributes.position;for(let k=0;k<I.count;k++){let te=I.getX(k),Q=-I.getY(k),oe=Math.hypot(te-en.x,Q-en.z)<72;I.setZ(k,oe?-zh-.35:si(te,Q)-.15)}I.needsUpdate=!0,V.computeVertexNormals()}let Y=new ke(V,q);Y.rotation.x=-Math.PI/2,s.add(Y);let ne=[[-4.5,-2,0],[3.5,1.5,1],[-1,4.5,2],[6.5,-4,3],[-8,3,4]];for(let[I,k,te]of ne){let Q=Af(te),oe=en.x+I,le=en.z+k;Q.position.set(oe,si(oe,le)-.12,le);let Le=.85+te%3*.14;Q.scale.setScalar(Le),s.add(Q)}let ie=[[11,6,0,1.6],[13,2,1,2.2],[9.5,9,2,1.2],[-12.5,-7,3,1.8],[-10,-10.5,4,1.1],[15.5,-3,5,1.4],[2,12.5,6,1.9]];for(let[I,k,te,Q]of ie){let oe=Rf(te),le=en.x+I,Le=en.z+k,Xe=Math.min(si(le,Le),si(le+Q*.6,Le),si(le-Q*.6,Le),si(le,Le+Q*.6),si(le,Le-Q*.6));oe.position.set(le,Xe+.02*Q,Le),oe.scale.set(Q*1.35,Q*1.6,Q*1.35),oe.rotation.y=te*1.9,s.add(oe)}let fe={uTime:{value:0},uFogColor2:z.uFogColor2,uFogDensity2:z.uFogDensity2,uAmbient:z.uAmbient,uLightColor:z.uLightColor},be=new Ot({vertexShader:Lv,fragmentShader:Dv,uniforms:fe,side:ut}),Ze=new cn(.8,3.2,1,14),mt=[[4,-16,1.1],[-6,-20,.9],[12,-26,1.4],[-14,-34,1],[20,-44,1.2],[-44,-34,1.3],[-52,-62,1],[-8,-50,.8],[30,-66,1.1],[0,-38,1.3]];for(let[I,k,te]of mt){let Q=new ft;for(let oe=0;oe<3;oe++){let le=new ke(Ze,be);le.rotation.y=oe*1.05+I,le.position.set((oe-1)*.3,1.5,((oe+1)%3-1)*.3),le.scale.setScalar(.8+oe*.18),Q.add(le)}Q.position.set(I,si(I,k)-.15,k),Q.scale.setScalar(te),s.add(Q)}let Be=Pf();Be.position.set(9,0,-30),Be.rotation.y=-.5,s.add(Be);let K=Fv();K.position.set(-10,0,-18),K.scale.setScalar(.9),s.add(K);let ue=1500,se=34,Ue=26,He=new sr;He.setAttribute("position",new nt([-.5,0,0,.5,0,0,-.5,1,0,.5,1,0],3)),He.setIndex([0,1,2,2,1,3]);{let I=new Float32Array(ue*3),k=new Float32Array(ue);for(let te=0;te<ue;te++)I[te*3]=(Math.random()-.5)*se,I[te*3+1]=Math.random()*Ue,I[te*3+2]=(Math.random()-.5)*se,k[te]=Math.random();He.setAttribute("aOffset",new Fn(I,3)),He.setAttribute("aSeed",new Fn(k,1)),He.instanceCount=ue}let Ie={uTime:{value:0},uRainAmt:{value:0},uCenter:{value:new he},uWindVel:{value:new he(-1.2,-.4)}},Ct=new Ot({uniforms:Ie,transparent:!0,depthWrite:!1,vertexShader:`
      attribute vec3 aOffset;
      attribute float aSeed;
      uniform float uTime;
      uniform vec2 uCenter;
      uniform vec2 uWindVel;
      varying vec2 vQuad;
      void main() {
        float speed = 13.0 + aSeed * 6.0;
        vec3 vel = vec3(uWindVel.x, -speed, uWindVel.y);
        vec3 axis = normalize(vel);
        float yFall = mod(aOffset.y + aSeed * 43.0 - uTime * speed, ${Ue}.0);
        float dropped = ${Ue}.0 - yFall; // distance fallen since the top
        vec3 base = vec3(
          aOffset.x + dropped * (vel.x / speed) + uCenter.x,
          yFall,
          aOffset.z + dropped * (vel.z / speed) + uCenter.y);
        float len = 0.45 + aSeed * 0.45;
        float wid = 0.013 + aSeed * 0.015;
        vec3 toCam = normalize(cameraPosition - base);
        vec3 side = normalize(cross(axis, toCam));
        vec3 world = base + axis * (position.y * len) + side * (position.x * wid);
        vQuad = vec2(position.x * 2.0, position.y);
        gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
      }
    `,fragmentShader:`
      uniform float uRainAmt;
      varying vec2 vQuad;
      void main() {
        float across = 1.0 - abs(vQuad.x);
        float ends = smoothstep(0.0, 0.2, vQuad.y) * smoothstep(1.0, 0.7, vQuad.y);
        float a = across * across * ends * uRainAmt * 0.55;
        gl_FragColor = vec4(0.7, 0.77, 0.86, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `}),Fe=new ke(He,Ct);Fe.frustumCulled=!1,Fe.visible=!1,s.add(Fe);let ot=56,et=22;function ze(I){let k=new _t,te=new Float32Array(I*2*3),Q=[];for(let oe=0;oe<I-1;oe++){let le=oe*2;Q.push(le,le+1,le+2,le+2,le+1,le+3)}return k.setAttribute("position",new Pt(te,3)),k.setIndex(Q),k}let wt=ze(ot),At=ze(ot),Dt=ze(et),de=ze(et),Ee=wt.attributes.position.array,Te=At.attributes.position.array,N=Dt.attributes.position.array,qe=de.attributes.position.array,Oe=new ln({color:16777215,transparent:!0,opacity:0,blending:_s,depthWrite:!1,side:ut});Oe.toneMapped=!1;let C=new ln({color:8366335,transparent:!0,opacity:0,blending:_s,depthWrite:!1,side:ut}),x=new ft,B=new ke(wt,Oe),W=new ke(At,C),Z=new ke(Dt,Oe),ce=new ke(de,C);B.frustumCulled=W.frustumCulled=!1,Z.frustumCulled=ce.frustumCulled=!1,x.add(W,B,ce,Z),x.visible=!1,s.add(x);let me=18,J=new sr;J.setAttribute("position",new nt([-.5,0,0,.5,0,0,-.5,1,0,.5,1,0],3)),J.setIndex([0,1,2,2,1,3]);{let I=new Float32Array(me*4);for(let k=0;k<me;k++)I[k*4]=(Math.random()-.5)*44,I[k*4+1]=(Math.random()-.5)*44,I[k*4+2]=1.1+Math.random()*2.4,I[k*4+3]=Math.random();J.setAttribute("aShaft",new Fn(I,4)),J.instanceCount=me}let j={uTime:{value:0},uShaftAmt:{value:0},uShaftTilt:{value:new he},uShaftColor:{value:new re(.4,.75,.8)}},_e=new Ot({uniforms:j,transparent:!0,depthWrite:!1,blending:_s,side:ut,vertexShader:`
      attribute vec4 aShaft; // x, z, width, seed
      uniform vec2 uShaftTilt;
      varying vec2 vQuad;
      varying float vSeed;
      varying float vDist;
      void main() {
        const float BOX = 44.0;
        const float TOP = -0.22;
        const float BOT = -7.4;
        vec2 rel = mod(aShaft.xy - cameraPosition.xz + BOX * 0.5, BOX) - BOX * 0.5;
        vec2 base = cameraPosition.xz + rel;
        float y = mix(BOT, TOP, position.y);
        vec2 center = base + uShaftTilt * (TOP - y); // lean with the refracted sun
        vec3 toCam = vec3(cameraPosition.x - center.x, 0.0, cameraPosition.z - center.y);
        vDist = length(toCam);
        vec3 side = normalize(cross(vec3(0.0, 1.0, 0.0), toCam / max(vDist, 1e-3)));
        vec3 world = vec3(center.x, y, center.y) + side * (position.x * aShaft.z);
        vQuad = vec2(position.x * 2.0, position.y);
        vSeed = aShaft.w;
        gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
      }
    `,fragmentShader:`
      uniform float uShaftAmt;
      uniform float uTime;
      uniform vec3 uShaftColor;
      varying vec2 vQuad;
      varying float vSeed;
      varying float vDist;
      float hash12(vec2 p) {
        vec3 p3 = fract(vec3(p.xyx) * 0.1031);
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.x + p3.y) * p3.z);
      }
      float vnoise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x),
          mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x), f.y);
      }
      void main() {
        float across = 1.0 - vQuad.x * vQuad.x;
        across *= across;
        // caustic bands sweep down the shaft as the surface refocuses light
        float bands = vnoise(vec2(vSeed * 61.0 + vQuad.x * 2.3 + uTime * 0.4, vQuad.y * 5.0 - uTime * 0.7));
        bands = 0.35 + 0.65 * smoothstep(0.3, 0.8, bands);
        // fade out BEFORE the quad's top edge \u2014 a hard cutoff there reads
        // as a sharp diagonal seam against the bright surface
        float vert = pow(clamp(vQuad.y, 0.0, 1.0), 1.6) * (1.0 - smoothstep(0.72, 0.98, vQuad.y));
        float distFade = smoothstep(2.0, 5.0, vDist) * smoothstep(26.0, 10.0, vDist);
        float a = across * vert * bands * distFade * uShaftAmt * 0.55;
        if (a < 0.004) discard;
        gl_FragColor = vec4(uShaftColor, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `}),we=new ke(J,_e);we.frustumCulled=!1,we.visible=!1,s.add(we);let xe=new L,ge=1;function De(){r.getWorldDirection(xe);let I=Math.atan2(xe.x,xe.z)+(Math.random()-.5)*.6,k=700+Math.random()*600,te=r.position.x+Math.sin(I)*k,Q=r.position.z+Math.cos(I)*k,oe=620+Math.random()*140;ge=Math.min(1,950/k);let le=r.position.x-te,Le=r.position.z-Q,Xe=Math.hypot(le,Le),Se=-Le/Xe,je=le/Xe,xt=k/1250,lt=te+(Math.random()-.5)*90,$e=Q+(Math.random()-.5)*90,Bt=0,ye=0,zt=16+Math.floor(Math.random()*14),Ve=0,bt=0,tn=0;for(let ct=0;ct<ot;ct++){let _n=ct/(ot-1),rt=oe*(1-_n);ct%5===0&&(Bt=(Math.random()-.5)*24,ye=(Math.random()-.5)*24),lt+=Bt+(Math.random()-.5)*5+(te-lt)*.09,$e+=ye+(Math.random()-.5)*5+(Q-$e)*.09,ct===zt&&(Ve=lt,bt=$e,tn=rt);let Xt=(2.6-_n*1.2)*xt,nn=Xt*4,vt=ct*6;Ee[vt]=lt-Se*Xt,Ee[vt+1]=rt,Ee[vt+2]=$e-je*Xt,Ee[vt+3]=lt+Se*Xt,Ee[vt+4]=rt,Ee[vt+5]=$e+je*Xt,Te[vt]=lt-Se*nn,Te[vt+1]=rt,Te[vt+2]=$e-je*nn,Te[vt+3]=lt+Se*nn,Te[vt+4]=rt,Te[vt+5]=$e+je*nn}let gn=Ve,Ln=bt,dt=Math.random()<.5?1:-1;for(let ct=0;ct<et;ct++){let _n=ct/(et-1),rt=tn*(1-_n*.8);gn+=dt*(3+Math.random()*5)*Se*-1+(Math.random()-.5)*6,Ln+=dt*(3+Math.random()*5)*je*-1+(Math.random()-.5)*6;let Xt=1.2*(1-_n*.85)*xt,nn=Xt*6,vt=ct*6;N[vt]=gn-Se*Xt,N[vt+1]=rt,N[vt+2]=Ln-je*Xt,N[vt+3]=gn+Se*Xt,N[vt+4]=rt,N[vt+5]=Ln+je*Xt,qe[vt]=gn-Se*nn,qe[vt+1]=rt,qe[vt+2]=Ln-je*nn,qe[vt+3]=gn+Se*nn,qe[vt+4]=rt,qe[vt+5]=Ln+je*nn}wt.attributes.position.needsUpdate=!0,At.attributes.position.needsUpdate=!0,Dt.attributes.position.needsUpdate=!0,de.attributes.position.needsUpdate=!0}let Ne=new io(12577279,793120,1.2);s.add(Ne);let Pe=new gs(16771261,3.2);Pe.castShadow=!n,Pe.shadow.mapSize.set(1024,1024),Pe.shadow.camera.near=.5,Pe.shadow.camera.far=400,Pe.shadow.camera.left=-85,Pe.shadow.camera.right=85,Pe.shadow.camera.top=85,Pe.shadow.camera.bottom=-85,s.add(Pe,Pe.target),s.fog=new Nr(10466496,.0035),addEventListener("resize",()=>{r.aspect=innerWidth/innerHeight,r.updateProjectionMatrix(),t.setSize(innerWidth,innerHeight),t.setPixelRatio(a())}),t.domElement.addEventListener("webglcontextlost",I=>{I.preventDefault(),e.classList.add("show")}),t.domElement.addEventListener("webglcontextrestored",()=>e.classList.remove("show"));let F=new L(0,0,0),ae=new xn,$=new L(0,1,0),ve=new L(0,-1,0),pe=new L,ee=new L,Re=new L,Ae=new We,Ke=new at,st=new at;function pn(){if(pe.copy(r.position),pe.y<=.005)return;pe.y=Math.min(-.02,-pe.y),Ae.extractRotation(r.matrixWorld),Re.set(0,0,-1).applyMatrix4(Ae).add(r.position),ee.copy(Re),ee.y*=-1,E.position.copy(pe),E.up.set(0,1,0).applyMatrix4(Ae),E.up.reflect($),E.lookAt(ee),E.far=r.far,E.updateMatrixWorld(),E.projectionMatrix.copy(r.projectionMatrix),w.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),w.multiply(E.projectionMatrix),w.multiply(E.matrixWorldInverse),ae.setFromNormalAndCoplanarPoint($,F),ae.applyMatrix4(E.matrixWorldInverse),Ke.set(ae.normal.x,ae.normal.y,ae.normal.z,ae.constant);let I=E.projectionMatrix;st.x=(Math.sign(Ke.x)+I.elements[8])/I.elements[0],st.y=(Math.sign(Ke.y)+I.elements[9])/I.elements[5],st.z=-1,st.w=(1+I.elements[10])/I.elements[14],Ke.multiplyScalar(2/Ke.dot(st)),I.elements[2]=Ke.x,I.elements[6]=Ke.y,I.elements[10]=Ke.z+1-.003,I.elements[14]=Ke.w,R.visible=!1,D.visible=!1;let k=Fe.visible;Fe.visible=!1,y.material=p;let te=t.toneMapping,Q=t.shadowMap.autoUpdate;t.toneMapping=hn,t.shadowMap.autoUpdate=!1,t.setRenderTarget(v),t.clear(),t.render(s,E),t.setRenderTarget(null),t.toneMapping=te,t.shadowMap.autoUpdate=Q,y.material=m,Fe.visible=k,R.visible=!0,D.visible=!0}function Tn(){if(pe.copy(r.position),pe.y>=-.02)return;pe.y=-pe.y,Ae.extractRotation(r.matrixWorld),Re.set(0,0,-1).applyMatrix4(Ae).add(r.position),ee.copy(Re),ee.y*=-1,E.position.copy(pe),E.up.set(0,1,0).applyMatrix4(Ae),E.up.reflect($),E.lookAt(ee),E.far=r.far,E.updateMatrixWorld(),E.projectionMatrix.copy(r.projectionMatrix),w.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),w.multiply(E.projectionMatrix),w.multiply(E.matrixWorldInverse),ae.setFromNormalAndCoplanarPoint(ve,F),ae.applyMatrix4(E.matrixWorldInverse),Ke.set(ae.normal.x,ae.normal.y,ae.normal.z,ae.constant);let I=E.projectionMatrix;st.x=(Math.sign(Ke.x)+I.elements[8])/I.elements[0],st.y=(Math.sign(Ke.y)+I.elements[9])/I.elements[5],st.z=-1,st.w=(1+I.elements[10])/I.elements[14],Ke.multiplyScalar(2/Ke.dot(st)),I.elements[2]=Ke.x,I.elements[6]=Ke.y,I.elements[10]=Ke.z+1-.003,I.elements[14]=Ke.w,R.visible=!1,D.visible=!1;let k=Fe.visible,te=x.visible,Q=we.visible;we.visible=!1,Fe.visible=!1,x.visible=!1,y.material=p;let oe=t.toneMapping,le=t.shadowMap.autoUpdate;t.toneMapping=hn,t.shadowMap.autoUpdate=!1,t.setRenderTarget(v),t.clear(),t.render(s,E),t.setRenderTarget(null),t.toneMapping=oe,t.shadowMap.autoUpdate=le,y.material=m,Fe.visible=k,x.visible=te,we.visible=Q,R.visible=!0,D.visible=!0}function Po(){R.visible=!1,D.visible=!1;let I=we.visible;we.visible=!1;let k=t.toneMapping,te=t.shadowMap.autoUpdate,Q=f.uUnderwater.value;f.uUnderwater.value=0,t.toneMapping=hn,t.shadowMap.autoUpdate=!1,t.setRenderTarget(A),t.clear(),t.render(s,r),t.setRenderTarget(null),t.toneMapping=k,t.shadowMap.autoUpdate=te,f.uUnderwater.value=Q,we.visible=I,R.visible=!0,D.visible=!0}let Io=new re;function mr(){R.visible=!1,D.visible=!1,y.visible=!1;let I=Fe.visible,k=x.visible;Fe.visible=!1,x.visible=!1;let te=t.toneMapping,Q=t.shadowMap.autoUpdate;t.getClearColor(Io);let oe=t.getClearAlpha();t.toneMapping=hn,t.shadowMap.autoUpdate=!1,t.setClearColor(mn,1),t.setRenderTarget(A),t.clear(),t.render(s,r),t.setRenderTarget(null),t.setClearColor(Io,oe),t.toneMapping=te,t.shadowMap.autoUpdate=Q,y.visible=!0,Fe.visible=I,x.visible=k,R.visible=!0,D.visible=!0}let Es={freezeSky:!1},St={wind:It.wind,waveHeight:It.waveHeight,foam:It.foam,clouds:It.clouds,time:It.time,rain:It.rain},Lo=Object.keys(St),ai=0,mn=new re,Ki=6,li=0,Kn=0,Ji=0,gr=_.uDeepColor.value,Ts=_.uShallowColor.value,Do=_.uScatterColor.value,ws=new re,No=new re,As=performance.now(),ji=0,Ai=As,b=!1,O=60;document.addEventListener("visibilitychange",()=>{ji=0,Ai=performance.now()});function X(){document.hidden?setTimeout(X,40):requestAnimationFrame(X),G()}function G(){let I=(performance.now()-As)/1e3;for(let Ve of Lo)St[Ve]=yt.lerp(St[Ve],It[Ve],.04);Nv(St.time,h),u.set(-h.x,Math.max(.28,-h.y*.8+.22),-h.z).normalize();let k=Uv(h,St.clouds);k.fog.multiplyScalar(1-St.rain*.42);let te=k.day>.35;d.copy(te?h:u);let Q=Math.min(1,Math.abs(k.day-.35)/.12);f.uTime.value=I,f.uCloudCover.value=St.clouds,f.uDay.value=k.day,Es.freezeSky||(f.uTurbidity.value=Math.min(2.2+k.overcast*7.6+k.warm*1.2,12),f.uRayleigh.value=yt.lerp(3.2,2.4,k.warm),f.uMieCoefficient.value=.003+k.overcast*.016+k.warm*.021,f.uSkySat.value=1.38-k.warm*.33-k.overcast*.25),f.uSunTint.value.copy(k.sunTint).multiplyScalar(.55*k.day+.01),f.uCloudAmbient.value.copy(kt.dayAmbient).lerp(kt.duskAmbient,k.warm*.85).lerp(kt.nightAmbient,1-k.day).multiplyScalar(yt.lerp(1,.32,k.overcast)),f.uFogColor.value.copy(k.fog),wv(St.waveHeight,St.wind,I);for(let Ve=0;Ve<Xl;Ve++){let bt=To[Ve];_.uWaveData.value[Ve].set(bt.kx,bt.ky,bt.amp,bt.q),_.uWavePhase.value[Ve].set(bt.phase,bt.gphase,bt.omega,bt.envDepth)}_.uTime.value=I%3600,_.uFoamAmount.value=St.foam,_.uDetailAmp.value=yt.clamp(.35+St.wind*.22,.4,1.5),_.uLightColor.value.copy(te?k.sunTint:kt.moon).multiplyScalar((te?1:.5)*Q),gr.copy(kt.deepDay).lerp(kt.deepStorm,k.overcast).multiplyScalar(.12+.88*k.day),Ts.copy(kt.shallowDay).lerp(kt.shallowStorm,k.overcast).multiplyScalar(.1+.9*k.day),Do.copy(kt.scatterDay).multiplyScalar(k.day*(1-k.overcast*.75)*(1-k.warm*.45)),Pe.position.copy(d).multiplyScalar(160),Pe.target.position.set(-10,0,-40),Pe.color.copy(te?k.sunTint:kt.moon),Pe.intensity=(te?Math.max(.1,h.y)*3.4*(1-k.overcast*.72):.34)*Q,ws.copy(kt.dayAmbient).lerp(kt.duskAmbient,k.warm*.7).lerp(kt.nightAmbient,1-k.day),No.copy(gr).multiplyScalar(2.2),Ne.color.copy(ws),Ne.groundColor.copy(No),Ne.intensity=yt.lerp(.25,1.35,k.day)*(1-k.overcast*.4),t.toneMappingExposure=yt.lerp(t.toneMappingExposure,It.exposure,.05),c.autoRotate=It.autopilot&&!l.matches;let oe=Lf(K.position.x,K.position.z,I,.4);K.position.y=oe.h-.05,K.rotation.z=yt.lerp(K.rotation.z,-oe.dx*1.6,.1),K.rotation.x=yt.lerp(K.rotation.x,oe.dz*1.6,.1);let le=Lf(Be.position.x,Be.position.z,I,3.5);Be.position.y=le.h*.45-.3,Be.rotation.z=yt.lerp(Be.rotation.z,-le.dx*.12,.03),Be.rotation.x=yt.lerp(Be.rotation.x,le.dz*.09,.03);let Le=Be.userData.paneMats;Le&&(Le.bright.emissiveIntensity=1.2+Math.sin(I*8.7)*.09+Math.sin(I*23.3+1.7)*.06,Le.dim.emissiveIntensity=.5+Math.sin(I*6.1+3.1)*.07+Math.sin(I*17.9)*.04);let Xe=wo(r.position.x,r.position.z,I),Se=r.position.y<Xe-.04;ai=yt.lerp(ai,Se?1:0,.25);let je=Math.max(0,Xe-r.position.y);mn.copy(kt.underFogDay).multiplyScalar((.1+.9*k.day)*(1-k.overcast*.45)*(.55+.45*Math.exp(-je*.07))),f.uUnderwater.value=ai,f.uUnderFog.value.copy(mn),_.uUnderFog.value.copy(mn),_.uSkyZenith.value.setRGB(.1,.28,.55).multiplyScalar(k.day*(1-k.overcast*.55)+.015),s.fog.color.copy(Se?mn:k.fog),s.fog.density=Se?.02:.0035+St.rain*.0022,z.uLightColor.value.copy(_.uLightColor.value),z.uAmbient.value.copy(ws).multiplyScalar(.4*(.25+.75*k.day)+.03),z.uFogColor2.value.copy(Se?mn:k.fog),z.uFogDensity2.value=Se?.02:.0035,z.uTime.value=_.uTime.value,fe.uTime.value=_.uTime.value,_.uCloudCover2.value=St.clouds,_.uSubmerged.value=ai,t.getDrawingBufferSize(_.uScreenSize.value);let xt=Math.min(Math.max(I-Ji,.001),.1);Ji=I,_.uRain.value=St.rain,_.uDay.value=k.day,f.uRainSky.value=St.rain,Fe.visible=St.rain>.03&&ai<.5,Ie.uRainAmt.value=St.rain,Ie.uTime.value=I%3600,Ie.uCenter.value.set(r.position.x,r.position.z),Ie.uWindVel.value.set(-St.wind*.55,-St.wind*.18),Pe.intensity*=1-St.rain*.45,Ne.intensity*=1-St.rain*.35;let lt=ai*k.day*(1-k.overcast*.9)*yt.clamp(h.y*3.2,0,1)*(1-St.rain*.6);we.visible=lt>.015,j.uTime.value=I%3600,j.uShaftAmt.value=lt;{let Ve=.7518796992481203,bt=Math.max(h.y,.05),tn=Math.max(1-Ve*Ve*(1-bt*bt),.001);j.uShaftTilt.value.set(-h.x*Ve/Math.sqrt(tn),-h.z*Ve/Math.sqrt(tn))}j.uShaftColor.value.copy(k.sunTint).lerp(kt.shaftTint,.45),Ki-=xt,St.rain>.5&&Ki<=0&&(De(),Kn=.34,li=1,Ki=1.2+Math.random()*2.8),li=Math.max(0,li-xt*3.6),Kn=Math.max(0,Kn-xt);let $e=1-Kn/.34,Bt=Kn>0?$e<.3?1:$e<.45?.25:$e<.75?.95:Math.max(0,(1-$e)/.25):0,ye=li*(.55+.45*Math.sin(I*120+li*40));f.uLightning.value=ye,x.visible=Kn>0,Oe.opacity=Bt*ge,C.opacity=Bt*.3*ge,ye>.01&&(Ne.intensity+=ye*2.4,Pe.intensity+=ye*1.6,_.uLightColor.value.addScalar(ye*.55),z.uAmbient.value.addScalar(ye*.3)),c.update(),Se?(Po(),Tn()):(pn(),mr()),t.render(s,r),b||(b=!0,document.getElementById("loading").classList.add("done")),ji++;let zt=performance.now();zt-Ai>2500?(ji=0,Ai=zt):zt-Ai>900&&(O=Math.round(ji*1e3/(zt-Ai)),window.__tidelineFps=O,document.getElementById("status").textContent=`WebGL \xB7 ${O} fps`,document.getElementById("quality").textContent=o===0?"High":o===1?"Balanced":o===2?"Adaptive":"Eco",!document.hidden&&O<45&&o<3&&zt-As>4e3&&(o++,t.setPixelRatio(Math.max(.85,a())),o===2&&(v.setSize(384,384),A.setSize(512,288)),o===3&&(m=M,y.material=m)),ji=0,Ai=zt)}X(),window.__tideline={state:It,sky:f,water:_,flags:Es,scene:s,islandPatch:H,floorHeight:si,set(I){Object.assign(It,I)},settle(){for(let I of Object.keys(St))St[I]=It[I]},strike(){De(),Kn=.34,li=1},tick:G,snapRaw(I=.62){return t.domElement.toDataURL("image/jpeg",I)},look(I,k,te,Q,oe,le){r.position.set(I,k,te),Q!==void 0&&c.target.set(Q,oe,le),c.update()},resize(I,k){r.aspect=I/k,r.updateProjectionMatrix(),t.setSize(I,k,!1)},snap(I=.62){let k=(performance.now()-As)/1e3;return r.position.y<wo(r.position.x,r.position.z,k)-.04?(Po(),Tn()):(pn(),mr()),t.render(s,r),t.domElement.toDataURL("image/jpeg",I)},bench(I=40){let k=t.getContext();k.finish();let te=performance.now();for(let Q=0;Q<I;Q++)pn(),t.render(s,r);return k.finish(),(performance.now()-te)/I}}}Bv();var On=null;function zf(){if(On=window.__tideline,!On)return requestAnimationFrame(zf);On.set({autopilot:!1});let i=document.getElementById("drift");if(i){i.classList.remove("on"),i.setAttribute("aria-pressed","false");let T=i.querySelector("span");T&&(T.textContent="Camera drift off")}On.look(2.5,3,17,0,.8,-7);let e=[[2.5,3,17],[-8,3.5,14],[1,2.2,13],[4,5,15],[0,.35,10],[-3,-.6,7]],t=0,n=!1,s=!1,r=!1,o=0,a=14,l=document.getElementById("sTime"),c=document.getElementById("sSea"),h=document.getElementById("fps"),u=document.getElementById("btnStorm"),d=document.getElementById("btnHurricane"),f=document.getElementById("btnNight"),g=document.getElementById("btnView");function y(T){let P;s?P={wind:8,waveHeight:n?1.9:1.5,foam:n?.45:.35,clouds:.95,rain:n?.9:.7,exposure:n?1:1.03}:n?P={wind:6.5,waveHeight:1.05,foam:.3,clouds:.85,rain:.8,exposure:1.05}:r?P={wind:2.2,waveHeight:.7,foam:.4,clouds:.3,rain:0,exposure:.95}:P={wind:2.6,waveHeight:.72,foam:.42,clouds:.24,rain:0,exposure:1.08},On.set(P),T&&On.strike&&On.strike()}u.onclick=()=>{n=!n,u.classList.toggle("on",n),y(!0)},d&&(d.onclick=()=>{s=!s,d.classList.toggle("on",s),y(!0)}),f.onclick=()=>{r=!r,f.classList.toggle("on",r),a=r?22.5:14,On.set({time:a}),y(!1)},g.onclick=()=>{t=(t+1)%e.length;let T=e[t];var P=T[1]<0?-1.2:.8;On.look(T[0],T[1],T[2],0,P,-7)};var m=new URLSearchParams(location.search).get("view");if(m&&e[+m]){var p=e[+m];t=+m;var M=p[1]<0?-1.2:.8;On.look(p[0],p[1],p[2],0,M,-7)}addEventListener("keydown",T=>{T.code==="Space"&&!T.repeat&&(T.preventDefault(),n=!0,u.classList.add("on"),y(!0)),T.key==="1"?o=4:T.key==="2"?o=12:(T.key==="0"||T.key==="3")&&(o=0)}),addEventListener("keyup",T=>{T.code==="Space"&&(T.preventDefault(),n=!1,u.classList.remove("on"),y(!1))});let S=performance.now(),v=0,E=0,w=0,A=performance.now();function _(T){requestAnimationFrame(_);let P=(T-S)/1e3;if(S=T,o>0&&!n&&!s&&(a=(a+P*o*.12)%24,On.set({time:a})),l&&(l.textContent=a<6||a>20?"\u5B50\u591C":a<11?"\u9ECE\u660E":a<16?"\u6B63\u5348":"\u9EC4\u660F"),c&&(c.textContent=s?n?"\u98D3\u98CE+\u98CE\u66B4":"\u98D3\u98CE":n?"\u98CE\u66B4":On.state.waveHeight>1?"\u6D8C\u6D6A":"\u5FAE\u6F9C"),h){var R=window.__tidelineFps;R?h.textContent=R:P>0&&P<.5&&(E++,w+=P,w>=1&&T-A>2e3&&(h.textContent=Math.max(1,Math.min(120,Math.round(E/w))),E=0,w=0))}}requestAnimationFrame(_),console.log("[ctrl] storm + hurricane ready")}window.addEventListener("load",()=>requestAnimationFrame(zf));window.addEventListener("load",()=>{function i(){let t=window.__tideline;if(!t||!t.scene)return requestAnimationFrame(i);e(t)}function e(t){let n=(v,E)=>v+Math.random()*(E-v),s=t.scene,r=new ft;r.name="extra-props",s.add(r);let o=new Ut(1,1,1),a=(v,E=.8,w=.02)=>new ht({color:v,roughness:E,metalness:w}),l=a(7031342),c=a(15261900,.9),h=a(4863270),u=a(11550772),d=a(13214282,.35,.8);function f(v,E,w,A,_,T,P,R,D){let z=new ke(o,D||a(E));return z.position.set(w,A,_),z.scale.set(T,P,R),z.castShadow=!0,v.add(z),z}let g=[],y=[[-13,-9,1],[10,-16,1.3],[-20,-26,1.6],[16,-30,1.1],[-6,-38,1.4],[24,-44,1.7]];for(let[v,E,w]of y){let A=new ft;A.position.set(v,0,E),A.scale.setScalar(w),f(A,0,0,-.1,0,2.6,.5,.9,h),f(A,0,0,.15,0,2.2,.12,.8,l);let _=new ke(new Tt(.05,.06,2.2,8),l);_.position.y=1.2,A.add(_);let T=new xi;T.moveTo(-.7,-.55),T.lineTo(.7,-.55),T.lineTo(0,.85),T.closePath();let P=new zi(T),R=new ke(P,new ht({color:Math.random()>.6?11550772:15261900,roughness:.9,side:ut}));R.position.y=1.15,A.add(R);let D=new xi;D.moveTo(.05,-.5),D.lineTo(.75,-.5),D.lineTo(.08,.5),D.closePath();let z=new ke(new zi(D),R.material);z.position.set(.25,.95,.05),A.add(z),A.userData={baseY:0,phase:Math.random()*6.28,drift:n(.05,.15)},r.add(A),g.push(A)}let m=[];for(let v=0;v<7;v++){let E=new ft;E.position.set(n(-24,24),0,n(-40,-6)),f(E,0,0,.25,0,.28,.5,.28,v%2?u:a(14735556)),f(E,0,0,.52,0,.12,.14,.12,d),E.userData={phase:Math.random()*6.28},r.add(E),m.push(E)}let p=[];for(let v=0;v<10;v++){let E=new ft;f(E,0,0,0,0,.22,.09,.34,a(15921384));let w=f(E,0,-.3,.02,0,.32,.03,.12,a(15263455)),A=f(E,0,.3,.02,0,.32,.03,.12,a(15263455));E.userData={a:Math.random()*6.28,r:n(6,16),y:n(2,6),sp:n(.2,.5),wl:w,wr:A},r.add(E),p.push(E)}let M=new ft;M.position.set(-18,-3,-34),f(M,0,0,0,0,3.2,1.1,1.4,a(4151922)),f(M,0,-1.7,.1,0,1.2,.8,.9,a(3493990)),f(M,0,1.8,0,0,.3,1.2,1.2,a(3493990)),r.add(M);let S=performance.now();(function v(){requestAnimationFrame(v);let E=(performance.now()-S)/1e3;for(let A of g){let _=A.userData;A.position.y=Math.sin(E*1.3+_.phase)*.18,A.rotation.z=Math.sin(E+_.phase)*.05,A.position.x+=_.drift*.004}for(let A of m)A.position.y=Math.sin(E*1.7+A.userData.phase)*.22,A.rotation.z=Math.sin(E*1.1+A.userData.phase)*.12;for(let A of p){let _=A.userData,T=_.a+E*_.sp;A.position.set(Math.cos(T)*_.r,_.y+Math.sin(T*2)*.25,Math.sin(T)*_.r*.6-16),A.rotation.y=-T+Math.PI/2;let P=Math.sin(E*6+_.a)*.4;_.wl.rotation.z=P,_.wr.rotation.z=-P}let w=E%20/20;if(M.visible=w>.5&&w<.72,M.visible){let A=(w-.5)/.22;M.position.y=-3+Math.sin(A*Math.PI)*4.2,M.rotation.z=(A-.5)*1.1}})(),console.log("[props] "+g.length+" boats, "+m.length+" buoys, "+p.length+" birds, 3 fish shoals, 1 shark injected")}requestAnimationFrame(i)});var Lt=null,kh=!1,wi=!1,ri=null,Ro=null,Ao=null,kf=null;function Hf(i,e=3){let t=i.sampleRate*e,n=i.createBuffer(1,t,i.sampleRate),s=n.getChannelData(0),r=0;for(let o=0;o<t;o++){let a=Math.random()*2-1;r=(r+.02*a)/1.02,s[o]=r*3.2}return n}function Hh(){if(kh)return;kh=!0;try{Lt=new(window.AudioContext||window.webkitAudioContext)}catch{return}ri=Lt.createGain(),ri.gain.value=wi?0:.5,ri.connect(Lt.destination);let i=Lt.createBufferSource();i.buffer=Hf(Lt,4),i.loop=!0;let e=Lt.createBiquadFilter();e.type="lowpass",e.frequency.value=520,e.Q.value=.6,Ao=Lt.createGain(),Ao.gain.value=.18,i.connect(e).connect(Ao).connect(ri),i.start();let t=Lt.createBufferSource();t.buffer=Hf(Lt,3),t.loop=!0;let n=Lt.createBiquadFilter();n.type="bandpass",n.frequency.value=900,n.Q.value=.8,Ro=Lt.createGain(),Ro.gain.value=0,t.connect(n).connect(Ro).connect(ri),t.start();let s=Lt.createOscillator();s.frequency.value=.12;let r=Lt.createGain();r.gain.value=.06,s.connect(r).connect(Ao.gain),s.start(),Vf(),console.log("[audio] ambient started")}function zv(){if(!Lt||wi)return;let i=Lt.currentTime,e=Lt.createOscillator(),t=Lt.createGain();e.type="sawtooth",e.frequency.setValueAtTime(92,i),e.frequency.linearRampToValueAtTime(84,i+1.6);let n=Lt.createBiquadFilter();n.type="lowpass",n.frequency.value=240,t.gain.setValueAtTime(0,i),t.gain.linearRampToValueAtTime(.16,i+.25),t.gain.setValueAtTime(.16,i+1.2),t.gain.linearRampToValueAtTime(0,i+2),e.connect(n).connect(t).connect(ri),e.start(i),e.stop(i+2.1)}function Vf(){clearTimeout(kf),kf=setTimeout(()=>{zv(),Vf()},14e3+Math.random()*12e3)}function Gf(i){if(!Lt||!Ro)return;let e=Lt.currentTime;Ro.gain.setTargetAtTime(.02+i*.32,e,.8),Ao.gain.setTargetAtTime(.18+i*.22,e,.8)}window.__seaAudio={start:Hh,storm:Gf,toggle(){Hh();var i=document.getElementById("btnAudio");return wi=i?i.getAttribute("data-muted")!=="1":!wi,ri&&Lt&&ri.gain.setTargetAtTime(wi?0:.5,Lt.currentTime,.2),wi},get muted(){return wi},setMute(i){wi=i,ri&&Lt&&ri.gain.setTargetAtTime(wi?0:.5,Lt.currentTime,.2)},get ready(){return kh}};["pointerdown","keydown"].forEach(i=>addEventListener(i,()=>Hh(),{once:!0}));setInterval(()=>{if(!Lt)return;let i=document.getElementById("sSea")?.textContent||"",e=i.includes("\u98D3\u98CE")?1:i.includes("\u98CE\u66B4")?.6:i.includes("\u6D8C\u6D6A")?.25:0;Gf(e)},700);function Wf(i){let e=new Map,t=new Map,n=i.clone();return Xf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Xf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Xf(i.children[n],e.children[n],t)}var Yl=class extends ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Zh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new Zl(t,it.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Zl(t,it.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new au(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Ei.extractUrlBase(e);o=Ei.resolveURL(c,this.path)}else o=Ei.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ir(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Jf){try{o[it.KHR_BINARY_GLTF]=new lu(e)}catch(u){s&&s(u);return}r=JSON.parse(o[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new mu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case it.KHR_MATERIALS_UNLIT:o[u]=new qh;break;case it.KHR_DRACO_MESH_COMPRESSION:o[u]=new cu(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:o[u]=new hu;break;case it.KHR_MESH_QUANTIZATION:o[u]=new uu;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function kv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Wt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Xh=class{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new re(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],fn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new gs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ao(h),c.distance=u;break;case"spot":c=new oo(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),oi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},qh=class{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return ln}extendParams(e,t,n){let s=[];e.color=new re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],fn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ht))}return Promise.all(s)}},Yh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Zh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(r,r)}return Promise.all(s)}},Kh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Jh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},jh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new re(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],fn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ht)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},$h=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Qh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new re().setRGB(r[0],r[1],r[2],fn),Promise.all(s)}},eu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},tu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new re().setRGB(r[0],r[1],r[2],fn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ht)),Promise.all(s)}},nu=class{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},iu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},su=class{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},ru=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},ou=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Zl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},au=class{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Bn.TRIANGLES&&c.mode!==Bn.TRIANGLE_STRIP&&c.mode!==Bn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let y=new We,m=new L,p=new $t,M=new L(1,1,1),S=new kr(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&M.fromBufferAttribute(l.SCALE,v),S.setMatrixAt(v,y.compose(m,p,M));for(let v in l)if(v==="_COLOR_0"){let E=l[v];S.instanceColor=new Fn(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);Nt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Jf="glTF",Co=12,qf={JSON:1313821514,BIN:5130562},lu=class{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Co),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Co,r=new DataView(e,Co),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===qf.JSON){let c=new Uint8Array(e,Co+o,a);this.content=n.decode(c)}else if(l===qf.BIN){let c=Co+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},cu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=fu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=fu[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=pr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let y=f.attributes[g],m=l[g];m!==void 0&&(y.normalized=m)}u(f)},a,c,fn,d)})})}},hu=class{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},uu=class{constructor(){this.name=it.KHR_MESH_QUANTIZATION}},Kl=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,y=g-c,m=-2*f+3*d,p=f-d,M=1-m,S=p-d+u;for(let v=0;v!==a;v++){let E=o[y+v+a],w=o[y+v+l]*h,A=o[g+v+a],_=o[g+v]*h;r[v]=M*E+S*w+m*A+p*_}return r}},Hv=new $t,du=class extends Kl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Hv.fromArray(r).normalize().toArray(r),r}},Bn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},pr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yf={9728:Gt,9729:Rt,9984:Ka,9985:ar,9986:vs,9987:Yn},Zf={33071:Nn,33648:Ws,10497:Fi},Vh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Vv={CUBICSPLINE:void 0,LINEAR:as,STEP:os},Gh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Gv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ht({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wn})),i.DefaultMaterial}function Ss(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function oi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Wv(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Xv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qv(i){let e,t=i.extensions&&i.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wh(t.attributes):e=i.indices+":"+Wh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Wh(i.targets[n]);return e}function Wh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function pu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Yv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Zv=new We,mu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new kv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new no(this.options.manager):this.textureLoader=new lo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ir(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ss(r,a,s),oi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Ei.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Vh[s.type],a=pr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Pt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Vh[s.type],c=pr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,m;if(f&&f!==u){let p=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,S=t.cache.get(M);S||(y=new c(a,p*f,s.count*f/h),S=new Js(y,f/h),t.cache.add(M,S)),m=new js(S,l,d%f/h,g)}else a===null?y=new c(s.count*l):y=new c(a,d,s.count*l),m=new Pt(y,l,g);if(s.sparse!==void 0){let p=Vh.SCALAR,M=pr[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,E=new M(o[1],S,s.sparse.count*p),w=new c(o[2],v,s.sparse.count*l);a!==null&&(m=new Pt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,_=E.length;A<_;A++){let T=E[A];if(m.setX(T,w[A*l]),l>=2&&m.setY(T,w[A*l+1]),l>=3&&m.setZ(T,w[A*l+2]),l>=4&&m.setW(T,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Yf[d.magFilter]||Rt,h.minFilter=Yf[d.minFilter]||Yn,h.wrapS=Zf[d.wrapS]||Fi,h.wrapT=Zf[d.wrapT]||Fi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Gt&&h.minFilter!==Rt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(y){let m=new Qt(y);m.needsUpdate=!0,d(m)}),t.load(Ei.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),oi(u,o),u.userData.mimeType=o.mimeType||Yv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Bi,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Oi,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ht}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[it.KHR_MATERIALS_UNLIT]){let u=s[it.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new re(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],fn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ht)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ut);let h=r.alphaMode||Gh.OPAQUE;if(h===Gh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Gh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ln&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new he(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==ln&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ln){let u=r.emissiveFactor;a.emissive=new re().setRGB(u[0],u[1],u[2],fn)}return r.emissiveTexture!==void 0&&o!==ln&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ht)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),oi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ss(s,u,r),u})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Kf(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=qv(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[it.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Kf(new _t,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?Gv(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let y=h[f],m=o[f],p,M=c[f];if(m.mode===Bn.TRIANGLES||m.mode===Bn.TRIANGLE_STRIP||m.mode===Bn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Br(y,M):new ke(y,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Bn.TRIANGLE_STRIP?p.geometry=Uh(p.geometry,yo):m.mode===Bn.TRIANGLE_FAN&&(p.geometry=Uh(p.geometry,hr));else if(m.mode===Bn.LINES)p=new hs(y,M);else if(m.mode===Bn.LINE_STRIP)p=new cs(y,M);else if(m.mode===Bn.LINE_LOOP)p=new Hr(y,M);else if(m.mode===Bn.POINTS)p=new us(y,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Xv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),oi(p,r),m.extensions&&Ss(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ss(s,u[0],r),u[0];let d=new ft;r.extensions&&Ss(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(yt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Hi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),oi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new We;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new zr(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],y=f.target,m=y.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],y=u[3],m=u[4],p=[];for(let S=0,v=d.length;S<v;S++){let E=d[S],w=f[S],A=g[S],_=y[S],T=m[S];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let P=n._createAnimationTracks(E,w,A,_,T);if(P)for(let R=0;R<P.length;R++)p.push(P[R])}let M=new to(r,void 0,p);return oi(M,s),M})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Zv)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new L().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new $s:c.length>1?h=new ft:c.length===1?h=c[0]:h=new Nt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),oi(h,r),r.extensions&&Ss(n,h,r),r.matrix!==void 0){let u=new We;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ft;n.name&&(r.name=s.createUniqueName(n.name)),oi(r,n),n.extensions&&Ss(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Wf(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof yn||d instanceof Qt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Zi[r.path]===Zi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(Zi[r.path]){case Zi.weights:h=Mi;break;case Zi.rotation:h=Si;break;case Zi.translation:case Zi.scale:h=ki;break;default:switch(n.itemSize){case 1:h=Mi;break;case 2:case 3:default:h=ki;break}break}let u=s.interpolation!==void 0?Vv[s.interpolation]:as,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){let y=new h(l[f]+"."+Zi[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),o.push(y)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=pu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Si?du:Kl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Kv(i,e,t){let n=e.attributes,s=new an;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){let h=pu(pr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,l=new L;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let y=pu(pr[d.componentType]);l.multiplyScalar(y)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new vn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Kf(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=fu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return tt.workingColorSpace!==fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),oi(i,e),Kv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Wv(i,e.targets,t):i})}var bs=(i,e)=>i+Math.random()*(e-i);window.addEventListener("load",()=>{function i(){let t=window.__tideline;if(!t||!t.scene)return requestAnimationFrame(i);e(t.scene)}function e(t){let n=new Yl,s=new ft;s.name="voxel-fauna",t.add(s);let r=g=>new Promise(y=>n.load(g,m=>y(m.scene),void 0,m=>{console.error("[fauna] load fail",g,m&&m.message),y(null)})),o=320,a=new _t;a.setAttribute("position",new Pt(new Float32Array(o*3),3));let l=new Bi({color:14676727,size:.95,transparent:!0,opacity:0,depthWrite:!1}),c=new us(a,l);s.add(c);let h=[];for(let g=0;g<o;g++)h.push(new L);let u=0,d=[];for(let g=0;g<3;g++){let y=new ke(new ps(.6,.85,32),new ln({color:13627125,transparent:!0,opacity:0,side:ut,depthWrite:!1}));y.rotation.x=-Math.PI/2,y.visible=!1,s.add(y),d.push({mesh:y,life:0})}function f(g,y,m){u=1,l.opacity=1;let p=a.attributes.position.array;for(let M=0;M<o;M++){p[M*3]=g+(Math.random()-.5)*2.8,p[M*3+1]=.25,p[M*3+2]=y+(Math.random()-.5)*2.8;let S=Math.random()*Math.PI*2,v=1.2+Math.random()*2.4*m;h[M].set(Math.cos(S)*v*.9,3.2+Math.random()*5.5*m,Math.sin(S)*v*.9)}a.attributes.position.needsUpdate=!0;for(let M of d)if(M.life<=0){M.life=1,M.mesh.position.set(g,.12,y),M.mesh.visible=!0,M.mesh.scale.setScalar(.6);break}}Promise.all([r("assets/voxel_shark_ultra.glb"),r("assets/voxel_fish_fine.glb")]).then(([g,y])=>{try{let m=function(A,_){let T=new an().setFromObject(A),P=T.getSize(new L),R=Math.max(P.x,P.y,P.z)||1;A.scale.setScalar(_/R),A.updateMatrixWorld(!0);let D=new an().setFromObject(A),z=D.getCenter(new L);A.position.sub(z);let q=new ft;return q.add(A),q};if(!g&&!y){console.warn("[fauna] models missing");return}let p=11,M=null;g&&(M=m(g,p),M.userData={a:-1.4,r:14.5,sp:.16,nextBreach:5,prevH:void 0,breachP:-1},s.add(M));let S={orange:[],blue:[],yellow:[]};y&&y.traverse(A=>{if(!A.isMesh)return;let _=A.name.toLowerCase();for(let T of Object.keys(S))_.includes(T)&&S[T].push(A)});let v=[];for(let[A,_]of Object.entries(S)){if(!_.length)continue;let T=new ft;_.forEach(P=>T.add(P.clone(!0)));for(let P=0;P<8;P++){let R=m(T.clone(!0),bs(.75,1.15));R.userData={a:bs(0,6.28),r:bs(4,15),y:bs(-2.6,-.8),sp:bs(.25,.5),phase:bs(0,6.28)},s.add(R),v.push(R)}}let E=performance.now(),w=E;(function A(){requestAnimationFrame(A);let _=performance.now(),T=(_-E)/1e3,P=Math.min((_-w)/1e3,.05);if(w=_,u>0){u-=P*.55;let R=a.attributes.position.array;for(let D=0;D<o;D++)h[D].y-=9.8*P,R[D*3]+=h[D].x*P,R[D*3+1]+=h[D].y*P,R[D*3+2]+=h[D].z*P,R[D*3+1]<.05&&(R[D*3+1]=.05,h[D].y*=-.15,h[D].x*=.7,h[D].z*=.7);a.attributes.position.needsUpdate=!0,l.opacity=Math.max(0,u*1)}for(let R of d)R.life>0&&(R.life-=P*.5,R.life<=0?(R.mesh.visible=!1,R.mesh.material.opacity=0):(R.mesh.scale.setScalar(.8+(1-R.life)*13),R.mesh.material.opacity=R.life*.65));if(M){let R=M.userData;R.a+=P*R.sp;let D=R.a,z=-1.9;R.breachP<0&&(R.nextBreach-=P,R.nextBreach<=0&&(R.breachP=0,R.nextBreach=bs(10,17)));let q=z,U=0;if(R.breachP>=0){R.breachP+=P/2.9;let Y=R.breachP;if(Y>=1)R.breachP=-1;else{let ne=Math.min(Y/.42,1),ie=Math.max((Y-.42)/.58,0),fe=1-Math.pow(1-ne,2.4),be=Math.pow(ie,1.9),Ze=Math.max(0,fe-be);q=z+Ze*3.2,U=-Math.cos(Math.PI*Math.min(Y,1))*.34}}else{let Y=Math.sin(T*1.1)*.22;q=z+Y*.5+1.55,U=Math.sin(T*1.1)*.05}let H=Math.cos(D)*R.r,V=Math.sin(D)*R.r*.72-6;M.position.set(H,q,V),M.rotation.order="YXZ",M.rotation.y=-D+Math.PI/2,M.rotation.x=U,R.prevH!==void 0&&(R.prevH>.5&&q<=.5?f(H,V,1.35):R.prevH<=.5&&q>.5&&f(H,V,.9)),R.prevH=q}for(let R of v){let D=R.userData,z=D.a+T*D.sp;R.position.set(Math.cos(z)*D.r,D.y+Math.sin(z*2+D.phase)*.15,Math.sin(z)*D.r*.6-10),R.rotation.y=-z+Math.PI/2}})(),console.log("[fauna] ready: shark "+p+"u + "+v.length+" fish")}catch(m){console.error("[fauna] INIT ERROR",m&&(m.message||m))}})}requestAnimationFrame(i)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
