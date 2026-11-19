import React, { useState } from 'react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState('overview');
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    if (project.codeSnippet?.code) {
      navigator.clipboard.writeText(project.codeSnippet.code).then(() => {
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2500);
      });
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md modal-overlay"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0c121d] border border-slate-700/80 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl modal-content flex flex-col justify-between"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center text-sm font-bold transition-all"
        >
          ✕
        </button>

        <div>
          {/* Header */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-2xl">{project.icon}</span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
              {project.badge}
            </span>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 transition-colors flex items-center gap-1.5"
              >
                <span>🌐</span> {project.liveLabel || 'Visit Platform'} ↗
              </a>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">{project.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>

          {/* Interactive Modal Tabs */}
          <div className="flex border-b border-slate-800 mb-6 gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 px-3 text-xs sm:text-sm font-semibold transition-all border-b-2 flex items-center gap-1.5 ${
                activeTab === 'overview'
                  ? 'border-sky-400 text-sky-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>📋</span> Overview & Architecture
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`pb-3 px-3 text-xs sm:text-sm font-semibold transition-all border-b-2 flex items-center gap-1.5 ${
                activeTab === 'code'
                  ? 'border-sky-400 text-sky-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>💻</span> Code Sample
            </button>
            <button
              onClick={() => setActiveTab('flow')}
              className={`pb-3 px-3 text-xs sm:text-sm font-semibold transition-all border-b-2 flex items-center gap-1.5 ${
                activeTab === 'flow'
                  ? 'border-sky-400 text-sky-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>⚡</span> System Flow
            </button>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Technical Architecture
                </h4>
                <ul className="text-xs sm:text-sm text-slate-300 space-y-2">
                  {project.architecture.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-sky-400 mt-0.5 font-bold">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Key Engineering Highlights & Impact
                </h4>
                <ul className="text-xs sm:text-sm text-slate-300 space-y-2">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-emerald-400 mt-0.5 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Tech Stack Breakdown
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-sky-300 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE CODE VIEWER */}
          {activeTab === 'code' && project.codeSnippet && (
            <div>
              {/* VS Code Window Header */}
              <div className="bg-[#111827] rounded-t-xl px-4 py-2.5 border border-slate-800 border-b-0 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-sky-400">📄</span>
                  <span className="font-semibold">{project.codeSnippet.filename}</span>
                  <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                    {project.codeSnippet.language}
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-sans"
                >
                  <span>{copiedCode ? '✓' : '📋'}</span>
                  <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              {/* Code Body */}
              <div className="bg-[#080d16] p-4 rounded-b-xl border border-slate-800 max-h-[360px] overflow-x-auto overflow-y-auto font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200">
                <pre className="whitespace-pre">
                  {project.codeSnippet.code}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 3: SYSTEM FLOW */}
          {activeTab === 'flow' && project.systemFlow && (
            <div className="space-y-3 py-2">
              <p className="text-xs text-slate-400 mb-4">
                End-to-end request lifecycle and system architecture flow:
              </p>
              {project.systemFlow.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3 glow-card"
                >
                  <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center font-mono font-bold text-sky-400 text-xs shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">{step.step}</h5>
                    <p className="text-xs text-slate-400 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={project.githubUrl || "https://github.com/dineshrajupadhya"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all flex items-center gap-1.5"
            >
              <span>💻</span> View on GitHub ↗
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 text-xs font-semibold transition-all flex items-center gap-1.5"
              >
                <span>🌐</span> {project.liveLabel || 'Visit Platform'} ↗
              </a>
            )}
          </div>
          <a
            href="#contact"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-semibold shadow-md shadow-sky-500/20 transition-all"
          >
            Discuss This Project
          </a>
        </div>
      </div>
    </div>
  );
}
