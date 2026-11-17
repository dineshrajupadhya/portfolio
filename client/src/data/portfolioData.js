export const personalInfo = {
  name: "Dinesh Raj Upadhya",
  title: "Full-Stack Developer (MERN / React Native)",
  location: "Mangaluru / Bengaluru, Karnataka, India",
  email: "dineshrajupadhya86@gmail.com",
  phone: "+91 8951318017",
  whatsappUrl: "https://wa.me/918951318017?text=Hi%20Dinesh,%20I%20saw%20your%20portfolio...",
  linkedinUrl: "https://linkedin.com/in/dinesh-rajupadhya-920075206",
  githubUrl: "https://github.com/dineshrajupadhya",
  status: "Available for Full-Time Roles & Projects"
};

export const projects = [
  {
    id: "petpal",
    title: "PETPAL — Full-Stack Pet Care & Adoption Platform",
    category: "fullstack",
    categoryLabel: "MERN Stack",
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
    icon: "🐾",
    gradient: "from-cyan-900/60 via-slate-900 to-indigo-950"
  },
  {
    id: "valvecontrol",
    title: "Hardware-Integrated Valve Control Mobile App",
    category: "mobile",
    categoryLabel: "Mobile & IoT",
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
    icon: "📱",
    gradient: "from-emerald-950/60 via-slate-900 to-sky-950"
  },
  {
    id: "restaurant",
    title: "Contactless QR Restaurant Ordering System",
    category: "fullstack",
    categoryLabel: "React Web App",
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
    icon: "🍽️",
    gradient: "from-amber-950/60 via-slate-900 to-stone-900"
  },
  {
    id: "eegdetection",
    title: "EEG Signal Analysis & Real-Time Seizure Detection Pipeline",
    category: "ml",
    categoryLabel: "Machine Learning",
    badge: "Python • MNE • SciPy • PyEEG • Signal Processing",
    description: "A specialized biomedical machine learning pipeline engineered at St Joseph Engineering College to ingest raw multi-channel electroencephalogram (EEG) recordings and classify epileptic seizure markers.",
    architecture: [
      "Signal Preprocessing: Ingestion of clinical EEG time-series, bandpass filtering (0.5Hz - 60Hz), and notch filtering to eliminate 50Hz electrical mains noise.",
      "Feature Engineering: Extracted 22+ mathematical and spectral features including Spectral Entropy, Petrosian Fractal Dimension, Hjorth parameters, and relative band power.",
      "Analysis Pipeline: Utilized Python scientific libraries (MNE-Python, SciPy, PyEEG, NumPy) for batch processing and automated anomaly windowing."
    ],
    highlights: [
      "Extracted 22+ features from real clinical patient EEG time-series datasets.",
      "Significantly reduced signal artifacts and eye-blink noise using spatial ICA filtering.",
      "Documented mathematical model benchmarks for biomedical research review."
    ],
    tech: ["Python", "MNE-Python", "SciPy", "PyEEG", "NumPy", "Pandas", "Matplotlib"],
    icon: "🧠",
    gradient: "from-purple-950/60 via-slate-900 to-indigo-950"
  },
  {
    id: "qasuite",
    title: "E-Commerce & Banking Enterprise QA Suite",
    category: "qa",
    categoryLabel: "QA & Test Engineering",
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
    icon: "🧪",
    gradient: "from-pink-950/60 via-slate-900 to-rose-950"
  }
];

export const skillCategories = [
  {
    title: "Frontend Development",
    subtitle: "UI / UX & Mobile Frameworks",
    icon: "💻",
    skills: ["React.js", "React Native", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "UI/UX Principles (Meta)"]
  },
  {
    title: "Backend & APIs",
    subtitle: "Server Architecture & WebSockets",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.IO (Real-time)", "JWT Authentication", "PHP"]
  },
  {
    title: "Programming Languages",
    subtitle: "Multi-paradigm Polyglot",
    icon: "🔤",
    skills: ["JavaScript", "Python", "Java", "Kotlin (Native modules)", "C / C++", "SQL"]
  },
  {
    title: "Databases & Storage",
    subtitle: "NoSQL & Relational Models",
    icon: "🗄️",
    skills: ["MongoDB", "Mongoose ODM", "SQLite", "RDBMS / MySQL / PostgreSQL"]
  },
  {
    title: "Hardware & Embedded IoT",
    subtitle: "Microcontrollers & Serial Protocols",
    icon: "🔌",
    skills: ["STM32 Microcontrollers", "USB-UART Protocol", "Raspberry Pi Pico W", "Android Native Bridge", "Sensors & Flow Meters"]
  },
  {
    title: "DevOps & QA Automation",
    subtitle: "CI/CD, Testing & Issue Tracking",
    icon: "🛠️",
    skills: ["Git & GitHub", "Docker", "Jenkins", "Postman API Testing", "Selenium WebDriver", "Pytest", "Jira & Zephyr Scale", "AWS (Hands-on)"]
  }
];

export const experiences = [
  {
    role: "Mobile App Developer Intern",
    company: "Ukshati Technologies Pvt. Ltd.",
    period: "May 2025 – Aug 2025",
    icon: "📱",
    color: "emerald",
    points: [
      "Built an offline-first valve control mobile app in React Native, integrating a custom Kotlin native module for USB-UART communication with STM32 microcontrollers.",
      "Implemented real-time liquid flow monitoring, zone-based valve grouping, and wireless telemetry via a Raspberry Pi Pico W micro-server.",
      "Documented hardware-software architecture to support cross-functional maintenance."
    ]
  },
  {
    role: "Research Intern (ML & Signal)",
    company: "St Joseph Engineering College",
    period: "Oct 2024 – Nov 2024",
    icon: "🧠",
    color: "purple",
    points: [
      "Built a Python ML pipeline using MNE, SciPy, and PyEEG for EEG signal analysis and real-time seizure detection.",
      "Extracted 22+ spectral and statistical features from clinical patient datasets, eliminating mains and ocular noise."
    ]
  },
  {
    role: "HR Executive (Technical Hiring)",
    company: "Tata Consultancy Services (TCS)",
    period: "Aug 2021 – Mar 2023",
    icon: "🏢",
    color: "sky",
    points: [
      "Coordinated end-to-end technical interview pipelines, panel scheduling, and candidate shortlisting for engineering positions.",
      "Managed technical assessment setups, document verification, and cross-team stakeholder communication across business units."
    ]
  }
];

export const educations = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "St Joseph Engineering College",
    period: "2023 – 2025",
    score: "CGPA 6.64",
    details: "Advanced software architecture, database management, algorithms, full-stack design."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "St. Aloysius College",
    period: "2018 – 2021",
    score: "CGPA 6.64",
    details: "Core computer science foundation: OOP, data structures, networking, web development."
  }
];

export const certifications = [
  { name: "Software Testing Full Stack", issuer: "Qspiders — Manual & Automation Testing, STLC, Selenium", color: "sky" },
  { name: "Principles of UI/UX Design", issuer: "Meta — User-centered design, prototyping, design systems", color: "purple" },
  { name: "Introduction to Git & GitHub", issuer: "Google — Version control, branching workflows, team collaboration", color: "emerald" },
  { name: "Web Design Professional", issuer: "Da Vinci Institute — Modern responsive web architecture", color: "amber" }
];
