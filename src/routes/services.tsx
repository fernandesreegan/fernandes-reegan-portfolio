import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "../components/SectionHeader";
import { Database, Gauge, Lightbulb, Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Fernandes Reegan" },
      {
        name: "description",
        content:
          "Database management, performance tuning, and consulting for scalable, audit-friendly relational databases.",
      },
      { property: "og:title", content: "DBA Services — Fernandes Reegan" },
      {
        property: "og:description",
        content: "Database management, performance tuning, and architecture consulting.",
      },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Database,
    title: "Database Management",
    desc: "End-to-end administration of MSSQL, MySQL, and PostgreSQL — installations, upgrades, monitoring, backups, and 24×7 reliability.",
    points: ["High-availability setup", "Backup & recovery strategy", "Patching & upgrades"],
  },
  {
    icon: Gauge,
    title: "Performance Tuning",
    desc: "Query optimisation, index strategy, and system-level tuning to make slow workloads fast — without rewriting your application.",
    points: ["Query & index optimisation", "Deadlock & contention analysis", "Server & storage tuning"],
  },
  {
    icon: Lightbulb,
    title: "Consulting",
    desc: "Architecture and scalability guidance, audit readiness, and DBA mentorship for teams growing into serious data volumes.",
    points: ["Scalability & architecture", "Audit-friendly automation", "Team mentoring"],
  },
];

function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader
        eyebrow="Services"
        title={
          <>
            Three ways to <span className="text-gradient">work together.</span>
          </>
        }
        description="Whether you need a steady hand on production, a tuning sprint, or strategic guidance — I bring a decade of practical, audit-ready experience."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {SERVICES.map(({ icon: Icon, title, desc, points }) => (
          <div
            key={title}
            className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            <ul className="mt-5 space-y-2.5">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-gradient-hero p-8 text-primary-foreground md:p-12">
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-sky-300">
              — Focus areas
            </div>
            <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              Optimised queries. Effortless scale. Audit-friendly automation.
            </h3>
          </div>
          <div className="flex md:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-primary shadow-elegant transition-smooth hover:shadow-glow"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
