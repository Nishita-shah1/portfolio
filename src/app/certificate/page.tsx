import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GSoC 2026 certificate | Nishita Shah",
  description: "Google Summer of Code 2026 contributor certificate for Nishita Shah.",
};

export default function CertificatePage() {
  return (
    <main className="min-h-screen px-5 py-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="font-mono text-sm text-rose">
          back()
        </Link>
        <h1 className="mt-4 font-display text-4xl text-ink">Google Summer of Code 2026</h1>
        <p className="mt-2 text-ink/70">
          Contributor certificate for Nishita Shah, R Project for Statistical Computing.
        </p>
        <a
          href="/gsoc-2026-certificate.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex rounded-full bg-rose px-4 py-2 text-sm font-medium text-white"
        >
          Open the PDF
        </a>
        <object
          data="/gsoc-2026-certificate.pdf"
          type="application/pdf"
          className="mt-6 h-[80vh] w-full rounded-2xl border border-line bg-card"
        >
          <p className="p-6 text-ink/70">
            The preview could not load. Use Open the PDF above.
          </p>
        </object>
      </div>
    </main>
  );
}
