"use client";

import { HeroSection } from "@/components/hero-section";
import { SiteHeader } from "@/components/site-header";
//import { SiteFooter } from "@/components/site-footer";
import SiteAside from "@/components/site-aside";
import WhoWhatSection from "@/components/WhoWhatSection";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, User, Calendar, CheckCircle, Hourglass } from "lucide-react";
import GAinExtraSections from "@/components/GAinExtraSections";
import { cn } from "@/lib/utils";
import OneVoice27Section from "@/components/OneVoice27Section";
import MissionMediaSection from "@/components/MissionMediaSection";


export default function Page() {
  const registrationSteps = [
    { icon: Mail, title: "Enter Email", desc: "Provide your email to receive updates." },
    { icon: User, title: "Your Information", desc: "Fill in your information and details." },
    { icon: CheckCircle, title: "Confirm Details", desc: "Verify your info before registration." },
    { icon: Calendar, title: "Book Your Spot", desc: "Reserve your seat for the event." },
    { icon: Hourglass, title: "Wait for Event", desc: "Rest assuredly and pray for the event." },
  ];

  return (
    <div className="relative min-h-screen bg-white text-black font-sans antialiased overflow-x-hidden">
      <SiteAside />
      <SiteHeader />

      <AnimatePresence mode="wait">
        <motion.main
          key="homepage"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative z-0"
        >
          
          <HeroSection />
{/* About GAiN */}
<section className="relative overflow-hidden bg-gray-50 py-20 sm:py-24 lg:py-28">
  {/* Soft background accents (calm, SDA-friendly) */}
  <div className="absolute inset-0">
    <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-3xl" />
    <div className="absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-slate-900/10 blur-3xl" />
    <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(2,6,23,0.06),transparent_60%)]" />
  </div>

  <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 text-center">
    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-gray-900"
    >
      About <span className="text-blue-900">GAiN Africa</span>
      <span className="block mt-2 text-gray-800 font-semibold text-xl sm:text-2xl lg:text-3xl">
        2026 Conference
      </span>
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.08, duration: 0.7 }}
      className="mt-6 text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto"
    >
      GAiN Africa brings together{" "}
      <span className="font-semibold text-blue-900">Seventh-day Adventist media</span> and{" "}
      <span className="font-semibold text-gray-900">communication professionals</span> from across Africa to{" "}
      <span className="font-semibold text-gray-800">share knowledge</span>,{" "}
      <span className="font-semibold text-blue-900">build partnerships</span>, and{" "}
      <span className="font-semibold text-gray-900">advance the mission of the Church</span>. Our annual conference
      features <span className="font-semibold text-gray-800">keynotes</span>,{" "}
      <span className="font-semibold text-blue-900">hands-on workshops</span>, and{" "}
      <span className="font-semibold text-gray-900">strategic networking</span>.
    </motion.p>

    {/* Logos Row (each logo in a round card) */}
    <motion.div
      className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: 0.12 }}
    >
      {[
        { src: "/darkgain.png", alt: "GAiN Africa" },
        { src: "/OneVoice27.jpeg", alt: "OneVoice27" },
        { src: "/SDA Logo.png", alt: "Seventh-day Adventist" },
        { src: "/Hope Channel.png", alt: "Hope Channel" },
      ].map((icon, idx) => (
        <motion.a
          key={idx}
          href={icon.src}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -2, scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="group"
          aria-label={icon.alt}
        >
          <div
            className={[
              "h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24",
              "rounded-full overflow-hidden",
              "bg-white/80 backdrop-blur",
              "ring-1 ring-black/10",
              "shadow-[0_10px_30px_rgba(0,0,0,0.10)]",
              "transition",
              "group-hover:ring-blue-900/25",
              "group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.14)]",
            ].join(" ")}
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className="h-full w-full object-contain p-3 sm:p-3.5 opacity-95"
              loading="lazy"
            />
          </div>

          {/* Optional label (subtle, SDA-friendly) */}
          <div className="mt-2 text-[11px] sm:text-xs font-semibold text-gray-600 group-hover:text-gray-800 transition">
            {icon.alt}
          </div>
        </motion.a>
      ))}
    </motion.div>

    {/* Small divider / calm note */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25, duration: 0.7 }}
      className="mt-10 flex items-center justify-center gap-3 text-xs sm:text-sm text-gray-500"
    >
      <span className="h-px w-10 bg-gray-300" />
      <span className="font-semibold tracking-wide uppercase">
        United in Mission • Excellence • Service
      </span>
      <span className="h-px w-10 bg-gray-300" />
    </motion.div>
  </div>

  {/* Background floating logos (fainter + round + calmer motion) */}
  {[
    "/icon.jpg",
    "/OneVoice27.jpeg",
    "/SDA Logo.png",
    "/Hope Channel.png",
  ].map((src, idx) => (
    <motion.div
      key={idx}
      className={cn(
        "pointer-events-none absolute opacity-[0.07]",
        idx === 0
          ? "top-10 left-6 sm:left-10"
          : idx === 1
          ? "top-20 right-6 sm:right-10"
          : idx === 2
          ? "bottom-16 left-10 sm:left-16"
          : "bottom-10 right-10 sm:right-16"
      )}
      animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
      transition={{ repeat: Infinity, duration: 10 + idx * 2, ease: "easeInOut" }}
    >
      <div className="h-20 w-20 sm:h-28 sm:w-28 rounded-full overflow-hidden ring-1 ring-black/10 bg-white/40 backdrop-blur">
        <img src={src} alt={`bg-icon-${idx}`} className="h-full w-full object-contain p-4" />
      </div>
    </motion.div>
  ))}
</section>

<OneVoice27Section />

          {/* Who to attend & What Section */}
          <WhoWhatSection />
{/* Registration Process (SDA-friendly, calm + modern) */}
<section className="relative overflow-hidden bg-gray-50 py-20 sm:py-24 lg:py-28">
  {/* Soft background accents */}
  <div className="absolute inset-0">
    <div className="absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-3xl" />
    <div className="absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full bg-slate-900/10 blur-3xl" />
    <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(2,6,23,0.06),transparent_60%)]" />
  </div>

  <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 text-center">
    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight"
    >
      Registration Process
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.08, duration: 0.7 }}
      className="mt-4 text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto"
    >
      Simple steps to secure your place at{" "}
      <span className="font-semibold text-gray-900">GAiN Africa 2026</span>.
    </motion.p>

    {/* Step Cards (grid on desktop, horizontal scroll on mobile) */}
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="mt-10"
    >
      {/* Mobile: swipeable row */}
      <div className="lg:hidden -mx-4 px-4 overflow-x-auto pb-4 snap-x snap-mandatory">
        <div className="flex gap-4 min-w-max">
          {registrationSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                className="snap-start w-[280px] rounded-3xl bg-white/90 ring-1 ring-black/10 shadow-[0_12px_30px_rgba(0,0,0,0.08)] p-6 text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-900/10 ring-1 ring-blue-900/15 grid place-items-center">
                    <Icon className="h-6 w-6 text-blue-900" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-500">
                      Step {i + 1}
                    </div>
                    <h3 className="mt-1 text-lg font-bold text-gray-900">{step.title}</h3>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Desktop: clean grid */}
      <div className="hidden lg:grid grid-cols-3 gap-6 text-left">
        {registrationSteps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              className="rounded-3xl bg-white/90 ring-1 ring-black/10 shadow-[0_14px_40px_rgba(0,0,0,0.08)] p-7 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-900/10 ring-1 ring-blue-900/15 grid place-items-center">
                    <Icon className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-500">
                      Step {i + 1}
                    </div>
                    <h3 className="mt-1 text-lg font-bold text-gray-900">{step.title}</h3>
                  </div>
                </div>

                <div className="h-10 w-10 rounded-2xl bg-gray-50 ring-1 ring-black/5 grid place-items-center text-sm font-bold text-gray-700">
                  {i + 1}
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">{step.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.18, duration: 0.7 }}
      className="mt-10 sm:mt-12 flex flex-col items-center gap-3"
    >
      <Button
        asChild
        className="h-11 rounded-2xl px-6 text-sm sm:text-base font-semibold bg-blue-900 hover:bg-blue-900/90 shadow-lg shadow-blue-900/10"
      >
        <a href="/register" className="inline-flex items-center gap-2">
          Start Registration <ArrowRight className="h-4 w-4" />
        </a>
      </Button>

      <p className="text-xs sm:text-sm text-gray-500">
        Need help? Visit <a className="underline underline-offset-4" href="/resources">Resources</a> for guidance.
      </p>
    </motion.div>
  </div>
</section>
<MissionMediaSection />
<GAinExtraSections />  {/* Purpose, Event Details, Invitation */}
          {/* Final CTA */}
  <section className="py-28 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
    
    {/* Image */}
    <div className="w-full lg:w-1/2">
      <img
        src="/elegant.jpg" // make sure this is in the public folder
        alt="GAiN Tanzania 2026"
        className="w-full h-auto rounded-xl object-cover shadow-lg"
      />
    </div>

    {/* Content */}
    <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
      <h2 className="text-4xl font-extrabold text-blue-900">
        Be Part of the Movement
      </h2>
      <p className="text-lg text-black/70 max-w-lg">
        GAiN Tanzania 2026 is more than a conference — it’s alignment for mission.
      </p>
      <Button
        asChild
        className="px-10 py-5 text-lg font-bold rounded-xl bg-blue-950 text-white hover:scale-105 transition-transform duration-300 shadow-lg"
      >
        <a href="/register">Register Now</a>
      </Button>
    </div>

  </div>
</section>

        </motion.main>
      </AnimatePresence>
    </div>
  );
}
