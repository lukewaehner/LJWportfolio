import React from "react";
import { FaReact } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import RoShamBoImg from "@/public/RPSScreenshot-1.png";
import StockChartImg from "@/public/StockChart.png";
import SketchBookImg from "@/public/sketchbook.png";
import WealthLLM from "@/public/WealthLLManagement.png";
import BussingNews from "@/public/BussingNews.png";

function getOperatingSystem() {
  const platform = window.navigator.platform;
  const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];

  if (macosPlatforms.indexOf(platform) !== -1) {
    return "mac";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    return "windows";
  }
  return "other";
}

const os = getOperatingSystem();

const downloadUrlChart =
  os === "mac" ? "/StockChartDownload-MacOS.zip" : "/StockCharts-Windows.exe";

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
    title: "Guilford High School Graduate",
    location: "Guilford, CT",
    description:
      "I graduated with High Honors and a GPA of 4.0. I was member of the National and Spanish Honors Society, acting as Treasurer for the latter. Outside of school, I tutored students at Mathnasium, and was a member of the GHS Ski Team, and Jazz Ensemble.",
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
    location: "TBD",
    description:
      "I spend most days programming, it is truly the only thing I want to do day-in and day-out. I am currently learning Next.js and TypeScript to expand my web-application portfolio and skills.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Fullstack News Application",
    description:
      "Python scraper bots that scrape news articles and stores and displays them with MERN. Currently offline as proxies are expensive!",
    tags: ["Python", "MERN", "Fullstack"],
    imageUrl: BussingNews,
    projectUrl: "https://github.com/lukewaehner/BussingNews",
  },

  {
    title: "StockChart",
    description:
      "Stock Chart created for business school, built in Python and integrated into a web app with Flask module.",
    tags: ["Python", "Flask", "yFinance"],
    imageUrl: StockChartImg,
    projectUrl: "https://github.com/lukewaehner/StockCharts_Clone",
    downloadUrl: downloadUrlChart,
  },
  {
    title: "WealthLLManagement",
    description:
      "NLP Python bot that uses a pretrained LLM hooked to a pdf opener to give answer questions on financial documents.",
    tags: ["NLP AI", "PyTorch", "PyTesserect", "Py2PDF", "Streamlit"],
    imageUrl: WealthLLM,
    projectUrl: "https://github.com/lukewaehner/WealthLLManagement",
  },
  {
    title: "Rock Paper Scissors",
    description:
      "Front-end Heavy Rock Paper Scissors game with 3d parallax effect. Built with HTML, CSS, JS and uses framer-motion",
    tags: ["HTML", "Parallax-CSS", "JS", "Framer-Motion", "Fun"],
    imageUrl: RoShamBoImg,
    projectUrl: "https://lukewaehner.github.io/RoShamBo/",
  },
  {
    title: "Sketchbook",
    description:
      "A simple sketchbook powered by the simple three frontend languages. Using eventhandlers through JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "Fun", "Assignment"],
    imageUrl: SketchBookImg,
    projectUrl: "https://lukewaehner.github.io/SketchBoard/",
  },
] as const;

type ProjectProps = (typeof projectsData)[number] & {
  projectUrl?: string;
  downloadUrl: "";
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
  "TailwindCSS",
  "Sass",
  "Github",
  "Git",
] as const;
