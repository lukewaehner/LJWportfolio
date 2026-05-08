import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="mt-1 self-start inline-flex items-center gap-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
      disabled={pending}
    >
      {pending ? (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 dark:border-zinc-900/30 border-t-white dark:border-t-zinc-900" />
      ) : (
        <>
          Send message
          <FaPaperPlane className="text-xs opacity-70 group-hover:translate-x-0.5 transition-transform" />
        </>
      )}
    </button>
  );
}
