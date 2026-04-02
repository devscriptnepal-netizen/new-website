import React, { useState, useEffect } from "react";
import { C } from "../../data/constants";

export function FloatingBtns() {
  const [vis,setVis]=useState(false);
  useEffect(()=>{const fn=()=>setVis(window.scrollY>300);window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn);},[]);
  return (
    <>
      <button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} style={{position:"fixed",bottom:"2rem",right:"2rem",width:44,height:44,background:"linear-gradient(145deg,rgba(28,28,28,.95),rgba(14,14,14,.98))",border:"1px solid rgba(255,255,255,.09)",borderRadius:9,display:"flex",alignItems:"center",justifyContent:"center",color:C.white,zIndex:900,fontSize:".9rem",opacity:vis?1:0,visibility:vis?"visible":"hidden",transition:"opacity .3s,background .2s"}} onMouseEnter={e=>{e.currentTarget.style.background=C.red;e.currentTarget.style.borderColor=C.red;}} onMouseLeave={e=>{e.currentTarget.style.background="linear-gradient(145deg,rgba(28,28,28,.95),rgba(14,14,14,.98))";e.currentTarget.style.borderColor="rgba(255,255,255,.09)";}}>
        <i className="fa-solid fa-arrow-up"/>
      </button>
      <a href="https://wa.me/9779765224252" target="_blank" rel="noreferrer" style={{position:"fixed",bottom:"5rem",right:"2rem",width:44,height:44,background:"#25D366",borderRadius:9,display:"flex",alignItems:"center",justifyContent:"center",color:"white",zIndex:900,fontSize:"1.2rem",boxShadow:"0 4px 20px rgba(37,211,102,.35)",transition:"transform .2s,box-shadow .2s"}} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.1)";e.currentTarget.style.boxShadow="0 6px 28px rgba(37,211,102,.5)";}} onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="0 4px 20px rgba(37,211,102,.35)";}}>
        <i className="fa-brands fa-whatsapp"/>
      </a>
    </>
  );
}
