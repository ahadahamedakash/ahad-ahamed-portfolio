# CLAUDE.md — Ahad Ahamed Akash Portfolio

This file gives you full context about this project before you write any code.
Read it completely before making any changes.

---

## Who I am

**Ahad Ahamed Akash** — Full-Stack Developer from Narayanganj, Bangladesh.

My story is unusual and it matters:

- Started with a Medical Diploma (2015–2018) — not a CS degree
- No CS degree — built foundation through Programming Hero (Full-Stack, Level 1 & 2),
  1.5 years of professional experience, and currently deepening CS fundamentals
  at Phitron while competing in algorithmic problem solving
- Frontend Developer at AB Software Solutions (Remote, Beirut) — Nov 2023 to Feb 2025
- Actively doing competitive programming: Codeforces (110+ problems, 3 contests), LeetCode (50+ problems), CodeChef (2 contests)
- Built real products: Alishan (stock management), TechStore (e-commerce), SkinoFairy (blog), MedAI Assistant (healthcare AI)

My identity is a dual one: **Builder + Problem Solver**. The portfolio must communicate both.

---

## Design System

### Philosophy

This is NOT a generic blue/purple tech portfolio. The design is "Warm Circuit" —
warm, ambitious, handcrafted. Sharp and intentional. Fast. Every animation must
mean something, not just look cool.

### Color Tokens (use these exact values as CSS custom properties)

```css
/* Dark base (default / dark mode) */
--color-bg-primary: #111110; /* main background */
--color-bg-secondary: #0e0e0d; /* section alternates */
--color-bg-surface: #1a1a18; /* cards, surfaces */
--color-bg-overlay: rgba(255, 255, 255, 0.03); /* subtle card fills */

/* Light mode */
--color-bg-light: #f2ede4; /* warm cream base */
--color-bg-light-surface: #ebe5db; /* card surfaces in light */

/* Accent palette */
--color-gold: #b5a06a; /* primary accent — sand gold */
--color-copper: #c8845a; /* secondary — rust copper (typewriter, highlights) */
--color-amber-deep: #8b6914; /* builder energy, strong emphasis */
--color-sage: #6b8c6b; /* growth, shipped, success states */

/* Text */
--color-text-primary: #f2ede4; /* near-white warm */
--color-text-secondary: rgba(242, 237, 228, 0.55); /* muted body */
--color-text-tertiary: rgba(242, 237, 228, 0.28); /* labels, hints */
--color-text-accent: #b5a06a; /* gold for emphasis */

/* Borders */
--color-border-subtle: rgba(255, 255, 255, 0.06);
--color-border-default: rgba(255, 255, 255, 0.1);
--color-border-accent: rgba(181, 160, 106, 0.25);
```

### Typography

```
Display / Name:     Playfair Display (serif) — Google Fonts
Body / UI:          DM Sans — Google Fonts
Code / Terminal:    JetBrains Mono — Google Fonts
```

Import in `layout.tsx`:

```ts
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
```

Rules:

- Hero name: Playfair Display, 700, large (clamp 42px to 72px)
- Section headings: Playfair Display, 400 or 700
- Body text: DM Sans, 300–400 weight
- Terminal/code snippets: JetBrains Mono only — do NOT use it for general UI
- Never use font-weight 600 or 700 in DM Sans — too heavy

### Spacing & Radius

- Section padding: `px-10 py-20` (desktop), `px-6 py-14` (mobile)
- Card radius: `rounded-xl` (12px)
- Button radius: `rounded-md` (6–8px)
- Grid gap: `gap-3` for tight cards, `gap-6` for section grids

---

## Page Architecture

### 01 — Navbar

- Logo: `Ah@d` — Playfair Display, `@` in gold color
- Links: Home, Projects, Contact — uppercase, small, DM Sans
- Right side: pulsing green dot + "open to work" in JetBrains Mono
- Sticky, blur background on scroll (`backdrop-blur-sm bg-[#111110]/80`)
- No heavy borders — just a subtle bottom line `border-b border-white/5`

### 02 — Hero Section (CRITICAL — read carefully)

Height: `min-h-[75vh]` — intentionally NOT full screen. The next section
must be partially visible at the bottom to encourage scrolling.

Layout:

- Background: animated SVG grid (circuit board pattern, gold at ~7% opacity)
- Subtle radial glow orb top-right (very low opacity, ~3-4%)
- Content left-aligned, max-width constrained

Content order:

1. Eyebrow line: `——— Full-Stack Developer & Problem Solver` (gold line + JetBrains Mono text)
2. Name: `Ahad` newline `Ahamed Akash` — "Ahamed" in gold italic (Playfair)
3. Typewriter row: `>_` prefix (muted) + animated phrase in copper color
4. Bio paragraph: mention medical→dev arc + CP stats
5. Two CTA buttons: primary (gold bg, dark text) + secondary (ghost border)
6. Stats row (4 stats separated by subtle vertical lines):
   - 10+ Projects shipped
   - 160+ Problems solved
   - 1.5yr Industry xp
   - 40% Dev time saved
7. Scroll indicator: fading gradient at bottom + bouncing arrow + "scroll" label

Typewriter phrases (cycle through all):

```
"Building products that ship"
"Solving hard algorithms"
"Thinking in systems"
"Crafting clean interfaces"
"Competing on Codeforces"
```

### 03 — The Arc (Origin Story)

This section is the most memorable — do NOT skip it or simplify it.

A horizontal 3-stop timeline:

- Stop 1: 2018 — Medical Diploma — "Most developers start with code. I started with anatomy."
- Stop 2: 2023 — First Dev Role — "Taught myself React. Landed a remote job in Beirut."
- Stop 3: Now — Builder + Solver — "Shipping products. Competing. Growing every week."

Animated: each card fades + slides up on scroll entry (`whileInView` with stagger).
Left-accent border color per card: gold / copper / sage.

### 04 — Problem Solver (Competitive Programming)

This section proves intellectual depth — don't bury it.

Layout: intro text left, stats cards right (or full-width stat grid).

Stats (count-up animation on viewport entry):

- Codeforces: 400+ problems, 10+ contests
- LeetCode: 50+ problems
- CodeChef: 14+ contests
- Total: 400+ problems solved

Below stats: activity heatmap grid (like GitHub contributions).
Use `react-activity-calendar` library or build a custom SVG grid.
Color: gold/copper scale for activity intensity.

Short manifesto quote:

> "Most developers build. Fewer can reason under constraints.
> Competitive programming is how I stay sharp."

### 05 — Products (Featured Projects)

Label: "Products" NOT "Projects". This is intentional — founder language.

Each card layout:

- Project screenshot (top)
- On hover: overlay slides up revealing Problem / Solution / Stack
- Featured badge in copper color
- Tech tags in muted small pills
- Live + Code links

Project framing (use this exact language pattern):

- **Alishan**: "Small businesses run on spreadsheets. I built a role-based stock management platform — JWT-secured, real-time dashboards, 35% smaller bundle."
- **TechStore**: "Full-stack e-commerce with role-based auth, product filtering, and complete backend API."
- **MedAI Assistant**: "Modular AI healthcare assistant — symptom checker, nutrition guidance, report analysis."
- **SkinoFairy**: "Skincare blog with product reviews, tips, and community."

Card interactions:

- Subtle mouse-parallax tilt on hover (vanilla JS, max 8deg)
- Hover overlay: `AnimatePresence` from Framer Motion
- Entry: `whileInView` fade-up with stagger

### 06 — Skills (as a system)

Do NOT render 30 logos in a flat grid. Group them:

```
Frontend Core    → React, Next.js, TypeScript, JavaScript
State & Data     → Redux Toolkit, Tanstack Query, Context API
UI & Style       → Tailwind CSS, ShadCN, MUI, Framer Motion
Backend          → Node.js, Express.js, MongoDB, JWT, REST APIs
Tools            → Git, Vercel, Postman, Claude Code
Testing          → Jest, Vitest, React Testing Library
Solving          → Codeforces, LeetCode, CodeChef
```

Each group is a labeled card. Animate border-draw on entry or fade-up.

### 07 — Experience (Vertical Timeline)

Animated line draws downward on scroll.

Jobs:

1. **Frontend Developer — AB Software Solutions** (Remote, Beirut) | Nov 2023 – Feb 2025
   - Lead with metrics: "40% reduction in dev time", "10+ projects delivered"
   - Stack tags below
2. **Web Developer — Talentship Global Advisory Forum** (Remote, Noida) | Sep–Oct 2023
   - Shorter entry, learning-focused framing

### 08 — Contact

Headline: `"Got a problem worth solving? Let's talk."` — NOT "Get in touch".

Links:

- Email: ahadahamedakash@gmail.com
- GitHub: github.com/ahadahamedakash
- LinkedIn: linkedin.com/in/ahadahamed
- WhatsApp: +8801636428995

Minimal icon links. No contact form cards — just clean links.

---

## Animation Rules

### Use these (all via Framer Motion `motion` package):

- `whileInView` + `viewport={{ once: true }}` for scroll reveals
- `initial={{ opacity: 0, y: 24 }}` → `animate={{ opacity: 1, y: 0 }}`
- Stagger children: `staggerChildren: 0.1` in parent variants
- Typewriter: vanilla JS `setTimeout` loop (faster, no library needed)
- Count-up on viewport: `useInView` hook + `useMotionValue` + `useEffect`
- Card tilt: vanilla JS `mousemove` event, max ±8deg, `perspective(1000px)`
- Timeline line draw: `scaleY` from 0 to 1 on scroll

### Never use:

- Particle backgrounds (three.js, tsparticles, etc.)
- Cursor follower / custom cursor
- Blob / glassmorphism / frosted glass
- Page transitions that delay navigation
- Horizontal scroll sections
- Auto-playing video backgrounds
- `animate-spin` or `animate-ping` on anything decorative

---

## Component Structure

```
src/
  app/
    layout.tsx          ← fonts, metadata, theme provider
    page.tsx            ← home page (all sections)
    projects/
      page.tsx          ← all projects grid
      [slug]/
        page.tsx        ← individual project detail
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      Hero.tsx          ← highest priority
      TheArc.tsx        ← origin story timeline
      ProblemSolver.tsx ← CP stats + heatmap
      Products.tsx      ← project cards
      Skills.tsx        ← grouped skill system
      Experience.tsx    ← vertical timeline
      Contact.tsx
    ui/
      Button.tsx
      ProjectCard.tsx
      StatCard.tsx
      Tag.tsx
      TypewriterText.tsx
      CountUp.tsx
      GridBackground.tsx
```

---

## Theme

Use `next-themes` (already installed). Default: dark mode.

Dark mode colors: as defined above (`#111110` base).
Light mode: swap to `#F2EDE4` base, text to `#1A1A18`, keep gold/copper accents.

Add `ThemeProvider` in `layout.tsx` with `defaultTheme="dark"`.

---

## Performance Rules

- All images: `next/image` with `priority` on hero image if any
- Fonts: `next/font/google` with `display: swap`
- Animations: `once: true` on all `whileInView` — never re-trigger on scroll up
- No animation libraries beyond `motion` (already installed)
- Keep bundle lean — no extra icon libraries beyond `lucide-react`

---

## Key Metrics to Always Highlight

These real numbers earn trust — use them everywhere appropriate:

- **40%** reduction in development time (AB Software Solutions)
- **10+** projects delivered on time
- **35%** bundle size reduction (Alishan project)
- **160+** problems solved (CP total)
- **1.5+** years professional experience

---

## Tone & Voice

- Professional but human
- Confident, not arrogant
- "I shipped" not "I built"
- "Product" not "project"
- "Solve" not "implement"
- Short sentences. Active voice. No filler.

---

## What NOT to do

- Do not use default Tailwind blue anywhere
- Do not use purple — we have our own palette
- Do not use ShadCN default styles without customizing to our color tokens
- Do not add Three.js or any WebGL
- Do not create a cookie/GDPR banner
- Do not add a loading screen / splash screen
- Do not use `overflow-hidden` on `<body>` — breaks sticky nav
- Do not hardcode colors inline — always use the CSS custom properties above
