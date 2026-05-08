"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full max-w-xl scroll-mt-28"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-zinc-500 dark:text-zinc-400 text-[0.95rem] -mt-4 mb-8 max-w-[52ch]">
        Reach me directly at{" "}
        <a
          href="mailto:luke.waehner@gmail.com"
          className="text-zinc-900 dark:text-zinc-100 underline underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          luke.waehner@gmail.com
        </a>{" "}
        or use the form below.
      </p>

      <form
        className="flex flex-col gap-3"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="senderEmail"
            className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-500"
          >
            Your email
          </label>
          <input
            id="senderEmail"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="you@example.com"
            className="h-12 px-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-500"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={5000}
            placeholder="What&apos;s on your mind?"
            className="h-44 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all resize-none"
          />
        </div>

        <SubmitBtn />
      </form>
    </motion.section>
  );
}
