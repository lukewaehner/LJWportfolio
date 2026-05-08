"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const allSkills = [...skillsData];

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 sm:mb-40 scroll-mt-28 w-full max-w-4xl"
    >
      <SectionHeading>My skills</SectionHeading>

      {/* Marquee wrapper — negative margin breaks out of parent px-4 */}
      <div
        className="overflow-hidden -mx-4 px-0"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        {/* Row 1 — left to right */}
        <div className="flex animate-marquee mb-3" aria-hidden="false">
          {[...allSkills, ...allSkills].map((skill, index) => (
            <span
              key={index}
              className="shrink-0 mx-2 font-mono text-[0.65rem] uppercase tracking-[0.15em] bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-800 px-4 py-2.5 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Row 2 — right to left */}
        <div className="flex animate-marquee-reverse" aria-hidden="true">
          {[...allSkills, ...allSkills].map((skill, index) => (
            <span
              key={index}
              className="shrink-0 mx-2 font-mono text-[0.65rem] uppercase tracking-[0.15em] bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-800 px-4 py-2.5 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
