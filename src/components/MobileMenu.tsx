"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { TbMenu2, TbX } from "react-icons/tb";

// Phone-only nav: a button in the header that opens a full-width panel below it.
export function MobileMenu({
  links,
  openToWork,
}: {
  links: string[];
  openToWork: boolean;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex size-11 cursor-pointer items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent"
      >
        {open ? (
          <TbX aria-hidden className="size-5" />
        ) : (
          <TbMenu2 aria-hidden className="size-5" />
        )}
      </button>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full flex flex-col border-b border-line bg-bg px-6 pb-4 pt-2 font-mono text-base shadow-lg"
        >
          {links.map((l) => (
            <Link
              key={l}
              href={`/#${l}`}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-b border-line !text-fg last:border-b-0 hover:!text-accent"
            >
              {l}
            </Link>
          ))}
          {openToWork && (
            <span className="mt-3 inline-flex items-center gap-2 self-start rounded-full border border-line px-2.5 py-1 text-xs text-muted">
              <span className="size-[7px] rounded-full bg-accent" />
              open to work
            </span>
          )}
        </nav>
      )}
    </div>
  );
}
