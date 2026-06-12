import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "../components/SectionHeader";
import { Database, Gauge, Lightbulb, Check, ArrowRight, Shield, Cloud, Activity } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Fernandes Reegan | DBA Lead & Cloud DBA" },
      {
        name: "description",
        content:
          "Senior DBA services — SQL Server, MySQL & PostgreSQL administration, HA/DR, performance tuning, cloud DBA (AWS RDS, Aurora, Azure SQL), security, monitoring and DBA leadership.",
      },
      { property: "og:title", content: "DBA Services — Fernandes Reegan" },
      {
        property: "og:description",
        content: "Database admin, HA/DR, performance, cloud DBA, security and observability.",
      },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Database,
    title: "Database Administration",
    desc: "End-to-end SQL Server, MySQL and PostgreSQL administration — installs, upgrades, patching, backups, capacity planning and 24×7 reliability.",
    points: ["SQL Server · MySQL · PostgreSQL ownership", "Backup & recovery strategy", "Patching & upgrades"],
  },
  {
    icon: Shield,
    title: "High Availability & DR",
    desc: "Design and operation of Always On Availability Groups, Failover Clustering, Log Shipping, MySQL replication and PostgreSQL streaming / Patroni — with DR drills and RTO/RPO governance.",
    points: ["Always On AG · FCI · Mirroring", "MySQL & PostgreSQL replication topologies", "DR planning & failover validation"],
  },
  {
    icon: Gauge,
    title: "Performance Engineering",
    desc: "Query optimisation, index tuning, execution-plan analysis, deadlock resolution and wait-stats reviews — making slow workloads fast without app rewrites.",
    points: ["Query & index optimisation", "Deadlock & contention analysis", "Storage & server tuning"],
  },
  {
    icon: Cloud,
    title: "Cloud Database Administration",
    desc: "AWS RDS (SQL Server / MySQL / PostgreSQL), Azure SQL, AWS Lambda, Step Functions, DataSync and CloudWatch — cloud-native, automated and observable.",
    points: ["AWS RDS · Azure SQL", "Lambda · Step Functions · DataSync", "CloudWatch alerting"],
  },
  {
    icon: Activity,
    title: "Monitoring & Observability",
    desc: "Standardise SentryOne, Percona PMM and CloudWatch dashboards with alerting playbooks, on-call rotations and incident-response runbooks.",
    points: ["SentryOne · Percona PMM", "CloudWatch & Grafana", "Alerting & incident response"],
  },
  {
    icon: Lightbulb,
    title: "DBA Leadership & Consulting",
    desc: "Architecture and scalability guidance, audit readiness, security hardening (TDE, RBAC, RLS) and DBA team mentoring for organisations scaling into serious data volumes.",
    points: ["Scalability & architecture", "Security & audit readiness", "DBA team mentoring"],
  },
];

function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader
        eyebrow="Services"
        title={
          <>
            Six ways to <span className="text-gradient">work together.</span>
          </>
        }
        description="Whether you need a senior DBA on production, an HA/DR uplift, a cloud DBA migration, or strategic leadership — I bring 13+ years of enterprise, audit-ready experience."
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
              Always-on databases. Tuned queries. Audit-ready security.
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
