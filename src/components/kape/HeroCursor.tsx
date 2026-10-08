"use client";

import { FloatingZzz } from "./FloatingZzz";
import { useKape } from "./KapeProvider";

// The blinking cursor after the name: floating "z z z" when sleepy, a fast amber blink when hyper.
export function HeroCursor() {
  const { mood } = useKape();

  if (mood === "sleepy") {
    return <FloatingZzz className="ml-[0.15em] align-baseline" />;
  }
  return (
    <span
      className={`font-normal ${
        mood === "hyper" ? "cursor-fast text-warn" : "cursor text-accent"
      }`}
    >
      |
    </span>
  );
}
