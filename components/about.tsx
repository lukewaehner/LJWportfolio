"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

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
      <span className="inline-block font-mono text-[0.65rem] uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-500 mb-4">
        02 / Profile
      </span>
      <h2 className="text-[clamp(2.25rem,5vw,3rem)] font-bold leading-[1.1] tracking-[-0.04em] mb-10">
        About me
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-4 mb-12">
        <div className="sm:col-span-2 sm:row-span-2 flex flex-col justify-between rounded-lg bg-zinc-100 dark:bg-zinc-800 px-6 py-8">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl sm:text-6xl font-bold tracking-tighter leading-none text-zinc-900 dark:text-zinc-50">
              1.3M
            </span>
            <span className="text-2xl font-medium text-zinc-500 dark:text-zinc-500">
              /sec
            </span>
          </div>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-500 mt-4">
            Orders processed
          </span>
        </div>
        <div className="flex flex-col gap-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 px-4 py-3">
          <span className="text-2xl font-bold tracking-tighter leading-none text-zinc-900 dark:text-zinc-50">
            $110B
          </span>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-500">
            Assets reported
          </span>
        </div>
        <div className="flex flex-col gap-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 px-4 py-3">
          <span className="text-2xl font-bold tracking-tighter leading-none text-zinc-900 dark:text-zinc-50">
            3.83
          </span>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-500">
            GPA
          </span>
        </div>
      </div>

      <div className="space-y-4 max-w-[65ch]">
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
      </div>
    </motion.section>
  );
}
