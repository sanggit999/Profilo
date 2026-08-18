# Nguyen Van Sang — Fullstack Developer Portfolio 🚀

[![Live Portfolio](https://img.shields.io/badge/Live-Portfolio-3B82F6?style=for-the-badge&logo=react)](https://sanggit999.github.io/Profilo/)
[![GitHub Profile](https://img.shields.io/badge/GitHub-sanggit999-181717?style=for-the-badge&logo=github)](https://github.com/sanggit999)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A modern, high-performance, dark-first Personal Developer Portfolio built with **React 18**, **Vite**, **TypeScript**, **Tailwind CSS**, and **GitHub Actions CI/CD**.

---

## 👨‍💻 Developer Profile

- **FullName**: Nguyễn Văn Sáng (Nguyen Van Sang)
- **Role Title**: Fullstack Developer
- **Education**: FPT Polytechnic Hanoi (2022 - 2025) — Computer Programming
- **Current Position**: Fullstack Developer at **Trung Anh Group** (03/2025 — 07/2026)
- **Email**: [sangnguyen1892k3@gmail.com](mailto:sangnguyen1892k3@gmail.com)
- **GitHub**: [github.com/sanggit999](https://github.com/sanggit999)

---

## ⚡ Technical Stack & Ecosystem

| Category | Technologies & Tools |
| :--- | :--- |
| **Frontend & Mobile** | JavaScript (ES6+), TypeScript, React.js, React Native, Flutter (Clear Architecture), HTML5, CSS3, Tailwind CSS |
| **Backend & Databases** | Python, Django, Django REST Framework (DRF), RESTful API, PostgreSQL, Redis Caching, Celery, JWT Auth, API Security |
| **DevOps & Infrastructure** | Docker, Docker Compose, Nginx (Reverse Proxy), Git, GitHub, GitHub Actions CI/CD |
| **Cloud & Mobile Services** | Firebase Remote Config, OneSignal Push Notifications, Google Play Console, App Store Connect |

---

## 💼 Featured Work & Track Record

### 🏢 Company Products Delivered (Trung Anh Group)

1. **HRM System — Enterprise HR Management Platform (Web Platform)**
   - **Architecture**: Decoupled React.js Frontend and Python Django REST Framework (DRF) Backend.
   - **Key Features**: Real-time HR analytics dashboard, employee profiles & department management, automated timekeeping, JWT Role-Based Access Control (RBAC).
   - **Stack**: React.js, Tailwind CSS, Python, Django DRF, PostgreSQL, Redis, Docker.

2. **BeautyCare App — Appointment & Customer Care (Mobile App)**
   - **Architecture**: Cross-platform React Native mobile app with Python DRF backend, real-time push notifications, and dynamic feature flags via Firebase Remote Config.
   - **Key Features**: Customer appointment booking, GPS location-based timekeeping, OneSignal push notifications, published directly on App Store Connect (TestFlight) & Google Play Console.
   - **Stack**: React Native, Python DRF, PostgreSQL, Redis, Firebase Remote Config, OneSignal, App Store Connect, Google Play.

### 📱 Featured Personal Project

- **SnapSpot — Photo Location Sharing Platform**
  - **Architecture**: Cross-platform mobile app featuring a Flutter client designed with **Clear Architecture** (Domain, Data, Presentation layers), backed by Django REST Framework APIs, PostgreSQL, Redis caching, and Nginx reverse proxy.
  - **Source Code**: [github.com/sanggit999/snapspot](https://github.com/sanggit999/snapspot)

---

## 🛠️ Portfolio Features & UI/UX Design

- 🌙 **Dark-First Theme**: Curated charcoal background (`#0B0F17`), slate panels (`#151C28`), electric blue (`#3B82F6`), and violet (`#8B5CF6`) accents with Light Mode support.
- ⚡ **Typewriter Animation**: Dynamic role title text animation in the Hero section.
- 📦 **Path Alias (`@/*`)**: Clean import resolution mapped to `src/*` across TypeScript and Vite configuration.
- 📱 **Responsive Layout**: Optimized for Mobile, Tablet, and Desktop viewports.
- 🎨 **Custom SVG Favicon**: Custom code brackets developer favicon (`favicon.svg`).
- 🤖 **Automated CI/CD**: Seamless GitHub Actions workflow for building and deploying to GitHub Pages (`.github/workflows/deploy.yml`).

---

## 📂 Project Structure

```text
Profilo/
├── .agents/                    # Custom agent guidelines and skills
│   ├── AGENTS.md               # Workspace guidelines
│   └── skills/                 # Architectural skill reference guides
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment pipeline
├── public/
│   └── favicon.svg             # Custom developer tab favicon
├── src/
│   ├── components/
│   │   ├── layout/             # Navbar, Footer
│   │   ├── sections/           # HeroSection, ExperienceSection, ProjectsSection, AboutSection, SkillsSection
│   │   └── ui/                 # Badge, Button, ThemeToggle
│   ├── data/
│   │   └── profileData.ts      # Profile, Experience, Projects & Skills data
│   ├── types/
│   │   └── profile.ts          # TypeScript interfaces
│   ├── App.tsx                 # Main layout
│   ├── main.tsx                # Entry point
│   └── index.css               # Base styles & glassmorphic utility classes
├── CODE_CONVENTIONS.md         # Code conventions & git workflow standard
├── index.html                  # Entry HTML with Open Graph SEO tags
├── package.json                # Scripts & dependencies
├── tsconfig.json               # Strict TypeScript config & @/* path alias
└── vite.config.ts              # Vite build config with path alias
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sanggit999/Profilo.git
   cd Profilo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Typecheck verification**:
   ```bash
   npm run typecheck
   ```

---

## 🌐 Automated GitHub Pages Deployment

The repository includes a pre-configured GitHub Actions workflow in `.github/workflows/deploy.yml`.

### Deployment Steps:
1. Push changes to the `main` branch or open a Pull Request into `main`.
2. Ensure **GitHub Actions** is selected under **Repository Settings** ➔ **Pages** ➔ **Source**.
3. The site will automatically build and deploy to `https://sanggit999.github.io/Profilo/`.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
