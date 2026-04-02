import React, { useState } from "react";
import { C } from "../../data/constants";

export function Btn({ children, href, onClick, full }) {
  const [h,sH]=useState(false);
  const s={display:"inline-flex",alignItems:"center",gap:".5rem",padding:".85rem 2rem",background:h?C.redD:C.red,color:C.white,fontWeight:600,fontSize:".9rem",borderRadius:10,letterSpacing:".02em",transform:h?"translateY(-2px)":"translateY(0)",boxShadow:h?`0 8px 28px ${C.redG},inset 0 1px 0 rgba(255,255,255,.15)`:"inset 0 1px 0 rgba(255,255,255,.1)",transition:"background .2s,transform .2s,box-shadow .2s",border:"none",fontFamily:C.B,width:full?"100%":"auto",justifyContent:"center"};
  return href ? <a href={href} onMouseEnter={()=>sH(true)} onMouseLeave={()=>sH(false)} style={s}>{children}</a>
               : <button onClick={onClick} onMouseEnter={()=>sH(true)} onMouseLeave={()=>sH(false)} style={s}>{children}</button>;
}

export function BtnOut({ children, href, onClick }) {
  const [h,sH]=useState(false);
  return href
    ? <a href={href} onMouseEnter={()=>sH(true)} onMouseLeave={()=>sH(false)} style={{display:"inline-flex",alignItems:"center",gap:".5rem",padding:".85rem 2rem",background:h?"rgba(255,255,255,.04)":"transparent",border:`1px solid ${h?C.borderB:C.border}`,color:C.white,fontWeight:500,fontSize:".9rem",borderRadius:10,transform:h?"translateY(-2px)":"translateY(0)",transition:"background .2s,border-color .2s,transform .2s"}}>{children}</a>
    : <button onClick={onClick} onMouseEnter={()=>sH(true)} onMouseLeave={()=>sH(false)} style={{display:"inline-flex",alignItems:"center",gap:".5rem",padding:".85rem 2rem",background:h?"rgba(255,255,255,.04)":"transparent",border:`1px solid ${h?C.borderB:C.border}`,color:C.white,fontWeight:500,fontSize:".9rem",borderRadius:10,transform:h?"translateY(-2px)":"translateY(0)",transition:"background .2s,border-color .2s,transform .2s",fontFamily:C.B}}>{children}</button>;
}

export function IBtn({ children, onClick }) {
  const [h,sH]=useState(false);
  return <button onClick={onClick} onMouseEnter={()=>sH(true)} onMouseLeave={()=>sH(false)} style={{width:44,height:44,background:h?C.red:"linear-gradient(145deg,rgba(28,28,28,.95),rgba(14,14,14,.98))",border:`1px solid ${h?C.red:"rgba(255,255,255,.08)"}`,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",color:C.white,transition:"background .2s,border-color .2s"}}>{children}</button>;
}

export function SocBtn({ icon, href }) {
  const [h,sH]=useState(false);
  return <a href={href} target="_blank" rel="noreferrer" onMouseEnter={()=>sH(true)} onMouseLeave={()=>sH(false)} style={{width:38,height:38,background:h?C.red:"linear-gradient(145deg,rgba(26,26,26,.95),rgba(14,14,14,.98))",border:`1px solid ${h?C.red:"rgba(255,255,255,.08)"}`,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",color:h?C.white:C.muted,fontSize:".875rem",transition:"all .2s"}}><i className={icon}/></a>;
}
