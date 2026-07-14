import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Challenge from './pages/Challenge';
import Ecosystem from './pages/Ecosystem';
import Solutions from './pages/Solutions';
import Evidence from './pages/Evidence';
import Recommendations from './pages/Recommendations';
import References from './pages/References';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Nav theme={theme} onToggleTheme={toggleTheme} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/solutions/:slug" element={<Solutions />} />
          <Route path="/evidence" element={<Evidence />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/references" element={<References />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
