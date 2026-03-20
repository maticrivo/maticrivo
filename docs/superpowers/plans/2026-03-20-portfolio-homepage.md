# Portfolio Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a minimal, cool-neutral portfolio homepage for Matias Crivolotti using Next.js and Tailwind CSS.

**Architecture:** Single-page portfolio with minimal sticky navigation, full-width sections (Hero, About, Experience, Tech Stack, Open Source, Contact). Uses Next.js App Router with Tailwind CSS for styling. Clean, modern aesthetic with Inter font and cool neutral color palette.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Inter (Google Fonts)

---

## File Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with Inter font + metadata
│   ├── page.tsx            # Main page composing all sections
│   └── globals.css         # Tailwind imports + base styles
├── components/
│   ├── Navigation.tsx      # Sticky nav with name + hamburger
│   ├── Hero.tsx            # Avatar, name, tagline, social links
│   ├── About.tsx           # Bio + languages
│   ├── Experience.tsx      # Timeline of roles
│   ├── TechStack.tsx       # Skill pills/badges
│   ├── Projects.tsx        # Open source project cards
│   └── Contact.tsx         # Social link buttons
├── tailwind.config.ts      # Custom colors + font config
├── next.config.js
├── package.json
├── tsconfig.json
└── postcss.config.js
```

---

### Task 1: Initialize Next.js Project

**Files:**
- Create: `portfolio/` (project root)

- [ ] **Step 1: Scaffold Next.js with TypeScript and Tailwind**

```bash
npx create-next-app@latest portfolio --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm
cd portfolio
```

- [ ] **Step 2: Install Inter font package**

```bash
npm install @next/font
```

- [ ] **Step 3: Verify project runs**

```bash
npm run dev
```
Expected: Server starts on http://localhost:3000

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "chore: scaffold Next.js portfolio project"
```

---

### Task 2: Configure Tailwind Theme

**Files:**
- Modify: `portfolio/tailwind.config.ts`
- Modify: `portfolio/app/globals.css`

- [ ] **Step 1: Update Tailwind config with custom colors**

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#FFFFFF",
          secondary: "#FAFAFA",
        },
        text: {
          primary: "#111111",
          secondary: "#888888",
          tertiary: "#AAAAAA",
        },
        border: "#EEEEEE",
        pill: {
          bg: "#F5F5F5",
          text: "#444444",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 2: Update globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  @apply bg-bg-primary text-text-primary font-sans;
}
```

- [ ] **Step 3: Verify Tailwind is working**

Run `npm run dev` and check that colors render correctly.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: configure Tailwind theme with cool neutral palette"
```

---

### Task 3: Create Navigation Component

**Files:**
- Create: `portfolio/components/Navigation.tsx`

- [ ] **Step 1: Create Navigation component**

```tsx
"use client";

import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-bg-primary border-b border-border px-8 md:px-20 py-5 flex justify-between items-center">
      <a href="#" className="text-base font-medium text-text-primary">
        Matias Crivolotti
      </a>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-1 cursor-pointer"
        aria-label="Menu"
      >
        <span className="w-5 h-0.5 bg-text-primary rounded-sm transition-all" />
        <span className="w-3.5 h-0.5 bg-text-primary rounded-sm transition-all" />
      </button>
    </nav>
  );
}
```

- [ ] **Step 2: Add smooth scroll links**

Update the component to include anchor links in a dropdown menu when hamburger is clicked.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add sticky navigation component"
```

---

### Task 4: Create Hero Section

**Files:**
- Create: `portfolio/components/Hero.tsx`

- [ ] **Step 1: Create Hero component**

```tsx
export default function Hero() {
  return (
    <section className="flex flex-col items-center py-20 px-8 md:px-20 gap-6">
      <div className="w-24 h-24 rounded-full bg-border" />
      <h1 className="text-3xl md:text-4xl font-medium text-text-primary">
        Matias Crivolotti
      </h1>
      <p className="text-sm text-text-secondary tracking-widest uppercase">
        Engineering Leader · 15+ Years Building Scalable Systems
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/maticrivo"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-border flex items-center justify-center hover:bg-text-tertiary transition-colors"
        >
          <span className="sr-only">GitHub</span>
          GH
        </a>
        <a
          href="https://www.linkedin.com/in/matiascrivolotti"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-border flex items-center justify-center hover:bg-text-tertiary transition-colors"
        >
          <span className="sr-only">LinkedIn</span>
          LI
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Lucide icons for GitHub and LinkedIn**

```bash
npm install lucide-react
```

Update Hero component to use proper icons instead of text.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add hero section with avatar and social links"
```

---

### Task 5: Create About Section

**Files:**
- Create: `portfolio/components/About.tsx`

- [ ] **Step 1: Create About component**

```tsx
export default function About() {
  return (
    <section className="py-15 px-8 md:px-20 border-t border-border">
      <h2 className="text-xs text-text-tertiary tracking-widest uppercase mb-4">
        About
      </h2>
      <p className="text-base text-text-secondary leading-relaxed max-w-xl">
        Engineering Manager at PayPal leading cross-functional teams building
        experimentation platforms and AI-powered sales tools for global
        operations. Based in Tel Aviv, Israel. Originally from Argentina.
      </p>
      <div className="flex flex-wrap gap-6 mt-5">
        <span className="text-sm text-text-tertiary">Spanish (Native)</span>
        <span className="text-sm text-text-tertiary">Hebrew (Native)</span>
        <span className="text-sm text-text-tertiary">English (Fluent)</span>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify spacing and typography**

Run `npm run dev` and check alignment.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add about section with bio and languages"
```

---

### Task 6: Create Experience Section

**Files:**
- Create: `portfolio/components/Experience.tsx`

- [ ] **Step 1: Create Experience component**

```tsx
const experiences = [
  { title: "Engineering Manager", company: "PayPal", date: "2024 — Present" },
  { title: "Senior Staff Engineer", company: "PayPal", date: "2021 — 2024" },
  { title: "Fullstack Engineer", company: "Zengaming", date: "2017 — 2018" },
  { title: "Frontend Engineer", company: "Everything.me", date: "2012 — 2015" },
];

export default function Experience() {
  return (
    <section className="py-15 px-8 md:px-20 border-t border-border">
      <h2 className="text-xs text-text-tertiary tracking-widest uppercase mb-6">
        Experience
      </h2>
      <div className="flex flex-col gap-5">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="flex justify-between items-start pb-5 border-b border-border last:border-0"
          >
            <div>
              <h3 className="text-base font-medium text-text-primary">
                {exp.title}
              </h3>
              <p className="text-sm text-text-secondary">{exp.company}</p>
            </div>
            <span className="text-xs text-text-tertiary">{exp.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify list rendering and borders**

Run `npm run dev` and check layout.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add experience timeline section"
```

---

### Task 7: Create Tech Stack Section

**Files:**
- Create: `portfolio/components/TechStack.tsx`

- [ ] **Step 1: Create TechStack component**

```tsx
const skills = [
  "TypeScript",
  "Go",
  "Python",
  "React",
  "GraphQL",
  "Node.js",
  "AWS",
  "GCP",
  "Docker",
  "PostgreSQL",
];

export default function TechStack() {
  return (
    <section className="py-15 px-8 md:px-20 border-t border-border">
      <h2 className="text-xs text-text-tertiary tracking-widest uppercase mb-5">
        Tech Stack
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3.5 py-1.5 bg-pill-bg text-pill-text text-xs rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add tech stack section with pill badges"
```

---

### Task 8: Create Projects Section

**Files:**
- Create: `portfolio/components/Projects.tsx`

- [ ] **Step 1: Create Projects component**

```tsx
const projects = [
  {
    title: "Magneto",
    description: "Android test automation framework for UI testing",
    link: "https://github.com/EverythingMe/magneto",
  },
  {
    title: "Firefox OS Notes",
    description: "Notes application for Firefox OS",
    link: "https://github.com/EverythingMe/ffos-notes",
  },
];

export default function Projects() {
  return (
    <section className="py-15 px-8 md:px-20 border-t border-border">
      <h2 className="text-xs text-text-tertiary tracking-widest uppercase mb-4">
        Open Source
      </h2>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 border border-border rounded-lg hover:border-text-tertiary transition-colors"
          >
            <h3 className="text-sm font-medium text-text-primary mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add open source projects section"
```

---

### Task 9: Create Contact Section

**Files:**
- Create: `portfolio/components/Contact.tsx`

- [ ] **Step 1: Create Contact component**

```tsx
export default function Contact() {
  return (
    <section className="py-15 px-8 md:px-20 border-t border-border flex flex-col items-center">
      <h2 className="text-xs text-text-tertiary tracking-widest uppercase mb-4">
        Let's Connect
      </h2>
      <div className="flex gap-4">
        <a
          href="https://github.com/maticrivo"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 border border-border rounded-md text-sm text-pill-text hover:bg-pill-bg transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/matiascrivolotti"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 border border-border rounded-md text-sm text-pill-text hover:bg-pill-bg transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add contact section with social buttons"
```

---

### Task 10: Compose Main Page

**Files:**
- Modify: `portfolio/app/page.tsx`
- Modify: `portfolio/app/layout.tsx`

- [ ] **Step 1: Update layout.tsx with metadata**

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matias Crivolotti — Engineering Leader",
  description:
    "Engineering Leader with 15+ years building scalable systems at PayPal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Compose page.tsx**

```tsx
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
```

- [ ] **Step 3: Verify full page renders**

Run `npm run dev` and check all sections appear in order.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: compose main page with all sections"
```

---

### Task 11: Add Responsive Polish

**Files:**
- Modify: All components for responsive adjustments

- [ ] **Step 1: Review mobile layout**

Run `npm run dev` and test at 375px, 768px, and 1440px widths.

- [ ] **Step 2: Adjust padding/margins for mobile**

Update `px-8 md:px-20` patterns throughout components.

- [ ] **Step 3: Test hamburger menu functionality**

Click hamburger and verify anchor links work.

- [ ] **Step 4: Final commit**

```bash
git add -A && git commit -m "polish: responsive adjustments for mobile"
```

---

### Task 12: Build and Verify

- [ ] **Step 1: Run production build**

```bash
npm run build
```
Expected: Build succeeds with no errors.

- [ ] **Step 2: Preview production build**

```bash
npm start
```
Verify site works at http://localhost:3000.

- [ ] **Step 3: Final commit**

```bash
git add -A && git commit -m "chore: production build ready"
```
