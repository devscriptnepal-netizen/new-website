import React, { useRef, useEffect } from "react";

export function HeroCanvas() {
  const cvs=useRef(null),mouse=useRef({x:.5,y:.5}),tgt=useRef({x:.5,y:.5}),pts=useRef([]),raf=useRef(null);
  useEffect(()=>{
    const canvas=cvs.current,ctx=canvas.getContext("2d");let W=0,H=0;
    const resize=()=>{W=canvas.width=canvas.offsetWidth;H=canvas.height=canvas.offsetHeight;pts.current=Array.from({length:Math.min(Math.floor((W*H)/7000),130)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28,z:Math.random()*1.8+.2,r:Math.random()*1.5+.4,isRed:Math.random()>.84}));};
    const lr=(a,b,t)=>a+(b-a)*t;
    const draw=()=>{
      ctx.clearRect(0,0,W,H);tgt.current.x=lr(tgt.current.x,mouse.current.x,.045);tgt.current.y=lr(tgt.current.y,mouse.current.y,.045);
      const mx=(tgt.current.x-.5)*2,my=(tgt.current.y-.5)*2;
      const vpx=W/2+mx*75,vpy=H*.62+my*35;ctx.lineWidth=.6;
      for(let c=-10;c<=10;c++){ctx.beginPath();ctx.strokeStyle="rgba(224,31,31,0.05)";ctx.moveTo(vpx+c*100,vpy);ctx.lineTo(vpx+c*2000,H*1.6);ctx.stroke();}
      for(let r=0;r<7;r++){const t2=r/7,hw=100+t2*3500;ctx.beginPath();ctx.strokeStyle=`rgba(224,31,31,${.05-t2*.006})`;ctx.moveTo(vpx-hw,vpy+t2*(H*1.05));ctx.lineTo(vpx+hw,vpy+t2*(H*1.05));ctx.stroke();}
      const p=pts.current;ctx.lineWidth=.5;
      for(let i=0;i<p.length;i++){const px=p[i].x+mx*p[i].z*36,py=p[i].y+my*p[i].z*36;for(let j=i+1;j<p.length;j++){const qx=p[j].x+mx*p[j].z*36,qy=p[j].y+my*p[j].z*36,d=Math.hypot(px-qx,py-qy);if(d<115){ctx.beginPath();ctx.moveTo(px,py);ctx.lineTo(qx,qy);ctx.strokeStyle=`rgba(224,31,31,${(1-d/115)*.13})`;ctx.stroke();}}}
      p.forEach(pt=>{pt.x+=pt.vx;pt.y+=pt.vy;if(pt.x<0||pt.x>W)pt.vx*=-1;if(pt.y<0||pt.y>H)pt.vy*=-1;const px=pt.x+mx*pt.z*36,py=pt.y+my*pt.z*36;ctx.beginPath();ctx.arc(px,py,pt.r*pt.z,0,Math.PI*2);ctx.fillStyle=pt.isRed?`rgba(224,31,31,${(.35+pt.z*.2).toFixed(2)})`:`rgba(255,255,255,${(.04+pt.z*.1).toFixed(2)})`;ctx.fill();});
      raf.current=requestAnimationFrame(draw);
    };
    const onMove=e=>{const r=canvas.getBoundingClientRect();mouse.current={x:(e.clientX-r.left)/W,y:(e.clientY-r.top)/H};};
    const onG=e=>{const r=canvas.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)mouse.current={x:e.clientX/window.innerWidth,y:e.clientY/window.innerHeight};};
    resize();window.addEventListener("resize",resize);canvas.addEventListener("mousemove",onMove);window.addEventListener("mousemove",onG);draw();
    return()=>{window.removeEventListener("resize",resize);canvas.removeEventListener("mousemove",onMove);window.removeEventListener("mousemove",onG);cancelAnimationFrame(raf.current);};
  },[]);
  return <canvas ref={cvs} style={{position:"absolute",inset:0,width:"100%",height:"100%",zIndex:1}}/>;
}
