// Three "z"s that drift up, grow and fade (animation lives in globals.css as .kape-z).
// Sizes are in em, so they scale with whatever text they sit next to; `scale` nudges that.
const ZS = [
  { size: 0.5, delay: "0s" },
  { size: 0.65, delay: "0.6s" },
  { size: 0.85, delay: "1.2s" },
];

export function FloatingZzz({
  scale = 1,
  className = "",
}: {
  scale?: number;
  className?: string;
}) {
  return (
    // Decorative: screen readers skip it.
    <span
      aria-hidden="true"
      className={`inline-flex items-end gap-[0.04em] font-mono font-normal text-soft ${className}`}
    >
      {ZS.map((z) => (
        <span
          key={z.delay}
          className="kape-z"
          style={{ fontSize: `${z.size * scale}em`, animationDelay: z.delay }}
        >
          z
        </span>
      ))}
    </span>
  );
}
