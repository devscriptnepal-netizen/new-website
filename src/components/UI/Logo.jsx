import React from "react";
import { C } from "../../data/constants";

export function Logo({ size=36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path d="M50 5 L95 50 L50 95 L5 50 Z" fill={C.white}/>
      <path d="M50 20 L80 50 L50 80 L20 50 Z" fill={C.bg}/>
      <path d="M44 28 L56 28 L56 72 L44 72 Z" fill={C.red} transform="rotate(45 50 50)"/>
      <path d="M50 36 L64 50 L50 64 L36 50 Z" fill={C.bg}/>
    </svg>
  );
}
