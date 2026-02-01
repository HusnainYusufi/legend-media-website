### 02 — Architecture (Frontend)

**Project Structure**

- `leaf_solutions_new/` — Next.js App (App Router, TypeScript, No Backend)
- `@docs/` — Documentation and standards

**Technology Stack**

**Core Framework:**
- Next.js 14+ (App Router) with React Server Components
- TypeScript (strict mode)
- React 18+ (Client Components for interactivity)

**Styling & Animation:**
- Tailwind CSS 3+ (utility-first styling)
- Framer Motion (component animations, scroll-triggered effects)
- Lenis (buttery-smooth scrolling)
- CSS Variables for theme tokens

**Icons & Assets:**
- Lucide React (consistent icon system)
- Next.js Image (optimized image delivery)
- SVG for logos and custom graphics

**Development Tools:**
- ESLint + Prettier (code quality)
- TypeScript (type safety)
- Git (version control)

**Navigation**

- Next.js App Router using `app/` directory
- Client-side smooth scroll navigation (Lenis)
- Sticky header with scroll-triggered animations
- Mobile hamburger menu with smooth transitions
- Anchor links for same-page navigation

**Design System**

- Central theme tokens defined in `app/globals.css` using CSS variables
- Color palette: Leaf Green, Dark Green, Slate tones
- Typography: Inter font family (400, 500, 600, 700 weights)
- Spacing: 4px scale (4, 8, 12, 16, 24, 32, 48, 64, 96)
- Border radius: Minimal (sm: 4px, md: 8px, lg: 12px)
- Shadows: Subtle elevation system
- Breakpoints: Mobile-first (sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px)

**Data Architecture**

**No Backend Required:**
- Static content defined in local data files (`lib/data/`)
- Type-safe content models using TypeScript interfaces
- No database, no API calls (v1)
- All content is static and compiled at build time

**Content Structure:**
```typescript
lib/
├── data/
│   ├── projects.ts       // Portfolio projects with images, descriptions, features
│   ├── testimonials.ts   // Client testimonials with names, roles, companies
│   ├── stats.ts          // Company statistics (animated counters)
│   └── company.ts        // About section content, contact info
├── types/
│   ├── project.types.ts  // Project data models
│   ├── testimonial.types.ts
│   └── common.types.ts
└── utils/
    ├── animations.ts     // Reusable animation variants
    ├── scroll.ts         // Lenis scroll utilities
    └── format.ts         // Text formatting helpers
```

**Animations Strategy**

**Framer Motion:**
- Page transitions with smooth fades
- Scroll-triggered reveals using `IntersectionObserver` + variants
- Stagger children animations for lists and cards
- Magnetic button effects on hover
- Parallax effects for hero sections

**Lenis Scrolling:**
- Initialize on client mount
- Smooth scroll with customizable easing
- Scroll-based animations tied to progress
- RequestAnimationFrame loop for performance

**Animation Performance:**
- GPU-accelerated properties (transform, opacity)
- Avoid animating width/height
- Use `will-change` sparingly
- Lazy load animations below the fold
- Respect `prefers-reduced-motion`

**Folder Structure**

```
leaf_solutions_new/
├── app/                          # App Router (Next.js 14+)
│   ├── globals.css               # Global styles + CSS variables
│   ├── layout.tsx                # Root layout with fonts and providers
│   ├── page.tsx                  # Home page (all sections)
│   ├── error.tsx                 # Error boundary
│   └── not-found.tsx             # 404 page
├── components/                   # Reusable UI components
│   ├── ui/                       # Base primitives
│   │   ├── Button.tsx            # Magnetic button with variants
│   │   ├── Card.tsx              # Base card component
│   │   ├── Badge.tsx             # Technology badges
│   │   └── AnimatedCounter.tsx   # Number counter for stats
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx            # Sticky navigation with scroll effects
│   │   ├── Footer.tsx            # Footer with contact info
│   │   └── MobileMenu.tsx        # Mobile hamburger menu
│   ├── sections/                 # Page sections
│   │   ├── Hero.tsx              # Hero section with animations
│   │   ├── About.tsx             # About section with pillars
│   │   ├── Stats.tsx             # Animated statistics
│   │   ├── Projects.tsx          # Portfolio showcase
│   │   ├── ProjectCard.tsx       # Individual project card
│   │   ├── Testimonials.tsx      # Testimonial carousel
│   │   ├── TestimonialCard.tsx   # Individual testimonial
│   │   └── CTA.tsx               # Call-to-action section
│   └── providers/                # Client-side providers
│       └── SmoothScroll.tsx      # Lenis scroll provider
├── lib/                          # Shared utilities and data
│   ├── data/                     # Static content
│   │   ├── projects.ts           # Portfolio projects data
│   │   ├── testimonials.ts       # Client testimonials data
│   │   ├── stats.ts              # Company statistics
│   │   └── company.ts            # Company info, about content
│   ├── types/                    # TypeScript type definitions
│   │   ├── project.types.ts      # Project models
│   │   ├── testimonial.types.ts  # Testimonial models
│   │   └── common.types.ts       # Shared types
│   ├── utils/                    # Utility functions
│   │   ├── animations.ts         # Framer Motion variants
│   │   ├── scroll.ts             # Lenis scroll utilities
│   │   ├── cn.ts                 # Tailwind class name merger
│   │   └── format.ts             # Text/number formatting
│   └── constants/                # App constants
│       ├── theme.ts              # Design tokens
│       ├── routes.ts             # Navigation routes
│       └── config.ts             # App configuration
├── public/                       # Static assets
│   ├── logo/                     # Company logos
│   │   ├── leaf-logo.png
│   │   └── leaf.png
│   ├── projects/                 # Project screenshots
│   │   ├── sticha-1.jpg
│   │   ├── sticha-2.jpg
│   │   ├── ganna-1.jpg
│   │   └── ...
│   └── og-image.jpg              # OpenGraph image for SEO
├── .env.local                    # Environment variables (if needed later)
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── eslint.config.mjs             # ESLint configuration
├── .prettierrc                   # Prettier configuration
└── .cursorrules                  # Cursor AI rules
```

**Key Conventions**

**Component Organization:**
- Presentational components in `components/ui/`
- Layout components in `components/layout/`
- Section components in `components/sections/`
- All components are Client Components unless explicitly using Server Components
- Export components as named exports

**File Naming:**
- Components: `PascalCase.tsx` (`Button.tsx`, `ProjectCard.tsx`)
- Utilities: `camelCase.ts` (`animations.ts`, `scroll.ts`)
- Data files: `camelCase.ts` (`projects.ts`, `testimonials.ts`)
- Types: `camelCase.types.ts` (`project.types.ts`)

**Data Flow:**
- Static data in `lib/data/` imported directly into components
- Type definitions ensure data integrity
- No state management needed (static content)
- Client state for UI only (menu open/closed, scroll progress)

**Styling Strategy:**
- Tailwind utility classes for 90% of styling
- CSS variables for theme tokens (colors, spacing)
- CSS Modules for complex component-specific styles if needed
- Avoid inline styles except for dynamic values

**Performance Optimization:**

**Images:**
- Always use Next.js `<Image>` component
- Provide proper `width`, `height`, or `fill` props
- Use `sizes` attribute for responsive images
- Optimize images before adding to `public/`
- Use WebP format where possible
- Configure `next.config.ts` for any external image domains

**Fonts:**
- Use Next.js font optimization (`next/font/google`)
- Subset fonts to only needed characters (if possible)
- Preload critical fonts
- Use font-display: swap for better CLS

**Code Splitting:**
- Lazy load below-the-fold sections with `dynamic()`
- Split heavy animation libraries per component
- Use `loading.tsx` for route-level loading states

**Animation Performance:**
- Use `transform` and `opacity` for animations (GPU-accelerated)
- Implement virtual scrolling for long lists
- Debounce scroll event handlers
- Use RequestAnimationFrame for scroll animations

**SEO & Metadata:**

**Every Page:**
- Proper `<title>` and `<meta description>`
- OpenGraph tags for social sharing
- Twitter Card metadata
- Canonical URLs
- Structured data (JSON-LD) for organization, services, reviews

**Technical SEO:**
- Semantic HTML (proper heading hierarchy)
- Alt text for all images
- Proper link structure (internal/external)
- XML sitemap generation
- robots.txt configuration

**Accessibility:**

**WCAG AA Compliance:**
- Color contrast ratios of 4.5:1 for text
- Focus indicators for all interactive elements
- Keyboard navigation support
- ARIA labels where needed
- Semantic HTML elements
- Skip to content link
- Responsive text sizing
- Support for screen readers

**Testing:**
- Manual keyboard navigation testing
- Screen reader testing (NVDA, VoiceOver)
- Automated testing with axe or Lighthouse

