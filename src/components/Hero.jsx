import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const words = [
    "Full-Stack Developer (MERN)",
    "React Native Mobile Engineer",
    "AI & Machine Learning Engineer",
    "Hardware-Integrated App Specialist",
    "Software QA & Automation Advocate"
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [subText, setSubText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && subText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && subText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      timeout = setTimeout(() => {}, 400);
    } else {
      timeout = setTimeout(() => {
        setSubText(
          isDeleting
            ? currentWord.substring(0, subText.length - 1)
            : currentWord.substring(0, subText.length + 1)
        );
      }, isDeleting ? 40 : 85);
    }

    return () => clearTimeout(timeout);
  }, [subText, isDeleting, wordIndex]);

  return (
    <section id="hero" className="min-h-[88vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-inner">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 pulse-emerald"></span>
          <span>{personalInfo.status}</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-400">{personalInfo.location.split(',')[0]} & Remote</span>
        </div>

        {/* Profile Headshot */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-6 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-500 blur-xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-500 shadow-2xl overflow-hidden">
            <img
              src="/Profile.jpg"
              alt="Dinesh Raj Upadhya"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div
            className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-900 shadow-md pulse-emerald"
            title="Available for hire"
          ></div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
        </h1>

        {/* Animated Subtitle */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-8">
          <span className="text-xl sm:text-3xl font-semibold text-slate-300 font-mono">
            I build with <span className="text-sky-400 font-bold border-b-2 border-sky-400">{subText}</span>
            <span className="terminal-cursor"></span>
          </span>
        </div>

        {/* Summary */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-10">
          Bridging full-stack web platforms (<strong className="text-slate-200 font-semibold">MERN Stack</strong>), cross-platform mobile apps (<strong className="text-slate-200 font-semibold">React Native + Native Hardware Modules</strong>), and <strong className="text-slate-200 font-semibold">Machine Learning & AI</strong> signal pipelines with enterprise-grade <strong className="text-slate-200 font-semibold">Software Quality rigor</strong>. Prior corporate experience at <strong className="text-slate-200 font-semibold">TCS</strong> coordinating technical hiring.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            <span>Explore Projects</span>
            <span>🚀</span>
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold text-sm sm:text-base hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            <span>Get in Touch</span>
            <span>✉️</span>
          </a>
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/80 text-sky-400 font-semibold text-sm sm:text-base hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            <span>Download Resume</span>
            <span>📄</span>
          </a>
        </div>

        {/* Floating Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="glass-panel p-5 rounded-2xl glow-card">
            <div className="text-3xl font-extrabold text-emerald-400 font-mono mb-1">0 Days</div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Notice Period</div>
            <div className="text-xs text-slate-500 mt-1">Available to join immediately</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl glow-card">
            <div className="text-3xl font-extrabold text-sky-400 font-mono mb-1">1.8 Yrs</div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Corporate Exp</div>
            <div className="text-xs text-slate-500 mt-1">Technical hiring @ TCS</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl glow-card">
            <div className="text-3xl font-extrabold text-indigo-400 font-mono mb-1">5+</div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Flagship Projects</div>
            <div className="text-xs text-slate-500 mt-1">MERN, Mobile IoT, ML, QA</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl glow-card">
            <div className="text-3xl font-extrabold text-purple-400 font-mono mb-1">800+</div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">QA Test Cases</div>
            <div className="text-xs text-slate-500 mt-1">Selenium, Pytest & Jira triaged</div>
          </div>
        </div>

      </div>
    </section>
  );
}
