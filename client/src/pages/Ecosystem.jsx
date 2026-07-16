import React from 'react';
import PageTransition from '../components/PageTransition';
import EcosystemDiagram from '../components/EcosystemDiagram';
import { SOLUTIONS } from '../content/siteContent';
import { useReveal } from '../hooks/useReveal';
import './Ecosystem.css';

function EcosystemHero() {
  const { ref, revealed } = useReveal(0.1);

  return (
    <section className="eco-hero section" ref={ref}>
      <div className={`container reveal ${revealed ? 'revealed' : ''}`}>
        <p className="eco-hero__label mono">Core Thesis</p>
        <h1 className="eco-hero__title">
          The <span className="accent-text">Ecosystem</span>
        </h1>
        <p className="eco-hero__sub text-muted">
          The four proposed solutions cannot operate in isolation. They form an
          interdependent educational ecosystem where each pillar supports the others.
        </p>
      </div>
    </section>
  );
}

function DiagramSection() {
  const { ref, revealed } = useReveal(0.1);

  return (
    <section className="eco-diagram-section section--bleed" ref={ref}>
      <div className={`container reveal ${revealed ? 'revealed' : ''}`}>
        <EcosystemDiagram />
      </div>
    </section>
  );
}

function FramingSection() {
  const { ref, revealed } = useReveal(0.15);

  return (
    <section className="eco-framing section" ref={ref}>
      <div className={`container container--reading reveal ${revealed ? 'revealed' : ''}`}>
        <h2>How the System Connects</h2>

        <div className="eco-framing__roles">
          <div className="eco-framing__role">
            <span className="eco-framing__role-icon" aria-hidden="true">🔧</span>
            <h3>The Fuel</h3>
            <p className="text-muted">
              Industry partnerships keep curricula supplied with current tools and
              workplace knowledge. As these tools age, interactive methods have less to
              work with, and self-study loses direction.
            </p>
            <p className="eco-framing__role-cite mono text-muted">
              {SOLUTIONS[1].citations.join('; ')}
            </p>
          </div>

          <div className="eco-framing__role">
            <span className="eco-framing__role-icon" aria-hidden="true">⚡</span>
            <h3>The Engine</h3>
            <p className="text-muted">
              This is the mechanism that turns self-directed learning from an
              instruction into a practiced skill. Dialogic-critical pedagogy,
              problem-based learning, and scenario-based workshops give students
              repeated practice reasoning through material on their own.
            </p>
            <p className="eco-framing__role-cite mono text-muted">
              {SOLUTIONS[2].citations.join('; ')}
            </p>
          </div>

          <div className="eco-framing__role">
            <span className="eco-framing__role-icon" aria-hidden="true">🧭</span>
            <h3>The Destination</h3>
            <p className="text-muted">
              The ecosystem's purpose is the learner it produces: someone equipped with
              a growth mindset, capable of adapting to new tools and knowledge well
              beyond graduation.
            </p>
            <p className="eco-framing__role-cite mono text-muted">
              {SOLUTIONS[0].citations.join('; ')}
            </p>
          </div>

          <div className="eco-framing__role">
            <span className="eco-framing__role-icon" aria-hidden="true">🛡️</span>
            <h3>The Steering Wheel</h3>
            <p className="text-muted">
              Self-directed learners still need the judgment to evaluate what they
              study. Teaching students to recognize creator bias and evaluate digital
              platforms is what keeps that independence safe rather than exploitable.
            </p>
            <p className="eco-framing__role-cite mono text-muted">
              {SOLUTIONS[3].citations.join('; ')}
            </p>
          </div>
        </div>

        <p className="eco-framing__prose">
          Take away any one of these four, and the other three don't just weaken.
          They misfire. A curriculum with tools but no guardrails just teaches
          students to trust AI faster. Guardrails with no tools just teaches them
          what to distrust, with nothing to replace it.
        </p>
      </div>
    </section>
  );
}

export default function Ecosystem() {
  return (
    <PageTransition title="The Ecosystem">
      <EcosystemHero />
      <DiagramSection />
      <FramingSection />
    </PageTransition>
  );
}
