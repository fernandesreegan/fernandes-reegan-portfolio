import { Outlet, createRootRoute, HeadContent, Scripts, Link } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Error 404</div>
        <h1 className="mt-3 text-6xl font-bold tracking-tight text-foreground">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The query returned 0 rows. Let's get you back to a valid index.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:shadow-elegant"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fernandes Reegan — Database Administrator & SQL Expert" },
      {
        name: "description",
        content:
          "Fernandes Reegan — DBA with 10+ years of experience in MSSQL, MySQL & PostgreSQL. Performance tuning, automation, and audit-ready database solutions.",
      },
      { name: "author", content: "Fernandes Reegan" },
      { property: "og:title", content: "Fernandes Reegan — Database Administrator & SQL Expert" },
      {
        property: "og:description",
        content:
          "10+ years optimizing relational databases. Performance tuning, scalability, and reliable automation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Fernandes Reegan — Database Administrator & SQL Expert" },
      { name: "description", content: "A professional portfolio website showcasing Fernandes Reegan's expertise as a Database Administrator." },
      { property: "og:description", content: "A professional portfolio website showcasing Fernandes Reegan's expertise as a Database Administrator." },
      { name: "twitter:description", content: "A professional portfolio website showcasing Fernandes Reegan's expertise as a Database Administrator." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/eb8dde02-c375-4fe2-b6b8-7602b1127b8b/id-preview-2b9cb2d8--952c79ae-0598-451c-a78f-3d82f0f0da97.lovable.app-1777559870546.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/eb8dde02-c375-4fe2-b6b8-7602b1127b8b/id-preview-2b9cb2d8--952c79ae-0598-451c-a78f-3d82f0f0da97.lovable.app-1777559870546.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
