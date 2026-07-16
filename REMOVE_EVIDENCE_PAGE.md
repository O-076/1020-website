# Remove Evidence Page

The Evidence page's standalone case-study cards are now fully duplicated by
content already on the Solutions page (per `docs/CONTENT_REVISION.md`).
Removing it as a separate page.

**Confirmed mapping — no judgment call needed, all 4 cards are accounted for:**

| `EVIDENCE_CARDS` id | Content | Now covered by |
|---|---|---|
| `maryland-google` | University System of Maryland × Google partnership | Solution 2, "Industry Partnerships" subsection |
| `employer-stat` | 75% employer-credential stat | Solution 2, pull-quote box |
| `lse-evaluation` | LSE Evaluation of the Digital Citizenship Curriculum | Solution 3 (Interactive Learning Methods), unchanged original content |
| `meta-analysis` | Rodríguez Castillo et al., 2026 meta-analysis | Solution 4, "Prebunking" subsection |

This was verified directly against the actual `EVIDENCE_CARDS` array in
`siteContent.js` — do not re-derive or re-verify this mapping, just proceed
with the removal below.

## Changes to make

1. Delete `client/src/pages/Evidence.jsx` and its matching `.css` file.
2. Remove the `/evidence` route from the router.
3. Remove the "Evidence" link from `Nav.jsx` and `Footer.jsx`.
4. Remove the `EVIDENCE_CARDS` export from `siteContent.js` — every card's
   content is already covered elsewhere per the table above, so nothing
   needs to be migrated or rewritten first.
5. Update `docs/CONTENT_AND_SITEMAP.md`'s sitemap table to remove the
   Evidence row, reflecting the new 6-page structure: Home → Challenge →
   Solutions → Ecosystem → Recommendations → References.

## Definition of done

- No `/evidence` route exists, no broken links to it anywhere (check Home
  page CTA and any other internal links).
- Nav and footer show 6 items, not 7.
- `EVIDENCE_CARDS` and any component that only existed to render it (e.g.
  the Evidence page's card grid) are fully removed — no dead code, no
  unused imports.
