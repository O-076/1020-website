import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { SOLUTIONS } from '../content/siteContent';
import './EcosystemDiagram.css';

/*
  EcosystemDiagram — the "Thread" signature element.
  Four solution nodes arranged in a cycle, connected by animated SVG paths.
  Clicking a node reveals its summary, key citation, and links to its Solutions sub-page.
  All state is component-local — resets on refresh.
*/

const NODE_POSITIONS = [
  { cx: 250, cy: 100, angle: 0 },    // top-left
  { cx: 550, cy: 100, angle: 1 },    // top-right
  { cx: 550, cy: 340, angle: 2 },    // bottom-right
  { cx: 250, cy: 340, angle: 3 },    // bottom-left
];

export default function EcosystemDiagram() {
  const [activeNode, setActiveNode] = useState(null);

  const handleNodeClick = useCallback((index) => {
    setActiveNode(prev => prev === index ? null : index);
  }, []);

  const handleKeyDown = useCallback((e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNodeClick(index);
    }
  }, [handleNodeClick]);

  const activeSolution = activeNode !== null ? SOLUTIONS[activeNode] : null;

  return (
    <div className="eco-diagram" role="figure" aria-label="Ecosystem diagram showing four interdependent solutions">
      <svg
        className="eco-diagram__svg"
        viewBox="0 0 800 440"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* Thread connections — animated dashed paths forming the cycle */}
        <path
          className="eco-diagram__thread"
          d="M250,100 C400,60 400,60 550,100"
          fill="none"
        />
        <path
          className="eco-diagram__thread eco-diagram__thread--d1"
          d="M550,100 C590,220 590,220 550,340"
          fill="none"
        />
        <path
          className="eco-diagram__thread eco-diagram__thread--d2"
          d="M550,340 C400,380 400,380 250,340"
          fill="none"
        />
        <path
          className="eco-diagram__thread eco-diagram__thread--d3"
          d="M250,340 C210,220 210,220 250,100"
          fill="none"
        />

        {/* Cross-connections to show interdependence */}
        <path
          className="eco-diagram__thread eco-diagram__thread--cross"
          d="M250,100 C400,200 400,200 550,340"
          fill="none"
        />
        <path
          className="eco-diagram__thread eco-diagram__thread--cross eco-diagram__thread--d1"
          d="M550,100 C400,200 400,200 250,340"
          fill="none"
        />

        {/* Center label */}
        <text x="400" y="215" textAnchor="middle" className="eco-diagram__center-label" fill="var(--text-muted)">
          Interdependent
        </text>
        <text x="400" y="240" textAnchor="middle" className="eco-diagram__center-label" fill="var(--text-muted)">
          Ecosystem
        </text>

        {/* Nodes */}
        {NODE_POSITIONS.map((pos, i) => {
          const solution = SOLUTIONS[i];
          const isActive = activeNode === i;

          return (
            <g key={solution.id} className="eco-diagram__node-group">
              {/* Glow ring */}
              <circle
                cx={pos.cx}
                cy={pos.cy}
                r={isActive ? 56 : 0}
                className="eco-diagram__glow"
                style={{ opacity: isActive ? 1 : 0 }}
              />
              {/* Main circle */}
              <circle
                cx={pos.cx}
                cy={pos.cy}
                r="48"
                className={`eco-diagram__node ${isActive ? 'eco-diagram__node--active' : ''}`}
                role="button"
                tabIndex={0}
                aria-label={`${solution.shortTitle} — click to learn more`}
                aria-expanded={isActive}
                onClick={() => handleNodeClick(i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              />
              {/* Icon */}
              <text
                x={pos.cx}
                y={pos.cy - 4}
                textAnchor="middle"
                dominantBaseline="central"
                className="eco-diagram__icon"
                style={{ pointerEvents: 'none' }}
              >
                {solution.icon}
              </text>
              {/* Label */}
              <text
                x={pos.cx}
                y={pos.cy + 76}
                textAnchor="middle"
                className={`eco-diagram__label ${isActive ? 'eco-diagram__label--active' : ''}`}
              >
                {solution.shortTitle}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Detail panel */}
      <div
        className={`eco-diagram__detail ${activeSolution ? 'eco-diagram__detail--visible' : ''}`}
        aria-live="polite"
      >
        {activeSolution && (
          <>
            <div className="eco-diagram__detail-header">
              <span className="eco-diagram__detail-icon" aria-hidden="true">{activeSolution.icon}</span>
              <div>
                <h3 className="eco-diagram__detail-title">{activeSolution.title}</h3>
                <p className="eco-diagram__detail-role mono text-muted">{activeSolution.ecosystemRole}</p>
              </div>
            </div>
            <p className="eco-diagram__detail-summary">{activeSolution.summary}</p>
            <p className="eco-diagram__detail-citation mono text-muted">
              — {activeSolution.citations[0]}
              {activeSolution.citations.length > 1 && (
                <span> +{activeSolution.citations.length - 1} more</span>
              )}
            </p>
            <Link to={`/solutions/${activeSolution.id}`} className="btn btn--outline">
              Read Full Analysis →
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
