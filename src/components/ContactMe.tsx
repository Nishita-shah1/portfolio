"use client";

import { useState } from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/content";

const links = [
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "Instagram", href: profile.instagram, icon: FaInstagram },
];

export default function ContactMe() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="px-5 pb-16 pt-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.2rem] border border-white bg-gradient-to-br from-white via-[#fff0f5] to-[#ffd6e6] p-8 shadow-petal sm:p-12">
        <p className="font-mono text-xs text-rose">// 06 contact</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">
          If it involves code, a deadline, or a leaderboard, I am probably already in.
        </h2>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full bg-rose px-5 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(226,59,120,0.28)] transition hover:-translate-y-0.5"
          >
            <FaEnvelope />
            {copied ? "Copied" : "Copy email"}
          </button>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-[#f6c1d4] bg-white/80 px-5 py-3 text-sm font-medium hover:border-rose"
          >
            {profile.email}
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-4 py-2 text-sm transition hover:-translate-y-1 hover:border-rose hover:text-rose"
            >
              <link.icon />
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-ink/45">
        Nishita Shah · {profile.degree}
      </p>
    </section>
  );
}
