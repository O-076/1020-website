# GitHub Pages Deployment

Azure Static Web Apps is blocked on this subscription by a region-optimization
policy that can't be routed around by picking a different region (confirmed
via the `RequestDisallowedByAzure` error — every allowed region still fails).
Switching to GitHub Pages instead. It's free, has no region restrictions, and
fits a fully static site well.

## What needs to change

### 1. Vite base path

GitHub Pages serves project sites under a subpath:
`https://<username>.github.io/<repo-name>/` — unless a custom domain is
attached later (see below). Update `client/vite.config.ts`:

```ts
export default defineConfig({
  base: '/<repo-name>/', // exact repo name, with leading and trailing slash
  // ...rest of existing config
})
```

If a custom domain gets added later, change this back to `base: '/'` and
redeploy — the subpath is only needed for the default `github.io` URL.

### 2. SPA routing fix (React Router + static hosting)

GitHub Pages has no server-side rewrite rules, so a direct visit or refresh
on a route like `/ecosystem` will 404 — there's no `staticwebapp.config.json`
equivalent. Standard fix: add a `404.html` that's a copy of `index.html`.
GitHub Pages serves `404.html` for any unmatched path, and since it's the
same React app, React Router picks up the route client-side once it loads.

- After the Vite build step, copy `dist/index.html` to `dist/404.html`
  (add this as a step in the GitHub Actions workflow below, not a manual
  step — it needs to happen on every build).
- No changes needed to the React Router setup itself (`BrowserRouter` stays
  as-is) — this fix alone is sufficient.

### 3. GitHub Actions workflow

Replace/add `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: client
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - run: cp dist/index.html dist/404.html
      - uses: actions/upload-pages-artifact@v3
        with:
          path: client/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

### 4. Enable Pages in repo settings

One-time manual step (not something the agent can do): in the GitHub repo,
go to **Settings → Pages → Build and deployment → Source**, select
**"GitHub Actions"** (not "Deploy from a branch"). After the next push to
`main`, the site goes live at `https://<username>.github.io/<repo-name>/`.

### 5. Remove Azure-specific files (optional cleanup)

`staticwebapp.config.json` has no effect on GitHub Pages and can be deleted,
or left in place harmlessly if there's a chance of revisiting Azure later.

## Custom domain (if adding one later)

Same DNS-based process as any static host:
- Add a `CNAME` file to `client/public/` containing just the domain
  (e.g. `curriculumecosystem.xyz`) — Vite copies files in `public/` into
  `dist/` automatically, so it ends up at the site root.
- At the domain registrar, add either a `CNAME` record pointing to
  `<username>.github.io`, or the four GitHub Pages `A` records (per GitHub's
  current Pages custom-domain docs) if using an apex domain.
- In repo Settings → Pages, enter the custom domain and enable "Enforce
  HTTPS" once DNS propagates (usually within an hour, sometimes up to 24).
- Once a custom domain is active, change `base` back to `/` in
  `vite.config.ts` and redeploy, since the subpath is no longer needed.

## Constraints (unchanged)

- Still fully static — no backend, no database, no API.
- No hardcoded `localhost` URLs.
- Everything else from `docs/DESIGN_SYSTEM.md`, `docs/CONTENT_AND_SITEMAP.md`,
  and `docs/FIX_BRIEF_CITATIONS.md` still applies unchanged — this file only
  covers the deployment/hosting change.

## Definition of done

- `vite.config.ts` has the correct `base` path set.
- `.github/workflows/deploy.yml` exists and builds + copies `404.html` +
  deploys via `actions/deploy-pages`.
- Pages is enabled in repo settings with source "GitHub Actions."
- Visiting a deep route directly (e.g. `/solutions/self-study`) and
  refreshing does not 404.
