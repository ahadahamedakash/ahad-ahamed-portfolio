"use client";

import { motion } from "motion/react";

const steps = [
  {
    id: "01",
    label: "diagnose",
    title: "Start with the problem",
    description:
      "Not the solution. Every product begins with understanding the real pain — who has it, why it exists, what fixing it actually means.",
    accent: "#B5A06A",
  },
  {
    id: "02",
    label: "build",
    title: "Ship fast, iterate faster",
    description:
      "The 40% time savings I delivered came from reusable patterns — built once, used everywhere. Speed is a skill, not an accident.",
    accent: "#C8845A",
  },
  {
    id: "03",
    label: "measure",
    title: "Track what matters",
    description:
      "400+ problems solved. 35% bundle reduction. 10+ projects on time. I don't guess — I measure. Discipline makes the difference.",
    accent: "#6B8C6B",
  },
  {
    id: "04",
    label: "iterate",
    title: "Learn in public",
    description:
      "Competitive programming, open source, community — I grow by sharing knowledge, not hoarding it. Every loop makes the next one faster.",
    accent: "#B5A06A",
  },
];

export default function MyApproachCard() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* PART 1 - MANIFESTO */}
        <motion.div
          className="mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[11px] text-center mb-4"
            style={{ color: "var(--color-gold)" }}
          >
            // how_I_think.ts
          </motion.p>

          <motion.div
            className="max-w-[680px] mx-auto"
            style={{ marginBottom: "40px" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-display text-center leading-relaxed"
              style={{
                fontSize: "clamp(18px, 2.5vw, 26px)",
                color: "rgba(242,237,228,0.8)",
                lineHeight: 1.65,
              }}
            >
              Medical background taught me to{" "}
              <span style={{ color: "#B5A06A" }}>
                diagnose before treating.
              </span>
              <br />
              <span style={{ color: "#C8845A" }}>
                Competitive programming
              </span>{" "}
              taught me to reason under pressure.
              <br />
              <span style={{ color: "#B5A06A" }}>Building products</span> taught
              me to ship real solutions.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto"
            style={{
              width: "60px",
              height: "1px",
              backgroundColor: "#B5A06A",
              marginBottom: "56px",
            }}
          />
        </motion.div>

        {/* PART 2 & 3 - TWO COLUMN LAYOUT */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Column: 2×2 Grid (50% width) */}
          <motion.div
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className="rounded-xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="hover:bg-[#161614] transition-colors duration-200"
                    style={{
                      backgroundColor: "#111110",
                      padding: "32px 28px",
                      borderRight:
                        index % 2 === 0
                          ? "1px solid rgba(255,255,255,0.06)"
                          : "none",
                      borderBottom:
                        index < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                      borderLeft: `2px solid ${step.accent}`,
                      paddingLeft: "26px",
                    }}
                  >
                    <p
                      className="font-mono text-[11px] mb-2"
                      style={{
                        color: `${step.accent}66`,
                        marginBottom: "12px",
                      }}
                    >
                      {step.id} — {step.label}
                    </p>
                    <h3
                      className="font-display text-[19px] mb-2"
                      style={{
                        color: "#F2EDE4",
                        fontWeight: 700,
                        marginBottom: "10px",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="font-sans text-[15px]"
                      style={{
                        color: "rgba(242,237,228,0.5)",
                        lineHeight: 1.75,
                      }}
                    >
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile-specific styles */}
        <style jsx>{`
          @media (max-width: 767px) {
            .grid > div {
              border-right: none !important;
              padding: 24px 20px !important;
              padding-left: 22px !important;
            }
            .grid > div:last-child {
              border-bottom: none !important;
            }
          }
        `}</style>

        {/* PART 4 - CLOSING LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-sans text-center italic mt-12"
          style={{
            fontSize: "14px",
            color: "rgba(242,237,228,0.28)",
            marginTop: "48px",
          }}
        >
          I bring systems thinking to every product I build.
        </motion.p>
      </div>
    </section>
  );
}
