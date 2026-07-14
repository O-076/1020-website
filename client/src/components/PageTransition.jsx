import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children, title }) {
  const location = useLocation();

  useEffect(() => {
    document.title = title
      ? `${title} — Curriculum Ecosystem`
      : 'Curriculum Ecosystem';
    window.scrollTo(0, 0);
  }, [location.pathname, title]);

  return (
    <main className="page-enter page-enter-active" key={location.pathname}>
      {children}
    </main>
  );
}
