import React from 'react';
import PageTransition from '../components/PageTransition';
import { useReveal } from '../hooks/useReveal';
import { REFERENCES } from '../content/siteContent';
import './References.css';

function ReferencesHero() {
  const { ref, revealed } = useReveal(0.1);

  return (
    <section className="refs-hero section" ref={ref}>
      <div className={`container reveal ${revealed ? 'revealed' : ''}`}>
        <p className="refs-hero__label mono">Sources</p>
        <h1 className="refs-hero__title">References</h1>
        <p className="refs-hero__sub text-muted">
          All six sources used across this site, verified against their published
          record. Four scholarly peer-reviewed sources and two popular/credible sources.
        </p>
      </div>
    </section>
  );
}

function ReferenceEntry({ entry, index }) {
  const { ref, revealed } = useReveal(0.1);

  return (
    <li
      ref={ref}
      className={`refs-entry card reveal ${revealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <span className="refs-entry__number mono text-muted">
        {String(index + 1).padStart(2, '0')}
      </span>
      <p className="refs-entry__citation">{entry.citation}</p>
    </li>
  );
}

function ReferenceGroup({ title, entries, startIndex }) {
  const { ref, revealed } = useReveal(0.1);

  return (
    <section className="refs-group" ref={ref}>
      <div className={`reveal ${revealed ? 'revealed' : ''}`}>
        <h2 className="refs-group__title">{title}</h2>
        <ol className="refs-group__list">
          {entries.map((entry, i) => (
            <ReferenceEntry key={entry.id} entry={entry} index={startIndex + i} />
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function References() {
  const scholarly = REFERENCES.filter(r => r.category === 'scholarly');
  const popular = REFERENCES.filter(r => r.category === 'popular');

  return (
    <PageTransition title="References">
      <ReferencesHero />
      <div className="refs-content section--bleed">
        <div className="container">
          <ReferenceGroup
            title="Scholarly Sources"
            entries={scholarly}
            startIndex={0}
          />
          <ReferenceGroup
            title="Popular & Credible Sources"
            entries={popular}
            startIndex={scholarly.length}
          />
        </div>
      </div>
    </PageTransition>
  );
}
