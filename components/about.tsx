"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const stats = [
  { value: "3.83", label: "GPA" },
  { value: "100+", label: "Active clients" },
  { value: "70%", label: "Faster reporting" },
];

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 sm:mb-40 scroll-mt-28 w-full max-w-4xl"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      id="about"
    >
      {/* Heading with mono eyebrow */}
      <div className="mb-10">
        <motion.span
          className="inline-block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600 mb-3"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          Profile
        </motion.span>
        <motion.h2
          className="text-[clamp(2.25rem,5vw,3rem)] font-bold leading-[1.1] tracking-[-0.04em]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          About me
        </motion.h2>
      </div>

      {/* Stats strip - the section's hero moment */}
      <div className="grid grid-cols-3 divide-x divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800 mb-12">
        {stats.map(({ value, label }, i) => (
          <motion.div
            key={label}
            className="flex flex-col gap-1.5 px-4 sm:px-6 py-6 first:pl-0 last:pr-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-4xl sm:text-5xl font-bold tracking-tight leading-none text-zinc-900 dark:text-zinc-50">
              {value}
            </span>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-500">
              {label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Prose — leading paragraph elevated, supporting paragraphs at body weight */}
      <motion.div
        className="space-y-4 max-w-[65ch]"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      >
        <p className="text-zinc-800 dark:text-zinc-200 text-[1.05rem] leading-relaxed font-medium">
          I&apos;m a software engineer working across full-stack development
          and high-performance systems. At Smartleaf, I&apos;m engineering
          tree-structured portfolio reporting and PostgreSQL upgrade harnesses
          that operate across $110B in AUM. In Rust I built a lock-free
          matching engine that processes 1.3M orders/sec at sub-microsecond
          latency.
        </p>
        <p className="text-zinc-500 dark:text-zinc-400 text-[1.05rem] leading-relaxed">
          My dual degree in Computer Science and Fintech from Northeastern
          drives my interest in where finance meets technology: trading
          infrastructure, payment systems, and the data pipelines that power
          financial decisions.
        </p>
        <p className="text-zinc-500 dark:text-zinc-400 text-[1.05rem] leading-relaxed">
          Available for full-time roles starting July 2026. When I&apos;m not
          coding, you&apos;ll find me gaming with friends, exercising, or
          skiing the slopes of New England.
        </p>
      </motion.div>
    </motion.section>
  );
}
