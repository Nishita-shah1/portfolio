"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const highlights = [
  {
    kind: "count" as const,
    value: 21,
    prefix: "Top ",
    label: "CS finalist at the Goldman Sachs India Hackathon, from 10,000+ people. The only one selected from IGDTUW.",
  },
  {
    kind: "word" as const,
    value: "SIH",
    label: "2024 first runner-up. Top 0.02% of 299,352 students, on a geo-referenced fisheries platform.",
  },
  {
    kind: "word" as const,
    value: "ICPC",
    label: "Amritapuri regionals 2025 with Team CPHOLIC, qualified through the online prelims.",
  },
  {
    kind: "word" as const,
    value: "GSoC",
    label: "Contributor, Google Summer of Code 2026, with the R Project for Statistical Computing.",
    href: "/certificate",
  },
];

function CountUp({ to }: { to: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (media.matches) {
          setValue(to);
          return;
        }
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 1100);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(Math.round(eased * to));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [to]);

  return <span ref={ref}>{value.toLocaleString("en-IN")}</span>;
}

export default function About() {
  return (
    <section id="about" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs text-rose">// 01 about</p>
        <div className="mt-4 max-w-4xl">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Building ambitious things, solving hard problems, and pushing one more commit before calling it a day.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/75 sm:text-lg">
            <p>
              I&apos;m a software engineer, founder, and public speaker who loves turning ideas
              into products that make an impact. Currently pursuing CSE-AI at IGDTUW, I enjoy
              building at the intersection of software engineering, artificial intelligence,
              and innovation.
            </p>
            <p>
              From developing Spring Boot microservices at{" "}
              <span className="font-semibold text-rose">Goldman Sachs</span> and building
              AI-powered video pipelines for the{" "}
              <span className="font-semibold text-rose">Ministry of Defence</span> to
              contributing to open-source graphics through{" "}
              <span className="font-semibold text-rose">Google Summer of Code</span>, I&apos;ve
              explored technology from multiple perspectives.
            </p>
            <p>
              Beyond writing code, I lead teams, take ideas from a blank page to real-world
              products, and bring people together through leadership and public speaking. I
              believe in building things that solve real problems, creating opportunities, and
              turning ambitious ideas into reality.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const body = (
              <>
                <p className="font-display text-4xl text-rose">
                  {item.kind === "count" ? (
                    <>
                      {item.prefix}
                      <CountUp to={item.value} />
                    </>
                  ) : (
                    item.value
                  )}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.label}</p>
                {"href" in item && item.href && (
                  <p className="mt-3 text-xs font-medium text-rose">Open certificate</p>
                )}
              </>
            );
            const motionProps = {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.4 },
              transition: { delay: index * 0.06 },
              whileHover: { y: -6 },
              className: "rounded-3xl border border-white/80 bg-white/75 p-5 shadow-petal",
            };
            if ("href" in item && item.href) {
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  {...motionProps}
                >
                  {body}
                </motion.a>
              );
            }
            return (
              <motion.article key={item.label} {...motionProps}>
                {body}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
