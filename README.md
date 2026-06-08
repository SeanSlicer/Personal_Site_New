# seanslicer.com

Personal site for Sean Slicer — a single-page, Apple-Keynote-style portfolio
with a coral → violet palette, built with Next.js and Tailwind. All motion is
hand-rolled (IntersectionObserver reveals + small scroll/pointer hooks) with no
animation libraries.

## Tech

- **Next.js 16** (Pages Router, Turbopack) · **React 19** · **TypeScript 5**
- **Tailwind CSS 3.4**
- Fonts via `next/font` (Inter + JetBrains Mono)

## Getting started

```bash
yarn install
yarn dev        # http://localhost:3000
```

```bash
yarn build      # production build (type-check + lint + static export)
yarn start      # serve the production build
```

## Structure

- `pages/index.tsx` — composes the page sections in order
- `components/` — `Hero`, `AboutMe`, `Experience`, `Projects`, `Skills`,
  `Contact`, plus `Reveal` (scroll-reveal wrapper) and `layout/{Nav,Footer}`
- `lib/content.ts` — all résumé-driven copy (experience, projects, skills);
  edit here to update the site's content
- `lib/hooks.ts` — `useScrollProgress` / `useMouseParallax`
- `styles/globals.css` — theme tokens, reveal keyframes, helpers
- `tailwind.config.js` — palette and animation utilities

> Note: there is no contact form or backend — contact is via the social links
> in the Contact section.

## Deploy

Deployed on Vercel — pushes to `main` ship automatically.
