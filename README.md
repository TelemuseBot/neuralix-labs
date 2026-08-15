# Neuralix Labs — Website

Production-ready foundation for the Neuralix Labs site, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Status: Complete — Phases 1–6

**Built:**
- Project setup, design system (tokens in `tailwind.config.js`), global styles
- Navbar (sticky, scroll-aware blur, animated mobile menu)
- Footer (real nav, legal links, LinkedIn / Instagram / email)
- Homepage: Hero (with the "Signal Graph" interactive canvas — the site's signature visual), positioning strip, "What We Build," Featured Products, Featured Work, closing CTA
- **Products** index (`/products`) + dynamic product detail pages (`/products/[slug]`) with capabilities, use cases, and FAQ
- **Work** index (`/work`) + dynamic case study pages (`/work/[slug]`) with challenge / approach / result structure
- **Services** page (`/services`) — engineering capability groups + the 5-step process
- **AI Solutions** page (`/solutions`) — 10 solution categories with examples
- **About** page (`/about`) — philosophy, beliefs, who/what/why
- **Careers** page (`/careers`) — culture, honest empty state for open roles (ready for real listings later, not fabricated)
- **Contact** page (`/contact`) — full form with client + server validation, loading/success/error states, honeypot spam protection, isolated email-integration point
- **Insights** index (`/insights`) — client-side search + category filter, and dynamic article pages (`/insights/[slug]`) with reading time, author, date, tags, and related articles — 4 real articles, no placeholders
- **Privacy** (`/privacy`) and **Terms** (`/terms`) — real policy text specific to this site's actual data practices
- Custom **404** page
- Dynamic **sitemap.xml** and **robots.txt**, auto-generated from the same data files that drive the pages
- Structured data files (`data/*.ts`) so content isn't hardcoded into pages
- Organization + WebSite JSON-LD, Article JSON-LD on each insight, Open Graph / Twitter metadata
- **Final QA pass**: production build verified clean (0 TypeScript errors, 0 ESLint errors, 24/24 routes statically generated), removed a broken `og-image.png` reference that had no matching file, confirmed focus states / keyboard nav / `prefers-reduced-motion` support across the design system

**Intentionally not built:**
- Light mode (spec allows dark-only; can be added as a follow-up if wanted)
- Real email delivery on the contact form (isolated integration point ready — see "Contact form email delivery" below)
- A real Open Graph image file (`public/og-image.png`) — add one and reintroduce the `images` field in `app/layout.tsx` metadata once you have branded artwork
- Actual open job listings (fabricating these was avoided on purpose)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Fonts

This was built in a sandboxed environment without access to Google Fonts, so `app/fonts.css` currently uses system-font fallbacks (Avenir Next / Segoe UI / system-ui) in place of Space Grotesk, Inter, and JetBrains Mono.

To restore the intended typefaces once you have normal internet access (e.g. on Vercel or your own machine):

1. Delete the `import './fonts.css'` line in `app/layout.tsx` and the `fontVars` constant below it.
2. Add back to the top of `app/layout.tsx`:
   ```ts
   import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';

   const display = Space_Grotesk({ subsets: ['latin'], weight: ['500','600','700'], variable: '--font-display', display: 'swap' });
   const body = Inter({ subsets: ['latin'], weight: ['400','500','600'], variable: '--font-body', display: 'swap' });
   const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400','500'], variable: '--font-mono', display: 'swap' });
   ```
3. Set the `<html>` tag's `className` to `` `${display.variable} ${body.variable} ${mono.variable}` ``.

`next/font/google` self-hosts the fonts at build time — no runtime requests, no layout shift. This is the right approach once you're outside a network-restricted sandbox.

## Design system

- **Colors:** near-black background (`#07080A`), charcoal surfaces, signal blue (`#4C7CFF`) as the single accent, violet only inside the hero graph, green reserved for "live" status only.
- **Type roles:** `font-display` (headlines), `font-body` (everything else), `font-mono` (eyebrows, labels, status chips).
- **Signature element:** `components/sections/SignalGraph.tsx` — a canvas-based node graph that reacts to the cursor. It's the one deliberately bold visual; everything else is quiet by design.

## Verified

`npm run build` passes clean: no TypeScript errors, no ESLint errors, static generation succeeds — all 24 routes, including the dynamic `/api/contact` route and generated `/sitemap.xml` and `/robots.txt`.

## Contact form email delivery

The contact form validates on both client and server, but does not send real emails yet — see the comments in `app/api/contact/route.ts` for how to wire up a provider like Resend via an environment variable. Until then, submissions are logged server-side so nothing is silently lost.
