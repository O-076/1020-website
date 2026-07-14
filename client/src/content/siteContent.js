/* Content data — sourced from docs/CONTENT_AND_SITEMAP.md and docs/LITERATURE_REVIEW.md */

export const RESEARCH_QUESTION =
  'What strategies should curriculum designers adopt to promote self-directed learning while ensuring students critically evaluate online information, including AI-generated content?';

export const CHALLENGE_CITATIONS = {
  gatekeepers: 'Molerov et al., 2020; Albardía et al., 2025',
  vulnerabilities: 'Molerov et al., 2020; Albardía et al., 2025',
};

export const SOLUTIONS = [
  {
    id: 'self-study',
    number: 1,
    title: 'Teaching Independent Self-Study',
    shortTitle: 'Self-Study',
    icon: '🧭',
    tagline: 'The open web demands self-directed learning — no gatekeepers means the learner is responsible.',
    summary:
      'The open web lacks traditional quality-assurance gatekeepers, shifting the responsibility for accessing, selecting, processing, and using trustworthy information entirely onto the independent learner.',
    citations: ['Molerov et al., 2020'],
    ecosystemRole: 'The destination — the autonomous learner the ecosystem aims to create.',
    color: 'var(--accent)',
    points: [
      'Students must act as independent reasoners: formulating their own research questions, scanning complex search results, and managing their own cognitive processes.',
      'Curricula must shift from passive, rote memorization toward adaptive, self-directed learning abilities.',
      'In an AI-saturated world, the unique contribution of human intellect lies in creative problem-solving, critical adaptation, and ethical reasoning.',
      'Educators should foster a "growth mindset" for lifelong learning and adaptation beyond graduation.',
    ],
  },
  {
    id: 'industry-curricula',
    number: 2,
    title: 'Modern, Industry-Backed Curricula',
    shortTitle: 'Industry Tools',
    icon: '🔧',
    tagline: 'Static curriculum models are made obsolete by the pace of Generative AI\'s evolution.',
    summary:
      'The rapid evolution of Generative AI renders static curriculum models obsolete. Institutions need dynamic updating mechanisms through strategic partnerships with industry and research institutions.',
    citations: ['Ma et al., 2025', 'University System of Maryland, 2025'],
    ecosystemRole: 'The fuel — providing the relevant, up-to-date tools the engine runs on.',
    color: 'var(--accent-secondary)',
    points: [
      'Institutions must establish dynamic updating mechanisms via strategic industry and research partnerships for access to current models, datasets, and workplace trends.',
      'The University System of Maryland partnered with Google to offer Google Career Certificates and AI training, dynamically updating the curriculum to address workforce needs.',
      '75% of surveyed employers would hire a less experienced candidate with a generative AI credential over a more experienced one without it.',
      'Ma et al. (2025) propose "modular curricula" — small, self-contained units that can be updated quickly without disrupting whole degree programs.',
    ],
  },
  {
    id: 'interactive-methods',
    number: 3,
    title: 'Promoting Interactive Learning Methods',
    shortTitle: 'Interactive Methods',
    icon: '⚡',
    tagline: 'Simply telling students to teach themselves is insufficient — active engagement is essential.',
    summary:
      'True educational transformation requires a "dialogic-critical" method where students participate in active, critical dialog to co-construct knowledge rather than passively consuming digital content.',
    citations: ['Albardía et al., 2025', 'Rodríguez Castillo et al., 2026', 'Ma et al., 2025', 'Banaji & Abades Barclay, 2024'],
    ecosystemRole: 'The engine — the engaging pedagogy that drives self-directed learning forward.',
    color: 'var(--accent)',
    points: [
      'Albardía et al. (2025) emphasize that true transformation needs a "dialogic-critical" method — active, critical dialog to co-construct knowledge.',
      'A systematic meta-analysis by Rodríguez Castillo et al. (2026) shows that active source verification, lateral reading, and "cognitive inoculation" (prebunking) significantly improve the ability to identify fake news.',
      'Ma et al. (2025) advocate integrating AI directly into Problem-Based Learning (PBL) and Project-Based Learning (PjBL) — using AI as a brainstorming partner students must evaluate and fact-check.',
      'The LSE evaluation of the Digital Citizenship Curriculum found that scenario-based, interactive explorations in a "creative workshop-style format" effectively build resistance to misinformation.',
    ],
  },
  {
    id: 'spotting-bias',
    number: 4,
    title: 'Spotting Creator Bias',
    shortTitle: 'Critical Guardrails',
    icon: '🛡️',
    tagline: 'Without critical guardrails, learner autonomy becomes a vulnerability, not a strength.',
    summary:
      'Without rigorous evaluation skills, independent learners are easily manipulated by algorithmic echo chambers, commercial agendas, "infoxication," and AI hallucinations.',
    citations: ['Molerov et al., 2020', 'Albardía et al., 2025', 'Banaji & Abades Barclay, 2024'],
    ecosystemRole: 'The steering wheel — making learner autonomy safe rather than exploitable.',
    color: 'var(--accent-secondary)',
    points: [
      'Without critical guardrails, autonomous learners are vulnerable to algorithmic echo chambers, commercial agendas, "infoxication" (information overload), and AI hallucinations.',
      '"Critical Online Reasoning" is essential — students must be trained to recognize manipulative framing, evaluate author credibility, and spot covert commercial intent.',
      'AI introduces deepfakes and algorithmic biases, requiring students to uncover the power dynamics and ideologies shaping media narratives.',
      'A persistent "digital divide" exists: students from digitally experienced households navigate these tools intuitively, while others remain vulnerable. Bias-recognition must be explicitly taught.',
    ],
  },
];

export const EVIDENCE_CARDS = [
  {
    id: 'maryland-google',
    title: 'University System of Maryland × Google',
    source: 'University System of Maryland, 2025; Ma et al., 2025',
    finding:
      'The University System of Maryland partnered directly with Google to offer Google Career Certificates and AI training, dynamically updating the university curriculum to address immediate workforce needs.',
    significance:
      'Demonstrates that strategic industry partnerships can keep curricula current with the pace of AI evolution, rather than relying on slow institutional update cycles.',
  },
  {
    id: 'employer-stat',
    title: '75% Employer Credential Preference',
    source: 'Ma et al., 2025',
    finding:
      '75% of surveyed employers would hire a less experienced candidate with a generative AI credential over a more experienced candidate without one.',
    significance:
      'Underscores the labor-market imperative: industry-backed credentials are not supplementary — they are becoming a baseline expectation for hiring.',
  },
  {
    id: 'lse-evaluation',
    title: 'LSE Evaluation of the Digital Citizenship Curriculum',
    source: 'Banaji & Abades Barclay, 2024',
    finding:
      'Scenario-based, interactive explorations of everyday digital dilemmas in a "creative workshop-style format" are highly effective in building student resistance to misinformation, digital drama, and online hate.',
    significance:
      'Validates interactive, workshop-style pedagogy as an effective method for developing critical media literacy — not just content delivery, but experiential learning.',
  },
  {
    id: 'meta-analysis',
    title: 'Prebunking & Lateral Reading Meta-Analysis',
    source: 'Rodríguez Castillo et al., 2026',
    finding:
      'Active source verification, lateral reading, and "cognitive inoculation" (prebunking) significantly improve adolescents\' ability to identify fake news and reduce their intent to share misleading content.',
    significance:
      'Provides robust empirical evidence (systematic meta-analysis) that specific interactive pedagogies produce measurable improvements in critical evaluation skills.',
  },
];

export const QUIZ_QUESTIONS = [
  {
    question: 'Does your curriculum explicitly teach students how to evaluate the credibility of online sources and AI-generated content?',
    options: [
      { text: 'Yes — it\'s a core, assessed learning outcome', score: 3 },
      { text: 'Partially — it\'s mentioned but not systematically taught', score: 2 },
      { text: 'Not yet — we rely on students\' existing skills', score: 1 },
    ],
  },
  {
    question: 'How frequently is your curriculum updated to reflect changes in industry tools and AI technologies?',
    options: [
      { text: 'At least annually, through active industry partnerships', score: 3 },
      { text: 'Every few years during scheduled reviews', score: 2 },
      { text: 'Rarely — major updates require full program overhauls', score: 1 },
    ],
  },
  {
    question: 'Do your courses incorporate interactive methods like Problem-Based Learning or scenario-based workshops where students actively engage with AI tools?',
    options: [
      { text: 'Yes — interactive methods are central to our pedagogy', score: 3 },
      { text: 'In some courses, but it\'s not standard practice', score: 2 },
      { text: 'No — most instruction is lecture-based or passive', score: 1 },
    ],
  },
  {
    question: 'Are students trained to identify creator bias, algorithmic influence, and covert commercial intent in the digital content they consume?',
    options: [
      { text: 'Yes — this is explicitly taught and practiced', score: 3 },
      { text: 'Somewhat — it comes up occasionally in discussions', score: 2 },
      { text: 'No — critical media literacy is not formally addressed', score: 1 },
    ],
  },
  {
    question: 'Does your institution use modular curriculum structures that allow individual units to be updated without disrupting entire degree programs?',
    options: [
      { text: 'Yes — we use modular, independently updatable units', score: 3 },
      { text: 'We\'re moving toward it, but legacy structures remain', score: 2 },
      { text: 'No — changes require revising whole programs', score: 1 },
    ],
  },
];

export const QUIZ_RESULTS = [
  {
    range: [5, 8],
    level: 'Emerging',
    title: 'Your Curriculum Needs the Full Ecosystem',
    description:
      'Your institution is at an early stage in adapting to the demands of digital-age education. The literature is clear: isolated initiatives will not suffice. Consider adopting all four pillars — self-directed learning, industry partnerships, interactive pedagogy, and critical media literacy — as an interdependent system.',
  },
  {
    range: [9, 11],
    level: 'Developing',
    title: 'Foundations Are in Place — Connect the Dots',
    description:
      'You\'ve made progress in some areas, but the four solutions are likely operating as separate initiatives rather than a connected ecosystem. The research shows that industry-backed tools fuel interactive methods, which drive self-study — but only when critical media literacy serves as the protective steering wheel.',
  },
  {
    range: [12, 15],
    level: 'Ecosystem-Ready',
    title: 'Your Curriculum Is Approaching Ecosystem Integration',
    description:
      'Your institution shows strong alignment with the ecosystem model. Continue strengthening the connections between your four pillars: ensure industry partnerships inform interactive pedagogy, self-directed learning is actively scaffolded, and critical evaluation skills protect the autonomy you\'re building.',
  },
];

export const RECOMMENDATIONS = [
  {
    solution: 'Self-Study',
    title: 'Embed Self-Directed Learning as a Core Competency',
    description:
      'Shift curricula from passive, rote memorization toward explicitly cultivating students\' adaptive, self-directed learning abilities. Foster a "growth mindset" that prepares learners for lifelong adaptation to emerging technologies.',
    citation: 'Molerov et al., 2020',
  },
  {
    solution: 'Industry Tools',
    title: 'Establish Dynamic Industry Partnerships',
    description:
      'Create strategic partnerships with industry and research institutions to ensure access to cutting-edge AI models, real-world datasets, and immediate workplace trends. Adopt modular curricula that can be swiftly updated without disrupting entire degree programs.',
    citation: 'Ma et al., 2025; University System of Maryland, 2025',
  },
  {
    solution: 'Interactive Methods',
    title: 'Mandate Interactive, Dialogic-Critical Pedagogy',
    description:
      'Integrate Problem-Based and Project-Based Learning where students use AI as a brainstorming partner they must evaluate and fact-check. Deploy scenario-based workshops that build resistance to misinformation through active engagement, not passive instruction.',
    citation: 'Albardía et al., 2025; Rodríguez Castillo et al., 2026; Ma et al., 2025; Banaji & Abades Barclay, 2024',
  },
  {
    solution: 'Critical Guardrails',
    title: 'Make Critical Media Literacy Mandatory, Not Optional',
    description:
      'Explicitly teach students to investigate the ownership of technologies, the ideological bias of creators, and the hidden intentions behind the media they consume. Do not assume digital-native students can navigate these challenges intuitively — a persistent "digital divide" means bias-recognition must be systematically taught.',
    citation: 'Molerov et al., 2020; Albardía et al., 2025; Banaji & Abades Barclay, 2024',
  },
];

export const REFERENCES = [
  {
    id: 'molerov-2020',
    category: 'scholarly',
    citation: 'Molerov, D., Zlatkin-Troitschanskaia, O., Nagel, M.-T., Brückner, S., Schmidt, S., & Shavelson, R. J. (2020). Assessing university students\' critical online reasoning ability: A conceptual and assessment framework with preliminary evidence. Frontiers in Education, 5, Article 577843. https://doi.org/10.3389/feduc.2020.577843',
  },
  {
    id: 'albardia-2025',
    category: 'scholarly',
    citation: 'Albardía, M. S., Peña-Fernández, S., & Agirreazkuenaga, I. (2025). Technology, education and critical media literacy: Potential, challenges, and opportunities. Frontiers in Human Dynamics, 7, Article 1608911. https://doi.org/10.3389/fhumd.2025.1608911',
  },
  {
    id: 'rodriguez-castillo-2026',
    category: 'scholarly',
    citation: 'Rodríguez Castillo, N. E., Mendoza Carrera, J. E., Andrade-Vásquez, M. M., & Acosta-Barreno, K. (2026). Media literacy education and misinformation in social media among adolescents: A systematic review and meta-analysis. Journalism and Media, 7(2), Article 71. https://doi.org/10.3390/journalmedia7020071',
  },
  {
    id: 'ma-2025',
    category: 'scholarly',
    citation: 'Ma, Y., Su, Y., Li, M., Zhang, Y., Chai, W., Huang, A., & Zhao, X. (2025). Preparing students for an AI-driven world: Generative AI and curriculum reform in higher education. Frontiers of Digital Education, 2(4), Article 30. https://doi.org/10.1007/s44366-025-0067-6',
  },
  {
    id: 'usmd-google-2025',
    category: 'popular',
    citation: 'University System of Maryland. (2025, June 17). University System of Maryland and Google announce partnership to bring Google Career Certificates and AI training to thousands of learners [Press release]. https://www.usmd.edu/newsroom/news/2495',
  },
  {
    id: 'banaji-2024',
    category: 'popular',
    citation: 'Banaji, S., & Abades Barclay, F. (2024). LSE–Common Sense Digital Citizenship Curriculum Evaluation Report. London School of Economics and Political Science. https://www.lse.ac.uk/News/News-Assets/PDFs/2024/LSE-%E2%80%94-Common-Sense-Digital-Citizenship-Curriculum-Evaluation-Report-high-res-web-version-V6.pdf',
  },
];
