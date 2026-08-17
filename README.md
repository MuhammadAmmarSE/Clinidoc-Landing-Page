# CliniDoc Landing Page

The production marketing site for CliniDoc — "Clinical care, connected." Built with Next.js
(App Router), TypeScript, Tailwind CSS and Framer Motion.

This is the real, buildable implementation of the design work tracked in
[`ROADMAP.md`](./ROADMAP.md), which documents the 20-milestone design process (product
narrative, design system, and every product section) that this codebase now implements.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router), React 18, TypeScript (strict) |
| Styling | Tailwind CSS, driven by CSS custom properties for the design token system |
| Motion | Framer Motion, with `prefers-reduced-motion` respected everywhere |
| Fonts | Self-hosted via `next/font/local` — Poppins (display), IBM Plex Sans (body), IBM Plex Mono (labels/data) |
| Forms | Next.js Server Actions (`app/actions.ts`) |
| SEO | Next.js Metadata API, dynamic OG image (`app/opengraph-image.tsx`), JSON-LD, `sitemap.ts`/`robots.ts` |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint        # ESLint (next/core-web-vitals)
npm run typecheck   # tsc --noEmit
```

## Project structure

```
app/
  layout.tsx          Root layout — fonts, metadata, skip link
  page.tsx             Assembles every section of the homepage
  actions.ts           Server Action backing the contact form
  globals.css          Design tokens (light/dark) + Tailwind directives
  opengraph-image.tsx  Dynamically generated OG image
  sitemap.ts, robots.ts

components/
  nav/          Sticky nav, mobile menu, brand mark
  hero/         Hero + ecosystem animation
  platform/     Proof strip, problem section, platform reveal, Product Explorer
  sections/     Reusable capability section + chain diagram, "Why CliniDoc"
  convergence/  Closing "everything, together" animation
  faq/          FAQ accordion
  contact/      Final CTA + contact form
  footer/       Site footer
  ui/           Shared primitives (scroll-reveal wrapper)

lib/
  demo-data.ts        The single fictional dataset (Sarah Mitchell) every section reads from
  structured-data.ts  JSON-LD builder
  cn.ts               Tiny classname helper

public/
  fonts/   Self-hosted woff2 files
  brand/   Real CliniDoc logo assets (vectorized from the source logo)

assets/brand/  Source design assets (not served — the design deliverable, kept for reference)
```

## Design system

All color, type and spacing decisions come from the CliniDoc brand system established during
the design milestones (see `ROADMAP.md`) — colors sampled directly from the vectorized logo,
not invented for this build. Tokens live as CSS custom properties in `app/globals.css` and are
exposed to Tailwind via `tailwind.config.ts`, so every component styles itself through
`bg-surface`, `text-ink-soft`, etc. rather than hard-coded hex values.

Theme resolution is three-tier and matches every prior design artifact: a bare `:root` light
palette, a `prefers-color-scheme: dark` override (guarded so an explicit light choice always
wins), and an explicit `[data-theme="dark"]` override for a future manual toggle.

## Known open items

Carried forward from the design process and still unresolved — see `ROADMAP.md`'s "Open
items" section for full context:

1. **HIPAA / SOC 2 claims** — two design milestones disagree on whether these are statable as
   fact. This build makes no compliance claims (the safer default) pending that decision.
2. **AI Scribe** (referenced in the Clinical Documentation section and the "Does CliniDoc use
   AI?" FAQ answer) — could not be verified against the backend/Program Creation
   documentation available while building. Confirm this capability is real before treating
   that copy as final.
3. **Contact form delivery** — `app/actions.ts` validates and accepts submissions but isn't
   wired to a real email/CRM endpoint yet; see the `TODO(integration)` comment there.
4. **`metadataBase`** in `app/layout.tsx` and the sitemap/robots URLs use a placeholder
   `https://www.clinidoc.example` domain — replace with the real production domain before
   launch.
