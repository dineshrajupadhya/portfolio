export const personalInfo = {
  name: "Dinesh Raj Upadhya",
  title: "Full-Stack Developer (MERN / React Native)",
  location: "Mangaluru / Bengaluru, Karnataka, India",
  email: "dineshrajupadhya86@gmail.com",
  phone: "+91 8951318017",
  whatsappUrl: "https://wa.me/918951318017?text=Hi%20Dinesh,%20I%20saw%20your%20portfolio...",
  linkedinUrl: "https://www.linkedin.com/in/dinesh-raj-upadhya-920075206/",
  githubUrl: "https://github.com/dineshrajupadhya",
  portfolioUrl: "https://dineshrajupadhya.vercel.app",
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
    codeSnippet: {
      filename: "authMiddleware.js & socketHandler.js",
      language: "javascript",
      code: `// JWT Authentication Middleware & Socket.IO Real-Time Chat
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  let token = req.headers.authorization?.startsWith('Bearer')
    ? req.headers.authorization.split(' ')[1]
    : null;

  if (!token) {
    return res.status(401).json({ error: 'Not authorized, no bearer token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token expired or invalid signature' });
  }
};

// WebSocket Chat Handler
export const initializeChatSockets = (io) => {
  io.on('connection', (socket) => {
    socket.on('join_shelter_room', ({ shelterId, userId }) => {
      socket.join(\`shelter_\${shelterId}\`);
    });

    socket.on('send_message', async ({ shelterId, message, senderId }) => {
      const payload = { senderId, message, timestamp: new Date() };
      io.to(\`shelter_\${shelterId}\`).emit('receive_message', payload);
    });
  });
};`
    },
    systemFlow: [
      { step: "1. Client (React)", desc: "User authenticates with JWT & connects to Socket.IO channel" },
      { step: "2. API Gateway (Express)", desc: "Routes request through CORS & JWT token verification" },
      { step: "3. Service Layer", desc: "Handles pet adoption matching & triggers real-time WebSocket events" },
      { step: "4. Database (MongoDB)", desc: "Persists chat logs, pet medical records, and cart transactions" }
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
    codeSnippet: {
      filename: "UsbUartBridgeModule.kt",
      language: "kotlin",
      code: `// React Native Native Module for USB-UART Serial to STM32
package com.ukshati.valvecontrol

import com.facebook.react.bridge.*
import com.hoho.android.usbserial.driver.*

class UsbUartBridgeModule(reactContext: ReactApplicationContext) : 
    ReactContextBaseJavaModule(reactContext) {

    private var port: UsbSerialPort? = null

    override fun getName(): String = "UsbUartBridge"

    @ReactMethod
    fun sendValveCommand(valveId: Int, state: Boolean, promise: Promise) {
        try {
            // Protocol packet: [START_BYTE, VALVE_ID, STATE, CHECKSUM]
            val command = byteArrayOf(0xAA.toByte(), valveId.toByte(), if (state) 1 else 0)
            port?.write(command, 100) // 100ms timeout
            
            val response = ByteArray(16)
            val bytesRead = port?.read(response, 200) ?: 0
            
            val map = Arguments.createMap().apply {
                putBoolean("success", true)
                putInt("valveId", valveId)
                putInt("bytesRead", bytesRead)
            }
            promise.resolve(map)
        } catch (e: Exception) {
            promise.reject("UART_ERR", "Failed to communicate with STM32: \${e.message}")
        }
    }
}`
    },
    systemFlow: [
      { step: "1. Mobile UI (React Native)", desc: "Operator configures valve zones & sets scheduled flow volume" },
      { step: "2. Kotlin Native Bridge", desc: "Serializes command packets & dispatches via Android USB host driver" },
      { step: "3. Microcontroller (STM32)", desc: "Parses UART packets & actuates physical 24V solenoid relays" },
      { step: "4. Micro-Server (Pico W)", desc: "Provides local Wi-Fi telemetry & real-time pressure sensor feedback" }
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
    codeSnippet: {
      filename: "orderController.js",
      language: "javascript",
      code: `// Table Order Dispatch & Kitchen Ticket Generator
import db from '../config/database.js';

export const createTableOrder = async (req, res) => {
  const { tableNumber, items, totalAmount } = req.body;

  if (!tableNumber || !items?.length) {
    return res.status(400).json({ error: 'Missing table or items in order' });
  }

  try {
    const orderQuery = \`
      INSERT INTO orders (table_num, total, status, created_at)
      VALUES (?, ?, 'QUEUED', datetime('now'))
    \`;
    const orderResult = await db.run(orderQuery, [tableNumber, totalAmount]);
    const orderId = orderResult.lastID;

    // Insert line items in batch
    const itemStmt = await db.prepare(
      \`INSERT INTO order_items (order_id, item_id, quantity, notes) VALUES (?, ?, ?, ?)\`
    );
    for (const item of items) {
      await itemStmt.run([orderId, item.id, item.qty, item.notes || '']);
    }
    await itemStmt.finalize();

    res.status(201).json({
      success: true,
      orderId,
      tableNumber,
      status: 'QUEUED'
    });
  } catch (err) {
    res.status(500).json({ error: 'Database transaction error: ' + err.message });
  }
};`
    },
    systemFlow: [
      { step: "1. Table QR Code", desc: "Customer scans table QR to open table-specific session with dynamic menu" },
      { step: "2. Cart & Customization", desc: "Client-side cart state manages item modifiers & special instructions" },
      { step: "3. Express API", desc: "Validates order payload and records atomic transaction into SQLite" },
      { step: "4. Kitchen Display (KOT)", desc: "Kitchen screen updates immediately to show queued & in-prep orders" }
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
    codeSnippet: {
      filename: "eeg_features.py",
      language: "python",
      code: `# EEG Preprocessing & Spectral Feature Extraction
import numpy as np
import scipy.signal as signal
from scipy.stats import entropy

def extract_eeg_features(raw_signal, sample_rate=256):
    """
    Filters raw EEG signal and extracts spectral entropy + band powers.
    """
    # 1. Bandpass filter between 0.5Hz and 60Hz
    nyq = 0.5 * sample_rate
    b, a = signal.butter(4, [0.5 / nyq, 60.0 / nyq], btype='band')
    filtered = signal.filtfilt(b, a, raw_signal)

    # 2. Compute Power Spectral Density via Welch's method
    freqs, psd = signal.welch(filtered, fs=sample_rate, nperseg=sample_rate*2)

    # 3. Frequency Band Extraction: Delta, Theta, Alpha, Beta, Gamma
    bands = {'delta': (0.5, 4), 'theta': (4, 8), 'alpha': (8, 13), 'beta': (13, 30)}
    band_powers = {}
    total_power = np.sum(psd)

    for band_name, (low, high) in bands.items():
        idx = np.logical_and(freqs >= low, freqs <= high)
        band_powers[f"{band_name}_rel"] = np.sum(psd[idx]) / total_power

    # 4. Spectral Entropy computation
    norm_psd = psd / np.sum(psd)
    spec_entropy = entropy(norm_psd)

    return {
        "spectral_entropy": float(spec_entropy),
        "band_powers": band_powers,
        "is_anomaly_candidate": spec_entropy > 0.85
    }`
    },
    systemFlow: [
      { step: "1. Raw Clinical EEG", desc: "Ingestion of multi-channel time-series microvolt voltage readings" },
      { step: "2. Signal Preprocessing", desc: "Butterworth bandpass (0.5-60Hz) & notch filtering for 50Hz noise" },
      { step: "3. Feature Extraction", desc: "SciPy & PyEEG calculate 22+ spectral, fractal, and Hjorth metrics" },
      { step: "4. Anomaly Classifier", desc: "Classification model predicts seizure markers with high sensitivity" }
    ],
    tech: ["Python", "MNE-Python", "SciPy", "PyEEG", "NumPy", "Pandas", "Matplotlib"],
    icon: "🧠",
    gradient: "from-purple-950/60 via-slate-900 to-indigo-950"
  },
  {
    id: "qasuite",
    title: "ShoppersStack E-Commerce & Banking QA Test Suite",
    category: "qa",
    categoryLabel: "QA & Test Engineering",
    badge: "ShoppersStack • Selenium • Pytest • Jira • STLC",
    liveUrl: "https://www.shoppersstack.com/",
    liveLabel: "Tested Platform: ShoppersStack",
    description: "Comprehensive quality assurance and defect discovery testing suite executed for ShoppersStack (live retail e-commerce platform at shoppersstack.com) alongside simulated banking payment modules. Authored 600+ functional, integration, and system test scenarios, uncovering and triaging 100+ defects in Jira.",
    architecture: [
      "ShoppersStack E-Commerce Test Design: Authored comprehensive test scenarios across ShoppersStack modules including User & Merchant Registration, Product Search Filters, Cart Persistence, Promo Code Validations, and Checkout.",
      "System & Integration Testing: Validated end-to-end data integrity across ShoppersStack frontend, REST API layers, and simulated banking transactions under edge-case inputs.",
      "Automated Regression Framework: Built automated test suites in Python using Pytest and Selenium WebDriver with explicit waits and Page Object Model (POM) design patterns.",
      "API Verification with Postman: Executed automated API validation collections verifying HTTP status codes (200, 400, 401, 404, 500), payload contracts, token expiry, and payload injection defenses.",
      "Defect Lifecycle & Triage: Logged, prioritized, and tracked 100+ critical bugs discovered on ShoppersStack using Jira and Zephyr Scale, authoring detailed reproduction steps and Root Cause Analysis (RCA)."
    ],
    highlights: [
      "Discovered and triaged 100+ critical defects on the live ShoppersStack e-commerce platform.",
      "Authored 600+ functional test scenarios and 200+ integration and system test cases.",
      "Constructed Requirement Traceability Matrix (RTM) linking customer user stories to test suites.",
      "Automated critical regression workflows with Selenium WebDriver reducing manual verification overhead."
    ],
    codeSnippet: {
      filename: "test_shoppersstack_checkout.py",
      language: "python",
      code: `# Automated Regression Test Suite for ShoppersStack E-Commerce
# Target Platform: https://www.shoppersstack.com/
import pytest
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

@pytest.mark.regression
class TestShoppersStackE2E:
    """End-to-end test validation for ShoppersStack catalog and checkout."""

    @pytest.fixture(autouse=True)
    def setup_browser(self, driver):
        self.driver = driver
        self.driver.maximize_window()
        self.wait = WebDriverWait(self.driver, 12)
        self.base_url = "https://www.shoppersstack.com"

    def test_search_and_cart_persistence(self):
        """Verify product search filtering and cart persistence across guest sessions."""
        self.driver.get(f"{self.base_url}/products")

        # 1. Search for category item
        search_box = self.wait.until(EC.element_to_be_clickable((By.ID, "search")))
        search_box.clear()
        search_box.send_keys("Electronics")
        search_btn = self.driver.find_element(By.ID, "searchBtn")
        search_btn.click()

        # 2. Assert search results render matching cards
        product_cards = self.wait.until(
            EC.presence_of_all_elements_located((By.CLASS_NAME, "featuredProducts_card__"))
        )
        assert len(product_cards) > 0, "Defect: No products returned for valid category query"

        # 3. Add item to cart and assert badge counter increments
        add_to_cart_btn = product_cards[0].find_element(By.TAG_NAME, "button")
        add_to_cart_btn.click()

        cart_badge = self.wait.until(
            EC.visibility_of_element_located((By.ID, "cart-badge-count"))
        )
        assert cart_badge.text == "1", "Defect: Cart badge failed to increment after adding item"

    def test_idempotent_payment_prevents_duplicate_charge(self):
        """Verify checkout submit button disables instantly to prevent duplicate transactions."""
        self.driver.get(f"{self.base_url}/checkout")
        pay_btn = self.wait.until(EC.element_to_be_clickable((By.ID, "place-order-btn")))
        
        # Click pay button and assert immediate disabled state
        pay_btn.click()
        assert not pay_btn.is_enabled(), "Critical Defect: Double submission vulnerability detected"`
    },
    systemFlow: [
      { step: "1. ShoppersStack Requirements Analysis", desc: "Analyzed business requirements across ShoppersStack user & merchant roles to construct RTM" },
      { step: "2. Scenario & Test Case Authoring", desc: "Authored 600+ functional and 200+ integration/system test cases covering boundary values & edge cases" },
      { step: "3. Automation & API Validation", desc: "Executed Pytest/Selenium regression suites and Postman API contract verifications" },
      { step: "4. Defect Reporting & Jira Triage", desc: "Uncovered 100+ defects on ShoppersStack; documented reproduction steps and severity in Jira" }
    ],
    tech: ["ShoppersStack", "Selenium WebDriver", "Pytest", "Python", "Postman", "Jira", "Zephyr Scale", "STLC", "SQL"],
    icon: "🧪",
    gradient: "from-pink-950/60 via-slate-900 to-rose-950"
  }
];

export const faqs = [
  {
    q: "Are you available for immediate joining?",
    a: "Yes! Having graduated with my Master of Computer Applications (MCA), I am available to join immediately with zero notice period delay for full-time software engineering roles or contract engagements."
  },
  {
    q: "What work locations and arrangements are you open to?",
    a: "I am based in Mangaluru / Bengaluru and am fully open to on-site, hybrid, or remote positions. I am also flexible to relocate to major tech hubs across India for the right engineering opportunity."
  },
  {
    q: "How does your prior technical hiring experience at TCS help you as an engineer?",
    a: "Before completing my MCA, I coordinated technical hiring pipelines at Tata Consultancy Services (TCS). This gave me an insider understanding of corporate engineering standards, stakeholder communication, cross-functional collaboration, and why readable, maintainable software architecture matters far more than hasty workarounds."
  },
  {
    q: "What are your primary technical strengths?",
    a: "My core expertise is full-stack web development with the MERN stack (MongoDB, Express, React, Node.js) and mobile engineering with React Native. Additionally, I have hands-on experience integrating native Kotlin modules for microcontrollers (STM32, Raspberry Pi Pico W) and building signal processing pipelines in Python."
  },
  {
    q: "Why hire a developer with a software testing & QA background?",
    a: "Most developers write code solely for the 'happy path'. With full-stack QA certification and over 800 test cases authored across banking and retail systems, I build software anticipating edge cases, race conditions, and boundary values from day one. This leads to cleaner APIs, robust input validation, and significantly fewer production defects."
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
