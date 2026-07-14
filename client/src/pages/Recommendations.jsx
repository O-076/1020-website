import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Quiz from '../components/Quiz';
import { useReveal } from '../hooks/useReveal';
import { RECOMMENDATIONS } from '../content/siteContent';
import './Recommendations.css';

function RecsHero() {
  const { ref, revealed } = useReveal(0.1);

  return (
    <section className="recs-hero section" ref={ref}>
      <div className={`container reveal ${revealed ? 'revealed' : ''}`}>
        <p className="recs-hero__label mono">Action Items</p>
        <h1 className="recs-hero__title">
          <span className="accent-text">Recommendations</span> for
          Curriculum Designers & Provosts
        </h1>
        <p className="recs-hero__sub text-muted">
          None of the four solutions works in isolation. These directed asks frame the
          ecosystem conclusion — each recommendation strengthens the whole system.
        </p>
      </div>
    </section>
  );
}

function RecommendationCards() {
  const { ref, revealed } = useReveal(0.15);

  return (
    <section id="recommendations-list" className="recs-cards section--bleed" ref={ref}>
      <div className={`container reveal ${revealed ? 'revealed' : ''}`}>
        <div className="recs-cards__grid">
          {RECOMMENDATIONS.map((rec, i) => (
            <article key={i} className="recs-card card" style={{ '--rec-delay': `${i * 80}ms` }}>
              <span className="recs-card__pillar mono">{rec.solution}</span>
              <h2 className="recs-card__title">{rec.title}</h2>
              <p className="recs-card__desc">{rec.description}</p>
              <p className="recs-card__citation mono text-muted">
                {rec.citation}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingStatement() {
  const { ref, revealed } = useReveal(0.15);

  return (
    <section className="recs-closing section" ref={ref}>
      <div className={`container container--reading reveal ${revealed ? 'revealed' : ''}`}>
        <blockquote className="recs-closing__quote">
          <p>
            Industry-backed curricula provide the relevant tools. Interactive learning
            methods serve as the engaging engine driving independent self-study. But this
            autonomy cannot function safely without the protective steering wheel of
            critical media literacy.
          </p>
          <p>
            By teaching students to spot creator bias and critically evaluate digital
            algorithms, educators ensure that independent learners are empowered by —
            rather than manipulated by — the digital platforms and AI systems they use
            to teach themselves.
          </p>
        </blockquote>
      </div>
    </section>
  );
}

function QuizSection() {
  const { ref, revealed } = useReveal(0.1);

  return (
    <section className="recs-quiz section--bleed" ref={ref}>
      <div className={`container reveal ${revealed ? 'revealed' : ''}`}>
        <Quiz />
      </div>
    </section>
  );
}

export default function Recommendations() {
  return (
    <PageTransition title="Recommendations">
      <RecsHero />
      <RecommendationCards />
      <ClosingStatement />
      <QuizSection />
    </PageTransition>
  );
}
