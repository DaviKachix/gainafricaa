"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function MissionMediaSection() {
  const reduceMotion = useReducedMotion();

  const partners = [
    { title: "Hope Channel", desc: "Global faith-based television network." },
    { title: "Adventist World Radio", desc: "Mission-driven broadcast outreach." },
    { title: "Adventist News Network", desc: "Official news and mission updates." },
  ];

  const logos = [
    { src: "/SDA-Logo.png", alt: "SDA" },
    { src: "/Hope Channel.png", alt: "Hope Channel" },
    { src: "/icon.jpg", alt: "GAiN" },
  ];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-24">
      {/* WP-style background accents */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-3xl" />
        <div className="absolute -bottom-40 right-[-140px] h-[520px] w-[520px] rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(2,6,23,0.06),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Content */}
          <motion.div
            variants={reduceMotion ? undefined : container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.45 }}
          >
            <motion.div variants={reduceMotion ? undefined : item}>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-gray-800 ring-1 ring-black/10 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600/70" />
                Mission Media
              </div>

              <h2 className="mt-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
                Partners in Mission Media
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-700">
                GAiN Tanzania strengthens collaboration across Adventist media platforms to advance gospel
                communication through innovation and excellence.
              </p>
            </motion.div>

            {/* Partner cards (cleaner, WP-like) */}
            <motion.div
              variants={reduceMotion ? undefined : item}
              className="mt-7 grid gap-3 sm:grid-cols-2"
            >
              {partners.map((p, i) => (
                <div
                  key={i}
                  className="rounded-3xl bg-white/80 p-4 ring-1 ring-black/10 shadow-[0_18px_55px_-40px_rgba(0,0,0,0.25)] backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_-45px_rgba(0,0,0,0.35)]"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-900/60" />
                    <div>
                      <h3 className="text-sm font-extrabold text-gray-900">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-black/10 shadow-[0_26px_80px_-55px_rgba(0,0,0,0.45)]">
              <Image
                src="/bible-laptop.jpg"
                alt="Digital Mission"
                width={1200}
                height={800}
                className="h-[320px] w-full object-cover sm:h-[380px] lg:h-[420px]"
                priority
              />
              {/* subtle overlay for readability + WP vibe */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            {/* small caption badge */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-gray-700 ring-1 ring-black/10 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600/70" />
              Digital mission through media & innovation
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
