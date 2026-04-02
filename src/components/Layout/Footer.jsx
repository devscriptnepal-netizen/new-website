import React from "react";
import { C } from "../../data/constants";
import { Logo } from "../UI/Logo";
import { SocBtn } from "../UI/Buttons";

export function Footer({ navigate }) {
  return (
    <footer style={{background:"#060606",borderTop:`1px solid ${C.border}`,padding:"5rem clamp(1.5rem,5vw,3rem) 2rem",position:"relative"}}>
      <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.12),rgba(255,255,255,.2),rgba(255,255,255,.12),transparent)"}}/>
      <div style={{maxWidth:1280,margin:"0 auto"}}>
        <div className="gf" style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:"4rem",paddingBottom:"4rem",borderBottom:`1px solid ${C.border}`}}>
          <div>
            <button onClick={()=>navigate("home")} style={{display:"flex",alignItems:"center",gap:".65rem",background:"none",border:"none",color:C.white,marginBottom:".4rem"}}>
              <Logo size={30}/><span style={{fontFamily:C.D,fontSize:"1.3rem",letterSpacing:".06em"}}>DEV<span style={{color:C.red}}>SCRIPT</span> NEPAL</span>
            </button>
            <p style={{fontSize:".875rem",color:C.muted,lineHeight:1.8,maxWidth:280,marginTop:"1rem"}}>Empowering businesses with cutting-edge technology. Kathmandu, Nepal — serving clients globally.</p>
            <div style={{display:"flex",gap:".65rem",marginTop:"1.5rem"}}>
              {[{icon:"fa-brands fa-linkedin-in",href:"https://www.linkedin.com/company/devscript-nepal-official/"},{icon:"fa-brands fa-instagram",href:"https://www.instagram.com/devscriptnepal/"},{icon:"fa-brands fa-facebook-f",href:"https://www.facebook.com/profile.php?id=61582986553210"},{icon:"fa-brands fa-tiktok",href:"https://www.tiktok.com/@devscriptnepal"}].map(s=><SocBtn key={s.icon} {...s}/>)}
            </div>
          </div>
          {[
            {h:"Company",   ls:[["Home","home"],["About","about"],["Services","services"],["Blog","blog"],["Contact","contact"]]},
            {h:"Services",  ls:[["Web Development","services"],["Mobile Apps","services"],["UI/UX Design","services"],["Cloud Services","services"],["Cybersecurity","services"]]},
            {h:"Contact",   ls:[["info@devscriptnepal.com.np",null],["+977 976-5224252",null],["Kathmandu, Nepal",null]]},
          ].map(col=>(
            <div key={col.h}>
              <h5 style={{fontSize:".73rem",fontWeight:600,letterSpacing:".12em",textTransform:"uppercase",color:C.muted2,marginBottom:"1.25rem"}}>{col.h}</h5>
              <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:".7rem"}}>
                {col.ls.map(([l,p])=>(
                  <li key={l}>{p
                    ? <button onClick={()=>navigate(p)} style={{fontSize:".875rem",color:C.muted,transition:"color .2s",background:"none",border:"none",fontFamily:C.B,textAlign:"left",padding:0}} onMouseEnter={e=>e.target.style.color=C.white} onMouseLeave={e=>e.target.style.color=C.muted}>{l}</button>
                    : <span style={{fontSize:".875rem",color:C.muted}}>{l}</span>
                  }</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <p style={{fontSize:".8rem",color:C.muted2}}>© {new Date().getFullYear()} DevScript Nepal Pvt. Ltd. All rights reserved.</p>
          <div style={{display:"flex",gap:"1.5rem"}}>
            {["Privacy Policy","Terms of Service"].map(t=>(
              <a key={t} href="#" style={{fontSize:".8rem",color:C.muted2,transition:"color .2s"}} onMouseEnter={e=>e.target.style.color=C.muted} onMouseLeave={e=>e.target.style.color=C.muted2}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
