import "./globals.css";
import type { Metadata } from "next";
import { Fraunces, Figtree, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import SiteBackground from "@/components/SiteBackground";
import ClearServiceWorker from "@/components/ClearServiceWorker";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Nishita Shah | Software Engineer",
  description:
    "Portfolio of Nishita Shah, CSE-AI at IGDTUW. Goldman Sachs, GSoC, ICPC, and SIH. Spring Boot, agentic AI, and interactive graphics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-blush font-sans text-ink antialiased">
        <Script id="theme-boot" strategy="beforeInteractive">
          {`try{if(localStorage.getItem("theme")==="dark"){document.documentElement.classList.add("dark")}}catch(e){}`}
        </Script>
        <ClearServiceWorker />
        <SiteBackground />
        {children}
      </body>
    </html>
  );
}
