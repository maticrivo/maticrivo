# AGENTS.md

## Project Overview

Personal portfolio site for Matias Crivolotti. Next.js 16.2 with App Router, React 19, TypeScript, Tailwind CSS v4, deployed as static export to GitHub Pages.

## Build & Dev Commands

```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Production build (static export to out/)
npm run start      # Serve production build locally
npm run lint       # Run ESLint
```

No test framework is configured. Run `npm run lint` before committing.

## Project Structure

```
app/
  layout.tsx       # Root layout, metadata, global imports
  page.tsx         # Homepage composing all sections
  globals.css      # Tailwind v4 theme (CSS variables), Inter font

components/
  Navigation.tsx   # Sticky nav, hamburger on mobile, inline links on desktop
  Hero.tsx         # Gravatar, name, tagline (server component)
  About.tsx        # Bio paragraph + languages (server component)
  Experience.tsx   # Expandable timeline (client component)
  TechStack.tsx    # Skill pills (server component)
  SoftSkills.tsx   # Categorized soft skill pills (server component)
  Projects.tsx     # Open source cards (server component)
  Contact.tsx      # Social icon buttons (server component)
```

## Code Style

### Components
- One component per file, default export: `export default function ComponentName()`
- Use `"use client"` only when component needs interactivity (state, event handlers)
- Prefer server components by default — add `"use client"` only at the boundary that needs it

### Imports
- Use `@/` path alias for project imports: `import Hero from "@/components/Hero"`
- React/Next imports first, then third-party, then local
- Named imports for icons: `import { Menu, X } from "lucide-react"`

### Styling
- Tailwind CSS classes inline — no CSS modules or styled-components
- Custom colors defined in `globals.css` via `@theme inline` block (e.g., `bg-bg-primary`, `text-text-secondary`)
- Responsive: mobile-first, use `md:` breakpoint for desktop overrides
- Spacing: `px-8 md:px-20` for section horizontal padding
- Section separator: `border-t border-border`

### Naming
- Component files: PascalCase (`Navigation.tsx`)
- Section anchors: kebab-case ids (`id="tech-stack"`)
- Data arrays: camelCase, defined above component function

### Data Patterns
- Static data (experiences, skills, links) defined as typed arrays at file top
- No external data fetching — all content is inline

### Formatting
- 2-space indent, LF line endings (see `.editorconfig`)
- Prettier not configured — follow existing patterns
- Keep lines reasonable (~100 chars), break long className strings naturally

### Images
- Use Next.js `<Image>` component from `next/image`
- Static export requires `images.unoptimized: true` in `next.config.ts`

## Tailwind Theme

Custom tokens in `globals.css`:
- Backgrounds: `bg-bg-primary` (#FFF), `bg-bg-secondary` (#FAFA)
- Text: `text-text-primary` (#111), `text-text-secondary` (#888), `text-text-tertiary` (#AAA)
- Borders: `border-border` (#EEE)
- Pills: `bg-pill-bg` (#F5F5F5), `text-pill-text` (#444)

Always use these tokens instead of hardcoded hex values.

## Deployment

Static export via `output: "export"` in `next.config.ts`. GitHub Actions deploys on push to `main`. Custom domain: `matias.cpg.family`.
