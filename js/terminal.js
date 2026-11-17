/**
 * Interactive Recruiter CLI / Terminal Simulator for Dinesh Raj Upadhya
 */

(function () {
  const terminalInput = document.getElementById('terminal-input');
  const terminalHistory = document.getElementById('terminal-history');
  const chipButtons = document.querySelectorAll('.term-chip');

  if (!terminalInput || !terminalHistory) return;

  const commands = {
    help: `Available commands:
  <span class="text-cyan-400">about</span>        - Background, passion, and engineering focus
  <span class="text-cyan-400">skills</span>       - Full overview of technical stack & tools
  <span class="text-cyan-400">projects</span>     - Highlights of flagship production & personal apps
  <span class="text-cyan-400">experience</span>   - Career history (Ukshati Tech, SJEC Research, TCS)
  <span class="text-cyan-400">contact</span>      - Direct phone, email, LinkedIn, & WhatsApp
  <span class="text-cyan-400">hire</span>         - Why hire Dinesh & what value he delivers
  <span class="text-cyan-400">resume</span>       - View and print ATS-optimized resume
  <span class="text-cyan-400">clear</span>        - Clear terminal output
  <span class="text-cyan-400">theme</span>        - Toggle Dark / Light theme`,

    about: `<span class="text-emerald-400 font-bold">Dinesh Raj Upadhya</span> | Full-Stack Developer (MERN / React Native)
Location: Mangaluru / Bengaluru, India.

I specialize in building performant, end-to-end web & mobile applications.
• Bridging high-impact frontend UX (React / React Native) with robust backend services (Node.js, Express, MongoDB, REST/WebSockets).
• Unique edge: Native hardware integration experience (Kotlin native modules, USB-UART STM32 microcontrollers, Raspberry Pi Pico W).
• Deep software testing rigor (STLC, Selenium, Pytest, Jira) paired with past corporate recruiting coordination at Tata Consultancy Services (TCS).`,

    skills: `<span class="text-cyan-400 font-bold">Tech Stack & Competencies:</span>
• <span class="text-yellow-300 font-semibold">Frontend:</span> React, React Native, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS
• <span class="text-green-300 font-semibold">Backend:</span> Node.js, Express, REST APIs, JWT Auth, Socket.IO, PHP
• <span class="text-blue-300 font-semibold">Languages:</span> JavaScript, Python, Java, C/C++, SQL
• <span class="text-purple-300 font-semibold">Databases:</span> MongoDB, SQLite, RDBMS / SQL
• <span class="text-indigo-300 font-semibold">DevOps & Tools:</span> Git, GitHub, Docker, Jenkins, Postman, AWS (hands-on)
• <span class="text-pink-300 font-semibold">Quality & Testing:</span> STLC, Manual Testing, Selenium WebDriver, Pytest, Jira, Zephyr`,

    projects: `<span class="text-cyan-400 font-bold">Featured Projects:</span>
1. <span class="text-emerald-300 font-semibold">PETPAL</span> — Full-Stack MERN Pet Adoption & Care Platform (Socket.IO chat, JWT auth, MongoDB)
2. <span class="text-blue-300 font-semibold">Valve Control App</span> — Offline-first React Native + Kotlin native USB-UART module for STM32 & Raspberry Pi Pico W
3. <span class="text-amber-300 font-semibold">Contactless Restaurant Ordering</span> — QR code digital menu & order lifecycle with React & SQLite
4. <span class="text-purple-300 font-semibold">EEG Seizure Detection Pipeline</span> — Python ML signal processing with MNE & PyEEG (22+ extracted features)
5. <span class="text-pink-300 font-semibold">E-Commerce & Banking QA Suite</span> — 600+ test scenarios, 200+ integration cases, 100+ defects triaged in Jira

Type <span class="text-cyan-400">projects</span> or scroll down to the Projects section for full details!`,

    experience: `<span class="text-cyan-400 font-bold">Professional Experience:</span>
• <span class="text-emerald-300 font-semibold">Ukshati Technologies Pvt. Ltd.</span> (May 2025 – Aug 2025)
  Mobile App Developer Intern: React Native, Kotlin USB-UART module, STM32, Raspberry Pi Pico W micro-server.
• <span class="text-blue-300 font-semibold">St Joseph Engineering College</span> (Oct 2024 – Nov 2024)
  Research Intern: Python ML pipeline for EEG signal analysis & real-time seizure detection.
• <span class="text-purple-300 font-semibold">Tata Consultancy Services (TCS)</span> (Aug 2021 – Mar 2023)
  HR Executive: Technical hiring pipelines, panel scheduling, assessment setup & engineering candidate coordination.`,

    contact: `<span class="text-cyan-400 font-bold">Let's Connect & Collaborate:</span>
• Email:    <a href="mailto:dineshrajupadhya86@gmail.com" class="text-emerald-400 underline">dineshrajupadhya86@gmail.com</a>
• Phone:    <a href="tel:+918951318017" class="text-emerald-400 underline">+91 8951318017</a>
• WhatsApp: <a href="https://wa.me/918951318017" target="_blank" class="text-emerald-400 underline">Chat on WhatsApp</a>
• LinkedIn: <a href="https://linkedin.com/in/dinesh-rajupadhya-920075206" target="_blank" class="text-emerald-400 underline">linkedin.com/in/dinesh-rajupadhya-920075206</a>
• Location: Mangaluru / Bengaluru, Karnataka, India`,

    hire: `<span class="text-cyan-400 font-bold">Why Hire Dinesh?</span>
✓ Full-cycle development capability: MERN web apps + React Native mobile apps.
✓ Hardware-software interface experience: Kotlin native modules, USB-UART, microcontrollers.
✓ Quality-first mindset: Thorough QA background (Selenium, Pytest, STLC, Jira).
✓ Corporate maturity & strong communication: Prior experience coordinating technical talent at TCS.
✓ Immediate availability for Full-Time Developer or contract roles.`,

    resume: `<span class="text-cyan-400 font-bold">Opening Resume...</span>
You can view or print the resume at <a href="assets/resume.html" target="_blank" class="text-emerald-400 underline">assets/resume.html</a> or click "Download Resume" in the header!`,

    sudo: `Permission granted! But you don't need superuser privileges to hire Dinesh — just drop an email to <a href="mailto:dineshrajupadhya86@gmail.com" class="text-cyan-400 underline">dineshrajupadhya86@gmail.com</a>!`
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    
    // Create command echo element
    const echoDiv = document.createElement('div');
    echoDiv.className = 'mt-2 mb-1';
    echoDiv.innerHTML = `<span class="terminal-prompt">visitor@dinesh-portfolio:~$</span> <span class="text-white">${escapeHtml(rawCmd)}</span>`;
    terminalHistory.appendChild(echoDiv);

    if (cmd === '') return;

    if (cmd === 'clear') {
      terminalHistory.innerHTML = '';
      return;
    }

    if (cmd === 'theme') {
      document.getElementById('theme-toggle')?.click();
      const resDiv = document.createElement('div');
      resDiv.className = 'text-slate-300 text-sm mb-2';
      resDiv.innerHTML = 'Theme toggled successfully.';
      terminalHistory.appendChild(resDiv);
      return;
    }

    if (cmd === 'resume') {
      window.open('assets/resume.html', '_blank');
    }

    const resDiv = document.createElement('div');
    resDiv.className = 'text-slate-300 text-sm mb-3 pl-2 border-l-2 border-cyan-500/40 leading-relaxed';

    if (commands[cmd]) {
      resDiv.innerHTML = commands[cmd];
    } else {
      resDiv.innerHTML = `Command not recognized: <span class="text-rose-400">"${escapeHtml(rawCmd)}"</span>. Type <span class="text-cyan-400 cursor-pointer underline" onclick="window.runTerminalCommand('help')">help</span> to view all commands.`;
    }

    terminalHistory.appendChild(resDiv);
    terminalHistory.scrollTop = terminalHistory.scrollHeight;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  window.runTerminalCommand = function (cmd) {
    terminalInput.value = cmd;
    executeCommand(cmd);
    terminalInput.value = '';
    terminalInput.focus();
  };

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(terminalInput.value);
      terminalInput.value = '';
    }
  });

  chipButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd) {
        window.runTerminalCommand(cmd);
      }
    });
  });
})();
