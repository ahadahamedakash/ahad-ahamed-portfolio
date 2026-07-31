"use client";

import { motion } from "motion/react";
import CountUp from "@/components/ui/CountUp";

const stats = [
  {
    platform: "Codeforces",
    value: 350,
    suffix: "+",
    detail: "10+ contests entered",
    accentColor: "var(--color-gold)",
  },
  {
    platform: "LeetCode",
    value: 50,
    suffix: "+",
    detail: "problems solved",
    accentColor: "var(--color-copper)",
  },
  {
    platform: "CodeChef",
    value: 14,
    suffix: "+",
    detail: "contests entered",
    accentColor: "var(--color-sage)",
  },
  {
    platform: "Total",
    value: 400,
    suffix: "+",
    detail: "problems solved",
    accentColor: "var(--color-amber-deep)",
  },
];

// Generate realistic random activity data for heatmap (52 weeks x 7 days)
// replace with real API data later
const generateHeatmapData = () => {
  const data: number[] = [];
  // Use seeded random for consistency between server and client
  let seed = 12345;
  const random = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  for (let i = 0; i < 52 * 7; i++) {
    // Weighted random: more 0s and 1s, fewer high values
    const rand = random();
    if (rand < 0.3) data.push(0);
    else if (rand < 0.5) data.push(1);
    else if (rand < 0.7) data.push(2);
    else if (rand < 0.85) data.push(3);
    else data.push(4);
  }
  return data;
};

const heatmapData = generateHeatmapData();

const getHeatmapColor = (value: number) => {
  const colors = [
    "var(--color-bg-surface)", // 0 - empty
    "rgba(181, 160, 106, 0.2)", // 1 - light gold
    "rgba(181, 160, 106, 0.4)", // 2 - medium gold
    "rgba(181, 160, 106, 0.6)", // 3 - strong gold
    "var(--color-gold)", // 4 - full gold
  ];
  return colors[value] || colors[0];
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

export default function ProblemSolver() {
  return (
    <section className="bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Section Header */}
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
            // problem_solving.exe
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="font-display text-5xl md:text-6xl mb-6"
          >
            I Don&apos;t Just Build.
            <br />I Solve.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-sans font-light max-w-2xl text-[var(--color-text-secondary)] leading-relaxed"
          >
            Most developers build. Fewer can reason under constraints.
            Competitive programming is how I stay sharp — and it makes every
            product I ship more thoughtful.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-[var(--color-bg-surface)] rounded-xl p-6 border border-[var(--color-border-subtle)]"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
                style={{ backgroundColor: stat.accentColor }}
              />
              <div className="mb-2">
                <span className="font-display text-4xl text-[var(--color-text-primary)]">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-tertiary)] mb-1">
                {stat.platform}
              </p>
              <p className="font-sans text-sm text-[var(--color-text-secondary)]">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Activity Heatmap */}
        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="font-sans text-sm font-medium text-[var(--color-text-secondary)] mb-4">
              Activity
            </h3>
            <div className="bg-[var(--color-bg-surface)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
              <div className="grid grid-cols-52 gap-1 mb-4">
                {heatmapData.map((value, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-sm"
                    style={{
                      backgroundColor: getHeatmapColor(value),
                    }}
                    title={`Activity level: ${value}`}
                  />
                ))}
              </div>
              <div className="flex items-center justify-end gap-2">
                <span className="font-mono text-xs text-[var(--color-text-tertiary)]">
                  Less
                </span>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className="w-3 h-3 rounded-sm"
                      style={{ backgroundColor: getHeatmapColor(level) }}
                    />
                  ))}
                </div>
                <span className="font-mono text-xs text-[var(--color-text-tertiary)]">
                  More
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <blockquote className="font-display text-2xl md:text-3xl italic text-[var(--color-text-primary)]">
            &ldquo;The same mind that debugs algorithms debugs products.&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
