"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { status } from "@/lib/data";
import headshot from "@/public/headshot.png";

const roles = ["Full Stack Engineer", "Systems Programmer", "Fintech Developer"];

const RotatingRole = ({ roles }: { roles: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="inline-block text-blue-600 dark:text-blue-400 whitespace-nowrap"
      >
        {roles[currentIndex]}
      </motion.span>
    </AnimatePresence>
  );
};

// Stagger variants for CTA row
const ctaContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.42 },
  },
};
const ctaItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="w-full max-w-5xl 2xl:max-w-7xl min-[1920px]:max-w-[1600px] mb-28 sm:mb-40 scroll-mt-28 sm:scroll-mt-36"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] 2xl:grid-cols-[1fr_500px] min-[1920px]:grid-cols-[1fr_600px] gap-10 lg:gap-16 2xl:gap-20 items-center py-10 lg:py-20 2xl:py-24">

        {/* Left: text */}
        <div className="flex flex-col items-center lg:items-start">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="inline-flex items-center gap-2.5 font-mono text-[0.68rem] 2xl:text-[0.8rem] min-[1920px]:text-[0.92rem] uppercase tracking-[0.15em] text-zinc-500">
              <span>CS + Fintech</span>
              <span aria-hidden="true" className="inline-block h-2.5 w-px bg-zinc-300 dark:bg-zinc-700" />
              <span>Northeastern University</span>
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="mt-2 lg:mt-3 text-center lg:text-left text-[clamp(2rem,8vw,5.5rem)] 2xl:text-[clamp(5.5rem,7vw,7rem)] min-[1920px]:text-[clamp(7rem,7vw,9rem)] font-bold tracking-tighter leading-[0.88] text-zinc-900 dark:text-zinc-50"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            Luke{" "}
            <br className="hidden sm:inline" />
            Waehner.
          </motion.h1>

          {/* Mobile-only headshot — sits between headline and role */}
          <motion.div
            className="flex lg:hidden justify-center mt-6 mb-1"
            initial={{ opacity: 0, scale: 0.88, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <div className="absolute -inset-4 rounded-full border border-dashed border-zinc-300/70 dark:border-zinc-700/60 group-hover:border-zinc-400/90 dark:group-hover:border-zinc-500/80 transition-colors duration-500" />
              <Image
                src={headshot}
                alt="Luke Waehner"
                width={400}
                height={400}
                quality={95}
                priority
                className="w-52 h-52 sm:w-60 sm:h-60 rounded-full object-cover border-4 border-white dark:border-zinc-900 shadow-[0_25px_60px_rgba(0,0,0,0.15)] group-hover:shadow-[0_32px_72px_rgba(0,0,0,0.22)] transition-shadow duration-300"
              />
            </motion.div>
          </motion.div>

          {/* Rotating role */}
          <motion.p
            className="mt-3 lg:mt-4 text-center lg:text-left text-xl sm:text-2xl 2xl:text-3xl min-[1920px]:text-4xl text-zinc-500 dark:text-zinc-400 font-light min-h-[1.75rem] sm:min-h-[2rem] 2xl:min-h-[2.5rem] min-[1920px]:min-h-[3rem]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <RotatingRole roles={roles} />
          </motion.p>

          {/* Availability badge */}
          <motion.div
            className="mt-7 lg:mt-9"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <div className="inline-flex items-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full px-4 py-2 2xl:px-5 2xl:py-2.5 min-[1920px]:px-6 min-[1920px]:py-3 shadow-sm">
              <span className="text-sm 2xl:text-base min-[1920px]:text-lg font-medium text-zinc-700 dark:text-zinc-300">
                {status}
              </span>
            </div>
          </motion.div>

          {/* CTAs — primary buttons on row 1, social icons forced to row 2 on mobile */}
          <motion.div
            className="mt-5 lg:mt-6 w-full lg:w-auto flex flex-wrap items-center justify-center lg:justify-start gap-3"
            variants={ctaContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={ctaItem}>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 2xl:gap-2.5 min-[1920px]:gap-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 px-6 py-3 2xl:px-7 2xl:py-3.5 min-[1920px]:px-9 min-[1920px]:py-4 rounded-full text-sm 2xl:text-base min-[1920px]:text-lg font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] active:scale-[0.98] active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500/50 dark:focus-visible:ring-offset-zinc-950"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Contact me
                <BsArrowRight className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Mobile-only break — Resume drops to its own row */}
            <div className="basis-full h-0 sm:hidden" aria-hidden="true" />

            <motion.div variants={ctaItem}>
              <a
                href="/Waehner-Luke-Resume.pdf"
                download
                className="inline-flex items-center gap-2 2xl:gap-2.5 min-[1920px]:gap-3 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 px-6 py-3 2xl:px-7 2xl:py-3.5 min-[1920px]:px-9 min-[1920px]:py-4 rounded-full text-sm 2xl:text-base min-[1920px]:text-lg font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,0,0,0.10)] dark:hover:shadow-[0_6px_16px_rgba(0,0,0,0.35)] active:scale-[0.98] active:translate-y-0 transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500/50 dark:focus-visible:ring-offset-zinc-950"
              >
                Resume
                <HiDownload className="opacity-60" />
              </a>
            </motion.div>

            {/* Mobile-only flex break — pushes the next siblings onto a new row */}
            <div className="basis-full h-0 sm:hidden" aria-hidden="true" />

            <motion.div variants={ctaItem}>
              <a
                href="https://www.linkedin.com/in/lukewaehner"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 2xl:w-13 2xl:h-13 min-[1920px]:w-15 min-[1920px]:h-15 text-base 2xl:text-xl min-[1920px]:text-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 hover:scale-110 hover:-translate-y-0.5 hover:shadow-[0_6px_14px_rgba(0,0,0,0.10)] dark:hover:shadow-[0_6px_14px_rgba(0,0,0,0.35)] active:scale-[0.98] active:translate-y-0 transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500/50 dark:focus-visible:ring-offset-zinc-950"
                aria-label="LinkedIn"
              >
                <BsLinkedin />
              </a>
            </motion.div>

            <motion.div variants={ctaItem}>
              <a
                href="https://github.com/lukewaehner"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 2xl:w-13 2xl:h-13 min-[1920px]:w-15 min-[1920px]:h-15 text-base 2xl:text-xl min-[1920px]:text-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 hover:scale-110 hover:-translate-y-0.5 hover:shadow-[0_6px_14px_rgba(0,0,0,0.10)] dark:hover:shadow-[0_6px_14px_rgba(0,0,0,0.35)] active:scale-[0.98] active:translate-y-0 transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500/50 dark:focus-visible:ring-offset-zinc-950"
                aria-label="GitHub"
              >
                <FaGithubSquare className="text-lg" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right: headshot — desktop only (lg+); mobile shows the inline copy above */}
        <motion.div
          className="hidden lg:flex justify-end"
          initial={{ opacity: 0, scale: 0.88, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.14, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <div className="absolute -inset-5 rounded-full border border-dashed border-zinc-300/70 dark:border-zinc-700/60 group-hover:border-zinc-400/90 dark:group-hover:border-zinc-500/80 transition-colors duration-500" />

            <Image
              src={headshot}
              alt="Luke Waehner"
              width={400}
              height={400}
              quality={95}
              priority
              className="w-[22rem] h-[22rem] 2xl:w-[27rem] 2xl:h-[27rem] min-[1920px]:w-[33rem] min-[1920px]:h-[33rem] rounded-full object-cover border-4 border-white dark:border-zinc-900 shadow-[0_25px_60px_rgba(0,0,0,0.15)] group-hover:shadow-[0_32px_72px_rgba(0,0,0,0.22)] transition-shadow duration-300"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
