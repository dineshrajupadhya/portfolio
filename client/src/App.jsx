import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Terminal from './components/Terminal';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import QaEdge from './components/QaEdge';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from './components/Particles';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('dinesh_theme');
    if (saved === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('dinesh_theme', 'dark');
      showToast('Switched to Dark mode');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('dinesh_theme', 'light');
      showToast('Switched to Light mode');
    }
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 transition-colors duration-300">
      {/* Background Interactive Particles */}
      <Particles />

      {/* Navigation */}
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        <Hero />
        <Terminal onToggleTheme={toggleTheme} />
        <Projects />
        <Skills />
        <QaEdge />
        <Experience />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white border border-sky-500/50 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-sm font-medium animate-bounce">
          <span>⚡</span>
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}
