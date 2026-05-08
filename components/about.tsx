"use client";

import React from "react";
import SectionHeading from "./section-heading";
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
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
        <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-[1.05rem] space-y-4 max-w-[65ch]">
          <p>
            I&apos;m a software engineer specializing in full-stack development and
            high-performance systems. At Code Works, I built custom CRM solutions
            that reduced onboarding time by 55% for 200+ clients. Most recently
            I&apos;ve been deep in Rust, building a high-frequency trading engine
            capable of processing 5.7M+ orders per second with sub-13μs latency.
          </p>
          <p>
            My dual degree in Computer Science and Fintech from Northeastern
            drives my interest in where finance meets technology—whether that&apos;s
            trading infrastructure, payment systems, or data pipelines that power
            financial decisions.
          </p>
          <p>
            Currently seeking a co-op for January 2026. When I&apos;m not coding,
            you&apos;ll find me gaming with friends, exercising, or skiing the slopes
            of New England.
          </p>
        </div>

        {/* Stat sidebar */}
        <div className="flex flex-row lg:flex-col gap-6 flex-wrap">
          {[
            { value: "3.83", label: "GPA" },
            { value: "55%", label: "Onboarding reduction" },
            { value: "13μs", label: "HFT latency" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col gap-0.5 border-l-2 border-blue-600/25 dark:border-blue-500/25 pl-4"
            >
              <span className="text-2xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50">
                {value}
              </span>
              <span className="text-[0.65rem] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
