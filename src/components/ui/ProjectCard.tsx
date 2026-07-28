"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

/**
 * TypeScript interfaces for type safety and reusability
 */
export interface ProjectCardData {
  slug: string;
  title: string;
  description: string;
  image: string;
  images?: string[];
  technologies: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  githubBackendUrl?: string;
  year?: string;
  completedAt?: string;
}

export interface ProjectCardProps extends ProjectCardData {
  index?: number;
  priority?: boolean;
}

/**
 * Reusable GitHub icon component
 * Extracted for reusability across the codebase
 */
export function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 5c-.73 1.02-1.08 2.25-1 3.5C4 12 7 14 10 14c0 1 .55 2.55 1 3.5V22h4Z" />
    </svg>
  );
}

/**
 * Tech tag component for consistent styling across all project cards
 */
function TechTag({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "more";
}) {
  const styles = {
    default: {
      backgroundColor: "rgba(255,255,255,0.04)",
      border: "0.5px solid rgba(255,255,255,0.1)",
      color: "rgba(242,237,228,0.45)",
    },
    more: {
      backgroundColor: "transparent",
      border: "0.5px solid rgba(200,132,90,0.4)",
      color: "#C8845A",
    },
  };

  return (
    <span
      className="inline-block font-mono"
      style={{
        fontSize: "10px",
        padding: "3px 10px",
        borderRadius: "4px",
        ...styles[variant],
      }}
    >
      {children}
    </span>
  );
}

/**
 * Action button component for Live Demo and GitHub links
 */
function ActionButton({
  href,
  children,
  variant = "primary",
  icon,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
}) {
  const baseStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "10px 16px",
    borderRadius: "6px",
    fontSize: "13px",
    fontWeight: "500",
    fontFamily: "var(--font-sans)",
    transition: "opacity 0.2s",
    textDecoration: "none",
    cursor: "pointer",
  } as const;

  const variantStyles = {
    primary: {
      backgroundColor: "#B5A06A",
      color: "#111110",
      border: "none",
    },
    secondary: {
      backgroundColor: "transparent",
      color: "rgba(242,237,228,0.65)",
      border: "1px solid rgba(255,255,255,0.12)",
    },
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...baseStyles, ...variantStyles[variant] }}
      className="hover:opacity-80"
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = "0.8";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "1";
      }}
    >
      {icon}
      {children}
    </a>
  );
}

/**
 * Reusable ProjectCard component
 *
 * Features:
 * - Responsive design (mobile, tablet, desktop)
 * - 16:9 image with hover zoom effect
 * - Featured badge support
 * - Dynamic tech tag display based on screen size
 * - Multiple action buttons (Live Demo, GitHub, Backend)
 * - Scroll-triggered animations
 *
 * @param props - ProjectCardProps containing project data and display options
 * @returns JSX element representing the project card
 */
export default function ProjectCard({
  slug,
  title,
  description,
  image,
  technologies,
  featured,
  liveUrl,
  githubUrl,
  githubBackendUrl,
  index = 0,
  priority = false,
}: ProjectCardProps) {
  // Deduplicate technologies array to avoid duplicate key warnings
  const uniqueTechnologies = Array.from(new Set(technologies));

  // Responsive tech tag limits
  const maxTags = {
    small: 3, // < 480px
    mobile: 3, // < 768px
    tablet: 4, // < 1024px
    desktop: 5, // >= 1024px
  };

  // Calculate which tags to show (client-side only for accurate screen size)
  const getDisplayedTech = () => {
    if (typeof window === "undefined")
      return uniqueTechnologies.slice(0, maxTags.desktop);

    const width = window.innerWidth;
    let limit = maxTags.desktop;

    if (width < 480) limit = maxTags.small;
    else if (width < 768) limit = maxTags.mobile;
    else if (width < 1024) limit = maxTags.tablet;

    return uniqueTechnologies.slice(0, limit);
  };

  const displayedTech = getDisplayedTech();
  const remainingCount = uniqueTechnologies.length - displayedTech.length;
  const projectNumber = (index + 1).toString().padStart(2, "0");

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Image Section */}
      <div
        className="relative overflow-hidden"
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          borderRadius: "12px 12px 0 0",
        }}
      >
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link href={`projects/${slug}`}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              style={{ objectPosition: "top" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              priority={priority || index < 2}
            />
          </Link>
        </motion.div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-0 left-0 z-10">
            <span
              className="inline-block font-mono uppercase"
              style={{
                backgroundColor: "rgba(200,132,90,0.92)",
                color: "#111110",
                fontSize: "10px",
                fontWeight: "600",
                padding: "6px 14px",
                borderRadius: "0 0 8px 0",
              }}
            >
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Details Section */}
      <div
        style={{
          backgroundColor: "#161614",
          border: "1px solid rgba(255,255,255,0.07)",
          borderTop: "none",
          borderRadius: "0 0 12px 12px",
          padding: "28px 32px",
        }}
      >
        {/* Desktop/Tablet Layout */}
        <div
          className="hidden md:grid"
          style={{
            gridTemplateColumns: "1fr auto",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {/* Left: Content */}
          <div>
            {/* Project Number */}
            <div
              className="font-mono mb-2"
              style={{
                fontSize: "11px",
                color: "rgba(181,160,106,0.4)",
                marginBottom: "8px",
              }}
            >
              {projectNumber}
            </div>

            {/* Title */}
            <h3
              className="font-display font-bold mb-2"
              style={{
                fontSize: "22px",
                color: "#F2EDE4",
                fontWeight: "700",
                marginBottom: "10px",
                lineHeight: "1.2",
              }}
            >
              {title}
            </h3>

            {/* Description */}
            <p
              className="font-sans mb-4"
              style={{
                fontSize: "14px",
                color: "rgba(242,237,228,0.55)",
                lineHeight: "1.75",
                marginBottom: "16px",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap" style={{ gap: "6px" }}>
              {displayedTech.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
              {remainingCount > 0 && (
                <TechTag variant="more">+{remainingCount}</TechTag>
              )}
            </div>
          </div>

          {/* Right: Action Buttons */}
          <div
            className="flex flex-col"
            style={{ gap: "10px", alignItems: "flex-end" }}
          >
            {liveUrl && (
              <ActionButton
                href={liveUrl}
                variant="primary"
                icon={<ExternalLink size={14} />}
              >
                Live Demo
              </ActionButton>
            )}

            {githubUrl && (
              <ActionButton
                href={githubUrl}
                variant="secondary"
                icon={<GithubIcon />}
              >
                {githubBackendUrl ? "Frontend" : "Source Code"}
              </ActionButton>
            )}

            {githubBackendUrl && (
              <ActionButton
                href={githubBackendUrl}
                variant="secondary"
                icon={<GithubIcon />}
              >
                Backend
              </ActionButton>
            )}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col">
          {/* Content */}
          <div style={{ marginBottom: "16px" }}>
            {/* Project Number */}
            <div
              className="font-mono mb-2"
              style={{
                fontSize: "11px",
                color: "rgba(181,160,106,0.4)",
                marginBottom: "8px",
              }}
            >
              {projectNumber}
            </div>

            {/* Title */}
            <h3
              className="font-display font-bold mb-2"
              style={{
                fontSize: "22px",
                color: "#F2EDE4",
                fontWeight: "700",
                marginBottom: "10px",
                lineHeight: "1.2",
              }}
            >
              {title}
            </h3>

            {/* Description */}
            <p
              className="font-sans mb-4"
              style={{
                fontSize: "14px",
                color: "rgba(242,237,228,0.55)",
                lineHeight: "1.75",
                marginBottom: "16px",
              }}
            >
              {description}
            </p>

            {/* Tech Tags */}
            <div
              className="flex flex-wrap"
              style={{ gap: "6px", marginBottom: "16px" }}
            >
              {displayedTech.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
              {remainingCount > 0 && (
                <TechTag variant="more">+{remainingCount}</TechTag>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap" style={{ gap: "8px" }}>
            {liveUrl && (
              <ActionButton
                href={liveUrl}
                variant="primary"
                icon={<ExternalLink size={14} />}
              >
                Live Demo
              </ActionButton>
            )}

            {githubUrl && (
              <ActionButton
                href={githubUrl}
                variant="secondary"
                icon={<GithubIcon />}
              >
                {githubBackendUrl ? "Frontend" : "Source"}
              </ActionButton>
            )}

            {githubBackendUrl && (
              <ActionButton
                href={githubBackendUrl}
                variant="secondary"
                icon={<GithubIcon />}
              >
                Backend
              </ActionButton>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
