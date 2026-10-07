"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { portfolio } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";
import { TechChip } from "./TechIcon";

export function Experience() {
  const jobs = portfolio.experience;
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (i: number) => {
    const next = (i + jobs.length) % jobs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  // Arrow keys move between tabs (vertical on desktop, horizontal on mobile).
  const onKeyDown = (e: KeyboardEvent, i: number) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      select(i + 1);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      select(i - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      select(0);
    } else if (e.key === "End") {
      e.preventDefault();
      select(jobs.length - 1);
    }
  };

  const job = jobs[active];

  return (
    <section
      id="experience"
      className="flex flex-col gap-10 border-t border-line py-16 md:py-24"
    >
      <SectionLabel num="03" title="experience" hint="git log --oneline" />

      <div className="grid gap-6 md:grid-cols-[240px_1fr] md:gap-10">
        <div
          role="tablist"
          aria-label="Experience"
          aria-orientation="vertical"
          className="-mx-6 flex overflow-x-auto px-6 md:mx-0 md:flex-col md:overflow-visible md:px-0"
        >
          {jobs.map((j, i) => {
            const selected = i === active;
            return (
              <button
                key={j.hash}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`exp-tab-${i}`}
                aria-selected={selected}
                aria-controls={`exp-panel-${i}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`flex min-h-11 shrink-0 cursor-pointer flex-col items-start gap-0.5 border-b-2 px-4 py-3 text-left transition-colors md:border-b-0 md:border-l-2 ${
                  selected
                    ? "border-accent bg-surface text-fg"
                    : "border-line text-muted hover:bg-surface/60 hover:text-fg"
                }`}
              >
                <span className="whitespace-nowrap text-[15px] font-medium">
                  {j.org}
                </span>
                <span className="whitespace-nowrap font-mono text-xs text-faint">
                  {j.period}
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`exp-panel-${active}`}
          aria-labelledby={`exp-tab-${active}`}
          tabIndex={0}
          className="flex flex-col gap-4 rounded-xl border border-line bg-surface p-6 md:p-8"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-xl font-medium md:text-2xl">
              {job.role} <span className="text-accent">@</span> {job.org}
            </h3>
            <span className="font-mono text-xs text-muted">
              <span className="text-warn">{job.hash}</span>
              {job.current && <span className="text-accent"> · HEAD</span>}
            </span>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
            <span>{job.period}</span>
            {job.location && <span>{job.location}</span>}
            {job.type && <span className="text-faint">{job.type}</span>}
          </div>

          <p className="font-mono text-[13px] text-accent">{job.commit}</p>

          {job.highlights && (
            <ul className="flex flex-col gap-2 text-[15px] text-soft">
              {job.highlights.map((h, i) => (
                <li key={`${h}-${i}`} className="flex gap-2.5">
                  <span aria-hidden className="font-mono text-accent">
                    ›
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          )}

          {job.stack && (
            <div className="flex flex-wrap gap-2 pt-2">
              {job.stack.map((t, i) => (
                <TechChip key={`${t}-${i}`} name={t} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
