import { portfolio } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="flex flex-col gap-5 pb-20 pt-20 md:pt-32 md:pb-28">
      <p className="font-mono text-sm text-accent">{"// hello, world"}</p>
      <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-[-0.03em] ">
        {portfolio.name}
        <span className="cursor font-normal text-accent">|</span>
      </h1>
      <p className="max-w-[680px] text-xl md:text-2xl text-muted">{portfolio.tagline}</p>
      <div className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[13px] text-muted">
        <span>
          <span className="text-accent">loc</span> {portfolio.location}
        </span>
        <span>
          <span className="text-accent">now</span> {portfolio.now}
        </span>
      </div>
      <div className="mt-3 flex flex-wrap gap-3">
        <a
          href="#work"
          className="inline-flex min-h-11 items-center rounded-lg bg-accent px-5 text-[15px] font-medium !text-bg hover:opacity-90"
        >
          View my work
        </a>
        <a
          href={portfolio.resumeHref}
          className="inline-flex min-h-11 items-center rounded-lg border border-line-strong px-5 text-[15px] !text-fg hover:border-accent"
        >
          Download resume
        </a>
      </div>
    </section>
  );
}
