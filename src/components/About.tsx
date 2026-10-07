import { portfolio } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

export function About() {
  const [lead, ...rest] = portfolio.about;

  return (
    <section
      id="about"
      className="flex flex-col gap-6 border-t border-line py-16 md:py-24"
    >
      <SectionLabel num="01" title="about" />
      <div className="flex flex-wrap items-start gap-7">
        <div className="flex size-[140px] flex-none items-center justify-center rounded-xl border border-line bg-surface-2 font-mono text-xs text-faint">
          [photo]
        </div>
        <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-3.5">
          <p className="text-lg">{lead}</p>
          {rest.map((t, i) => (
            <p key={`${t}-${i}`} className="text-soft">
              {t}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
