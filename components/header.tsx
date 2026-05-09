"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      {/* Mobile: single centered pill showing the current section */}
      <div className="sm:hidden fixed top-3 left-0 right-0 flex justify-center pointer-events-none">
        <motion.div
          className="pointer-events-auto h-10 inline-flex items-center px-5 rounded-full border border-zinc-200/50 bg-zinc-50/85 shadow-sm shadow-black/[0.02] backdrop-blur-md dark:bg-zinc-950/85 dark:border-zinc-800/50"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={activeSection}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              {activeSection}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Desktop pill background */}
      <motion.div
        className="hidden sm:block fixed top-6 left-1/2 h-[3.25rem] w-[36rem] rounded-full border border-zinc-200/50 bg-zinc-50/85 shadow-sm shadow-black/[0.02] backdrop-blur-md 2xl:h-[3.75rem] 2xl:w-[42rem] min-[1920px]:h-[4.25rem] min-[1920px]:w-[48rem] dark:bg-zinc-950/85 dark:border-zinc-800/50"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      />

      {/* Desktop nav */}
      <nav className="hidden sm:flex fixed top-6 left-1/2 -translate-x-1/2 h-[3.25rem] 2xl:h-[3.75rem] min-[1920px]:h-[4.25rem]">
        <ul className="flex h-full flex-wrap items-center justify-center gap-x-0.5 gap-y-1 text-[0.82rem] 2xl:text-[0.95rem] min-[1920px]:text-[1.05rem] font-medium text-zinc-500 sm:flex-nowrap px-3 2xl:px-4 min-[1920px]:px-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="relative flex items-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              {link.name === activeSection && (
                <motion.span
                  className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-full"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <Link
                className={clsx(
                  "relative z-10 flex items-center justify-center px-3 py-2 rounded-full transition-colors duration-200 hover:text-zinc-900 dark:hover:text-zinc-200 whitespace-nowrap",
                  activeSection === link.name
                    ? "text-zinc-900 dark:text-zinc-100"
                    : "text-zinc-500 dark:text-zinc-500"
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
