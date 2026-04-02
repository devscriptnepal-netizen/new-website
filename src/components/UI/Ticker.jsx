import React from "react";
import { C, TICKER_DATA } from "../../data/constants";

export function Ticker() {
  const doubled=[...TICKER_DATA,...TICKER_DATA,...TICKER_DATA];
  return (
    <div style={{background:C.red,padding:".78rem 0",overflow:"hidden",whiteSpace:"nowrap",position:"relative",zIndex:10,boxShadow:"0 0 28px rgba(224,31,31,0.4)"}}>
      <div style={{display:"inline-flex",gap:"3rem",animation:"ticker 32s linear infinite"}}>
        {doubled.map((t,i)=>(
          <span key={i} style={{fontFamily:C.D,fontSize:"1.05rem",letterSpacing:".1em",display:"inline-flex",alignItems:"center",gap:"1rem"}}>
            <i className="fa-solid fa-diamond" style={{fontSize:".52rem",opacity:.72}}/> {t}
          </span>
        ))}
      </div>
    </div>
  );
}
