# Design System

Subject: an academic policy argument, not a product pitch. The audience is
provosts and curriculum designers — the design should read as a credible
policy brief with a modern, confident point of view, not a startup landing
page. Avoid default "AI-generated" looks: no cream-background-plus-terracotta,
no near-black-with-neon-accent, no zero-radius broadsheet newspaper layout.
This brief calls for institutional gravitas with a warm, forward-looking edge.

## Color tokens

| Token | Light mode | Dark mode | Use |
|---|---|---|---|
| `--bg` | `#F7F5F0` (warm parchment, cooler than the common AI cream) | `#161B2E` (ink navy) | Page background |
| `--surface` | `#FFFFFF` | `#1F2740` | Cards, panels |
| `--text` | `#1B2A4A` (ink navy) | `#F2F0E9` | Primary text |
| `--text-muted` | `#5B6478` | `#9BA3B8` | Secondary text, captions |
| `--accent` | `#C98A2C` (institutional gold/ochre) | `#E0A94A` | Primary CTA, active nav, key stats |
| `--accent-secondary` | `#3E6E64` (muted teal) | `#5C9A8C` | Interactive elements, links, node highlights |
| `--alert` | `#B4453A` (muted brick red) | `#D9695C` | Bias-simulation reveal states only |
| `--border` | `#E4E0D5` | `#2C3450` | Hairline dividers |

Do not substitute the accent for the common `#D97757` terracotta — it's a
specific tell for generic AI output and this brief calls for gold/ochre
instead, which reads more institutional.

## Typography

- **Display (headings, hero statements):** a serif with real character and
  weight contrast — e.g. Fraunces or Source Serif 4. Used at large sizes,
  restrained elsewhere.
- **Body:** a clean, highly legible sans — e.g. Inter or IBM Plex Sans.
- **Utility (captions, citations, data labels, nav):** a mono face — e.g. IBM
  Plex Mono — used small and sparingly, signals "this is a sourced claim."

Type scale should be deliberate (e.g. a 1.25–1.333 ratio), not default
browser sizes. Headings get generous line-height at large sizes; body copy
stays tight and readable.

## Layout

- Content-first, generous margins, no dense multi-column newspaper grid.
- Section rhythm: alternate full-bleed statement sections (hero, stat
  callouts) with contained-width reading sections (solution deep-dives).
- Cards (Evidence page, expandable solution summaries) use soft shadows and
  the `--surface` token, not hard borders.

## Motion

Motion should serve the ecosystem argument, not decorate the page. One
orchestrated signature moment beats scattered micro-animations everywhere.

**Signature element — the Thread.** A thin animated line (using
`--accent-secondary`) that visually "weaves" between the four solution nodes
on the Ecosystem page, and reappears as a subtle motif connecting sections
during page-to-page transitions (e.g. it redraws itself briefly on route
change). This is the one visual idea the whole site should be remembered by —
it makes literal the Conclusion's claim that the four solutions form an
interdependent system, not a list.

Beyond the Thread:
- Page transitions: a quick, restrained cross-fade + slight vertical shift
  (150–250ms), not a full-screen wipe or bounce.
- Scroll-triggered reveals: content fades/slides in once per section, not on
  every scroll tick.
- Hover states: subtle (underline draw, slight color shift), never a scale
  bounce on every card.
- Respect `prefers-reduced-motion` — disable the Thread's animation and
  cross-fades for users who request it; content must still be fully usable.

## Light/dark mode

- Implement via a CSS custom-property theme (`data-theme="light|dark"` on
  `<html>`), not two separate stylesheets.
- Toggle persists via `localStorage` on the client (this is a UI preference,
  not app data — fine to keep local-only).
- Default to the user's OS preference (`prefers-color-scheme`) on first
  visit, then respect their manual toggle afterward.

## Accessibility floor

- Visible keyboard focus states on every interactive element (nodes, nav,
  quiz options, toggle).
- Color contrast meets WCAG AA in both modes (verify `--text-muted` against
  both backgrounds).
- All interactive widgets (ecosystem diagram, bias simulation, quiz) must be
  operable via keyboard, not just mouse/touch.
