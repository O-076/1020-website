import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { useReveal } from '../hooks/useReveal';
import { RESEARCH_QUESTION, CHALLENGE_CITATIONS } from '../content/siteContent';
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
          The rapid rise of digital media and artificial intelligence has
          fundamentally changed education systems as we know it. In today's open
          digital environment, students are increasingly reliant on the open internet
          rather than textbooks and school provided resources to acquire knowledge
          they need study for exams and do their assignments.
        </p>
        <p className="challenge-shift__text">
          This shift poses a critical question: if students no longer learn from
          quality controlled, supervised and double checked institutional sources...
          who ensures the quality and accuracy of what they absorb?
        </p>

        <div className="challenge-contrast">
          <div className="challenge-contrast__card challenge-contrast__card--before">
            <span className="challenge-contrast__icon" aria-hidden="true">📚</span>
            <h3 className="challenge-contrast__label">Before</h3>
            <p className="challenge-contrast__desc text-muted">
              Curated offline textbooks with traditional quality-assurance.
              Information was supervised before reaching learners.
            </p>
          </div>
          <div className="challenge-contrast__divider" aria-hidden="true">
            <span>→</span>
          </div>
          <div className="challenge-contrast__card challenge-contrast__card--after">
            <span className="challenge-contrast__icon" aria-hidden="true">🌐</span>
            <h3 className="challenge-contrast__label">Now</h3>
            <p className="challenge-contrast__desc text-muted">
              An open internet with little to no 'gatekeepers'. The responsibility
              to access, select, process, and use trustworthy information rests
              entirely on the learner.
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
          The internet usually lacks the traditional quality-assurance 'gatekeepers'
          that filter information before it reached learners. Learners must now act
          as their own gatekeepers — navigating complex search engine results,
          evaluating source credibility, and using critical thinking processes in
          open, unstructured environments.
        </p>
        <p>
          Meanwhile, the rise of AI adds a new layer of complexity. AI content may
          appear authoritative and well-sourced all while containing fabricated
          citations, hallucinated information, and bias. When lacking the skills to
          detect these issues, students absorb misinformation as knowledge.
        </p>
        <p className="challenge-gate__cite mono text-muted">
          Sources: {CHALLENGE_CITATIONS.gatekeepers}
        </p>

        <div className="challenge-gate__vulnerabilities">
          <h3>Key Vulnerabilities</h3>
          <ul className="challenge-gate__list">
            <li>
              <strong>Algorithmic echo chambers</strong> — algorithms reinforce existing beliefs
              rather than broadening understanding
            </li>
            <li>
              <strong>"Infoxication"</strong> — information overload that overwhelms learners'
              ability to distinguish quality from noise
            </li>
            <li>
              <strong>AI hallucinations</strong> — AI outputs that are fabricated information with
              that may seem at surface level to be trusted or authoritative
            </li>
            <li>
              <strong>Covert commercial intent</strong> — content designed to persuade rather than
              inform, hidden behind a tone of objectivity
            </li>
          </ul>
          <p className="challenge-gate__cite mono text-muted" style={{ marginTop: 'var(--space-md)' }}>
            Sources: {CHALLENGE_CITATIONS.vulnerabilities}
          </p>
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
