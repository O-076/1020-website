# Content Revision — Group Update

This supersedes specific sections of `docs/CONTENT_AND_SITEMAP.md`. Read
both — this file only covers what changed; anything not mentioned here
(Evidence cards' non-stat content, References page, design system) stays as
previously specified.

**All content below is transcribed verbatim from the group's own source
documents (Naiera's Solutions doc, Omar's change plan, and the Website
notes doc) — no paraphrasing. Do not reword any of it when implementing;
copy it exactly as written here.**

**One open question below needs a decision before this goes to Antigravity
— see "Open Questions" at the bottom.**

---

## 1. New page order

Old nav order: Home → Challenge → Ecosystem → Solutions → Evidence →
Recommendations → References

**New nav order:** Home → Challenge → Solutions → Evidence → Ecosystem →
Recommendations → References

Update `Nav.jsx` and `Footer.jsx` link order to match. Routes/paths
themselves don't need to change, just the order they're listed in and
linked between.

---

## 2. Challenge page — updated content (verbatim from Website notes.docx)

**Intro:**

The rapid rise of digital media and artificial intelligence has
fundamentally changed education systems as we know it. In today's open
digital environment, students are increasingly reliant on the open internet
rather than textbooks and school provided resources to acquire knowledge
they need study for exams and do their assignments.

This shift poses a critical question: if students no longer learn from
quality controlled, supervised and double checked institutional sources...
who ensures the quality and accuracy of what they absorb?

**Before / Now contrast block:**

*Before:* Curated offline textbooks with traditional quality-assurance.
Information was supervised before reaching learners.

*Now:* An open internet with little to no 'gatekeepers'. The responsibility
to access, select, process, and use trustworthy information rests entirely
on the learner.

**No More Gatekeepers:**

The internet usually lacks the traditional quality-assurance 'gatekeepers'
that filter information before it reached learners. Learners must now act
as their own gatekeepers — navigating complex search engine results,
evaluating source credibility, and using critical thinking processes in
open, unstructured environments.

Meanwhile, the rise of AI adds a new layer of complexity. AI content may
appear authoritative and well-sourced all while containing fabricated
citations, hallucinated information, and bias. When lacking the skills to
detect these issues, students absorb misinformation as knowledge.

**Key Vulnerabilities** (keep the citation requirement from the earlier fix
brief under this list — these still trace to Molerov et al., 2020 and
Albardía et al., 2025):

- **Algorithmic echo chambers** — algorithms reinforce existing beliefs
  rather than broadening understanding
- **"Infoxication"** — information overload that overwhelms learners'
  ability to distinguish quality from noise
- **AI hallucinations** — AI outputs that are fabricated information with
  that may seem at surface level to be trusted or authoritative
- **Covert commercial intent** — content designed to persuade rather than
  inform, hidden behind a tone of objectivity

---

## 3. Solutions page — updated content (verbatim from Naiera's Solutions doc)

### Solution 1: Teaching Independent Self-Study (content updated, title unchanged)

**Growth Mindset for Lifelong Learning**

Self-directed learners must cultivate a **growth mindset**. As AI evolves
rapidly, the curriculum must empower students to be "lifelong learners"
through shifting the purpose of learning from completing a degree to
continuously developing skills. This prepares learners to adapt to new
tools and knowledge beyond formal education.

**The IPS-I Process = Information Problem Solving Using the Internet**

Independent learning can be structured through a five-step process:

- Defining the problem
- Searching for information
- Scanning sources for relevance
- Processing the information
- Presenting the information

Self-directed learners are solely responsible for evaluating information
reliability. Thus, they must learn strategies such as **lateral reading**,
which involves verifying information across multiple sources. Prompt
literacy further supports this process by helping students ask effective
questions when using AI tools.

**Sources: Ma et al., 2025; Molerov et al., 2020** (note: Ma et al. is a new
addition to this solution's citation list — previously only Molerov et al.
was cited here)

### Solution 2: Modern, Industry-Aligned Curricula (renamed from "Modern, Industry-Backed Curricula," content updated)

**Modular Design**

Curricula should be **modular**, with content divided into smaller units
that can be easily updated. This allows outdated tools or concepts to be
replaced without redesigning entire courses and aligns with the use of
micro-credentials to certify current skills.

**Industry Partnerships**

Partnership between universities and companies such as Google ensures
course content reflects real workforce demands. These collaborations
provide access to practical data and professional expertise, supporting
students' readiness for an AI-driven job market.

**Pull-quote box** (display separately, in a box beside the two bullet
points above, per Naiera's note to Omar — styled as a callout, not inline
body text):

> "In the realm of AI, 75% of these employers said they would hire a less
> experienced candidate with a GenAI credential over someone more
> experienced without one." — University System of Maryland, 2025

**Sources: Ma et al., 2025; University System of Maryland, 2025**

### Solution 3: "Interactive Learning Methods" — no updated content provided

No revision was supplied for this solution. **Default: keep the existing
content and citations from `docs/CONTENT_AND_SITEMAP.md` / Solutions.jsx
unchanged** for this solution until the group provides updated copy. Do not
delete or restructure this solution page.

### Solution 4: Identifying Bias and Misinformation (renamed from "Spotting Creator Bias," content updated — numbered "Solution 3" in the source doc, kept as Solution 4 here to match the existing four-solution structure)

**Source Evaluation**

Students should use **lateral reading** to verify information across
multiple sources. Evaluating a creator's expertise and intent helps
distinguish between reliable information and persuasive or biased content.
Learners should also recognize signs of manipulated or AI-generated media.

**Prebunking**

Prebunking teaches students to identify **misleading techniques,** such as
oversimplification or unsupported claims, before encountering them. This
strengthens critical thinking, builds "psychological resistance," making
students less likely to be swayed by emotionally biased content, and
encourages a cautious approach to AI-generated information.

**Sources: Castillo et al., 2026; Ma et al., 2025; Molerov et al., 2020**
(note: the LSE/Common Sense evaluation, previously cited for this solution,
is not listed in the new source doc — keep it cited too unless the group
confirms it should be dropped, since the underlying "digital divide" and
scenario-based workshop content from that source hasn't been explicitly
removed or replaced here)

---

## 4. Recommendations page — updated content (verbatim from Omar's change plan)

**New intro:**

Recommendations for Curriculum Designers & Provosts: These four solutions
work best when implemented together. Each recommendation supports the next
to help build a stronger, more resilient system.

**1. Make Self-Directed Learning a Core Competency:** Move away from
passive, rote memorization. Instead, design curricula that actively teach
students how to guide their own learning. By fostering a growth mindset, we
can prepare them to adapt as technology constantly evolves.
*Citation: Molerov et al., 2020*

**2. Build Active Industry Partnerships:** Partner with leading companies
and research institutions to give students direct access to modern AI
models, real-world data, and emerging workplace trends. Adopt a flexible,
modular course design so you can update lessons quickly without disrupting
entire degree programs.
*Citations: Ma et al., 2025; University System of Maryland, 2025*

**3. Require Interactive, Hands-On Learning:** Integrate problem-based and
project-based learning where students treat AI as a collaborative
brainstorming partner to evaluate and fact-check. Use scenario-based
workshops to build critical resistance to misinformation through active
engagement rather than lecture-heavy instruction.
*Citations: Albardía et al., 2025; Rodríguez Castillo et al., 2026; Ma et al., 2025; Banaji & Abades Barclay, 2024*

**4. Systematize Critical Media Literacy:** Train students to look beneath
the surface of the digital media they consume by examining platform
ownership, developer bias, and structural influence. To bridge the digital
divide, schools must actively teach bias-recognition rather than assuming
students will figure it out on their own.
*(No citation given in the source doc for this one — check whether Molerov
et al., 2020 and/or Albardía et al., 2025 should be attached here, since
those are the sources this content traced to previously)*

**Closing conclusion (replaces the current blockquote entirely — this is
new original prose from the group, not a quotation, and should NOT be
styled as a citation or blockquote):**

Industry-backed curricula provide the necessary tools, while interactive
learning methods drive students to study independently. However, this
independence must be anchored by critical media literacy to keep learners
safe and informed.

By teaching students to recognize creator bias and evaluate digital
algorithms, educators ensure that independent learners are empowered by,
rather than manipulated by, the AI systems and digital platforms they use.

This directly resolves the earlier "Literature Review, Conclusion"
self-citation problem on Recommendations.jsx — this new paragraph replaces
that quote entirely, is the group's own original writing, and needs no
citation or `<cite>` styling at all. Apply the equivalent fix to
Ecosystem.jsx's closing quote too, per the existing `FIX_BRIEF_CITATIONS.md`.

---

## Open Questions — resolve before handing to Antigravity

1. **Recommendation 4 has no citation in the source doc.** Confirm whether
   to attach Molerov et al., 2020 and/or Albardía et al., 2025, matching
   what that content traced to earlier in Solutions.

2. **"Interactive Learning Methods" has no updated content.** Confirmed
   default above is to leave it as-is — flag here in case that's wrong and
   someone else is still writing it.

3. **"Evidence may or may not get merged with Solutions"** — this file
   assumes Evidence stays a separate page (per the new nav order above). If
   the group decides to merge it, that's a bigger structural change this
   file doesn't yet cover — revisit before building if so.
