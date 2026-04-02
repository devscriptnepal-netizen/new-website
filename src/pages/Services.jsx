import React, { useState, useRef, useCallback } from "react";
import { C, SERVICES } from "../data/constants";
import { useReveal } from "../hooks/useReveal";
import { GridCanvas, drawSquare, drawDiamond, drawCircuit } from "../components/Canvas/GridCanvas";
import { Btn } from "../components/UI/Buttons";
import { Mc, Dim } from "../components/UI/Cards";

export function ServicesPage({ navigate }) {
  useReveal();
  const [active, setActive] = useState(null);

  const TiltCard2=({ s, i })=>{
    const ref=useRef(null);
    const [tilt,setTilt]=useState({x:0,y:0}),[glow,setGlow]=useState({x:50,y:50}),[hov,setHov]=useState(false);
    const ds=["d1","d2","d3","d4","d5","d6"];
    const onMove=useCallback(e=>{const r=ref.current.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;setTilt({x:(y-.5)*14,y:(x-.5)*-14});setGlow({x:x*100,y:y*100});},[]);
    const onLeave=useCallback(()=>{setTilt({x:0,y:0});setGlow({x:50,y:50});setHov(false);},[]);
    return (
      <div ref={ref} className={`tilt rv ${ds[i%6]}`} onMouseMove={onMove} onMouseEnter={()=>setHov(true)} onMouseLeave={onLeave}
        onClick={()=>setActive(active===i?null:i)}
        style={{background:hov||active===i?"linear-gradient(145deg,rgba(28,28,28,.98),rgba(18,18,18,1))":"linear-gradient(145deg,rgba(20,20,20,.96),rgba(12,12,12,.98))",padding:"2.5rem",position:"relative",overflow:"hidden",borderRadius:14,border:`1px solid ${active===i?"rgba(224,31,31,.4)":C.border}`,borderTop:`1px solid ${active===i?"rgba(224,31,31,.4)":C.borderB}`,
          transform:`perspective(680px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hov?1.02:1})`,
          transition:hov?"transform .1s ease,background .3s":"transform .55s ease,background .3s",
          boxShadow:active===i?`0 0 0 1px rgba(224,31,31,.2), 0 20px 60px rgba(0,0,0,.5)`:"inset 0 1px 0 rgba(255,255,255,.04)"}}>
        <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent)"}}/>
        <div style={{position:"absolute",width:200,height:200,borderRadius:"50%",pointerEvents:"none",background:"radial-gradient(circle at center,rgba(224,31,31,.1),transparent 70%)",left:`calc(${glow.x}% - 100px)`,top:`calc(${glow.y}% - 100px)`,opacity:hov?1:0,transition:"opacity .3s"}}/>
        <div style={{position:"absolute",bottom:0,left:0,right:0,height:2,background:C.red,transform:hov||active===i?"scaleX(1)":"scaleX(0)",transformOrigin:"left",transition:"transform .35s ease"}}/>
        <div style={{width:54,height:54,background:"rgba(224,31,31,.08)",border:"1px solid rgba(224,31,31,.18)",borderRadius:11,display:"flex",alignItems:"center",justifyContent:"center",color:s.color,marginBottom:"1.5rem",fontSize:"1.35rem",transform:"translateZ(20px)"}}>
          <i className={s.icon}/>
        </div>
        <div style={{fontFamily:C.D,fontSize:"1.45rem",letterSpacing:".04em",marginBottom:".75rem"}}>{s.name}</div>
        <div style={{fontSize:".875rem",color:C.muted,lineHeight:1.75,marginBottom:"1.5rem"}}>{s.desc}</div>
        {active===i && (
          <div style={{borderTop:`1px solid ${C.border}`,paddingTop:"1.25rem",marginTop:".5rem"}}>
            <div style={{fontSize:".75rem",fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:C.red,marginBottom:".75rem"}}>What's included</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:".5rem"}}>
              {s.features.map(f=>(
                <div key={f} style={{display:"flex",alignItems:"center",gap:".5rem",fontSize:".82rem",color:C.silver}}>
                  <i className="fa-solid fa-check" style={{color:C.red,fontSize:".7rem",flexShrink:0}}/>{f}
                </div>
              ))}
            </div>
            <div style={{marginTop:"1.5rem"}}>
              <Btn onClick={()=>navigate("contact")}>Get a Quote <i className="fa-solid fa-arrow-right" style={{fontSize:".8rem"}}/></Btn>
            </div>
          </div>
        )}
        <div style={{display:"flex",alignItems:"center",gap:".4rem",fontSize:".78rem",fontWeight:600,color:C.red,letterSpacing:".08em",textTransform:"uppercase",marginTop:active===i?0:0}}>
          {active===i?"Hide Details ↑":"Learn More →"}
        </div>
      </div>
    );
  };

  return (
    <div className="page" style={{paddingTop:68}}>
      <section style={{padding:"5rem clamp(1.5rem,5vw,3rem) 4rem",position:"relative",overflow:"hidden"}}>
        <GridCanvas draw={drawSquare}/>
        <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.12),rgba(255,255,255,.2),rgba(255,255,255,.12),transparent)",zIndex:1}}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2,textAlign:"center"}}>
          <div className="rv" style={{display:"inline-block",fontSize:".72rem",fontWeight:600,letterSpacing:".14em",textTransform:"uppercase",color:C.red,marginBottom:".75rem"}}>What We Do</div>
          <h1 className="rv d1" style={{fontFamily:C.D,fontSize:"clamp(3rem,7vw,6rem)",lineHeight:.9,letterSpacing:".02em",marginBottom:"1.25rem"}}>OUR <span style={{color:C.red}}>SERVICES</span></h1>
          <p className="rv d2" style={{color:C.muted,fontSize:"1.1rem",lineHeight:1.8,maxWidth:600,margin:"0 auto"}}>End-to-end digital solutions — click any service to explore what's included.</p>
        </div>
      </section>
      <section style={{padding:"4rem clamp(1.5rem,5vw,3rem) 6rem",position:"relative",overflow:"hidden",background:C.bg2}}>
        <GridCanvas draw={drawDiamond}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
          <div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1.5rem"}}>
            {SERVICES.map((s,i)=><TiltCard2 key={s.name} s={s} i={i}/>)}
          </div>
        </div>
      </section>
      <section style={{padding:"5rem clamp(1.5rem,5vw,3rem)",position:"relative",overflow:"hidden"}}>
        <GridCanvas draw={drawCircuit}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
          <Mc style={{padding:"4rem clamp(2rem,5vw,5rem)",textAlign:"center"}}>
            <h2 className="rv" style={{fontFamily:C.D,fontSize:"clamp(2.5rem,4vw,3.5rem)",lineHeight:.95,marginBottom:"1.25rem"}}>DON'T SEE WHAT YOU NEED?<br/><span style={{color:C.red}}>WE DO CUSTOM TOO.</span></h2>
            <p className="rv d1" style={{color:C.muted,lineHeight:1.8,marginBottom:"2.5rem",maxWidth:480,margin:"0 auto 2.5rem"}}>We build bespoke digital solutions for unique business requirements.</p>
            <Btn onClick={()=>navigate("contact")}>Discuss Your Project <i className="fa-solid fa-arrow-right" style={{fontSize:".8rem"}}/></Btn>
          </Mc>
        </div>
      </section>
    </div>
  );
}
