---
name: web-development
description: Guidelines and best practices for building responsive, accessible, and high-performance web applications and UI components.
---

# Web Development Skill

Use this skill when developing web interfaces, UI components, responsive layouts, or optimizing front-end performance.

## 1. UI Component Architecture
- **Component Separation**: Separate presentation (UI) components from smart/container components (data fetching & business logic).
- **Reusable Props**: Define explicit TypeScript interfaces for all component props.
- **Composition over Inheritance**: Build complex interfaces by combining small, single-purpose components.

## 2. Responsive & Dynamic Design
- **Mobile-First Approach**: Write base styles for mobile devices first, then use media queries for tablet/desktop breakpoints.
- **Modern Typography & Palette**: Use harmonious color palettes, modern Google fonts, and smooth micro-animations.
- **Glassmorphism & Gradients**: Apply subtle visual effects (backdrop blur, CSS gradients, hover states) to ensure a high-end feel.

## 3. Performance & SEO
- **Asset Optimization**: Compress images (WebP/AVIF format) and lazy-load non-critical assets.
- **Code Splitting**: Dynamic import heavy modules and routes to minimize initial bundle size.
- **Semantic HTML**: Use standard HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`) with proper ARIA attributes for accessibility and SEO.
