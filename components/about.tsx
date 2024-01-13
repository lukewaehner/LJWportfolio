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
        From playing with letters on the keyboard in Microsoft Word at age 3, to
        crafting “Hello World!” in HTML at age 10, my affinity for programming
        started early. I tranistioned that love to Fordham University, majoring
        in Information Systems. I eagerly awaited diving into the tech realm,
        yet it wasn't what I was looking for. After scripting in VBA during a
        finance internship, I took a step back and realized I needed a change in
        scenery. This epiphany steered me towards a career in software, where I
        aim to innovate in areas like healthcare and smart vehicles.
      </p>
      <p>
        Outside coding, I’m an avid video gamer, fashion history buff, and ski
        enthusiast, often found on New England slopes or scouring one of New
        York's East Village thrift shop.
      </p>
    </motion.section>
  );
}
