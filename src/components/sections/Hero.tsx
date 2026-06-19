"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import GridBackground from "@/components/ui/GridBackground";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const phrases = [
  "Building products that ship",
  "Solving hard algorithms",
  "Thinking in systems",
  "Crafting clean interfaces",
  "Competing on Codeforces",
];

const stats = [
  {
    value: "10+",
    label: "Projects shipped",
  },
  {
    value: "400+",
    label: "Problems solved",
  },
  {
    value: "1.5yr",
    label: "Industry xp",
  },
  {
    value: "40%",
    label: "Dev time saved",
  },
];

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState(phrases[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showReadyLine, setShowReadyLine] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const phrase = phrases[currentPhrase];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < phrase.length) {
            setDisplayText(phrase.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(phrase.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentPhrase((currentPhrase + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase, isMounted]);

  // Trigger the "ready" line animation after terminal finishes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowReadyLine(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[70dvh] overflow-hidden px-6 md:px-10 py-16 md:py-24">
      <GridBackground />

      {/* Container - same max-width as other sections */}
      <div className="relative z-10 max-w-7xl mx-auto px-10">
        {/* Two Column Row */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-start">
          {/* LEFT COLUMN - 52% */}
          <div className="lg:w-[52%] flex flex-col">
            {/* Name */}
            <h1
              className="font-display font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(48px, 8vw, 72px)" }}
            >
              Ahad
              <br />
              <span className="italic text-[var(--color-gold)]">
                Ahamed
              </span>{" "}
              Akash
            </h1>

            {/* Thin Gold Rule */}
            <div className="w-[60px] h-px bg-[var(--color-gold)] mb-6" />

            {/* Typewriter */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-sm md:text-base text-[var(--color-text-tertiary)]">
                &gt;_
              </span>
              <span className="font-mono text-sm md:text-base text-[var(--color-copper)]">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            {/* Bio */}
            <p
              className="font-sans font-light leading-relaxed text-[var(--color-text-secondary)] mb-6"
              style={{ fontSize: "16px", lineHeight: "1.8", maxWidth: "460px" }}
            >
              From medical student to full-stack engineer — I build real
              products and sharpen my problem-solving through competitive
              programming. 1.5+ years shipping at scale, 10+ projects delivered,
              160+ algorithmic problems solved.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3" style={{ gap: "12px" }}>
              <Button
                variant="default"
                className="rounded-md text-sm"
                style={{
                  backgroundColor: "#B5A06A",
                  color: "#111110",
                  border: "none",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  paddingLeft: "28px",
                  paddingRight: "28px",
                  fontWeight: "500",
                }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects →
              </Button>
              <Button
                variant="outline"
                className="rounded-md text-sm bg-transparent"
                style={{
                  backgroundColor: "transparent",
                  color: "rgba(242,237,228,0.6)",
                  border: "1px solid rgba(181,160,106,0.28)",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  fontWeight: "400",
                }}
              >
                <Link
                  href="https://drive.google.com/file/d/1yvLv8FECyDCx4pyhGfwlF9PC0uxs1UL7/view?usp=sharing"
                  target="_blank"
                >
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN - 48% */}
          <div className="lg:w-[48%]" style={{ paddingTop: "8px" }}>
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="w-full max-w-[420px]"
              style={{ rotate: "rotate(-1deg)" }}
            >
              {/* Terminal Card */}
              <div
                className="bg-[#1A1A18] border rounded-xl p-5 w-full relative overflow-hidden"
                style={{
                  borderColor: "rgba(181,160,106,0.15)",
                  boxShadow: "0 0 60px rgba(181,160,106,0.06)",
                  minHeight: "300px",
                }}
              >
                {/* Scanline Effect */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-xl"
                  style={{
                    background:
                      "repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, transparent 2px, transparent 4px)",
                  }}
                />

                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-4 relative z-10">
                  <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                  <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                  <span className="font-mono text-xs text-[var(--color-gold)] ml-2">
                    ahad@portfolio:~$
                  </span>
                </div>

                {/* Terminal Content */}
                <div
                  className="font-mono relative z-10"
                  style={{ fontSize: "13px" }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-[var(--color-text-tertiary)] mb-1"
                  >
                    $ whoami
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-[var(--color-gold)] mb-3"
                  >
                    → ahad_ahamed_akash
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="text-[var(--color-text-tertiary)] mb-1"
                  >
                    $ skills --list
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="text-[var(--color-copper)] mb-3"
                  >
                    → react, next.js, node.js, mongodb
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="text-[var(--color-text-tertiary)] mb-1"
                  >
                    $ solve --platform codeforces
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.9 }}
                    className="text-[var(--color-sage)] mb-3"
                  >
                    → 110+ problems solved ✓
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2 }}
                    className="text-[var(--color-text-tertiary)] mb-1"
                  >
                    $ status
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 }}
                    className="text-[var(--color-sage)] mb-2"
                  >
                    → open_to_work: true
                  </motion.div>

                  {/* Ready Line */}
                  {showReadyLine && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[var(--color-gold)] mb-1"
                        style={{ color: "#B5A06A" }}
                      >
                        → ready_to_build --your-next-product
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-[var(--color-gold)] animate-pulse"
                        style={{ color: "#B5A06A" }}
                      >
                        ▊
                      </motion.div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* STATS STRIP - Full Width Below Columns */}
        <div
          style={{
            paddingTop: "40px",
            paddingBottom: "40px",
            // borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span
                  className="font-display text-[var(--color-gold)]"
                  style={{ fontSize: "clamp(32px, 4vw, 42px)" }}
                >
                  {stat.value}
                </span>
                <span
                  className="font-mono uppercase tracking-wider text-[var(--color-text-tertiary)]"
                  style={{ fontSize: "11px" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
