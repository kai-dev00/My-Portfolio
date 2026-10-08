import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { KapeMeter } from "./kape/KapeMeter";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

const links = ["about", "work", "experience", "contact"];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-4 px-6 py-3 md:px-10">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-2.5 font-mono text-[15px] text-fg"
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
            <span className="hidden min-[380px]:inline">
              {portfolio.handle}
              <span className="text-accent">_</span>
            </span>
          </Link>
          <KapeMeter />
          {portfolio.openToWork && (
            <span className="hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted min-[1100px]:inline-flex">
              <span className="size-[7px] rounded-full bg-accent" />
              open to work
            </span>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-2 md:gap-5">
          <nav
            aria-label="Main"
            className="hidden gap-x-5 font-mono text-sm md:flex"
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
          <MobileMenu links={links} openToWork={portfolio.openToWork} />
        </div>
      </div>
    </header>
  );
}