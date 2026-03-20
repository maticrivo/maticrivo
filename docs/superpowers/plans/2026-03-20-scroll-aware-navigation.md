# Scroll-Aware Navigation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a scroll-aware navigation bar that removes the static name and conditionally displays avatar and name when user scrolls past the hero section.

**Architecture:** Use Intersection Observer API to detect when hero section exits viewport, then fade in avatar and name with opacity transition. Single file modification to Navigation.tsx with no new dependencies.

**Tech Stack:** Next.js 16.2, React 19, TypeScript, Tailwind CSS v4

---

## File Structure

**Files to modify:**
- `components/Navigation.tsx` — Main implementation: add state, Intersection Observer, conditional avatar+name rendering

**Files to reference (no changes):**
- `components/Hero.tsx` — Already has `id="hero"`, no changes needed
- `app/globals.css` — Contains Tailwind theme tokens (no changes needed)

---

### Task 1: Add Scroll Detection State and Observer

**Files:**
- Modify: `components/Navigation.tsx`

- [ ] **Step 1: Add `isScrolledPastHero` state to Navigation component**

```typescript
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
```

Add state declaration after line 16 (after `const [isOpen, setIsOpen] = useState(false);`):

```typescript
const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
```

- [ ] **Step 2: Add Intersection Observer in useEffect hook**

After the state declarations, add:

```typescript
useEffect(() => {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsScrolledPastHero(!entry.isIntersecting);
    },
    { threshold: 0 }
  );

  observer.observe(hero);
  return () => observer.disconnect();
}, []);
```

- [ ] **Step 3: Verify dev server runs without errors**

Run: `npm run dev`
Expected: Server starts successfully on http://localhost:3000

---

### Task 2: Remove Static Name and Add Conditional Avatar+Name

**Files:**
- Modify: `components/Navigation.tsx`

- [ ] **Step 1: Remove static name link from navigation**

Remove lines 20-22:
```typescript
<a href="#" className="text-base font-medium text-text-primary">
  Matias Crivolotti
</a>
```

- [ ] **Step 2: Add conditional avatar+name container**

Replace the removed name link with:

```typescript
<div className={`flex items-center gap-2 transition-opacity duration-300 ${isScrolledPastHero ? 'opacity-100' : 'opacity-0'}`}>
  <Image
    src="https://www.gravatar.com/avatar/ff03fee9a056f057938db69d3458820b?s=64&d=mp"
    alt="Matias Crivolotti"
    width={32}
    height={32}
    className="rounded-full bg-border"
  />
  <a href="#" className="text-sm font-medium text-text-primary">
    Matias Crivolotti
  </a>
</div>
```

- [ ] **Step 3: Add Image import**

Update imports at top of file:
```typescript
import Image from "next/image";
```

- [ ] **Step 4: Verify navigation renders correctly**

Run: `npm run dev`
Expected: Navigation bar appears without name initially, links centered/right-aligned

---

### Task 3: Test Scroll Behavior

**Files:**
- No file changes

- [ ] **Step 1: Open dev server and verify initial state**

Run: `npm run dev`
Open: http://localhost:3000
Expected: Navigation shows only nav links (desktop) or hamburger (mobile), no name visible

- [ ] **Step 2: Scroll past hero section**

Scroll down past the hero section (hero should leave viewport)
Expected: Avatar (32x32) and name fade in smoothly in navigation bar

- [ ] **Step 3: Scroll back to hero**

Scroll back up to show hero section in viewport
Expected: Avatar and name fade out, returning to initial state

- [ ] **Step 4: Test mobile responsive behavior**

Resize browser to mobile viewport (< 768px)
Repeat scroll test
Expected: Avatar and name appear on left, hamburger on right, dropdown menu still works

---

### Task 4: Run Lint and Final Verification

**Files:**
- No file changes

- [ ] **Step 1: Run ESLint to check for issues**

Run: `npm run lint`
Expected: No errors or warnings

- [ ] **Step 2: Verify build succeeds**

Run: `npm run build`
Expected: Build completes successfully, static export generated in `out/`

- [ ] **Step 3: Commit implementation**

```bash
git add components/Navigation.tsx
git commit -m "feat: add scroll-aware navigation with avatar fade-in

Remove static name from navigation and add conditional display
of avatar and name when user scrolls past hero section.
Uses Intersection Observer API for performance, 300ms opacity
transition for smooth fade-in animation."
```

---

## Success Criteria

- ✅ Name removed from navigation bar initially
- ✅ Avatar (32x32) and name appear with fade-in when scrolling past hero
- ✅ Smooth 300ms opacity transition
- ✅ Consistent behavior on desktop and mobile
- ✅ No layout shift during transition
- ✅ Performant scroll detection using Intersection Observer
- ✅ Proper cleanup of observer on unmount
- ✅ Lint passes with no errors
- ✅ Build succeeds

## Edge Cases Handled

- Hero section not found (graceful return)
- Rapid scrolling (Intersection Observer handles efficiently)
- Mobile navigation (same behavior as desktop)
- No new dependencies required
