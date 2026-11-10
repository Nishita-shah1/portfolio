"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { marquee, profile, roles } from "@/data/content";

const chips = [
  { label: "Goldman Sachs", detail: "Summer 2026" },
  { label: "GSoC", detail: "2026" },
  { label: "ICPC", detail: "Regionals ’25" },
  { label: "SIH", detail: "Runner-up ’24" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % roles.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative px-5 pb-8 pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-card/70 px-3 py-1 font-mono text-xs text-rose"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-rose" />
            {profile.school} · CSE-AI ’27
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="font-display text-6xl leading-[0.95] text-ink sm:text-7xl lg:text-8xl"
          >
            Nishita
            <span className="block text-rose">Shah</span>
          </motion.h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80 sm:text-xl">
            I build{" "}
            <span className="relative inline-grid overflow-hidden align-bottom text-rose">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[index]}
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -18, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="col-start-1 row-start-1 whitespace-nowrap font-medium"
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
              <span className="invisible col-start-1 row-start-1 whitespace-nowrap">
                interfaces people enjoy using
              </span>
            </span>
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
            I write code. I lead teams. I build products. And I turn ideas into things that matter.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-rose px-5 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(226,59,120,0.3)] transition hover:-translate-y-0.5 hover:bg-rose-deep"
            >
              See the work
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line bg-card/80 px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-rose"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line bg-card/80 px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-rose"
            >
              GitHub
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="relative mx-auto h-[420px] w-full max-w-md"
        >
          <div className="spin-slow absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-rose/70" />
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[250px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border-4 border-card shadow-petal">
            <Image
              src="/me.jpg"
              alt="Portrait of Nishita Shah"
              fill
              priority
              className="object-cover object-[center_15%]"
              sizes="250px"
            />
          </div>

          {chips.map((chip, chipIndex) => {
            const positions = [
              "left-0 top-8",
              "right-0 top-16",
              "bottom-16 left-0",
              "bottom-6 right-2",
            ];
            return (
              <div
                key={chip.label}
                className={`drift absolute ${positions[chipIndex]} rounded-2xl border border-line bg-card/85 px-3 py-2 shadow-petal backdrop-blur`}
                style={{ animationDelay: `${chipIndex * 0.6}s` }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-rose">{chip.detail}</p>
                <p className="font-mono text-sm font-semibold">{chip.label}</p>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="marquee mx-auto mt-16 max-w-6xl overflow-hidden rounded-full border border-line bg-card/60 py-3">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((item, itemIndex) => (
            <span key={`${item}-${itemIndex}`} className="mx-4 text-sm text-ink/70">
              {item}
              <span className="ml-8 text-rose">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
