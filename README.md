# Agent Shell Protocol — Official Website

The official site for the Agent Shell Protocol (ASP) — marketing landing
page plus full documentation, all in one Next.js 16 app, all server-rendered
static HTML, deployed on Vercel.

## Stack

- **Next.js 16** (App Router, webpack build) — every page in this repo
  prerenders to static HTML, so search engines see the full content without
  executing JavaScript.
- **React 19** — Server Components by default. Animated SVG (rotating globe)
  and pipeline animation are scoped client islands marked `'use client'`.
- **Fumadocs 16** at `/docs` — open-source MDX documentation framework with
  built-in search, theming, navigation tree.
- **Self-hosted Google Fonts** via `next/font/google` — no render-blocking
  fetch to `fonts.googleapis.com`.
- **TypeScript 5** in strict mode.
- **pnpm** as the package manager.

## SEO posture

- All pages prerender to static HTML (`○ Static` / `● SSG` in build output).
- Full Metadata API: title template, description, keywords, openGraph,
  twitter card, canonical, robots.
- `app/sitemap.ts` and `app/robots.ts` produce `/sitemap.xml` and
  `/robots.txt` automatically.
- JSON-LD structured data: `Organization` + `WebSite` on the home page,
  `TechArticle` per docs page.
- Semantic HTML throughout (`<header>` / `<main>` / `<section>` / `<article>`
  / `<footer>` / one `<h1>` per page / scoped `<h2>`/`<h3>`).
- "AI agent" keyword density verified at 2.5%–3.5% on every prerendered
  HTML page via `scripts/keyword-density.mjs` (run after `pnpm build`).

## Layout

```
app/
  layout.tsx         root metadata, fonts, Org JSON-LD
  page.tsx           marketing home
  global.css         marketing-only CSS (no Tailwind)
  sitemap.ts
  robots.ts
  docs/
    layout.tsx       Fumadocs RootProvider + DocsLayout, imports prebuilt CSS
    [[...slug]]/
      page.tsx       MDX renderer with per-page metadata + JSON-LD

components/
  JsonLd.tsx         safe inline JSON-LD emitter
  site/
    Backdrop, Nav, Hero, HeroBanner, Globe (client),
    Audiences, Architecture, Pipeline (client), Code,
    Ecosystem, Footer, SectionHead, Button

content/docs/
  index.mdx
  builders/index.mdx
  operators/index.mdx
  protocol/index.mdx
  meta.json files for sidebar ordering

lib/
  theme.ts           design tokens + SITE constants
  content.ts         marketing copy
  docs-source.ts     fumadocs loader

scripts/
  keyword-density.mjs   SEO keyword density sanity check
```

## Develop

```bash
pnpm install
pnpm dev          # next dev --webpack
```

The hero banner has multiple variants (C1 mega-stripe, C4 stacked); pick one
via env:

```bash
NEXT_PUBLIC_HERO_BANNER=c4 pnpm dev
```

Empty value = banner off, only the original Hero from the prototype renders.

## Build & verify

```bash
pnpm build
node scripts/keyword-density.mjs
```

Expected last line:

```
OVERALL  tokens=~1500  hits=~40  density=2.6% (target 2.5–3.5%)
```

## Deploy

Connect the GitHub repo to Vercel. `vercel.json` already pins the framework
to Next.js, sets `pnpm install --frozen-lockfile` for reproducible installs,
and adds two security headers (HSTS, Permissions-Policy).

## Original prototype

The hand-coded prototype that this site is faithfully migrated from lives
at `agent shell 官网.zip` in the repo root. The `/extracted` directory in
`.gitignore` is where it expands to — useful for diffing visuals.
