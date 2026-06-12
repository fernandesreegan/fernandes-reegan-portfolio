import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "../components/SectionHeader";
import {
  Database, Gauge, Activity, HardDriveDownload, Terminal, Search,
  Shield, Cloud, Users, LineChart,
} from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Fernandes Reegan | Senior SQL Server, MySQL & PostgreSQL DBA" },
      {
        name: "description",
        content:
          "Enterprise DBA skills across SQL Server, MySQL & PostgreSQL: Always On AG, failover clustering, replication, query tuning, TDE, RBAC, AWS RDS, Azure SQL, SentryOne, PMM, CloudWatch.",
      },
      { property: "og:title", content: "Skills — Senior SQL Server, MySQL & PostgreSQL DBA" },
      {
        property: "og:description",
        content: "SQL Server · MySQL · PostgreSQL · HA/DR · Cloud DBA · Security · Monitoring.",
      },
    ],
  }),
  component: SkillsPage,
});

const CORE = [
  { icon: Search, name: "Query Optimization & Index Tuning", level: 96, note: "Execution plans, wait stats, deadlock resolution" },
  { icon: Database, name: "SQL Server · MySQL · PostgreSQL Administration", level: 96, note: "Install · configure · patch · upgrade" },
  { icon: Shield, name: "HA/DR — Always On, FCI, Replication", level: 94, note: "RTO/RPO management, DR drills, failover validation" },
  { icon: Gauge, name: "Performance Engineering", level: 94, note: "T-SQL tuning, partitioning, statistics" },
  { icon: HardDriveDownload, name: "Backup & Recovery", level: 95, note: "PITR · parallel restore · log shipping" },
  { icon: Cloud, name: "Cloud DBA — AWS & Azure", level: 90, note: "RDS · Lambda · Step Functions · DataSync · Azure SQL" },
  { icon: Activity, name: "Monitoring & Observability", level: 92, note: "SentryOne · Percona PMM · CloudWatch · Grafana" },
  { icon: Terminal, name: "Automation & Scripting", level: 90, note: "T-SQL · PowerShell · Bash · PL/pgSQL" },
  { icon: Users, name: "DBA Team Leadership", level: 88, note: "Change · incident · problem · SLA management" },
  { icon: LineChart, name: "Capacity Planning & Schema Design", level: 88, note: "Sizing · partitioning · archival strategy" },
];

const GROUPS = [
  {
    title: "High Availability & Disaster Recovery",
    items: [
      "SQL Server Always On Availability Groups",
      "Failover Clustering (FCI)",
      "Database Mirroring",
      "Log Shipping",
      "MySQL Replication (Async / Semi-sync / GTID)",
      "PostgreSQL Streaming Replication · Logical Replication · Patroni HA",
      "DR Planning · DR Testing · Failover Validation",
      "RTO / RPO Management",
    ],
  },
  {
    title: "Security & Compliance",
    items: [
      "Transparent Data Encryption (TDE)",
      "Row-Level Security",
      "Role-Based Access Control (RBAC)",
      "User Privilege Auditing",
      "Data Masking",
      "Encryption at Rest · Encryption in Transit",
      "Audit Readiness (SOX · ISO · internal audits)",
    ],
  },
  {
    title: "Performance Engineering",
    items: [
      "Query Optimization · Index Tuning",
      "Execution Plan Analysis",
      "Deadlock Resolution",
      "Wait Statistics Analysis",
      "Performance Monitoring",
      "Database Health Checks",
    ],
  },
  {
    title: "Capacity Planning & Database Design",
    items: [
      "Schema Design · Data Modeling",
      "Capacity Planning · Storage Forecasting",
      "Database Sizing",
      "Table Partitioning",
      "Data Archival Strategy",
    ],
  },
  {
    title: "Cloud Database Administration",
    items: [
      "AWS RDS (SQL Server · MySQL · PostgreSQL)",
      "AWS Lambda · AWS Step Functions",
      "AWS DataSync",
      "Amazon CloudWatch",
      "Azure SQL Database",
    ],
  },
  {
    title: "Monitoring & Observability",
    items: [
      "SentryOne (SolarWinds SQL Sentry)",
      "Percona Monitoring & Management (PMM)",
      "Amazon CloudWatch",
      "SQL Server Monitoring · MySQL Monitoring",
      "Alerting & Incident Response",
    ],
  },
  {
    title: "Leadership & Operations",
    items: [
      "DBA Team Leadership",
      "Change Management · Release Support",
      "Incident & Problem Management",
      "Stakeholder Management",
      "SLA Compliance",
      "Root Cause Analysis",
    ],
  },
];

const STACK = [
  "SQL Server", "MySQL", "PostgreSQL", "MariaDB", "Always On AG", "FCI", "Log Shipping",
  "MySQL Replication", "TDE", "RBAC", "AWS RDS", "AWS Lambda", "AWS Step Functions",
  "AWS DataSync", "Amazon CloudWatch", "Azure SQL", "SentryOne", "Percona PMM", "Grafana",
  "T-SQL", "PL/pgSQL", "PowerShell", "Bash", "Linux", "Windows Server",
];

function SkillsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader
        eyebrow="Skills"
        title={
          <>
            Built for <span className="text-gradient">enterprise</span> SQL Server &amp; MySQL.
          </>
        }
        description="A focused, ATS-aligned toolkit refined over 13+ years of running mission-critical relational databases under real workloads."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {CORE.map(({ icon: Icon, name, level, note }) => (
          <div
            key={name}
            className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-smooth group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{name}</div>
                  <div className="text-xs text-muted-foreground">{note}</div>
                </div>
              </div>
              <div className="font-mono text-xs text-muted-foreground">{level}%</div>
            </div>
            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-gradient-primary transition-[width] duration-700"
                style={{ width: `${level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {GROUPS.map((g) => (
          <div key={g.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              {g.title}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-foreground/85">
              {g.items.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          — Tech stack
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {STACK.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground transition-smooth hover:border-primary/40 hover:bg-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
