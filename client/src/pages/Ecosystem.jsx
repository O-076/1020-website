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
              Modern, industry-backed curricula provide the relevant, up-to-date tools
              that the system runs on. Without current tools, interactive methods lack
              substance, and self-study becomes aimless.
            </p>
            <p className="eco-framing__role-cite mono text-muted">
              {SOLUTIONS[1].citations.join('; ')}
            </p>
          </div>

          <div className="eco-framing__role">
            <span className="eco-framing__role-icon" aria-hidden="true">⚡</span>
            <h3>The Engine</h3>
            <p className="text-muted">
              Interactive learning methods serve as the engaging engine required to drive
              independent self-study. Dialogic-critical pedagogy, PBL, and scenario-based
              workshops transform passive learners into active reasoners.
            </p>
            <p className="eco-framing__role-cite mono text-muted">
              {SOLUTIONS[2].citations.join('; ')}
            </p>
          </div>

          <div className="eco-framing__role">
            <span className="eco-framing__role-icon" aria-hidden="true">🧭</span>
            <h3>The Destination</h3>
            <p className="text-muted">
              Teaching independent self-study creates the autonomous learner the ecosystem
              aims to produce — equipped with a growth mindset for lifelong learning and
              adaptation beyond graduation.
            </p>
            <p className="eco-framing__role-cite mono text-muted">
              {SOLUTIONS[0].citations.join('; ')}
            </p>
          </div>

          <div className="eco-framing__role">
            <span className="eco-framing__role-icon" aria-hidden="true">🛡️</span>
            <h3>The Steering Wheel</h3>
            <p className="text-muted">
              Critical media literacy is the protective steering wheel. By teaching students
              to spot creator bias and critically evaluate digital algorithms, educators
              ensure that independent learners are empowered by — rather than manipulated
              by — the digital platforms and AI systems they use.
            </p>
            <p className="eco-framing__role-cite mono text-muted">
              {SOLUTIONS[3].citations.join('; ')}
            </p>
          </div>
        </div>

        <blockquote className="eco-framing__conclusion">
          <p>
            "By teaching students to spot creator bias and critically evaluate digital
            algorithms, educators ensure that independent learners are empowered by —
            rather than manipulated by — the digital platforms and AI systems they use
            to teach themselves."
          </p>
        </blockquote>
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
