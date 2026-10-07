import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { categories, portfolio } from "@/data/portfolio";
import { isPlaceholder } from "@/lib/projects";

export const metadata: Metadata = {
  title: `Projects · ${portfolio.name}`,
  description: `Websites, web apps and mobile apps built by ${portfolio.name}.`,
};

export default function ProjectsPage() {
  const projects = portfolio.projects.filter((p) => !isPlaceholder(p));

  return (
    <main className="mx-auto w-full max-w-[1120px] flex-1 px-6 pb-24 md:px-10">
      <div className="flex flex-col gap-5 pb-12 pt-14 md:pt-20">
        <Link href="/" className="self-start font-mono text-sm">
          ← back home
        </Link>
        <p className="font-mono text-sm text-accent">{"// ls ./projects"}</p>
        <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl">
          All projects
        </h1>
        <p className="max-w-[640px] text-lg text-muted md:text-xl">
          Everything I&apos;ve built, grouped by what it runs on.
        </p>
        <nav
          aria-label="Project types"
          className="flex flex-wrap gap-2 pt-2 font-mono text-sm"
        >
          {categories.map((c) => {
            const count = projects.filter((p) => p.category === c.id).length;
            return (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line px-4 !text-muted transition-colors hover:border-accent hover:!text-accent"
              >
                {c.label}
                <span className="text-faint">{count}</span>
              </a>
            );
          })}
        </nav>
      </div>

      {categories.map((c) => {
        const items = projects.filter((p) => p.category === c.id);
        return (
          <section
            key={c.id}
            id={c.id}
            className="flex flex-col gap-6 border-t border-line py-12 md:py-16"
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
                {c.label}{" "}
                <span className="font-mono text-base font-normal text-faint">
                  {items.length}
                </span>
              </h2>
              <p className="text-muted">{c.blurb}</p>
            </div>
            {items.length > 0 ? (
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
                {items.map((p) => (
                  <ProjectCard key={p.slug} p={p} />
                ))}
              </div>
            ) : (
              <p className="rounded-xl border border-dashed border-line-strong p-6 font-mono text-sm text-faint">
                {"// nothing here yet"}
              </p>
            )}
          </section>
        );
      })}
    </main>
  );
}
