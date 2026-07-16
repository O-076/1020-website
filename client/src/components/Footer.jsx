import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container container--wide">
        <div className="footer__brand">
          <span className="footer__logo-mark" aria-hidden="true">◈</span>
          <span className="footer__logo-text">Curriculum Ecosystem</span>
        </div>

        <nav className="footer__nav mono" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/challenge">Challenge</Link>
          <Link to="/solutions/self-study">Solutions</Link>
          <Link to="/ecosystem">Ecosystem</Link>
          <Link to="/recommendations">Recommendations</Link>
          <Link to="/references">References</Link>
        </nav>

        <p className="footer__note mono text-muted">
          A group multimodal synthesis project.
        </p>
      </div>
    </footer>
  );
}
