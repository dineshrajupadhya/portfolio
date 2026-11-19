import React, { useState } from 'react';
import { experiences, educations, certifications } from '../data/portfolioData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-2">
          Track Record
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Experience & Education</h2>
        <p className="text-slate-400 mt-2 text-sm sm:text-base">
          A blend of hands-on software development, machine learning research, and corporate talent operations.
        </p>

        {/* Tab Switcher */}
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 mt-6">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'experience'
                ? 'bg-sky-500 text-white shadow-md'
                : 'bg-slate-800/50 text-slate-400 hover:text-slate-200'
            }`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'education'
                ? 'bg-sky-500 text-white shadow-md'
                : 'bg-slate-800/50 text-slate-400 hover:text-slate-200'
            }`}
          >
            Education & Certifications
          </button>
        </div>
      </div>

      {/* Work Experience */}
      {activeTab === 'experience' && (
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-slate-800">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex flex-col sm:flex-row items-start group">
              <div className="sm:w-1/2 sm:pr-10 pl-10 sm:pl-0 sm:text-right mb-4 sm:mb-0">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-1">
                  {exp.period}
                </span>
                <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                <p className="text-sky-400 text-sm font-medium">{exp.company}</p>
              </div>

              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-emerald-400 flex items-center justify-center text-xs z-10 shadow-lg shadow-emerald-500/20">
                {exp.icon}
              </div>

              <div className="sm:w-1/2 sm:pl-10 pl-10">
                <div className="glass-panel p-5 rounded-2xl">
                  <ul className="text-xs sm:text-sm text-slate-300 space-y-2">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>• {pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Education & Certifications */}
      {activeTab === 'education' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educations.map((edu, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-3xl glow-card">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-sky-500/20 text-sky-300">
                    {edu.period}
                  </span>
                  <span className="text-xs font-bold text-emerald-400">{edu.score}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                <p className="text-slate-400 text-sm mt-1">{edu.institution}</p>
                <p className="text-xs text-slate-500 mt-3">{edu.details}</p>
              </div>
            ))}
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-3xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span>🎖️</span> Verified Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((c, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="font-semibold text-sky-400 text-sm">{c.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{c.issuer}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800">
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
                Leadership & Accolades
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg text-xs bg-slate-800 text-slate-300 border border-slate-700">
                  🏆 Inter-College IT Fest Event Head
                </span>
                <span className="px-3 py-1.5 rounded-lg text-xs bg-slate-800 text-slate-300 border border-slate-700">
                  💡 Technovice Workshop Lead
                </span>
                <span className="px-3 py-1.5 rounded-lg text-xs bg-slate-800 text-slate-300 border border-slate-700">
                  🥉 3rd Place, Inter-College IT Quiz
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
