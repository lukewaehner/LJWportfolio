import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
          Luke Waehner
        </p>
        <p className="text-xs text-zinc-400 dark:text-zinc-600">
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
