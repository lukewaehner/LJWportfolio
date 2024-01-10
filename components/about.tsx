"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./section-heading";

export default function About() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();

  React.useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, y: 0 });
    } else {
      controls1.start({ opacity: 0, y: 100 });
    }
  }, [controls1, inView1]);

  React.useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, y: 0 });
    } else {
      controls2.start({ opacity: 0, y: 100 });
    }
  }, [controls2, inView2]);

  return (
    <motion.section
      className="mb-28 max-w-[70rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 100 }}
        animate={controls1}
        transition={{ duration: 0.5, delay: 0.175 }}
      >
        <p className=" mb-4">
          While other toddlers enjoy playing with dinosaurs, racecars, or
          trains, I would play with{" "}
          <span className="underline font-medium">Microsoft Word</span>. It
          should be mentioned that I could not read or write at this point. I
          simply enjoyed creating collages of lettering. Ironically, I was a
          huge fan of the curly brace.
        </p>
        <p className="mb-4">
          It must have been a sign, as I downloaded{" "}
          <span className="italic font-medium">Sololearn</span> from the app
          store years later and diligently took notes on a stack of notecards on
          basic HTML. I created my first website, well, more so a{" "}
          <span className="italic">{"<p>"}</span> tag with{" "}
          <span className="font-medium">“Hello World!”</span> placed inside of
          it. But, from there, my love for programming was cemented.
        </p>
        <p className="mb-4">
          Entering Fordham, my declared major was
          <span className="font-medium"> Information Systems.</span> I remember
          being so excited that I could major in tech from the business school,
          as it was no secret Gabelli was the poster child of the university.
          The course load seemed interesting, and job placements could plunge me
          into the career I desired. But two years later, I still had yet to
          take a tech-related class.
        </p>{" "}
        <p className="mb-4">
          {" "}
          Over the summer, I took an internship in wealth management. I used
          Excel to parse together investment data and create charts, but that
          quickly became old. I began scripting in{" "}
          <span className="font-medium">VBA </span> to make my work easy. At
          that moment, I realized that I needed a fresh start. Even though I was
          already so far into the business curriculum, it didn't matter. I
          needed to be happy with my career choice, and working with computers
          is exactly what I want to do.
        </p>
        <p className="mb-4">
          I always look to learn new things, and I love that you can get a
          little taste of everything with programming. Everyone needs software,
          doctors, lawyers, surgeons, and even grocery stores. I want to be the
          one to build it for them.
        </p>
        <p className="mb-4">
          Although I do frequently program, I also enjoy playing video games,
          studying fashion history, and skiing. You can find me on the slopes of
          Mount Sunapee or taking the L train to the East Village thrift strip.
        </p>
        {/* <p className="mb-3">
          Entering university pursuing a degree in{" "}
          <span className="font-medium">Information Systems</span>, left me
          unsatisfied. I decided to do a full pivot, and pursue my passion for
          programming. I began taking programming seriously in early 2023, after
          joining the{" "}
          <span className="font-medium">Computer Science Club at Fordham</span>.
          I always loved the problem solving aspect of
          <span className="italic">programming</span>. I{" "}
          <span className="underline">yearn</span> the feeling when every part
          finally clicks, and your project finally comes to life. I am always
          looking to learn new technologies. I am currently looking for a{" "}
          <span className="font-medium">new university</span> to study, and grow
          at.
        </p>

        <p>
          <span className="italic">When I'm not programming</span>, I enjoy
          playing video games, learning fashion history, and skiing. I also
          enjoy <span className="font-medium">learning new things</span>. I am
          currently learning about{" "}
          <span className="font-medium">cryptography</span>.
        </p> */}
      </motion.div>
    </motion.section>
  );
}
