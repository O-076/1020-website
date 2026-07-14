# Build Brief

Hand this file (plus the three it references) to the coding agent as the task
prompt. It should read all four docs before generating any code.

## Task

Scaffold and build a fully static React + Vite website called "Curriculum
Ecosystem" per the specs below. No backend, no database, no accounts, no
saved progress — a static site for the instructor and class to navigate.
Read, in order, before writing code:

1. `docs/CONTENT_AND_SITEMAP.md` — exact page list and content, sourced from
   the group's literature review. Do not invent statistics, studies, or
   quotes beyond what's listed there.
2. `docs/DESIGN_SYSTEM.md` — color tokens, typography, motion, light/dark
   mode. Follow the token values exactly; do not substitute generic AI-design
   defaults (no terracotta accent, no near-black+neon, no zero-radius
   newspaper grid).
3. `docs/ARCHITECTURE.md` — folder structure and the fully-static approach.

## Build order

1. Scaffold `/client` with Vite + React + React Router, using the folder
   structure in ARCHITECTURE.md. No `/api` folder, no server dependencies.
2. Implement the design tokens as CSS custom properties (`/src/styles/tokens.css`)
   with a `data-theme` attribute switch for light/dark, defaulting to
   `prefers-color-scheme` and persisting the user's choice via `localStorage`
   (this is the only thing that persists — a UI preference, not app data).
3. Build the shared layout: nav (Home / Challenge / Ecosystem / Solutions /
   Evidence / Recommendations), theme toggle, footer.
4. Build each page from CONTENT_AND_SITEMAP.md, in this order:
   Home → Challenge → Ecosystem → Solutions (4 sub-routes) → Evidence →
   Recommendations.
5. Build the three flagship interactive components. All state is local to
   the component/session — nothing submits anywhere or persists on refresh:
   - `EcosystemDiagram` — four connected nodes per the Ecosystem page spec;
     clicking a node reveals its summary/citation and links to its Solutions
     sub-page. This is the "Thread" signature element from DESIGN_SYSTEM.md.
   - `BiasSimulation` — a mocked webpage/AI-output snippet with 2–3 embedded
     bias markers the user clicks to identify, followed by an explanatory
     reveal. Resets each visit. Used on the `spotting-bias` solution page.
   - `Quiz` — a short self-assessment ("How ecosystem-ready is your
     curriculum?") ending in a result that links to `/recommendations`.
     Answers are not stored anywhere.
6. Implement page-transition and scroll-reveal motion per DESIGN_SYSTEM.md,
   respecting `prefers-reduced-motion`.
7. Add `staticwebapp.config.json` for Azure Static Web Apps routing
   (SPA fallback to `index.html`).

## Constraints

- No backend, no API calls, no database, no analytics that require a server.
- Keyboard-operable interactive widgets; visible focus states; WCAG AA
  contrast in both themes.
- Citations from the literature review should be paraphrased in body copy,
  not quoted at length, per CONTENT_AND_SITEMAP.md's citation note.

## Definition of done

- All six pages render with real content from CONTENT_AND_SITEMAP.md (no
  placeholder lorem ipsum).
- Light/dark toggle works and persists across visits.
- All three interactive components function, reset on refresh, and are
  keyboard-accessible.
- `npm run build` produces a `dist/` folder that can be deployed as-is to
  Azure Static Web Apps with no server component.
