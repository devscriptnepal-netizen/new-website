import React, { useState, useEffect } from "react";
import { C } from "../../data/constants";
import { Logo } from "../UI/Logo";

export function Navbar({ page, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>55);
    window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn);
  },[]);

  const links=[
    { label:"Home",     p:"home" },
    { label:"About",    p:"about" },
    { label:"Services", p:"services" },
    { label:"Blog",     p:"blog" },
    { label:"Contact",  p:"contact" },
  ];

  return (
    <>
      <nav style={{position:"fixed",top:0,left:0,right:0,height:68,display:"flex",alignItems:"center",padding:"0 clamp(1.5rem,5vw,3rem)",zIndex:1000,background:scrolled?"rgba(8,8,8,.95)":"transparent",backdropFilter:scrolled?"blur(20px)":"none",borderBottom:scrolled?`1px solid ${C.border}`:"none",transition:"background .3s,border-bottom .3s"}}>
        {scrolled&&<div style={{position:"absolute",top:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent)"}}/>}
        <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <button onClick={()=>navigate("home")} style={{display:"flex",alignItems:"center",gap:".65rem",background:"none",border:"none",color:C.white}}>
            <Logo size={32}/><span style={{fontFamily:C.D,fontSize:"1.45rem",letterSpacing:".06em"}}>DEV<span style={{color:C.red}}>SCRIPT</span></span>
          </button>
          <ul className="nd" style={{display:"flex",listStyle:"none",gap:".1rem",alignItems:"center"}}>
            {links.map(l=>(
              <li key={l.p}>
                <button onClick={()=>navigate(l.p)} className={`nl${page===l.p?" on":""}`} style={{background:"none",border:"none",color:page===l.p?C.white:C.muted}}>
                  {l.label}
                </button>
              </li>
            ))}
            <li style={{marginLeft:".5rem"}}>
              <button onClick={()=>navigate("contact")} style={{padding:".5rem 1.3rem",background:C.red,color:C.white,borderRadius:7,fontSize:".875rem",fontWeight:600,letterSpacing:".03em",display:"block",transition:"background .2s",border:"none",fontFamily:C.B}}
                onMouseEnter={e=>e.target.style.background=C.redD} onMouseLeave={e=>e.target.style.background=C.red}>
                Contact Us
              </button>
            </li>
          </ul>
          <button className="hb" onClick={()=>setOpen(!open)} style={{background:"none",border:"none",flexDirection:"column",gap:5,padding:6,display:"flex"}}>
            {[0,1,2].map(i=><span key={i} style={{display:"block",width:24,height:2,background:C.white,borderRadius:2,transition:"all .3s",transform:open?(i===0?"translateY(7px) rotate(45deg)":i===2?"translateY(-7px) rotate(-45deg)":"scale(0)"):"none",opacity:open&&i===1?0:1}}/>)}
          </button>
        </div>
      </nav>
      {open&&(
        <div style={{position:"fixed",inset:0,top:68,background:"rgba(8,8,8,.98)",backdropFilter:"blur(20px)",zIndex:999,display:"flex",flexDirection:"column",padding:"2rem"}}>
          {links.map(l=>(
            <button key={l.p} onClick={()=>{navigate(l.p);setOpen(false);}} style={{fontFamily:C.D,fontSize:"2.4rem",letterSpacing:".06em",padding:".75rem 0",borderBottom:`1px solid ${C.border}`,color:l.p==="contact"?C.red:C.white,background:"none",border:"none",cursor:"none",textAlign:"left"}}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
