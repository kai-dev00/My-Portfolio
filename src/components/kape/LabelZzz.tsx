"use client";

import { FloatingZzz } from "./FloatingZzz";
import { useKape } from "./KapeProvider";

// Goes at the very end of a label or heading ("04 / stack — package.json", "All projects").
// When the mug is empty, little z's float off the end of the text. They're absolutely
// positioned, so the text never shifts when they appear.
// `scale` is relative to the text size (1.5 for small labels, ~1 for big headings).
export function LabelZzz({
  scale = 1.5,
  gap = "ml-2",
}: {
  scale?: number;
  gap?: string;
}) {
  const { mood } = useKape();
  if (mood !== "sleepy") return null;
  return (
    <span className="relative">
      <FloatingZzz
        scale={scale}
        className={`pointer-events-none absolute bottom-[0.55em] left-0 ${gap}`}
      />
    </span>
  );
}
