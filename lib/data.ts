import React from "react";
import { FaChartLine, FaReact, FaServer } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import StockChartImg from "@/public/StockChart.png";
import HFTLedgerImg from "@/public/rust-hft-book.png";
import BussingNews from "@/public/BussingNews.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Backend Software Engineer",
    location: "Smartleaf, Boston, MA",
    description:
      "Engineered tree-structured portfolio allocation reporting and a Cash Sweep automation system selecting target money market funds across $110B in AUM. Built a PostgreSQL A/B testing harness replaying ~1M portfolios against PG14 and PG18 in parallel to validate parity before upgrade. Serve as release master and lead weekly incident triage.",
    icon: React.createElement(FaServer),
    date: "Jan 2026 – Present",
  },
  {
    title: "Full Stack Software Engineer (Founder)",
    location: "Code Works, Boston, MA",
    description:
      "Developed custom CRM systems using Google Workspace APIs and App Script that automated onboarding, scheduling, and reporting — reducing setup time by 55%. Later distributed to 100+ professionals serving hundreds of downstream clients across unified Sheets, Gmail, and Calendar workflows.",
    icon: React.createElement(FaReact),
    date: "May 2024 – Sep 2025",
  },
  {
    title: "Computer Science & Fintech Student",
    location: "Northeastern University, Boston, MA",
    description:
      "Pursuing dual degree in Computer Science and Fintech with a 3.83/4.00 GPA. Dean's List, Manresa Scholar, and Best Business Plan Award recipient. Coursework spans algorithms, databases, computer systems, mobile development, and fintech innovation.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 – Dec 2026",
  },
  {
    title: "Wealth Management Intern",
    location: "Riverside Financial, Riverside, CT",
    description:
      "Automated ETF data collection by integrating the Morningstar API with VBA and Excel, reducing manual retrieval time by 70%. Conducted technical analysis (RSI, MACD) and portfolio risk assessment supporting $100M+ in retirement assets, delivering daily market insights to senior advisors.",
    icon: React.createElement(FaChartLine),
    date: "May 2023 – Aug 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Rust Order Book Exchange",
    description:
      "Exchange-simulation platform with a lock-free matching engine processing 1.3M orders/sec at sub-microsecond latency. Features async REST/WebSocket APIs for order flow and live book snapshots, validated against 200M+ orders/min benchmarking workloads.",
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
      "Multi-source business news aggregator using web scraping and rotating proxies. Features REST APIs and MongoDB storage for persistent news data.",
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
  "Swift",
  "R",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Electron",
  "MongoDB",
  "SQLite",
  "HTML/CSS",
  "TailwindCSS",
  "AWS",
  "Git",
  "CI/CD Pipelines",
  "IntelliJ",
  "REST APIs",
  "WebSockets",
  "Axum",
  "Tokio",
] as const;
