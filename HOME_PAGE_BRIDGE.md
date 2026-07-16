# Home Page — Add Challenge Bridge Section

Home currently jumps straight from the hero (Research Question) to the
four-node solutions preview, reading like a table of contents rather than an
argument — there's no "why" between the RQ and the solutions. Add a short
bridge section between them.

## Placement

Between the Hero section and the four-node preview section in `Home.jsx`.

## Content (verbatim, abridged with an ellipsis — do not reword)

> In today's open digital environment, students are increasingly reliant on
> the open internet rather than textbooks and school... If students no
> longer learn from quality controlled, supervised and double checked
> institutional sources, who ensures the quality and accuracy of what they
> absorb?

This is a trimmed excerpt from the Challenge page's own source text (Website
notes.docx / `docs/CONTENT_REVISION.md` section 2) — the cut is an ellipsis
abridgment, not a paraphrase. Do not alter any of the wording that remains.

Below the text, add a small link/CTA:

> Read the full picture on The Challenge →

Linking to `/challenge`.

## Styling

Keep this section visually lightweight — a short paragraph plus one link,
not a full content block. It should read as a bridge, not a second Challenge
page. Follow existing Home page section spacing/typography conventions
already established (per `docs/DESIGN_SYSTEM.md`) rather than introducing a
new visual pattern.

## Definition of done

- The bridge section appears between Hero and the four-node preview on Home.
- The text matches the block above exactly, including the ellipsis.
- The CTA links correctly to `/challenge`.
- No other section of Home is altered.
