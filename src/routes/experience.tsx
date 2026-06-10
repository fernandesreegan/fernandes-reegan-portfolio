import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "../components/SectionHeader";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Fernandes Reegan | 13+ Years DBA" },
      {
        name: "description",
        content:
          "13+ years of Database Administration across Unipro, Hexaware and vThink — SQL Server, MySQL, HA/DR, cloud DBA, performance tuning and team leadership.",
      },
      { property: "og:title", content: "Experience — Fernandes Reegan, DBA Lead" },
      {
        property: "og:description",
        content: "Database Administrator Lead with 13+ years across SQL Server & MySQL.",
      },
    ],
  }),
  component: ExperiencePage,
});

const TIMELINE = [
  {
    period: "Jul 2023 – Present",
    role: "Database Administrator Lead",
    designation: "Official designation: Database Administrator Lead",
    org: "vThink Global Technologies",
    desc: "Leading enterprise SQL Server and MySQL operations across mission-critical workloads — owning HA/DR strategy, performance engineering, cloud DBA initiatives, security, and 24×7 production reliability.",
    points: [
      "Architect and operate SQL Server Always On Availability Groups and MySQL replication topologies with quarterly DR failover drills, validating RTO/RPO commitments.",
      "Lead query optimization, index tuning, execution-plan analysis, deadlock resolution and wait-statistics reviews across high-throughput OLTP workloads.",
      "Drive cloud database administration on AWS RDS (SQL Server / MySQL), AWS Lambda, Step Functions and DataSync, with Amazon CloudWatch observability and automated alerting.",
      "Implement enterprise security controls — TDE, Row-Level Security, RBAC, user privilege auditing, data masking, encryption at rest and in transit — for audit-ready compliance.",
      "Standardise monitoring with SentryOne and Percona Monitoring & Management (PMM); own change, incident, problem and release management with SLA reporting to stakeholders.",
      "Mentor DBA team members, run RCA reviews, and harden runbooks for capacity planning, partitioning and data archival strategy.",
    ],
  },
  {
    period: "Jan 2020 – May 2023 · 3y 4m",
    role: "Database Administrator",
    designation: "Official designation: Deputy Tech. Specialist",
    org: "Hexaware Technologies Ltd",
    desc: "Owned SQL Server and PostgreSQL administration for Inchcape Shipping Services — integrations, financial reconciliation, performance tuning and AWS-based data flows.",
    points: [
      "Administered SQL Server 2012/2016 and PostgreSQL estates supporting Optic, Centric, Unit-4 Financials, Ships, Cars, Packers, CYMS and integration platforms.",
      "Tuned T-SQL stored procedures, complex joins and execution plans; rebuilt indexing strategy and resolved long-running queries across high-write OLTP modules.",
      "Operated AWS S3, Amazon CloudWatch and Grafana for log/payload analysis, alerting and integration health monitoring across cross-region data flows.",
      "Delivered weekly financial reconciliation (country-level balance clearing) with auditable data fixes, root-cause analysis and stakeholder reporting.",
      "Resolved ~70% of integration incidents at L2/L3 level; led ITSM (ZOHO) queue, change tickets and major-incident bridges without SLA breach.",
      "Documented runbooks, on-call procedures and database health checks; mentored junior engineers on SQL profiling and data-fix governance.",
    ],
  },
  {
    period: "May 2013 – Jan 2020 · 6y 8m",
    role: "Database Administrator",
    designation: "Official designation: Application Support / Implementation Lead",
    org: "Unipro Tech Solutions Pvt Ltd, Chennai",
    desc: "DBA-focused role across EnterpriserV8, RetailPosV8 and RetailPos.FB — SQL Server installation, configuration, migrations, performance tuning, backup automation and client-site DBA support.",
    points: [
      "Installed, configured and administered SQL Server 2008R2 / 2012 / 2014 across HQ and outlet environments for retail, F&B and logistics customers.",
      "Conducted performance tuning using SQL Profiler, Extended Events and Windows Performance Monitor; optimised stored procedures, functions, views and triggers.",
      "Owned database consolidation and data migrations between SQL Server instances using Import/Export wizard, BCP, and custom T-SQL ETL.",
      "Designed automated backup, retention and database purging jobs; monitored database size, disk capacity and growth in production and client environments.",
      "Engaged customers on requirement gathering — DFDs, ER diagrams and schema design — and supported functional, integration and UAT testing.",
      "Provided 24×7 on-call production DBA support, root-cause analysis and management-ready status reports.",
    ],
  },
];

function ExperiencePage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeader
        eyebrow="Experience"
        title={
          <>
            13+ years, three enterprises, <span className="text-gradient">one craft.</span>
          </>
        }
        description="My full career has been Database Administration. Official designations are retained for employment verification — the work has consistently centred on SQL Server, MySQL and PostgreSQL administration, performance, HA/DR and operations."
      />

      <ol className="relative mt-14 space-y-12 border-l-2 border-border pl-8 md:pl-10">
        {TIMELINE.map((item, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[42px] top-1 flex h-6 w-6 items-center justify-center md:-left-[50px]">
              <span className="absolute h-6 w-6 animate-ping rounded-full bg-primary/20" />
              <span className="relative h-3 w-3 rounded-full bg-gradient-primary shadow-soft ring-4 ring-background" />
            </span>

            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              {item.period}
            </div>
            <h3 className="mt-1.5 text-lg font-semibold">{item.role}</h3>
            <div className="text-sm font-medium text-muted-foreground">{item.org}</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/80">
              {item.designation}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">{item.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              {item.points.map((p, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
