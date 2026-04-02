import { useRef, useEffect } from "react";

export function useGridCanvas(drawFn) {
  const ref = useRef(null);
  useEffect(() => {
    const cvs = ref.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    let W, H, raf, t = 0;
    const resize = () => { W = cvs.width = cvs.offsetWidth; H = cvs.height = cvs.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const loop = () => { drawFn(ctx, W, H, t); t += 0.015; raf = requestAnimationFrame(loop); };
    loop();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, [drawFn]);
  return ref;
}
