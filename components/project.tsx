"use client";

import { useEffect, useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectData = (typeof projectsData)[number];
type ProjectProps = ProjectData & {
  projectUrl?: string;
  downloadUrls?: { mac: string; windows: string };
};

function detectOS(): "mac" | "windows" | "other" {
  const platform = window.navigator.platform;
  if (["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(platform)) return "mac";
  if (["Win32", "Win64", "Windows", "WinCE"].includes(platform)) return "windows";
  return "other";
}

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  downloadUrls,
}: ProjectProps) {
  const [downloadUrl, setDownloadUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!downloadUrls) return;
    const os = detectOS();
    setDownloadUrl(os === "windows" ? downloadUrls.windows : downloadUrls.mac);
  }, [downloadUrls]);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <article className="group bg-white dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-zinc-900/[0.05] dark:hover:shadow-zinc-900/40 transition-all duration-300 flex flex-col sm:flex-row sm:group-even:flex-row-reverse">

        {/* Image panel */}
        <div className="relative w-full aspect-video sm:aspect-auto sm:w-64 shrink-0 self-stretch overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={imageUrl}
            alt={title}
            fill
            quality={90}
            className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between gap-5 p-7 flex-1">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {title}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-4">
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

            <div className="flex items-center gap-5">
              {projectUrl && (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-1.5"
                >
                  View on GitHub
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
              {downloadUrl && (
                <a
                  href={downloadUrl}
                  download
                  className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors inline-flex items-center gap-1.5"
                >
                  Download
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M6 1v7M3 5l3 3 3-3M2 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  );
}
