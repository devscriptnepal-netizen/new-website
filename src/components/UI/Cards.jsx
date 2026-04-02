import React from "react";
import { C } from "../../data/constants";

export const Mc = ({ children, style = {}, className = "" }) => (
  <div className={`mc ${className}`} style={style}>{children}</div>
);

export function SecHead({ eyebrow, title, desc, center }) {
  return (
    <div
      style={{
        textAlign: center ? "center" : "left",
        marginBottom: "3.5rem" // ✅ FIX: adds space below header
      }}
    >
      <span
        className="rv"
        style={{
          display: "inline-block",
          fontSize: ".75rem",
          fontWeight: 600,
          letterSpacing: ".14em",
          textTransform: "uppercase",
          color: C.red,
          marginBottom: "1rem"
        }}
      >
        {eyebrow}
      </span>

      <h2
        className="rv d1"
        style={{
          fontFamily: C.D,
          fontSize: "clamp(2.4rem,4.5vw,4rem)",
          letterSpacing: ".05em",
          lineHeight: 1.15, // slightly improved readability
          marginBottom: "1.8rem" // increased spacing
        }}
      >
        {title}
      </h2>

      <p
        className="rv d2"
        style={{
          color: C.muted,
          fontSize: "1rem",
          lineHeight: 1.8,
          maxWidth: center ? 560 : "100%",
          margin: center ? "0 auto" : "0"
        }}
      >
        {desc}
      </p>
    </div>
  );
}

export function Dim({ children }) {
  return <span style={{ color: "rgba(240,240,240,.2)" }}>{children}</span>;
}