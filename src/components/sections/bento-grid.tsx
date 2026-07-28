"use client";

import { motion } from "motion/react";
import { skills } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";

// ========== BENTO GRID DESIGN ==========

// Featured skills get prominence in larger cards
const featuredSkills = [
  {
    name: "React",
    category: "Frontend",
    accent: "gold" as const,
    size: "featured" as const,
    icon: skills.find((s) => s.name === "React")?.logo || "",
  },
  {
    name: "Next.js",
    category: "Frontend",
    accent: "gold" as const,
    size: "featured" as const,
    icon: skills.find((s) => s.name === "Next.js")?.logo || "",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    accent: "gold" as const,
    size: "large" as const,
    icon: skills.find((s) => s.name === "TypeScript")?.logo || "",
  },
  {
    name: "Node.js",
    category: "Backend",
    accent: "copper" as const,
    size: "large" as const,
    icon: skills.find((s) => s.name === "Node.js")?.logo || "",
  },
  {
    name: "MongoDB",
    category: "Backend",
    accent: "copper" as const,
    size: "medium" as const,
    icon: skills.find((s) => s.name === "MongoDB")?.logo || "",
  },
  {
    name: "Tailwind CSS",
    category: "UI",
    accent: "gold" as const,
    size: "medium" as const,
    icon: skills.find((s) => s.name === "Tailwind CSS")?.logo || "",
  },
  {
    name: "Redux",
    category: "State",
    accent: "gold" as const,
    size: "small" as const,
    icon: skills.find((s) => s.name === "Redux")?.logo || "",
  },
  {
    name: "Express.js",
    category: "Backend",
    accent: "copper" as const,
    size: "small" as const,
    icon: skills.find((s) => s.name === "Express.js")?.logo || "",
  },
  {
    name: "Git",
    category: "Tools",
    accent: "sage" as const,
    size: "small" as const,
    icon: skills.find((s) => s.name === "Git")?.logo || "",
  },
  {
    name: "Framer Motion",
    category: "UI",
    accent: "gold" as const,
    size: "small" as const,
    icon: skills.find((s) => s.name === "Framer Motion")?.logo || "",
  },
  {
    name: "ShadCN",
    category: "UI",
    accent: "gold" as const,
    size: "small" as const,
    icon: skills.find((s) => s.name === "ShadCN")?.logo || "",
  },
  {
    name: "Jest",
    category: "Testing",
    accent: "amber" as const,
    size: "small" as const,
    icon: skills.find((s) => s.name === "Jest")?.logo || "",
  },
];

// Grid configuration for responsive layout
const gridConfig = {
  featured: {
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
    minSize: "min-h-48",
  },
  large: { colSpan: "col-span-1", rowSpan: "row-span-2", minSize: "min-h-48" },
  medium: { colSpan: "col-span-1", rowSpan: "row-span-1", minSize: "min-h-32" },
  small: { colSpan: "col-span-1", rowSpan: "row-span-1", minSize: "min-h-32" },
};

const accentColors = {
  gold: {
    border: "rgba(181, 160, 106, 0.2)",
    glow: "rgba(181, 160, 106, 0.15)",
    text: "var(--color-gold)",
  },
  copper: {
    border: "rgba(200, 132, 90, 0.2)",
    glow: "rgba(200, 132, 90, 0.15)",
    text: "var(--color-copper)",
  },
  sage: {
    border: "rgba(107, 140, 107, 0.2)",
    glow: "rgba(107, 140, 107, 0.15)",
    text: "var(--color-sage)",
  },
  amber: {
    border: "rgba(139, 105, 20, 0.2)",
    glow: "rgba(139, 105, 20, 0.15)",
    text: "var(--color-amber-deep)",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

interface BentoCardProps {
  name: string;
  category: string;
  accent: keyof typeof accentColors;
  size: "featured" | "large" | "medium" | "small";
  icon: string;
  index: number;
}

function BentoCard({ name, category, accent, size, icon }: BentoCardProps) {
  const [imageError, setImageError] = useState(false);
  const config = gridConfig[size];
  const colors = accentColors[accent];

  const isFeatured = size === "featured" || size === "large";

  return (
    <motion.div
      variants={itemVariants}
      className={`${config.colSpan} ${config.rowSpan} ${config.minSize} relative group`}
    >
      <div
        className="h-full bg-[var(--color-bg-surface)] rounded-xl border overflow-hidden transition-all duration-300"
        style={{
          borderColor: colors.border,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = colors.glow;
          e.currentTarget.style.boxShadow = `0 0 30px ${colors.glow}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = colors.border;
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Background gradient for featured cards */}
        {isFeatured && (
          <div
            className="absolute inset-0 opacity-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at top right, ${colors.glow}, transparent 60%)`,
            }}
          />
        )}

        {/* Content */}
        <div className="relative h-full flex flex-col">
          {/* Icon */}
          <div className="flex-1 flex items-center justify-center p-6">
            <div
              className="relative transition-transform duration-300 group-hover:scale-110"
              style={{
                width: size === "featured" ? 80 : size === "large" ? 64 : 48,
                height: size === "featured" ? 80 : size === "large" ? 64 : 48,
              }}
            >
              {!imageError ? (
                <Image
                  src={icon}
                  alt={name}
                  fill
                  className="object-contain filter brightness-110 contrast-125"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-[var(--color-text-tertiary)]">
                    {name.slice(0, 2)}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Footer with name and category */}
          <div className="p-4 pt-0">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-sans font-medium text-[var(--color-text-primary)] text-sm">
                  {name}
                </h3>
                <p
                  className="font-mono text-[10px] uppercase tracking-wider mt-0.5"
                  style={{ color: colors.text }}
                >
                  {category}
                </p>
              </div>
              {/* Size indicator dot */}
              {isFeatured && (
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: colors.text }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className="bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs text-[var(--color-text-tertiary)] mb-4"
          >
            // tech_stack.bento_grid()
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl md:text-5xl"
          >
            Skills as a System
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-sm text-[var(--color-text-secondary)] max-w-2xl"
          >
            A curated collection of technologies I work with daily. Featured
            skills represent my core expertise.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[minmax(120px,auto)] gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featuredSkills.map((skill, index) => (
            <BentoCard key={skill.name} {...skill} index={index} />
          ))}
        </motion.div>

        {/* Additional skills as compact pills below */}
        <motion.div
          className="mt-12 pt-8 border-t border-[var(--color-border-subtle)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs text-[var(--color-text-tertiary)] mb-4"
          >
            // also_familiar_with
          </motion.p>
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap gap-2"
          >
            {skills
              .filter((s) => !featuredSkills.some((fs) => fs.name === s.name))
              .slice(0, 20)
              .map((skill) => (
                <motion.span
                  key={skill.name}
                  variants={itemVariants}
                  className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-[var(--color-bg-overlay)] border border-[var(--color-border-subtle)] rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-accent)] transition-all cursor-default"
                >
                  {skill.name}
                </motion.span>
              ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ========== PREVIOUS DESIGN (Original pill-based layout) ==========
const skillGroups = [
  {
    label: "Frontend Core",
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)"],
    accent: "gold",
  },
  {
    label: "State & Data",
    skills: ["Redux Toolkit", "Tanstack Query", "React Context API", "React Hook Form"],
    accent: "gold",
  },
  {
    label: "UI & Style",
    skills: ["Tailwind CSS", "ShadCN", "Material UI", "Framer Motion", "DaisyUI"],
    accent: "gold",
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "REST APIs"],
    accent: "gold",
  },
  {
    label: "Auth & Services",
    skills: ["Firebase", "Clerk", "NextAuth.js", "Axios"],
    accent: "copper",
  },
  {
    label: "Tools & Deploy",
    skills: ["Git", "GitHub", "Vercel", "Netlify", "Postman", "Claude Code"],
    accent: "copper",
  },
  {
    label: "Testing",
    skills: ["Jest", "Vitest", "React Testing Library", "ESLint"],
    accent: "copper",
  },
  {
    label: "Problem Solving",
    skills: ["Codeforces", "LeetCode", "CodeChef", "Phitron CSC"],
    accent: "sage",
    special: true,
    note: "Actively competing",
  },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const accentColors = { gold: "var(--color-gold)", copper: "var(--color-copper)", sage: "var(--color-sage)" };

export default function Skills() {
  return (
    <section className="bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <motion.div className="mb-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={itemVariants} className="font-mono text-xs text-[var(--color-text-tertiary)] mb-4">// tech_stack.map(skill =&gt; mastery)</motion.p>
          <motion.h2 variants={itemVariants} className="font-display text-5xl">Skills as a System</motion.h2>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {skillGroups.map((group, index) => (
            <motion.div key={index} variants={itemVariants} className={`relative bg-[var(--color-bg-surface)] rounded-xl p-5 border ${group.special ? "border-[var(--color-sage)]/30" : "border-[var(--color-border-subtle)]"}`}>
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl" style={{ backgroundColor: accentColors[group.accent as keyof typeof accentColors] }} />
              <h3 className="font-mono text-[11px] uppercase tracking-wider mb-4" style={{ color: accentColors[group.accent as keyof typeof accentColors] }}>{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => <span key={skill} className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-[var(--color-bg-overlay)] border border-[var(--color-border-subtle)] rounded-md text-[var(--color-text-secondary)]">{skill}</span>)}
              </div>
              {group.special && group.note && <p className="font-mono text-[10px] uppercase tracking-wider mt-3 text-[var(--color-sage)]">{group.note}</p>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
=============================================================== */
