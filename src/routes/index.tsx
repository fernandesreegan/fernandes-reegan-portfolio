import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Database,
  Gauge,
  Shield,
  Sparkles,
  Download,
  Activity,
  CheckCircle2,
} from "lucide-react";
const portrait = "https://i.postimg.cc/BQT4LxDY/Reegan-photo-Picsart-Ai-Image-Enhancer.jpg";

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

const STACK = [
  "MSSQL",
  "PostgreSQL",
  "MySQL",
  "AWS RDS",
  "Azure SQL",
  "Redis",
  "Kafka",
  "Grafana",
  "pgBackRest",
  "Terraform",
  "Linux",
  "Bash",
  "n8n",
  "Flowise",
  "LangChain",
  "OpenAI API",
  "Vector DBs",
  "RAG Pipelines",
];

const TYPED_LINES = [
  "$ dba --status",
  "✔ connections: 2,481 / 5,000",
  "✔ avg query: 38ms  (was 4.7s)",
  "✔ replication lag: 12ms",
  "✔ backups: verified · restorable",
  "$ ready_for_production = true",
];

function useTypewriter(lines: string[], speed = 22, lineDelay = 280) {
  const [text, setText] = useState("");
  useEffect(() => {
    let cancelled = false;
    let out = "";
    let li = 0;
    const run = async () => {
      while (!cancelled) {
        const line = lines[li];
        for (let i = 0; i < line.length; i++) {
          if (cancelled) return;
          out += line[i];
          setText(out);
          await new Promise((r) => setTimeout(r, speed));
        }
        out += "\n";
        setText(out);
        await new Promise((r) => setTimeout(r, lineDelay));
        li++;
        if (li >= lines.length) {
          await new Promise((r) => setTimeout(r, 2200));
          out = "";
          setText(out);
          li = 0;
        }
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [lines, speed, lineDelay]);
  return text;
}

function HomePage() {
  const typed = useTypewriter(TYPED_LINES);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-hero text-primary-foreground">
        {/* Animated gradient blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-sky-500/30 blur-3xl animate-blob" />
          <div
            className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-indigo-500/25 blur-3xl animate-blob"
            style={{ animationDelay: "-5s" }}
          />
          <div
            className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/15 blur-3xl animate-blob"
            style={{ animationDelay: "-9s" }}
          />
        </div>

        {/* Grid + radial mask */}
        <div className="grid-bg-dark pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

        {/* Soft top/bottom vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,oklch(0.10_0.04_260)_95%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-28 pt-20 md:grid-cols-[1.15fr_1fr] md:items-center md:pb-36 md:pt-28">
          {/* LEFT */}
          <div className="animate-fade-up">
            <h1 className="text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-[68px]">
              Databases, tuned to{" "}
              <span className="relative inline-block">
                <span
                  className="bg-clip-text text-transparent animate-shimmer"
                  style={{
                    backgroundImage:
                      "linear-gradient(110deg, #7dd3fc 10%, #a5b4fc 35%, #f0abfc 55%, #7dd3fc 80%)",
                  }}
                >
                  peak performance.
                </span>
                <svg
                  className="absolute -bottom-2 left-0 h-2 w-full text-sky-400/70"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 5 Q 50 1, 100 4 T 198 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-4 font-mono text-xs uppercase tracking-[0.22em] text-white/65 md:text-sm">
              Database Administrator · SQL Expert · Performance Optimization
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              I'm <span className="font-semibold text-white">Fernandes Reegan</span> — a DBA with
              over a decade of experience across MSSQL, MySQL, and PostgreSQL. I build
              audit-ready, scalable database systems that stay fast under real-world load.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary shadow-elegant transition-smooth hover:shadow-glow"
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-sky-200/0 via-sky-200/60 to-sky-200/0 transition-transform duration-700 group-hover:translate-x-full" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-smooth hover:bg-white/10"
              >
                Contact Me
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md px-2 py-3 text-sm font-medium text-white/70 transition-smooth hover:text-white"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>

            {/* Glass highlight chips */}
            <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
              {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur transition-smooth hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-sky-400/20 to-indigo-500/20 ring-1 ring-white/10">
                      <Icon className="h-3.5 w-3.5 text-sky-300" />
                    </div>
                    <span className="text-[11px] font-medium leading-tight text-white/85">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Portrait + floating cards + terminal */}
          <div className="relative mx-auto w-full max-w-md">
            {/* Glow halo */}
            <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-sky-400/30 via-indigo-500/20 to-fuchsia-500/10 blur-3xl" />

            {/* Portrait card */}
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-elegant backdrop-blur animate-float">
              <img
                src={portrait}
                alt="Fernandes Reegan, Database Administrator"
                width={1024}
                height={1024}
                className="aspect-[4/5] w-full object-cover"
              />
              {/* corner brackets */}
              <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-sky-300/70" />
              <span className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-sky-300/70" />
              <span className="pointer-events-none absolute left-3 bottom-3 h-5 w-5 border-l-2 border-b-2 border-sky-300/70" />
              <span className="pointer-events-none absolute right-3 bottom-3 h-5 w-5 border-r-2 border-b-2 border-sky-300/70" />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[oklch(0.10_0.04_260)] via-[oklch(0.10_0.04_260)/0.7] to-transparent p-5">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-sky-300">
                  <Activity className="h-3 w-3" />
                  uptime · 99.99%
                </div>
                <div className="mt-1 text-base font-semibold text-white">
                  Always-on, always-tuned databases
                </div>
              </div>
            </div>

            {/* Floating stat card — top left */}
            <div
              className="absolute -left-6 top-10 hidden rounded-xl border border-white/15 bg-white/10 p-3 shadow-elegant backdrop-blur-md md:block animate-float"
              style={{ animationDelay: "-2s" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/20 ring-1 ring-emerald-300/40">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                </div>
                <div className="leading-tight">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                    query latency
                  </div>
                  <div className="text-sm font-semibold text-white">
                    4.7s → <span className="text-emerald-300">38ms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating mini-terminal — bottom right */}
            <div
              className="absolute -right-4 -bottom-6 hidden w-64 overflow-hidden rounded-xl border border-white/15 bg-[oklch(0.14_0.04_260)/0.85] shadow-elegant backdrop-blur-md md:block animate-float"
              style={{ animationDelay: "-4s" }}
            >
              <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                  dba ~ live
                </span>
              </div>
              <pre className="whitespace-pre-wrap p-3 font-mono text-[11px] leading-relaxed text-sky-100 min-h-[148px]">
{typed}
                <span className="ml-0.5 inline-block h-3 w-1.5 -mb-0.5 bg-sky-300 animate-blink" />
              </pre>
            </div>
          </div>
        </div>

        {/* Tech stack marquee */}
        <div className="relative border-t border-white/10 bg-white/[0.02] backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-5">
            <div className="flex items-center gap-6">
              <div className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-white/50 md:block">
                stack
              </div>
              <div className="mask-fade-x relative flex-1 overflow-hidden">
                <div className="flex w-max animate-marquee gap-3">
                  {[...STACK, ...STACK].map((s, i) => (
                    <span
                      key={i}
                      className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-white/75"
                    >
                      {s}
                    </span>
                  ))}
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
