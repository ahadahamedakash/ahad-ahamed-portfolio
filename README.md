# Ahad Ahamed Akash — Portfolio

A high-performance, visually stunning portfolio website built with modern web technologies. This project demonstrates full-stack development capabilities, problem-solving skills through competitive programming, and attention to user experience.

[![Live Demo](https://img.shields.io/badge/Live-Demo-gold?style=for-the-badge)](https://ahadahamedakash.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## ✨ Key Features

### **User Experience**

- **Smart Preloader** — First-impression branding experience that shows only once (localStorage-based)
- **Smooth Page Transitions** — Optimized loading states with skeleton screens
- **Responsive Design** — Flawless experience across all devices (mobile, tablet, desktop)
- **Accessibility First** — Semantic HTML, ARIA labels, keyboard navigation
- **Theme Support** — Dark mode (default) with light mode capability

### **Performance Optimizations**

- **Image Optimization** — Next.js Image component with lazy loading and priority hints
- **Font Optimization** — Self-hosted Google Fonts with `display: swap` strategy
- **Code Splitting** — Automatic route-based code splitting
- **Animation Performance** — CSS transforms & Framer Motion for 60fps animations
- **Bundle Size** — Minimal dependencies, tree-shaking enabled

### **Developer Experience**

- **TypeScript** — Full type safety across the codebase
- **ESLint & Prettier** — Code quality and formatting standards
- **Git Hooks** — Pre-commit hooks for code quality
- **Component Architecture** — Reusable, composable UI components
- **Custom Design System** — "Warm Circuit" theme with CSS custom properties

---

## 🛠 Tech Stack

### **Frontend Framework**

- **Next.js 16** — React framework with App Router, Server Components, Turbopack
- **React 19** — UI library with latest features
- **TypeScript 5** — Type-safe development

### **Styling & Animation**

- **Tailwind CSS** — Utility-first CSS framework
- **Framer Motion** — Production-ready motion library for React
- **CSS Custom Properties** — Design tokens for theming
- **Google Fonts** — Playfair Display, DM Sans, JetBrains Mono

### **UI Components**

- **Lucide React** — Beautiful icon library
- **ShadCN UI** — High-quality component primitives (customized)
- **Custom Components** — Purpose-built for this design system

### **Performance & Analytics**

- **Vercel Analytics** — User analytics
- **Vercel Speed Insights** — Core Web Vitals monitoring
- **Next/Image** — Optimized image loading

### **Development Tools**

- **ESLint** — Linting
- **Prettier** — Code formatting
- **Husky** — Git hooks
- **lint-staged** — Pre-commit checks

---

## 📐 Architecture

### **Project Structure**

```
portfolio/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout with fonts & metadata
│   │   ├── page.tsx                  # Homepage
│   │   ├── loading.tsx               # Root loading state
│   │   ├── globals.css               # Global styles & CSS variables
│   │   └── projects/                 # Projects pages
│   │       ├── page.tsx              # All projects listing
│   │       └── [slug]/              # Dynamic project detail pages
│   │           ├── page.tsx          # Project detail with loader
│   │           └── loading.tsx       # Skeleton loading state
│   │
│   ├── components/
│   │   ├── layout/                   # Layout components
│   │   │   ├── Navbar.tsx            # Navigation with scroll effects
│   │   │   └── Footer.tsx            # Footer component
│   │   │
│   │   ├── sections/                 # Page sections
│   │   │   ├── Hero.tsx              # Hero with typewriter animation
│   │   │   ├── TheArc.tsx            # Origin story timeline
│   │   │   ├── ProblemSolver.tsx     # CP stats & heatmap
│   │   │   ├── Products.tsx          # Featured projects showcase
│   │   │   ├── Skills.tsx            # Technical skills grid
│   │   │   ├── Experience.tsx        # Work experience timeline
│   │   │   ├── MyApproach.tsx        # Work methodology
│   │   │   └── Contact.tsx           # Contact section
│   │   │
│   │   └── ui/                       # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── ProjectShowcaseCard.tsx
│   │       ├── Preloader.tsx         # First-visit preloader
│   │       ├── ProjectLoader.tsx     # Project page loader
│   │       ├── BackToTop.tsx         # Scroll-to-top button
│   │       └── ...
│   │
│   └── lib/
│       └── data.ts                   # Projects data & content
│
├── public/                           # Static assets
├── CLAUDE.md                         # Project documentation
└── README.md                         # This file
```

### **Design System: "Warm Circuit"**

A custom design system built around warm, handcrafted aesthetics:

```css
/* Core Colors */
--color-bg-primary: #111110 /* Main background */ --color-bg-secondary: #0e0e0d
  /* Section alternates */ --color-bg-surface: #1a1a18 /* Cards, surfaces */
  --color-gold: #b5a06a /* Primary accent */ --color-copper: #c8845a
  /* Secondary accent */ --color-sage: #6b8c6b /* Growth, success */
  /* Typography */ --font-display: Playfair Display /* Headings */
  --font-sans: DM Sans /* Body text */ --font-mono: JetBrains Mono
  /* Code, terminal */;
```

**Design Philosophy:**

- Warm, ambitious, handcrafted aesthetic
- Sharp and intentional design choices
- Every animation has meaning
- No generic blue/purple tech themes

---

## 🎯 Key Achievements Demonstrated

### **Engineering Excellence**

- ✅ **40% reduction in development time** at AB Software Solutions through reusable patterns
- ✅ **35% bundle size reduction** in production projects
- ✅ **10+ projects delivered** on time
- ✅ **400+ algorithmic problems solved** (Codeforces, LeetCode, CodeChef)

### **Technical Capabilities**

- **Frontend**: React, Next.js, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js, MongoDB, REST APIs
- **State Management**: Redux Toolkit, Tanstack Query, Context API
- **Testing**: Jest, Vitest, React Testing Library
- **Tools**: Git, GitHub Actions, Vercel, Docker

### **Soft Skills**

- **Remote Collaboration**: 1.5+ years working with international teams
- **Problem Solving**: Competitive programming background
- **Communication**: Clear documentation and technical writing
- **Adaptability**: Self-taught developer transitioning from medical field

---

## 🎨 Highlight Features

### **1. Smart Preloader System**

```typescript
// Shows only on first visit ever (localStorage-based)
// Waits for fonts to load before revealing content
// Minimum 1.5s for brand recognition, max 2.5s to prevent blocking
// Graceful fallback for private browsing mode
```

### **2. Competitive Programming Heatmap**

```typescript
// Custom SVG grid showing activity intensity
// Seeded random for consistency between server/client
// Gold color scale: 5 levels of activity
// 52 weeks × 7 days = 364 activity cells
```

### **3. Product Showcase Cards**

```typescript
// Horizontal card layout with numbering
// Quick action buttons: Live Demo, Frontend, Backend, Details
// Hover effects with gold accent transitions
// Truncated tech tags with "+N" indicator
```

### **4. Experience Timeline**

```typescript
// Animated vertical line drawing on scroll
// Timeline dots with accent colors
// Metrics highlighting (40% faster, 10+ projects)
// Tech stack tags with proper categorization
```

### **5. Back-to-Top Button**

```typescript
// Appears after scrolling past hero section (400px)
// Spring animation with rotation on appear/disappear
// Subtle bounce while actively scrolling
// Smooth scroll behavior
// Glow effect for depth
```

---

## 📊 Performance Metrics

Targeted Core Web Vitals:

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **FCP** (First Contentful Paint): < 1.8s

Optimization Strategies:

- Image lazy loading & priority hints
- Font self-hosting with preload
- Route-based code splitting
- CSS-in-JS with Tailwind (no runtime CSS-in-JS)
- Minimal JavaScript bundles

---

## 🚦 Deployment

### **Vercel (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Environment Variables**

No environment variables required for basic functionality.

### **Build Output**

- Static HTML where possible (Server Components)
- Client-side JavaScript for interactivity
- Optimized asset bundling with Turbopack

---

## 📱 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔧 Configuration

### **Fonts Setup**

Fonts are loaded via `next/font/google` for optimal performance:

```typescript
const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
```

### **Theme Configuration**

Uses `next-themes` with dark mode default:

```typescript
<ThemeProvider defaultTheme="dark" attribute="data-theme">
  {children}
</ThemeProvider>
```

---

## 📝 Development Guidelines

### **Code Style**

- Use TypeScript for all new files
- Follow existing naming conventions (PascalCase for components, camelCase for utilities)
- Write self-documenting code with clear variable names
- Add comments for complex logic only

### **Component Structure**

```typescript
// 1. Imports
// 2. Types/Interfaces
// 3. Helper functions
// 4. Main component
// 5. Sub-components (if small)
```

### **Animation Rules**

- Use `whileInView` with `viewport={{ once: true }}` for scroll reveals
- Keep animations lightweight (transforms, opacity)
- No page transitions that delay navigation
- Accessible `prefers-reduced-motion` support

---

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome! Feel free to:

- Report bugs via GitHub Issues
- Suggest new features
- Improve documentation

---

## 📧 Contact

- **Email**: [ahadahamedakash@gmail.com](mailto:ahadahamedakash@gmail.com)
- **GitHub**: [github.com/ahadahamedakash](https://github.com/ahadahamedakash)
- **LinkedIn**: [linkedin.com/in/ahadahamed](https://linkedin.com/in/ahadahamed)
- **Portfolio**: [ahadahamedakash.com](https://ahadahamedakash.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **Next.js Team** — For the amazing framework
- **Vercel** — For hosting and analytics tools
- **Framer Motion** — For the smooth animation library
- **Google Fonts** — For beautiful typography

---

**Built with passion by Ahad Ahamed Akash 💛**

_From medical student to full-stack engineer — building products, solving problems, one commit at a time._
