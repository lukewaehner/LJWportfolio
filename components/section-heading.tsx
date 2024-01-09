import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: -50 }, // Change this line for vertical movement
  };

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="text-7xl font-medium capitalize mb-8 text-center"
    >
      {children}
    </motion.h2>
  );
}
