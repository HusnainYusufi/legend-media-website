### Leaf Solutions Documentation

Welcome to the comprehensive documentation for the Leaf Solutions website. This folder contains all the guidelines, standards, and roadmaps for building an award-winning web presence.

---

## 📚 Documentation Index

### [01 — Product Brief](./01-product-brief.md)
- Project overview and goals
- Target audience and business objectives
- Brand theme and color palette
- Award-winning design philosophy
- Voice, style, and design language

### [02 — Architecture](./02-architecture.md)
- Technology stack and framework choices
- Project structure and folder organization
- Data architecture (static content)
- Animation strategy (Framer Motion + Lenis)
- Performance and SEO optimization
- Accessibility standards

### [03 — UI/UX Guidelines](./03-ui-ux-guidelines.md)
- Visual language (colors, typography, spacing)
- Layout patterns and grid system
- Iconography standards
- Interaction and motion design
- Award-winning design standards
- Accessibility compliance (WCAG AA)
- Content style and writing guidelines

### [04 — Component Standards](./04-component-standards.md)
- Component architecture principles
- File naming conventions
- Props and event handler guidelines
- Styling with Tailwind CSS
- Animation patterns with Framer Motion
- Accessibility best practices
- Code quality and performance

### [05 — Linting & Code Quality](./05-linting-and-quality.md)
- TypeScript strict mode configuration
- ESLint setup and rules
- Prettier formatting standards
- Git hooks (Husky + lint-staged)
- Code quality best practices
- CI/CD integration

### [06 — Plan of Attack](./06-plan-of-attack.md)
- Phased development roadmap (12 phases)
- Task breakdown per phase
- Time estimates and milestones
- Success metrics
- Future enhancements

### [07 — Cursor Rules](./07-cursor-rules.md)
- AI-assisted development guidelines
- Required libraries and patterns
- Common templates and examples
- What to do and what NOT to do
- Quality checklist

---

## 🚀 Quick Start

### For Developers

1. **Read the Product Brief** to understand the project goals and brand identity
2. **Review Architecture** to understand the tech stack and folder structure
3. **Study UI/UX Guidelines** to learn the design system and animation standards
4. **Follow Component Standards** when building components
5. **Set up Linting** as described in Linting & Code Quality
6. **Follow the Plan of Attack** for phased development

### For Designers

1. **Product Brief** — Brand colors, typography, design philosophy
2. **UI/UX Guidelines** — Visual language, spacing, layout patterns, animations
3. **Component Standards** — How components should look and behave

### For AI (Cursor)

- Read all documentation, especially **Cursor Rules**
- Follow brand guidelines strictly
- Use only approved libraries (Framer Motion, Lucide, Tailwind)
- Maintain accessibility and performance standards

---

## 🎨 Brand Quick Reference

**Colors:**
- Primary: `#10B981` (Leaf Green)
- Secondary: `#064E3B` (Dark Green)
- Accent: `#34D399` (Light Green)
- Text: `#0F172A` (Slate 900)

**Typography:**
- Font: Inter (400, 500, 600, 700)
- Hero: 64px / 700
- H1: 48px / 700
- Body: 16px / 400

**Spacing:**
- Scale: 4px base (4, 8, 12, 16, 24, 32, 48, 64, 96)

---

## 📋 Development Workflow

### Starting a New Component

1. Determine component type (UI, Layout, Section)
2. Create file in appropriate folder (`components/ui/`, `components/layout/`, `components/sections/`)
3. Define TypeScript interface for props
4. Follow component template from Component Standards
5. Use Tailwind for styling
6. Add Framer Motion animations if needed
7. Ensure accessibility (keyboard, screen reader, focus states)
8. Test responsiveness (mobile, tablet, desktop)

### Adding Animations

1. Define animation variants in `lib/utils/animations.ts` (if reusable)
2. Use Framer Motion with `initial`, `animate`, `whileInView`
3. Only animate `transform` and `opacity`
4. Respect `prefers-reduced-motion`
5. Test performance (60fps target)

### Before Committing

1. Run `npm run lint` — Check for linting errors
2. Run `npm run type-check` — Verify TypeScript types
3. Run `npm run format` — Auto-format with Prettier
4. Test manually on different screen sizes
5. Verify no console errors

---

## 🎯 Success Criteria

### Technical Excellence
- ✅ Lighthouse score 95+ (Performance, Accessibility, Best Practices, SEO)
- ✅ 60fps animations throughout
- ✅ TypeScript strict mode with no `any` types
- ✅ WCAG AA accessibility compliance
- ✅ Mobile-first responsive design

### Design Excellence
- ✅ Award-winning quality animations (Awwwards-worthy)
- ✅ Buttery-smooth Lenis scrolling
- ✅ Consistent brand identity
- ✅ Professional, polished aesthetic
- ✅ Compelling visual storytelling

### Business Impact
- ✅ Clear value proposition
- ✅ Strong portfolio showcase
- ✅ Multiple conversion points
- ✅ Professional credibility
- ✅ Memorable brand experience

---

## 🛠 Tech Stack Summary

**Core:**
- Next.js 14+ (App Router)
- React 18+
- TypeScript (strict mode)

**Styling:**
- Tailwind CSS 3+
- CSS Variables

**Animation:**
- Framer Motion
- Lenis (smooth scrolling)

**Icons:**
- Lucide React

**Development:**
- ESLint + Prettier
- Git + GitHub

---

## 📞 Key Contacts

**Company Information:**
- Name: Leaf Solutions
- Website: leaf.solutions
- Email: info@leafsols.com
- Phone: +1 (555) 123-4567

---

## 📝 Notes

- All documentation is living and may evolve
- Active Cursor rules are in `.cursorrules` at project root
- Refer to documentation when in doubt
- Prioritize accessibility and performance
- Keep animations subtle and purposeful

---

## 🔗 External Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Awwwards](https://www.awwwards.com/) (design inspiration)

---

**Last Updated**: October 2025  
**Version**: 1.0.0  
**Status**: Active Development

