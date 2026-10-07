import { portfolio, type Project } from "@/data/portfolio";
import { linkProps } from "@/lib/links";
import { SectionLabel } from "./SectionLabel";
import { TechChip } from "./TechIcon";

function FeaturedCard({ p }: { p: Project }) {
  return (
    <article className="grid overflow-hidden rounded-xl border border-line bg-surface md:grid-cols-2">
      <div className="flex aspect-[16/8] items-center justify-center border-b border-line md:aspect-auto md:border-b-0 md:border-r bg-surface-2 font-mono text-[13px] text-faint">
        [app screenshots / phone mockups]
      </div>
      <div className="flex flex-col gap-3.5 p-6 md:p-10">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-2xl font-medium">{p.title}</h2>
          <span className="font-mono text-xs text-accent">
            ★ featured · {p.type}
          </span>
        </div>
        <p className="text-soft">{p.summary}</p>
        {p.highlights && (
          <ul className="font-mono text-[13px] leading-[1.9] text-soft">
            <li className="text-faint">{"// what I did"}</li>
            {p.highlights.map((h, i) => (
              <li key={`${h}-${i}`}>
                <span className="text-accent">›</span> {h}
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-2">
          {p.stack.map((s, i) => (
            <TechChip key={`${s}-${i}`} name={s} />
          ))}
        </div>
        <div className="flex flex-wrap gap-5 pt-1 font-mono text-sm">
          {p.links.map((l) => (
            <a key={l.label} href={l.href} {...linkProps(l.href)}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function SmallCard({ p }: { p: Project }) {
  return (
    <article className="flex flex-col gap-3 rounded-xl border border-line bg-surface p-[22px]">
      <div className="flex justify-between gap-2 font-mono text-xs text-muted">
        <span>{p.type}</span>
        {p.status === "in-progress" ? (
          <span className="text-warn">● in progress</span>
        ) : (
          <span>{p.year}</span>
        )}
      </div>
      <h3 className="text-xl font-medium">{p.title}</h3>
      <p className="text-[15px] text-soft">{p.summary}</p>
      <p className="font-mono text-xs text-accent">{p.stack.join(" · ")}</p>
      <div className="mt-auto flex flex-wrap gap-5 font-mono text-sm">
        {p.links.map((l) => (
          <a key={l.label} href={l.href} {...linkProps(l.href)}>
            {l.label}
          </a>
        ))}
      </div>
    </article>
  );
}

export function Work() {
  const featured = portfolio.projects.find((p) => p.status === "featured");
  const rest = portfolio.projects.filter((p) => p !== featured);

  return (
    <section
      id="work"
      className="flex flex-col gap-7 border-t border-line py-16 md:py-24"
    >
      <SectionLabel num="02" title="selected work" />
      {featured && <FeaturedCard p={featured} />}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
        {rest.map((p) => (
          <SmallCard key={p.slug} p={p} />
        ))}
      </div>
      <a href="#" className="self-start font-mono text-sm">
        $ ls ./all-projects →
      </a>
    </section>
  );
}
