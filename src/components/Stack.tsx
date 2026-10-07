import { portfolio } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";
import { TechChip } from "./TechIcon";

export function Stack() {
  return (
    <section
      id="skills"
      className="flex flex-col gap-6 border-t border-line py-16 md:py-24"
    >
      <SectionLabel num="04" title="stack" hint="package.json" />
      <div className="grid gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-2">
        {Object.entries(portfolio.skills).map(([category, items]) => (
          <div key={category} className="flex flex-col gap-3 bg-surface p-5">
            <div className="font-mono text-xs text-accent">{category}</div>
            <div className="flex flex-wrap gap-2">
              {items.map((item, i) => (
                <TechChip key={`${item}-${i}`} name={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
