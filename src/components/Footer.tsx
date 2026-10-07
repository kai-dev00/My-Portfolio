import { portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[1120px] flex-wrap justify-between gap-2 border-t border-line px-6 md:px-10 py-6 font-mono text-[13px] text-faint">
      <span>
        © {new Date().getFullYear()} {portfolio.name} · v1.0.0
      </span>
      <span>built with &lt;3 and too much kape</span>
    </footer>
  );
}
