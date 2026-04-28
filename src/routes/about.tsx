import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Briefcase, Heart, ArrowRight } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Fernandes Reegan" },
      {
        name: "description",
        content:
          "Background, education, and journey of Fernandes Reegan — a Database Administrator with 10+ years optimizing relational databases.",
      },
      { property: "og:title", content: "About Fernandes Reegan" },
      {
        property: "og:description",
        content: "10+ years as a DBA. B.Sc Mathematics, MCA from St. Joseph's College.",
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
            A decade of <span className="text-gradient">data discipline.</span>
          </>
        }
        description="I've spent the last 10+ years living inside relational databases — tuning queries, taming deadlocks, and building automation that holds up under audit."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
            <Briefcase className="h-5 w-5" />
          </div>
          <h3 className="mt-5 text-base font-semibold">Career</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Started <span className="font-medium text-foreground">May 14, 2013</span>. 10+ years across
            three organizations, currently serving in my third.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </div>
          <h3 className="mt-5 text-base font-semibold">Education</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            B.Sc Mathematics &amp; MCA from{" "}
            <span className="font-medium text-foreground">St. Joseph's College</span> (Graduated 2012).
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
            <Heart className="h-5 w-5" />
          </div>
          <h3 className="mt-5 text-base font-semibold">Passion</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Database optimisation, reliability engineering, and constant learning across new RDBMS
            features and cloud-native data platforms.
          </p>
        </div>
      </div>

      <div className="mt-14 rounded-2xl border border-border bg-surface p-8 md:p-10">
        <p className="text-lg leading-relaxed text-foreground md:text-xl">
          “I believe a great DBA is invisible. When databases hum quietly in the background, teams
          ship faster, customers stay happy, and finance teams get clean audit reports without a
          single late-night call.”
        </p>
        <div className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          — Fernandes Reegan
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          to="/skills"
          className="group inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:shadow-elegant"
        >
          See my skills <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
