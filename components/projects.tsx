"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 sm:mb-40 w-full max-w-4xl">
      {/* Heading with eyebrow */}
      <div className="mb-10">
        <motion.span
          className="inline-block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600 mb-3"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Selected Work
        </motion.span>
        <motion.h2
          className="text-[clamp(2.25rem,5vw,3rem)] font-bold leading-[1.1] tracking-[-0.04em]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          My projects
        </motion.h2>
      </div>

      {/* Featured first project — full width */}
      <motion.div
        className="mb-5"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <Project {...projectsData[0]} index={0} featured />
      </motion.div>

      {/* Two-column grid for remaining projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projectsData.slice(1).map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
          >
            <Project {...project} index={i + 1} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
