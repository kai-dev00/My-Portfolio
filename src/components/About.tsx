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
      <div className="flex max-w-[760px] flex-col gap-4">
        <p className="text-xl md:text-2xl">{lead}</p>
        {rest.map((t, i) => (
          <p key={`${t}-${i}`} className="text-lg text-soft">
            {t}
          </p>
        ))}
      </div>
    </section>
  );
}
