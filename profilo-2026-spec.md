# Profile 2026 — Project Spec

## 1) Project Overview

**Project name:** Profile 2026

A modern personal portfolio website for a developer, built with **React + Vite + TypeScript**. The site focuses on clarity, fast loading, and strong personal branding.

## 2) Brand Direction

**Brand name:** **Profilo**

**Brand idea:** Clean, sharp, professional, future-ready.

**Brand personality:**
- Minimal
- Confident
- Technical
- Trustworthy
- Modern

**Tagline options:**
- Build. Ship. Grow.
- Clear profile, strong signal.
- Your work, presented with focus.

**Visual style:**
- Dark-first UI with light mode support
- Strong contrast
- Soft glow accents
- Rounded cards
- Subtle motion
- Clean spacing

**Color system:**
- Background: deep charcoal / near-black
- Surface: slate / graphite
- Primary accent: electric blue
- Secondary accent: violet or mint
- Text: white / cool gray
- Border: soft neutral gray

## 3) Typography

**Primary font:** Inter

**Optional code font:** JetBrains Mono

**Why Inter:**
- Clean and highly readable
- Works well for UI and long-form content
- Feels modern and professional

## 4) Main Sections

### 4.1 Hero
- Full name
- Role title
- Short value proposition
- CTA buttons: `Contact Me`, `View Projects`
- Social links: GitHub, LinkedIn, Email

### 4.2 About
- Short introduction
- Core strengths
- Tech focus
- Current goals

### 4.3 Company Experience
This section is for **companies you worked at**.

Include:
- Company name
- Job title
- Time range
- Main responsibilities
- Impact / achievements
- Tech stack used

Recommended UI:
- Timeline layout
- Company cards
- Metrics or highlighted results

### 4.4 Personal Projects
This section is for **personal projects**.

Include:
- Project name
- Short description
- Problem solved
- Tech stack
- GitHub link
- Live demo link
- Screenshots or preview image

Recommended UI:
- Project cards grid
- Featured project at top
- Tags for stack and category

### 4.5 Skills
Group skills by category:
- Frontend
- Backend
- Mobile
- DevOps
- Tools

### 4.6 Contact
- Email
- GitHub
- LinkedIn
- Simple contact form

## 5) Pages / Layout

Suggested single-page layout:
1. Header
2. Hero
3. About
4. Company Experience
5. Personal Projects
6. Skills
7. Contact
8. Footer

Optional extra pages:
- `/projects`
- `/about`
- `/contact`

## 6) Content Rules

### Company Experience section
Write this section like:
- What company
- What you built
- What impact it had
- What tools you used

### Personal Projects section
Write this section like:
- What problem the project solves
- Why the project exists
- What makes it interesting
- What technologies you used

## 7) Suggested Tech Stack

- React
- Vite
- TypeScript
- React Router
- Tailwind CSS
- Framer Motion
- React Icons or Lucide React
- Formspree or EmailJS for contact form

## 8) Suggested Folder Structure

```txt
src/
  assets/
  components/
    layout/
    sections/
    ui/
  data/
  hooks/
  pages/
  styles/
  utils/
  App.tsx
  main.tsx
```

## 9) Component Ideas

- `Navbar`
- `HeroSection`
- `AboutSection`
- `ExperienceSection`
- `ProjectSection`
- `SkillSection`
- `ContactSection`
- `Footer`

## 10) MVP Scope

For the first version, build only:
- Hero
- About
- Company Experience
- Personal Projects
- Skills
- Contact

## 11) Nice-to-Have Features

- Dark / light mode toggle
- Smooth scroll navigation
- Animated section reveal
- Filter projects by category
- Download CV button
- SEO metadata

## 12) Notes for Future Growth

Later versions can add:
- Blog
- Case study pages
- Project detail pages
- Multi-language support
- Admin CMS
- Analytics

---

If you want this turned into a full React starter structure, the next step is to create:
- `README.md`
- `package.json` scripts
- `src/data/profile.ts`
- `src/components` section files
- `src/styles` theme tokens
