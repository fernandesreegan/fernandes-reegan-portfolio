import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "../components/SectionHeader";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Fernandes Reegan" },
      {
        name: "description",
        content:
          "10+ years of DBA experience across three organizations — growth from junior DBA to senior database specialist.",
      },
      { property: "og:title", content: "Experience — Fernandes Reegan" },
      {
        property: "og:description",
        content: "A decade of DBA work across MSSQL, MySQL, and PostgreSQL.",
      },
    ],
  }),
  component: ExperiencePage,
});

const TIMELINE = [
  {
    period: "Present",
    role: "Senior Database Administrator",
    org: "Third Organization",
    desc: "Leading database performance, automation, and audit-readiness across mission-critical MSSQL & PostgreSQL workloads. Mentoring junior DBAs and owning DR strategy.",
  },
  {
    period: "Mid-career",
    role: "Database Administrator",
    org: "Second Organization",
    desc: "Owned tuning programs across MSSQL and MySQL — reduced query latencies, rebuilt indexing strategy, and rolled out monitoring & alerting standards.",
  },
  {
    period: "May 14, 2013",
    role: "Junior Database Administrator",
    org: "First Organization",
    desc: "Started my DBA journey — learning production operations, backups, query analysis, and the discipline of running databases that people depend on.",
  },
];

function ExperiencePage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeader
        eyebrow="Experience"
        title={
          <>
            Ten years, three companies, <span className="text-gradient">one craft.</span>
          </>
        }
        description="Each role expanded the scope — from operating databases reliably to architecting systems that scale and pass audits without drama."
      />

      <ol className="relative mt-14 space-y-10 border-l-2 border-border pl-8 md:pl-10">
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
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">{item.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
