import type { Project } from "@/data/portfolio";
import { linkProps } from "@/lib/links";
import { TechChip } from "./TechIcon";

export function ProjectCard({ p }: { p: Project }) {
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
      <div className="flex flex-wrap gap-2">
        {p.stack.map((s, i) => (
          <TechChip key={`${s}-${i}`} name={s} />
        ))}
      </div>
      {p.links.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-5 font-mono text-sm">
          {p.links.map((l) => (
            <a key={l.label} href={l.href} {...linkProps(l.href)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
