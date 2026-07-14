import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { useReveal } from '../hooks/useReveal';
import { RESEARCH_QUESTION, SOLUTIONS } from '../content/siteContent';
import './Home.css';

function HeroSection() {
  const { ref, revealed } = useReveal(0.1);

  return (
    <section className="hero" ref={ref}>
      <div className="hero__bg-pattern" aria-hidden="true">
        <svg className="hero__threads" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
          <path className="hero__thread-line" d="M0,200 C200,100 300,300 400,200 S600,100 800,200" />
          <path className="hero__thread-line hero__thread-line--delayed" d="M0,220 C150,320 350,120 500,220 S700,320 800,220" />
        </svg>
      </div>

      <div className={`hero__content container reveal ${revealed ? 'revealed' : ''}`}>
        <p className="hero__label mono">Group Multimodal Synthesis Project</p>
        <h1 className="hero__title">
          Curricula built for a world with
          <span className="hero__em"> information gatekeepers</span> — now
          operating in one without them.
        </h1>
        <blockquote className="hero__rq">
          <p className="hero__rq-text">"{RESEARCH_QUESTION}"</p>
        </blockquote>
        <div className="hero__actions">
          <Link to="/ecosystem" className="btn btn--primary">
            Explore the Ecosystem
            <span aria-hidden="true">→</span>
          </Link>
          <Link to="/challenge" className="btn btn--outline">
            The Challenge
          </Link>
        </div>
      </div>
    </section>
  );
}

function NodePreview() {
  const { ref, revealed } = useReveal(0.15);

  return (
    <section className="nodes-section section" ref={ref}>
      <div className={`container reveal ${revealed ? 'revealed' : ''}`}>
        <h2 className="nodes-section__heading">
          Four Solutions. One <span className="accent-text">Interdependent</span> System.
        </h2>
        <p className="nodes-section__sub text-muted">
          The literature makes clear that these solutions cannot operate in isolation — they form an ecosystem where each pillar supports the others.
        </p>

        <div className="nodes-grid">
          {/* SVG thread connecting the nodes */}
          <svg className="nodes-grid__thread" viewBox="0 0 1000 80" preserveAspectRatio="none" aria-hidden="true">
            <path
              className="thread-path"
              d="M50,40 C200,40 200,40 300,40 S400,40 500,40 S600,40 700,40 S800,40 950,40"
              fill="none"
              stroke="var(--accent-secondary)"
              strokeWidth="2"
              strokeDasharray="8 4"
            />
          </svg>

          {SOLUTIONS.map((solution, i) => (
            <Link
              key={solution.id}
              to={`/solutions/${solution.id}`}
              className="node-card"
              style={{ '--node-delay': `${i * 100}ms` }}
            >
              <span className="node-card__number mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="node-card__icon" aria-hidden="true">{solution.icon}</span>
              <h3 className="node-card__title">{solution.shortTitle}</h3>
              <p className="node-card__tagline text-muted">{solution.tagline}</p>
              <span className="node-card__arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCallout() {
  const { ref, revealed } = useReveal(0.2);

  return (
    <section className="stat-section section--bleed" ref={ref}>
      <div className={`stat-section__inner container reveal ${revealed ? 'revealed' : ''}`}>
        <div className="stat-section__badge mono" aria-hidden="true">Evidence</div>
        <p className="stat-section__number">75%</p>
        <p className="stat-section__claim">
          of surveyed employers would hire a less experienced candidate with a generative AI credential over a more experienced candidate without one.
        </p>
        <p className="stat-section__source mono text-muted">
          — Cited in Ma et al., 2025
        </p>
      </div>
    </section>
  );
}

function ClosingCTA() {
  const { ref, revealed } = useReveal(0.15);

  return (
    <section className="cta-section section" ref={ref}>
      <div className={`cta-section__inner container reveal ${revealed ? 'revealed' : ''}`}>
        <h2 className="cta-section__heading">
          Ready to Build an <span className="accent-text">Ecosystem</span>?
        </h2>
        <p className="cta-section__text text-muted">
          Industry-backed tools fuel interactive methods, which drive self-study — but only when critical media literacy serves as the protective steering wheel.
        </p>
        <div className="cta-section__actions">
          <Link to="/ecosystem" className="btn btn--primary">
            See the Full Ecosystem
            <span aria-hidden="true">→</span>
          </Link>
          <Link to="/recommendations" className="btn btn--outline">
            View Recommendations
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PageTransition title="Home">
      <HeroSection />
      <NodePreview />
      <StatCallout />
      <ClosingCTA />
    </PageTransition>
  );
}
