# Dinesh Raj Upadhya — Full-Stack MERN Portfolio

A modern, production-grade **React.js, Tailwind CSS, Node.js, Express & MongoDB (MERN)** portfolio.

🌐 **Live URL**: [https://dineshrajupadhya.vercel.app](https://dineshrajupadhya.vercel.app)  
🐙 **GitHub Repository**: [https://github.com/dineshrajupadhya/portfolio](https://github.com/dineshrajupadhya/portfolio)

---

## 🏗️ Architecture

```
portfolio/
├── src/                        # React 18 Application
│   ├── components/
│   │   ├── Navbar.jsx          # Glassmorphism navbar & theme toggle
│   │   ├── Hero.jsx            # Dynamic typewriter, stats, availability pill
│   │   ├── Terminal.jsx        # Interactive Recruiter CLI simulator in React
│   │   ├── Projects.jsx        # Filterable project showcase (MERN, Mobile, ML, QA)
│   │   ├── ProjectModal.jsx    # Deep-dive architecture modal
│   │   ├── Skills.jsx          # Real-time searchable skills matrix
│   │   ├── Experience.jsx      # Interactive timeline (Work vs Education toggle)
│   │   ├── QaEdge.jsx          # QA Engineering & Software Testing showcase
│   │   ├── Contact.jsx         # Full-stack contact form (MERN API + email fallback)
│   │   ├── Particles.jsx       # Interactive canvas constellation
│   │   └── Footer.jsx          # Quick links & social
│   ├── data/
│   │   └── portfolioData.js    # Structured portfolio data
│   ├── App.jsx                 # Root React application
│   ├── main.jsx                # React DOM root mounting
│   └── index.css               # Tailwind directives & glow design system
│
├── public/                     # Static assets
│   ├── favicon.svg             # Custom developer logo
│   └── resume.html             # Print-to-PDF ready ATS resume
│
├── server/                     # Node.js + Express + MongoDB REST API Backend
│   ├── config/db.js            # Mongoose connection to MongoDB Atlas
│   ├── models/                 # Mongoose schemas (Message.js, Project.js)
│   ├── controllers/            # Contact & Project request handlers
│   ├── routes/                 # Express API routes (/api/contact, /api/projects)
│   └── server.js               # Express application entrypoint
│
├── index.html                  # HTML entrypoint with SEO & OpenGraph tags
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS design system
└── package.json                # React & Tailwind dependencies
```

---

## ⚡ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start React development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🚀 Build for Production

```bash
npm run build
```
Generates an optimized static production bundle in `dist/`.
