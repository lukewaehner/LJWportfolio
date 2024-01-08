import React from "react";
import { FaReact } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import RoShamBoImg from "@/public/RPSScreenshot-1.png";
import StockChartImg from "@/public/StockChart.png";
import SketchBookImg from "@/public/sketchbook.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Highschool",
    location: "Guilford, CT",
    description:
      "Guilford Highschool graduate with High Honors and a 4.01 GPA. Apart of Music and Spanish.",
    icon: React.createElement(FaSchool),
    date: "2018-2022",
  },
  {
    title: "Fordham University Student",
    location: "Bronx, NY",
    description:
      "I completed three semesters at Fordham university of Information Systems curriculum, and one semester of Computer Science. Reserach Director of the Fordham Computer Science Society, Dean's List Student, Woolworth Scholar, Manresa Scholar, and Intramural Soccer Player.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Programming Journey",
    location: "Everywhere",
    description:
      "I spend every day programming, it is truly the only thing I want to do day-in and day-out. I am currently learning Next.js and TypeScript to expand my web-application portfolio and skills.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Rock Paper Scissors",
    description:
      "Front-end Heavy Rock Paper Scissors game with 3d parallax effect. Built with HTML, CSS, JS and uses framer-motion",
    tags: ["HTML", "Parallax-CSS", "JS", "Framer-Motion"],
    imageUrl: RoShamBoImg,
    projectUrl: "https://github.com/lukewaehner",
  },
  {
    title: "StockChart",
    description:
      "Stock Chart created for business school, built in Python and integrated into a web app with Flask module.",
    tags: ["Python", "Flask", "CSS", "yFinance", "Stochastics"],
    imageUrl: StockChartImg,
    projectUrl: "https://github.com/lukewaehner",
  },
  {
    title: "Sketchbook",
    description:
      "A simple sketchbook powered by the simple three frontend languages. Using eventhandlers through JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "Fun"],
    imageUrl: SketchBookImg,
    projectUrl: "https://github.com/lukewaehner",
  },
] as const;

type ProjectProps = (typeof projectsData)[number] & {
  projectUrl?: string;
};

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "C++",
  "Java",
  "R",
  "Tableau",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Github",
] as const;
