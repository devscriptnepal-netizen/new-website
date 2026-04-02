import React, { useState } from "react";
import { C } from "../data/constants";
import { useReveal } from "../hooks/useReveal";
import { GridCanvas, drawIso, drawCircuit } from "../components/Canvas/GridCanvas";
import { Btn, BtnOut, SocBtn } from "../components/UI/Buttons";
import { Mc } from "../components/UI/Cards";

export function ContactPage() {
  useReveal();
  const [form,setForm]=useState({name:"",email:"",service:"",budget:"",message:""});
  const [sent,setSent]=useState(false),[load,setLoad]=useState(false);
  const set=(k,v)=>setForm(p=>({...p,[k]:v}));
  const submit=e=>{e.preventDefault();setLoad(true);setTimeout(()=>{setLoad(false);setSent(true);},1600);};

  const lbl={fontSize:".75rem",fontWeight:600,color:C.muted,letterSpacing:".08em",display:"block",marginBottom:".45rem"};
  const inp={width:"100%",padding:".8rem 1rem",background:"rgba(8,8,8,.8)",border:`1px solid ${C.border}`,borderRadius:8,color:C.white,fontFamily:C.B,fontSize:".9rem",outline:"none",transition:"border-color .2s,box-shadow .2s"};
  const foc=e=>{e.target.style.borderColor="rgba(224,31,31,.55)";e.target.style.boxShadow="0 0 0 3px rgba(224,31,31,.07)";};
  const blr=e=>{e.target.style.borderColor=C.border;e.target.style.boxShadow="none";};

  return (
    <div className="page" style={{paddingTop:68}}>
      {/* Header */}
      <section style={{padding:"5rem clamp(1.5rem,5vw,3rem) 4rem",position:"relative",overflow:"hidden"}}>
        <GridCanvas draw={drawIso}/>
        <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:"linear-gradient(90deg,transparent,rgba(224,31,31,.15),rgba(224,31,31,.3),rgba(224,31,31,.15),transparent)",zIndex:1}}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2,textAlign:"center"}}>
          <div className="rv" style={{display:"inline-block",fontSize:".72rem",fontWeight:600,letterSpacing:".14em",textTransform:"uppercase",color:C.red,marginBottom:".75rem"}}>Get In Touch</div>
          <h1 className="rv d1" style={{fontFamily:C.D,fontSize:"clamp(3rem,7vw,6rem)",lineHeight:.9,letterSpacing:".02em",marginBottom:"1.25rem"}}>CONTACT <span style={{color:C.red}}>US</span></h1>
          <p className="rv d2" style={{color:C.muted,fontSize:"1.1rem",lineHeight:1.8,maxWidth:600,margin:"0 auto"}}>Free discovery calls, no pressure. Let's talk about your project.</p>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{padding:"3rem clamp(1.5rem,5vw,3rem) 5rem",position:"relative",overflow:"hidden",background:C.bg2}}>
        <GridCanvas draw={drawCircuit}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
          <div className="gc rv" style={{display:"grid",gridTemplateColumns:"1fr 1.2fr",gap:"3rem"}}>
            {/* Left — Info */}
            <Mc style={{padding:"3rem 2.5rem"}}>
              <div style={{fontFamily:C.D,fontSize:"clamp(2rem,4vw,3rem)",lineHeight:.95,marginBottom:"1.25rem"}}>LET'S CREATE<br/>SOMETHING<br/><span style={{color:C.red}}>GREAT</span></div>
              <p style={{color:C.muted,lineHeight:1.8,marginBottom:"2rem",fontSize:".95rem"}}>Honest advice, clear timelines, and great code — that's the DevScript promise.</p>
              <div style={{display:"flex",flexDirection:"column",gap:"1rem",marginBottom:"2rem"}}>
                {[
                  {icon:"fa-solid fa-envelope",    label:"Email",     val:"info@devscriptnepal.com.np", href:"mailto:info@devscriptnepal.com.np"},
                  {icon:"fa-solid fa-phone",        label:"Phone",     val:"+977 976-5224252",           href:"tel:+9779765224252"},
                  {icon:"fa-brands fa-whatsapp",   label:"WhatsApp",  val:"+977 976-5224252",           href:"https://wa.me/9779765224252"},
                  {icon:"fa-solid fa-location-dot", label:"Location",  val:"Baneswor, Kathmandu, Nepal", href:"https://maps.google.com/?q=DevScript+Nepal+Pvt+Ltd"},
                ].map(c=>(
                  <a key={c.label} href={c.href} target={c.label==="Location"||c.label==="WhatsApp"?"_blank":"_self"} rel="noreferrer" style={{display:"flex",alignItems:"center",gap:"1rem",transition:"transform .2s"}} onMouseEnter={e=>e.currentTarget.style.transform="translateX(8px)"} onMouseLeave={e=>e.currentTarget.style.transform=""}>
                    <div style={{width:42,height:42,minWidth:42,background:"rgba(224,31,31,.07)",border:"1px solid rgba(224,31,31,.16)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",color:C.red,fontSize:"1rem"}}><i className={c.icon}/></div>
                    <div><div style={{fontSize:".7rem",color:C.muted,letterSpacing:".06em"}}>{c.label.toUpperCase()}</div><div style={{fontSize:".9rem",fontWeight:500}}>{c.val}</div></div>
                  </a>
                ))}
              </div>
              <div style={{display:"flex",gap:".65rem",marginBottom:"2rem"}}>
                {[{icon:"fa-brands fa-linkedin-in",href:"https://www.linkedin.com/company/devscript-nepal-official/"},{icon:"fa-brands fa-instagram",href:"https://www.instagram.com/devscriptnepal/"},{icon:"fa-brands fa-facebook-f",href:"https://www.facebook.com/profile.php?id=61582986553210"},{icon:"fa-brands fa-tiktok",href:"https://www.tiktok.com/@devscriptnepal"}].map(s=><SocBtn key={s.icon} {...s}/>)}
              </div>
              {/* Business Hours */}
              <div style={{borderTop:`1px solid ${C.border}`,paddingTop:"1.5rem"}}>
                <div style={{fontSize:".75rem",fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:C.muted,marginBottom:"1rem"}}>Business Hours</div>
                {[["Sunday – Friday","9:00 AM – 6:00 PM"],["Saturday","Closed"]].map(([day,time])=>(
                  <div key={day} style={{display:"flex",justifyContent:"space-between",marginBottom:".5rem"}}>
                    <span style={{fontSize:".875rem",color:C.muted}}>{day}</span>
                    <span style={{fontSize:".875rem",color:time==="Closed"?C.red:C.silver,fontWeight:500}}>{time}</span>
                  </div>
                ))}
              </div>
            </Mc>

            {/* Right — Form */}
            <Mc style={{padding:"3rem 2.5rem"}}>
              {sent ? (
                <div style={{textAlign:"center",padding:"4rem 1rem"}}>
                  <div style={{fontSize:"4rem",marginBottom:"1rem"}}>🎉</div>
                  <div style={{fontFamily:C.D,fontSize:"2rem",marginBottom:".5rem"}}>Message Sent!</div>
                  <div style={{color:C.muted,marginBottom:"2rem"}}>We'll get back to you within 24 hours.</div>
                  <BtnOut onClick={()=>setSent(false)}>Send Another</BtnOut>
                </div>
              ) : (
                <form onSubmit={submit} style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}>
                    {[{label:"Full Name",type:"text",ph:"John Doe",k:"name"},{label:"Email Address",type:"email",ph:"john@company.com",k:"email"}].map(f=>(
                      <div key={f.k}><label style={lbl}>{f.label.toUpperCase()}</label><input required type={f.type} placeholder={f.ph} value={form[f.k]} onChange={e=>set(f.k,e.target.value)} style={inp} onFocus={foc} onBlur={blr}/></div>
                    ))}
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}>
                    {[
                      {label:"Service",k:"service",opts:["Web Development","Mobile App","UI/UX Design","Cloud Services","Cybersecurity","Database","Other"]},
                      {label:"Budget (NPR)",k:"budget",opts:["Under 50K","50K–150K","150K–500K","500K+"]},
                    ].map(f=>(
                      <div key={f.k}><label style={lbl}>{f.label.toUpperCase()}</label>
                        <select required value={form[f.k]} onChange={e=>set(f.k,e.target.value)} style={{...inp,appearance:"none"}} onFocus={foc} onBlur={blr}>
                          <option value="">Select…</option>{f.opts.map(o=><option key={o} value={o} style={{background:"#111"}}>{o}</option>)}
                        </select>
                      </div>
                    ))}
                  </div>
                  <div><label style={lbl}>MESSAGE</label><textarea required rows={5} placeholder="Tell us about your project…" value={form.message} onChange={e=>set("message",e.target.value)} style={{...inp,resize:"none"}} onFocus={foc} onBlur={blr}/></div>
                  <button type="submit" disabled={load} style={{padding:".9rem",background:load?C.muted2:C.red,color:C.white,border:"none",borderRadius:9,fontWeight:600,fontSize:"1rem",letterSpacing:".03em",display:"flex",alignItems:"center",justifyContent:"center",gap:".6rem",transition:"background .2s",boxShadow:load?"none":`0 4px 20px ${C.redG}`}} onMouseEnter={e=>!load&&(e.currentTarget.style.background=C.redD)} onMouseLeave={e=>!load&&(e.currentTarget.style.background=C.red)}>
                    {load?<><i className="fa-solid fa-circle-notch" style={{animation:"spin 1s linear infinite"}}/>Sending…</>:<><i className="fa-solid fa-paper-plane"/>Send Message</>}
                  </button>
                </form>
              )}
            </Mc>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section style={{padding:"0 clamp(1.5rem,5vw,3rem) 6rem",position:"relative",zIndex:2}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <Mc style={{overflow:"hidden",padding:0}}>
            <div style={{padding:"2rem 2.5rem 1.5rem",background:"linear-gradient(145deg,rgba(22,22,22,.97),rgba(14,14,14,.99))",borderBottom:`1px solid ${C.border}`,display:"flex",alignItems:"center",gap:"1rem"}}>
              <div style={{width:42,height:42,background:"rgba(224,31,31,.08)",border:"1px solid rgba(224,31,31,.18)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",color:C.red,fontSize:"1.1rem"}}><i className="fa-solid fa-map-location-dot"/></div>
              <div>
                <div style={{fontFamily:C.D,fontSize:"1.3rem",letterSpacing:".04em"}}>Find Us</div>
                <div style={{fontSize:".82rem",color:C.muted}}>DevScript Nepal Pvt. Ltd. — Baneswor, Kathmandu 44600</div>
              </div>
              <a href="https://www.google.com/maps/place/DevScript+Nepal+Pvt.+Ltd/" target="_blank" rel="noreferrer" style={{marginLeft:"auto",padding:".5rem 1.1rem",background:C.red,color:C.white,borderRadius:7,fontSize:".82rem",fontWeight:600,letterSpacing:".03em",display:"flex",alignItems:"center",gap:".5rem",transition:"background .2s"}} onMouseEnter={e=>e.target.style.background=C.redD} onMouseLeave={e=>e.target.style.background=C.red}>
                <i className="fa-solid fa-diamond-turn-right"/> Get Directions
              </a>
            </div>
            {/* Actual Google Maps embed */}
            <div style={{position:"relative",height:500}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.084532747482!2d85.38937697447021!3d27.652856227894535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb11c23bdb06a7%3A0x4c6b2c560077e1e5!2sDevScript%20Nepal%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1762158100250!5m2!1sen!2snp"
                width="100%"
                height="500"
                style={{border:0,display:"block",filter:"invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.85)"}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DevScript Nepal Location"
              />
              {/* Dark overlay label */}
              <div style={{position:"absolute",bottom:16,left:16,pointerEvents:"none"}}>
                <Mc style={{padding:".75rem 1rem",display:"inline-flex",alignItems:"center",gap:".6rem"}}>
                  <i className="fa-solid fa-location-dot" style={{color:C.red}}/>
                  <span style={{fontSize:".82rem",fontWeight:500}}>DevScript Nepal Pvt. Ltd.</span>
                </Mc>
              </div>
            </div>
          </Mc>
        </div>
      </section>
    </div>
  );
}
