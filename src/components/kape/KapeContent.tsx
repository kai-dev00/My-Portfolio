"use client";

import type { ReactNode } from "react";
import { useKape } from "./KapeProvider";

const OPACITY = { normal: 1, low: 0.8, sleepy: 0.55, hyper: 1 } as const;

// Wraps the page (not the header, so the mug stays put and clickable): a drained mug dims
// it, and "too much kape" makes all of it shake. Purely cosmetic.
export function KapeContent({ children }: { children: ReactNode }) {
  const { mood } = useKape();
  return (
    <div
      className={`flex flex-1 flex-col transition-opacity duration-[800ms] ${
        mood === "hyper" ? "kape-jitter" : ""
      }`}
      style={{ opacity: OPACITY[mood] }}
    >
      {children}
    </div>
  );
}
