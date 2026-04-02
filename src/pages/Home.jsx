import React, { useState, useEffect, useRef, useCallback } from "react";
import { C, SERVICES, STATS, TESTIMONIALS, FAQS } from "../data/constants";
import { useReveal } from "../hooks/useReveal";
import { GridCanvas, drawSquare, drawDiamond, drawHex, drawDots, drawCircuit, drawRadial, drawIso } from "../components/Canvas/GridCanvas";
import { HeroCanvas } from "../components/Canvas/HeroCanvas";
import { Btn, BtnOut } from "../components/UI/Buttons";
import { Mc, SecHead, Dim } from "../components/UI/Cards";
import { Ticker } from "../components/UI/Ticker";

// Tilt card state per service
const TiltCard = ({ s, i, navigate }) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 }), [glow, setGlow] = useState({ x: 50, y: 50 }), [hov, setHov] = useState(false);
  const ds = ["d1", "d2", "d3", "d4", "d5", "d6"];
  const onMove = useCallback(e => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    setTilt({ x: (y - .5) * 15, y: (x - .5) * -15 });
    setGlow({ x: x * 100, y: y * 100 });
  }, []);
  const onLeave = useCallback(() => { setTilt({ x: 0, y: 0 }); setGlow({ x: 50, y: 50 }); setHov(false); }, []);

  return (
    <div ref={ref} className={`tilt rv ${ds[i]}`} onMouseMove={onMove} onMouseEnter={() => setHov(true)} onMouseLeave={onLeave}
      onClick={() => navigate("services")}
      style={{ position: "relative", zIndex: hov ? 10 : 1, cursor: "pointer", perspective: "1200px" }}>
      
      <div style={{
        background: hov ? "linear-gradient(165deg,rgba(30,30,30,.95),rgba(15,15,15,1))" : "linear-gradient(165deg,rgba(22,22,22,.8),rgba(10,10,10,.9))",
        padding: "3.5rem 2.5rem", borderRadius: "1.5rem", position: "relative", overflow: "hidden", height: "100%",
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${hov ? -8 : 0}px)`,
        transition: hov ? "transform 0.1s ease-out, background 0.3s, border-color 0.3s, box-shadow 0.3s" : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), background 0.4s, border-color 0.4s, box-shadow 0.4s",
        border: `1px solid ${hov ? "rgba(224,31,31,.25)" : "rgba(255,255,255,.06)"}`,
        boxShadow: hov ? `0 25px 40px -15px rgba(0,0,0,0.8), 0 0 20px -8px ${C.redG}` : "0 10px 30px -15px rgba(0,0,0,0.6)",
        willChange: "transform",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}>
        {/* Animated Glow on Hover */}
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(224,31,31,0.08), transparent 60%)`, opacity: hov ? 1 : 0, transition: "opacity .4s ease", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent)", opacity: hov ? 1 : 0.5 }} />

        {/* Icon Container */}
        <div style={{
          width: 65, height: 65, borderRadius: "1.1rem", background: hov ? "rgba(224,31,31,.1)" : "rgba(255,255,255,.03)", border: `1px solid ${hov ? "rgba(224,31,31,.3)" : "rgba(255,255,255,.08)"}`,
          display: "flex", alignItems: "center", justifyContent: "center", color: hov ? C.red : s.color, marginBottom: "1.8rem", fontSize: "1.8rem", transition: "all .4s ease",
          boxShadow: hov ? `0 0 20px rgba(224,31,31,0.2)` : "none", transform: hov ? "scale(1.05)" : "scale(1)"
        }}>
          <i className={s.icon} />
        </div>

        {/* Text Details */}
        <div style={{ fontFamily: C.D, fontSize: "1.75rem", fontWeight: 700, letterSpacing: ".04em", color: C.white, marginBottom: "1.2rem", lineHeight: 1.3, transition: "color .3s" }}>
          {s.name}
        </div>
        <div style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "2.5rem", minHeight: "5.4rem" }}>
          {s.desc}
        </div>

        <div style={{
          display: "flex", alignItems: "center", gap: hov ? "1rem" : ".6rem", fontSize: ".85rem", fontWeight: 700, color: hov ? C.red : C.muted,
          letterSpacing: ".1em", textTransform: "uppercase", transition: "all .3s ease",
        }}>
          Learn More <i className="fa-solid fa-arrow-right-long" style={{ fontSize: ".75rem", transform: hov ? "translateX(6px)" : "none", transition: "transform .3s" }} />
        </div>
      </div>
    </div>
  );
};

export function HomePage({ navigate }) {
  useReveal();
  const [ld, setLd] = useState(false);
  useEffect(() => { setTimeout(() => setLd(true), 100); }, []);
  const anim = (d = 0) => ({ opacity: ld ? 1 : 0, transform: ld ? "translateY(0)" : "translateY(38px)", transition: `opacity .85s ease ${d}s,transform .85s ease ${d}s` });

  // Testimonials
  const [tidx, setTidx] = useState(0);
  useEffect(() => { const iv = setInterval(() => setTidx(i => (i + 1) % TESTIMONIALS.length), 5500); return () => clearInterval(iv); }, []);

  // FAQ
  const [fopen, setFopen] = useState(null);

  // Stats counters
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const sref = useRef(null), sdone = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting && !sdone.current) { sdone.current = true; STATS.forEach((s, i) => { let c = 0; const iv = setInterval(() => { c = Math.min(c + s.num / 55, s.num); setCounts(p => { const n = [...p]; n[i] = Math.round(c); return n; }); if (c >= s.num) clearInterval(iv); }, 28); }); } }, { threshold: .5 });
    if (sref.current) io.observe(sref.current); return () => io.disconnect();
  }, []);

  return (
    <div className="page">
      {/* HERO */}
      <section style={{ position: "relative", minHeight: "calc(100vh - 68px)", display: "flex", alignItems: "center", padding: "5rem clamp(1.5rem,5vw,3rem) 2.5rem", paddingBottom: 85, overflow: "hidden", background: C.bg }}>
        <GridCanvas draw={drawDots} />
        <HeroCanvas />
        <div style={{ position: "absolute", top: "-8%", right: "-4%", width: 580, height: 580, borderRadius: "50%", background: "radial-gradient(circle,rgba(224,31,31,0.08) 0%,transparent 65%)", pointerEvents: "none", zIndex: 2 }} />
        <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "rgba(255,255,255,.015)", animation: "scanl 9s linear infinite", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent)", zIndex: 5 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", position: "relative", zIndex: 3 }}>
          <div style={{ maxWidth: 700 }}>
            <div style={{ ...anim(.04), display: "inline-flex", alignItems: "center", gap: ".4rem", padding: ".25rem .75rem", border: "1px solid rgba(224,31,31,.25)", borderRadius: 999, fontSize: ".62rem", fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: C.red, marginBottom: ".85rem", background: "rgba(224,31,31,.03)" }}>
              <span style={{ width: 6, height: 6, background: C.red, borderRadius: "50%", animation: "blink 1.5s infinite" }} />
              Nepal's Premier IT Partner
            </div>
            <h1 style={{ ...anim(.1), fontFamily: C.D, fontSize: "clamp(2.6rem,6.5vw,5.5rem)", lineHeight: .92, letterSpacing: ".01em", marginBottom: ".5rem" }}>
              BUILD<br /><span style={{ color: C.red }}>THE</span> FUTURE<br /><span style={{ color: "rgba(240,240,240,.12)" }}>OF DIGITAL</span>
            </h1>
            <p style={{ ...anim(.2), fontSize: ".9rem", color: C.muted, lineHeight: 1.7, maxWidth: 400, marginBottom: "1.5rem" }}>DevScript Nepal crafts world-class web apps, mobile products, and digital solutions — built in Nepal, trusted globally.</p>
            <div style={{ ...anim(.3), display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
              <Btn onClick={() => navigate("contact")}>Start a Project <i className="fa-solid fa-arrow-right" style={{ fontSize: ".8rem" }} /></Btn>
              <BtnOut onClick={() => navigate("services")}>Our Services</BtnOut>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: `linear-gradient(to top,${C.bg},transparent)`, zIndex: 4, pointerEvents: "none" }} />
      </section>

      <Ticker />

      {/* SERVICES PREVIEW */}
      <section style={{ padding: "6rem clamp(1.5rem,5vw,3rem)", position: "relative", overflow: "hidden", background: C.bg2 }}>
        <GridCanvas draw={drawDiamond} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,.07),transparent)", zIndex: 1 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <SecHead eyebrow="What We Do" title={<>OUR <Dim>SERVICES</Dim></>} desc="End-to-end digital solutions engineered for real business impact." center />
          <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", marginTop: "4rem" }}>
            {SERVICES.map((s, i) => <TiltCard key={s.name} s={s} i={i} navigate={navigate} />)}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Btn onClick={() => navigate("services")}>View All Services <i className="fa-solid fa-arrow-right" style={{ fontSize: ".8rem" }} /></Btn>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div ref={sref} style={{ position: "relative", overflow: "hidden", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "5rem clamp(1.5rem,5vw,3rem)" }}>
        <GridCanvas draw={drawHex} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(255,200,80,.18),transparent)", zIndex: 1 }} />
        <div className="g4" style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "2rem" }}>
          {STATS.map((s, i) => (
            <div key={s.label} className={`rv d${i + 1}`} style={{ textAlign: "center" }}>
              <Mc style={{ padding: "2rem 1rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 52, height: 52, background: "rgba(255,200,80,.06)", border: "1px solid rgba(255,200,80,.18)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,200,80,.85)", margin: "0 auto 1rem", fontSize: "1.1rem" }}>
                  <i className={s.icon} />
                </div>
                <div style={{ fontFamily: C.D, fontSize: "3.6rem", lineHeight: 1 }}>{counts[i]}<span style={{ color: C.red }}>{s.suf}</span></div>
                <div style={{ fontSize: ".8rem", color: C.muted, letterSpacing: ".06em", marginTop: 6 }}>{s.label.toUpperCase()}</div>
              </Mc>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section style={{ padding: "6rem clamp(1.5rem,5vw,3rem)", position: "relative", overflow: "hidden" }}>
        <GridCanvas draw={drawRadial} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <SecHead eyebrow="Client Love" title={<>WHAT CLIENTS <Dim>SAY</Dim></>} desc="Hear from the businesses we've built for." center />
          <div style={{ marginTop: "4rem" }}>
            <Mc style={{ maxWidth: 840, margin: "0 auto", padding: "3.5rem clamp(2rem,5vw,4.5rem)" }}>
              <div style={{ position: "absolute", top: 16, right: 28, fontFamily: C.D, fontSize: "9rem", color: "rgba(224,31,31,.06)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>"</div>
              <div style={{ display: "flex", gap: 4, marginBottom: "1.5rem" }}>{Array(5).fill(0).map((_, i) => <i key={i} className="fa-solid fa-star" style={{ color: "#F59E0B", fontSize: ".9rem" }} />)}</div>
              <p style={{ fontSize: "1.08rem", lineHeight: 1.85, color: C.white, fontWeight: 300, fontStyle: "italic", marginBottom: "2rem", minHeight: 80 }}>"{TESTIMONIALS[tidx].text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: 50, height: 50, borderRadius: "50%", flexShrink: 0, background: `linear-gradient(135deg,${C.red},${C.redD})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: C.D, fontSize: "1.1rem", letterSpacing: ".04em", boxShadow: `0 4px 16px ${C.redG}` }}>{TESTIMONIALS[tidx].av}</div>
                <div><div style={{ fontWeight: 600, fontSize: ".95rem" }}>{TESTIMONIALS[tidx].name}</div><div style={{ fontSize: ".8rem", color: C.muted }}>{TESTIMONIALS[tidx].role}</div></div>
              </div>
            </Mc>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: "1.5rem" }}>
              {TESTIMONIALS.map((_, i) => <button key={i} onClick={() => setTidx(i)} style={{ width: i === tidx ? 24 : 8, height: 8, borderRadius: 4, border: "none", background: i === tidx ? C.red : C.muted2, transition: "width .35s,background .3s" }} />)}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "6rem clamp(1.5rem,5vw,3rem)", position: "relative", overflow: "hidden", background: C.bg2 }}>
        <GridCanvas draw={drawIso} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <SecHead eyebrow="FAQ" title={<>COMMON <Dim>QUESTIONS</Dim></>} desc="Everything you need to know before starting a project." center />
          <div style={{ maxWidth: 760, margin: "3rem auto 0", display: "flex", flexDirection: "column", gap: ".75rem" }}>
            {FAQS.map((f, i) => {
              const [hov, setHov] = useState(false);
              return (
                <div key={f.q} className={`rv d${Math.min(i + 1, 6)}`}>
                  <Mc style={{ background: fopen === i ? "linear-gradient(145deg,rgba(26,26,26,.98),rgba(16,16,16,1))" : hov ? "linear-gradient(145deg,rgba(22,22,22,.95),rgba(14,14,14,.98))" : "linear-gradient(145deg,rgba(20,20,20,.92),rgba(12,12,12,.96))", borderColor: fopen === i ? "rgba(224,31,31,.35)" : hov ? "rgba(255,255,255,.1)" : C.border, transition: "background .25s,border-color .25s", overflow: "hidden" }}>
                    {fopen === i && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(224,31,31,.3),transparent)" }} />}
                    <button onClick={() => setFopen(fopen === i ? null : i)} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem", background: "none", border: "none", color: C.white, textAlign: "left" }}>
                      <span style={{ fontWeight: 600, fontSize: ".9rem", lineHeight: 1.4, flex: 1, paddingRight: "1rem" }}>{f.q}</span>
                      <div style={{ width: 28, height: 28, minWidth: 28, background: fopen === i ? C.red : "rgba(224,31,31,.08)", border: `1px solid ${fopen === i ? C.red : "rgba(224,31,31,.2)"}`, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", color: fopen === i ? C.white : C.red, transform: fopen === i ? "rotate(45deg)" : "rotate(0)", transition: "transform .35s,background .25s", fontSize: ".82rem" }}><i className="fa-solid fa-plus" /></div>
                    </button>
                    <div className="faqb" style={{ maxHeight: fopen === i ? "260px" : "0", opacity: fopen === i ? 1 : 0 }}>
                      <div style={{ padding: "0 1.5rem 1.5rem", fontSize: ".875rem", color: C.muted, lineHeight: 1.8 }}>{f.a}</div>
                    </div>
                  </Mc>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem clamp(1.5rem,5vw,3rem)", position: "relative", overflow: "hidden" }}>
        <GridCanvas draw={drawCircuit} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Mc style={{ padding: "5rem clamp(2rem,5vw,5rem)", textAlign: "center", background: "linear-gradient(145deg,rgba(24,24,24,.97),rgba(12,12,12,.99))" }}>
            <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(224,31,31,.15) 0%,transparent 60%)", pointerEvents: "none" }} />
            <div className="rv" style={{ display: "inline-block", fontSize: ".72rem", fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: C.red, marginBottom: ".75rem" }}>Ready to Build?</div>
            <h2 className="rv d1" style={{ fontFamily: C.D, fontSize: "clamp(2.5rem,5vw,4.5rem)", lineHeight: .95, letterSpacing: ".02em", marginBottom: "1.25rem" }}>LET'S CREATE<br />SOMETHING <span style={{ color: C.red }}>GREAT</span></h2>
            <p className="rv d2" style={{ color: C.muted, lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: 500, margin: "0 auto 2.5rem" }}>Have a project in mind? Get a free discovery call — honest advice, no pressure.</p>
            <div className="rv d3" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Btn onClick={() => navigate("contact")}>Start a Project <i className="fa-solid fa-arrow-right" style={{ fontSize: ".8rem" }} /></Btn>
              <BtnOut onClick={() => navigate("services")}>View Services</BtnOut>
            </div>
          </Mc>
        </div>
      </section>
    </div>
  );
}
