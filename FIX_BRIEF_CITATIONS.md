# Fix Brief — Citations & References

Targeted fixes from a content review of the built site. Do not restructure
pages beyond what's described below — these are additions/corrections to
existing components, not a rebuild.

## 1. Add a References page

- New route: `/references`, new page component `client/src/pages/References.jsx`
  (+ matching `.css`), following the same pattern as the other pages
  (`PageTransition` wrapper, `useReveal` for scroll animation).
- Content: full bibliographic entries for all 6 sources, from
  `docs/REFERENCES.md` (already verified and complete — read it for the
  actual citation text, do not invent or alter publisher/journal/URL
  details).
- Add `REFERENCES` as a new export in `client/src/content/siteContent.js`,
  structured as an array of `{ id, category ('scholarly' | 'popular'), citation }`
  objects, then render two grouped lists on the page (Scholarly Sources /
  Popular & Credible Sources), matching the assignment's 4-scholarly +
  2-popular requirement.
- Add a "References" link to the footer (`Footer.jsx`) and to the main nav
  (`Nav.jsx`) — it's a real page, not a hidden one.

## 2. Add citations to Challenge.jsx

The "Key Vulnerabilities" list in `GatekeepersSection` (algorithmic echo
chambers, infoxication, AI hallucinations, covert commercial intent) is
paraphrased directly from Molerov et al. (2020) and Albardía et al. (2025)
but currently carries no attribution anywhere on the page.

- Add a small citation line under the vulnerabilities list, e.g.:
  `<p className="mono text-muted">Sources: Molerov et al., 2020; Albardía et al., 2025</p>`
- Also add a citation to the `GatekeepersSection` intro paragraphs, since
  the "students must now act as their own gatekeepers" framing and the
  AI-hallucination framing both trace to the same two sources.
- Pull these citation strings from `siteContent.js` rather than hardcoding
  them a second time — add a small `CHALLENGE_CITATIONS` export if needed so
  there's one source of truth.

## 3. Add citations to Ecosystem.jsx, and remove the literature-review
   self-citations on Ecosystem.jsx AND Recommendations.jsx

**Add citations:** The four role cards in `FramingSection` (Fuel, Engine,
Destination, Steering Wheel) each correspond to one solution in `SOLUTIONS`
but show no citation. Under each role card's paragraph, add a small citation
line using that solution's `citations` array from `siteContent.js` (see fix
#4 below for that field change) — e.g. the "Engine" card should show every
citation relevant to Interactive Methods, not just one.

**Remove the literature-review self-citations:** `docs/LITERATURE_REVIEW.md`
is the group's own synthesis document, not an external source. It must never
appear as the attribution behind a claim. Two identical instances currently
exist in the codebase — both must be fixed the same way:

- `client/src/pages/Ecosystem.jsx` — the closing blockquote in
  `FramingSection` currently reads
  `<cite className="mono text-muted">— Literature Review, Conclusion</cite>`.
- `client/src/pages/Recommendations.jsx` — an identical blockquote with the
  same `<cite>— Literature Review, Conclusion</cite>` tag.

In both places: remove the `<cite>` tag and the "Literature Review,
Conclusion" attribution entirely. Do not replace it with any citation — this
text is the group's own original synthesis/conclusion, not a claim requiring
external evidence, so it should read as plain prose with no source label at
all, and must not be styled to look like the real academic citations used
elsewhere on the page.

Search the rest of the codebase for any other occurrence of "Literature
Review," "Group Research," or similar used as if it were a source (check
`source:` fields, `<cite>` tags, "Source:" labels) and apply the same fix —
remove it as a citation, and if the surrounding claim needs support, cite the
real source(s) it actually traces back to in `docs/REFERENCES.md` instead.

## 4. Fix single-source citation on Solutions.jsx, and make every citation
   traceable to the literature review's own attributions

`SolutionContent` currently shows one `Key source: {solution.keyCitation}`
line per solution page, but several solutions synthesize multiple sources in
their bullet points, and other pages (Challenge, Ecosystem, Evidence) need
the same rigor applied.

- In `siteContent.js`, change `keyCitation` (singular string) to `citations`
  (array of strings) for each solution in `SOLUTIONS`, listing every source
  actually used in that solution's `points` — matching exactly what
  `docs/LITERATURE_REVIEW.md` attributes to each claim in that section. For
  example, Solution 3 (Interactive Methods) should list Albardía et al.
  (2025), Rodríguez Castillo et al. (2026), Ma et al. (2025), and the LSE
  evaluation — not just Albardía et al. alone.
- Update `Solutions.jsx`'s `SolutionContent` to render all citations in that
  array, not a single string. Update any other component reading
  `keyCitation` (check `EcosystemDiagram.jsx`'s detail panel, which also
  displays `activeSolution.keyCitation` — same fix needed there, or keep one
  primary citation there for the compact panel and note "+N more" linking to
  the full Solutions page).
- Do a full pass across every page: every claim, stat, quote, or
  recommendation on the site must carry the same citation(s) that
  `docs/LITERATURE_REVIEW.md` itself attaches to that specific claim. Don't
  generalize or drop citations when paraphrasing — if the literature review
  ties a sentence to two authors, the site should show both, not one.

## Note on the employer-credential stat — superseded, see CONTENT_REVISION.md

This section previously said to keep the employer-stat citation as Ma et
al., 2025. **That decision has been reversed.** Per `docs/CONTENT_REVISION.md`,
the group has decided to follow Naiera's attribution instead: the 75%
stat/quote is now cited to **University System of Maryland, 2025**
everywhere it appears — update the `source` field on the `employer-stat`
entry in `EVIDENCE_CARDS` (`siteContent.js`) to University System of
Maryland, 2025, and use the same attribution for the new pull-quote box on
the Solutions page (Solution 2), per CONTENT_REVISION.md section 3.

## Constraints (unchanged from the original build)

- Still fully static — no backend, no database, no API.
- Follow existing design tokens from `docs/DESIGN_SYSTEM.md` for the new
  References page (same nav treatment, same card/typography patterns as
  Evidence.jsx uses, since References is structurally similar — a list of
  sourced items).
- Keyboard-operable, WCAG AA contrast, respects `prefers-reduced-motion`,
  same as every other page.

## Definition of done

- `/references` exists, is in the nav and footer, and lists all 6 real
  citations pulled from `docs/REFERENCES.md`.
- No page anywhere on the site cites or quotes "Literature Review" as if it
  were an external source — check Ecosystem.jsx and Recommendations.jsx
  specifically, since both currently do this.
- Challenge.jsx and Ecosystem.jsx both show source attribution for their
  paraphrased research claims.
- Every Solutions sub-page shows every source actually used on that page,
  not just one.
- The employer-stat citation remains attributed to Ma et al., 2025 — not
  changed to Coursera.
- No new invented citations anywhere — only what's in `docs/REFERENCES.md`
  and `docs/LITERATURE_REVIEW.md`.
