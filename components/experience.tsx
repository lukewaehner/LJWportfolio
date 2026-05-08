"use client";

import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 w-full max-w-4xl">
      {/* Heading with eyebrow */}
      <div className="mb-10">
        <motion.span
          className="inline-block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600 mb-3"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          Career
        </motion.span>
        <motion.h2
          className="text-[clamp(2.25rem,5vw,3rem)] font-bold leading-[1.1] tracking-[-0.04em]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          My experience
        </motion.h2>
      </div>

      {/* Experience rows */}
      <div className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
        {experiencesData.map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] gap-3 sm:gap-8 py-6 sm:py-7"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            {/* Date */}
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-600 leading-none pt-px sm:pt-1">
              {item.date}
            </span>

            {/* Content */}
            <div className="flex flex-col gap-1.5">
              <h3 className="text-[1.05rem] font-bold tracking-tight leading-[1.3] text-zinc-900 dark:text-zinc-50">
                {item.title}
              </h3>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-600">
                {item.location}
              </p>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-[60ch]">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
