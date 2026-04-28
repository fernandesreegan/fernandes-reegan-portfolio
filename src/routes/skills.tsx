import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "../components/SectionHeader";
import {
  Database, Gauge, Activity, HardDriveDownload, Terminal, Search,
} from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Fernandes Reegan" },
      {
        name: "description",
        content:
          "Core DBA skills: SQL query optimization, performance tuning, monitoring, backup & recovery, automation across MSSQL, MySQL and PostgreSQL.",
      },
      { property: "og:title", content: "DBA Skills — Fernandes Reegan" },
      {
        property: "og:description",
        content: "MSSQL · MySQL · PostgreSQL · Tuning · Automation · Backup & Recovery.",
      },
    ],
  }),
  component: SkillsPage,
});

const SKILLS = [
  { icon: Search, name: "SQL Query Optimization", level: 95, note: "Execution plans, indexing strategy" },
  { icon: Database, name: "Database Administration", level: 95, note: "MSSQL · MySQL · PostgreSQL" },
  { icon: Gauge, name: "Performance Tuning", level: 92, note: "Latch, lock & wait analysis" },
  { icon: Activity, name: "Monitoring & Maintenance", level: 90, note: "Proactive health checks" },
  { icon: HardDriveDownload, name: "Backup & Recovery", level: 93, note: "PITR · parallel restore" },
  { icon: Terminal, name: "Automation & Scripting", level: 88, note: "Bash · PowerShell · T-SQL · PL/pgSQL" },
];

const STACK = ["MSSQL", "MySQL", "MariaDB", "PostgreSQL", "AWS RDS", "Linux", "PowerShell", "Bash", "T-SQL", "PL/pgSQL", "pg_cron", "Grafana"];

function SkillsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader
        eyebrow="Skills"
        title={
          <>
            Built for <span className="text-gradient">large-scale</span> relational systems.
          </>
        }
        description="A focused toolkit refined over a decade of running production databases under real workloads."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {SKILLS.map(({ icon: Icon, name, level, note }) => (
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
