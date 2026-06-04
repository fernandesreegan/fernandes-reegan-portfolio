# Fernandes Reegan — DBA Portfolio

A modern, fast, and accessible portfolio website for a Database Administrator with 10+ years of experience in MSSQL, MySQL, and PostgreSQL.

**Live site:** [fernandes-reegan-portfolio.lovable.app](https://fernandes-reegan-portfolio.lovable.app)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [TanStack Start](https://tanstack.com/start) v1 — full-stack React 19 with SSR/SSG |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS v4 + custom CSS design tokens (`oklch`) |
| UI Components | shadcn/ui |
| Backend / Auth | Lovable Cloud (Supabase) |
| Contact Form | Gmail REST API via Lovable connector gateway |
| Deployment | Cloudflare Workers (edge) |

---

## Project Structure

```
.
├── src/
│   ├── routes/           # File-based routes (TanStack Router)
│   │   ├── index.tsx     # Homepage
│   │   ├── about.tsx     # About page
│   │   ├── skills.tsx    # Skills page
│   │   ├── services.tsx  # Services page
│   │   ├── projects.tsx  # Projects page
│   │   ├── experience.tsx# Experience page
│   │   ├── contact.tsx   # Contact page (form + info cards)
│   │   └── __root.tsx    # Root layout (HTML shell)
│   ├── components/       # Reusable components (Header, Footer, SectionHeader, UI primitives)
│   ├── lib/
│   │   ├── utils.ts      # cn() and helpers
│   │   └── contact.functions.ts  # Server function: send contact email via Gmail API
│   ├── integrations/
│   │   └── supabase/     # Supabase client (browser + server), auth middleware, types
│   ├── styles.css        # Tailwind v4 entry + design tokens (colors, fonts, shadows)
│   └── router.tsx        # Router bootstrap
├── supabase/
│   └── config.toml       # Supabase CLI config
├── package.json
├── tsconfig.json
├── vite.config.ts
├── wrangler.jsonc        # Cloudflare Workers config
└── .env                  # Env vars (Supabase URL, keys)
```

---

## Key Features

- **Dark theme** with Apple-like minimal aesthetic, custom `oklch` color tokens
- **File-based routing** — each section is a dedicated route with unique SEO meta (`title`, `description`, `og:*`)
- **Contact form** with server-side validation (Zod) and Gmail API email delivery
- **Copy-to-clipboard** email interaction (no `mailto:` prompts)
- **Responsive design** — mobile-first, works across all screen sizes
- **Accessibility** — semantic HTML, proper labels, focus states, keyboard navigation

---

## Contact Form Architecture

The contact form does **not** use SMTP (Cloudflare Workers cannot open raw TCP connections on ports 465/587). Instead it uses the **Gmail REST API** via Lovable's connector gateway:

1. Visitor fills the contact form (`/contact`)
2. Client validates with Zod, calls `sendContactEmail` server function
3. Server function builds an RFC 2822 message, base64url-encodes it
4. `POST` to `https://connector-gateway.lovable.dev/google_mail/gmail/v1/users/me/messages/send`
5. Gateway proxies to Google, auto-refreshes OAuth tokens, and Gmail sends from the connected inbox
6. Email appears in the Gmail Sent folder

---

## Environment Variables

Create a `.env` file with:

```bash
VITE_SUPABASE_URL=            # Your Supabase project URL
VITE_SUPABASE_PUBLISHABLE_KEY= # Supabase anon key
SUPABASE_URL=                 # Server-side Supabase URL
SUPABASE_PUBLISHABLE_KEY=     # Server-side anon key
LOVABLE_API_KEY=              # Lovable connector gateway key
GOOGLE_MAIL_API_KEY=          # Google Mail connector API key
```

> **Note:** `SUPABASE_SERVICE_ROLE_KEY` is used server-side only in `client.server.ts` — never expose it to the browser.

---

## Getting Started

### Prerequisites
- [Bun](https://bun.sh/) (or Node.js 20+)

### Install & Run

```bash
# Install dependencies
bun install

# Start dev server
bun run dev
```

The dev server runs at `http://localhost:3000`.

### Build

```bash
# Production build
bun run build
```

---

## Deployment

This project is deployed to **Cloudflare Workers** via Lovable's managed pipeline. Push changes and the preview/production builds are triggered automatically.

- **Preview URL:** `https://id-preview--...lovable.app`
- **Production URL:** `https://fernandes-reegan-portfolio.lovable.app`

---

## License

© Fernandes Reegan. All rights reserved.
