"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { skills } from "@/data/content";

export default function Skillset() {
  const [index, setIndex] = useState(0);
  const current = skills[index];
  const groups = [...new Set(skills.map((skill) => skill.group))];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % skills.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [index]);

  return (
    <section id="skills" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs text-rose">// 05 skills</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl">Skills</h2>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            {groups.map((group) => (
              <div key={group}>
                <p className="mb-3 font-mono text-xs text-ink/45">{group}</p>
                <div className="flex flex-wrap gap-2.5">
                  {skills
                    .filter((skill) => skill.group === group)
                    .map((skill) => {
                      const skillIndex = skills.findIndex((item) => item.name === skill.name);
                      const on = skillIndex === index;
                      return (
                        <button
                          key={skill.name}
                          type="button"
                          onClick={() => setIndex(skillIndex)}
                          className={`rounded-md px-3 py-1.5 font-mono text-sm ${
                            on
                              ? "bg-rose text-white"
                              : "border border-[#f6c1d4] bg-white/70 text-ink"
                          }`}
                        >
                          {skill.name}
                        </button>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>

          <div className="min-h-[11rem] overflow-hidden rounded-[2rem] border border-[#f6c1d4] bg-white/80 p-6 shadow-petal sm:p-8 lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
              >
                <p className="font-mono text-xs text-rose">{`// ${current.group.toLowerCase()}`}</p>
                <h3 className="mt-2 font-mono text-3xl text-rose">{current.name}</h3>
                <p className="mt-4 text-base leading-relaxed text-ink/75">{current.note}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
