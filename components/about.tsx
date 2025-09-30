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
      className="mb-28 max-w-[65rem] text-center leading-8 sm:mb-40 scroll-mt-28 sm:text-xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-4">
        I'm a software engineer specializing in full-stack development and
        high-performance systems. At Code Works, I built custom CRM solutions
        that reduced onboarding time by 55% for 200+ clients. Most recently,
        I've been deep in Rust, building a high-frequency trading engine capable
        of processing 5.7M+ orders per second with sub-13μs latency. My dual
        degree in Computer Science and Fintech from Northeastern drives my
        interest in where finance meets technology—whether that's building
        trading infrastructure, payment systems, or data pipelines that power
        financial decisions.
      </p>
      <p>
        Currently seeking a co-op for January 2026. When I'm not coding, you'll
        find me gaming with friends, exercising, or skiing the slopes of New
        England.
      </p>
    </motion.section>
  );
}
