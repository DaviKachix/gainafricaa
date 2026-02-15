"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function OneVoiceSection() {
  const reduceMotion = useReducedMotion();
  const easeOutSoft: any = [0.16, 1, 0.3, 1];

  const logos = [
    { src: "/SDA-Logo.png", alt: "Seventh-day Adventist Church" },
    { src: "/icon.jpg", alt: "GAiN Tanzania" },
    { src: "/Hope Channel.png", alt: "Hope Channel" },
  ];

  const highlights = [
    "We speak with one voice across ministries and platforms.",
    "We strengthen digital evangelism and media excellence.",
    "We align our mission focus as we move toward 2027.",
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
      {/* Subtle WP-style background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 h-[520px] w-[860px] rounded-full bg-blue-950/5 blur-3xl" />
        <div className="absolute -bottom-28 right-[-120px] h-[420px] w-[420px] rounded-full bg-indigo-900/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(2,6,23,0.05),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Media Card */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: easeOutSoft }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_18px_55px_-30px_rgba(0,0,0,0.35)]">
              {/* ratio wrapper (WP-like featured image) */}
              <div className="relative aspect-[16/10]">
                <Image
                  src="/OneVoice.jpg"
                  alt="OneVoice27"
                  fill
                  priority={false}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* soft gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />
              </div>

              {/* caption bar */}
              <div className="flex items-center justify-between gap-3 px-5 py-4">
                <div className="text-sm font-semibold text-gray-900">OneVoice27</div>
                <div className="text-xs text-gray-500">A global call to unity</div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: easeOutSoft, delay: 0.06 }}
          >
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              One message. One mission. One voice.
            </h2>

            <p className="mt-4 text-[15.5px] sm:text-base leading-relaxed text-gray-700">
              OneVoice27 is a worldwide Adventist movement inviting all of us—leaders, media teams, churches,
              and creators—to work together in clear, unified communication. As we move toward 2027, we’re
              focusing on digital evangelism, stronger collaboration, and mission-first storytelling that reaches
              people where they are.
            </p>

            {/* highlights */}
            <ul className="mt-6 space-y-3">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-gray-700">
                  <span className="mt-1 h-5 w-5 flex-none rounded-full bg-blue-950/10 ring-1 ring-blue-950/15 grid place-items-center">
                    <span className="h-2 w-2 rounded-full bg-blue-950/60" />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* partner logos */}
            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Partners</div>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                {logos.map((logo, i) => (
                  <div
                    key={i}
                    className="h-12 w-12 rounded-full bg-white border border-black/10 shadow-sm overflow-hidden grid place-items-center"
                    title={logo.alt}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={72}
                      height={72}
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs (WP-standard, proper external links) */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.onevoice27.org"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
              >
                Learn more <ArrowUpRight className="h-4 w-4" />
              </a>

              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
