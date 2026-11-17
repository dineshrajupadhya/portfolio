import React, { useState, useRef, useEffect } from 'react';

export default function Terminal({ onToggleTheme }) {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'Welcome to Dinesh Raj Upadhya\'s MERN recruiter console [Version 3.0.0]\nType "help" to view all commands, or click the quick action chips below.'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const historyEndRef = useRef(null);

  const commands = {
    help: `Available commands:
  about        - Background, passion, and engineering focus
  skills       - Full overview of technical stack & tools (MERN, Mobile, QA)
  projects     - Highlights of flagship production & personal apps
  experience   - Career history (Ukshati Tech, SJEC Research, TCS)
  contact      - Direct phone, email, LinkedIn, & WhatsApp
  hire         - Why hire Dinesh & what value he delivers
  resume       - View and print ATS-optimized resume
  clear        - Clear terminal output
  theme        - Toggle Dark / Light theme`,

    about: `Dinesh Raj Upadhya | Full-Stack Developer (MERN / React Native)
Location: Mangaluru / Bengaluru, India.

I specialize in building performant, end-to-end web & mobile applications.
• Bridging high-impact frontend UX (React / React Native) with robust backend services (Node.js, Express, MongoDB, REST/WebSockets).
• Unique edge: Native hardware integration experience (Kotlin native modules, USB-UART STM32 microcontrollers, Raspberry Pi Pico W).
• Deep software testing rigor (STLC, Selenium, Pytest, Jira) paired with past corporate recruiting coordination at Tata Consultancy Services (TCS).`,

    skills: `Tech Stack & Competencies:
• Frontend: React.js, React Native, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS
• Backend: Node.js, Express.js, REST APIs, JWT Auth, Socket.IO, PHP
• Languages: JavaScript, Python, Java, Kotlin (Native modules), C/C++, SQL
• Databases: MongoDB, SQLite, RDBMS / SQL
• DevOps & Tools: Git, GitHub, Docker, Jenkins, Postman, AWS (hands-on)
• Quality & Testing: STLC, Manual Testing, Selenium WebDriver, Pytest, Jira, Zephyr Scale`,

    projects: `Featured Projects:
1. PETPAL — Full-Stack MERN Pet Adoption Platform (Socket.IO chat, JWT auth, MongoDB)
2. Valve Control App — Offline-first React Native + Kotlin native USB-UART module for STM32
3. Contactless Restaurant Ordering — QR code digital menu & order lifecycle with React & SQLite
4. EEG Seizure Detection Pipeline — Python ML signal processing with MNE & PyEEG
5. E-Commerce & Banking QA Suite — 600+ test scenarios, 200+ integration cases in Jira`,

    experience: `Professional Experience:
• Ukshati Technologies Pvt. Ltd. (May 2025 – Aug 2025)
  Mobile App Developer Intern: React Native, Kotlin USB-UART module, STM32, Raspberry Pi Pico W.
• St Joseph Engineering College (Oct 2024 – Nov 2024)
  Research Intern: Python ML pipeline for EEG signal analysis & real-time seizure detection.
• Tata Consultancy Services (TCS) (Aug 2021 – Mar 2023)
  HR Executive: Technical hiring pipelines, panel scheduling & engineering candidate coordination.`,

    contact: `Let's Connect & Collaborate:
• Email:    dineshrajupadhya86@gmail.com
• Phone:    +91 8951318017
• WhatsApp: https://wa.me/918951318017
• LinkedIn: https://linkedin.com/in/dinesh-rajupadhya-920075206
• Location: Mangaluru / Bengaluru, Karnataka, India`,

    hire: `Why Hire Dinesh?
✓ Full-cycle development capability: MERN web apps + React Native mobile apps.
✓ Hardware-software interface experience: Kotlin native modules, USB-UART, microcontrollers.
✓ Quality-first mindset: Thorough QA background (Selenium, Pytest, STLC, Jira).
✓ Corporate maturity & strong communication: Prior experience coordinating technical talent at TCS.
✓ Immediate availability for Full-Time Developer or contract roles.`,

    resume: `Opening resume in new tab...`,
    sudo: `Permission granted! But you don't need superuser privileges to hire Dinesh — just email dineshrajupadhya86@gmail.com!`
  };

  const handleCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (cmd === 'theme') {
      onToggleTheme();
      setHistory((prev) => [
        ...prev,
        { type: 'cmd', text: raw },
        { type: 'output', text: 'Theme toggled successfully.' }
      ]);
      setInputVal('');
      return;
    }

    if (cmd === 'resume') {
      window.open('/resume.html', '_blank');
    }

    const output = commands[cmd] || `Command not recognized: "${raw}". Type "help" to view all available commands.`;
    setHistory((prev) => [
      ...prev,
      { type: 'cmd', text: raw },
      { type: 'output', text: output }
    ]);
    setInputVal('');
  };

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="terminal" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-medium mb-3">
          <span>&gt; RECRUITER_CLI_v3.0 (React)</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight">Interactive Recruiter Console</h2>
        <p className="text-sm text-slate-400 mt-2">
          Test real terminal commands below or click the quick action chips to inspect Dinesh's profile.
        </p>
      </div>

      {/* Quick Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
        <span className="text-xs text-slate-500 font-mono">Quick Run:</span>
        {['about', 'skills', 'projects', 'experience', 'hire', 'contact'].map((c) => (
          <button
            key={c}
            onClick={() => handleCommand(c)}
            className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-800 hover:bg-sky-500/20 border border-slate-700 hover:border-sky-500 text-sky-300 transition-colors"
          >
            {c}
          </button>
        ))}
        <button
          onClick={() => handleCommand('clear')}
          className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-800 hover:bg-rose-500/20 border border-slate-700 hover:border-rose-500 text-rose-300 transition-colors"
        >
          clear
        </button>
      </div>

      {/* Terminal Container */}
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="terminal-dot bg-rose-500"></span>
            <span className="terminal-dot bg-amber-500"></span>
            <span className="terminal-dot bg-emerald-500"></span>
          </div>
          <div className="text-xs text-slate-400 font-mono font-medium">dineshraj@portfolio:~ (bash)</div>
          <div className="text-xs text-slate-500 font-mono hidden sm:block">utf-8 • react 18</div>
        </div>

        <div className="terminal-body text-slate-300">
          {history.map((item, idx) => (
            <div key={idx} className="mb-2">
              {item.type === 'cmd' ? (
                <div>
                  <span className="terminal-prompt select-none">visitor@dinesh-portfolio:~$ </span>
                  <span className="text-white">{item.text}</span>
                </div>
              ) : (
                <pre className="font-mono text-xs sm:text-sm text-slate-300 whitespace-pre-wrap pl-2 border-l-2 border-cyan-500/40 my-1 leading-relaxed">
                  {item.text}
                </pre>
              )}
            </div>
          ))}
          <div ref={historyEndRef} />
        </div>

        <div className="p-3 bg-[#0c121d] border-t border-slate-800 flex items-center gap-2 font-mono text-sm">
          <span className="terminal-prompt select-none">visitor@dinesh-portfolio:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCommand(inputVal);
            }}
            className="flex-1 bg-transparent text-white outline-none border-none font-mono text-sm placeholder-slate-600"
            placeholder="Type a command (e.g. 'skills', 'hire', 'projects')..."
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="px-3 py-1 bg-sky-600 hover:bg-sky-500 text-white text-xs rounded font-semibold transition-colors"
          >
            Run
          </button>
        </div>
      </div>
    </section>
  );
}
