"use client";

import { motion } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";
import { skills } from "@/lib/data";

// Skill universe configuration - orbital system
const orbitalRings: Array<{
  name: string;
  radius: number;
  speed: number;
  skills: typeof skills;
  size: "large" | "medium" | "small";
}> = [
  {
    name: "Core",
    radius: 120,
    speed: 60, // seconds per rotation (slower = more prominent)
    skills: skills.filter((s) => ["Frontend"].includes(s.category)).slice(0, 4),
    size: "large",
  },
  {
    name: "Frontend Stack",
    radius: 180,
    speed: 80,
    skills: skills.filter((s) => ["Frontend", "UI"].includes(s.category)).slice(4, 9),
    size: "medium",
  },
  {
    name: "Backend",
    radius: 240,
    speed: 100,
    skills: skills.filter((s) => ["Backend", "State"].includes(s.category)),
    size: "medium",
  },
  {
    name: "Tools & Testing",
    radius: 300,
    speed: 120,
    skills: skills.filter((s) => ["Tools", "Testing", "Auth"].includes(s.category)),
    size: "small",
  },
  {
    name: "Problem Solving",
    radius: 360,
    speed: 140,
    skills: skills.filter((s) => s.category === "Problem Solving"),
    size: "small",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

interface SkillNodeProps {
  skill: typeof skills[0];
  angle: number;
  radius: number;
  size: "large" | "medium" | "small";
}

function SkillNode({ skill, angle, radius, size }: SkillNodeProps) {
  const [imageError, setImageError] = useState(false);

  // Size configurations
  const sizeConfig = {
    large: { container: 56, icon: 32, fontSize: "text-sm" },
    medium: { container: 48, icon: 28, fontSize: "text-xs" },
    small: { container: 40, icon: 24, fontSize: "text-[10px]" },
  };

  const config = sizeConfig[size];

  return (
    <motion.div
      className="absolute"
      style={{
        left: "50%",
        top: "50%",
        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
      }}
      whileHover={{ scale: 1.15 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="relative flex flex-col items-center gap-2 group cursor-pointer"
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      >
        {/* Skill Icon Container */}
        <div
          className="relative rounded-full bg-[var(--color-bg-surface)] border flex items-center justify-center transition-all duration-300"
          style={{
            width: config.container,
            height: config.container,
            borderColor: "rgba(181, 160, 106, 0.2)",
          }}
        >
          {!imageError ? (
            <Image
              src={skill.logo}
              alt={skill.name}
              width={config.icon}
              height={config.icon}
              className="object-contain filter brightness-110 contrast-125"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-xs text-[var(--color-text-tertiary)] font-mono font-bold">
              {skill.name.slice(0, 2).toUpperCase()}
            </span>
          )}

          {/* Glow effect on hover */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle, rgba(181, 160, 106, 0.3) 0%, transparent 70%)`,
            }}
          />
        </div>

        {/* Skill Name */}
        <span
          className={`${config.fontSize} font-sans font-light text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] whitespace-nowrap transition-colors duration-300`}
        >
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}

interface OrbitRingProps {
  radius: number;
  speed: number;
  isPaused: boolean;
  children: React.ReactNode;
}

function OrbitRing({ radius, speed, isPaused, children }: OrbitRingProps) {
  return (
    <motion.div
      className="absolute border border-dashed rounded-full"
      style={{
        width: radius * 2,
        height: radius * 2,
        left: "50%",
        top: "50%",
        marginLeft: -radius,
        marginTop: -radius,
        borderColor: "rgba(181, 160, 106, 0.08)",
      }}
      animate={{ rotate: isPaused ? 0 : 360 }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
}

export default function SkillsUniverse() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[var(--color-bg-primary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs text-[var(--color-text-tertiary)] mb-4"
          >
            // skills.as_universe()
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl md:text-5xl"
          >
            Skill Universe
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-sm text-[var(--color-text-secondary)] max-w-2xl mx-auto"
          >
            A living system of interconnected technologies. Each skill orbits
            the core, reflecting how modern development works — nothing stands
            alone.
          </motion.p>
        </motion.div>

        {/* Universe Container */}
        <motion.div
          ref={containerRef}
          className="relative mx-auto"
          style={{
            width: "100%",
            maxWidth: "800px",
            height: "600px",
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Background Glow */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(181, 160, 106, 0.15) 0%, transparent 50%)",
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Central Hub - Full Stack Developer */}
          <motion.div
            className="absolute rounded-full flex items-center justify-center"
            style={{
              width: 100,
              height: 100,
              left: "50%",
              top: "50%",
              marginLeft: -50,
              marginTop: -50,
              background: "var(--color-bg-surface)",
              border: "2px solid var(--color-gold)",
              boxShadow: "0 0 40px rgba(181, 160, 106, 0.3)",
            }}
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="font-display text-lg" style={{ color: "var(--color-gold)" }}>
                Full Stack
              </div>
              <div className="font-mono text-[10px] text-[var(--color-text-tertiary)]">
                Developer
              </div>
            </div>
          </motion.div>

          {/* Orbital Rings with Skills */}
          {orbitalRings.map((ring) => (
            <OrbitRing
              key={ring.name}
              radius={ring.radius}
              speed={ring.speed}
              isPaused={isPaused}
            >
              {ring.skills.map((skill, index) => {
                const angle = (360 / ring.skills.length) * index;
                return (
                  <SkillNode
                    key={skill.name}
                    skill={skill}
                    angle={angle}
                    radius={ring.radius}
                    size={ring.size}
                  />
                );
              })}
            </OrbitRing>
          ))}

          {/* Connection Lines (SVG overlay) */}
          <svg
            className="absolute inset-0 pointer-events-none opacity-20"
            viewBox="0 0 800 600"
            style={{ overflow: "visible" }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--color-copper)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Subtle radial lines from center */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <motion.line
                key={angle}
                x1="400"
                y1="300"
                x2={400 + Math.cos((angle * Math.PI) / 180) * 380}
                y2={300 + Math.sin((angle * Math.PI) / 180) * 380}
                stroke="url(#lineGradient)"
                strokeWidth="0.5"
                opacity={0.3}
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity, delay: angle / 360 }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Legend/Guide */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-[var(--color-text-tertiary)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "var(--color-gold)" }}
            />
            <span>Hover to pause</span>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full border border-[var(--color-gold)]"
              style={{ borderColor: "rgba(181, 160, 106, 0.3)" }}
            />
            <span>Click skill to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
