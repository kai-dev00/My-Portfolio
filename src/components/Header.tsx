import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

const links = ["about", "work", "experience", "contact"];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1120px] flex-wrap items-center justify-between gap-x-4 gap-y-1 px-6 py-3 md:px-10">
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 font-mono text-[15px] text-fg"
          >
            {/* Both render; globals.css hides the one that doesn't match the theme. */}
            <Image
              src="/logo-dark.png"
              alt=""
              width={40}
              height={40}
              className="logo-dark size-10 rounded-lg"
            />
            <Image
              src="/logo-light.png"
              alt=""
              width={40}
              height={40}
              className="logo-light size-10 rounded-lg"
            />
            <span>
              {portfolio.handle}
              <span className="text-accent">_</span>
            </span>
          </Link>
          {portfolio.openToWork && (
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted">
              <span className="size-[7px] rounded-full bg-accent" />
              open to work
            </span>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <nav
            aria-label="Main"
            className="flex flex-wrap gap-x-5 font-mono text-sm"
          >
            {links.map((l) => (
              <Link
                key={l}
                href={`/#${l}`}
                className="inline-flex min-h-11 items-center !text-muted hover:!text-accent"
              >
                {l}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
