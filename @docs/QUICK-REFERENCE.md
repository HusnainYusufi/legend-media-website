### Quick Reference Guide

A cheat sheet for rapid development. For detailed information, refer to the full documentation.

---

## 🎨 Brand Colors

```css
/* Primary */
--leaf-green:     #10B981  →  bg-green-600 / text-green-600
--dark-green:     #064E3B  →  bg-green-900 / text-green-900
--light-green:    #34D399  →  bg-green-400 / text-green-400

/* Neutrals */
--slate-900:      #0F172A  →  bg-slate-900 / text-slate-900
--slate-500:      #64748B  →  text-slate-500
--slate-50:       #F8FAFC  →  bg-slate-50
--white:          #FFFFFF  →  bg-white / text-white
```

---

## 📝 Typography Scale

```typescript
// Desktop
Hero:   text-6xl  (64px) font-bold tracking-tight
H1:     text-5xl  (48px) font-bold tracking-tight
H2:     text-4xl  (36px) font-bold tracking-tight
H3:     text-3xl  (30px) font-semibold
Body:   text-base (16px) font-normal leading-relaxed

// Mobile (scale down ~40%)
Hero:   text-4xl  (40px)
H1:     text-3xl  (32px)
H2:     text-2xl  (28px)
H3:     text-xl   (24px)
Body:   text-base (16px)
```

**Font**: Inter (400, 500, 600, 700)

---

## 📏 Spacing Scale

```
4px    →  1   →  p-1, gap-1, space-y-1
8px    →  2   →  p-2, gap-2, space-y-2
12px   →  3   →  p-3, gap-3, space-y-3
16px   →  4   →  p-4, gap-4, space-y-4
24px   →  6   →  p-6, gap-6, space-y-6
32px   →  8   →  p-8, gap-8, space-y-8
48px   →  12  →  p-12, gap-12, space-y-12
64px   →  16  →  p-16, gap-16, space-y-16
96px   →  24  →  p-24, gap-24, space-y-24
```

**Section Padding**: `py-24` (desktop), `py-16` (mobile)
**Container**: `max-w-7xl mx-auto px-4`

---

## 🎭 Common Components

### Button
```typescript
<Button variant="primary" size="md">
  Click Me
</Button>
```
Variants: `primary` | `secondary` | `outline`
Sizes: `sm` | `md` | `lg`

### Card
```typescript
<Card title="Title" description="Description" />
```

### Badge
```typescript
<Badge>React</Badge>
```

### Animated Counter
```typescript
<AnimatedCounter target={500} suffix="+" />
```

---

## 🎬 Animation Patterns

### Fade In Up
```typescript
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
  variants={fadeInUp}
/>
```

### Stagger Children
```typescript
const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } }
};

<motion.div variants={staggerContainer}>
  {items.map(item => <motion.div variants={fadeInUp} />)}
</motion.div>
```

### Hover Effect
```typescript
<motion.div
  whileHover={{ scale: 1.05, y: -8 }}
  whileTap={{ scale: 0.98 }}
/>
```

**Rule**: Only animate `transform` and `opacity`

---

## 🖼 Images

### Next.js Image (Always)
```typescript
import Image from 'next/image';

// Fixed size
<Image
  src="/projects/sticha-1.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  className="rounded-lg"
/>

// Responsive (fill parent)
<div className="relative aspect-video">
  <Image
    src="/projects/ganna-1.jpg"
    alt="Descriptive alt text"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover"
  />
</div>
```

---

## 🎯 Icons (Lucide React)

```typescript
import { Menu, X, ArrowRight, ExternalLink, Check } from 'lucide-react';

// Standard (24px)
<ArrowRight className="w-6 h-6" />

// Small (16px)
<ExternalLink className="w-4 h-4" />

// Large (32px)
<Menu className="w-8 h-8" />

// With color
<Check className="w-5 h-5 text-green-600" />

// Icon-only button
<button aria-label="Open menu">
  <Menu className="w-6 h-6" aria-hidden="true" />
</button>
```

---

## ♿ Accessibility Checklist

- [ ] Color contrast 4.5:1 (text), 3:1 (large text)
- [ ] Keyboard accessible (Tab, Enter, Esc)
- [ ] Focus indicators: `focus:outline-none focus:ring-2 focus:ring-green-500`
- [ ] ARIA labels for icon buttons: `aria-label="Open menu"`
- [ ] Semantic HTML: `<nav>`, `<main>`, `<footer>`, `<section>`
- [ ] Alt text for images: `alt="Descriptive text"`
- [ ] Decorative icons: `aria-hidden="true"`

---

## 📱 Responsive Breakpoints

```typescript
sm:  640px   // Small tablets
md:  768px   // Tablets
lg:  1024px  // Laptops
xl:  1280px  // Desktops
2xl: 1536px  // Large desktops

// Usage
<div className="text-sm md:text-base lg:text-lg">
```

**Approach**: Mobile-first (base styles, then override with breakpoints)

---

## 📂 File Structure

```
components/
  ui/          Button, Card, Badge, AnimatedCounter
  layout/      Header, Footer, MobileMenu
  sections/    Hero, About, Projects, Testimonials, CTA
  providers/   SmoothScroll

lib/
  data/        projects.ts, testimonials.ts, stats.ts, company.ts
  types/       *.types.ts
  utils/       animations.ts, cn.ts, scroll.ts, format.ts
  constants/   theme.ts, routes.ts, config.ts
```

---

## 🔧 Common Utilities

### Class Name Merger (cn)
```typescript
import { cn } from '@/lib/utils/cn';

className={cn(
  'base classes',
  condition && 'conditional classes',
  className // passed from parent
)}
```

### Format Numbers
```typescript
formatNumber(1500)  // "1,500"
formatCurrency(99)  // "$99"
```

---

## 🚫 Avoid

- ❌ `any` type in TypeScript
- ❌ Raw `<img>` tags (use Next.js Image)
- ❌ Animating width, height, margin, padding
- ❌ Colors outside brand palette
- ❌ Other icon libraries (only Lucide)
- ❌ Inline styles (except dynamic values)
- ❌ console.log in production

---

## ✅ Commands

```bash
# Development
npm run dev

# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format
npm run format:check

# Type checking
npm run type-check

# All checks
npm run quality

# Build
npm run build
```

---

## 📊 Performance Targets

- Lighthouse Performance: **95+**
- Lighthouse Accessibility: **95+**
- Lighthouse Best Practices: **95+**
- Lighthouse SEO: **95+**
- Animation FPS: **60fps**
- First Contentful Paint: **< 1.5s**
- Largest Contentful Paint: **< 2.5s**
- Cumulative Layout Shift: **< 0.1**

---

## 🎯 Section Template

```typescript
'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';

export function SectionName() {
  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-slate-900 mb-12 text-center"
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

---

## 🔗 Quick Links

- **Full Docs**: `@docs/README.md`
- **Product Brief**: `@docs/01-product-brief.md`
- **Architecture**: `@docs/02-architecture.md`
- **UI/UX**: `@docs/03-ui-ux-guidelines.md`
- **Components**: `@docs/04-component-standards.md`
- **Linting**: `@docs/05-linting-and-quality.md`
- **Roadmap**: `@docs/06-plan-of-attack.md`
- **Cursor Rules**: `@docs/07-cursor-rules.md`

---

**Remember**: When in doubt, check the full documentation in `@docs/`

