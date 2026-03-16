"use client";

import { HeroSection } from "@/components/hero-section";
import { SiteHeader } from "@/components/site-header";
//import { SiteFooter } from "@/components/site-footer";
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
      About <span className="text-red-600">GAiN Tanzania</span>
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
     <p>
  GAiN Tanzania brings together Seventh-day Adventist media and communication professionals from across Tanzania to share knowledge, build partnerships, and advance the mission of the Church. Our annual conference features keynotes, hands-on workshops, and strategic networking.
</p>
  </motion.p>

  
    {/* Small divider / calm note */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.22, duration: 0.7 }}
      className="mt-10 flex items-center justify-center gap-3 text-xs sm:text-sm text-gray-500"
    >
      <span className="h-px w-10 bg-gray-300" />
      <span className="h-px w-10 bg-gray-300" />
    </motion.div>
  </div>


  {[
    "/icon.jpg",
    "/OneVoice27.jpeg",
    "/SDA-Logo.png", 
    "/Hope Channel.png",
    "/Bible.png",    
    "/Mission.png",  
  ].map((src, idx) => (
    <motion.div
      key={idx}
      className={cn(
        "pointer-events-none absolute opacity-[0.06]",
        idx === 0
          ? "top-10 left-6 sm:left-10"
          : idx === 1
          ? "top-20 right-6 sm:right-10"
          : idx === 2
          ? "bottom-16 left-10 sm:left-16"
          : idx === 3
          ? "bottom-10 right-10 sm:right-16"
          : idx === 4
          ? "top-40 left-1/2 -translate-x-1/2"
          : "bottom-40 right-1/2 translate-x-1/2"
      )}
      animate={{ y: [0, -6, 0] }} 
      transition={{ repeat: Infinity, duration: 12 + idx * 1.2, ease: "easeInOut" }}
    >
      <div className="h-20 w-20 sm:h-28 sm:w-28 rounded-full overflow-hidden ring-1 ring-black/10 bg-white/50 backdrop-blur">
        <img src={src} alt={`bg-icon-${idx}`} className="h-full w-full object-contain p-4" />
      </div>
    </motion.div>
  ))}
</section>

          {/* Who to attend & What Section */}
          <WhoWhatSection />

<MissionMediaSection />
<GAinExtraSections />  {/* Purpose, Event Details, Invitation */}
{/* Final CTA */}
<section className="relative overflow-hidden bg-gray-50 py-24 sm:py-28">
  {/* Subtle background accent (WP-style, calm) */}
  <div className="absolute inset-0">
    <div className="absolute -top-24 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-blue-900/5 blur-3xl" />
  </div>

  <div className="relative max-w-6xl mx-auto px-6">
    <div className="grid gap-12 lg:grid-cols-2 items-center">

      {/* Image */}
      <div className="relative group">
        <div className="overflow-hidden rounded-2xl shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] ring-1 ring-black/10">
          <img
            src="/elegant.jpg"
            alt="GAiN Tanzania 2026"
            className="w-full h-auto object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
        
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-950 ring-1 ring-black/10">
          <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
          Final Invitation
        </div>

        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-red-700 leading-tight">
          Be Part of the Movement
        </h2>

        <p className="mt-5 text-base sm:text-lg text-black/70 max-w-xl leading-relaxed">
          GAiN Tanzania 2026 is more than a conference — it’s alignment for mission.  
          Come learn with us, collaborate with fellow leaders, and return home equipped to strengthen the church’s impact.
        </p>

        <div className="mt-8">
          <Button
            asChild
            className="
              inline-flex items-center justify-center
              px-8 py-4 text-base font-bold
              rounded-2xl
              bg-red-700 text-white
              shadow-[0_20px_50px_-20px_rgba(2,6,23,0.8)]
              hover:bg-black
              hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            <a href="/register">Register Now</a>
          </Button>
        </div>

      </div>
    </div>
  </div>
</section>


        </motion.main>
      </AnimatePresence>
    </div>
  );
}
