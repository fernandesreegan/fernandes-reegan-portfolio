import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "../components/SectionHeader";
import {
  Cloud, AlertTriangle, RefreshCw, ClipboardCheck, Shield, Activity, Layers, Users,
} from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Fernandes Reegan | DBA Lead Case Studies" },
      {
        name: "description",
        content:
          "Enterprise DBA case studies: SQL Server Always On, MySQL replication, AWS RDS tuning, TDE/RBAC rollout, SentryOne & PMM observability, DR automation.",
      },
      { property: "og:title", content: "DBA Projects — Fernandes Reegan" },
      {
        property: "og:description",
        content: "HA/DR, performance, security, cloud DBA and observability work.",
      },
    ],
  }),
  component: ProjectsPage,
});

const PROJECTS = [
  {
    icon: Shield,
    tag: "SQL Server · HA/DR",
    title: "Always On AG & DR Programme",
    desc: "Designed multi-replica SQL Server Always On Availability Groups with synchronous + asynchronous secondaries, automatic failover, listener routing, and quarterly DR failover drills validated against RTO/RPO targets.",
    impact: ["RTO < 5 min", "RPO < 1 min", "Zero failed DR drills"],
  },
  {
    icon: Cloud,
    tag: "AWS RDS · Performance",
    title: "AWS RDS Optimisation",
    desc: "Diagnosed sustained CPU saturation on large MySQL / MariaDB RDS instances. Reworked indexing strategy, query patterns and parameter groups; tightened CloudWatch alerting on critical metrics.",
    impact: ["~60% CPU reduction", "Stable peak-hour latency", "Right-sized instance class"],
  },
  {
    icon: AlertTriangle,
    tag: "SQL Server · Forensics",
    title: "Deadlock & Wait-Stats Forensics",
    desc: "Deep analysis of recurring deadlocks and index fragmentation on a high-write OLTP workload using Extended Events, deadlock graphs and wait-statistics review; redesigned hot indexes and isolation usage.",
    impact: ["Eliminated nightly deadlock storm", "Fragmentation < 5%", "Stable transactional throughput"],
  },
  {
    icon: RefreshCw,
    tag: "PostgreSQL · Automation",
    title: "Parallel Restore Automation",
    desc: "Built parallel-jobs pg_restore workflows and PowerShell/Bash orchestration to cut RTO during DR drills, with auditable run logs and verification queries at every step.",
    impact: ["Restore time ↓ ~70%", "Repeatable, auditable runs", "DR drill confidence ↑"],
  },
  {
    icon: Shield,
    tag: "Security · Compliance",
    title: "TDE, RBAC & Audit-Readiness Rollout",
    desc: "Implemented Transparent Data Encryption, Row-Level Security, RBAC, data masking and privilege auditing across SQL Server estates; aligned controls with internal and external audit requirements.",
    impact: ["Pass-first audit cycles", "100% TDE coverage", "Quarterly privilege reviews"],
  },
  {
    icon: Activity,
    tag: "Observability",
    title: "SentryOne + PMM + CloudWatch Stack",
    desc: "Standardised monitoring across SQL Server and MySQL estates using SentryOne, Percona Monitoring & Management and Amazon CloudWatch — with alerting playbooks, on-call rotations and incident dashboards.",
    impact: ["MTTR ↓ ~50%", "Proactive alerts > reactive tickets", "Unified DBA dashboards"],
  },
  {
    icon: Layers,
    tag: "AWS · Automation",
    title: "Lambda + Step Functions Data Workflows",
    desc: "Orchestrated database housekeeping, archival and cross-region copy workflows with AWS Lambda, Step Functions and DataSync — replacing fragile cron with auditable state machines.",
    impact: ["Zero missed jobs", "Cross-region sync automated", "Reduced operational toil"],
  },
  {
    icon: ClipboardCheck,
    tag: "Logistics · Integrations",
    title: "Inchcape Shipping Data Platform Support",
    desc: "Owned SQL Server / PostgreSQL database support for Optic, Centric, Unit-4 Financials and integration systems — resolving ~70% of integration incidents and clearing weekly country-level financial reconciliations.",
    impact: ["Weekly audit-clean books", "70% L2/L3 resolution at DBA layer", "No SLA breaches"],
  },
  {
    icon: Users,
    tag: "Leadership · Mentoring",
    title: "DBA Team Leadership & Runbooks",
    desc: "Built DBA on-call rotation, change/incident/problem governance, capacity planning cadences, and authored runbooks covering tuning, backups, failover and audit response — mentoring junior DBAs to on-call readiness.",
    impact: ["Junior DBA on-call ready in 90 days", "Documented runbooks", "Improved SLA compliance"],
  },
];

function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader
        eyebrow="Projects"
        title={
          <>
            Selected <span className="text-gradient">DBA case studies.</span>
          </>
        }
        description="Enterprise-grade work across SQL Server and MySQL — focused on measurable outcomes for performance, recoverability, security and observability."
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
