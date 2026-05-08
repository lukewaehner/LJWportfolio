"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { projectsData } from "@/lib/data";

type ProjectData = (typeof projectsData)[number];
type ProjectProps = ProjectData & {
  projectUrl?: string;
  downloadUrls?: { mac: string; windows: string };
  imageBackground?: string;
  index: number;
  featured?: boolean;
};

function detectOS(): "mac" | "windows" | "other" {
  if (typeof window === "undefined") return "other";
  const p = window.navigator.platform;
  if (["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(p)) return "mac";
  if (["Win32", "Win64", "Windows", "WinCE"].includes(p)) return "windows";
  return "other";
}

const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowDown = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M6 1v7M3 5l3 3 3-3M2 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const cardBase =
  "group bg-white dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800 rounded-2xl overflow-hidden " +
  "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] " +
  "hover:-translate-y-0.5 " +
  "hover:shadow-[0_4px_6px_rgba(0,0,0,0.04),0_16px_40px_rgba(0,0,0,0.10),0_1px_0_rgba(0,0,0,0.02)] " +
  "dark:hover:shadow-[0_4px_6px_rgba(0,0,0,0.12),0_16px_40px_rgba(0,0,0,0.40),0_1px_0_rgba(0,0,0,0.06)]";

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  imageBackground,
  projectUrl,
  downloadUrls,
  index,
  featured = false,
}: ProjectProps) {
  const [downloadUrl, setDownloadUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!downloadUrls) return;
    const os = detectOS();
    setDownloadUrl(os === "windows" ? downloadUrls.windows : downloadUrls.mac);
  }, [downloadUrls]);

  const ordinal = String(index + 1).padStart(2, "0");

  const TagList = () => (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li
          key={tag}
          className="font-mono text-[0.58rem] uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-700 px-2.5 py-1 rounded"
        >
          {tag}
        </li>
      ))}
    </ul>
  );

  const Links = () => (
    <div className="flex items-center gap-5">
      {projectUrl && (
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-1.5"
        >
          View on GitHub
          <ArrowUpRight />
        </a>
      )}
      {downloadUrl && (
        <a
          href={downloadUrl}
          download
          className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors inline-flex items-center gap-1.5"
        >
          Download
          <ArrowDown />
        </a>
      )}
    </div>
  );

  if (featured) {
    return (
      <article className={`${cardBase} flex flex-col sm:grid sm:grid-cols-[3fr_2fr] sm:items-start`}>
        {/* Image — fixed 16:9 frame; any extra row height shows card surface, not slot bg */}
        <div className={`relative w-full aspect-video overflow-hidden ${imageBackground ?? "bg-zinc-100 dark:bg-zinc-800"}`}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            quality={90}
            sizes="(min-width: 640px) 60vw, 100vw"
            className="object-contain group-hover:scale-[1.04] transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between gap-6 p-7 sm:p-8">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
              {ordinal}
            </span>
            <h3 className="text-2xl font-bold tracking-tight leading-[1.15] text-zinc-900 dark:text-zinc-50">
              {title}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <TagList />
            <Links />
          </div>
        </div>
      </article>
    );
  }

  /* Standard card: image top, content below — used in the 2-col grid */
  return (
    <article className={`${cardBase} flex flex-col`}>
      {/* Image */}
      <div className={`relative w-full aspect-video overflow-hidden ${imageBackground ?? "bg-zinc-100 dark:bg-zinc-800"}`}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          quality={90}
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-contain group-hover:scale-[1.04] transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between gap-5 p-6 flex-1">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
            {ordinal}
          </span>
          <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {title}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <TagList />
          <Links />
        </div>
      </div>
    </article>
  );
}
