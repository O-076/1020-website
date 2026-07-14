# Curriculum Ecosystem — Group Multimodal Synthesis Project

A persuasive microsite for higher-ed curriculum designers, provosts, and academic
policymakers, arguing that self-directed learning, industry-backed curricula,
interactive pedagogy, and critical media literacy must function as one
interdependent system — not four separate initiatives.

Full content and design specs live in `/docs`. Read them in this order before
writing or generating any code:

1. `docs/CONTENT_AND_SITEMAP.md` — every page, its content, and its source in the
   literature review. No copy should be invented outside this document.
2. `docs/DESIGN_SYSTEM.md` — color tokens, type, motion, light/dark mode.
3. `docs/ARCHITECTURE.md` — tech stack, folder structure, Azure deployment plan.
4. `docs/BUILD_BRIEF.md` — the consolidated brief to hand to a coding agent
   (e.g. Antigravity) to scaffold and build the site end to end.

## Quick start (once scaffolded)

```bash
cd client
npm install
npm run dev
```

This is a fully static site — no backend, no database, no accounts. The only
client-side persistence is the light/dark theme preference, stored in
`localStorage` purely as a UI convenience. Nothing is saved across users or
sessions.

## Repo structure

```
/client        # React (Vite) frontend — the entire site
/docs          # specs — the source of truth for content, design, and build
/.github       # CI/CD workflow for Azure Static Web Apps
```

## Status

- [ ] Content finalized from literature review (see docs/CONTENT_AND_SITEMAP.md)
- [ ] Design tokens locked (see docs/DESIGN_SYSTEM.md)
- [ ] Client scaffolded
- [ ] Interactive widgets built (ecosystem diagram, bias simulation, quiz)
- [ ] Deployed to Azure Static Web Apps
