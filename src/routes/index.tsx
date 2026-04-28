import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Database, Gauge, Shield, Sparkles } from "lucide-react";
import portrait from "../assets/fernandes-portrait.jpg";
import heroBg from "../assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fernandes Reegan — Database Administrator & SQL Expert" },
      {
        name: "description",
        content:
          "DBA specialising in MSSQL, MySQL & PostgreSQL. Performance tuning, automation, and audit-ready database solutions.",
      },
    ],
  }),
  component: HomePage,
});

const HIGHLIGHTS = [
  { icon: Database, label: "MSSQL · MySQL · PostgreSQL" },
  { icon: Gauge, label: "Performance Tuning" },
  { icon: Shield, label: "Audit-Ready Automation" },
  { icon: Sparkles, label: "10+ Years Experience" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[oklch(0.10_0.04_260)] via-transparent to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 md:grid-cols-[1.2fr_1fr] md:items-center md:pb-32 md:pt-28">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              Available for new engagements
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Databases, tuned to <span className="bg-gradient-to-r from-sky-300 to-indigo-300 bg-clip-text text-transparent">peak performance.</span>
            </h1>

            <p className="mt-3 font-mono text-sm uppercase tracking-[0.18em] text-white/70">
              Database Administrator · SQL Expert · Performance Optimization
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
              I'm <span className="font-semibold text-white">Fernandes Reegan</span> — a DBA with over a
              decade of experience across MSSQL, MySQL, and PostgreSQL. I deliver efficient,
              audit-ready, and scalable database solutions that keep mission-critical systems fast and
              reliable.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-primary shadow-elegant transition-smooth hover:shadow-glow"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-smooth hover:bg-white/10"
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
              {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white/85 backdrop-blur"
                >
                  <Icon className="h-3.5 w-3.5 text-sky-300" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm animate-float">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-sky-400/30 to-indigo-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-elegant backdrop-blur">
              <img
                src={portrait}
                alt="Fernandes Reegan, Database Administrator"
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[oklch(0.10_0.04_260)/0.9] to-transparent p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-300">
                  uptime · 99.99%
                </div>
                <div className="mt-1 text-sm font-semibold text-white">
                  Always-on, always-tuned databases
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS STRIP */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            ["10+", "Years as DBA"],
            ["3", "Companies served"],
            ["3", "RDBMS mastered"],
            ["100%", "Audit-ready"],
          ].map(([stat, label]) => (
            <div key={label} className="bg-surface px-6 py-8 text-center">
              <div className="text-3xl font-bold text-gradient md:text-4xl">{stat}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO TEASER */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              — What I do
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              I make slow databases <span className="text-gradient">disappear</span>.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              From query optimisation to deadlock forensics and parallel restore pipelines — I focus on
              the boring details that let your applications stay fast under real-world load.
            </p>
            <div className="mt-7 flex gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:shadow-elegant"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-smooth hover:bg-muted"
              >
                About me
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="grid-bg absolute inset-0 rounded-2xl opacity-60" />
            <pre className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 font-mono text-xs leading-relaxed text-foreground shadow-soft md:text-[13px]">
{`-- Before: 4.7s
SELECT o.*, c.name
FROM orders o
JOIN customers c ON c.id = o.customer_id
WHERE o.created_at > NOW() - INTERVAL '30 day';

-- After: 38ms  ✨
CREATE INDEX CONCURRENTLY idx_orders_created
  ON orders (created_at DESC)
  INCLUDE (customer_id);`}
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}
