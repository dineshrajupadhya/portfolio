import React, { useState } from 'react';
import { faqs } from '../data/portfolioData';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // Open first question by default

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
          Recruiter Quick Reference
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-400 mt-3 text-sm sm:text-base">
          Quick answers to key screening criteria: notice period, relocation, tech stack, and background.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`glass-panel rounded-2xl overflow-hidden transition-all duration-300 border ${
                isOpen ? 'border-sky-500/50 shadow-lg shadow-sky-500/10 bg-slate-900/90' : 'border-slate-800'
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 select-none focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-sky-400 w-6">
                    0{idx + 1}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {item.q}
                  </span>
                </div>

                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? 'bg-sky-500 text-white rotate-180'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  ▼
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 pl-14">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick Recruiter Callout */}
      <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-transparent border border-sky-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
            ⚡ Quick Screening Summary
          </span>
          <span className="text-sm text-white font-medium">
            Immediate Joiner • Open to Bengaluru & Remote • Full-Stack (MERN) & Mobile Dev
          </span>
        </div>
        <a
          href="#contact"
          className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold transition-all shadow-md shrink-0"
        >
          Contact Dinesh Directly
        </a>
      </div>
    </section>
  );
}
