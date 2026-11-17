import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      onShowToast(`Copied ${label}: "${text}" to clipboard!`);
    }).catch(() => {
      onShowToast(`Text: ${text}`);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('⚠️ Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setResponseMsg(null);

    try {
      // Attempt to post to Express / MERN backend API
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        const data = await res.json();
        setResponseMsg({
          type: 'success',
          text: data.message || 'Thank you! Your message was received by the backend database.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        onShowToast('🚀 Message received successfully!');
      } else {
        throw new Error('Backend offline');
      }
    } catch (err) {
      // Fallback for static hosting / when backend server is not running
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;

      setResponseMsg({
        type: 'info',
        text: `Your email client has been launched with your message. You can also write directly to ${personalInfo.email}.`
      });
      onShowToast('✉️ Opening email client...');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
          Let's Work Together
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Get in Touch</h2>
        <p className="text-slate-400 mt-3 text-sm sm:text-base">
          Whether you have a full-time engineering opening, a freelance project, or simply want to talk tech — my inbox and phone are always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Quick Connect Cards */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email */}
          <div className="glass-panel p-5 rounded-2xl glow-card flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 text-lg">
                ✉️
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase font-semibold">Direct Email</div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-semibold text-white hover:text-sky-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(personalInfo.email, 'Email')}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
              title="Copy Email"
            >
              📋
            </button>
          </div>

          {/* Phone */}
          <div className="glass-panel p-5 rounded-2xl glow-card flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-lg">
                📞
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase font-semibold">Phone / WhatsApp</div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-1.5">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 text-xs transition-colors"
                title="Chat on WhatsApp"
              >
                💬
              </a>
              <button
                onClick={() => handleCopy(personalInfo.phone, 'Phone')}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
                title="Copy Phone"
              >
                📋
              </button>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="glass-panel p-5 rounded-2xl glow-card flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 text-lg">
                🔗
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase font-semibold">LinkedIn Profile</div>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                >
                  linkedin.com/in/dinesh-rajupadhya
                </a>
              </div>
            </div>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
            >
              ↗
            </a>
          </div>

          {/* Location */}
          <div className="glass-panel p-5 rounded-2xl glow-card flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-lg">
              📍
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase font-semibold">Base Location</div>
              <div className="text-sm font-semibold text-white">{personalInfo.location}</div>
              <div className="text-xs text-slate-400">Open to relocation & hybrid / remote roles.</div>
            </div>
          </div>

        </div>

        {/* Right: Full-Stack Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl glow-card">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white">Send a Message</h3>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                MERN Connected
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Messages are routed through the Express backend or fallback directly to email.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-400 text-white text-sm outline-none transition-all placeholder-slate-600"
                    placeholder="e.g. Alex Johnson"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-400 text-white text-sm outline-none transition-all placeholder-slate-600"
                    placeholder="e.g. alex@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-400 text-white text-sm outline-none transition-all placeholder-slate-600"
                  placeholder="Job Opportunity / Project Collaboration / Inquiry"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-400 text-white text-sm outline-none transition-all placeholder-slate-600 resize-none"
                  placeholder="Hi Dinesh, we have an exciting developer role / project we'd love to discuss with you..."
                ></textarea>
              </div>

              {responseMsg && (
                <div
                  className={`p-3 rounded-lg text-sm border ${
                    responseMsg.type === 'success'
                      ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                      : 'bg-sky-500/20 border-sky-500/50 text-sky-300'
                  }`}
                >
                  {responseMsg.text}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-sky-500/20 hover:shadow-sky-500/35 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <span>🚀</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
