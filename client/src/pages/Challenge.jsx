import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { useReveal } from '../hooks/useReveal';
import { RESEARCH_QUESTION } from '../content/siteContent';
import './Challenge.css';

function ChallengeHero() {
  const { ref, revealed } = useReveal(0.1);

  return (
    <section className="challenge-hero section" ref={ref}>
      <div className={`container reveal ${revealed ? 'revealed' : ''}`}>
        <p className="challenge-hero__label mono">The Problem</p>
        <h1 className="challenge-hero__title">
          The world changed.<br />
          <span className="accent-text">Curricula didn't.</span>
        </h1>
      </div>
    </section>
  );
}

function ShiftSection() {
  const { ref, revealed } = useReveal(0.15);

  return (
    <section className="challenge-shift section--bleed" ref={ref}>
      <div className={`container container--reading reveal ${revealed ? 'revealed' : ''}`}>
        <h2 className="challenge-shift__heading">The Digital Shift</h2>
        <p className="challenge-shift__text">
          The rapid proliferation of digital media and generative artificial intelligence has
          fundamentally disrupted traditional higher education paradigms. In today's open digital
          environment, students are increasingly reliant on the open internet rather than curated
          offline textbooks to acquire knowledge and study for exams.
        </p>
        <p className="challenge-shift__text">
          This shift forces a critical question: if students no longer learn from vetted,
          institutional sources, who ensures the quality and accuracy of what they absorb?
        </p>

        <div className="challenge-contrast">
          <div className="challenge-contrast__card challenge-contrast__card--before">
            <span className="challenge-contrast__icon" aria-hidden="true">📚</span>
            <h3 className="challenge-contrast__label">Before</h3>
            <p className="challenge-contrast__desc text-muted">
              Curated offline textbooks with traditional quality-assurance gatekeepers.
              Information was vetted before reaching learners.
            </p>
          </div>
          <div className="challenge-contrast__divider" aria-hidden="true">
            <span>→</span>
          </div>
          <div className="challenge-contrast__card challenge-contrast__card--after">
            <span className="challenge-contrast__icon" aria-hidden="true">🌐</span>
            <h3 className="challenge-contrast__label">Now</h3>
            <p className="challenge-contrast__desc text-muted">
              An open internet without gatekeepers. The responsibility to access, select,
              process, and use trustworthy information rests entirely on the individual learner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GatekeepersSection() {
  const { ref, revealed } = useReveal(0.15);

  return (
    <section className="challenge-gate section" ref={ref}>
      <div className={`container container--reading reveal ${revealed ? 'revealed' : ''}`}>
        <h2 className="challenge-gate__heading">No More Gatekeepers</h2>
        <p>
          The web lacks the traditional quality-assurance gatekeepers that once filtered
          information before it reached learners. Students must now act as their own
          gatekeepers — navigating complex search engine results, evaluating source credibility,
          and managing their cognitive processes in open, unstructured environments.
        </p>
        <p>
          Meanwhile, the rise of generative AI adds a new layer of complexity. AI-generated
          content can appear authoritative and well-sourced while containing fabricated
          citations, hallucinated data, and subtly biased framing. Without the skills to
          detect these issues, students absorb misinformation as knowledge.
        </p>

        <div className="challenge-gate__vulnerabilities">
          <h3>Key Vulnerabilities</h3>
          <ul className="challenge-gate__list">
            <li>
              <strong>Algorithmic echo chambers</strong> — search and recommendation algorithms
              reinforce existing beliefs rather than broadening understanding
            </li>
            <li>
              <strong>"Infoxication"</strong> — information overload that overwhelms learners'
              ability to distinguish quality from noise
            </li>
            <li>
              <strong>AI hallucinations</strong> — generative AI outputs that present fabricated
              information with the appearance of authority
            </li>
            <li>
              <strong>Covert commercial intent</strong> — content designed to persuade rather
              than inform, hidden behind a veneer of objectivity
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ResearchQuestionSection() {
  const { ref, revealed } = useReveal(0.15);

  return (
    <section className="challenge-rq section--bleed" ref={ref}>
      <div className={`container reveal ${revealed ? 'revealed' : ''}`}>
        <div className="challenge-rq__card">
          <p className="challenge-rq__label mono">The Research Question</p>
          <blockquote className="challenge-rq__quote">
            <p>"{RESEARCH_QUESTION}"</p>
          </blockquote>
          <p className="challenge-rq__context text-muted">
            Current literature suggests that answering this requires a holistic, ecosystem
            approach — not four separate initiatives, but one interdependent system.
          </p>
          <Link to="/ecosystem" className="btn btn--primary">
            See the Ecosystem Approach
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Challenge() {
  return (
    <PageTransition title="The Challenge">
      <ChallengeHero />
      <ShiftSection />
      <GatekeepersSection />
      <ResearchQuestionSection />
    </PageTransition>
  );
}
