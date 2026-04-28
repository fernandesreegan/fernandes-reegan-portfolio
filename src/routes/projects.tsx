import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "../components/SectionHeader";
import { Cloud, AlertTriangle, RefreshCw, ClipboardCheck } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Fernandes Reegan" },
      {
        name: "description",
        content:
          "Selected DBA projects: AWS RDS optimization, SQL deadlock forensics, PostgreSQL restore automation, and audit reporting.",
      },
      { property: "og:title", content: "DBA Projects — Fernandes Reegan" },
      {
        property: "og:description",
        content:
          "Real-world DBA work — performance, forensics, automation, and audit reporting.",
      },
    ],
  }),
  component: ProjectsPage,
});

const PROJECTS = [
  {
    icon: Cloud,
    tag: "Cloud · Performance",
    title: "AWS RDS Optimization",
    desc: "Diagnosed and resolved sustained CPU saturation on large MariaDB RDS instances. Reworked indexes, query patterns, and parameter groups to bring CPU under sustainable thresholds.",
    impact: ["~60% CPU reduction", "Stable peak-hour latency", "Lower instance class possible"],
  },
  {
    icon: AlertTriangle,
    tag: "MSSQL · Forensics",
    title: "SQL Deadlock Forensics",
    desc: "Deep analysis of recurring deadlocks and index fragmentation across a high-write OLTP workload — extended events, deadlock graph analysis, and targeted index redesign.",
    impact: ["Eliminated nightly deadlock storm", "Reduced fragmentation < 5%", "Stable transactional throughput"],
  },
  {
    icon: RefreshCw,
    tag: "PostgreSQL · Automation",
    title: "PostgreSQL Restore Automation",
    desc: "Built parallel restore workflows using pg_restore jobs and orchestrated scripts to dramatically cut RTO during DR drills, with audit logs at every step.",
    impact: ["Restore time ↓ ~70%", "Repeatable, auditable runs", "DR drill confidence ↑"],
  },
  {
    icon: ClipboardCheck,
    tag: "Reporting · Mentoring",
    title: "Audit Reporting & DBA Training",
    desc: "Delivered management-ready audit reports across MSSQL/PostgreSQL estates, plus structured training for junior DBAs covering tuning, backups, and incident response.",
    impact: ["Pass-first audit cycles", "Junior DBA on-call ready in 90 days", "Documented runbooks"],
  },
];

function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader
        eyebrow="Projects"
        title={
          <>
            Selected <span className="text-gradient">case studies.</span>
          </>
        }
        description="A snapshot of recent work — each focused on measurable outcomes for performance, recoverability, or compliance."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {PROJECTS.map(({ icon: Icon, tag, title, desc, impact }) => (
          <article
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />

            <div className="relative flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-soft">
                <Icon className="h-5 w-5" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {tag}
              </span>
            </div>

            <h3 className="relative mt-5 text-lg font-semibold tracking-tight">{title}</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>

            <div className="relative mt-5 flex flex-wrap gap-2">
              {impact.map((i) => (
                <span
                  key={i}
                  className="rounded-md bg-accent px-2.5 py-1 text-[11px] font-medium text-accent-foreground"
                >
                  {i}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
