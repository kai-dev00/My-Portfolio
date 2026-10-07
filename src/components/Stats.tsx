import { portfolio } from "@/data/portfolio";

export function Stats() {
  return (
    <section
      aria-label="At a glance"
      className="mb-16 md:mb-24 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-px overflow-hidden rounded-[10px] border border-line bg-line"
    >
      {portfolio.stats.map((s) => (
        <div key={s.label} className="bg-bg p-5">
          <div className="text-[28px] font-semibold">{s.value}</div>
          <div className="font-mono text-xs text-muted">{s.label}</div>
        </div>
      ))}
    </section>
  );
}
