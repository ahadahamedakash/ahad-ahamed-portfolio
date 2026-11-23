export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] py-6 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-[var(--color-text-tertiary)]">
            © 2026 Ahad Ahamed Akash. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-[var(--color-text-tertiary)]">
            Made with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

// "use client";

// import { motion } from "motion/react";

// export function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer
//       id="site-footer"
//       className="relative isolate overflow-hidden border-t border-border bg-foreground text-background dark:bg-background dark:text-foreground"
//     >
//       {/* Quiet glow keeps the footer connected to the existing accent system. */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-72 opacity-70"
//         style={{
//           background:
//             "radial-gradient(circle at 50% 100%, color-mix(in srgb, var(--color-accent) 14%, transparent), transparent 62%)",
//         }}
//       />

//       <div className="mx-auto max-w-7xl px-6 md:px-10">
//         <motion.div
//           initial={{ opacity: 0, y: 18 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.08 }}
//           viewport={{ once: true, amount: 0.25 }}
//           className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
//         >
//           <motion.div
//             aria-hidden="true"
//             className="pointer-events-none absolute -bottom-36 left-[-20%] h-72 w-[58%] rounded-full blur-3xl"
//             style={{
//               background:
//                 "radial-gradient(circle, color-mix(in srgb, var(--color-gold, var(--color-accent)) 34%, transparent), transparent 70%)",
//             }}
//             animate={{
//               x: ["0%", "130%", "0%"],
//               y: [0, -34, 0],
//               opacity: [0.18, 0.34, 0.18],
//             }}
//             transition={{
//               duration: 14,
//               ease: "easeInOut",
//               repeat: Infinity,
//             }}
//           />

//           <motion.div
//             aria-hidden="true"
//             className="pointer-events-none absolute -bottom-44 right-[-16%] h-80 w-[42%] rounded-full blur-3xl"
//             style={{
//               background:
//                 "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 20%, transparent), transparent 70%)",
//             }}
//             animate={{
//               x: ["0%", "-120%", "0%"],
//               opacity: [0.12, 0.24, 0.12],
//             }}
//             transition={{
//               duration: 18,
//               ease: "easeInOut",
//               repeat: Infinity,
//               delay: 2,
//             }}
//           />

//           <div className="relative min-h-[7.5rem] sm:min-h-[10rem] lg:min-h-[13rem]">
//             {/* Name watermark: intentionally quiet, like the contact section's Hello mark. */}
//             <div
//               aria-hidden="true"
//               className="pointer-events-none absolute -bottom-3 left-[-0.04em] select-none whitespace-nowrap font-display text-[clamp(5.5rem,18vw,13rem)] font-bold leading-none tracking-[-0.085em]"
//               style={{
//                 color:
//                   "color-mix(in srgb, var(--color-gold, var(--color-accent)) 40%, transparent)",
//               }}
//             >
//               Ahad Ahamed
//             </div>
//           </div>
//         </motion.div>

//         <div className="flex flex-col gap-3 border-t border-background/10 py-5 text-xs text-background/45 dark:border-foreground/10 dark:text-foreground/45 sm:flex-row sm:items-center sm:justify-between sm:py-6">
//           <p>© {currentYear} Ahad Ahamed. All rights reserved.</p>
//           <div className="flex items-center gap-3">
//             <span>Built with Next.js</span>
//             <span
//               aria-hidden="true"
//               className="h-1 w-1 rounded-full bg-[var(--color-accent)]"
//             />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
