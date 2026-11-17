import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [search, setSearch] = useState('');

  const query = search.toLowerCase().trim();

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
          Core Competencies
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Technical Skills Matrix</h2>
        <p className="text-slate-400 mt-4 text-base">
          A full breakdown of frontend, backend, native mobile, languages, databases, and DevOps tools.
        </p>

        {/* Live Search Input */}
        <div className="mt-8 max-w-md mx-auto relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 rounded-2xl bg-slate-900 border border-slate-700 focus:border-sky-400 text-white placeholder-slate-500 text-sm outline-none transition-all shadow-inner"
            placeholder="🔍 Type to filter skills (e.g. React, Python, MongoDB, Docker)..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => {
          const hasMatchingSkill = cat.skills.some((s) => s.toLowerCase().includes(query));
          if (query && !hasMatchingSkill) return null;

          return (
            <div key={idx} className="glass-panel p-6 rounded-3xl glow-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <div>
                  <h3 className="font-bold text-white text-lg">{cat.title}</h3>
                  <p className="text-xs text-sky-400">{cat.subtitle}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => {
                  const isMatch = query && skill.toLowerCase().includes(query);
                  const isDimmed = query && !isMatch;

                  return (
                    <span
                      key={sIdx}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                        isMatch
                          ? 'ring-2 ring-sky-400 bg-sky-500/20 text-white border-sky-400'
                          : isDimmed
                          ? 'opacity-30 bg-slate-800 text-slate-400 border-slate-700'
                          : 'bg-slate-800/80 text-slate-200 border-slate-700/80'
                      }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
