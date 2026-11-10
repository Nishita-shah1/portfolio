"use client";

import { useEffect, useState } from "react";

const petals = [
  { left: "8%", delay: "0s", duration: "16s", scale: 0.8 },
  { left: "22%", delay: "4s", duration: "19s", scale: 1.1 },
  { left: "47%", delay: "1.5s", duration: "14s", scale: 0.7 },
  { left: "68%", delay: "7s", duration: "18s", scale: 1 },
  { left: "84%", delay: "2.5s", duration: "21s", scale: 0.85 },
  { left: "93%", delay: "9s", duration: "15s", scale: 0.65 },
];

export default function SiteBackground() {
  const [pos, setPos] = useState({ x: 70, y: 18 });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const move = (event: PointerEvent) => {
      setPos({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#fff5f8]" />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(226,59,120,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(226,59,120,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-[#ffd6e6] blur-3xl" />
      <div className="absolute right-[-8rem] top-[28%] h-[26rem] w-[26rem] rounded-full bg-[#ffe4ef] blur-3xl" />
      <div className="absolute bottom-[-6rem] left-[20%] h-[22rem] w-[22rem] rounded-full bg-[#ffd0ea]/80 blur-3xl" />
      <div
        className="absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffb0cc]/45 blur-3xl transition-[left,top] duration-700 ease-out"
        style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
      />
      {petals.map((petal) => (
        <span
          key={petal.left}
          className="petal"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            width: `${14 * petal.scale}px`,
            height: `${18 * petal.scale}px`,
          }}
        />
      ))}
    </div>
  );
}
