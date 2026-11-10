"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { experiences } from "@/data/content";

export default function Experience() {
  const [open, setOpen] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stops = useRef<(HTMLSpanElement | null)[]>([]);
  const [parkTop, setParkTop] = useState<number | null>(null);

  useEffect(() => {
    const place = () => {
      if (open === null || !trackRef.current || !stops.current[open]) {
        setParkTop(null);
        return;
      }
      const track = trackRef.current.getBoundingClientRect();
      const stop = stops.current[open]!.getBoundingClientRect();
      setParkTop(stop.top - track.top);
    };
    place();
    const observer = new ResizeObserver(place);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", place);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", place);
    };
  }, [open]);

  return (
    <section id="experience" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs text-rose">// 02 experience</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl">Where the work happened</h2>

        <div ref={trackRef} className="relative mt-14">
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-line md:left-1/2" />
          <div
            className={`journey-bead absolute left-[7px] z-20 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-rose shadow-[0_0_16px_rgba(226,59,120,0.7)] md:left-1/2 ${
              parkTop !== null ? "is-parked" : ""
            }`}
            style={parkTop !== null ? { top: parkTop } : undefined}
          />

          <div className="space-y-5">
            {experiences.map((item, index) => {
              const isOpen = open === index;
              const onLeft = index % 2 === 0;
              return (
                <div
                  key={`${item.company}-${item.period}`}
                  className={`relative pl-8 md:w-[calc(50%-1.75rem)] md:pl-0 ${
                    onLeft ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
                  }`}
                >
                  <span
                    ref={(node) => {
                      stops.current[index] = node;
                    }}
                    className={`absolute top-7 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-blush ${
                      isOpen ? "bg-rose" : "bg-rose/45"
                    } left-0 md:left-auto ${onLeft ? "md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2"}`}
                  />

                  <article
                    className={`overflow-hidden rounded-[1.6rem] border bg-card/85 shadow-petal transition ${
                      isOpen ? "border-rose" : "border-line"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span>
                        <span className="inline-flex rounded-md bg-rose px-2.5 py-1 font-mono text-sm font-semibold tracking-tight text-white shadow-[0_8px_18px_rgba(226,59,120,0.28)]">
                          {item.company}
                        </span>
                        <span className="mt-2 block text-sm text-ink/75">{item.role}</span>
                        <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.14em] text-rose/80">
                          {item.period}
                        </span>
                      </span>
                      <span
                        className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium ${
                          isOpen
                            ? "border-rose bg-rose text-white"
                            : "border-line bg-wash text-rose"
                        }`}
                      >
                        {isOpen ? "Close" : "Open"}
                        <svg
                          viewBox="0 0 20 20"
                          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                          aria-hidden
                        >
                          <path
                            d="M7 4l6 6-6 6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="detail"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-line px-5 pb-5 pt-4">
                            <p className="font-mono text-xs text-rose">{`// ${item.place}`}</p>
                            <p className="mt-3 text-base text-ink/80">{item.summary}</p>
                            <ul className="mt-4 space-y-2">
                              {item.points.map((point) => (
                                <li key={point} className="flex gap-2 text-sm leading-relaxed text-ink/75">
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                            {(item.certificate || item.journal) && (
                              <div className="mt-4 flex flex-wrap gap-4">
                                {item.journal && (
                                  <a
                                    href={item.journal}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(event) => event.stopPropagation()}
                                    className="relative z-20 inline-flex text-sm font-medium text-rose hover:underline"
                                  >
                                    Read the GSoC journal
                                  </a>
                                )}
                                {item.certificate && (
                                  <a
                                    href={item.certificate}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(event) => event.stopPropagation()}
                                    className="relative z-20 inline-flex text-sm font-medium text-rose hover:underline"
                                  >
                                    View GSoC certificate
                                  </a>
                                )}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
