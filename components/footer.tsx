import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4">
      <div className="max-w-4xl 2xl:max-w-6xl min-[1920px]:max-w-[1400px] mx-auto flex items-center justify-between">
        <p className="text-xs 2xl:text-sm min-[1920px]:text-base font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Luke Waehner
        </p>
        <p className="text-xs 2xl:text-sm min-[1920px]:text-base text-zinc-500 dark:text-zinc-400">
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
