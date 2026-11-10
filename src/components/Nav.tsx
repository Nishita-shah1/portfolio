"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function toggleTheme() {
  const root = document.documentElement;
  const next = !root.classList.contains("dark");
  root.classList.toggle("dark", next);
  localStorage.setItem("theme", next ? "dark" : "light");
}

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Design", href: "#design" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? window.scrollY / height : 0);
      setScrolled(window.scrollY > 12);

      const current = navItems
        .map((item) => item.href.slice(1))
        .find((id) => {
          const element = document.getElementById(id);
          if (!element) return false;
          const rect = element.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom > 140;
        });
      if (current) setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/75 shadow-petal backdrop-blur-xl" : "bg-card/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="#top" className="font-mono text-lg tracking-tight text-rose">
          ns.
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const on = item.href.slice(1) === active;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-1.5 font-mono text-xs transition ${
                  on
                    ? "bg-rose text-white shadow-[0_8px_20px_rgba(226,59,120,0.28)]"
                    : "text-ink/80 hover:bg-wash"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] tracking-wide text-ink/70">
            <span className="dark:hidden">light mode</span>
            <span className="hidden dark:inline">dark mode</span>
          </span>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Switch color theme"
            className="theme-switch"
          >
            <span className="theme-knob">
              <svg viewBox="0 0 24 24" className="theme-icon theme-sun" aria-hidden>
                <circle cx="12" cy="12" r="4" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
                </g>
              </svg>
              <svg viewBox="0 0 24 24" className="theme-icon theme-moon" aria-hidden>
                <path
                  fill="currentColor"
                  d="M16.5 2.5a9 9 0 1 0 5 12.2A7.2 7.2 0 0 1 16.5 2.5z"
                />
              </svg>
            </span>
          </button>
          <button
            type="button"
            className="rounded-full border border-line px-3 py-1.5 text-sm md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-card/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 font-mono text-sm hover:bg-wash"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="h-[3px] w-full bg-wash">
        <div
          className="h-full bg-gradient-to-r from-[#f9a8d4] to-rose transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </header>
  );
}
