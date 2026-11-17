import React, { useState } from 'react';

export default function Navbar({ isDark, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500 p-0.5 shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center font-mono font-bold text-sky-400 text-sm">
              &lt;DU/&gt;
            </div>
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight group-hover:text-sky-400 transition-colors">Dinesh Raj</span>
            <span className="text-xs block text-slate-400 font-mono">MERN & Mobile Dev</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
          <a href="#terminal" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Terminal
          </a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-sky-400 transition-colors">Experience</a>
          <a href="#qa-edge" className="hover:text-sky-400 transition-colors">QA Rigor</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
        </nav>

        {/* Action Items */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-sky-400 text-slate-300 hover:text-sky-400 transition-all text-sm"
            title="Toggle Dark/Light Mode"
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-slate-500 text-slate-200 text-sm font-semibold transition-all"
          >
            <span>📄</span>
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-6 py-6 space-y-4">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 font-medium">About</a>
          <a href="#terminal" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 font-medium">Interactive Terminal</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 font-medium">Featured Projects</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 font-medium">Technical Skills</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 font-medium">Experience & Education</a>
          <a href="#qa-edge" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 font-medium">Quality Rigor</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 font-medium">Contact & Connect</a>
          <div className="pt-4 border-t border-slate-800 flex gap-3">
            <a href="/resume.html" target="_blank" className="flex-1 text-center py-2.5 rounded-lg bg-slate-800 text-slate-200 font-semibold text-sm">View Resume</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex-1 text-center py-2.5 rounded-lg bg-sky-500 text-white font-semibold text-sm">Connect</a>
          </div>
        </div>
      )}
    </header>
  );
}
