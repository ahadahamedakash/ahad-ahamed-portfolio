"use client";

import { motion } from "motion/react";

const cards = [
  {
    year: "2018",
    label: "Medical Diploma",
    description:
      "Most developers start with code. I started with anatomy. Graduated with a medical diploma — then decided to build a different kind of future.",
    borderColor: "var(--color-gold)",
  },
  {
    year: "2023",
    label: "First Dev Role",
    description:
      "Taught myself React through Programming Hero. Landed a remote Frontend Developer role at AB Software Solutions in Beirut within months.",
    borderColor: "var(--color-copper)",
  },
  {
    year: "Now",
    label: "Builder + Solver",
    description:
      "Shipping real products. Deepening CS fundamentals at Phitron. Competing on Codeforces, LeetCode, and CodeChef every week.",
    borderColor: "var(--color-sage)",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function TheArc() {
  return (
    <section className="bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-3">The Arc</h2>
          <p className="font-sans text-[var(--color-text-secondary)]">
            How I got here.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative bg-[var(--color-bg-surface)] rounded-xl p-8 border-l-4"
              style={{ borderColor: card.borderColor }}
            >
              <div className="mb-4">
                <span className="font-display text-5xl md:text-5xl text-[var(--color-text-primary)]">
                  {card.year}
                </span>
              </div>
              <h3 className="font-display text-xl mb-4 text-[var(--color-text-primary)]">
                {card.label}
              </h3>
              <p className="font-sans font-light leading-relaxed text-[var(--color-text-secondary)]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
