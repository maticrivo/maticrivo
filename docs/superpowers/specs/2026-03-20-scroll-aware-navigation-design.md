# Scroll-Aware Navigation Design

**Date:** 2026-03-20  
**Author:** Design collaboration session  
**Status:** Approved by user

## Overview

Implement a scroll-aware navigation bar that removes the static name from the header and conditionally displays the avatar and name only when the user scrolls past the hero section. This creates a cleaner initial navigation experience while maintaining brand presence during scroll.

## User Requirements

1. Remove "Matias Crivolotti" from the navigation bar initially
2. When user scrolls below the hero section, show avatar (32x32) and name in the navigation bar
3. Use smooth fade-in animation (opacity transition, 300ms)
4. Same behavior on both desktop and mobile
5. Use Intersection Observer API for performance

## Design Decisions

### Approach Selection

**Chosen:** Intersection Observer API

**Alternatives considered:**
- Scroll Event Listener: Less performant, requires throttling
- CSS Position Sticky: Limited control over animation and timing

**Rationale:** Intersection Observer is the most performant option, provides precise control over when the transition triggers, and is well-supported in modern browsers.

## Technical Design

### Component Structure

#### Navigation.tsx Changes

**State:**
```typescript
const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
```

**Layout structure:**
- Remove static "Matias Crivolotti" link (lines 20-22)
- Add conditional avatar + name container on the left
- Maintain existing navigation links on the right (desktop) and hamburger menu (mobile)

**Avatar + Name Container:**
```
[32x32 Avatar] [gap: 2] ["Matias Crivolotti" text]
```

- Avatar: Next.js Image component, 32x32px, rounded-full
- Source: Same Gravatar URL as Hero component
- Name: Text with base font size, medium weight, text-text-primary color
- Container: Flex row with gap-2, opacity transition

### Scroll Detection

**Intersection Observer Setup:**

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

**Behavior:**
- Threshold: 0 (triggers when hero completely exits viewport)
- When hero exits viewport: `isScrolledPastHero = true`
- When hero enters viewport: `isScrolledPastHero = false`
- Cleanup observer on component unmount

### Animation

**Fade-in transition:**
- Initial state: `opacity: 0` (hidden)
- Visible state: `opacity: 1` (when `isScrolledPastHero === true`)
- Transition: `transition-opacity duration-300` (300ms smooth fade)
- No transform or movement, pure opacity change

**Layout stability:**
- Avatar/name container always rendered in DOM
- Uses opacity instead of display/visibility to prevent layout shift
- Maintains nav bar height and spacing consistency

### Responsive Behavior

#### Desktop (md breakpoint and above):
- Layout: `[Avatar + Name] -------- [Nav Links]`
- Uses `justify-between` on nav container
- Nav links: horizontal layout with gap-6
- Avatar/name appears on left, links on right

#### Mobile (below md breakpoint):
- Layout: `[Avatar + Name] -------- [Hamburger]`
- Uses `justify-between` on nav container
- Hamburger menu on right
- Avatar/name appears on left
- Mobile dropdown unchanged (shows nav links when opened)

## Implementation Details

### File Changes

**Navigation.tsx:**
1. Add `isScrolledPastHero` state
2. Add Intersection Observer in useEffect
3. Remove static name link
4. Add conditional avatar + name container
5. Add opacity transition classes

**Hero.tsx:**
- No changes required (already has `id="hero"`)

### Dependencies

- No new dependencies required
- Uses native Intersection Observer API
- Uses existing Next.js Image component
- Uses existing Tailwind CSS utilities

## Success Criteria

1. ✅ Name removed from navigation bar initially
2. ✅ Avatar and name appear with fade-in when scrolling past hero
3. ✅ Smooth 300ms opacity transition
4. ✅ Consistent behavior on desktop and mobile
5. ✅ No layout shift during transition
6. ✅ Performant scroll detection using Intersection Observer
7. ✅ Proper cleanup of observer on unmount

## Edge Cases

**Hero section not found:**
- Observer gracefully handles missing hero element
- Returns early if `getElementById('hero')` returns null

**Rapid scrolling:**
- Intersection Observer handles rapid scroll events efficiently
- No performance degradation or jank

**Page load state:**
- Initial state: `isScrolledPastHero = false`
- Avatar/name hidden until user scrolls past hero
- No flicker or flash on initial load

## Testing Considerations

- Test scroll behavior on desktop and mobile viewports
- Verify animation smoothness
- Test rapid scrolling performance
- Verify observer cleanup on navigation
- Test with hero section at different viewport heights
