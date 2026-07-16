import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Nav.css';

const NAV_ITEMS = [
  { to: '/', label: 'Home', match: '/' },
  { to: '/challenge', label: 'Challenge', match: '/challenge' },
  { to: '/solutions/self-study', label: 'Solutions', match: '/solutions' },
  { to: '/ecosystem', label: 'Ecosystem', match: '/ecosystem' },
  { to: '/recommendations', label: 'Recommendations', match: '/recommendations' },
  { to: '/references', label: 'References', match: '/references' },
];

export default function Nav({ theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="nav-header">
      <nav className="nav container--wide" aria-label="Main navigation">
        <NavLink to="/" className="nav__logo" aria-label="Curriculum Ecosystem Home">
          <span className="nav__logo-mark" aria-hidden="true">◈</span>
          <span className="nav__logo-text">Curriculum Ecosystem</span>
        </NavLink>

        <button
          className={`nav__burger ${mobileOpen ? 'nav__burger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav__menu ${mobileOpen ? 'nav__menu--open' : ''}`}>
          <ul className="nav__list">
            {NAV_ITEMS.map(({ to, label, match }) => {
              const isActive = match === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(match);

              return (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={() =>
                      `nav__link mono ${isActive ? 'nav__link--active' : ''}`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </nav>
    </header>
  );
}
