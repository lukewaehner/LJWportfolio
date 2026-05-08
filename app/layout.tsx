import Header from "@/components/header";
import "./globals.css";
import { Outfit, JetBrains_Mono } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-geist" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata = {
  title: "Luke Waehner | Portfolio",
  description:
    "Software engineer specializing in full-stack development and high-performance systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans bg-zinc-50 text-zinc-900 relative pt-28 sm:pt-36 dark:bg-zinc-950 dark:text-zinc-50`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
