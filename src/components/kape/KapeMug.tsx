import { useId } from "react";
import type { KapeMood } from "./KapeProvider";

const CUP = "M14 24H42V44a8 8 0 0 1-8 8H22a8 8 0 0 1-8-8Z";

// Outline and steam use the site's theme colors so the mug reads in light and dark.
export function KapeMug({
  level,
  mood,
  size = 34,
}: {
  level: number;
  mood: KapeMood;
  size?: number;
}) {
  // useId() can contain characters that are awkward inside url(#…)
  const clipId = `kape-cup-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

  const low = mood === "low" || mood === "sleepy";
  const hyper = mood === "hyper";
  // The coffee's top edge sits at y = 24 + (1 - level/100) * 28; we slide the rects by the
  // difference so the change can transition smoothly in every browser.
  const offset = (1 - level / 100) * 28;
  const steamOpacity = hyper ? 1 : Math.max(0, (level - 20) / 80);
  const slide = {
    transform: `translateY(${offset}px)`,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      focusable="false"
      // Empty mug beats like a heartbeat to say "click me".
      className={`shrink-0 ${mood === "sleepy" ? "kape-pump" : ""}`}
    >
      <defs>
        <clipPath id={clipId}>
          <path d={CUP} />
        </clipPath>
      </defs>

      <g
        className="stroke-muted transition-opacity duration-500"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{ opacity: steamOpacity }}
      >
        <path className="kape-steam" d="M22 18q-3-4 0-8" />
        <path
          className="kape-steam"
          style={{ animationDelay: "0.8s" }}
          d="M28 18q-3-4 0-8"
        />
        <path
          className="kape-steam"
          style={{ animationDelay: "1.6s" }}
          d="M34 18q-3-4 0-8"
        />
      </g>

      <g clipPath={`url(#${clipId})`}>
        <rect
          x="12"
          y="24"
          width="34"
          height="40"
          className={`transition-transform duration-[600ms] ease-out ${low ? "fill-coffee-low" : "fill-coffee"}`}
          style={slide}
        />
        <rect
          x="12"
          y="24"
          width="34"
          height="3"
          className={`transition-transform duration-[600ms] ease-out ${low ? "fill-crema-low" : "fill-crema"}`}
          style={slide}
        />
      </g>

      <g
        className={`transition-colors duration-300 ${hyper ? "stroke-warn" : "stroke-fg"}`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={CUP} />
        <path d="M42 30h4a6 6 0 0 1 0 12h-4" />
      </g>
    </svg>
  );
}
