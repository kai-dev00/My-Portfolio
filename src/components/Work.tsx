import Link from "next/link";
import { portfolio, type Project } from "@/data/portfolio";
import { linkProps } from "@/lib/links";
import { ProjectCard } from "./ProjectCard";
import { SectionLabel } from "./SectionLabel";
import { TechChip } from "./TechIcon";

function FeaturedCard({ p }: { p: Project }) {
  return (
    <article className="grid overflow-hidden rounded-xl border border-line bg-surface ">
      <div className="flex flex-col gap-3.5 p-6 md:p-10">
        <div>
          <div className="flex flex-wrap items-baseline justify-between items-center gap-2 ">
            {p.category === "website" && p.websiteUrl ? (
              <a
                href={p.websiteUrl}
                {...linkProps(p.websiteUrl)}
                className="text-2xl font-medium hover:underline"
              >
                {p.title} ↗
              </a>
            ) : (
              <h2 className="text-2xl font-medium">{p.title}</h2>
            )}

            <span className="font-mono text-xs text-accent">
              ★ featured · {p.type}
            </span>
          </div>

          <p className="text-soft">{p.summary}</p>
        </div>
        {p.highlights && (
          <ul className="font-mono text-[13px] leading-[1.9] text-soft">
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
      <div className="grid grid-cols-1 auto-rows-fr gap-5 md:grid-cols-2">
        {rest.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
      <Link href="/projects" className="self-start font-mono text-sm">
        $ ls ./projects →
      </Link>
    </section>
  );
}
