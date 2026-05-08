import React from "react";
import { FaChartLine, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import StockChartImg from "@/public/StockChart.png";
import HFTLedgerImg from "@/public/rust-hft-book.png";
import BussingNews from "@/public/BussingNews.png";

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
    title: "Full Stack Software Engineer",
    location: "Code Works, Boston, MA",
    description:
      "Developed custom CRM systems using Google Workspace APIs, reducing client onboarding time by 55% for 200+ clients. Built dynamic web interfaces and automated workflows integrating Google Sheets, Gmail, and Calendar for real-time data synchronization.",
    icon: React.createElement(FaReact),
    date: "May 2024 - Sep 2025",
  },
  {
    title: "Computer Science & Fintech Student",
    location: "Northeastern University, Boston, MA",
    description:
      "Pursuing dual degree in Computer Science and Fintech with 3.83 GPA. Dean's List student focused on algorithms, data structures, and systems programming. Built high-performance trading systems and full-stack applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - Dec 2026",
  },
  {
    title: "Wealth Management Intern",
    location: "Riverside Financial, CT",
    description:
      "Automated ETF data collection using Morningstar API and VBA, reducing manual retrieval time by 70%. Conducted technical analysis and portfolio risk assessment supporting $100M+ in assets.",
    icon: React.createElement(FaChartLine),
    date: "May 2023 - Aug 2023",
  },
  {
    title: "Finance Student",
    location: "Fordham University, Bronx, NY",
    description:
      "Earned B.S. in Finance with 3.9 GPA. Woolworth Scholar, Manresa Scholar, and Best Business Plan Award recipient. Research Director of Computer Science Society. Laid foundation for transition into software engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Rust Order Book Exchange",
    description:
      "High-frequency trading engine processing 200k+ trades/sec with 13μs latency. Features async REST APIs and WebSocket trade streaming.",
    tags: ["Rust", "Axum", "Tokio", "WebSockets", "HFT"],
    imageUrl: HFTLedgerImg,
    projectUrl: "https://github.com/lukewaehner/HFT-Ledger",
  },
  {
    title: "Stockchart Pro",
    description:
      "Real-time stock analysis app with advanced technical indicators (RSI, MACD, Moving Averages). Built with Python, Dash, and Plotly with standalone executable distribution.",
    tags: ["Python", "Dash", "Plotly", "yFinance", "PyInstaller"],
    imageUrl: StockChartImg,
    projectUrl: "https://github.com/lukewaehner/StockCharts_Clone",
    downloadUrls: {
      mac: "/StockChartDownload-MacOS.zip",
      windows: "/StockCharts-Windows.exe",
    },
  },
  {
    title: "Full Stack News Consolidator",
    description:
      "Multi-source business news aggregator. Uses web scraping and rotating proxies. Features REST APIs and MongoDB storage for persistent news data.",
    tags: ["Python", "Express.js", "MongoDB", "React", "Web Scraping"],
    imageUrl: BussingNews,
    projectUrl: "https://github.com/lukewaehner/NewsAggregator",
  },
] as const;

export const skillsData = [
  "Rust",
  "Python",
  "TypeScript",
  "JavaScript",
  "Java",
  "C/C++",
  "React",
  "Node.js",
  "Express.js",
  "Next.js",
  "MongoDB",
  "SQLite",
  "HTML/CSS",
  "TailwindCSS",
  "Git",
  "REST APIs",
  "WebSockets",
  "Axum",
  "Tokio",
] as const;
