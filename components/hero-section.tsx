"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Countdown logic (UTC-safe-ish)
  useEffect(() => {
    const eventDate = new Date("2026-04-01T00:00:00");
    const interval = setInterval(() => {
      const now = Date.now();
      const distance = eventDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fadeUp = useMemo(
    () => ({
      hidden: { opacity: 0, y: 18 },
      visible: { opacity: 1, y: 0 },
    }),
    []
  );

  const stagger = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.08 },
      },
    }),
    []
  );

  const units: Array<keyof typeof timeLeft> = ["days", "hours", "minutes", "seconds"];

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/bible-laptop.jpg')] bg-cover bg-center bg-no-repeat" />

        {/* Modern, cleaner overlays (less “milky”, better contrast) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_15%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(900px_520px_at_80%_20%,rgba(255,255,255,0.12),transparent_60%)]" />

        {/* Subtle vignette */}
        <div className="absolute inset-0 [box-shadow:inset_0_0_160px_rgba(0,0,0,0.65)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[92vh] md:min-h-screen flex items-center py-16 sm:py-20 lg:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reduceMotion ? undefined : stagger}
            className="w-full max-w-3xl"
          >
            {/* Badge row */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/20 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wide uppercase text-white/90">
                GAiN Tanzania • 2026
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-white/80"
            >
              Annual Conference
            </motion.p>

            {/* Title */}
            <motion.h1
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-3 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white"
            >
              Integrated <span className="text-blue-300">for Mission</span>
            </motion.h1>

            {/* Location & Dates (tighter, more responsive) */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2 text-white/90"
            >
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15 backdrop-blur">
                <MapPin className="h-4 w-4 text-blue-300" />
                <span className="text-sm sm:text-[15px] font-semibold">
                  University of Arusha • Arusha, Tanzania
                </span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15 backdrop-blur">
                <Calendar className="h-4 w-4 text-blue-300" />
                <span className="text-sm sm:text-[15px] font-semibold">
                  April 1–4, 2026 <span className="text-white/70">(Pre-event: March 31)</span>
                </span>
              </div>
            </motion.div>

            {/* Short supporting line (SDA tone: mission-focused, calm, respectful) */}
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-5 text-sm sm:text-base leading-relaxed text-white/80"
            >
              A Spirit-led gathering to strengthen leadership, collaboration, and gospel impact across Tanzania.
            </motion.p>

            {/* CTA Buttons (reduced spacing + shorter labels) */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 flex flex-col sm:flex-row gap-3"
            >
              <Button
                asChild
                className="h-11 rounded-2xl px-5 text-sm font-semibold shadow-lg shadow-blue-500/20 bg-blue-600 hover:bg-blue-600/90"
              >
                <Link href="/register" className="inline-flex items-center justify-center gap-2">
                  Register
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-11 rounded-2xl px-5 text-sm font-semibold bg-white/10 text-white border-white/20 hover:bg-white/15"
              >
                <Link href="/schedule" className="inline-flex items-center justify-center gap-2">
                  View Schedule
                </Link>
              </Button>
            </motion.div>

            {/* Countdown (tighter cards + better mobile wrap) */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {units.map((unit, i) => (
                <motion.div
                  key={unit}
                  className="rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur px-4 py-3 text-center"
                  initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={reduceMotion ? undefined : { delay: 0.08 + i * 0.06 }}
                >
                  <div className="text-2xl sm:text-3xl font-black tabular-nums text-white">
                    {timeLeft[unit]}
                  </div>
                  <div className="mt-1 text-[11px] sm:text-xs uppercase tracking-widest text-white/70">
                    {unit}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Small footer note (optional) */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-5 text-xs text-white/60"
            >
              Theme: Integrated for Mission • GAiN Tanzania 2026
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
