import React from "react";
import { useGridCanvas } from "../../hooks/useGridCanvas";

export const GridCanvas = ({ draw, style = {} }) => {
  const ref = useGridCanvas(draw);
  return <canvas ref={ref} style={{ position:"absolute",inset:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none", ...style }} />;
};

export const drawSquare = (ctx, W, H, t) => {
  ctx.clearRect(0,0,W,H);
  const GS = 52;
  for (let x=0;x<=W;x+=GS) { ctx.strokeStyle=`rgba(255,255,255,${0.08+0.03*Math.sin(t*.4+x*.01)})`; ctx.lineWidth=.7; ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke(); }
  for (let y=0;y<=H;y+=GS) { ctx.strokeStyle=`rgba(255,255,255,${0.08+0.03*Math.sin(t*.3+y*.01)})`; ctx.lineWidth=.7; ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke(); }
  for (let x=0;x<=W;x+=GS) for (let y=0;y<=H;y+=GS) {
    const g=.5+.5*Math.sin(t*.6+x*.04+y*.03), red=((x/GS+y/GS)%17===0);
    ctx.beginPath();ctx.arc(x,y,red?2.5:1.2,0,Math.PI*2);ctx.fillStyle=red?`rgba(224,31,31,${.5+.4*g})`:`rgba(200,200,200,${.15+.22*g})`;ctx.fill();
  }
  const sx=(Math.sin(t*.18)+1)*.5*W,sg=ctx.createLinearGradient(sx-160,0,sx+160,0);
  sg.addColorStop(0,"rgba(255,255,255,0)");sg.addColorStop(.5,"rgba(255,255,255,.05)");sg.addColorStop(1,"rgba(255,255,255,0)");ctx.fillStyle=sg;ctx.fillRect(0,0,W,H);
  const vg=ctx.createRadialGradient(W/2,H/2,H*.2,W/2,H/2,H*.9);vg.addColorStop(0,"transparent");vg.addColorStop(1,"rgba(0,0,0,.75)");ctx.fillStyle=vg;ctx.fillRect(0,0,W,H);
};

export const drawDiamond = (ctx, W, H, t) => {
  ctx.clearRect(0,0,W,H);
  ctx.save();ctx.translate(W/2,H/2);ctx.rotate(Math.PI/4);ctx.translate(-W/2,-H/2);
  const GS=70;
  for (let x=-GS;x<=W+GS;x+=GS) { ctx.strokeStyle=`rgba(255,255,255,${0.07+0.04*Math.abs(Math.sin(t*.3+x*.008))})`; ctx.lineWidth=.8; ctx.beginPath();ctx.moveTo(x,-H);ctx.lineTo(x,H*2);ctx.stroke(); }
  for (let y=-GS;y<=H+GS;y+=GS) { ctx.strokeStyle=`rgba(255,255,255,${0.07+0.04*Math.abs(Math.sin(t*.25+y*.01))})`; ctx.lineWidth=.8; ctx.beginPath();ctx.moveTo(-W,y);ctx.lineTo(W*2,y);ctx.stroke(); }
  for (let x=-GS;x<=W+GS;x+=GS) for (let y=-GS;y<=H+GS;y+=GS) {
    const g=Math.abs(Math.sin(t*.5+x*.05+y*.04));ctx.beginPath();ctx.arc(x,y,1.4,0,Math.PI*2);ctx.fillStyle=`rgba(200,200,200,${.15+.32*g})`;ctx.fill();
  }
  ctx.restore();
  const sx=(t*22)%(W+400)-200,sg=ctx.createLinearGradient(sx,0,sx+120,H);sg.addColorStop(0,"rgba(255,255,255,0)");sg.addColorStop(.5,"rgba(255,255,255,.04)");sg.addColorStop(1,"rgba(255,255,255,0)");ctx.fillStyle=sg;ctx.fillRect(0,0,W,H);
  const vg=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,H);vg.addColorStop(0,"transparent");vg.addColorStop(1,"rgba(0,0,0,.8)");ctx.fillStyle=vg;ctx.fillRect(0,0,W,H);
};

export const drawHex = (ctx, W, H, t) => {
  ctx.clearRect(0,0,W,H);
  const R=38,RW=R*Math.sqrt(3),RH=R*1.5;
  const hex=(cx,cy,r)=>{ctx.beginPath();for(let i=0;i<6;i++){const a=(Math.PI/3)*i-Math.PI/6,x=cx+r*Math.cos(a),y=cy+r*Math.sin(a);i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);}ctx.closePath();};
  for(let row=-1;row<H/RH+2;row++) for(let col=-1;col<W/RW+2;col++) {
    const cx=col*RW+(row%2===0?0:RW/2),cy=row*RH;
    const d=Math.sqrt((cx-W/2)**2+(cy-H/2)**2)/(W*.6),p=.5+.5*Math.sin(t*.5-d*3);
    ctx.strokeStyle=`rgba(255,200,80,${.05+.08*p})`;ctx.lineWidth=.65;hex(cx,cy,R-1);ctx.stroke();
    ctx.beginPath();ctx.arc(cx,cy,1.5,0,Math.PI*2);ctx.fillStyle=`rgba(255,200,80,${.16+.35*p})`;ctx.fill();
  }
  const sy=(t*18)%(H+300)-150,sg=ctx.createLinearGradient(0,sy,W,sy+80);sg.addColorStop(0,"rgba(255,200,80,0)");sg.addColorStop(.5,"rgba(255,200,80,.05)");sg.addColorStop(1,"rgba(255,200,80,0)");ctx.fillStyle=sg;ctx.fillRect(0,0,W,H);
  const vg=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,H*.85);vg.addColorStop(0,"transparent");vg.addColorStop(1,"rgba(0,0,0,.84)");ctx.fillStyle=vg;ctx.fillRect(0,0,W,H);
};

export const drawDots = (ctx, W, H, t) => {
  ctx.clearRect(0,0,W,H);
  const GS=36;
  for (let xi=0;xi*GS<=W+GS;xi++) for (let yi=0;yi*GS<=H+GS;yi++) {
    const bx=xi*GS,by=yi*GS,wave=4*Math.sin(t*.6+xi*.3+yi*.4);
    const x=bx+wave,y=by+wave*.5,dist=Math.sqrt((x-W*.35)**2+(y-H*.5)**2)/(H*.55);
    const g=Math.max(0,1-dist),red=(xi+yi)%19===0,r=red?2.8:(1+g*.6),a=red?(.55+.85*g):(.12+.32*g);
    ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fillStyle=red?`rgba(224,31,31,${a})`:`rgba(200,200,200,${a})`;ctx.fill();
  }
  const vg=ctx.createRadialGradient(W*.35,H*.5,0,W*.35,H*.5,H*.7);vg.addColorStop(0,"rgba(224,31,31,.08)");vg.addColorStop(.4,"transparent");vg.addColorStop(1,"rgba(0,0,0,.75)");ctx.fillStyle=vg;ctx.fillRect(0,0,W,H);
};

export const drawCircuit = (ctx, W, H, t) => {
  ctx.clearRect(0,0,W,H);
  const GS=48;
  for(let x=0;x<=W;x+=GS){ctx.strokeStyle="rgba(255,255,255,.06)";ctx.lineWidth=.6;ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
  for(let y=0;y<=H;y+=GS){ctx.strokeStyle="rgba(255,255,255,.06)";ctx.lineWidth=.6;ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
  for(let x=0;x<=W;x+=GS) for(let y=0;y<=H;y+=GS) {
    if(Math.sin(x+y*3)>.4){const g=.5+.5*Math.sin(t*.6+x*.04+y*.05);ctx.beginPath();ctx.arc(x,y,3.5,0,Math.PI*2);ctx.strokeStyle=`rgba(80,180,255,${.25+.45*g})`;ctx.lineWidth=1;ctx.stroke();ctx.beginPath();ctx.arc(x,y,1.4,0,Math.PI*2);ctx.fillStyle=`rgba(80,180,255,${.45+.85*g})`;ctx.fill();}
  }
  const vg=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,H);vg.addColorStop(0,"transparent");vg.addColorStop(1,"rgba(0,0,0,.82)");ctx.fillStyle=vg;ctx.fillRect(0,0,W,H);
};

export const drawRadial = (ctx, W, H, t) => {
  ctx.clearRect(0,0,W,H);
  const cx=W*.5,cy=H*.5;
  for(let i=0;i<36;i++){const a=(i/36)*Math.PI*2+t*.04,g=.5+.5*Math.sin(t*.5+i*.5);ctx.strokeStyle=`rgba(255,255,255,${.05+.04*g})`;ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(cx+Math.cos(a)*40,cy+Math.sin(a)*40);ctx.lineTo(cx+Math.cos(a)*Math.max(W,H),cy+Math.sin(a)*Math.max(W,H));ctx.stroke();}
  for(let r=60;r<Math.max(W,H)*.85;r+=55){const g=.5+.5*Math.sin(t*.3-r*.012);ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.strokeStyle=`rgba(255,255,255,${.07+.08*g})`;ctx.lineWidth=.8;ctx.stroke();
    for(let i=0;i<12;i++){const a=(i/12)*Math.PI*2+t*.08,dx=cx+Math.cos(a)*r,dy=cy+Math.sin(a)*r,dg=.5+.5*Math.sin(t*.8+i+r*.05);ctx.beginPath();ctx.arc(dx,dy,1.2,0,Math.PI*2);ctx.fillStyle=`rgba(224,31,31,${.25+.55*dg})`;ctx.fill();}
  }
  const vg=ctx.createRadialGradient(cx,cy,0,cx,cy,Math.max(W,H)*.7);vg.addColorStop(0,"rgba(0,0,0,0)");vg.addColorStop(.5,"rgba(0,0,0,.3)");vg.addColorStop(1,"rgba(0,0,0,.87)");ctx.fillStyle=vg;ctx.fillRect(0,0,W,H);
};

export const drawIso = (ctx, W, H, t) => {
  ctx.clearRect(0,0,W,H);
  const oy=56*Math.sin(Math.PI/6),ox=56*Math.cos(Math.PI/6);
  for(let i=-Math.ceil(H/oy);i<=Math.ceil((W+H)/oy);i++){const g=.5+.5*Math.sin(t*.35+i*.18);ctx.strokeStyle=`rgba(200,130,60,${.05+.04*g})`;ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(i*ox*2-W,H+20);ctx.lineTo(i*ox*2-W+W*2,-20);ctx.stroke();}
  for(let i=-Math.ceil(H/oy);i<=Math.ceil((W+H)/oy);i++){const g=.5+.5*Math.sin(t*.28+i*.22);ctx.strokeStyle=`rgba(200,130,60,${.05+.04*g})`;ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(W-i*ox*2+W,H+20);ctx.lineTo(W-i*ox*2+W-W*2,-20);ctx.stroke();}
  for(let y=0;y<=H;y+=oy*2){ctx.strokeStyle=`rgba(200,130,60,${.04+.03*(.5+.5*Math.sin(t*.22+y*.02))})`;ctx.lineWidth=.6;ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
  const sx=(t*14)%(W+300)-150,sg=ctx.createLinearGradient(sx,0,sx+140,H);sg.addColorStop(0,"rgba(200,130,60,0)");sg.addColorStop(.5,"rgba(200,130,60,.04)");sg.addColorStop(1,"rgba(200,130,60,0)");ctx.fillStyle=sg;ctx.fillRect(0,0,W,H);
  const vg=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,H);vg.addColorStop(0,"transparent");vg.addColorStop(1,"rgba(0,0,0,.82)");ctx.fillStyle=vg;ctx.fillRect(0,0,W,H);
};
