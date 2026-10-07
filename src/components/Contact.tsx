import { portfolio } from "@/data/portfolio";
import { linkProps } from "@/lib/links";
import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { TbMail } from "react-icons/tb";
import { ContactForm } from "./ContactForm";
import { SectionLabel } from "./SectionLabel";

const linkClass = "inline-flex min-h-11 items-center gap-3";
// Keyed by the `label` of each entry in portfolio.social.
const socialIcons: Record<string, IconType> = {
  github: SiGithub,
  linkedin: FaLinkedin,
};

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

        {/* Posts to /api/contact (src/app/api/contact/route.ts). */}
        <ContactForm recipient={portfolio.name} />
      </div>
    </section>
  );
}
