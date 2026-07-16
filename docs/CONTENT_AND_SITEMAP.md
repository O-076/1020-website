# Content & Sitemap

Source of truth: the group's finalized literature review (not reproduced here in
full — see `/docs/LITERATURE_REVIEW.md` if you paste it into the repo verbatim).
Every claim below must be traceable to that text. Do not invent statistics,
studies, or quotes when building pages — if a page needs supporting content
beyond what's listed here, flag it for the group rather than generating it.

Audience: higher education curriculum designers, university provosts, academic
policymakers. Tone: authoritative, evidence-led, action-oriented. Not a student-
facing site — write copy accordingly (no second-person "you'll love this",
more "institutions that adopt X see Y").

## Sitemap

| # | Page | Route | Purpose |
|---|------|-------|---------|
| 1 | Home | `/` | Hook + thesis preview |
| 2 | The Challenge | `/challenge` | Problem statement, sets up the RQ |
| 3 | Solutions | `/solutions/:slug` | Deep dive per solution (4 sub-routes) |
| 4 | The Ecosystem | `/ecosystem` | Interactive diagram, core thesis |
| 5 | Recommendations | `/recommendations` | Call to action for policymakers |
| 6 | References | `/references` | Full source list |

Global nav: Home / Challenge / Solutions / Ecosystem / Recommendations / References.
Persistent light/dark toggle in the nav bar (see DESIGN_SYSTEM.md).

---

## 1. Home (`/`)

**Research Question (verbatim, always quoted exactly, never paraphrased on
this page since it's the thesis statement):**
"What strategies should curriculum designers adopt to promote self-directed
learning while ensuring students critically evaluate online information,
including AI-generated content?"

**Hero:** Reframe the stakes — curricula built for a world with information
gatekeepers, now operating in one without them. Optional short looped
background animation/video suggesting an open, ungated information
environment.

**Four-node preview:** The four solutions as connected nodes, not a list —
Teaching Independent Self-Study → Modern, Industry-Backed Curricula →
Promoting Interactive Learning Methods → Spotting Creator Bias — each links to
its Solutions sub-page.

**Stat callout:** 75% of surveyed employers would hire a less experienced
candidate with a generative AI credential over a more experienced candidate
without one (Solution 2 evidence).

**Closing CTA:** link to `/ecosystem` and `/recommendations`.

---

## 2. The Challenge (`/challenge`)

Content from the Introduction: students now rely on the open internet rather
than curated offline textbooks; the web lacks traditional quality-assurance
gatekeepers, shifting responsibility for evaluating information onto the
individual learner. State the RQ here in full again as the page's anchor.

---

## 3. The Ecosystem (`/ecosystem`)

Core interactive page. Diagram shows the four solutions as an interdependent
cycle (per the Conclusion: "the four proposed solutions cannot operate in
isolation"). Each node, on click, surfaces:
- One-sentence summary of that solution
- Its key citation
- A link to the full Solutions sub-page

Framing text from the Conclusion: industry-backed curricula supply the tools,
interactive methods are the engine driving self-study, and critical media
literacy is the "protective steering wheel" making that autonomy safe.

---

## 4. Solutions (`/solutions/:slug`)

Four sub-pages, one per solution. Each should include: the core claim, the
supporting citation(s), and one concrete example pulled from the evidence
below where available.

### 4a. Teaching Independent Self-Study (`self-study`)
- The open web demands self-directed learning; no gatekeepers means the
  learner is responsible for accessing, selecting, processing, and using
  trustworthy information (Molerov et al., 2020).
- Students must act as independent reasoners: formulating their own research
  questions, scanning complex search results, managing their own cognitive
  process (Molerov et al., 2020).
- Curricula must shift from passive/rote memorization toward adaptive,
  self-directed learning ability.
- Human intellect's unique contribution in an AI-saturated world: creative
  problem-solving, critical adaptation, ethical reasoning.
- Educators should foster a "growth mindset" for lifelong learning and
  adaptation beyond graduation.

### 4b. Modern, Industry-Backed Curricula (`industry-curricula`)
- Static curriculum models are made obsolete by the pace of Generative AI's
  evolution.
- Ma et al. (2025): institutions need dynamic updating mechanisms via
  strategic industry/research partnerships for access to current models,
  datasets, and workplace trends.
- Case study: University System of Maryland partnered with Google for Google
  Career Certificates and AI training.
- Stat: 75% of surveyed employers would hire a less experienced candidate
  with a generative AI credential over a more experienced one without it.
- Ma et al. (2025) also propose "modular curricula" — small, self-contained
  units that can be updated quickly without disrupting whole degree programs.

### 4c. Promoting Interactive Learning Methods (`interactive-methods`)
- Albardía et al. (2025): true transformation needs a "dialogic-critical"
  method — active, critical dialog to co-construct knowledge, not passive
  consumption.
- Rodríguez Castillo et al. (2026), systematic meta-analysis: active source
  verification, lateral reading, and "cognitive inoculation" (prebunking)
  significantly improve adolescents' ability to identify fake news and reduce
  intent to share misleading content.
- Ma et al. (2025): integrate AI directly into Problem-Based Learning (PBL)
  and Project-Based Learning (PjBL) — AI as a brainstorming partner students
  must evaluate, fact-check, and refine rather than accept at face value.
- Case study: LSE evaluation of the UK Digital Citizenship Curriculum — a
  "creative workshop-style format" of scenario-based, interactive
  explorations of everyday digital dilemmas builds resistance to
  misinformation, digital drama, and online hate.

### 4d. Spotting Creator Bias (`spotting-bias`)
- Without critical guardrails, autonomy is a vulnerability: algorithmic echo
  chambers, commercial agendas, "infoxication" (information overload), and AI
  hallucinations.
- Molerov et al. (2020): "Critical Online Reasoning" — students must be
  trained to recognize manipulative framing, evaluate author credibility, and
  spot covert commercial intent.
- Albardía et al. (2025): AI introduces deepfakes and algorithmic bias,
  requiring students to uncover power dynamics and ideologies shaping media
  narratives.
- LSE evaluation: a persistent "digital divide" — students from digitally
  experienced households navigate these tools intuitively, others face steep
  learning curves and remain vulnerable. Bias-recognition cannot be left to
  chance; it must be explicitly taught (ownership of technologies, ideological
  bias of creators, hidden intentions in media).

---

## 5. Recommendations (`/recommendations`)

Directed asks for provosts/curriculum designers, framed as the ecosystem
conclusion — none of the four solutions works in isolation. Suggested
structure: one recommendation per solution, then a closing statement drawn
from the Conclusion (industry tools + interactive methods drive self-study;
critical media literacy makes that autonomy safe rather than exploitable).

## Citation format

Use a consistent inline citation style across all pages (e.g. "Author et al.,
Year" linking to a `/sources` anchor or footnote list). Do not quote the
literature review verbatim in long spans — paraphrase per the content above,
and keep any direct quotes short and clearly marked.
