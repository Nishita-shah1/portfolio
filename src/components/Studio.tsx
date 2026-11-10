"use client";

import Image from "next/image";
import Link from "next/link";
import { studies } from "@/data/content";

export default function Studio() {
  return (
    <section id="design" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs text-rose">// 04 design</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl">Interfaces and stories</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {studies.map((study) => {
            const card = (
              <article className="group h-full overflow-hidden rounded-[1.7rem] border border-line bg-card/80 shadow-petal">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="340px"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl">{study.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{study.text}</p>
                  <p className="mt-4 text-sm font-medium text-rose">
                    {study.external ? "Open Instagram" : "Read the study"}
                  </p>
                </div>
              </article>
            );

            if (study.external) {
              return (
                <a key={study.title} href={study.href} target="_blank" rel="noreferrer">
                  {card}
                </a>
              );
            }

            return (
              <Link key={study.title} href={study.href}>
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
