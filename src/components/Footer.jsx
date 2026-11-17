import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#070b13] py-12 px-4 sm:px-6 lg:px-8 relative z-10 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center font-mono font-bold text-sky-400 text-xs">
            &lt;DU/&gt;
          </div>
          <div>
            <span className="font-bold text-slate-200">{personalInfo.name}</span>
            <span className="block text-xs text-slate-500">MERN & Mobile Developer</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="#hero" className="hover:text-sky-400 transition-colors">Back to Top ↑</a>
          <a href="/resume.html" target="_blank" className="hover:text-sky-400 transition-colors">Resume</a>
          <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">LinkedIn</a>
          <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">GitHub</a>
        </div>

        <div className="text-slate-500 text-xs text-center md:text-right">
          Built with React 18, Vite, Tailwind CSS & Node.js • Free to host on Vercel / Netlify
        </div>
      </div>
    </footer>
  );
}
