"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  const isLight = theme === "light";

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 w-full">
      <div className="max-w-4xl">
        <SectionHeading>My experience</SectionHeading>
      </div>
      <VerticalTimeline lineColor={isLight ? "#e4e4e7" : "rgba(255,255,255,0.07)"}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: isLight ? "#ffffff" : "rgba(255,255,255,0.03)",
                boxShadow: isLight
                  ? "0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.06)"
                  : "0 0 0 1px rgba(255,255,255,0.06)",
                border: "none",
                textAlign: "left",
                padding: "1.5rem 2rem",
                borderRadius: "1rem",
              }}
              contentArrowStyle={{
                borderRight: isLight
                  ? "0.4rem solid #e4e4e7"
                  : "0.4rem solid rgba(255,255,255,0.07)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: isLight ? "#ffffff" : "rgba(255,255,255,0.08)",
                color: "#3b82f6",
                boxShadow: isLight
                  ? "0 0 0 3px #e4e4e7"
                  : "0 0 0 3px rgba(255,255,255,0.07)",
                fontSize: "1.25rem",
              }}
            >
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                {item.title}
              </h3>
              <p className="font-normal !mt-0.5 text-sm text-zinc-500 dark:text-zinc-500">
                {item.location}
              </p>
              <p className="!mt-3 !font-normal text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
