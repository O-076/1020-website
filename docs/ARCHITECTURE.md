# Architecture & Deployment

## Decision: fully static, no backend

Confirmed: this site is entirely static. No accounts, no database, no saved
progress, no server-side logic. The interactive widgets (ecosystem diagram,
bias-spotting simulation, self-assessment quiz) all run client-side in the
browser and reset on refresh — nothing is submitted or stored anywhere.

The only client-side state that persists at all is the light/dark theme
preference, kept in `localStorage` purely as a UI convenience (not "data" in
any meaningful sense). Everything else — quiz answers, diagram node
selections, bias-simulation choices — lives in React state for the duration
of the visit and is not saved.

## Stack

- **Client:** React + Vite (fast dev server, simple static build output).
  React Router for the page routes in CONTENT_AND_SITEMAP.md.
- **Styling:** CSS custom properties per DESIGN_SYSTEM.md tokens; Framer
  Motion (or CSS transitions/`view-transitions` API) for the page-to-page
  Thread animation and reveals.
- **No API, no database, no auth.**

## Folder structure

```
/client
  /src
    /pages          # Home, Challenge, Ecosystem, Solutions, Evidence, Recommendations
    /components      # Nav, ThemeToggle, EcosystemDiagram, BiasSimulation, Quiz, EvidenceCard
    /styles          # tokens.css, global.css
    /content         # structured content pulled from CONTENT_AND_SITEMAP.md (JSON/TS, not hardcoded in components)
  vite.config.ts
  package.json
/docs                # this folder
/.github/workflows   # azure-static-web-apps-<name>.yml (auto-generated on first deploy)
staticwebapp.config.json   # routing/fallback rules for Azure Static Web Apps
```

## Azure deployment — what to do now vs. later

**Now (affects how you build, so worth locking in upfront):**
- Everything lives under `/client`; the build output is a static `dist/`
  folder with no server process to run in production.
- Initialize the repo on GitHub (Azure Static Web Apps deploys via GitHub
  Actions, and the free student tier expects a GitHub-connected repo).

**Later (do this once the site is functional locally):**
1. Create an Azure Static Web App resource (free tier — this tier is free
   regardless of the student pack, but the pack covers it either way).
2. During resource creation, point it at your GitHub repo, branch `main`,
   app location `/client`, api location left blank (no API), output location
   `dist`.
3. Azure auto-generates a GitHub Actions workflow file in
   `.github/workflows/` — commit it, and every push to `main` redeploys.
4. Add a custom domain later if desired (optional, not required for grading).

There's nothing to configure for Azure before the site works locally. Since
there's no backend at all, deployment is genuinely just "connect the repo,
click create" once you're ready.
