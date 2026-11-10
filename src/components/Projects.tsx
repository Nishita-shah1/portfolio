"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useRef, useState, type MouseEvent } from "react";
import { projects, type ProjectCategory } from "@/data/content";

const filters: ProjectCategory[] = ["All", "AI", "Web", "Systems"];

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return projects.filter((project) => {
      const inFilter = filter === "All" || project.category === filter;
      const inQuery =
        needle.length === 0 ||
        project.name.toLowerCase().includes(needle) ||
        project.blurb.toLowerCase().includes(needle) ||
        project.tags.some((tag) => tag.toLowerCase().includes(needle));
      return inFilter && inQuery;
    });
  }, [filter, query]);

  return (
    <section id="projects" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs text-rose">// 03 projects</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Things with a repo</h2>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((item) => {
              const on = item === filter;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className="relative rounded-md px-4 py-2 font-mono text-sm"
                >
                  {on && (
                    <motion.span
                      layoutId="project-filter"
                      className="absolute inset-0 rounded-md bg-rose"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className={`relative z-10 ${on ? "text-white" : "text-ink/75"}`}>{item}</span>
                </button>
              );
            })}
          </div>
          <label className="relative block w-full lg:w-72">
            <span className="sr-only">Search projects</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search name, stack, or idea"
              className="w-full rounded-md border border-line bg-card/80 px-4 py-2.5 font-mono text-sm outline-none ring-rose/30 placeholder:text-ink/40 focus:ring-2"
            />
          </label>
        </div>

        <p className="mt-4 text-xs uppercase tracking-[0.16em] text-ink/45">
          Showing {visible.length} of {projects.length}
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <TiltCard key={project.name} project={project} />
            ))}
          </AnimatePresence>
        </div>

        {visible.length === 0 && (
          <p className="mt-10 rounded-3xl border border-dashed border-line bg-card/60 px-6 py-10 text-center text-ink/70">
            Nothing matched. Clear the search, or try another filter.
          </p>
        )}
      </div>
    </section>
  );
}

function TiltCard({
  project,
}: {
  project: {
    name: string;
    blurb: string;
    category: string;
    tags: string[];
    github?: string;
    live?: string;
    points?: string[];
  };
}) {
  const ref = useRef<HTMLElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (event: MouseEvent<HTMLElement>) => {
    const node = ref.current;
    if (!node) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    setTilt({ x: (py - 0.5) * -8, y: (px - 0.5) * 10 });
  };

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      className="group relative overflow-hidden rounded-[1.7rem] border border-line bg-card/80 p-6 shadow-petal transition-shadow hover:shadow-[0_22px_50px_rgba(226,59,120,0.2)]"
    >
      <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-rose/15 blur-2xl transition group-hover:bg-rose/25" />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] text-rose">{`// ${project.category.toLowerCase()}`}</p>
          <h3 className="mt-1 font-display text-3xl">{project.name}</h3>
        </div>
        {project.live && (
          <span className="rounded-full bg-wash px-2.5 py-1 text-[11px] font-medium text-rose">
            Live
          </span>
        )}
      </div>
      <p className="relative mt-4 text-sm leading-relaxed text-ink/75">{project.blurb}</p>
      {project.points && (
        <ul className="relative mt-3 space-y-2">
          {project.points.map((point) => (
            <li key={point} className="flex gap-2 text-sm leading-relaxed text-ink/75">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="relative mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-md bg-wash px-2.5 py-1 font-mono text-xs text-ink/70">
            {tag}
          </span>
        ))}
      </div>
      <div className="relative mt-6 flex gap-4 text-sm font-medium">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="text-rose hover:underline">
            GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="text-rose hover:underline">
            Live
          </a>
        )}
      </div>
    </motion.article>
  );
}
