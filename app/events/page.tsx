"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Flag,
  Clock,
  Mic,
  ChevronRight,
} from "lucide-react";

const logos = [
  { src: "/icon.jpg", alt: "GAiN Africa" },
  { src: "/OneVoice27.jpeg", alt: "OneVoice27" },
  { src: "/SDA-Logo.png", alt: "Seventh-day Adventist" },
  { src: "/Hope Channel.png", alt: "Hope Channel" },
];

const conferenceDays = [
  { day: "Day 1", title: "Opening & Keynotes" },
  { day: "Day 2", title: "Workshops & Training" },
  { day: "Day 3", title: "Tracks & Panels" },
  { day: "Day 4", title: "Closing & Commissioning" },
];

function SectionBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-800 shadow-sm backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-red-700" />
      {text}
    </div>
  );
}

export default function EventsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fafafa]">
      {/* background accents */}
      <div className="absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-red-700/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-black/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(0,0,0,0.05),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <SectionBadge text="GAiN Africa 2026 • Events" />

          <h1 className="mt-5 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Events & Program
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg">
            Discover the full event flow, from the{" "}
            <span className="font-semibold text-red-700">OneVoice pre-event marathon</span>{" "}
            to the main conference experience focused on mission, media, excellence,
            and collaboration.
          </p>

          {/* Logos row */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-5">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="h-14 w-14 overflow-hidden rounded-full bg-white/90 ring-1 ring-black/10 shadow-[0_10px_28px_rgba(0,0,0,0.08)] sm:h-16 sm:w-16"
                title={logo.alt}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="h-11 rounded-2xl bg-red-700 px-6 font-semibold hover:bg-red-800"
            >
              <Link href="/register" className="inline-flex items-center gap-2">
                Register <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-11 rounded-2xl border-black/10 bg-white/70 px-6 font-semibold hover:bg-white"
            >
              <Link href="/resources">Conference Resources</Link>
            </Button>
          </div>
        </motion.div>

        {/* PRE-EVENT */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mt-14 sm:mt-16"
        >
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* visual card */}
            <Link
              href="/Onevoice"
              className="group relative overflow-hidden rounded-[1.8rem] bg-black shadow-[0_24px_70px_rgba(0,0,0,0.18)] ring-1 ring-black/10"
              aria-label="Go to OneVoice marathon page"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/15 via-black/30 to-black/60" />

              <Image
                src="/Marathon27.png"
                alt="OneVoice Marathon Pre-Event"
                width={1200}
                height={800}
                className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-[1.04] sm:h-[400px]"
                priority
              />

              <div className="absolute left-5 top-5 z-20 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold tracking-wide text-gray-900 ring-1 ring-black/10">
                  Pre-Event
                </span>
                <span className="rounded-full bg-red-700 px-3 py-1 text-[11px] font-bold tracking-wide text-white">
                  OneVoice Marathon
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 z-20">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <div className="flex items-center gap-2 text-white/90">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-semibold">March 31, 2026</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    A mission-led run that prepares hearts, energy, and community
                    connection before the main conference begins.
                  </p>
                </div>
              </div>
            </Link>

            {/* text */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-700/15 bg-red-700/10 px-3 py-1.5">
                <Flag className="h-4 w-4 text-red-700" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-700 sm:text-xs">
                  OneVoice Marathon • Pre-Event
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">
                Start the Week with the
                <span className="block text-red-700">OneVoice Marathon</span>
              </h2>

              <p className="mt-4 leading-relaxed text-gray-700">
                The OneVoice Marathon is the pre-event experience connected to GAiN
                Africa 2026. It sets the spiritual and communal tone for the week
                through movement, unity, mission, and visible participation.
              </p>

              <p className="mt-3 leading-relaxed text-gray-700">
                This experience is designed to bring people together before the main
                conference, helping attendees, teams, and partners enter the week
                with purpose and shared energy.
              </p>

              <div className="mt-5 space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-red-700" />
                  <span>
                    <span className="font-semibold text-gray-900">Date:</span> March
                    31, 2026
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-red-700" />
                  <span>
                    <span className="font-semibold text-gray-900">Venue:</span>{" "}
                    University of Arusha, Arusha, Tanzania
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {logos.slice(0, 4).map((logo, idx) => (
                  <div
                    key={idx}
                    className="h-12 w-12 overflow-hidden rounded-full bg-white ring-1 ring-black/10 shadow-sm"
                    title={logo.alt}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={70}
                      height={70}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-11 rounded-2xl bg-red-700 px-6 font-semibold hover:bg-red-800"
                >
                  <Link href="/OneVoice27" className="inline-flex items-center gap-2">
                    Explore OneVoice <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-2xl border-black/10 bg-white/70 px-6 font-semibold hover:bg-white"
                >
                  <Link href="/register">Join Pre-Event</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* MAIN EVENT */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mt-14 sm:mt-16"
        >
          <div className="overflow-hidden rounded-[1.8rem] bg-white/90 shadow-[0_20px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/10">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="text-left">
                  <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1.5">
                    <Mic className="h-4 w-4 text-red-700" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-800 sm:text-xs">
                      Main Conference
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">
                    April 1–4, 2026 • GAiN Africa Conference
                  </h2>

                  <p className="mt-3 max-w-3xl leading-relaxed text-gray-700">
                    Four focused days of keynotes, practical workshops, collaboration,
                    networking, and learning designed to strengthen Adventist media,
                    communication, and digital mission across Africa.
                  </p>

                  <div className="mt-5 space-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-red-700" />
                      <span>
                        <span className="font-semibold text-gray-900">Dates:</span>{" "}
                        April 1–4, 2026
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-red-700" />
                      <span>
                        <span className="font-semibold text-gray-900">Venue:</span>{" "}
                        University of Arusha, Arusha, Tanzania
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button
                    asChild
                    className="h-11 rounded-2xl bg-red-700 px-6 font-semibold hover:bg-red-800"
                  >
                    <Link href="/register" className="inline-flex items-center gap-2">
                      Register <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-2xl border-black/10 bg-white px-6 font-semibold hover:bg-gray-50"
                  >
                    <Link href="/presenters">See Presenters</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* schedule preview */}
            <div className="border-t border-black/10 bg-[#fafafa] p-6 sm:p-8">
              <div className="mx-auto max-w-4xl text-center">
                <SectionBadge text="Schedule Coming Soon" />

                <h3 className="mt-4 text-xl font-bold text-gray-900 sm:text-2xl">
                  Full program and timetable will be published soon.
                </h3>

                <p className="mt-2 text-gray-600">
                  We are finalizing topics, presenters, and session tracks. The full
                  conference flow will be released shortly.
                </p>

                <div className="mt-6 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-4">
                  {conferenceDays.map((item) => (
                    <div
                      key={item.day}
                      className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/10"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                        {item.day}
                      </div>
                      <div className="mt-2 text-base font-bold text-gray-900">
                        {item.title}
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        Details coming soon
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7">
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-2xl border-black/10 bg-white px-6 font-semibold hover:bg-gray-50"
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