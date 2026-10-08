"use client";

import { useEffect, useRef } from "react";
import { useKape } from "./KapeProvider";

// Browsers can't animate the real mouse cursor, so during "too much kape" we hide it and show
// a heartbeat-pulsing amber arrow that follows the mouse instead (see .kape-* in globals.css).
// It's skipped on touch screens and when the visitor prefers reduced motion.
export function KapeCursor() {
  const { mood } = useKape();
  const hyper = mood === "hyper";
  const el = useRef<HTMLDivElement>(null);
  const last = useRef({ x: -100, y: -100 });

  // Always remember where the pointer is, so the arrow appears exactly under it.
  useEffect(() => {
    const move = (e: PointerEvent) => {
      last.current = { x: e.clientX, y: e.clientY };
      if (el.current) {
        el.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", move);
    };
  }, []);

  useEffect(() => {
    if (!hyper) return;
    const usable =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!usable) return;

    if (el.current) {
      el.current.style.transform = `translate3d(${last.current.x}px, ${last.current.y}px, 0)`;
    }
    const root = document.documentElement;
    root.classList.add("kape-hyper-cursor");
    return () => root.classList.remove("kape-hyper-cursor");
  }, [hyper]);

  return (
    <div ref={el} aria-hidden="true" className="kape-cursor">
      {/* The arrow's tip is at (0,0) so the click point stays exactly where the real cursor was. */}
      <svg width="20" height="30" viewBox="0 0 14 21" fill="none">
        <path
          d="M0.5 0.5V16.5L4.7 12.7L7.6 19.6L10.1 18.5L7.2 11.7H13L0.5 0.5Z"
          className="fill-warn stroke-bg"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
