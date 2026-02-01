### 04 — Component Standards

**Principles**
- Small, focused, and composable — each component has one clear responsibility
- Strongly typed props with TypeScript — avoid `any`, prefer discriminated unions for variants
- Presentational vs container pattern — keep data logic separate from UI
- Reusable and flexible — design for multiple contexts
- Accessible by default — WCAG AA compliance built-in

**File Naming**
- Components: `PascalCase.tsx` (`Button.tsx`, `ProjectCard.tsx`, `TestimonialCard.tsx`)
- Utilities: `camelCase.ts` (`animations.ts`, `scroll.ts`, `cn.ts`)
- Data files: `camelCase.ts` (`projects.ts`, `testimonials.ts`)
- Types: `camelCase.types.ts` (`project.types.ts`, `testimonial.types.ts`)

**Component Structure**

**Basic Template:**
```typescript
'use client';

import { type ComponentPropsWithoutRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  isLoading?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'rounded-md font-semibold transition-colors',
        {
          'bg-green-600 text-white hover:bg-green-700': variant === 'primary',
          'bg-slate-100 text-slate-900 hover:bg-slate-200': variant === 'secondary',
          'border-2 border-green-600 text-green-600 hover:bg-green-50': variant === 'outline',
        },
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </motion.button>
  );
}
```

**Props Guidelines**

**Keep Props Minimal:**
- Limit to essential configuration options
- Group related options into objects if > 5 related props
- Use discriminated unions for variant-based behavior

**Bad:**
```typescript
interface CardProps {
  hasShadow?: boolean;
  isRounded?: boolean;
  hasHoverEffect?: boolean;
  hasBorder?: boolean;
  // Too many boolean flags!
}
```

**Good:**
```typescript
interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'flat';
  // Single variant prop controls multiple styles
}
```

**Event Handlers:**
- Use clear, specific names: `onApply`, `onSubmit`, `onClose`, `onProjectClick`
- Always provide the event object or relevant data
- Prefer `on[Action]` naming convention

**Example:**
```typescript
interface ProjectCardProps {
  project: Project;
  onProjectClick?: (projectId: string) => void;
  onShareClick?: (project: Project, event: MouseEvent) => void;
}
```

**Styling**

**Tailwind CSS:**
- Use utility classes for 90% of styling
- Extract repeated patterns into components
- Use `cn()` utility for conditional classes
- Maintain consistent spacing using Tailwind's scale

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
- Use for colors, spacing, and complex values
- Access via Tailwind or direct CSS

**Example globals.css:**
```css
:root {
  --color-primary: #10B981;
  --color-secondary: #064E3B;
  --spacing-section: 6rem;
}
```

**Avoid:**
- Inline styles (except for dynamic values)
- CSS-in-JS libraries (adds bundle size)
- Overly specific class names

**Animation**

**Framer Motion:**
- Use for component animations
- Define variants for reusability
- Respect `prefers-reduced-motion`

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

**Shared Variants:**
- Define reusable variants in `lib/utils/animations.ts`
- Import and use across components
- Customize per component as needed

**State Management**

**Local State:**
- Use `useState` for component-specific UI state
- Keep state as close to where it's used as possible
- Avoid prop drilling (max 2 levels)

**Example:**
```typescript
const [isOpen, setIsOpen] = useState(false);
const [activeTab, setActiveTab] = useState('overview');
```

**No Global State Needed:**
- Static content from data files
- No complex state management (Redux, Zustand) for v1
- Use React Context if absolutely needed for theme/scroll

**Accessibility**

**Semantic HTML:**
- Use proper HTML elements (`<button>`, `<nav>`, `<main>`, `<article>`)
- Maintain heading hierarchy (h1 → h2 → h3)
- Use `<section>` for major page sections

**ARIA Attributes:**
- `aria-label` for icon-only buttons
- `aria-hidden="true"` for decorative icons
- `aria-expanded` for expandable sections
- `role` when semantic HTML isn't sufficient

**Keyboard Navigation:**
- All interactive elements must be keyboard accessible
- Implement `onKeyDown` for custom interactions
- Provide visible focus indicators

**Example:**
```typescript
<button
  aria-label="Open mobile menu"
  onClick={toggleMenu}
  onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
  className="focus:ring-2 focus:ring-green-500 focus:outline-none"
>
  <Menu aria-hidden="true" />
</button>
```

**Testing**

**Type Safety:**
- Use TypeScript strict mode
- Define interfaces for all props
- Avoid `any` (use `unknown` and narrow)

**Manual Testing:**
- Test on Chrome, Firefox, Safari
- Mobile testing on iOS and Android
- Keyboard navigation
- Screen reader testing (NVDA, VoiceOver)

**Automated Testing (Future):**
- Vitest for unit tests
- Testing Library for component tests
- Playwright for E2E (post-v1)

**Component Categories**

**UI Primitives (`components/ui/`):**
- Button, Badge, Card
- Atomic, highly reusable
- No business logic
- Fully typed and accessible

**Layout Components (`components/layout/`):**
- Header, Footer, MobileMenu
- Control page structure
- May contain navigation logic
- Responsive by default

**Section Components (`components/sections/`):**
- Hero, About, Projects, Testimonials, CTA
- Compose UI primitives
- May include animations
- Tied to specific page sections

**Best Practices**

**Do:**
- Keep components under 200 lines (extract if larger)
- Use TypeScript for all components
- Provide meaningful prop names
- Use Framer Motion for animations
- Follow mobile-first responsive design
- Test accessibility with keyboard and screen reader

**Don't:**
- Use `any` type
- Create overly generic components
- Mix data fetching with UI (v1 has static data)
- Animate non-GPU properties (width, height)
- Forget focus states
- Ignore mobile viewports

**Code Quality**

**Formatting:**
- Use Prettier for consistent formatting
- ESLint for code quality rules
- Run linters before committing

**Comments:**
- Comment complex logic or animations
- Use JSDoc for component interfaces (optional but helpful)
- Explain "why" not "what"

**Example JSDoc:**
```typescript
/**
 * Animated counter component that counts up to a target value
 * Uses Intersection Observer to trigger animation when in view
 */
interface AnimatedCounterProps {
  /** The target number to count up to */
  target: number;
  /** Optional suffix (e.g., "+", "%") */
  suffix?: string;
  /** Animation duration in milliseconds */
  duration?: number;
}
```

**Performance**

**Optimization Techniques:**
- Use `React.memo()` for expensive components
- Lazy load below-the-fold sections with `dynamic()`
- Optimize images with Next.js `<Image>`
- Minimize bundle size (tree-shake unused code)
- Use proper `key` props in lists

**Example Lazy Loading:**
```typescript
import dynamic from 'next/dynamic';

const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => <div>Loading...</div>,
});
```

**Component Checklist**

Before considering a component complete, ensure:

- [ ] TypeScript interfaces defined
- [ ] Props are minimal and clear
- [ ] Styling uses Tailwind utilities
- [ ] Animations are smooth (60fps)
- [ ] Keyboard accessible
- [ ] Screen reader friendly
- [ ] Mobile responsive
- [ ] Focus states visible
- [ ] No console errors/warnings
- [ ] Performance tested (no jank)

