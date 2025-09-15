# PEARL Labs Website Development Instructions

## CRITICAL: Save these instructions as `temp-website-instructions.md` in the pearl-website directory first.

## PROJECT CONTEXT
You are building the official website for PEARL Labs, a startup providing third-party V&V (Verification & Validation) for autonomous aerospace systems. This website needs to convey technical competence while being accessible to government contractors and NASA/DoD officials. The website will be referenced in an NSF SBIR application next week.

## COMPANY BACKGROUND
PEARL (Physics Evaluation for AI Reliability & Logic) solves the critical gap in AI validation for aerospace. Current V&V methods cost millions and take years, yet still miss critical failures (like Ingenuity's crash). PEARL provides automated, provable AI assurance through:
1. Adversarial co-evolution testing
2. Physics-constrained scenario generation  
3. Formal verification for mathematical safety proofs

Key stat: Mars 2020's TRN system had 8x prediction uncertainty despite years of testing - this exemplifies the problem PEARL solves.

## PHASE 1: Core Website Structure (Execute Immediately)

### 1. Create the landing page (`app/page.tsx`)
Build a professional, single-page website with these sections:
- **Hero**: Company name, tagline, clear value proposition
- **Problem**: The V&V crisis (use Mars 2020 example, 70% dev time on testing)
- **Solution**: PEARL's three-pillar approach 
- **How It Works**: Simple 3-step process visualization
- **Case Study**: Mars 2020 TRN analysis (brief version)
- **Team**: Four team members with credentials
- **Contact**: Simple contact form or email

Use a dark, professional theme (aerospace/defense aesthetic). Include data/metrics throughout.

### 2. Create components directory structure:
```
components/
├── sections/
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Solution.tsx
│   ├── HowItWorks.tsx
│   ├── CaseStudy.tsx
│   ├── Team.tsx
│   └── Contact.tsx
└── ui/
    ├── Button.tsx
    └── Card.tsx
```

### 3. Update `app/globals.css`
Implement a professional color scheme:
- Primary: Deep blue/black gradient
- Accent: Aerospace blue (#0066CC)
- Text: High contrast white/gray
- Include custom CSS for smooth animations

### 4. Add metadata and SEO (`app/layout.tsx`)
- Title: "PEARL Labs - AI V&V for Aerospace | Automated Safety Validation"
- Description: Focus on aerospace, AI, V&V, formal verification keywords
- Add Open Graph tags

## PHASE 2: Content Population

### Team Information:
- **Douglas Nyberg** (Co-CEO/PI): BS Physics/CS, Quantum ML at Purdue, Led 7 researchers
- **Haleigh Nyberg** (Co-CEO): NSF GRFP Fellow, Purdue PhD candidate, Barrios/NASA connections
- **AJ Brown** (CTO): TS/SCI clearance, Microsoft/NSA experience, Security architecture
- **Yousef Alkebsi** (Engineer): Junior engineer

### Key Metrics to Highlight:
- 50% reduction in V&V timelines
- 10x ROI vs traditional testing
- 3x improvement in edge-case discovery
- $2B+ annual V&V market

### Technical Differentiators:
- Black-box testing (no source code needed)
- Physics-constrained generation
- Formal mathematical proofs
- Platform-agnostic (works with any simulator)

## PHASE 3: Polish & Deploy Prep

### 1. Create `public/` assets:
- Add a simple PEARL logo (even if just text-based for now)
- Add team member placeholder images
- Create an architecture diagram showing PEARL integration

### 2. Implement responsive design:
- Mobile-first approach
- Test on all breakpoints
- Ensure fast load times

### 3. Add `.env.local` for configuration:
```
NEXT_PUBLIC_CONTACT_EMAIL=team@pearl-labs.ai
```

### 4. Create simple API route for contact form (`app/api/contact/route.ts`)

## QUALITY REQUIREMENTS

1. **Performance**: Lighthouse score > 90
2. **Accessibility**: WCAG 2.1 AA compliant
3. **SEO**: Proper meta tags, structured data
4. **Code Quality**: TypeScript strict mode, no any types
5. **Professional**: No placeholder text, all content must be real

## STYLE GUIDELINES

- **Tone**: Professional but accessible, confident without hyperbole
- **Technical Level**: Assume audience understands aerospace/AI basics
- **Proof Points**: Use specific examples (Mars 2020, Ingenuity)
- **Visuals**: Clean, minimal, data-focused

## SPECIFIC COPY TO INCLUDE

Hero Tagline: "Provable Safety for Autonomous Aerospace Systems"

Value Prop: "PEARL transforms AI validation from years of manual testing to automated mathematical verification, reducing costs by 10x while increasing coverage 3x."

## DELIVERABLES CHECKLIST

When complete, you should have:
- [ ] Fully functional Next.js website
- [ ] All sections populated with real content
- [ ] Responsive design working
- [ ] Contact form functional
- [ ] README updated with deployment instructions
- [ ] No TypeScript errors
- [ ] No console warnings
- [ ] Ready for Vercel deployment

## COMPLETION CRITERIA

This task is complete when:
1. Website runs locally without errors
2. All content from NSF pitch is incorporated
3. Professional appearance suitable for government customers
4. Can be deployed to Vercel with one command

## FINAL STEP
Once website is complete and committed, delete this `temp-website-instructions.md` file.

---

IMPORTANT: Build this systematically, committing after each major section. Focus on getting a professional, complete website up rather than perfect code. This needs to be live for the NSF application next week.