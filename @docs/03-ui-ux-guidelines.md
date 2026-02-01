### 03 — UI/UX Guidelines

**Visual Language**

**Color System:**
- Primary: `#10B981` (Leaf Green) — CTAs, links, brand elements
- Secondary: `#064E3B` (Dark Green) — headings, emphasis
- Accent: `#34D399` (Light Green) — hover states, highlights
- Neutral Dark: `#0F172A` (Slate 900) — primary text, dark backgrounds
- Neutral: `#64748B` (Slate 500) — secondary text, captions
- Neutral Light: `#F8FAFC` (Slate 50) — light backgrounds, cards
- White: `#FFFFFF` — pure white for maximum contrast
- Success: `#10B981` (use primary)
- Warning: `#F59E0B` (Amber 500)
- Error: `#EF4444` (Red 500)

**Typography System:**

**Font Family:**
- Primary: Inter (Google Fonts optimized via next/font)
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Fallback: system-ui, -apple-system, sans-serif

**Scale (Desktop):**
- Hero: 4rem (64px) / 700 / tracking-tight / leading-tight
- H1: 3rem (48px) / 700 / tracking-tight / leading-tight
- H2: 2.25rem (36px) / 700 / tracking-tight / leading-tight
- H3: 1.875rem (30px) / 600 / tracking-tight / leading-snug
- H4: 1.5rem (24px) / 600 / tracking-normal / leading-snug
- Body Large: 1.125rem (18px) / 400 / tracking-normal / leading-relaxed
- Body: 1rem (16px) / 400 / tracking-normal / leading-relaxed
- Body Small: 0.875rem (14px) / 400 / tracking-normal / leading-relaxed
- Caption: 0.75rem (12px) / 500 / tracking-wide / leading-normal

**Scale (Mobile):**
- Hero: 2.5rem (40px)
- H1: 2rem (32px)
- H2: 1.75rem (28px)
- H3: 1.5rem (24px)
- H4: 1.25rem (20px)
- Body Large: 1.125rem (18px)
- Body: 1rem (16px)
- Body Small: 0.875rem (14px)
- Caption: 0.75rem (12px)

**Hierarchy Rules:**
- Use bold weights (600-700) for headings
- Maintain 1.5 line-height for body text, 1.2 for headings
- Limit to 2-3 font weights per page
- Use letter-spacing for emphasis on small caps

**Spacing System:**

**Scale (4px base):**
- 0: 0px
- 1: 4px (0.25rem)
- 2: 8px (0.5rem)
- 3: 12px (0.75rem)
- 4: 16px (1rem)
- 6: 24px (1.5rem)
- 8: 32px (2rem)
- 12: 48px (3rem)
- 16: 64px (4rem)
- 24: 96px (6rem)
- 32: 128px (8rem)

**Usage:**
- Section padding: 16-24 (desktop), 12-16 (mobile)
- Card padding: 6-8 (desktop), 4-6 (mobile)
- Component gaps: 4-6
- Element margins: 2-4
- Gutters: 4-6

**Border Radius:**
- Small: 4px (buttons, badges)
- Medium: 8px (cards, inputs)
- Large: 12px (modals, large cards)
- Full: 9999px (pills, avatars)

**Shadows:**
- Small: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- Medium: `0 4px 6px -1px rgb(0 0 0 / 0.1)`
- Large: `0 10px 15px -3px rgb(0 0 0 / 0.1)`
- Extra Large: `0 20px 25px -5px rgb(0 0 0 / 0.1)`

**Layout Patterns**

**Grid System:**
- 12-column responsive grid
- Max width: 1280px (container)
- Gutters: 24px (desktop), 16px (mobile)
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

**Section Structure:**
- Full-width sections with contained content
- Consistent vertical rhythm (padding)
- Alternating background colors for visual separation
- Hero section with large visual impact
- Subsequent sections with clear hierarchy

**Component Layout:**
- Card-based design for projects and testimonials
- Generous white space between elements
- Mobile-first responsive approach
- Sticky header for persistent navigation
- Footer with comprehensive information

**Iconography**

**Icon System:**
- Use Lucide React exclusively
- Standard size: 24px (1.5rem)
- Small: 16px (1rem)
- Large: 32px (2rem)
- Icon-only buttons: minimum 44x44px tap target
- Always pair icons with text or aria-labels

**Common Icons:**
- Menu: Menu, X (close)
- Navigation: ArrowRight, ChevronRight
- Social: Mail, Phone, Calendar
- Features: Check, Star, TrendingUp
- Projects: ExternalLink, Github, Globe

**Interaction & Motion**

**Animation Principles:**

**Timing:**
- Fast: 150ms (micro-interactions, hovers)
- Standard: 300ms (transitions, reveals)
- Slow: 600ms (page transitions, complex animations)
- Easing: Use spring physics for natural feel

**Motion Types:**
- Hover: Scale (1.02-1.05), translate, color change
- Click: Scale down (0.98), ripple effect
- Reveal: Fade + slide up (0-1 opacity, translateY 20-0)
- Parallax: Different speeds for depth (slower = further)
- Magnetic: Follow cursor within bounds
- Scroll-triggered: Tied to scroll progress (0-1)

**Framer Motion Patterns:**

**Fade In:**
```typescript
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}
```

**Stagger Children:**
```typescript
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
```

**Scroll Progress:**
```typescript
const { scrollYProgress } = useScroll();
const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
```

**Performance Rules:**
- Only animate `transform` and `opacity` (GPU-accelerated)
- Avoid animating `width`, `height`, `left`, `top`
- Use `will-change` sparingly
- Lazy load animations for below-the-fold content
- Respect `prefers-reduced-motion` media query

**Award-Winning Design Standards**

**Lenis Smooth Scrolling:**
- Initialize on mount with optimal settings
- Smooth easing (0.1-0.15 duration)
- Integrated with Framer Motion scroll
- Disable on mobile if performance issues

**Scroll-Triggered Animations:**
- Elements fade and slide in as they enter viewport
- Parallax effects for hero and large images
- Scroll progress indicators
- Section-based reveals with proper timing

**Micro-interactions:**
- Magnetic buttons (follow cursor on hover)
- Smooth color transitions on hover
- Scale effects on clickable elements
- Loading states with skeleton screens
- Success feedback with subtle animations

**Visual Excellence:**
- High-quality images (WebP, optimized)
- Subtle gradients for depth
- Consistent shadows for elevation
- Smooth transitions between sections
- Dynamic typography scaling

**Advanced Effects:**
- Counter animations for statistics
- Infinite scroll carousel for testimonials
- Image galleries with smooth transitions
- Hover effects that reveal information
- Cursor-following elements (optional)

**Accessibility**

**Color & Contrast:**
- Ensure 4.5:1 contrast ratio for normal text
- Ensure 3:1 contrast ratio for large text (18px+)
- Don't rely on color alone to convey information
- Test with color blindness simulators

**Keyboard Navigation:**
- All interactive elements must be keyboard accessible
- Visible focus indicators (outline or ring)
- Logical tab order
- Skip to content link for keyboard users
- Escape key closes modals and menus

**Screen Readers:**
- Semantic HTML elements (`<nav>`, `<main>`, `<footer>`)
- ARIA labels for icon-only buttons
- Alt text for all meaningful images
- Proper heading hierarchy (h1 → h2 → h3)
- Skip navigation landmarks

**Touch Targets:**
- Minimum 44x44px for all interactive elements
- Adequate spacing between touch targets
- Visual feedback on touch (active states)

**Motion Accessibility:**
- Respect `prefers-reduced-motion` media query
- Disable animations for users who prefer reduced motion
- Provide alternatives to motion-based interactions
- Test with motion disabled

**Content Style**

**Writing Guidelines:**
- Be concise and direct
- Use simple English (avoid jargon)
- Action-oriented CTAs ("Start Your Project", "Book a Meeting")
- Focus on benefits, not features
- Use active voice ("We build..." not "Solutions are built...")
- Professional but approachable tone

**Button Labels:**
- Clear action verbs
- Keep short (2-4 words)
- Examples: "Get Started", "View Projects", "Contact Us", "Learn More"

**Microcopy:**
- Error messages: Clear, helpful, actionable
- Empty states: Friendly, guide next steps
- Loading states: Brief, reassuring
- Success messages: Positive, celebratory

**States**

**Loading:**
- Skeleton screens for content areas
- Spinner for short waits (< 3 seconds)
- Progress indicators for longer processes
- Maintain layout (no content shift)

**Empty:**
- Friendly illustration or icon
- Clear explanation of why it's empty
- Primary action to resolve (if applicable)
- Helpful secondary content

**Error:**
- Clear, non-technical error message
- Explanation of what went wrong
- Actionable next steps
- Retry button (if applicable)
- Contact support option for critical errors

**Success:**
- Confirmation message
- Visual indicator (checkmark, green accent)
- Clear next steps
- Auto-dismiss after 3-5 seconds (if appropriate)

**Hover States:**
- Subtle scale or color change
- Cursor change (pointer for clickable)
- Smooth transition (150-300ms)
- Maintain accessibility (not essential for function)

**Active/Pressed:**
- Slight scale down (0.98)
- Darker color or subtle shadow
- Instant feedback (< 100ms)
- Return to normal on release

**Responsive Design**

**Mobile-First Approach:**
- Design for smallest screens first
- Progressive enhancement for larger screens
- Touch-friendly interactions (larger tap targets)
- Simplified navigation (hamburger menu)
- Optimized images for mobile bandwidth

**Breakpoint Strategy:**
- Mobile: < 640px (single column, stacked)
- Tablet: 640px - 1024px (2 columns, simplified)
- Desktop: 1024px+ (full layout, animations)
- Large Desktop: 1280px+ (max width, centered)

**Responsive Patterns:**
- Stack columns vertically on mobile
- Reduce padding/margins on small screens
- Hide non-essential elements on mobile
- Hamburger menu for mobile navigation
- Larger touch targets on mobile (48x48px minimum)
- Simplified animations on mobile for performance

