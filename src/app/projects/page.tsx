"use client";

import { useState, useMemo } from "react";
import {
  ProjectsHero,
  // ProjectsFilter,
  ProjectsGrid,
} from "@/components/projects";
import { projects } from "@/lib/data";
import type { ProjectFilter } from "@/components/projects";
import MyApproachCard from "@/components/sections/MyApproachCard";

export default function ProjectsPage() {
  const [activeFilter, _setActiveFilter] = useState<ProjectFilter>("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      switch (activeFilter) {
        case "All":
          return true;
        case "Featured":
          return project.featured;
        case "React":
          return project.technologies.some((tech) =>
            tech.toLowerCase().includes("react"),
          );
        case "Next.js":
          return project.technologies.some((tech) =>
            tech.toLowerCase().includes("next.js"),
          );
        case "Full-Stack":
          return project.technologies.some(
            (tech) =>
              tech.toLowerCase().includes("node") ||
              tech.toLowerCase().includes("express") ||
              tech.toLowerCase().includes("mongodb"),
          );
        case "AI":
          return (
            project.technologies.some(
              (tech) =>
                tech.toLowerCase().includes("open ai") ||
                tech.toLowerCase().includes("ai"),
            ) ||
            project.title.toLowerCase().includes("ai") ||
            project.title.toLowerCase().includes("assistant")
          );
        default:
          return true;
      }
    });
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      {/* Hero Section with Stats */}
      <ProjectsHero projectCount={projects.length} />

      {/* Filter and Grid Section */}
      <section className="relative z-10 max-w-7xl mx-auto">
        {/* <ProjectsFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        /> */}
        <ProjectsGrid projects={filteredProjects} filterLabel={activeFilter} />
      </section>

      <MyApproachCard />
    </div>
  );
}
