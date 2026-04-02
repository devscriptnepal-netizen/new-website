import React, { useState } from "react";
import { C, BLOG_POSTS } from "../data/constants";
import { useReveal } from "../hooks/useReveal";
import { GridCanvas, drawDots, drawHex } from "../components/Canvas/GridCanvas";
import { Mc } from "../components/UI/Cards";

export function BlogPage({ navigate }) {
  useReveal();
  const [cat, setCat] = useState("All");
  const cats = ["All", ...Array.from(new Set(BLOG_POSTS.map(p => p.cat)))];
  const filtered = cat === "All" ? BLOG_POSTS : BLOG_POSTS.filter(p => p.cat === cat);

  return (
    <div className="page" style={{paddingTop:68}}>
      <section style={{padding:"5rem clamp(1.5rem,5vw,3rem) 4rem",position:"relative",overflow:"hidden"}}>
        <GridCanvas draw={drawDots}/>
        <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.12),rgba(255,255,255,.2),rgba(255,255,255,.12),transparent)",zIndex:1}}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2,textAlign:"center"}}>
          <div className="rv" style={{display:"inline-block",fontSize:".72rem",fontWeight:600,letterSpacing:".14em",textTransform:"uppercase",color:C.red,marginBottom:".75rem"}}>Insights</div>
          <h1 className="rv d1" style={{fontFamily:C.D,fontSize:"clamp(3rem,7vw,6rem)",lineHeight:.9,letterSpacing:".02em",marginBottom:"1.25rem"}}>OUR <span style={{color:C.red}}>BLOG</span></h1>
          <p className="rv d2" style={{color:C.muted,fontSize:"1.1rem",lineHeight:1.8,maxWidth:600,margin:"0 auto 2rem"}}>SEO, Cybersecurity, UI/UX, Development — insights to help your business grow.</p>
          {/* Category filter */}
          <div className="rv d3" style={{display:"flex",gap:".75rem",justifyContent:"center",flexWrap:"wrap"}}>
            {cats.map(c=>{
              const on=c===cat;
              const [hov,setHov]=useState(false);
              return (
                <button key={c} onClick={()=>setCat(c)} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
                  style={{padding:".45rem 1.25rem",borderRadius:999,fontSize:".82rem",fontWeight:600,border:"none",fontFamily:C.B,letterSpacing:".04em",background:on?C.red:hov?"rgba(255,255,255,.08)":"rgba(255,255,255,.04)",color:on?C.white:C.muted,transition:"background .2s,color .2s"}}>
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>
      <section style={{padding:"3rem clamp(1.5rem,5vw,3rem) 6rem",position:"relative",overflow:"hidden",background:C.bg2}}>
        <GridCanvas draw={drawHex}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
          <div className="blog-g" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1.5rem"}}>
            {filtered.map((p,i)=>{
              const [hov,setHov]=useState(false);
              return (
                <div key={p.id} className={`rv d${(i%3)+1}`} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
                  <Mc style={{overflow:"hidden",transform:hov?"translateY(-5px)":"translateY(0)",transition:"transform .3s,border-color .3s",borderColor:hov?"rgba(224,31,31,.25)":C.border}}>
                    {/* Image area */}
                    <div style={{height:180,background:hov?"linear-gradient(135deg,rgba(28,28,28,1),rgba(20,20,20,1))":"linear-gradient(135deg,rgba(20,20,20,1),rgba(14,14,14,1))",borderBottom:`1px solid ${C.border}`,display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden",transition:"background .3s"}}>
                      <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(224,31,31,.06),transparent)"}}/>
                      <div style={{width:64,height:64,background:"rgba(224,31,31,.08)",border:"1px solid rgba(224,31,31,.18)",borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",color:C.red,fontSize:"1.6rem",position:"relative",zIndex:1}}>
                        <i className={p.icon}/>
                      </div>
                    </div>
                    <div style={{padding:"1.5rem 1.75rem 1.75rem"}}>
                      <div style={{display:"flex",alignItems:"center",gap:".75rem",marginBottom:"1rem",flexWrap:"wrap"}}>
                        <span style={{padding:".25rem .75rem",background:"rgba(224,31,31,.1)",border:"1px solid rgba(224,31,31,.2)",borderRadius:999,fontSize:".7rem",fontWeight:600,color:C.red,letterSpacing:".08em"}}>{p.cat}</span>
                        <span style={{fontSize:".75rem",color:C.muted}}>{p.date}</span>
                        <span style={{fontSize:".75rem",color:C.muted,display:"flex",alignItems:"center",gap:".3rem"}}><i className="fa-regular fa-clock" style={{fontSize:".7rem"}}/>{p.read} read</span>
                      </div>
                      <div style={{fontFamily:C.D,fontSize:"1.22rem",letterSpacing:".03em",lineHeight:1.2,marginBottom:".75rem"}}>{p.title}</div>
                      <div style={{fontSize:".84rem",color:C.muted,lineHeight:1.7,marginBottom:"1.25rem"}}>{p.desc}</div>
                      <div style={{display:"flex",alignItems:"center",gap:hov?".75rem":".4rem",fontSize:".78rem",fontWeight:600,color:C.red,letterSpacing:".08em",textTransform:"uppercase",transition:"gap .25s"}}>
                        Read More <i className="fa-solid fa-arrow-right" style={{fontSize:".7rem"}}/>
                      </div>
                    </div>
                  </Mc>
                </div>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <div style={{textAlign:"center",padding:"4rem",color:C.muted}}>No posts in this category yet.</div>
          )}
        </div>
      </section>
    </div>
  );
}
