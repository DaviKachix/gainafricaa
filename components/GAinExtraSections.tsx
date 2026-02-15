"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, MapPin, Globe, ArrowRight, Sparkles } from "lucide-react";

export default function GAiNExtraSections() {
  const reduceMotion = useReducedMotion();
  const easeOutSoft: any = [0.16, 1, 0.3, 1];

  const wrap = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: easeOutSoft },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#f5f5f5] py-16 sm:py-20 lg:py-24">
      {/* Subtle WP-style accents */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-blue-950/10 blur-3xl" />
        <div className="absolute -bottom-56 right-[-180px] h-[620px] w-[620px] rounded-full bg-blue-950/8 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(2,6,23,0.06),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-950 ring-1 ring-black/10 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-red-600/70" />
            Conference Overview
          </div>
        </div>

        {/* Horizontal scroll */}
        <motion.div
          variants={reduceMotion ? undefined : wrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-8"
        >
          <div
            className="
              flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory py-4
              -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8
              [scrollbar-width:thin]
              [scrollbar-color:rgba(2,6,23,0.30)_rgba(0,0,0,0)]
            "
          >
            {/* Card 1 */}
            <motion.article
              variants={reduceMotion ? undefined : card}
              className="
                flex-shrink-0 snap-center w-[88%] sm:w-[72%] md:w-[60%] lg:w-[48%]
                rounded-3xl bg-white/95 backdrop-blur
                ring-1 ring-black/10
                shadow-[0_26px_80px_-55px_rgba(0,0,0,0.45)]
                p-6 sm:p-8
                transition hover:-translate-y-1 hover:shadow-[0_34px_90px_-60px_rgba(0,0,0,0.55)]
              "
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl sm:text-2xl font-extrabold text-blue-950">
                  Why We’re Gathering
                </h3>

                <span className="inline-flex items-center gap-1 rounded-full bg-blue-950/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-950 ring-1 ring-black/10">
                  <Sparkles className="h-3.5 w-3.5" />
                  Focus
                </span>
              </div>

              <p className="mt-4 text-sm sm:text-base text-black/75 leading-relaxed">
                GAiN Tanzania 2026 is where <span className="font-semibold text-blue-950">we come together</span> as
                communicators, leaders, creatives, and digital missionaries with one shared goal — to strengthen how{" "}
                <span className="font-semibold text-blue-950">we use media and technology for mission</span>.
                <br />
                <br />
                This is not only about ideas. It’s about what{" "}
                <span className="font-semibold text-blue-950">you can take home and implement</span>. Together, we’ll
                build real plans that support the mission of the{" "}
                <span className="font-semibold text-blue-950">Seventh-day Adventist Church</span>.
              </p>

              <div className="mt-6 grid gap-4">
                <InfoRow
                  icon={<Calendar className="h-5 w-5 text-blue-950" />}
                  title="Dates"
                  text={
                    <>
                      April 1–4, 2026 <span className="text-black/40">•</span>{" "}
                      <span className="text-black/65">Pre-event: OneVoice27 Marathon — March 31</span>
                    </>
                  }
                />
                <InfoRow
                  icon={<MapPin className="h-5 w-5 text-blue-950" />}
                  title="Venue"
                  text="University of Arusha, Tanzania"
                />
                <InfoRow
                  icon={<Globe className="h-5 w-5 text-blue-950" />}
                  title="Theme"
                  text="Integrated for Mission — because when we work together, our impact multiplies."
                />
              </div>
            </motion.article>

            {/* Card 2 */}
            <motion.article
              variants={reduceMotion ? undefined : card}
              className="
                flex-shrink-0 snap-center w-[88%] sm:w-[72%] md:w-[60%] lg:w-[48%]
                rounded-3xl bg-white/95 backdrop-blur
                ring-1 ring-black/10
                shadow-[0_26px_80px_-55px_rgba(0,0,0,0.45)]
                p-6 sm:p-8
                transition hover:-translate-y-1 hover:shadow-[0_34px_90px_-60px_rgba(0,0,0,0.55)]
              "
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl sm:text-2xl font-extrabold text-blue-950">
                  Join Us and Take Part
                </h3>

                <span className="inline-flex items-center rounded-full bg-blue-950/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-950 ring-1 ring-black/10">
                  Action
                </span>
              </div>

              <p className="mt-4 text-sm sm:text-base text-black/75 leading-relaxed">
                We invite you to come prepared — not just to attend, but to participate.
                <br />
                <br />
                Bring your team. Bring your ideas. Bring your experience. Let’s learn with one another, collaborate
                closely, and build practical mission plans we can actually use.
                <br />
                <br />
                When we return home, we won’t just be inspired — we’ll be equipped.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="/register"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-2xl px-5 py-3 text-sm font-bold
                    bg-blue-950 text-white
                    shadow-[0_18px_45px_-28px_rgba(2,6,23,0.9)]
                    hover:bg-blue-900 transition
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-950/30
                  "
                >
                  Register Now <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="/events"
                  className="
                    inline-flex items-center justify-center
                    rounded-2xl px-5 py-3 text-sm font-semibold
                    bg-white text-blue-950 ring-1 ring-black/10
                    hover:bg-black/5 transition
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-950/25
                  "
                >
                  View Events
                </a>
              </div>

            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-black/5">
      <div className="mt-0.5 flex-shrink-0">{icon}</div>
      <div className="min-w-0">
        <div className="text-sm font-semibold text-blue-950">{title}</div>
        <div className="mt-0.5 text-sm text-black/70 leading-relaxed">{text}</div>
      </div>
    </div>
  );
}
