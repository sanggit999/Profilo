---
name: ci-cd-github-actions
description: Best practices, workflows, reusable actions, secret management, and GitHub Pages deployment pipelines for Vite React projects.
---

# GitHub Actions CI/CD & GitHub Pages Deployment Skill

Use this skill when creating, updating, or troubleshooting GitHub Actions workflows (`.github/workflows/`), CI/CD automation, environment secrets, or GitHub Pages deployment pipelines for Vite & React applications.

## 1. GitHub Pages Deployment Workflow (`.github/workflows/deploy.yml`)

Create `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Source Code
        uses: actions/checkout@v4

      - name: Setup Node.js 20
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Build Production Bundle
        run: npm run build

      - name: Upload Pages Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 2. GitHub Pages Configuration Checklist

Follow these 3 steps in your GitHub Repository settings:

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "feat: setup github pages workflow"
   git push origin main
   ```

2. **Configure Repository Pages Source**:
   - Go to your GitHub repository: `https://github.com/<your-username>/<your-repo-name>`
   - Click **Settings** ➔ **Pages** (on the left sidebar).
   - Under **Build and deployment** ➔ **Source**, select **GitHub Actions**.

3. **Verify Deployment**:
   - Navigate to the **Actions** tab on GitHub to watch the `Deploy Portfolio to GitHub Pages` workflow run.
   - Once completed, your portfolio site will be live at: `https://<your-username>.github.io/<your-repo-name>/`

---

## 3. Best Practices & Optimization

- **Base Path Setup**: Ensure `vite.config.ts` includes `base: './'` so static assets (JS, CSS, SVGs) load with relative paths regardless of deployment domain.
- **Dependency Caching**: Use `actions/setup-node@v4` with `cache: 'npm'` to speed up build times.
- **Least Privilege Permissions**: Always restrict workflow permissions (`contents: read`, `pages: write`, `id-token: write`).
