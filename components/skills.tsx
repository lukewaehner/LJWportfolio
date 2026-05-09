"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

type Skill = { name: string; core?: boolean };

const categories: { label: string; skills: Skill[] }[] = [
  {
    label: "Languages",
    skills: [
      { name: "Rust", core: true },
      { name: "Python", core: true },
      { name: "TypeScript", core: true },
      { name: "JavaScript" },
      { name: "Java" },
      { name: "C/C++" },
      { name: "Swift" },
      { name: "R" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", core: true },
      { name: "Next.js", core: true },
      { name: "TailwindCSS" },
      { name: "HTML/CSS" },
      { name: "Electron" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", core: true },
      { name: "Axum", core: true },
      { name: "Tokio", core: true },
      { name: "Express.js" },
      { name: "WebSockets" },
      { name: "REST APIs" },
    ],
  },
  {
    label: "Tooling",
    skills: [
      { name: "PostgreSQL", core: true },
      { name: "AWS", core: true },
      { name: "MongoDB" },
      { name: "SQLite" },
      { name: "Git" },
      { name: "CI/CD Pipelines" },
    ],
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
          className="inline-block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-3"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          Stack
        </motion.span>
        <motion.h2
          className="text-[clamp(2.25rem,5vw,3rem)] font-bold leading-[1.1] tracking-[-0.04em]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          What I build with
        </motion.h2>
      </div>

      {/* Categorized rows — no cards, just structured lines */}
      <div className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
        {categories.map((cat, i) => (
          <div
            key={cat.label}
            className="flex flex-col sm:grid sm:grid-cols-[140px_1fr] sm:items-baseline gap-3 sm:gap-8 py-5 sm:py-6"
          >
            {/* Category label */}
            <motion.span
              className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-500"
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
                  key={skill.name}
                  variants={chipVariants}
                  className={`font-mono text-[0.62rem] uppercase tracking-[0.15em] border px-2.5 py-1 rounded ${
                    skill.core
                      ? "bg-zinc-200 text-zinc-900 border-zinc-200 dark:bg-zinc-700 dark:text-zinc-50 dark:border-zinc-700"
                      : "bg-zinc-100 text-zinc-500 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700"
                  }`}
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
