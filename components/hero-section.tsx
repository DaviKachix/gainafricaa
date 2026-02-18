"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function clamp0(n: number) {
  return n < 0 ? 0 : n;
}
function pad2(n: number) {
  return String(n).padStart(2, "0");
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const EVENT_UTC = useMemo(() => Date.UTC(2026, 2, 31, 21, 0, 0), []);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const distance = EVENT_UTC - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days: clamp0(d), hours: clamp0(h), minutes: clamp0(m), seconds: clamp0(s) });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [EVENT_UTC]);

  // Clean WP-like easing (no bouncy)
  const easeOutSoft: any = [0.16, 1, 0.3, 1];

  // One stagger, not too slow
  const stagger = useMemo(
    () => ({
      hidden: {},
      visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
    }),
    []
  );

  // Simple reveal (no blur to avoid “awkward”)
  const fadeUp = useMemo(
    () => ({
      hidden: { opacity: 0, y: 14 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutSoft } },
    }),
    []
  );

  // Keep hover very subtle
  const hoverLift = reduceMotion ? undefined : { y: -1 };

  const units: Array<{ label: string; value: string }> = [
    { label: "D", value: String(timeLeft.days) },
    { label: "H", value: pad2(timeLeft.hours) },
    { label: "M", value: pad2(timeLeft.minutes) },
    { label: "S", value: pad2(timeLeft.seconds) },
  ];

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Very subtle, slow drift only (no scale stacking) */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[url('/bible-laptop.jpg')] bg-cover bg-center bg-no-repeat will-change-transform"
          initial={reduceMotion ? false : { scale: 1.06, y: 0 }}
          animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }
          }
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/70 to-black/90" />

        {/* Static glow for cleanliness (no pulsing) */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_15%,rgba(59,130,246,0.14),transparent_55%),radial-gradient(900px_520px_at_80%_20%,rgba(255,255,255,0.06),transparent_60%)]" />

        <div className="absolute inset-0 [box-shadow:inset_0_0_160px_rgba(0,0,0,0.72)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[86vh] md:min-h-screen items-center py-14 sm:py-20 lg:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reduceMotion ? undefined : stagger}
            className="w-full max-w-3xl"
          >

            {/* Title */}
            <motion.h1
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-5 font-black tracking-tight leading-[1.05] text-white"
              style={{ fontSize: "clamp(2.3rem, 4.6vw, 4.7rem)" }}
            >
              INTERGRATED FOR <span className="text-red-500">MISSION</span>
            </motion.h1>

            {/* Copy */}
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-4 text-sm sm:text-base leading-relaxed text-white/80 max-w-2xl"
            >
              Practical training, collaboration, and renewed focus on gospel impact across Tanzania.
            </motion.p>

            {/* Meta chips */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2"
            >
              <motion.div
                className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 ring-1 ring-white/18 backdrop-blur"
                whileHover={hoverLift}
                transition={{ duration: 0.2, ease: easeOutSoft }}
              >
                <MapPin className="h-4 w-4 text-blue-200" />
                <span className="text-sm font-semibold text-white/90">
                  University of Arusha • Arusha
                </span>
              </motion.div>

              <motion.div
                className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 ring-1 ring-white/18 backdrop-blur"
                whileHover={hoverLift}
                transition={{ duration: 0.2, ease: easeOutSoft }}
              >
                <Calendar className="h-4 w-4 text-blue-200" />
                <span className="text-sm font-semibold text-white/90">
                  Apr 1–4, 2026 
                </span>
              </motion.div>
            </motion.div>

            {/* CTAs (kept as-is; container preserved) */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 flex flex-col sm:flex-row gap-2.5"
            >
            </motion.div>

            {/* Countdown */}
            <motion.div variants={reduceMotion ? undefined : fadeUp} className="mt-8">
              <div className="flex items-center justify-between gap-3">
              </div>

              <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3 max-w-md">
                {units.map((u, i) => (
                  <motion.div
                    key={u.label}
                    className="rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur px-3 py-3 text-center"
                    variants={reduceMotion ? undefined : fadeUp}
                    transition={{ delay: 0.02 * i }}
                    whileHover={hoverLift}
                  >
                    {/* Smooth number update (no bounce) */}
                    <motion.div
                      className="text-xl sm:text-2xl font-black tabular-nums text-white"
                      key={u.value}
                      initial={reduceMotion ? undefined : { opacity: 0.9 }}
                      animate={reduceMotion ? undefined : { opacity: 1 }}
                      transition={{ duration: 0.2, ease: easeOutSoft }}
                    >
                      {u.value}
                    </motion.div>

                    <div className="mt-0.5 text-[10px] uppercase tracking-widest text-white/60">
                      {u.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Note */}
            <motion.p variants={reduceMotion ? undefined : fadeUp} className="mt-5 text-xs text-white/55">
              Integrated For Mission • GAiN Tanzania 2026
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
