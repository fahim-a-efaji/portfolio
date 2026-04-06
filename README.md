# Fahim Al Efaji — Portfolio

A production-grade React portfolio built with **Vite + React 18 + CSS Modules**.  
Auto-deploys to **GitHub Pages** via GitHub Actions on every push to `main`.

---

## 🗂 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/         ← One file per UI section
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Modal.jsx
│   │   └── Footer.jsx
│   ├── hooks/              ← Custom React hooks
│   │   ├── useFadeUp.js    ← IntersectionObserver scroll animation
│   │   ├── useTyped.js     ← Typewriter cycling effect
│   │   ├── useNavScroll.js ← Navbar scroll-shrink
│   │   └── useContactForm.js ← Form state + IndexedDB + Azure Function
│   ├── data/
│   │   └── portfolio.js    ← All content (roles, skills, projects, etc.)
│   ├── styles/             ← CSS Modules, one per component
│   │   ├── global.css      ← Reset, tokens, utilities, .fu animation
│   │   ├── Navbar.module.css
│   │   ├── Hero.module.css
│   │   ├── Skills.module.css
│   │   ├── Experience.module.css
│   │   ├── Projects.module.css
│   │   ├── Contact.module.css
│   │   ├── Modal.module.css
│   │   └── Footer.module.css
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. (Optional) Set up env vars for Azure Function
cp .env.example .env.local
# Edit .env.local and set VITE_API_BASE if you have an Azure Function

# 3. Start the dev server
npm run dev
# → http://localhost:5173
```

---

## 🏗 Build for Production

```bash
npm run build
# Output goes to dist/

# Preview the production build locally
npm run preview
```

---

## 🌐 Deploy to GitHub Pages

### One-time setup

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source** and set it to **GitHub Actions**
3. *(Optional)* Add your Azure Function URL as a repo secret:  
   **Settings → Secrets & variables → Actions → New secret**  
   Name: `VITE_API_BASE`  
   Value: `https://your-function-app.azurewebsites.net/api`

### Every deploy

Push to `main` — the GitHub Actions workflow in `.github/workflows/deploy.yml` will:
- Install dependencies
- Run `npm run build`
- Deploy the `dist/` folder to GitHub Pages automatically

Your site will be live at:  
`https://<your-username>.github.io/<repo-name>/`

---

## ✏️ Updating Content

All portfolio content lives in one file: **`src/data/portfolio.js`**

| What to change | Where |
|---|---|
| Typed roles in hero | `ROLES` array |
| Hero stats (2k+, 60%, …) | `STATS` array |
| Skill cards | `SKILLS` array |
| Work history | `EXPERIENCE` array |
| Education | `EDUCATION` object |
| Project cards | `PROJECTS` array |
| Contact links | `CONTACT` array |

---

## 🔌 Connecting the Azure Function (optional)

The contact form works offline by default (saves to browser IndexedDB).  
To also POST to your Azure Function:

1. Deploy the `azure_function/` backend (see original README)
2. Set `VITE_API_BASE` in `.env.local` (local) and as a GitHub secret (production)
3. The form will try the API first, then fall back to IndexedDB automatically

---

## 🛠 Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Styles | CSS Modules + CSS custom properties |
| Fonts | Syne (display) + DM Sans (body) via Google Fonts |
| Animations | IntersectionObserver (no library dependency) |
| Deployment | GitHub Pages via GitHub Actions |
| Contact backend | Azure Functions (optional) / IndexedDB (fallback) |
