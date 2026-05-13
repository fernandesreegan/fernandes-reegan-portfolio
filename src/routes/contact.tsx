import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Send, MapPin, Clock, Loader2 } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { sendContactEmail } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Fernandes Reegan" },
      {
        name: "description",
        content:
          "Get in touch with Fernandes Reegan, Database Administrator. Email fernandesreegan@gmail.com.",
      },
      { property: "og:title", content: "Contact Fernandes Reegan" },
      {
        property: "og:description",
        content: "Let's optimize your database performance — get in touch.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(1000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        if (issue.path[0]) errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    setErrorMsg(null);
    try {
      await sendContactEmail({ data: parsed.data });
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader
        eyebrow="Contact"
        title={
          <>
            Let's <span className="text-gradient">optimise</span> your database performance.
          </>
        }
        description="Open to consulting engagements, full-time roles, and complex tuning projects. I usually reply within one business day."
      />

      <div className="mt-14 grid gap-8 md:grid-cols-[1fr_1.3fr]">
        {/* Info card */}
        <div className="flex flex-col gap-4">
          <button
            type="button"
            onClick={() => {
              navigator.clipboard?.writeText("fernandesreegan@gmail.com");
            }}
            className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 text-left shadow-soft transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            title="Click to copy email address"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Email
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground group-hover:text-primary">
                fernandesreegan@gmail.com
              </div>
            </div>
          </a>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Response time
              </div>
              <div className="mt-1 text-sm font-semibold">Within 1 business day</div>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Availability
              </div>
              <div className="mt-1 text-sm font-semibold">Remote · Hybrid · On-site</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" error={errors.name}>
              <input
                id="name"
                name="name"
                type="text"
                maxLength={100}
                required
                className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
                placeholder="Jane Doe"
              />
            </Field>
            <Field label="Email" name="email" error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                maxLength={255}
                required
                className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
                placeholder="jane@company.com"
              />
            </Field>
          </div>

          <Field label="Message" name="message" error={errors.message} className="mt-5">
            <textarea
              id="message"
              name="message"
              rows={6}
              maxLength={1000}
              required
              className="w-full resize-y rounded-md border border-input bg-background px-3.5 py-2.5 text-sm transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
              placeholder="Tell me a bit about your databases, current pain points, and what success looks like…"
            />
          </Field>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:shadow-elegant disabled:opacity-60 sm:w-auto"
          >
            {status === "sending" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "sent" && (
            <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
              Thanks — your message has been sent. I'll get back to you within one business day.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-destructive">
              Couldn't send your message{errorMsg ? ` (${errorMsg})` : ""}. Please email{" "}
              <a className="font-medium text-primary" href="mailto:fernandesreegan@gmail.com">
                fernandesreegan@gmail.com
              </a>{" "}
              directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  children,
  error,
  className,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
