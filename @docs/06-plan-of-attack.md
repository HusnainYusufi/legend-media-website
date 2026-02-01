### 06 — Plan of Attack (Phased Roadmap)

This document outlines the development phases for the Leaf Solutions website. Each phase builds on the previous one, ensuring a solid foundation before adding complexity.

---

## Phase 0 — Foundations & Setup

**Goal**: Set up project infrastructure and design system.

**Tasks:**
- ✅ Create comprehensive documentation (@docs/)
- ✅ Define brand colors, typography, spacing system
- Install dependencies (Framer Motion, Lenis, Lucide React)
- Configure Tailwind with custom theme tokens
- Set up ESLint, Prettier, and TypeScript strict mode
- Create CSS variables in `globals.css`
- Verify Next.js configuration and project structure

**Deliverables:**
- Working Next.js app with clean setup
- Documentation complete
- Linting and formatting configured
- Design tokens defined

**Estimated Time**: 2-3 hours

---

## Phase 1 — Core UI Components

**Goal**: Build reusable UI primitives that will be used throughout the site.

**Tasks:**
- Create `Button` component with variants (primary, secondary, outline)
- Create `Badge` component for technology tags
- Create `Card` component with hover effects
- Create `AnimatedCounter` component for statistics
- Set up Framer Motion animation utilities (`lib/utils/animations.ts`)
- Create `cn()` utility for class name merging
- Test components in isolation

**Components:**
- `components/ui/Button.tsx`
- `components/ui/Badge.tsx`
- `components/ui/Card.tsx`
- `components/ui/AnimatedCounter.tsx`

**Deliverables:**
- 4 reusable UI components
- Animation utilities
- Component storybook/preview (optional)

**Estimated Time**: 3-4 hours

---

## Phase 2 — Layout & Navigation

**Goal**: Create the page structure and navigation system.

**Tasks:**
- Create `Header` component with sticky scroll behavior
- Implement smooth scroll navigation with Lenis
- Create `MobileMenu` with hamburger animation
- Create `Footer` component with contact information
- Set up smooth scroll provider
- Add scroll-triggered header background change
- Implement responsive breakpoints

**Components:**
- `components/layout/Header.tsx`
- `components/layout/MobileMenu.tsx`
- `components/layout/Footer.tsx`
- `components/providers/SmoothScroll.tsx`

**Deliverables:**
- Working navigation system
- Smooth scrolling implemented
- Responsive mobile menu
- Complete footer

**Estimated Time**: 4-5 hours

---

## Phase 3 — Hero Section

**Goal**: Create an impactful, award-winning hero section.

**Tasks:**
- Design hero layout with company name and tagline
- Implement animated tagline cycle (Think → Analyze → Create)
- Add magnetic button interactions
- Create scroll-triggered fade-in animations
- Implement parallax background effects (optional)
- Add logo with subtle animations
- Optimize hero images

**Components:**
- `components/sections/Hero.tsx`

**Deliverables:**
- Stunning hero section with smooth animations
- Responsive design
- Primary CTAs (Start Your Project, View Our Work)

**Estimated Time**: 4-5 hours

---

## Phase 4 — About & Stats Sections

**Goal**: Showcase company information and build credibility.

**Tasks:**
- Create `About` section with company description
- Create three-column layout for strategic pillars
- Design number cards (01, 02, 03) with descriptions
- Create `Stats` section with animated counters
- Implement scroll-triggered counter animations
- Add stagger effects for reveal animations
- Optimize section spacing and typography

**Components:**
- `components/sections/About.tsx`
- `components/sections/Stats.tsx`

**Data:**
- `lib/data/company.ts` (about content)
- `lib/data/stats.ts` (500+ projects, 450+ clients, etc.)

**Deliverables:**
- About section with strategic pillars
- Stats section with animated counters
- Scroll-triggered animations

**Estimated Time**: 3-4 hours

---

## Phase 5 — Projects Portfolio

**Goal**: Showcase portfolio projects with detailed case studies.

**Tasks:**
- Define project data types (`lib/types/project.types.ts`)
- Create project data for Sticha App and Ganna Healing
- Create `ProjectCard` component with image gallery
- Create `Projects` section with project grid
- Implement image optimization with Next.js Image
- Add technology badges
- Create hover effects and reveal animations
- Add external links and platform indicators
- Organize project images in `public/projects/`

**Components:**
- `components/sections/Projects.tsx`
- `components/sections/ProjectCard.tsx`

**Data:**
- `lib/data/projects.ts`
- `lib/types/project.types.ts`

**Deliverables:**
- Projects section with 2+ case studies
- Image galleries with smooth transitions
- Technology badges
- Responsive grid layout

**Estimated Time**: 5-6 hours

---

## Phase 6 — Testimonials

**Goal**: Build social proof with client testimonials.

**Tasks:**
- Define testimonial data types
- Create testimonial data (12 testimonials from content)
- Create `TestimonialCard` component with quote styling
- Create `Testimonials` section with infinite scroll carousel
- Implement smooth auto-scroll animation
- Add pause on hover functionality
- Ensure mobile responsiveness

**Components:**
- `components/sections/Testimonials.tsx`
- `components/sections/TestimonialCard.tsx`

**Data:**
- `lib/data/testimonials.ts`
- `lib/types/testimonial.types.ts`

**Deliverables:**
- Testimonials section with carousel
- Infinite scroll animation
- 12 client testimonials

**Estimated Time**: 3-4 hours

---

## Phase 7 — CTA & Contact Section

**Goal**: Drive conversions with clear call-to-action.

**Tasks:**
- Create `CTA` section with compelling copy
- Add "Book a meeting" button (external link)
- Implement contact information display
- Add subtle background animations
- Create email and phone links
- Optimize for conversion

**Components:**
- `components/sections/CTA.tsx`

**Deliverables:**
- CTA section with booking button
- Contact information
- Conversion-focused design

**Estimated Time**: 2-3 hours

---

## Phase 8 — Polish & Animations

**Goal**: Refine animations and micro-interactions for award-winning quality.

**Tasks:**
- Implement scroll progress indicator (optional)
- Add magnetic cursor effects on buttons
- Refine all scroll-triggered animations
- Add subtle parallax effects throughout
- Implement fade transitions between sections
- Add loading states and skeleton screens
- Optimize animation performance (60fps)
- Add stagger effects for lists and grids
- Test all animations on mobile devices

**Focus Areas:**
- Timing curves and easing functions
- Stagger delays for sequential reveals
- Parallax depth and speed
- Hover states and micro-interactions
- Scroll performance optimization

**Deliverables:**
- Buttery-smooth animations throughout
- 60fps performance
- Polished micro-interactions

**Estimated Time**: 4-5 hours

---

## Phase 9 — Responsive Design & Mobile Optimization

**Goal**: Ensure flawless experience across all devices.

**Tasks:**
- Test on mobile (iOS Safari, Chrome Android)
- Test on tablet (iPad, Android tablets)
- Test on desktop (Chrome, Firefox, Safari, Edge)
- Refine mobile navigation and menu
- Optimize images for mobile bandwidth
- Adjust animations for mobile performance
- Test touch interactions and gestures
- Fix any layout issues on small screens
- Optimize font sizes and spacing for mobile

**Testing:**
- iPhone SE (375px)
- iPhone 12 Pro (390px)
- iPad (768px)
- Desktop 1920px

**Deliverables:**
- Fully responsive website
- Optimized mobile experience
- Tested on all major browsers

**Estimated Time**: 3-4 hours

---

## Phase 10 — SEO & Performance Optimization

**Goal**: Optimize for search engines and performance.

**Tasks:**
- Add proper meta tags (title, description, OG tags)
- Create OpenGraph image (`public/og-image.jpg`)
- Implement structured data (JSON-LD) for Organization
- Generate sitemap.xml
- Configure robots.txt
- Optimize all images (WebP, proper sizes)
- Lazy load below-the-fold content
- Minimize JavaScript bundle size
- Add preload for critical fonts
- Test Lighthouse score (aim for 95+)

**SEO Checklist:**
- Meta title and description
- OpenGraph and Twitter Card tags
- Structured data (Organization, LocalBusiness)
- Alt text for all images
- Semantic HTML
- Proper heading hierarchy
- Internal linking structure

**Performance Checklist:**
- Lighthouse Performance: 95+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 95+
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

**Deliverables:**
- Lighthouse score 95+ across all metrics
- Proper SEO meta tags
- Optimized images and fonts
- Fast load times

**Estimated Time**: 3-4 hours

---

## Phase 11 — Accessibility Audit

**Goal**: Ensure WCAG AA compliance.

**Tasks:**
- Test keyboard navigation throughout site
- Verify color contrast ratios (4.5:1 for text)
- Add ARIA labels where needed
- Test with screen reader (NVDA, VoiceOver)
- Verify focus states on all interactive elements
- Add skip to content link
- Test with reduced motion preference
- Fix any accessibility issues found
- Run automated accessibility audit (axe, Lighthouse)

**Testing Tools:**
- NVDA (Windows)
- VoiceOver (Mac/iOS)
- Lighthouse Accessibility audit
- axe DevTools extension
- WAVE extension

**Deliverables:**
- WCAG AA compliant website
- Screen reader friendly
- Keyboard navigable
- No accessibility violations

**Estimated Time**: 2-3 hours

---

## Phase 12 — Final QA & Launch Preparation

**Goal**: Final testing and preparation for launch.

**Tasks:**
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Cross-device testing (mobile, tablet, desktop)
- Test all links and CTAs
- Verify all animations work smoothly
- Test contact information accuracy
- Proofread all content for typos
- Test loading performance on slow connections
- Verify social media preview cards
- Create deployment checklist
- Prepare for production build

**QA Checklist:**
- All sections render correctly
- All links work (internal and external)
- All images load properly
- Animations are smooth (60fps)
- Mobile menu works on all devices
- Footer contact info is correct
- No console errors or warnings
- Fast load times across all pages

**Deliverables:**
- Fully tested, production-ready website
- Deployment documentation
- Launch checklist

**Estimated Time**: 2-3 hours

---

## Total Estimated Time

**Development**: 40-50 hours
**Testing & QA**: 5-7 hours
**Total**: 45-57 hours

---

## Success Metrics

**Technical:**
- Lighthouse Performance: 95+
- Lighthouse Accessibility: 95+
- 60fps animations throughout
- < 2.5s load time on 4G

**Design:**
- Award-winning quality animations
- Professional, polished aesthetic
- Consistent brand identity
- Mobile-optimized experience

**Business:**
- Clear value proposition
- Strong portfolio showcase
- Multiple conversion points
- Professional credibility established

---

## Future Enhancements (Post-v1)

- Blog section for content marketing
- Case study detail pages
- Team member profiles
- Service pages (Web Development, App Development, etc.)
- Contact form with email integration
- Analytics integration (Google Analytics, Plausible)
- A/B testing for CTAs
- Internationalization (i18n) for multiple languages
- Dark mode toggle
- Advanced animations and 3D effects (Three.js, GSAP)

---

## Notes

- Each phase should be completed and tested before moving to the next
- Commit code regularly with clear commit messages
- Test on real devices, not just browser DevTools
- Prioritize performance and accessibility throughout
- Keep animations subtle and purposeful, not distracting
- Focus on conversion optimization (clear CTAs, social proof)

