# Leaf Solutions — Award-Winning Website

> Building digital solutions that transform ideas into reality.

An award-winning marketing website for **Leaf Solutions**, a digital agency specializing in scalable web and app development. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion for exceptional performance and stunning animations.

---

## 🎯 Project Overview

**Goal**: Create an Awwwards-quality website that showcases our portfolio and drives client conversions through exceptional design and smooth interactions.

**Key Features**:
- 🎨 Award-winning design with buttery-smooth Lenis scrolling
- ⚡ Lightning-fast performance (Lighthouse 95+)
- ♿ WCAG AA accessible
- 📱 Mobile-first responsive design
- 🎬 Stunning scroll-triggered animations
- 🎯 Conversion-optimized CTAs

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check for linting errors
npm run lint:fix     # Fix linting errors
npm run format       # Format code with Prettier
npm run type-check   # Check TypeScript types
npm run quality      # Run all quality checks
```

---

## 📚 Documentation

Comprehensive documentation is available in the **`@docs/`** folder:

### Core Documentation
- **[README.md](./@docs/README.md)** — Overview and quick start
- **[01-product-brief.md](./@docs/01-product-brief.md)** — Vision, goals, and brand identity
- **[02-architecture.md](./@docs/02-architecture.md)** — Technical architecture and structure
- **[03-ui-ux-guidelines.md](./@docs/03-ui-ux-guidelines.md)** — Design system and standards
- **[04-component-standards.md](./@docs/04-component-standards.md)** — Component development patterns
- **[05-linting-and-quality.md](./@docs/05-linting-and-quality.md)** — Code quality guidelines
- **[06-plan-of-attack.md](./@docs/06-plan-of-attack.md)** — Development roadmap (12 phases)
- **[07-cursor-rules.md](./@docs/07-cursor-rules.md)** — AI-assisted development rules

### Quick References
- **[QUICK-REFERENCE.md](./@docs/QUICK-REFERENCE.md)** — Cheat sheet for rapid development
- **[INDEX.md](./@docs/INDEX.md)** — Complete documentation index
- **[SUMMARY.md](./@docs/SUMMARY.md)** — High-level project overview

---

## 🎨 Brand Identity

### Colors
```css
Primary:       #10B981  (Leaf Green)
Secondary:     #064E3B  (Dark Green)
Accent:        #34D399  (Light Green)
Neutral Dark:  #0F172A  (Slate 900)
Neutral Light: #F8FAFC  (Slate 50)
```

### Typography
- **Font**: Inter (400, 500, 600, 700)
- **Hero**: 64px / Bold
- **H1**: 48px / Bold
- **Body**: 16px / Regular

---

## 🛠 Tech Stack

### Core
- **Next.js 14+** — React framework (App Router)
- **TypeScript** — Type safety (strict mode)
- **Tailwind CSS** — Utility-first styling

### Animation & Interaction
- **Framer Motion** — Component animations
- **Lenis** — Smooth scrolling

### Supporting
- **Lucide React** — Icon library
- **Next.js Image** — Optimized images
- **ESLint + Prettier** — Code quality

---

## 📂 Project Structure

```
leaf_solutions_new/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles + CSS variables
│   ├── layout.tsx          # Root layout with fonts
│   └── page.tsx            # Home page (all sections)
├── components/
│   ├── ui/                 # Button, Card, Badge, AnimatedCounter
│   ├── layout/             # Header, Footer, MobileMenu
│   ├── sections/           # Hero, About, Projects, Testimonials, CTA
│   └── providers/          # SmoothScroll provider
├── lib/
│   ├── data/               # Static content (projects, testimonials)
│   ├── types/              # TypeScript interfaces
│   ├── utils/              # Helpers (animations, cn, scroll)
│   └── constants/          # Theme, routes, config
├── public/
│   ├── logo/               # Company logos
│   └── projects/           # Project screenshots
├── @docs/                  # Comprehensive documentation
├── .cursorrules            # Cursor AI rules
├── eslint.config.mjs       # ESLint configuration
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🎬 Development Phases

| Phase | Description | Time |
|-------|-------------|------|
| **0** | Foundations & Setup | 2-3h |
| **1** | Core UI Components | 3-4h |
| **2** | Layout & Navigation | 4-5h |
| **3** | Hero Section | 4-5h |
| **4** | About & Stats | 3-4h |
| **5** | Projects Portfolio | 5-6h |
| **6** | Testimonials | 3-4h |
| **7** | CTA & Contact | 2-3h |
| **8** | Polish & Animations | 4-5h |
| **9** | Responsive Design | 3-4h |
| **10** | SEO & Performance | 3-4h |
| **11** | Accessibility Audit | 2-3h |
| **12** | Final QA | 2-3h |
| **Total** | | **45-57h** |

See **[@docs/06-plan-of-attack.md](./@docs/06-plan-of-attack.md)** for detailed breakdown.

---

## 📊 Performance Targets

### Lighthouse Scores (Target: 95+)
- ✅ Performance: 95+
- ✅ Accessibility: 95+
- ✅ Best Practices: 95+
- ✅ SEO: 95+

### Core Web Vitals
- **FCP**: < 1.5s
- **LCP**: < 2.5s
- **CLS**: < 0.1
- **FID**: < 100ms

### Animation Performance
- **60fps** throughout
- **Smooth scrolling** with Lenis
- **GPU-accelerated** animations only

---

## ♿ Accessibility

WCAG AA compliant with:
- Color contrast 4.5:1 (text), 3:1 (large text)
- Keyboard navigation support
- Screen reader friendly (NVDA, VoiceOver)
- Focus indicators on all interactive elements
- Semantic HTML structure
- Respect for `prefers-reduced-motion`

---

## 📱 Responsive Design

**Mobile-first approach** with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: 1024px+
- Large Desktop: 1280px+

---

## 🎯 Key Sections

1. **Hero** — Impactful landing with animated tagline (Think → Analyze → Create)
2. **About** — Company overview and strategic pillars
3. **Stats** — Animated counters (500+ projects, 450+ clients, 98% satisfaction)
4. **Projects** — Portfolio showcase with case studies
   - Sticha App (Marketplace platform)
   - Ganna Healing (Healthcare app)
5. **Testimonials** — Client reviews with infinite scroll carousel
6. **CTA** — Conversion-focused contact section
7. **Footer** — Complete contact information

---

## 🧩 Components

### UI Components (`components/ui/`)
- **Button** — Primary, secondary, outline variants
- **Card** — Base card with hover effects
- **Badge** — Technology tags
- **AnimatedCounter** — Number counter for stats

### Layout Components (`components/layout/`)
- **Header** — Sticky navigation with scroll effects
- **Footer** — Complete contact info
- **MobileMenu** — Hamburger menu with animations

### Section Components (`components/sections/`)
- **Hero** — Impactful landing section
- **About** — Company information
- **Stats** — Animated statistics
- **Projects** — Portfolio showcase
- **Testimonials** — Client reviews
- **CTA** — Call-to-action section

---

## 🎨 Design Principles

### Award-Winning Standards
- Buttery-smooth Lenis scrolling
- Scroll-triggered animations
- Parallax effects for depth
- Magnetic button interactions
- Counter animations
- Infinite scroll carousel

### Animation Guidelines
- Only animate `transform` and `opacity` (GPU-accelerated)
- Maintain 60fps performance
- Respect `prefers-reduced-motion`
- Use spring physics for natural feel

---

## 🔧 Code Quality

### Standards
- TypeScript strict mode (no `any`)
- ESLint + Prettier for consistency
- Component size < 200 lines
- Proper error handling
- Clean, readable code

### Before Committing
```bash
npm run type-check   # Verify TypeScript
npm run lint         # Check linting
npm run format       # Format code
```

---

## 📖 Learning Resources

### For Developers
1. Read [@docs/README.md](./@docs/README.md)
2. Review [@docs/02-architecture.md](./@docs/02-architecture.md)
3. Study [@docs/04-component-standards.md](./@docs/04-component-standards.md)
4. Use [@docs/QUICK-REFERENCE.md](./@docs/QUICK-REFERENCE.md) daily

### For Designers
1. Read [@docs/01-product-brief.md](./@docs/01-product-brief.md)
2. Review [@docs/03-ui-ux-guidelines.md](./@docs/03-ui-ux-guidelines.md)
3. Reference [@docs/QUICK-REFERENCE.md](./@docs/QUICK-REFERENCE.md)

---

## 🌟 Project Highlights

### Portfolio Projects
- **Sticha App** — Full-featured marketplace connecting tailors with customers
  - Platforms: Web, Android, iOS
  - Features: AI vision measurement, secure payments, ratings system
  
- **Ganna Healing** — Therapeutic mobile app for trauma healing
  - Platforms: Android, iOS
  - Features: Guided sessions, progress tracking, therapist directory

### Social Proof
- 500+ projects completed
- 450+ happy clients
- 8+ years of experience
- 98% client satisfaction
- 6+ countries served

---

## 📞 Contact

**Leaf Solutions**  
Website: [leaf.solutions](https://leaf.solutions)  
Email: info@leafsols.com  
Phone: +1 (555) 123-4567  

---

## 📝 Notes

- Documentation is comprehensive and living
- Follow phased approach for best results
- Prioritize accessibility and performance
- Test on real devices throughout development
- Keep code modular and maintainable

---

## 🚀 Next Steps

1. **Read Documentation** — Start with [@docs/README.md](./@docs/README.md)
2. **Set Up Environment** — Follow [@docs/05-linting-and-quality.md](./@docs/05-linting-and-quality.md)
3. **Start Development** — Follow [@docs/06-plan-of-attack.md](./@docs/06-plan-of-attack.md)
4. **Use Quick Reference** — Bookmark [@docs/QUICK-REFERENCE.md](./@docs/QUICK-REFERENCE.md)

---

## 📄 License

Copyright © 2025 Leaf Solutions. All rights reserved.

---

## 🎉 Let's Build Something Extraordinary!

This project is designed to create an award-winning website that showcases technical excellence while delivering an exceptional user experience. Follow the documentation, maintain quality standards, and let's create something amazing together! 🚀

**Version**: 1.0.0  
**Status**: Documentation Complete — Ready for Development  
**Last Updated**: October 2025
