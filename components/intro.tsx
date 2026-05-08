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
import headshot from "@/public/headshot.png";

// List of role suffixes to rotate through
const roles = [
  "Full Stack Engineer",
  "Systems Programmer",
  "Fintech Developer",
];

/**
 * RotatingRole component displays an animated rotating suffix word.
 * Three simultaneous animations:
 * 1. New suffix flies in from lower-right to its final position
 * 2. Old suffix flies out to upper-right
 * 3. Container automatically adjusts, causing prefix to move smoothly to maintain centering
 */
const RotatingRole = ({ roles }: { roles: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Rotate to the next role every 2.5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    // Wrapper with layout prop - as content changes, it smoothly animates position
    // This automatically handles the repositioning of the suffix to maintain centering
    <motion.span
      className="inline-block relative"
      layout
      transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
    >
      {/* 
        AnimatePresence with mode="popLayout":
        - Removes exiting word from layout (absolute positioned)
        - New word takes its place in layout immediately
        - Both exit and enter animations happen simultaneously
      */}
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={roles[currentIndex]}
          // Enter: start from lower-right offset, transparent
          initial={{ opacity: 0, x: 15, y: 8 }}
          // Animate to final position while parent container adjusts for centering
          animate={{ opacity: 1, x: 0, y: 0 }}
          // Exit: fade out moving up-right
          exit={{ opacity: 0, x: 15, y: -8 }}
          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}
          className="inline-block whitespace-nowrap"
        >
          {roles[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
};

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 w-[80rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={headshot}
              alt="Headshot"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-48 w-48 sm:h-96 sm:w-96 rounded-full object-cover border-[0.35rem] border-white shadow-xl hover:border-blue-500 transition duration-300"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium-light !leading-[1.5] sm:text-6xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello! I'm{" "}
        <span className="font-bold hover:text-blue-500 transition duration-300">
          Luke.
        </span>
        <br />
        {/* 
          Three-part animation system:
          1. Prefix with layout prop - smoothly moves to maintain centering
          2. New suffix flies in from lower-right while moving to final position
          3. Old suffix flies out to upper-right
          All three happen simultaneously as the content changes
        */}
        <span className="inline-block whitespace-nowrap">
          <motion.span
            className="font-bold"
            layout
            transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
          >
            I'm an aspiring{" "}
          </motion.span>
          <motion.span
            className="font-bold hover:text-blue-500 transition duration-300"
            layout
            transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
          >
            <RotatingRole roles={roles} />
          </motion.span>
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/lukewaehner"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/lukewaehner"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-white/60"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Waehner-Luke-Resume.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
    </section>
  );
}
