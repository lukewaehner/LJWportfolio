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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Entering university pursuing a degree in{" "}
        <span className="font-medium">Information Systems</span>, left me
        unsatisfied. I decided to do a full pivot, and pursue my passion for
        programming. I began taking programming seriously in early 2023, after
        joining the{" "}
        <span className="font-medium">Computer Science Club at Fordham</span>. I
        always loved the problem solving aspect of
        <span className="italic">programming</span>. I{" "}
        <span className="underline">yearn</span> the feeling when every part
        finally clicks, and your project finally comes to life. I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">new university</span> to study, and grow
        at.
      </p>

      <p>
        <span className="italic">When I'm not programming</span>, I enjoy
        playing video games, learning fashion history, and skiing. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">cryptography</span>.
      </p>
    </motion.section>
  );
}
