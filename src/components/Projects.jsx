import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
          Portfolio Showcase
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Featured Engineering Projects</h2>
        <p className="text-slate-400 mt-4 text-base">
          Real-world web, mobile, embedded IoT, and testing projects built with modern architectures. Click any project to inspect full architectural details.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'fullstack', label: 'Full-Stack / MERN' },
            { id: 'mobile', label: 'Mobile & Embedded' },
            { id: 'ml', label: 'AI & Machine Learning' },
            { id: 'qa', label: 'QA & Testing' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === tab.id
                  ? 'bg-sky-500 text-white border border-sky-400 shadow-md'
                  : 'bg-slate-800/60 text-slate-300 border border-slate-700 hover:border-slate-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            className="glass-panel rounded-3xl overflow-hidden glow-card flex flex-col justify-between"
          >
            <div>
              {/* Header Gradient */}
              <div className={`h-44 bg-gradient-to-br ${p.gradient} p-6 flex flex-col justify-between relative border-b border-slate-800`}>
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                    {p.categoryLabel}
                  </span>
                  <span className="text-2xl">{p.icon}</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-emerald-400">{p.badge.split('•')[0]}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{p.title.split('—')[0]}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{p.description}</p>
                <ul className="text-xs text-slate-400 space-y-1.5 mb-6">
                  {p.highlights.slice(0, 3).map((h, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-sky-400">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 border-t border-slate-800/80 flex items-center justify-between gap-2 mt-auto">
              <button
                onClick={() => setActiveProject(p)}
                className="flex-1 py-2.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-400 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
              >
                <span>🔍 Details & Code</span>
              </button>
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition-all flex items-center gap-1"
                  title={`Open ${p.liveLabel || 'Live Site'}`}
                >
                  <span>🌐</span>
                  <span className="hidden sm:inline text-[11px]">Site</span>
                </a>
              )}
              <a
                href={p.githubUrl || "https://github.com/dineshrajupadhya"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all"
                title="View Code"
              >
                <span>💻 Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
