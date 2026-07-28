"use client";

import { motion } from "motion/react";
import Link from "next/link";
import GridBackground from "@/components/ui/GridBackground";
// import { StatsRow } from "./StatsRow";

interface ProjectsHeroProps {
  projectCount: number;
}

/**
 * ProjectsHero component
 *
 * Displays the hero band for the projects page with:
 * - Back to home link
 * - Page label with dynamic project count
 * - Main title with "Built" in italic gold
 * - Subtitle description
 * - Stats row (Products, Full-stack, AI-powered, Years)
 *
 * @param projectCount - Total number of projects to display
 */
export default function ProjectsHero({ projectCount }: ProjectsHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        padding: "64px 48px 56px",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <GridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: "28px" }}
        >
          <Link
            href="/"
            className="inline-flex items-center font-mono hover:text-[var(--color-text-secondary)] transition-colors"
            style={{
              fontSize: "11px",
              color: "rgba(242,237,228,0.3)",
              gap: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                width: "16px",
                height: "1px",
                background: "rgba(242,237,228,0.3)",
              }}
            />
            Back to Home
          </Link>
        </motion.div>

        {/* Page Label */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-mono"
          style={{
            fontSize: "11px",
            color: "#B5A06A",
            letterSpacing: "0.12em",
            marginBottom: "14px",
          }}
        >
          // all_projects.length === {projectCount}
        </motion.p>

        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold"
          style={{
            fontSize: "clamp(40px, 7vw, 64px)",
            color: "#F2EDE4",
            lineHeight: "1.05",
            marginBottom: "16px",
          }}
        >
          Everything
          <br />
          <span className="italic text-[var(--color-gold)]">Built</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-sans font-light"
          style={{
            fontSize: "16px",
            color: "rgba(242,237,228,0.5)",
            maxWidth: "520px",
            lineHeight: "1.8",
            marginBottom: "40px",
          }}
        >
          From stock management platforms to AI health assistants - each project
          started with a real problem worth solving. Every line of code has a
          reason.
        </motion.p>

        {/* Stats Row */}
        {/* <StatsRow projectCount={projectCount} /> */}
      </div>
    </section>
  );
}
