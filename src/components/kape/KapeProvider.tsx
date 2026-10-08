"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type KapeMood = "normal" | "low" | "sleepy" | "hyper";

// How long a full mug lasts while the visitor reads.
const DRAIN_SECONDS = 150;
const TICK_MS = 500;
const LOW_AT = 25;
// 5 clicks within 1.5s = "too much kape" for 4s.
const HYPER_CLICKS = 5;
const HYPER_WINDOW_MS = 1500;
const HYPER_MS = 4000;

type KapeContextValue = {
  level: number;
  mood: KapeMood;
  refill: () => void;
};

// Outside the provider (or in tests) everything just reads as "full".
const KapeContext = createContext<KapeContextValue>({
  level: 100,
  mood: "normal",
  refill: () => {},
});

export const useKape = () => useContext(KapeContext);

export function KapeProvider({ children }: { children: ReactNode }) {
  const [level, setLevel] = useState(100);
  const [hyper, setHyper] = useState(false);
  const clicks = useRef<number[]>([]);
  const hyperTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Drain slowly; paused while hyper.
  useEffect(() => {
    if (hyper) return;
    // Drain faster for testing purposes
    // const step = 10000 / ((DRAIN_SECONDS * 1000) / TICK_MS);
    const step = 100 / ((DRAIN_SECONDS * 1000) / TICK_MS);
    const id = setInterval(() => setLevel((l) => Math.max(0, l - step)), TICK_MS);
    return () => clearInterval(id);
  }, [hyper]);

  useEffect(
    () => () => {
      if (hyperTimer.current) clearTimeout(hyperTimer.current);
    },
    [],
  );

  const refill = useCallback(() => {
    const now = Date.now();
    clicks.current = clicks.current
      .filter((t) => now - t < HYPER_WINDOW_MS)
      .concat(now);
    setLevel(100);

    if (clicks.current.length >= HYPER_CLICKS) {
      clicks.current = [];
      setHyper(true);
      if (hyperTimer.current) clearTimeout(hyperTimer.current);
      hyperTimer.current = setTimeout(() => setHyper(false), HYPER_MS);
    }
  }, []);

  const mood: KapeMood = hyper
    ? "hyper"
    : level < 0.5
      ? "sleepy"
      : level <= LOW_AT
        ? "low"
        : "normal";

  const value = useMemo(() => ({ level, mood, refill }), [level, mood, refill]);

  return <KapeContext.Provider value={value}>{children}</KapeContext.Provider>;
}
