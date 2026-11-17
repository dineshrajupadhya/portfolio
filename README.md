# Dinesh Raj Upadhya — Interactive Portfolio Website

Welcome to your personalized, interactive developer portfolio! This portfolio showcases your full-stack development expertise (MERN stack, React Native, Kotlin hardware modules, Python ML, and QA automation) with a modern cyber-tech design, live developer terminal, animated particle constellation, and interactive project deep-dives.

---

## 🌟 Key Features Included

- **⚡ Interactive Recruiter Terminal (`recruiter_console.sh`)**:
  - Visitors can type real terminal commands (`help`, `skills`, `projects`, `experience`, `hire`, `contact`, `clear`) or click quick chips to inspect your background interactively.
- **📱 Responsive & Modern UI**:
  - Cyberpunk dark slate aesthetic with glowing accents, glassmorphism cards, and smooth CSS hover transitions.
  - Interactive background canvas particle network that reacts to mouse movements.
- **🚀 Dynamic Project Showcase with Deep-Dive Modals**:
  - Filter by **All**, **Full-Stack / MERN**, **Mobile & Embedded**, **Machine Learning**, and **QA & Testing**.
  - Clicking any project opens an architecture modal detailing technical design, highlights, challenges solved, and repository links:
    1. **PETPAL** — Full-Stack Pet Care Platform (MERN, Socket.IO, JWT)
    2. **Hardware-Integrated Valve Control App** (React Native, Kotlin USB-UART module, STM32, Raspberry Pi Pico W)
    3. **Contactless Restaurant Ordering System** (React, SQLite, QR Code scanner)
    4. **EEG Seizure Detection ML Pipeline** (Python, MNE, SciPy, PyEEG)
    5. **E-Commerce & Banking QA Suite** (Selenium, Pytest, Jira, Zephyr Scale)
- **🔍 Live Filterable Technical Skills Matrix**:
  - Search input filters skills in real-time as recruiters type (e.g. typing "React" or "Python" highlights matching skills).
- **🛡️ The QA Rigor Edge Section**:
  - Showcases your unique value proposition: combining full-stack development with rigorous software testing to write defect-resilient code.
- **⏳ Interactive Career Timeline**:
  - Toggle between **Work Experience** (Ukshati Technologies, SJEC Research, TCS) and **Education & Certifications** (MCA, BCA, Google Git, Meta UI/UX, Qspiders).
- **📬 Multi-Channel Contact & Connect**:
  - Interactive Contact Form.
  - 1-Click Copy with toast notification for your Email (`dineshrajupadhya86@gmail.com`) and Phone (`+91 8951318017`).
  - Instant WhatsApp chat launcher (`https://wa.me/918951318017`).
  - LinkedIn profile link.
- **📄 Print-Ready HTML & PDF Resume**:
  - Dedicated ATS-friendly resume (`assets/resume.html`) with a single-click "Print / Save as PDF" button.
- **🌓 Dark / Light Mode Toggle**:
  - Switch between sleek Dark and crisp Light theme with state saved in `localStorage`.

---

## 📂 Project Structure

```
dinesh-portfolio/
├── index.html          # Main interactive single-page portfolio
├── package.json        # Node configuration & preview scripts
├── README.md           # Deployment & customization guide
├── css/
│   └── style.css       # Custom glassmorphism, animations & terminal styling
├── js/
│   ├── app.js          # Core app controller, modal logic, typing effect, live filters
│   ├── terminal.js     # Interactive Recruiter CLI simulator
│   └── particles.js    # Interactive canvas particle network
└── assets/
    ├── favicon.svg     # Sleek custom developer logo favicon
    └── resume.html     # Print-to-PDF ready ATS resume page
```

---

## 💻 How to Preview Locally Right Now

You can preview the portfolio locally in any of these ways:

### Option 1: Direct File Open (Zero Install)
Double click `index.html` in your file explorer. It will open directly in Chrome, Edge, or Firefox!

### Option 2: Local HTTP Server
In your terminal, navigate to this folder and run:
```bash
npx serve .
```
or with Python:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` (or `http://localhost:3000`).

---

## 🌐 How to Host 100% Freely

Because this portfolio is built with modern, ultra-fast static web standards, you can host it **completely free** with high availability, global CDN, and free SSL!

Here are the 3 easiest ways:

### 🥇 Option A: GitHub Pages (Recommended)
Host directly on GitHub forever for free with a custom `username.github.io` URL!

1. **Initialize Git & Commit**:
   ```bash
   cd "C:\Users\Dinesh Raj Upadhya\.gemini\antigravity\scratch\dinesh-portfolio"
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   ```

2. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new).
   - Repository name: `portfolio` (or `<your-github-username>.github.io` for a primary root domain).
   - Keep it **Public**.
   - Click **Create repository**.

3. **Push your code**:
   ```bash
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - In your GitHub repo, go to **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Branch: select `main` and folder `/ (root)`, then click **Save**.
   - Within 60 seconds, your site is live at:
     `https://<your-username>.github.io/portfolio/`

---

### 🥈 Option B: Netlify (Drag & Drop in 30 Seconds)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Sign in or sign up with your email or GitHub (free).
3. Drag and drop the `dinesh-portfolio` folder directly onto the browser window.
4. Netlify will instantly deploy it and give you a live URL (e.g., `https://dinesh-upadhya.netlify.app`)!

---

### 🥉 Option C: Vercel (1-Click Deploy)
1. Push your code to GitHub as shown in Option A.
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **Add New Project**, import your `portfolio` repo, and click **Deploy**.
4. Your portfolio is live with free automatic SSL and instantaneous global edge caching!

---

## ✏️ How to Customize Later

- **Update Projects & Links**: Open `js/app.js` and look at `projectData` at the top to modify titles, descriptions, or repository links.
- **Update Contact Info**: Open `index.html` and search for `dineshrajupadhya86@gmail.com` or `+918951318017` to update emails, phone numbers, or social handles.
- **Resume Edits**: Open `assets/resume.html` to adjust any resume text or formatting.
