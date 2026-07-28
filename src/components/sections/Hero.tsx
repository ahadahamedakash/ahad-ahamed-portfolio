"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import GridBackground from "@/components/ui/GridBackground";

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

// Profile Card Component with glowing circular border animation
function ProfileCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center"
      style={{
        width: "450px",
        height: "450px",
      }}
    >
      {/* Glowing Orb Behind */}
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: "120%",
          height: "120%",
          left: "-10%",
          top: "-10%",
          background:
            "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)",
          opacity: 0.3,
        }}
        animate={{
          opacity: isHovered ? 0.5 : 0.3,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Rotating Glow Ring 1 */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "470px",
          left: "-10px",
          top: "-10px",
          background:
            "conic-gradient(from 0deg, var(--color-gold), var(--color-copper), var(--color-gold))",
          opacity: 0.12,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Rotating Glow Ring 2 (Counter-rotating) */}
      <motion.div
        className="absolute rounded-full blur-md"
        style={{
          width: "480px",
          height: "480px",
          left: "-10px",
          top: "-10px",
          background:
            "conic-gradient(from 180deg, var(--color-copper), var(--color-gold), var(--color-copper))",
          opacity: 0.08,
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Rotating Glow Ring 3 */}
      <motion.div
        className="absolute rounded-full blur-lg"
        style={{
          width: "300px",
          height: "380px",
          left: "-30px",
          top: "-30px",
          background:
            "conic-gradient(from 90deg, var(--color-gold), var(--color-amber-deep), var(--color-gold))",
          opacity: 0.05,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Image with Border Radius */}
      <motion.div
        className="relative overflow-hidden rounded-3xl"
        style={{
          width: "100%",
          height: "100%",
          border: "2px solid rgba(181, 160, 106, 0.3)",
          boxShadow:
            "0 0 60px rgba(181, 160, 106, 0.2), inset 0 0 60px rgba(181, 160, 106, 0.05)",
        }}
        animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Animated Inner Glow Overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(181, 160, 106, 0.08) 0%, transparent 60%)",
          }}
          animate={
            isHovered
              ? {
                  background: [
                    "radial-gradient(circle at 30% 30%, rgba(181, 160, 106, 0.08) 0%, transparent 60%)",
                    "radial-gradient(circle at 70% 70%, rgba(200, 132, 90, 0.12) 0%, transparent 60%)",
                    "radial-gradient(circle at 30% 30%, rgba(181, 160, 106, 0.08) 0%, transparent 60%)",
                  ],
                }
              : {}
          }
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Profile Image */}
        <Image
          src="/images/ahad/ahad.webp"
          alt="Ahad Ahamed Akash"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 400px, 400px"
        />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState(phrases[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

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
              From medical student to Full Stack Engineer - I build real
              products and sharpen my problem-solving through competitive
              programming. 1.5+ years shipping at scale, 10+ projects delivered,
              400+ algorithmic problems solved.
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
                  Resume
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN - 48% */}
          <div className="lg:w-[48%] flex items-center justify-center lg:justify-end">
            <ProfileCard />
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
