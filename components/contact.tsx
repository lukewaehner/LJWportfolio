"use client";

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
      className="mb-20 sm:mb-28 w-full max-w-4xl 2xl:max-w-6xl min-[1920px]:max-w-[1400px] scroll-mt-28"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.1fr] gap-12 sm:gap-16 border-t border-zinc-200 dark:border-zinc-800 pt-10">

        {/* Left — context and direct email */}
        <div className="flex flex-col gap-6">
          <div>
            <motion.span
              className="inline-block font-mono text-[0.65rem] 2xl:text-[0.78rem] min-[1920px]:text-[0.9rem] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-3"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              Get in Touch
            </motion.span>
            <motion.h2
              className="text-[clamp(2.25rem,5vw,3rem)] 2xl:text-[clamp(3rem,5vw,4.5rem)] min-[1920px]:text-[clamp(4rem,5vw,5.5rem)] font-bold leading-[1.1] tracking-[-0.04em]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              Contact me
            </motion.h2>
          </div>

          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <p className="text-zinc-500 dark:text-zinc-400 text-[1rem] 2xl:text-[1.15rem] min-[1920px]:text-[1.3rem] leading-relaxed max-w-[38ch] 2xl:max-w-[44ch] min-[1920px]:max-w-[50ch]">
              Available for co-op roles starting July 2026. Open to full-stack,
              systems, and fintech engineering positions.
            </p>

            <a
              href="mailto:luke.waehner@gmail.com"
              className="group inline-flex items-center gap-2 2xl:gap-2.5 min-[1920px]:gap-3 text-zinc-900 dark:text-zinc-100 font-medium text-[0.95rem] 2xl:text-[1.1rem] min-[1920px]:text-[1.25rem] hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <span className="font-mono text-[0.65rem] 2xl:text-[0.78rem] min-[1920px]:text-[0.9rem] uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400 group-hover:text-blue-500 dark:group-hover:text-blue-500 transition-colors duration-200">
                Email
              </span>
              luke.waehner@gmail.com
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right — form */}
        <motion.form
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          action={async (formData) => {
            const { error } = await sendEmail(formData);
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
              className="font-mono text-[0.65rem] 2xl:text-[0.78rem] min-[1920px]:text-[0.9rem] uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
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
              className="h-12 2xl:h-14 min-[1920px]:h-16 px-4 2xl:px-5 min-[1920px]:px-6 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-sm 2xl:text-base min-[1920px]:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="font-mono text-[0.65rem] 2xl:text-[0.78rem] min-[1920px]:text-[0.9rem] uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              maxLength={5000}
              placeholder="What's on your mind?"
              className="h-40 2xl:h-48 min-[1920px]:h-56 p-4 2xl:p-5 min-[1920px]:p-6 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-sm 2xl:text-base min-[1920px]:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all resize-none"
            />
          </div>

          <SubmitBtn />
        </motion.form>

      </div>
    </motion.section>
  );
}
