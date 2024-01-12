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
        While other toddlers enjoyed playing with dinosaurs, racecars, or
        trains, I would play with{" "}
        <span className="underline font-medium">Microsoft Word</span>, and this
        was before I could read or write. I was born with a love for tech. I
        took my first programming course on my iPhone 4, writing notes on HTML
        on a pack of notecards I found in the basement. I created my first
        website, a <span className="italic">{"<p>"}</span> tag with{" "}
        <span className="font-medium">“Hello World!”</span> written inside. From
        then, I was hooked.
      </p>
      <p className="mb-4">
        When I entered Fordham University, my declared major was{" "}
        <span className="font-medium"> Information Systems</span>. I remember
        being excited that I could major in tech from the business school, as
        being a member of the Gabelli School of Business meant taking advantage
        of the university’s strength. The course load seemed interesting, and
        job placements could plunge me into the career I desired. However, two
        years later, I still hadn’t taken a tech-related class.
      </p>{" "}
      <p className="mb-4">
        Between freshman and sophomore year, I did an internship in wealth
        management. I used Excel to parse together investment data and create
        charts, and challenged myself from there. I began scripting in{" "}
        <span className="font-medium">VBA</span> to create efficiencies for the
        tasks I was given. The satisfaction I got from creating a script to
        analyze client budgets made me realize that this type of work was of
        strong interest. Even though I was already so far into the business
        curriculum, it was a growth moment to realize that I needed to be happy
        with my learning and career paths, and that working with computers is
        exactly what I want to do with my life.
      </p>
      <p className="mb-4">
        Although I do frequently program, I also enjoy playing video games,
        studying fashion history, and skiing. You can find me on the slopes of
        Mount Sunapee or taking the L train to the East Village thrift strip.
      </p>
    </motion.section>
  );
}
