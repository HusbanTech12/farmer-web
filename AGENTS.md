# AGENTS.md — Developer Guide for farmer-web

## Project Overview

Microfinance Plus — a microfinance NGO website for rural entrepreneurs in Burkina Faso. Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and framer-motion.

## Tech Stack

| Technology | Version | Notes |
|---|---|---|
| Next.js | 16.2.9 | App Router, Turbopack |
| React | 19.2.4 | |
| TypeScript | ^5 | Strict mode |
| Tailwind CSS | ^4 | CSS-first config (no tailwind.config file) |
| framer-motion | ^12.42.2 | Via custom Motion wrapper |
| ESLint | ^9 | Flat config (eslint.config.mjs) |

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run lint       # Run ESLint
```

No test framework installed. No prettier configured.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 + custom theme tokens + utility classes
│   ├── layout.tsx           # Root layout (Inter + Playfair fonts, Google Fonts link for Instrument Serif)
│   ├── page.tsx             # Home page
│   ├── about/page.tsx       # /about
│   ├── contact/page.tsx     # /contact
│   ├── impact/page.tsx      # /impact
│   └── service/
│       ├── page.tsx         # /service
│       └── agricultural-loans/page.tsx  # /service/agricultural-loans
└── components/              # 39 flat components (no subdirectories)
```

## Routes

- `/` — Home
- `/about` — About
- `/service` — Services overview
- `/service/agricultural-loans` — Loan details
- `/impact` — Impact
- `/contact` — Contact

## Conventions

### Components
- All components use `"use client"` directive (even ones without state — framer-motion requires it)
- Default exports only: `export default function ComponentName()`
- Functional components only — no class components
- PascalCase filenames: `Hero.tsx`, `BentoSection.tsx`
- Data defined as const arrays at module scope above component function
- No state management library — all data is hardcoded/static
- No API calls, no data fetching, no `libs/`, `utils/`, `hooks/`, `types/`, or `context/` directories

### Pages
- Pages compose sections by importing and stacking components in order
- Page structure: `<> <main> <Section1 /> <Section2 /> ... </main> <Footer /> </>`
- Navbar is embedded inside each Hero component (not in layout.tsx) — each page includes its own `<Navbar />`
- Static routes only — no dynamic routes

### Animation
- Use the custom `Motion` wrapper from `@/components/Motion` — not direct `motion.*` imports
- Available animation types: `fadeUp`, `fadeDown`, `fadeLeft`, `fadeRight`, `scaleUp`, `scaleIn`
- Stagger animations: wrap children in `<StaggerContainer>` and use `<StaggerItem>` on each child
- All animations trigger `whileInView` with `viewport={{ once: true, margin: "-80px" }}`
- Direct `motion.*` usage only allowed inside `Motion.tsx`

### Imports
- Path alias: `@/*` maps to `./src/*`
- Always use `@/components/ComponentName` — never relative imports between components

### Styling
- All styling via Tailwind utility classes in `className`
- Custom theme tokens defined in `globals.css` via `@theme inline`:
  - Colors: `navy-900`, `navy-800`, `navy-700`, `green-primary`, `green-bright`, `green-dark`, `cream`, `charcoal`, `muted`, `card-bg`, `accent-orange`, `accent-coral`, `accent-blue`
  - Fonts: `--font-sans` (Inter), `--font-serif` (Playfair Display)
- Utility classes in `globals.css`: `.serif-accent` (Playfair Display italic), `.instrument-italic` (Instrument Serif italic)
- Responsive: mobile-first with `md:` and `lg:` breakpoints
- Common layout: `max-w-7xl mx-auto px-6`, `py-20 md:py-28`
- Color scheme alternates: `bg-navy-900` sections, `bg-cream`, `bg-white`

### Hover Effects Pattern
- Cards: `hover:shadow-xl hover:-translate-y-1 transition`
- Images: `hover:scale-[1.02] transition duration-500`
- Buttons: `hover:shadow-lg hover:scale-110 transition`
- Links: `hover:text-green-primary transition`

### HTML Entities
- Use JSX entities: `&amp;`, `&apos;`, `&rarr;`

## Important Notes

- `.next` cache must be cleared (`rm -rf .next`) before rebuild if errors persist
- Google Fonts `<link>` tag for Instrument Serif is in `layout.tsx` `<head>` — do NOT use CSS `@import` for fonts (causes Tailwind v4 parse error)
- The `serif-accent` class uses Playfair Display (loaded via next/font). The `instrument-italic` class is used for hero accent text only
- No git hooks, no husky, no lint-staged configured
- No environment variables in use
