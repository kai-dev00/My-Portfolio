"use client";

import { KapeMug } from "./KapeMug";
import { useKape, type KapeMood } from "./KapeProvider";

const TONE: Record<KapeMood, string> = {
  normal: "text-accent",
  low: "text-muted",
  sleepy: "text-faint",
  hyper: "text-warn",
};

function statusFor(level: number, mood: KapeMood) {
  if (mood === "hyper") return "I can ship this whole app tonight";
  if (mood === "sleepy") return "brb, need kape…";
  if (mood === "low") return "running low";
  return level > 60 ? "fully caffeinated" : "half a cup left";
}

export function KapeMeter() {
  const { level, mood, refill } = useKape();
  const status = statusFor(level, mood);

  return (
    <>
      <button
        type="button"
        onClick={refill}
        aria-label="Refill kape"
        title={mood === "sleepy" ? "Click to refill your kape" : undefined}
        className={`inline-flex min-h-11 min-w-0 cursor-pointer items-center gap-2 rounded-full border bg-surface py-1 pl-2 pr-3.5 font-mono text-xs text-muted transition-[transform,border-color] duration-150 hover:-translate-y-0.5 active:scale-95 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 ${
          mood === "hyper"
            ? "border-warn"
            : mood === "sleepy"
              ? "kape-hint border-accent"
              : "border-line hover:border-accent"
        }`}
      >
        <KapeMug level={level} mood={mood} size={34} />
        {/* line-clamp keeps the long hyper message to 2 lines so the header never grows. */}
        <span className="line-clamp-2 min-w-0 text-left leading-tight">
          <span className={TONE[mood]}>{Math.round(level)}%</span>
          <span className="hidden sm:inline"> · {status}</span>
        </span>
      </button>
      {/* The button's name is "Refill kape", so mood changes are announced here. */}
      <span aria-live="polite" className="sr-only">
        {status}
      </span>
    </>
  );
}
