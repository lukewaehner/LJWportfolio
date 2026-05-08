"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      {/* Pill background */}
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-zinc-200/50 bg-zinc-50/85 shadow-sm shadow-black/[0.02] backdrop-blur-md sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-zinc-950/85 dark:border-zinc-800/50"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      />

      <nav className="flex fixed top-0 left-1/2 h-[4.5rem] -translate-x-1/2 sm:top-6 sm:h-[3.25rem]">
        <ul className="flex h-full flex-wrap items-center justify-center gap-x-0.5 gap-y-1 text-[0.82rem] font-medium text-zinc-500 sm:flex-nowrap px-3">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="relative flex items-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              {/* Active background — sibling of Link so it doesn't create a nested stacking context */}
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
