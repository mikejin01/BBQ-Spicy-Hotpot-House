# 饭冰冰烧烤 — The BBQ And Spicy Hotpot House

A single-page restaurant landing site for **饭冰冰烧烤 · The BBQ And Spicy Hotpot
House** — a late-night Cantonese BBQ, Sichuan mala tang, and Changle icy-rice
spot in Flushing, NY. Built with **React + Vite**.

Dark dining aesthetic built around the restaurant's **fire & ice** concept: warm
near-black charcoal, ember-red and antique-gold accents, Cormorant Garamond
display type, the 饭冰冰烧烤 name set oversized in Chinese, smoke / grain atmosphere,
and staggered scroll reveals.

**Visit:** 158-14 Northern Blvd, Suite LL1, Flushing, NY 11358 · (929) 200-7017
· open till 2am, 7 nights a week.

## Stack

- React 18 + Vite 6 (no UI framework — hand-written CSS design system)
- IntersectionObserver-driven scroll reveals (respects `prefers-reduced-motion`)
- The restaurant's own photos, imported from `src/assets/` (Vite-fingerprinted)
- Zero-config deploy to **GitHub Pages**

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:5173
```

## Build & preview

```bash
pnpm build      # outputs to dist/
pnpm preview    # serve the production build locally
```

## Deploy to GitHub Pages

`vite.config.js` uses `base: './'`, so the build works on any project-pages URL
(`https://<user>.github.io/<repo>/`) without further config.

**Option A — GitHub Actions (recommended).** Push to `main`; the workflow in
[.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds with pnpm and
publishes automatically. In the repo, set **Settings → Pages → Source =
GitHub Actions** once.

**Option B — manual.**

```bash
pnpm deploy     # builds and pushes dist/ to the gh-pages branch
```

## Structure

```
index.html              # fonts + root
src/
  main.jsx              # entry
  App.jsx               # section composition
  styles.css            # full design system + section styles
  data.js               # content + verified image URLs
  hooks/useReveal.js    # scroll-reveal observer
  components/           # Nav, Hero, About, Signature, Quote, Gallery, Reviews, Reserve, Footer
```

Content (dishes, hours, copy) lives in [src/data.js](src/data.js) — edit there to
rebrand. Photos live in [src/assets/](src/assets/) and are wired up in `data.js`;
drop in new `.webp`/`.jpg` files and update the imports to swap imagery.
