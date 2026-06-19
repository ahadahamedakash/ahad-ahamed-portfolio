"use client";

import { motion } from "motion/react";
import ProjectShowcaseCard from "@/components/ui/ProjectShowcaseCard";
import Link from "next/link";
import { projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Projects() {
  // Filter only featured projects
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-10 py-16 md:py-24">
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
            className="font-mono text-xs text-[var(--color-gold)] mb-3"
          >
            // projects.filter(p =&gt; p.featured === true)
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="font-display text-5xl mb-3"
          >
            Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-sans text-[var(--color-text-secondary)]"
          >
            Things I&apos;ve build.
          </motion.p>
        </motion.div>

        {/* Project Cards - Vertical Column Layout */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <ProjectShowcaseCard
              key={project.slug}
              index={index}
              slug={project.slug}
              title={project.title}
              description={project.fullDescription}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              githubBackend={project.githubBackend}
            />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
          style={{ marginTop: "56px" }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border rounded-md transition-colors font-sans"
            style={{
              borderColor: "rgba(181,160,106,0.3)",
              color: "#B5A06A",
              padding: "12px 28px",
              borderRadius: "6px",
              fontSize: "14px",
            }}
          >
            <ExternalLink size={14} />
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
