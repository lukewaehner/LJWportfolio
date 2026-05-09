import StockChartImg from "@/public/StockChart.png";
import HFTLedgerImg from "@/public/rust-hft-book.png";
import BussingNews from "@/public/BussingNews.png";

// Edit to update the hero availability pill — e.g. "Currently at Smartleaf", "Open to internships · Summer 2027", etc.
export const status = "Backend Engineer @ Smartleaf";

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
      "Engineered tree-structured allocation reporting and a Cash Sweep automation engine spanning $110B AUM. Built a PG14 to PG18 A/B harness replaying ~1M portfolios to validate upgrade parity. Release master.",
    date: "Jan 2026 – Present",
  },
  {
    title: "Full Stack Software Engineer (Founder)",
    location: "Code Works, Boston, MA",
    description:
      "Built a Google Workspace and App Script CRM that cut onboarding 55%. Distributed to 100+ professionals serving hundreds of downstream clients across unified Sheets, Gmail, and Calendar workflows.",
    date: "May 2024 – Sep 2025",
  },
  {
    title: "Computer Science & Fintech Student",
    location: "Northeastern University, Boston, MA",
    description:
      "Dual degree in Computer Science and Fintech, 3.83/4.00 GPA. Dean's List, Manresa Scholar, Best Business Plan Award.",
    date: "Sep 2024 – Dec 2026",
  },
  {
    title: "Wealth Management Intern",
    location: "Riverside Financial, Riverside, CT",
    description:
      "Automated ETF data collection via Morningstar API and VBA, cutting manual retrieval 70%. Technical analysis (RSI, MACD) and risk assessment supporting $100M+ in retirement assets.",
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
    imageBackground: "bg-[#0f0c09] dark:bg-[#0f0c09]",
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
