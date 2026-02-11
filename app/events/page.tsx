"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Flag, Clock, Mic } from "lucide-react";

const logos = [
  { src: "/icon.jpg", alt: "GAiN Africa" },
  { src: "/OneVoice27.jpeg", alt: "OneVoice27" },
  { src: "/SDA-Logo.png", alt: "Seventh-day Adventist" },
  { src: "/Hope Channel.png", alt: "Hope Channel" },
];

export default function EventsPage() {
  return (
    <main className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-slate-900/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(2,6,23,0.06),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-black/5 px-3 py-1.5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-gray-700">
              GAiN Africa 2026 • Events
            </span>
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900">
            Events & Program
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed">
            Explore the pre-event experience and the main conference days. Our sessions are designed for
            <span className="font-semibold text-gray-900"> mission impact</span>,{" "}
            <span className="font-semibold text-blue-900">media excellence</span>, and{" "}
            <span className="font-semibold text-gray-900">collaboration</span>.
          </p>

          {/* Logos row */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-5">
            {logos.map((l, idx) => (
              <div
                key={idx}
                className="h-14 w-14 sm:h-16 sm:w-16 rounded-full overflow-hidden bg-white/80 ring-1 ring-black/10 shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
                title={l.alt}
              >
                <Image
                  src={l.src}
                  alt={l.alt}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover scale-110"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="h-11 rounded-2xl px-6 bg-blue-900 hover:bg-blue-900/90 font-semibold">
              <Link href="/register" className="inline-flex items-center gap-2">
                Register <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-11 rounded-2xl px-6 bg-white/60 border-black/10 hover:bg-white font-semibold"
            >
              <Link href="/resources">Conference Resources</Link>
            </Button>
          </div>
        </motion.div>

        {/* PRE-EVENT: OneVoice Marathon */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="mt-14 sm:mt-16"
        >
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* Image card (uses your local file link) */}
            <a
              href="/OneVoice27.jpeg"
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-3xl overflow-hidden bg-black shadow-[0_18px_60px_rgba(0,0,0,0.18)] ring-1 ring-black/10"
              aria-label="Open OneVoice Marathon image"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/55" />
              <Image
                src="/Marathon27.png"
                alt="OneVoice Marathon Pre-Event"
                width={1200}
                height={800}
                className="h-[320px] sm:h-[380px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                priority
              />

              {/* overlay badges */}
              <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-bold tracking-wide text-gray-900 ring-1 ring-black/10">
                  Pre-Event
                </span>
                <span className="rounded-full bg-blue-900/90 px-3 py-1 text-[11px] font-bold tracking-wide text-white ring-1 ring-white/10">
                  OneVoice Marathon
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-2xl bg-white/10 backdrop-blur ring-1 ring-white/15 p-4">
                  <div className="flex items-center gap-2 text-white/90">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-semibold">March 31, 2026</span>
                  </div>
                  <p className="mt-2 text-white/85 text-sm leading-relaxed">
                    A dedicated pre-event experience to prepare hearts and teams for the conference week.
                  </p>
                </div>
              </div>
            </a>

            {/* Text card */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-900/10 ring-1 ring-blue-900/15 px-3 py-1.5">
                <Flag className="h-4 w-4 text-blue-900" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-blue-900">
                  OneVoice Marathon (Pre-Event)
                </span>
              </div>

              <h2 className="mt-4 text-2xl sm:text-3xl font-black tracking-tight text-gray-900">
                Pre-Event • OneVoice Marathon
              </h2>

              <p className="mt-3 text-gray-700 leading-relaxed">
                Join the OneVoice Marathon as we unify in purpose and mission. This pre-event sets the tone for the
                conference—strengthening connection, vision, and readiness for impact.
              </p>

              <div className="mt-5 space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-900" />
                  <span>
                    <span className="font-semibold text-gray-900">Date:</span> March 31, 2026
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-900" />
                  <span>
                    <span className="font-semibold text-gray-900">Location:</span> University of Arusha, Arusha, Tanzania
                  </span>
                </div>
              </div>

              {/* Extra logos (more “logo presence”) */}
              <div className="mt-6 flex flex-wrap gap-3">
                {logos.concat(logos).slice(0, 6).map((l, idx) => (
                  <div
                    key={idx}
                    className="h-12 w-12 rounded-full overflow-hidden bg-white ring-1 ring-black/10 shadow-sm"
                    title={l.alt}
                  >
                    <Image
                      src={l.src}
                      alt={l.alt}
                      width={70}
                      height={70}
                      className="h-full w-full object-cover scale-110"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Button asChild className="h-11 rounded-2xl px-6 bg-blue-900 hover:bg-blue-900/90 font-semibold">
                  <Link href="/register" className="inline-flex items-center gap-2">
                    Join Pre-Event <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-2xl px-6 bg-white/60 border-black/10 hover:bg-white font-semibold"
                >
                  {/* This is the "link to image" request */}
                  <a href="/OneVoice27.jpeg" target="_blank" rel="noreferrer">
                    View Poster Image
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* MAIN EVENT: April 1–4 */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="mt-14 sm:mt-16"
        >
          <div className="rounded-3xl bg-white/90 ring-1 ring-black/10 shadow-[0_16px_50px_rgba(0,0,0,0.10)] overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="text-left">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gray-900/5 ring-1 ring-black/10 px-3 py-1.5">
                    <Mic className="h-4 w-4 text-blue-900" />
                    <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-gray-800">
                      Main Conference
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl sm:text-3xl font-black tracking-tight text-gray-900">
                    April 1–4, 2026 • GAiN Africa Conference
                  </h2>

                  <p className="mt-3 text-gray-700 leading-relaxed max-w-3xl">
                    Four days of keynotes, workshops, collaboration, and practical learning—focused on strengthening
                    Adventist communication and digital mission across Africa.
                  </p>

                  <div className="mt-5 space-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-900" />
                      <span>
                        <span className="font-semibold text-gray-900">Dates:</span> April 1–4, 2026
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-900" />
                      <span>
                        <span className="font-semibold text-gray-900">Venue:</span> University of Arusha, Arusha, Tanzania
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button asChild className="h-11 rounded-2xl px-6 bg-blue-900 hover:bg-blue-900/90 font-semibold">
                    <Link href="/register" className="inline-flex items-center gap-2">
                      Register <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-2xl px-6 bg-white border-black/10 hover:bg-gray-50 font-semibold"
                  >
                    <Link href="/presenters">See Presenters</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Schedule Coming Soon */}
            <div className="border-t border-black/10 bg-gray-50/80 p-6 sm:p-8">
              <div className="mx-auto max-w-4xl text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-black/10 px-3 py-1.5 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-gray-800">
                    Schedule Coming Soon
                  </span>
                </div>

                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-gray-900">
                  Full program & session timetable will be published soon.
                </h3>

                <p className="mt-2 text-gray-600">
                  We’re finalizing topics, presenters, and workshop tracks. Check back shortly for the complete schedule.
                </p>

                {/* Placeholder schedule blocks */}
                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-left opacity-90">
                  {["Day 1", "Day 2", "Day 3", "Day 4"].map((d, i) => (
                    <div
                      key={d}
                      className="rounded-2xl bg-white ring-1 ring-black/10 p-4 shadow-sm"
                    >
                      <div className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-500">
                        {d}
                      </div>
                      <div className="mt-2 text-base font-bold text-gray-900">
                        {i === 0 ? "Opening & Keynotes" : i === 1 ? "Workshops" : i === 2 ? "Tracks & Panels" : "Closing & Commissioning"}
                      </div>
                      <div className="mt-1 text-sm text-gray-600">Details coming soon</div>
                    </div>
                  ))}
                </div>

                <div className="mt-7">
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-2xl px-6 bg-white border-black/10 hover:bg-gray-50 font-semibold"
                  >
                    <Link href="/resources">Get Updates in Resources</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
