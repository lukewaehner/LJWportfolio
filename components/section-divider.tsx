"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="mb-20 h-[1.7] w-[60rem] 2xl:w-[70rem] min-[1920px]:w-[80rem] max-w-[70%] bg-zinc-300 dark:bg-zinc-700 hidden sm:block rounded-full"
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay: 0.5, duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
    />
  );
}
