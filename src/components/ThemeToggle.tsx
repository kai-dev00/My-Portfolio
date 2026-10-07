"use client";

import { TbMoon, TbSun } from "react-icons/tb";

export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage blocked: the choice just won't persist
    }
  };

  // Both icons are rendered; CSS (globals.css) hides the wrong one, so there is
  // no state to hydrate and no flash.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
      className="inline-flex size-11 cursor-pointer items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent"
    >
      <TbSun aria-hidden className="icon-to-light size-5" />
      <TbMoon aria-hidden className="icon-to-dark size-5" />
    </button>
  );
}
