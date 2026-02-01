### 07 — Cursor Rules (Reference)

This document explains the Cursor AI rules defined in `.cursorrules` at the project root. These rules guide AI-assisted development to ensure consistency with Leaf Solutions standards.

---

## Purpose

The Cursor rules ensure that AI-generated code:
- Follows Leaf Solutions brand guidelines
- Adheres to Next.js and React best practices
- Maintains consistent code quality
- Uses the correct libraries and patterns
- Creates accessible, performant components

---

## Key Guidelines

### Brand & Design

**Colors:**
- Always use brand tokens from the theme:
  - Primary: `#10B981` (Leaf Green)
  - Secondary: `#064E3B` (Dark Green)
  - Accent: `#34D399` (Light Green)
  - Neutral Dark: `#0F172A` (Slate 900)
  - Neutral Light: `#F8FAFC` (Slate 50)
- Access via Tailwind classes: `bg-green-600`, `text-slate-900`, etc.
- No custom colors outside the brand palette

**Typography:**
- Use Inter font family exclusively
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Follow typography scale defined in UI/UX guidelines
- Maintain proper heading hierarchy (h1 → h2 → h3)

**Spacing:**
- Use 4px scale (4, 8, 12, 16, 24, 32, 48, 64, 96)
- Access via Tailwind: `p-4`, `gap-6`, `space-y-8`, etc.
- Consistent section padding across all pages

### Technology Choices

**Required Libraries:**
- Next.js 14+ (App Router)
- React 18+
- TypeScript (strict mode)
- Tailwind CSS
- Framer Motion (animations)
- Lenis (smooth scrolling)
- Lucide React (icons)

**Do NOT Use:**
- Other UI libraries (MUI, Chakra, etc.)
- Other animation libraries (GSAP, Anime.js) — exception: Three.js for 3D if needed
- Other icon libraries (Font Awesome, React Icons) — use Lucide only
- CSS-in-JS libraries (styled-components, emotion)
- State management libraries (Redux, Zustand) — not needed for v1
- Backend frameworks — this is a static site

### Component Standards

**Structure:**
- Small, focused components (< 200 lines)
- Strongly typed with TypeScript
- Use discriminated unions for variants
- Extract repeated patterns into reusable components

**Props:**
- Keep props minimal and clear
- Use `interface` for component props
- Avoid excessive boolean flags (use `variant` instead)
- Emit clear event handlers: `onProjectClick`, `onSubmit`, etc.

**Example:**
```typescript
interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}
```

### Styling

**Tailwind CSS:**
- Use utility classes for 90% of styling
- Use `cn()` utility for conditional classes
- Extract repeated patterns into components, not arbitrary classes
- Follow mobile-first responsive approach

**Example:**
```typescript
<div className={cn(
  'rounded-lg bg-white shadow-md',
  'p-6 transition-all duration-300',
  'hover:shadow-lg hover:-translate-y-1',
  className
)} />
```

**CSS Variables:**
- Define theme tokens in `globals.css`
- Access via Tailwind or direct CSS
- Keep CSS variables for colors, spacing, complex values

### Animations

**Framer Motion:**
- Use for all component animations
- Define reusable variants in `lib/utils/animations.ts`
- Follow animation principles from UI/UX guidelines
- Always respect `prefers-reduced-motion`

**Performance:**
- Only animate `transform` and `opacity` (GPU-accelerated)
- Avoid animating `width`, `height`, `left`, `top`, `margin`
- Maintain 60fps throughout
- Test on mobile devices

**Example:**
```typescript
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
  variants={fadeInUp}
>
  {content}
</motion.div>
```

### Icons

**Lucide React:**
- Use Lucide React exclusively for all icons
- Standard size: 24px (w-6 h-6)
- Small: 16px (w-4 h-4)
- Large: 32px (w-8 h-8)
- Always provide `aria-hidden="true"` for decorative icons
- Provide `aria-label` for icon-only buttons

**Example:**
```typescript
import { Menu, X, ArrowRight } from 'lucide-react';

<button aria-label="Open menu">
  <Menu className="w-6 h-6" aria-hidden="true" />
</button>
```

### TypeScript

**Strict Mode:**
- Always use TypeScript with strict mode enabled
- Avoid `any` — use `unknown` and narrow with type guards
- Define interfaces for all data models
- Type all function parameters and returns

**Example:**
```typescript
// ❌ Bad
const data: any = fetchData();

// ✅ Good
interface Project {
  id: string;
  title: string;
  description: string;
}

const data: Project = await fetchData();
```

### Data & State

**Static Content:**
- Define all content in `lib/data/` files
- Type all data with interfaces in `lib/types/`
- No API calls or backend integration in v1
- Use direct imports, no state management needed

**Example:**
```typescript
// lib/data/projects.ts
import { type Project } from '@/lib/types/project.types';

export const projects: Project[] = [
  {
    id: 'sticha',
    title: 'Sticha App',
    description: '...',
    // ...
  },
];
```

**UI State:**
- Use `useState` for component-specific UI state only
- Keep state as close to where it's used as possible
- No global state management (Redux, Zustand) for v1

### Accessibility

**WCAG AA Compliance:**
- Color contrast: 4.5:1 for normal text, 3:1 for large text
- All interactive elements keyboard accessible
- Visible focus indicators on all focusable elements
- ARIA labels for icon-only buttons and complex widgets
- Semantic HTML elements (nav, main, footer, article, section)

**Example:**
```typescript
<button
  onClick={handleClick}
  aria-label="View project details"
  className="focus:ring-2 focus:ring-green-500 focus:outline-none"
>
  <ExternalLink className="w-5 h-5" aria-hidden="true" />
</button>
```

### Performance

**Images:**
- Always use Next.js `<Image>` component
- Never use raw `<img>` tags
- Provide proper `width`, `height`, or `fill` props
- Use `sizes` attribute for responsive images
- Optimize images before adding to `public/`

**Example:**
```typescript
import Image from 'next/image';

<Image
  src="/projects/sticha-1.jpg"
  alt="Sticha App dashboard interface"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

**Code Splitting:**
- Lazy load below-the-fold sections with `dynamic()`
- Split heavy libraries per component
- Use loading states for lazy-loaded content

**Example:**
```typescript
import dynamic from 'next/dynamic';

const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => <div>Loading projects...</div>,
});
```

### Code Quality

**Linting:**
- Follow ESLint rules defined in project
- No unused imports or variables
- Consistent import ordering (via simple-import-sort)
- No console.log in production code (use console.warn or console.error if needed)

**Formatting:**
- Prettier handles all formatting
- Single quotes for strings
- Semicolons required
- Trailing commas for multi-line
- 100 character line width

### File Organization

**Naming Conventions:**
- Components: `PascalCase.tsx` (Button.tsx, ProjectCard.tsx)
- Utilities: `camelCase.ts` (animations.ts, cn.ts)
- Data files: `camelCase.ts` (projects.ts, testimonials.ts)
- Types: `camelCase.types.ts` (project.types.ts)

**Folder Structure:**
```
components/
  ui/           # Base primitives (Button, Card, Badge)
  layout/       # Layout components (Header, Footer)
  sections/     # Page sections (Hero, About, Projects)
  providers/    # Client providers (SmoothScroll)

lib/
  data/         # Static content
  types/        # TypeScript interfaces
  utils/        # Utility functions
  constants/    # App constants
```

### Comments & Documentation

**When to Comment:**
- Complex logic or algorithms
- Non-obvious animations or effects
- Workarounds or browser-specific code
- Public API interfaces (JSDoc)

**When NOT to Comment:**
- Self-explanatory code
- Obvious functionality
- Repeating what the code already says

**Example:**
```typescript
/**
 * Animated counter that counts from 0 to target value
 * Uses Intersection Observer to trigger animation on scroll
 */
interface AnimatedCounterProps {
  /** The target number to count up to */
  target: number;
  /** Optional suffix (e.g., "+", "%") */
  suffix?: string;
}
```

### Testing

**Manual Testing:**
- Test on real devices (iOS, Android, desktop)
- Test with keyboard navigation
- Test with screen reader (NVDA, VoiceOver)
- Test in all major browsers (Chrome, Firefox, Safari, Edge)

**Automated Testing (Future):**
- Unit tests with Vitest
- Component tests with Testing Library
- E2E tests with Playwright

---

## Common Patterns

### Section Component Template

```typescript
'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';

export function SectionName() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-slate-900 mb-12"
          >
            Section Title
          </motion.h2>
          {/* Content */}
        </motion.div>
      </div>
    </section>
  );
}
```

### Card Component Template

```typescript
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface CardProps {
  title: string;
  description: string;
  className?: string;
}

export function Card({ title, description, className }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        'rounded-lg bg-white p-6 shadow-md',
        'transition-shadow duration-300 hover:shadow-lg',
        className
      )}
    >
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </motion.div>
  );
}
```

---

## What NOT to Do

**❌ Don't:**
- Use colors outside the brand palette
- Use icon libraries other than Lucide
- Use animation libraries other than Framer Motion
- Add backend code or API routes
- Use `any` type in TypeScript
- Animate non-GPU properties
- Use raw `<img>` tags
- Skip accessibility attributes
- Create overly complex components
- Mix data fetching with UI (static data only)

**✅ Do:**
- Follow brand guidelines strictly
- Use Tailwind for styling
- Keep components small and focused
- Type everything with TypeScript
- Make everything keyboard accessible
- Optimize for performance (60fps, fast load)
- Test on real devices
- Respect reduced motion preferences
- Write clean, readable code

---

## Questions to Ask

When generating code, consider:
1. Does this follow the brand color palette?
2. Is this component accessible?
3. Are animations optimized for performance?
4. Is this TypeScript code strictly typed?
5. Does this use the correct libraries (Framer Motion, Lucide, etc.)?
6. Is this responsive and mobile-friendly?
7. Is the code clean and maintainable?
8. Are there any console errors or warnings?

---

## Summary

The Cursor rules ensure consistency, quality, and adherence to Leaf Solutions standards. Always refer to these guidelines when:
- Creating new components
- Adding animations or interactions
- Styling elements
- Writing TypeScript code
- Making accessibility decisions

These rules are living documents and may evolve as the project grows.

