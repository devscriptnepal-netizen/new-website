import React, { useState } from "react";
import { C, TEAM } from "../data/constants";
import { useReveal } from "../hooks/useReveal";
import { GridCanvas, drawDots, drawDiamond, drawCircuit, drawIso } from "../components/Canvas/GridCanvas";
import { Btn } from "../components/UI/Buttons";
import { Mc, SecHead, Dim } from "../components/UI/Cards";

export function AboutPage({ navigate }) {
  useReveal();
  return (
    <div className="page" style={{paddingTop:68}}>
      {/* Header */}
      <section style={{padding:"5rem clamp(1.5rem,5vw,3rem) 4rem",position:"relative",overflow:"hidden",background:C.bg}}>
        <GridCanvas draw={drawDots}/>
        <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:"linear-gradient(90deg,transparent,rgba(224,31,31,.15),rgba(224,31,31,.3),rgba(224,31,31,.15),transparent)",zIndex:1}}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2,textAlign:"center"}}>
          <div className="rv" style={{display:"inline-block",fontSize:".72rem",fontWeight:600,letterSpacing:".14em",textTransform:"uppercase",color:C.red,marginBottom:".75rem"}}>Who We Are</div>
          <h1 className="rv d1" style={{fontFamily:C.D,fontSize:"clamp(3rem,7vw,6rem)",lineHeight:.9,letterSpacing:".02em",marginBottom:"1.25rem"}}>ABOUT <span style={{color:C.red}}>DEV</span>SCRIPT</h1>
          <p className="rv d2" style={{color:C.muted,fontSize:"1.1rem",lineHeight:1.8,maxWidth:600,margin:"0 auto"}}>A leading IT company based in Kathmandu, Nepal — dedicated to transforming businesses through innovative digital solutions.</p>
        </div>
      </section>

      {/* Story */}
      <section style={{padding:"6rem clamp(1.5rem,5vw,3rem)",position:"relative",overflow:"hidden"}}>
        <GridCanvas draw={drawDiamond}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
          <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5rem",alignItems:"center"}}>
            <div className="rv rl">
              <Mc style={{width:"100%",aspectRatio:"3/4",overflow:"hidden"}}>
                <svg viewBox="0 0 400 530" fill="none" style={{width:"100%",height:"100%",opacity:.12}}>
                  <rect x="40" y="40" width="320" height="450" rx="10" stroke={C.red} strokeWidth="1"/>
                  <line x1="40" y1="100" x2="360" y2="100" stroke={C.red} strokeWidth="1"/>
                  {[65,95,125].map(cx=><circle key={cx} cx={cx} cy={70} r={10} stroke={C.red} strokeWidth="1"/>)}
                  <rect x="60" y="130" width="130" height="8" rx="4" fill={C.red}/>
                  <rect x="60" y="150" width="90" height="6" rx="3" fill={C.red} opacity=".5"/>
                  <rect x="60" y="185" width="280" height="120" rx="7" stroke={C.red} strokeWidth="1" opacity=".4"/>
                  <path d="M200 225 L245 268 L200 310 L155 268 Z" stroke={C.red} strokeWidth="1.5"/>
                  <path d="M200 243 L228 268 L200 293 L172 268 Z" fill={C.red} opacity=".22"/>
                  <rect x="60" y="330" width="140" height="8" rx="4" fill={C.red}/>
                  <rect x="60" y="350" width="220" height="6" rx="3" fill={C.red} opacity=".5"/>
                  <rect x="60" y="396" width="90" height="38" rx="8" stroke={C.red} strokeWidth="1.5"/>
                  <rect x="165" y="396" width="90" height="38" rx="8" fill={C.red} opacity=".35"/>
                </svg>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(224,31,31,.08),transparent 55%)"}}/>
              </Mc>
              <Mc style={{position:"absolute",bottom:-18,right:-18,padding:"1.25rem 1.75rem",textAlign:"center",background:`linear-gradient(135deg,${C.red},${C.redD})`,boxShadow:`0 8px 32px ${C.redG}`}}>
                <div style={{fontFamily:C.D,fontSize:"2.8rem",lineHeight:1}}>2+</div>
                <div style={{fontSize:".7rem",letterSpacing:".08em",opacity:.85}}>YRS EXP</div>
              </Mc>
              <Mc style={{position:"absolute",top:24,left:-18,padding:".85rem 1.25rem"}}>
                <div style={{fontFamily:C.D,fontSize:"1.6rem",lineHeight:1}}>25<span style={{color:C.red}}>+</span></div>
                <div style={{fontSize:".7rem",color:C.muted,letterSpacing:".06em"}}>PROJECTS</div>
              </Mc>
            </div>
            <div>
              <span className="rv" style={{display:"inline-block",fontSize:".72rem",fontWeight:600,letterSpacing:".14em",textTransform:"uppercase",color:C.red,marginBottom:".65rem"}}>Our Story</span>
              <h2 className="rv d1" style={{fontFamily:C.D,fontSize:"clamp(2.2rem,4vw,3.5rem)",lineHeight:.95,marginBottom:"1.25rem"}}>BUILT TO <span style={{color:C.red}}>INNOVATE</span></h2>
              <p className="rv d2" style={{color:C.muted,lineHeight:1.8,marginBottom:"1.5rem"}}>Founded with a vision to revolutionize Nepal's IT landscape, DevScript Nepal has grown into a trusted partner for businesses seeking digital transformation. We combine global standards with deep local knowledge.</p>
              <p className="rv d3" style={{color:C.muted,lineHeight:1.8,marginBottom:"2rem"}}>Our team of expert developers, designers, and strategists work together to create solutions that are not just functional, but extraordinary — shipped on time, every time.</p>
              {[
                {icon:"fa-solid fa-lightbulb",   title:"Innovation-Driven", text:"Cutting-edge tech choices that give your product a genuine competitive edge."},
                {icon:"fa-solid fa-handshake",   title:"Client-Centric",    text:"Your success is our priority — close collaboration from brief to launch."},
                {icon:"fa-solid fa-medal",        title:"Quality Assured",   text:"Rigorous code review, security checks, and performance audits on every build."},
              ].map((f,i)=>{
                const [hov,setHov]=useState(false);
                return (
                  <div key={f.title} className={`rv d${i+1}`} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{marginBottom:".8rem"}}>
                    <Mc style={{display:"flex",alignItems:"flex-start",gap:"1rem",padding:"1rem 1.25rem",borderColor:hov?"rgba(224,31,31,.28)":C.border,transition:"border-color .25s"}}>
                      <div style={{width:36,height:36,minWidth:36,background:"rgba(224,31,31,.08)",border:"1px solid rgba(224,31,31,.18)",borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center",color:C.red,fontSize:".9rem"}}><i className={f.icon}/></div>
                      <div><div style={{fontWeight:600,fontSize:".9rem",marginBottom:3}}>{f.title}</div><div style={{fontSize:".825rem",color:C.muted,lineHeight:1.65}}>{f.text}</div></div>
                    </Mc>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{padding:"5rem clamp(1.5rem,5vw,3rem)",position:"relative",overflow:"hidden",background:C.bg2}}>
        <GridCanvas draw={drawCircuit}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
          <SecHead eyebrow="Direction" title={<>VISION & <Dim>MISSION</Dim></>} desc="" center/>
          <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem",marginTop:"3rem"}}>
            {[
              {icon:"fa-solid fa-eye",    title:"Our Vision",   text:"To be the leading technology partner in Nepal, recognised globally for innovative solutions and commitment to excellence in software development and digital transformation."},
              {icon:"fa-solid fa-rocket", title:"Our Mission",  text:"To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation — while fostering a culture of continuous learning and delivering excellence in every project."},
            ].map((v,i)=>(
              <div key={v.title} className={`rv d${i+1}`}>
                <Mc style={{padding:"2.5rem"}}>
                  <div style={{width:52,height:52,background:"rgba(224,31,31,.08)",border:"1px solid rgba(224,31,31,.18)",borderRadius:11,display:"flex",alignItems:"center",justifyContent:"center",color:C.red,fontSize:"1.2rem",marginBottom:"1.5rem"}}><i className={v.icon}/></div>
                  <div style={{fontFamily:C.D,fontSize:"1.6rem",letterSpacing:".04em",marginBottom:"1rem"}}>{v.title}</div>
                  <div style={{color:C.muted,lineHeight:1.8,fontSize:".95rem"}}>{v.text}</div>
                </Mc>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{padding:"6rem clamp(1.5rem,5vw,3rem)",position:"relative",overflow:"hidden"}}>
        <GridCanvas draw={drawDots}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
          <SecHead eyebrow="The People" title={<>MEET THE <Dim>TEAM</Dim></>} desc="The talented humans behind every line of code and pixel." center/>
          <div className="g4" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1.5rem",marginTop:"4rem"}}>
            {TEAM.map((m,i)=>{
              const [hov,setHov]=useState(false);
              return (
                <div key={m.name} className={`rv d${i+1}`} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
                  <Mc style={{padding:"2rem 1.75rem",textAlign:"center",borderColor:hov?"rgba(224,31,31,.28)":C.border,transition:"border-color .25s,transform .25s",transform:hov?"translateY(-4px)":"translateY(0)"}}>
                    <div style={{width:64,height:64,borderRadius:"50%",background:`linear-gradient(135deg,${C.red},${C.redD})`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:C.D,fontSize:"1.4rem",margin:"0 auto 1.25rem",boxShadow:`0 4px 20px ${C.redG}`}}>
                      {m.name.split(" ").map(w=>w[0]).join("")}
                    </div>
                    <div style={{width:42,height:42,background:"rgba(224,31,31,.08)",border:"1px solid rgba(224,31,31,.18)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",color:C.red,fontSize:".9rem",margin:"0 auto 1rem"}}><i className={m.icon}/></div>
                    <div style={{fontFamily:C.D,fontSize:"1.2rem",letterSpacing:".03em",marginBottom:".35rem"}}>{m.name}</div>
                    <div style={{fontSize:".78rem",color:C.red,letterSpacing:".06em",textTransform:"uppercase",marginBottom:"1rem"}}>{m.role}</div>
                    <div style={{fontSize:".83rem",color:C.muted,lineHeight:1.65}}>{m.bio}</div>
                  </Mc>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:"5rem clamp(1.5rem,5vw,3rem)",position:"relative",overflow:"hidden",background:C.bg2}}>
        <GridCanvas draw={drawIso}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
          <Mc style={{padding:"4rem clamp(2rem,5vw,5rem)",textAlign:"center"}}>
            <h2 className="rv" style={{fontFamily:C.D,fontSize:"clamp(2.5rem,5vw,4rem)",lineHeight:.95,marginBottom:"1.25rem"}}>READY TO WORK <span style={{color:C.red}}>WITH US?</span></h2>
            <p className="rv d1" style={{color:C.muted,lineHeight:1.8,marginBottom:"2.5rem",maxWidth:480,margin:"0 auto 2.5rem"}}>Let's discuss how we can help bring your ideas to life.</p>
            <Btn onClick={()=>navigate("contact")}>Get In Touch <i className="fa-solid fa-arrow-right" style={{fontSize:".8rem"}}/></Btn>
          </Mc>
        </div>
      </section>
    </div>
  );
}
