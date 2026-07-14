import React from 'react';
import PageTransition from '../components/PageTransition';
import { useReveal } from '../hooks/useReveal';
import { EVIDENCE_CARDS } from '../content/siteContent';
import './Evidence.css';

function EvidenceHero() {
  const { ref, revealed } = useReveal(0.1);

  return (
    <section className="evi-hero section" ref={ref}>
      <div className={`container reveal ${revealed ? 'revealed' : ''}`}>
        <p className="evi-hero__label mono">Proof Points</p>
        <h1 className="evi-hero__title">
          Evidence & <span className="accent-text">Case Studies</span>
        </h1>
        <p className="evi-hero__sub text-muted">
          Concrete evidence from the literature supporting the ecosystem approach.
          Each finding is drawn directly from the research.
        </p>
      </div>
    </section>
  );
}

function EvidenceCard({ card, index }) {
  const { ref, revealed } = useReveal(0.1);

  return (
    <article
      ref={ref}
      className={`evi-card card reveal ${revealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="evi-card__header">
        <span className="evi-card__number mono text-muted">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="evi-card__source mono">{card.source}</span>
      </div>

      <h2 className="evi-card__title">{card.title}</h2>

      <div className="evi-card__finding">
        <span className="evi-card__finding-label mono text-muted">Finding</span>
        <p>{card.finding}</p>
      </div>

      <div className="evi-card__significance">
        <span className="evi-card__significance-label mono text-muted">
          Why It Matters for Curriculum Design
        </span>
        <p className="text-muted">{card.significance}</p>
      </div>
    </article>
  );
}

function EvidenceGrid() {
  return (
    <section className="evi-grid section--bleed">
      <div className="container">
        <div className="evi-grid__cards">
          {EVIDENCE_CARDS.map((card, i) => (
            <EvidenceCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EvidenceClosing() {
  const { ref, revealed } = useReveal(0.15);

  return (
    <section className="evi-closing section" ref={ref}>
      <div className={`container reveal ${revealed ? 'revealed' : ''}`}>
        <div className="evi-closing__inner">
          <h2>The Pattern Is Clear</h2>
          <p className="text-muted">
            Across diverse contexts — from the University System of Maryland's
            Google partnership to the LSE's evaluation of the UK Digital Citizenship
            Curriculum — the evidence converges on a single conclusion: isolated
            initiatives produce limited results, while interconnected, ecosystem-based
            approaches drive meaningful change.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Evidence() {
  return (
    <PageTransition title="Evidence & Case Studies">
      <EvidenceHero />
      <EvidenceGrid />
      <EvidenceClosing />
    </PageTransition>
  );
}
