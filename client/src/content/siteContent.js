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
    citations: ['Ma et al., 2025', 'Molerov et al., 2020'],
    ecosystemRole: 'The destination — the autonomous learner the ecosystem aims to create.',
    color: 'var(--accent)',
    points: [
      '<strong>Growth Mindset for Lifelong Learning</strong>: Self-directed learners must cultivate a <strong>growth mindset</strong>. As AI evolves rapidly, the curriculum must empower students to be "lifelong learners" through shifting the purpose of learning from completing a degree to continuously developing skills. This prepares learners to adapt to new tools and knowledge beyond formal education.',
      '<strong>The IPS-I Process = Information Problem Solving Using the Internet</strong>: Independent learning can be structured through a five-step process: defining the problem, searching for information, scanning sources for relevance, processing the information, and presenting the information.',
      'Self-directed learners are solely responsible for evaluating information reliability. Thus, they must learn strategies such as <strong>lateral reading</strong>, which involves verifying information across multiple sources.',
      'Prompt literacy further supports this process by helping students ask effective questions when using AI tools.',
    ],
  },
  {
    id: 'industry-curricula',
    number: 2,
    title: 'Modern, Industry-Aligned Curricula',
    shortTitle: 'Industry Tools',
    icon: '🔧',
    tagline: 'Static curriculum models are made obsolete by the pace of Generative AI\'s evolution.',
    summary:
      'The rapid evolution of Generative AI renders static curriculum models obsolete. Institutions need dynamic updating mechanisms through strategic partnerships with industry and research institutions.',
    citations: ['Ma et al., 2025', 'University System of Maryland, 2025'],
    ecosystemRole: 'The fuel — providing the relevant, up-to-date tools the engine runs on.',
    color: 'var(--accent-secondary)',
    pullQuote: '"In the realm of AI, 75% of these employers said they would hire a less experienced candidate with a GenAI credential over someone more experienced without one." — University System of Maryland, 2025',
    points: [
      '<strong>Modular Design:</strong> Curricula should be <strong>modular</strong>, with content divided into smaller units that can be easily updated. This allows outdated tools or concepts to be replaced without redesigning entire courses and aligns with the use of micro-credentials to certify current skills.',
      '<strong>Industry Partnerships:</strong> Partnership between universities and companies such as Google ensures course content reflects real workforce demands. These collaborations provide access to practical data and professional expertise, supporting students\' readiness for an AI-driven job market.',
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
    citations: ['Albardía et al., 2025', 'Ma et al., 2025', 'Banaji & Abades Barclay, 2024'],
    ecosystemRole: 'The engine — the engaging pedagogy that drives self-directed learning forward.',
    color: 'var(--accent)',
    points: [
      'Albardía et al. (2025) argue that meaningful transformation requires a "dialogic-critical" method, in which students engage in active, critical dialogue to construct knowledge together, rather than absorbing it passively.',
      'Ma et al. (2025) advocate integrating AI directly into Problem-Based Learning (PBL) and Project-Based Learning (PjBL), where students use AI as a brainstorming partner they\'re required to evaluate and fact-check rather than accept at face value.',
      'The LSE evaluation of the Digital Citizenship Curriculum found that scenario-based, interactive explorations delivered in a "creative workshop-style format" build resistance to misinformation.',
    ],
  },
  {
    id: 'spotting-bias',
    number: 4,
    title: 'Identifying Bias and Misinformation',
    shortTitle: 'Critical Guardrails',
    icon: '🛡️',
    tagline: 'Without critical guardrails, learner autonomy becomes a vulnerability, not a strength.',
    summary:
      'Without rigorous evaluation skills, independent learners are easily manipulated by algorithmic echo chambers, commercial agendas, "infoxication," and AI hallucinations.',
    citations: ['Rodríguez Castillo et al., 2026', 'Ma et al., 2025', 'Molerov et al., 2020', 'Banaji & Abades Barclay, 2024'],
    ecosystemRole: 'The steering wheel — making learner autonomy safe rather than exploitable.',
    color: 'var(--accent-secondary)',
    points: [
      '<strong>Source Evaluation:</strong> Students should use <strong>lateral reading</strong> to verify information across multiple sources. Evaluating a creator\'s expertise and intent helps distinguish between reliable information and persuasive or biased content. Learners should also recognize signs of manipulated or AI-generated media.',
      '<strong>Prebunking:</strong> Prebunking teaches students to identify <strong>misleading techniques,</strong> such as oversimplification or unsupported claims, before encountering them. This strengthens critical thinking, builds "psychological resistance," making students less likely to be swayed by emotionally biased content, and encourages a cautious approach to AI-generated information.',
    ],
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
    title: 'Make Self-Directed Learning a Core Competency',
    description:
      'Move away from passive, rote memorization. Instead, design curricula that actively teach students how to guide their own learning. By fostering a growth mindset, we can prepare them to adapt as technology constantly evolves.',
    citation: 'Molerov et al., 2020',
  },
  {
    solution: 'Industry Tools',
    title: 'Build Active Industry Partnerships',
    description:
      'Partner with leading companies and research institutions to give students direct access to modern AI models, real-world data, and emerging workplace trends. Adopt a flexible, modular course design so lessons can be updated quickly without disrupting entire degree programs.',
    citation: 'Ma et al., 2025; University System of Maryland, 2025',
  },
  {
    solution: 'Interactive Methods',
    title: 'Require Interactive, Hands-On Learning',
    description:
      'Integrate problem-based and project-based learning where students treat AI as a collaborative brainstorming partner to evaluate and fact-check. Use scenario-based workshops to build critical resistance to misinformation through active engagement rather than lecture-heavy instruction.',
    citation: 'Albardía et al., 2025; Rodríguez Castillo et al., 2026; Ma et al., 2025; Banaji & Abades Barclay, 2024',
  },
  {
    solution: 'Critical Guardrails',
    title: 'Systematize Critical Media Literacy',
    description:
      'Train students to look beneath the surface of the digital media they consume by examining platform ownership, developer bias, and structural influence. To bridge the digital divide, schools must actively teach bias-recognition rather than assuming students will figure it out on their own.',
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
