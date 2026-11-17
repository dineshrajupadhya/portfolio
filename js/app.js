/**
 * Main Application Logic for Dinesh Raj Upadhya Portfolio
 */

// Project Data Store for rich modal inspection
const projectData = {
  petpal: {
    title: "PETPAL — Full-Stack Pet Care & Adoption Platform",
    category: "Full-Stack / MERN",
    badge: "MERN Stack • Socket.IO • JWT • REST APIs",
    description: "An end-to-end full-stack web application designed to connect pet adopters, pet care product buyers, and veterinary health resources in a unified, modern platform.",
    architecture: [
      "Frontend: React.js SPA with modular component hierarchy, custom hooks, and Tailwind CSS responsive design.",
      "Backend: Node.js & Express RESTful API with route controllers, middleware authentication, and error handling.",
      "Real-Time: Socket.IO WebSocket channels enabling instant messaging between pet adopters and shelters.",
      "Database: MongoDB with Mongoose ODM schemas for users, pet listings, product catalogs, and order transactions.",
      "Security: JWT (JSON Web Tokens) with hashed credentials (bcrypt), role-based access control, and CORS configuration."
    ],
    highlights: [
      "Designed full request-response lifecycle from React frontend to MongoDB database.",
      "Integrated real-time live chat using WebSockets to accelerate pet adoption discussions.",
      "Built e-commerce checkout flow with cart state management and transaction order tracking.",
      "Implemented comprehensive API validation to ensure data integrity and prevent bad payloads."
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "Tailwind CSS", "Postman"],
    githubUrl: "https://github.com/dineshrajupadhya",
    demoUrl: "#contact"
  },
  valvecontrol: {
    title: "Hardware-Integrated Valve Control Mobile App",
    category: "Mobile & Embedded IoT",
    badge: "React Native • Kotlin • USB-UART • STM32 • Raspberry Pi",
    description: "An offline-first industrial automation mobile application developed at Ukshati Technologies to control and monitor agricultural and industrial valve arrays via wired and wireless hardware interfaces.",
    architecture: [
      "Custom Kotlin Native Module: Built a high-performance Android native bridge in Kotlin to interface with USB-UART drivers for serial communications with STM32 microcontrollers.",
      "Offline-First React Native Architecture: Local caching and zero-dependency state machine allowing operation in remote field areas without cellular reception.",
      "Wireless Network Layer: Interfaced with a lightweight micro-server running on a Raspberry Pi Pico W for wireless local telemetry and mesh valve commands.",
      "Telemetry Engine: Real-time parsing of liquid flow sensors, pressure metrics, and solenoid valve state changes."
    ],
    highlights: [
      "Successfully integrated custom Kotlin native modules into React Native without third-party bloat.",
      "Engineered zone-based valve grouping to trigger simultaneous automated irrigation cycles.",
      "Maintained sub-100ms command latency over USB serial communication.",
      "Authored hardware-software integration documentation for cross-functional engineering teams."
    ],
    tech: ["React Native", "Kotlin", "Android SDK", "USB-UART", "STM32", "Raspberry Pi Pico W", "C/C++"],
    githubUrl: "https://github.com/dineshrajupadhya",
    demoUrl: "#contact"
  },
  restaurant: {
    title: "Contactless QR Restaurant Ordering System",
    category: "Full-Stack Web",
    badge: "React • SQLite • REST APIs • QR Code System",
    description: "A frictionless dining solution allowing restaurant guests to scan tabletop QR codes, browse dynamic digital menus, customize orders, and monitor real-time kitchen preparation status.",
    architecture: [
      "Guest Portal: Lightweight React web client optimized for mobile browsers, launching immediately upon QR scan with zero app install required.",
      "Order Management API: Express & SQLite backend handling table-specific session carts, order queues, and kitchen tickets.",
      "Kitchen Dashboard: Live updating interface displaying pending, in-prep, and completed kitchen orders for restaurant staff.",
      "Database Schema: Relational SQLite database with parameterized queries for categories, modifiers, tables, and bills."
    ],
    highlights: [
      "Eliminated physical menu overhead and reduced order wait time by 40%.",
      "Dynamic pricing and out-of-stock item toggling updated in real-time.",
      "Designed clean and accessible touch-first UI using principles of UX design.",
      "Lightweight footprint easily deployable on local on-premise restaurant servers."
    ],
    tech: ["React", "JavaScript", "SQLite", "Node.js", "REST APIs", "CSS3 / Tailwind"],
    githubUrl: "https://github.com/dineshrajupadhya",
    demoUrl: "#contact"
  },
  eegdetection: {
    title: "EEG Signal Analysis & Real-Time Seizure Detection Pipeline",
    category: "Machine Learning & Signal Processing",
    badge: "Python • MNE • SciPy • PyEEG • Signal Processing",
    description: "A specialized biomedical machine learning pipeline engineered at St Joseph Engineering College to ingest raw multi-channel electroencephalogram (EEG) recordings and classify epileptic seizure markers.",
    architecture: [
      "Signal Preprocessing: Ingestion of clinical EEG time-series, bandpass filtering (0.5Hz - 60Hz), and notch filtering to eliminate 50Hz electrical mains noise.",
      "Feature Engineering: Extracted 22+ mathematical and spectral features including Spectral Entropy, Petrosian Fractal Dimension, Hjorth parameters, and relative band power (Delta, Theta, Alpha, Beta, Gamma).",
      "Analysis Pipeline: Utilized Python scientific libraries (MNE-Python, SciPy, PyEEG, NumPy) for batch processing and automated anomaly windowing."
    ],
    highlights: [
      "Extracted 22+ features from real clinical patient EEG time-series datasets.",
      "Significantly reduced signal artifacts and eye-blink noise using spatial ICA filtering.",
      "Documented mathematical model benchmarks for biomedical research review."
    ],
    tech: ["Python", "MNE-Python", "SciPy", "PyEEG", "NumPy", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/dineshrajupadhya",
    demoUrl: "#contact"
  },
  qasuite: {
    title: "E-Commerce & Banking Enterprise QA Suite",
    category: "QA & Test Automation",
    badge: "Selenium WebDriver • Pytest • Jira • Zephyr • Postman",
    description: "A comprehensive manual and automated quality assurance suite authored for mission-critical e-commerce checkout and banking transaction platforms.",
    architecture: [
      "Test Architecture: Authored 600+ functional test scenarios and 200+ end-to-end integration test cases covering happy path, negative edge cases, boundary values, and race conditions.",
      "Automation Framework: Pytest and Selenium WebDriver scripts for regression suites and automated form validations.",
      "API Verification: Automated Postman collections verifying HTTP response status codes, payload contract schemas, JWT expirations, and rate limits.",
      "Defect Lifecycle: Logged, prioritized, and tracked 100+ critical bugs using Jira and Zephyr Scale."
    ],
    highlights: [
      "Uncovered and triaged 100+ critical defects before production releases.",
      "Achieved extensive test coverage across payment gateway integration and user authentication.",
      "Standardized STLC documentation, requirement traceability matrix (RTM), and bug reports."
    ],
    tech: ["Selenium WebDriver", "Pytest", "Python", "Postman", "Jira", "Zephyr Scale", "STLC", "SQL"],
    githubUrl: "https://github.com/dineshrajupadhya",
    demoUrl: "#contact"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initTypingEffect();
  initThemeToggle();
  initProjectFiltering();
  initProjectModal();
  initSkillSearch();
  initContactForm();
  initCopyActions();
  initAudioFeedback();
  initTimelineTabs();
  initMobileNav();
});

/* Dynamic Typing Effect */
function initTypingEffect() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const words = [
    "Full-Stack Developer (MERN)",
    "React Native Mobile Engineer",
    "Hardware-Integrated App Specialist",
    "QA Automation & Quality Advocate"
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      el.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      el.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typingSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* Theme Toggle (Dark / Light) */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  const toggleIcon = document.getElementById('theme-toggle-icon');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('dinesh_theme') || 'dark';
  applyTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isDark = html.classList.contains('dark');
      const newTheme = isDark ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('dinesh_theme', newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      html.classList.remove('dark');
      html.classList.add('light');
      if (toggleIcon) toggleIcon.textContent = '🌙';
    } else {
      html.classList.remove('light');
      html.classList.add('dark');
      if (toggleIcon) toggleIcon.textContent = '☀️';
    }
  }
}

/* Project Filter Tabs */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-sky-500', 'text-white', 'border-sky-400');
        b.classList.add('bg-slate-800/60', 'text-slate-300', 'border-slate-700');
      });

      btn.classList.add('bg-sky-500', 'text-white', 'border-sky-400');
      btn.classList.remove('bg-slate-800/60', 'text-slate-300', 'border-slate-700');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'block';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

/* Project Deep-Dive Modal */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('project-modal-content');
  const modalClose = document.getElementById('modal-close');
  const inspectBtns = document.querySelectorAll('.inspect-project-btn');

  if (!modal) return;

  inspectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projectId = btn.getAttribute('data-project');
      const data = projectData[projectId];
      if (data) {
        populateModal(data);
        openModal();
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  function openModal() {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  function populateModal(data) {
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-badge').textContent = data.badge;
    document.getElementById('modal-desc').textContent = data.description;

    const archContainer = document.getElementById('modal-architecture');
    archContainer.innerHTML = data.architecture.map(a => `<li class="flex items-start gap-2 mb-1.5"><span class="text-sky-400 mt-0.5">▹</span> <span>${a}</span></li>`).join('');

    const highlightsContainer = document.getElementById('modal-highlights');
    highlightsContainer.innerHTML = data.highlights.map(h => `<li class="flex items-start gap-2 mb-1.5"><span class="text-emerald-400 mt-0.5">✓</span> <span>${h}</span></li>`).join('');

    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = data.tech.map(t => `<span class="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-sky-300 border border-slate-700">${t}</span>`).join('');

    const githubLink = document.getElementById('modal-github');
    const demoLink = document.getElementById('modal-demo');
    if (githubLink) githubLink.href = data.githubUrl;
    if (demoLink) demoLink.href = data.demoUrl;
  }
}

/* Skills Live Search */
function initSkillSearch() {
  const searchInput = document.getElementById('skill-search-input');
  const skillTags = document.querySelectorAll('.skill-tag');
  const skillCategoryCards = document.querySelectorAll('.skill-category-card');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    if (!query) {
      skillTags.forEach(tag => {
        tag.classList.remove('ring-2', 'ring-sky-400', 'bg-sky-500/20');
        tag.style.opacity = '1';
      });
      skillCategoryCards.forEach(c => c.style.display = 'block');
      return;
    }

    let matchCount = 0;
    skillCategoryCards.forEach(card => {
      const tagsInCard = card.querySelectorAll('.skill-tag');
      let cardHasMatch = false;

      tagsInCard.forEach(tag => {
        const text = tag.textContent.toLowerCase();
        if (text.includes(query)) {
          tag.classList.add('ring-2', 'ring-sky-400', 'bg-sky-500/20');
          tag.style.opacity = '1';
          cardHasMatch = true;
          matchCount++;
        } else {
          tag.classList.remove('ring-2', 'ring-sky-400', 'bg-sky-500/20');
          tag.style.opacity = '0.35';
        }
      });

      card.style.display = cardHasMatch ? 'block' : 'none';
    });
  });
}

/* Contact Form Handling */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusDiv = document.getElementById('form-status');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['name']?.value.trim();
    const email = form.elements['email']?.value.trim();
    const subject = form.elements['subject']?.value.trim() || 'New Portfolio Inquiry';
    const message = form.elements['message']?.value.trim();

    if (!name || !email || !message) {
      showToast('⚠️ Please fill out all required fields.', 3000);
      return;
    }

    // Direct mailto launcher fallback ensuring 100% reliability on any static host
    const bodyContent = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
    const mailtoUrl = `mailto:dineshrajupadhya86@gmail.com?subject=${encodeURIComponent(subject)}&body=${bodyContent}`;
    
    // Open default mail client
    window.location.href = mailtoUrl;

    if (statusDiv) {
      statusDiv.innerHTML = `
        <div class="p-3 bg-emerald-500/20 border border-emerald-500/50 rounded-lg text-emerald-300 text-sm">
          ✓ Thank you ${escapeHtml(name)}! Your email client has been opened. You can also directly reach Dinesh at <a href="mailto:dineshrajupadhya86@gmail.com" class="underline font-bold">dineshrajupadhya86@gmail.com</a>.
        </div>
      `;
    }

    form.reset();
    showToast('🚀 Opening mail client to send message...', 4000);
  });
}

/* One-Click Copy Actions */
function initCopyActions() {
  const copyBtns = document.querySelectorAll('[data-copy]');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`📋 Copied: "${textToCopy}" to clipboard!`);
        }).catch(() => {
          showToast(`📋 Text: ${textToCopy}`);
        });
      }
    });
  });
}

/* Toast Notification Utility */
function showToast(message, duration = 3000) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'fixed bottom-6 right-6 z-50 bg-slate-900 text-white border border-sky-500/50 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 transform translate-y-12 opacity-0 pointer-events-none transition-all duration-300 text-sm font-medium';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>⚡</span> <span>${message}</span>`;
  toast.classList.remove('translate-y-12', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-12', 'opacity-0', 'pointer-events-none');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, duration);
}

/* Subtle Web Audio Feedback (synthesized, no audio files needed) */
function initAudioFeedback() {
  let audioCtx = null;

  function playTone(freq = 600, type = 'sine', duration = 0.05) {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio not supported or allowed, fail silently
    }
  }

  document.querySelectorAll('button, .term-chip, .project-filter-btn').forEach(el => {
    el.addEventListener('mouseenter', () => playTone(800, 'sine', 0.03));
  });
}

/* Timeline Tabs (Experience vs Education) */
function initTimelineTabs() {
  const expTab = document.getElementById('tab-experience');
  const eduTab = document.getElementById('tab-education');
  const expContent = document.getElementById('timeline-experience');
  const eduContent = document.getElementById('timeline-education');

  if (!expTab || !eduTab) return;

  expTab.addEventListener('click', () => {
    expTab.classList.add('bg-sky-500', 'text-white');
    expTab.classList.remove('bg-slate-800/50', 'text-slate-400');
    eduTab.classList.remove('bg-sky-500', 'text-white');
    eduTab.classList.add('bg-slate-800/50', 'text-slate-400');

    expContent.classList.remove('hidden');
    eduContent.classList.add('hidden');
  });

  eduTab.addEventListener('click', () => {
    eduTab.classList.add('bg-sky-500', 'text-white');
    eduTab.classList.remove('bg-slate-800/50', 'text-slate-400');
    expTab.classList.remove('bg-sky-500', 'text-white');
    expTab.classList.add('bg-slate-800/50', 'text-slate-400');

    eduContent.classList.remove('hidden');
    expContent.classList.add('hidden');
  });
}

/* Mobile Nav Drawer */
function initMobileNav() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!mobileMenuBtn || !mobileMenu) return;

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
