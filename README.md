# Dinesh Raj Upadhya — Full-Stack MERN Portfolio

A modern, production-grade **MERN Stack (MongoDB, Express, React, Node.js) & Tailwind CSS** portfolio showcasing full-stack web platforms, React Native mobile apps, native hardware integration, biomedical ML pipelines, and software quality engineering.

---

## 🏗️ Architecture Overview

```
dinesh-portfolio/
├── client/                     # React.js 18 + Vite + Tailwind CSS Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx      # Sticky glass navbar, theme switch, mobile drawer
│   │   │   ├── Hero.jsx        # Dynamic typewriter, stats, status pill
│   │   │   ├── Terminal.jsx    # Interactive Recruiter CLI simulator in React
│   │   │   ├── Projects.jsx    # Filterable project showcase (MERN, Mobile, ML, QA)
│   │   │   ├── ProjectModal.jsx# Deep-dive architecture modal
│   │   │   ├── Skills.jsx      # Live searchable skills matrix
│   │   │   ├── Experience.jsx  # Interactive timeline (Work vs Education toggle)
│   │   │   ├── QaEdge.jsx      # Quality & Software Testing showcase (800+ test cases)
│   │   │   ├── Contact.jsx     # Contact form (Full MERN API + fallback to email)
│   │   │   ├── Particles.jsx   # Interactive canvas constellation
│   │   │   └── Footer.jsx      # Quick navigation & social links
│   │   ├── data/
│   │   │   └── portfolioData.js# Structured portfolio dataset
│   │   ├── App.jsx             # Root React application
│   │   ├── main.jsx            # React DOM mounting
│   │   └── index.css           # Tailwind directives + custom glow & glassmorphism
│   ├── public/
│   │   ├── favicon.svg         # Custom developer logo
│   │   └── resume.html         # Print-to-PDF ready ATS resume
│   ├── tailwind.config.js      # Tailwind design system configuration
│   └── vite.config.js          # Vite config with backend proxy
│
├── server/                     # Node.js + Express + MongoDB REST API Backend
│   ├── config/
│   │   └── db.js               # Mongoose connection to MongoDB Atlas
│   ├── models/
│   │   ├── Message.js          # Schema for incoming contact form inquiries
│   │   └── Project.js          # Schema for portfolio projects
│   ├── controllers/
│   │   ├── contactController.js# Handles contact submissions & message storage
│   │   └── projectController.js# Serves dynamic project data
│   ├── routes/
│   │   ├── contactRoutes.js    # POST /api/contact, GET /api/contact
│   │   └── projectRoutes.js    # GET /api/projects
│   ├── .env.example            # Environment variables template
│   └── server.js               # Express application entrypoint
│
├── package.json                # Root scripts to orchestrate client and server
└── README.md                   # Full setup & free hosting documentation
```

---

## ⚡ Quick Start (Running Locally)

### 1. Install Dependencies
Open your terminal in this directory:

```bash
# Install React client dependencies
cd client
npm install

# Install Express backend dependencies
cd ../server
npm install
```

### 2. Start the Development Servers

You can run both concurrently, or in separate terminal tabs:

**Run React Frontend:**
```bash
cd client
npm run dev
```
👉 Open your browser at **`http://localhost:5173`**

**Run Express Backend API:**
```bash
cd server
npm run dev
```
👉 Express API runs on **`http://localhost:5000`** with `/api/health` and `/api/contact`

---

## 🌐 How to Host It 100% Freely

Because this is a MERN application, you can host the **Frontend**, **Backend**, and **Database** for free without paying anything:

### 1. Database: MongoDB Atlas (100% Free Forever)
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) and sign up for a free account.
2. Create a free **M0 Shared Cluster** (takes 1 minute, no credit card required).
3. Under **Security** > **Database Access**, create a user (username + password).
4. Under **Network Access**, click **Add IP Address** -> allow `0.0.0.0/0` (anywhere).
5. Click **Connect** -> **Connect your application** to copy your connection string:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

---

### 2. Frontend: Vercel or Netlify (100% Free)

#### Option A: Vercel (Recommended for React + Vite)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "MERN portfolio upgrade"
   git push origin main
   ```
2. Log in to [vercel.com](https://vercel.com) using your GitHub account.
3. Click **Add New Project** and select your portfolio repository.
4. Set **Root Directory** to `client`.
5. Framework Preset will auto-detect **Vite**.
6. Click **Deploy**.
7. Your React portfolio is live with a custom `https://your-name.vercel.app` domain and free SSL!

#### Option B: Netlify
1. Run `cd client && npm run build`.
2. Drag and drop the generated `client/dist` folder into [app.netlify.com/drop](https://app.netlify.com/drop).
3. Instant live website in 30 seconds!

---

### 3. Backend: Render or Railway (100% Free)
1. Sign up on [render.com](https://render.com).
2. Click **New +** > **Web Service** and connect your GitHub repo.
3. Set **Root Directory** to `server`.
4. Build Command: `npm install`
5. Start Command: `node server.js`
6. Under **Environment Variables**, add:
   - `MONGODB_URI`: your MongoDB Atlas connection string
   - `PORT`: 5000
7. Click **Create Web Service**. Render gives you a free live API URL (e.g., `https://dinesh-portfolio-api.onrender.com`).
8. In `client/src/components/Contact.jsx`, point the fetch URL to your live Render API!

> [!NOTE]
> Even if the backend server is not running or sleeping, the React client automatically detects this and smoothly falls back to an instant `mailto:` link, so recruiters can **always** connect with you!

---

## 🎨 Key Features

- **Recruiter Terminal (`Terminal.jsx`)**: Interactive React CLI simulator responding to `help`, `skills`, `projects`, `experience`, `hire`, `contact`, and `theme`.
- **Project Filter & Modal (`Projects.jsx`, `ProjectModal.jsx`)**: Rich modals showing architecture, highlights, and tech stacks for PETPAL (MERN), Valve Controller (React Native/STM32), QR Restaurant System, EEG ML Pipeline, and QA Suite.
- **Real-Time Skills Search (`Skills.jsx`)**: Typing in the search bar dynamically filters and highlights skills across categories.
- **Experience & Education Switcher (`Experience.jsx`)**: Smooth tab transition between corporate/internship experience and education/certifications.
- **QA Rigor Section (`QaEdge.jsx`)**: Emphasizes Dinesh's 800+ test scenarios, STLC, and software testing edge.
- **Interactive Particle Constellation (`Particles.jsx`)**: Smooth canvas background responding to cursor coordinates.
- **Dark & Light Mode**: Persistent in `localStorage` with cyber-tech slate aesthetic.
- **Print-to-PDF ATS Resume (`public/resume.html`)**: Clean, printable ATS-optimized resume.
