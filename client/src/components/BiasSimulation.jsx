import React, { useState, useCallback } from 'react';
import './BiasSimulation.css';

/*
  BiasSimulation — a mocked AI-output snippet with embedded bias markers.
  Users click on highlighted segments to identify bias patterns.
  After finding all markers (or clicking "Reveal All"), explanatory text appears.
  All state is local — resets on page refresh.
*/

const BIAS_MARKERS = [
  {
    id: 'authority',
    text: 'Leading experts universally agree',
    biasType: 'Appeal to False Authority',
    explanation:
      'This phrase uses vague appeals to unnamed "experts" to create an illusion of consensus. Molerov et al. (2020) emphasize that students must be trained to evaluate author credibility — who are these experts? Are they named? Are they credible in this specific domain?',
  },
  {
    id: 'commercial',
    text: 'the only proven solution is adopting SmartLearn Pro™ AI platform',
    biasType: 'Covert Commercial Intent',
    explanation:
      'The content presents a commercial product as the singular solution to an educational challenge. This is exactly the kind of covert commercial intent that Molerov et al. (2020) warn about — content designed to persuade rather than inform, hidden behind seemingly objective analysis.',
  },
  {
    id: 'framing',
    text: 'Traditional teaching methods have completely failed modern students, leaving them helpless',
    biasType: 'Manipulative Framing',
    explanation:
      'This absolutist framing ("completely failed," "helpless") exaggerates the problem to make the proposed solution seem more urgent. Albardía et al. (2025) note that students must learn to uncover the power dynamics and ideologies shaping media narratives — this framing serves the author\'s agenda, not objective analysis.',
  },
];

const MOCK_ARTICLE = [
  { type: 'text', content: 'A recent analysis reveals that ' },
  { type: 'bias', markerId: 'authority' },
  { type: 'text', content: ' that ' },
  { type: 'bias', markerId: 'framing' },
  { type: 'text', content: '. After extensive research, our investigation found that ' },
  { type: 'bias', markerId: 'commercial' },
  { type: 'text', content: ', which has been shown to increase learning outcomes by up to 340% in pilot studies conducted by the platform\'s development team.' },
];

export default function BiasSimulation() {
  const [found, setFound] = useState(new Set());
  const [revealAll, setRevealAll] = useState(false);
  const [activeExplanation, setActiveExplanation] = useState(null);

  const handleMarkerClick = useCallback((markerId) => {
    setFound(prev => {
      const next = new Set(prev);
      next.add(markerId);
      return next;
    });
    setActiveExplanation(markerId);
  }, []);

  const handleRevealAll = useCallback(() => {
    setRevealAll(true);
    setFound(new Set(BIAS_MARKERS.map(m => m.id)));
    setActiveExplanation(BIAS_MARKERS[0].id);
  }, []);

  const handleReset = useCallback(() => {
    setFound(new Set());
    setRevealAll(false);
    setActiveExplanation(null);
  }, []);

  const allFound = found.size === BIAS_MARKERS.length;
  const activeMarker = BIAS_MARKERS.find(m => m.id === activeExplanation);

  return (
    <div className="bias-sim" role="region" aria-label="Bias identification simulation">
      <div className="bias-sim__header">
        <div>
          <h3 className="bias-sim__title">Can You Spot the Bias?</h3>
          <p className="bias-sim__instructions text-muted">
            Read the AI-generated text below. Click on the phrases you think contain bias or manipulative framing.
          </p>
        </div>
        <div className="bias-sim__score mono">
          <span className="bias-sim__score-count">{found.size}</span>
          <span className="text-muted"> / {BIAS_MARKERS.length} found</span>
        </div>
      </div>

      {/* Mock article */}
      <div className="bias-sim__article card">
        <div className="bias-sim__article-header mono text-muted">
          <span>🤖 AI-Generated Analysis</span>
          <span className="bias-sim__article-badge">Unverified</span>
        </div>
        <p className="bias-sim__article-text">
          {MOCK_ARTICLE.map((segment, i) => {
            if (segment.type === 'text') {
              return <span key={i}>{segment.content}</span>;
            }
            const marker = BIAS_MARKERS.find(m => m.id === segment.markerId);
            const isFound = found.has(marker.id);
            const isActive = activeExplanation === marker.id;

            return (
              <button
                key={i}
                className={`bias-sim__marker ${isFound ? 'bias-sim__marker--found' : ''} ${isActive ? 'bias-sim__marker--active' : ''}`}
                onClick={() => handleMarkerClick(marker.id)}
                aria-label={isFound ? `Bias identified: ${marker.biasType}` : 'Click if you think this phrase contains bias'}
                aria-pressed={isFound}
              >
                {marker.text}
                {isFound && (
                  <span className="bias-sim__marker-tag mono">{marker.biasType}</span>
                )}
              </button>
            );
          })}
        </p>
      </div>

      {/* Explanation panel */}
      {activeMarker && (
        <div className="bias-sim__explanation" aria-live="polite">
          <div className="bias-sim__explanation-header">
            <span className="bias-sim__explanation-type">{activeMarker.biasType}</span>
          </div>
          <p className="bias-sim__explanation-text">{activeMarker.explanation}</p>

          {/* Navigation between found markers */}
          <div className="bias-sim__explanation-nav mono">
            {BIAS_MARKERS.filter(m => found.has(m.id)).map(m => (
              <button
                key={m.id}
                className={`bias-sim__explanation-tab ${activeExplanation === m.id ? 'bias-sim__explanation-tab--active' : ''}`}
                onClick={() => setActiveExplanation(m.id)}
              >
                {m.biasType}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="bias-sim__actions">
        {!allFound && !revealAll && (
          <button className="btn btn--outline" onClick={handleRevealAll}>
            Reveal All Markers
          </button>
        )}
        {allFound && (
          <>
            <p className="bias-sim__complete mono">
              ✓ All bias markers identified
            </p>
            <button className="btn btn--outline" onClick={handleReset}>
              Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
