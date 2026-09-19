# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A single-page personal portfolio/resume site built with React 18 + Vite, deployed to GitHub Pages at `https://limhaowen.github.io/Resume/`.

## Commands

- `npm start` — run dev server (Vite, port 3000, opens browser automatically)
- `npm run build` — production build, output to `build/` (not `dist/`)
- `npm run preview` — preview the production build locally
- `npm run deploy` — publish `build/` to GitHub Pages via `gh-pages`
- `npm test` — no test runner is actually wired up; this just echoes a message and exits 0. There are `@testing-library/*` devDependencies but no test files or vitest/jest config exist yet.
- Deployment also happens automatically via `.github/workflows/deploy.yaml` on every push to `main` (build + `actions/deploy-pages`).

## Architecture

- Entry point: `src/main.jsx` mounts `App` inside `HashRouter` (hash routing is required since this is served from a GitHub Pages subpath, `base: '/Resume/'` in `vite.config.js`).
- `src/App.jsx` is a flat composition root: it renders one `<section>`-like component per page section in order (`Header`, `About`, `Experience`, `Projects`, `Skills`, `Blog`, `Footer`, plus fixed overlays `ParticlesBackground` and `DarkMode`). There is no routing between pages — the whole site is one scrolling page addressed by anchors.
- Path alias: `@` maps to `src/components` (configured in both `vite.config.js` and `jsconfig.json`), so imports look like `@/sections/About`, `@/cards/ExpCard`, `@/data/experience`, `@/utilities/debounce`. There is no alias for `src/` root or `src/images` — images are imported with relative/absolute paths like `/src/images/Foo.png`.
- `src/components/` is organized by role, not by feature:
  - `sections/` — one component per full-width page section (About, Experience, Projects, Skills, Blog). Sections combine Tailwind layout classes with content pulled from `data/` and mapped over — they hold layout only, not copy.
  - `data/` — plain JS modules exporting the actual content (`experience.js`, `projects.js`, `skills.js`, `blog.js`, `socialLinks.js`), including the resolved image imports for each entry. This is the file to edit when updating resume copy, project entries, skills, blog links, or social URLs — sections just map over it.
  - `cards/` — presentational card components used inside sections (`ExpCard`, `ProjectCard`, `SkillCard`, `BlogCard`).
  - `layout/` — `Header`, `Footer`, `NavMenu`.
  - `theme/` — `darkmode.jsx` (dark mode toggle, toggles the `dark` class on `document.documentElement`; Tailwind dark mode is class-based) and `particles.jsx` (particles.js background, configured via `particlesConfig.js` at repo root).
  - `utilities/` — plain JS helpers: `reveal.js` (scroll-triggered reveal animation — toggles an `active` class on elements with the `.reveal` class based on viewport position), `debounce.js`, `scrollToContact.js` (shared smooth-scroll-to-footer handler used by `Header` and `NavMenu`), and `useDragCarousel.js` (the Projects drag/touch hook, see below).
- Scroll-reveal animation pattern: components that should animate on scroll get the `reveal` class plus Tailwind transition/transform utilities and an `[&.active]:...` variant for the revealed state; `App.jsx` wires a debounced `scroll` listener calling `reveal()` once at the top level.
- The `Projects` section implements a custom draggable/touch horizontal carousel via the `useDragCarousel` hook (`@/utilities/useDragCarousel`), which attaches `mousedown`/`mouseup`/`mousemove`/`touchstart`/etc. listeners to a track element (`#projectTrack`), using `data-*` attributes to track drag state and per-breakpoint clamp values (`carouselClamps` in `@/data/projects`) rather than a carousel library.
- Styling is Tailwind CSS v4 (via `@tailwindcss/vite` and `@tailwindcss/postcss`), with dark-mode variants used throughout section/card components.
