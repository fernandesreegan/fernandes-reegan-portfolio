import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Briefcase, Heart, ArrowRight, ShieldCheck } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Fernandes Reegan | Database Administrator Lead" },
      {
        name: "description",
        content:
          "Database Administrator Lead with 13+ years across SQL Server, MySQL & PostgreSQL — HA/DR, performance tuning, cloud DBA, security and 24×7 operations.",
      },
      { property: "og:title", content: "About Fernandes Reegan — DBA Lead" },
      {
        property: "og:description",
        content: "13+ years owning enterprise SQL Server, MySQL & PostgreSQL estates.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeader
        eyebrow="About"
        title={
          <>
            13+ years of <span className="text-gradient">enterprise DBA leadership.</span>
          </>
        }
        description="Database Administrator Lead specialising in SQL Server, MySQL and PostgreSQL — performance engineering, high availability and disaster recovery, cloud database administration, security &amp; compliance, monitoring, automation, and operational excellence."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
            <Briefcase className="h-5 w-5" />
          </div>
          <h3 className="mt-5 text-base font-semibold">Career</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Since <span className="font-medium text-foreground">May 2013</span>. 13+ years across
            three enterprises — currently <span className="font-medium text-foreground">DBA Lead</span>{" "}
            at vThink Global Technologies.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h3 className="mt-5 text-base font-semibold">Focus</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            SQL Server Always On AG, MySQL replication, PostgreSQL streaming &amp; Patroni, DR planning,
            query &amp; index tuning, TDE, RBAC, AWS RDS / Aurora, Azure SQL, SentryOne, PMM, CloudWatch.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </div>
          <h3 className="mt-5 text-base font-semibold">Education</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            MCA, St. Joseph&apos;s College, Trichy (2012, 75%). B.Sc Mathematics, Periyar EVR
            College (2009, 86%).
          </p>
        </div>
      </div>

      <div className="mt-14 rounded-2xl border border-border bg-surface p-8 md:p-10">
        <p className="text-lg leading-relaxed text-foreground md:text-xl">
          “A great DBA is invisible. When Always On groups stay synchronized, queries return in
          milliseconds, restores complete within RTO, and audits pass on the first cycle —
          engineering teams ship faster and the business sleeps better.”
        </p>
        <div className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          — Fernandes Reegan · DBA Lead
        </div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em]">Specialisations</h3>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Database Performance Engineering &amp; Query Tuning</li>
            <li>• High Availability &amp; Disaster Recovery (Always On, FCI, Log Shipping, MySQL Replication, PostgreSQL Streaming / Patroni)</li>
            <li>• Cloud DBA — AWS RDS, Lambda, Step Functions, DataSync, CloudWatch, Azure SQL</li>
            <li>• Database Security — TDE, RBAC, Row-Level Security, Audit Readiness</li>
            <li>• Monitoring &amp; Observability — SentryOne, Percona PMM, CloudWatch, Grafana</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em]">Certifications</h3>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Microsoft Azure Fundamentals (AZ-900)</li>
            <li>• IBM SkillsBuild — Machine Learning &amp; Deep Learning</li>
            <li>• IBM SkillsBuild — Natural Language Processing &amp; Computer Vision</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          to="/skills"
          className="group inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:shadow-elegant"
        >
          Explore my DBA skill stack{" "}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
