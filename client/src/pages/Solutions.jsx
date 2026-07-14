import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import BiasSimulation from '../components/BiasSimulation';
import { useReveal } from '../hooks/useReveal';
import { SOLUTIONS } from '../content/siteContent';
import './Solutions.css';

function SolutionNav({ currentId }) {
  return (
    <nav className="sol-nav" aria-label="Solution navigation">
      <div className="sol-nav__inner container">
        {SOLUTIONS.map((s) => (
          <Link
            key={s.id}
            to={`/solutions/${s.id}`}
            className={`sol-nav__link mono ${currentId === s.id ? 'sol-nav__link--active' : ''}`}
          >
            <span className="sol-nav__link-icon" aria-hidden="true">{s.icon}</span>
            <span className="sol-nav__link-label">{s.shortTitle}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

function SolutionContent({ solution }) {
  const { ref, revealed } = useReveal(0.1);

  return (
    <section className="sol-content section" ref={ref}>
      <div className={`container container--reading reveal ${revealed ? 'revealed' : ''}`}>
        <div className="sol-content__header">
          <span className="sol-content__number mono text-muted">
            Solution {String(solution.number).padStart(2, '0')}
          </span>
          <h1 className="sol-content__title">{solution.title}</h1>
          <p className="sol-content__tagline">{solution.tagline}</p>
        </div>

        <div className="sol-content__role-badge">
          <span className="mono text-muted">Ecosystem role</span>
          <p>{solution.ecosystemRole}</p>
        </div>

        <div className="sol-content__points">
          {solution.points.map((point, i) => (
            <div key={i} className="sol-content__point">
              <span className="sol-content__point-marker" aria-hidden="true" />
              <p>{point}</p>
            </div>
          ))}
        </div>

        <p className="sol-content__citation mono text-muted">
          Key source: {solution.keyCitation}
        </p>
      </div>
    </section>
  );
}

function BiasSection() {
  const { ref, revealed } = useReveal(0.1);

  return (
    <section className="sol-bias section--bleed" ref={ref}>
      <div className={`container reveal ${revealed ? 'revealed' : ''}`}>
        <div className="sol-bias__intro">
          <h2>Interactive Exercise</h2>
          <p className="text-muted">
            Practice identifying bias in AI-generated content. This simulation
            resets each visit — no data is stored.
          </p>
        </div>
        <BiasSimulation />
      </div>
    </section>
  );
}

function AdjacentSolutions({ currentId }) {
  const { ref, revealed } = useReveal(0.1);
  const others = SOLUTIONS.filter(s => s.id !== currentId);

  return (
    <section className="sol-adjacent section" ref={ref}>
      <div className={`container reveal ${revealed ? 'revealed' : ''}`}>
        <h2 className="sol-adjacent__heading">
          Connected in the <span className="accent-text">Ecosystem</span>
        </h2>
        <p className="sol-adjacent__sub text-muted">
          No solution works in isolation — explore how the other pillars connect.
        </p>
        <div className="sol-adjacent__grid">
          {others.map(s => (
            <Link key={s.id} to={`/solutions/${s.id}`} className="sol-adjacent__card card">
              <span className="sol-adjacent__card-icon" aria-hidden="true">{s.icon}</span>
              <h3>{s.shortTitle}</h3>
              <p className="text-muted">{s.tagline}</p>
              <span className="sol-adjacent__card-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Solutions() {
  const { slug } = useParams();
  const solution = SOLUTIONS.find(s => s.id === slug);

  if (!solution) {
    return <Navigate to="/solutions/self-study" replace />;
  }

  return (
    <PageTransition title={solution.title} key={slug}>
      <SolutionNav currentId={slug} />
      <SolutionContent solution={solution} />
      {slug === 'spotting-bias' && <BiasSection />}
      <AdjacentSolutions currentId={slug} />
    </PageTransition>
  );
}
