import { Link } from "@tanstack/react-router";
import { Mail, Database } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-primary">
              <Database className="h-4.5 w-4.5 text-primary-foreground" strokeWidth={2.25} />
            </div>
            <span className="text-base font-semibold">Fernandes Reegan</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Database Administrator with 10+ years of experience optimizing MSSQL, MySQL, and PostgreSQL
            for performance, reliability, and scale.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Navigate
          </h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {[
              ["/about", "About"],
              ["/skills", "Skills"],
              ["/services", "Services"],
              ["/projects", "Projects"],
              ["/experience", "Experience"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-muted-foreground transition-smooth hover:text-foreground">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Contact
          </h4>
          <a
            href="mailto:fernandesreegan@gmail.com"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-smooth hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            fernandesreegan@gmail.com
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Available for consulting & full-time DBA opportunities.
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Fernandes Reegan. All rights reserved.</span>
          <span className="font-mono">SELECT * FROM portfolio;</span>
        </div>
      </div>
    </footer>
  );
}
