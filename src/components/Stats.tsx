import { portfolio } from "@/data/portfolio";
import { isPlaceholder } from "@/lib/projects";

// Whole years since a "YYYY-MM" date.
function yearsSince(start: string) {
  const [year, month] = start.split("-").map(Number);
  const now = new Date();
  let years = now.getFullYear() - year;
  if (now.getMonth() + 1 < month) years -= 1;
  return Math.max(years, 0);
}

export function Stats() {
  // Placeholder projects ("[Featured project]") don't count until you fill them in.
  const projectsBuilt = portfolio.projects.filter((p) => !isPlaceholder(p)).length;

  // Unique technologies across every category in the Stack section.
  const technologies = new Set(
    Object.values(portfolio.skills)
      .flat()
      .filter((t) => !t.startsWith("[")),
  ).size;

  const stats = [
    { value: String(yearsSince(portfolio.careerStart)), label: "years in web dev" },
    { value: String(projectsBuilt), label: "projects built" },
    { value: String(technologies), label: "technologies in my stack" },
    ...portfolio.stats,
  ];

  return (
    <section
      aria-label="At a glance"
      className="mb-16 md:mb-24 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-px overflow-hidden rounded-[10px] border border-line bg-line"
    >
      {stats.map((s) => (
        <div key={s.label} className="bg-bg p-5">
          <div className="text-[28px] font-semibold">{s.value}</div>
          <div className="font-mono text-xs text-muted">{s.label}</div>
        </div>
      ))}
    </section>
  );
}
