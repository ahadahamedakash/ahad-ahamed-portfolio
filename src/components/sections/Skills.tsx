"use client";

import { motion } from "motion/react";
import { SkillsMarquee } from "../skills-marquee";

// const skillGroups = [
//   {
//     label: "Frontend Core",
//     skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)"],
//     accent: "gold",
//   },
//   {
//     label: "State & Data",
//     skills: [
//       "Redux Toolkit",
//       "Tanstack Query",
//       "React Context API",
//       "React Hook Form",
//     ],
//     accent: "gold",
//   },
//   {
//     label: "UI & Style",
//     skills: [
//       "Tailwind CSS",
//       "ShadCN",
//       "Material UI",
//       "Framer Motion",
//       "DaisyUI",
//     ],
//     accent: "gold",
//   },
//   {
//     label: "Backend",
//     skills: [
//       "Node.js",
//       "Express.js",
//       "MongoDB",
//       "Mongoose",
//       "JWT",
//       "REST APIs",
//     ],
//     accent: "gold",
//   },
//   {
//     label: "Auth & Services",
//     skills: ["Firebase", "Clerk", "NextAuth.js", "Axios"],
//     accent: "copper",
//   },
//   {
//     label: "Tools & Deploy",
//     skills: ["Git", "GitHub", "Vercel", "Netlify", "Postman", "Claude Code"],
//     accent: "copper",
//   },
//   {
//     label: "Testing",
//     skills: ["Jest", "Vitest", "React Testing Library", "ESLint"],
//     accent: "copper",
//   },
//   {
//     label: "Problem Solving",
//     skills: ["Codeforces", "LeetCode", "CodeChef", "Phitron CSC"],
//     accent: "sage",
//     special: true,
//     note: "Actively competing",
//   },
// ];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
// const accentColors = {
//   gold: "var(--color-gold)",
//   copper: "var(--color-copper)",
//   sage: "var(--color-sage)",
// };

export default function Skills() {
  return (
    <section className="bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs text-[var(--color-text-tertiary)] mb-4"
          >
            // tech_stack.map(skill =&gt; mastery)
          </motion.p>
          <motion.h2 variants={itemVariants} className="font-display text-5xl">
            Skills as a System
          </motion.h2>
        </motion.div>

        {/* <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative bg-[var(--color-bg-surface)] rounded-xl p-5 border ${group.special ? "border-[var(--color-sage)]/30" : "border-[var(--color-border-subtle)]"}`}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
                style={{
                  backgroundColor:
                    accentColors[group.accent as keyof typeof accentColors],
                }}
              />
              <h3
                className="font-mono text-[11px] uppercase tracking-wider mb-4"
                style={{
                  color:
                    accentColors[group.accent as keyof typeof accentColors],
                }}
              >
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-[var(--color-bg-overlay)] border border-[var(--color-border-subtle)] rounded-md text-[var(--color-text-secondary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {group.special && group.note && (
                <p className="font-mono text-[10px] uppercase tracking-wider mt-3 text-[var(--color-sage)]">
                  {group.note}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background gradient for better visual effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50 dark:from-primary/50 dark:via-transparent dark:to-primary/50 z-10 pointer-events-none" />

          <SkillsMarquee />

          {/* Fade edges for seamless effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-20 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
