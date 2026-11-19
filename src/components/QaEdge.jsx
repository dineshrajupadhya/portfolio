import React from 'react';

export default function QaEdge() {
  return (
    <section id="qa-edge" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-sky-500/30">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              The Dinesh Advantage
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Why A Developer With QA Rigor Delivers 3x Better Code
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              Most developers write code to satisfy the happy path. With certified full-stack software testing training (Qspiders), 800+ test cases authored across <strong className="text-white">ShoppersStack e-commerce</strong> and banking platforms, and hands-on Pytest/Selenium automation:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Anticipates edge cases & race conditions before writing line 1.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Designs clean, testable REST APIs with strict input validation.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Seamlessly collaborates with QA, DevOps & PMs using Jira / STLC.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Drastically cuts down regressions and production hotfixes.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-900/90 p-6 rounded-2xl border border-slate-800 text-center">
            <div className="text-4xl font-extrabold text-gradient mb-1">800+</div>
            <div className="text-sm font-semibold text-slate-200">Test Cases Executed</div>
            <div className="text-xs text-slate-400 mt-2">600+ Functional • 200+ Integration • 100+ Triaged Defects</div>
            <div className="mt-4 pt-4 border-t border-slate-800 flex justify-center gap-2">
              <span className="px-2 py-1 rounded text-[11px] bg-slate-800 text-emerald-400 font-mono">STLC</span>
              <span className="px-2 py-1 rounded text-[11px] bg-slate-800 text-sky-400 font-mono">Selenium</span>
              <span className="px-2 py-1 rounded text-[11px] bg-slate-800 text-indigo-400 font-mono">Pytest</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
