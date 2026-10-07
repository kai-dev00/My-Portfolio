"use client";

import { useState, type FormEvent } from "react";

const field =
  "min-h-11 w-full rounded-lg border border-line-strong bg-bg px-3 font-sans text-base text-fg placeholder:text-faint focus:border-accent focus:outline-none";
const label = "flex flex-col gap-1.5 font-mono text-xs text-muted";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string };

export function ContactForm({ recipient }: { recipient: string }) {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus({ state: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus({
          state: "error",
          message: json.error ?? "Something went wrong. Please try again.",
        });
        return;
      }
      form.reset();
      setStatus({ state: "sent" });
    } catch {
      setStatus({
        state: "error",
        message: "Network error. Check your connection and try again.",
      });
    }
  }

  const sending = status.state === "sending";

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 rounded-xl border border-line bg-surface p-6 md:p-8"
    >
      <div className="font-mono text-[13px] text-faint">
        $ send-message --to {recipient}
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={label}>
          --name
          <input
            type="text"
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Maria Santos"
            className={field}
          />
        </label>
        <label className={label}>
          --email
          <input
            type="email"
            name="email"
            required
            maxLength={254}
            autoComplete="email"
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
          required
          maxLength={5000}
          placeholder="Hi! I'd like to talk about a project."
          className={`${field} resize-y py-2.5`}
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={sending}
          className="min-h-11 cursor-pointer rounded-lg bg-accent px-5 text-[15px] font-medium text-bg hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? "Sending…" : "Send message ↵"}
        </button>
        <p role="status" aria-live="polite" className="font-mono text-sm">
          {status.state === "sent" && (
            <span className="text-accent">
              Message sent. Thanks, I&apos;ll reply soon.
            </span>
          )}
          {status.state === "error" && (
            <span className="text-warn">{status.message}</span>
          )}
        </p>
      </div>
    </form>
  );
}
