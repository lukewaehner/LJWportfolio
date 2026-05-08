"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const categories = [
  {
    label: "Languages",
    skills: ["Rust", "Python", "TypeScript", "JavaScript", "Java", "C/C++", "Swift", "R"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "HTML/CSS", "TailwindCSS", "Electron"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "Axum", "Tokio", "WebSockets", "REST APIs"],
  },
  {
    label: "Infra",
    skills: ["MongoDB", "SQLite", "AWS", "Git", "CI/CD Pipelines", "IntelliJ"],
  },
];

const rowVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.028, delayChildren: 0.08 } },
};

const chipVariants = {
  hidden: { opacity: 0, y: 7 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section id="skills" ref={ref} className="mb-28 sm:mb-40 scroll-mt-28 w-full max-w-4xl">
      {/* Heading with eyebrow */}
      <div className="mb-10">
        <motion.span
          className="inline-block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600 mb-3"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          Technical Stack
        </motion.span>
        <motion.h2
          className="text-[clamp(2.25rem,5vw,3rem)] font-bold leading-[1.1] tracking-[-0.04em]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          My skills
        </motion.h2>
      </div>

      {/* Categorized rows — no cards, just structured lines */}
      <div className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
        {categories.map((cat, i) => (
          <div
            key={cat.label}
            className="flex flex-col sm:grid sm:grid-cols-[140px_1fr] gap-3 sm:gap-8 py-5 sm:py-6"
          >
            {/* Category label */}
            <motion.span
              className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-600 pt-px leading-none"
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              {cat.label}
            </motion.span>

            {/* Chips with staggered waterfall reveal */}
            <motion.div
              className="flex flex-wrap gap-2"
              variants={rowVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {cat.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={chipVariants}
                  className="font-mono text-[0.65rem] uppercase tracking-[0.15em] bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-700 px-2.5 py-1 rounded hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-all duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
