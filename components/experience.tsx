"use client";

import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 sm:scroll-mt-36 mb-28 sm:mb-40 w-full max-w-4xl 2xl:max-w-6xl min-[1920px]:max-w-[1400px]">
      <motion.h2
        className="mb-12 text-[clamp(2.25rem,5vw,3rem)] 2xl:text-[clamp(3rem,5vw,4.5rem)] min-[1920px]:text-[clamp(4rem,5vw,5.5rem)] font-bold leading-[1.1] tracking-[-0.04em]"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      >
        Experience
      </motion.h2>

      {/* Experience rows */}
      <div>
        {experiencesData.map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col sm:grid sm:grid-cols-[160px_1fr] 2xl:grid-cols-[200px_1fr] min-[1920px]:grid-cols-[240px_1fr] gap-2 sm:gap-10 2xl:gap-12 py-7 sm:py-9 2xl:py-11 min-[1920px]:py-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            {/* Date — mono temporal anchor */}
            <span className="font-mono text-[0.65rem] 2xl:text-[0.78rem] min-[1920px]:text-[0.9rem] uppercase tracking-[0.15em] text-zinc-500 leading-none pt-px sm:pt-1.5 2xl:pt-2 min-[1920px]:pt-2.5">
              {item.date}
            </span>

            {/* Content */}
            <div className="flex flex-col gap-1.5 2xl:gap-2 min-[1920px]:gap-2.5">
              <h3 className="text-lg 2xl:text-2xl min-[1920px]:text-3xl font-bold tracking-[-0.02em] leading-[1.3] text-zinc-900 dark:text-zinc-50">
                {item.title}
              </h3>
              <p className="text-sm 2xl:text-base min-[1920px]:text-lg text-zinc-500">
                {item.location}
              </p>
              <p className="mt-2 text-sm 2xl:text-base min-[1920px]:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-[60ch] 2xl:max-w-[68ch] min-[1920px]:max-w-[75ch]">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
