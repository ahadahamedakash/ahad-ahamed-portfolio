"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

interface SkillIconCardProps {
  name: string;
  logo: string;
  accent?: "gold" | "copper" | "sage" | "amber";
}

const accentColors = {
  gold: {
    border: "rgba(181, 160, 106, 0.25)",
    glow: "rgba(181, 160, 106, 0.4)",
  },
  copper: {
    border: "rgba(200, 132, 90, 0.25)",
    glow: "rgba(200, 132, 90, 0.4)",
  },
  sage: {
    border: "rgba(107, 140, 107, 0.25)",
    glow: "rgba(107, 140, 107, 0.4)",
  },
  amber: {
    border: "rgba(139, 105, 20, 0.25)",
    glow: "rgba(139, 105, 20, 0.4)",
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function SkillIconCard({
  name,
  logo,
  accent = "gold",
}: SkillIconCardProps) {
  const [imageError, setImageError] = useState(false);
  const colors = accentColors[accent];

  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col items-center gap-3"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {/* Icon Container */}
      <div
        className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl bg-[var(--color-bg-surface)] border transition-all duration-300"
        style={{
          borderColor: colors.border,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = colors.glow;
          e.currentTarget.style.boxShadow = `0 0 20px ${colors.glow}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = colors.border;
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {!imageError ? (
          <Image
            src={logo}
            alt={name}
            fill
            className="object-contain p-3 filter brightness-110 contrast-125"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 64px, 80px"
          />
        ) : (
          <span className="text-xs text-[var(--color-text-tertiary)] font-mono">
            {name.slice(0, 3).toUpperCase()}
          </span>
        )}
      </div>

      {/* Skill Name */}
      <span className="text-xs md:text-sm font-sans font-light text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300 text-center">
        {name}
      </span>
    </motion.div>
  );
}
