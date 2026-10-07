import { portfolio } from "@/data/portfolio";
import { linkProps } from "@/lib/links";
import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { TbMail } from "react-icons/tb";
import { SectionLabel } from "./SectionLabel";

const field =
  "min-h-11 w-full rounded-lg border border-line-strong bg-bg px-3 font-sans text-base text-fg placeholder:text-faint focus:border-accent focus:outline-none";
const linkClass = "inline-flex min-h-11 items-center gap-3";
// Keyed by the `label` of each entry in portfolio.social.
const socialIcons: Record<string, IconType> = {
  github: SiGithub,
  linkedin: FaLinkedin,
};
const label ="flex flex-col gap-1.5 font-mono text-xs text-muted";

export function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col gap-10 border-t border-line pb-28 pt-16 md:pt-24"
    >
      <SectionLabel num="05" title="contact" />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
            Let&apos;s build something.
          </h2>
          <p className="max-w-[460px] text-lg text-soft">
            Open to full-time roles, freelance projects, or just a chat about
            apps. I usually reply within a day.
          </p>
          <div className="flex flex-col gap-1 font-mono text-sm">
            <a href={`mailto:${portfolio.email}`} className={linkClass}>
              <TbMail aria-hidden className="size-5 shrink-0" />
              {portfolio.email}
            </a>
            {portfolio.social.map((s) => {
              const Icon = socialIcons[s.label];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  {...linkProps(s.href)}
                  className={linkClass}
                >
                  {Icon && <Icon aria-hidden className="size-5 shrink-0" />}
                  {s.label} ↗
                </a>
              );
            })}
          </div>
        </div>

        {/* UI shell only: wire to a route handler / Formspree / Resend later. */}
        <form className="flex flex-col gap-4 rounded-xl border border-line bg-surface p-6 md:p-8">
          <div className="font-mono text-[13px] text-faint">
            $ send-message --to {portfolio.name}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={label}>
              --name
              <input
                type="text"
                name="name"
                placeholder="Maria Santos"
                className={field}
              />
            </label>
            <label className={label}>
              --email
              <input
                type="email"
                name="email"
                placeholder="maria@company.com"
                className={field}
              />
            </label>
          </div>
          <label className={label}>
            --message
            <textarea
              name="message"
              rows={6}
              placeholder="Hi! I'd like to talk about a project."
              className={`${field} resize-y py-2.5`}
            />
          </label>
          <button
            type="button"
            className="min-h-11 cursor-pointer self-start rounded-lg bg-accent px-5 text-[15px] font-medium text-bg hover:opacity-90"
          >
            Send message ↵
          </button>
        </form>
      </div>
    </section>
  );
}
