"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Target,
  Users,
  Activity,
  Trophy,
  CheckCircle2,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

const purposeItems = [
  "Promote healthy living and physical wellness",
  "Unite churches and communities under one voice",
  "Empower youth through positive engagement",
  "Strengthen partnerships between faith institutions and businesses",
  "Raise funds for youth programs and community initiatives",
  "Advance mission to all people",
];

const targetAudience = [
  "Youth (ages 10–35)",
  "Church members across denominations",
  "University and college students",
  "Families",
  "Corporate teams",
  "Fitness enthusiasts",
  "Community leaders",
];

const activities = [
  "Aerobic warm-up session",
  "5KM community run",
  "Worship celebration at finish line",
  "Guest speakers",
  "Award ceremony",
  "Live praise and worship",
  "Media coverage",
  "Vendor exhibition spaces",
];

function SectionBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-black shadow-sm backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-red-700" />
      {text}
    </div>
  );
}

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white font-sans text-black antialiased">
      <SiteHeader />

      <AnimatePresence mode="wait">
        <motion.main
          key="onevoice27-page"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45 }}
          className="relative"
        >
          {/* HERO */}
          <section className="relative overflow-hidden bg-black">
            <div className="absolute inset-0">
              <img
                src="/Marathon.png"
                alt="OneVoice27 Fun Run"
                className="h-full w-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.45),rgba(0,0,0,0.82))]" />
              <div className="absolute -top-24 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-red-700/15 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
            </div>

            <div className="relative mx-auto grid min-h-[90vh] max-w-6xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:py-28">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="text-white"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-700" />
                  OneVoice27 Fun Run
                </div>

                <h1 className="mt-6 text-4xl font-black leading-[0.95] sm:text-5xl lg:text-6xl">
                  Run for Health.
                  <span className="mt-2 block text-red-700">Move for Mission.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                  A faith-driven 5-kilometer community run in Arusha bringing
                  people together through wellness, unity, youth engagement, and
                  mission-centered impact.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                    <div className="flex items-center gap-2 text-red-700">
                      <Calendar className="h-4 w-4" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                        Date
                      </span>
                    </div>
                    <p className="mt-2 text-base font-bold text-white">31 March 2026</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                    <div className="flex items-center gap-2 text-red-700">
                      <Target className="h-4 w-4" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                        Distance
                      </span>
                    </div>
                    <p className="mt-2 text-base font-bold text-white">5KM</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                    <div className="flex items-center gap-2 text-red-700">
                      <MapPin className="h-4 w-4" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                        Route
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-white">
                      Silver Leaf Academy → University of Arusha
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="h-12 rounded-2xl bg-red-700 px-6 text-sm font-semibold text-white shadow-[0_18px_45px_-18px_rgba(185,28,28,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-800"
                  >
                    <a 
  href="https://events.ntucadventist.org/FunRun.php" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2"
>
  Register Now <ArrowRight className="h-4 w-4" />
</a>
                  </Button>

                  <a
                    href="#about"
                    className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white/85 transition hover:bg-white/10"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.75 }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-[2rem] bg-red-700/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_35px_80px_-35px_rgba(0,0,0,0.8)] ring-1 ring-white/10 backdrop-blur">
                  <img
                    src="/icon.jpg"
                    alt="OneVoice27 visual"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* ABOUT */}
          <section
            id="about"
            className="relative overflow-hidden bg-[#fafafa] py-20 sm:py-24 lg:py-28"
          >
            <div className="absolute inset-0">
              <div className="absolute -top-20 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-red-700/6 blur-3xl" />
              <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-black/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
              <div className="text-center">
                <SectionBadge text="About OneVoice27" />
                <h2 className="mt-5 text-3xl font-black tracking-tight text-black sm:text-4xl lg:text-5xl">
                  A Smooth Blend of
                  <span className="block text-red-700">Faith, Health, and Community</span>
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-black/65 sm:text-lg">
                  OneVoice27 fun run is designed as more than an event. It is a mission-led
                  movement that gathers people around wellness, fellowship, unity,
                  purpose, and visible community transformation.
                </p>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  className="rounded-[1.75rem] border border-black/8 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.06)]"
                >
                  <h3 className="text-xl font-black text-black">Introduction</h3>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-black/70 sm:text-base">
                    <p>
                      The OneVoice27 Fun Run is a 5-kilometer community run
                      organized to promote spiritual unity, healthy living, youth
                      empowerment, and social impact in the Arusha region.
                    </p>
                    <p>
                      It aims to gather students, church members, youth groups,
                      families, corporate teams, and community leaders into one
                      meaningful shared experience.
                    </p>
                    <p>
                      The run starts at Silver Leaf Academy in Usa River and finishes
                      at the University of Arusha, reflecting a journey of growth,
                      connection, and purpose.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: 0.05 }}
                  className="rounded-[1.75rem] border border-black/10 bg-black p-7 text-white shadow-[0_22px_55px_rgba(0,0,0,0.14)]"
                >
                  <h3 className="text-xl font-black text-red-700">About the Organizer</h3>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-white/75 sm:text-base">
                    <p>
                      The Seventh-day Adventist Church, through the OneVoice27
                    initiative, is committed to spiritual growth, spreading the gospel, and community transformation. This fun run is an expression of that mission, designed to engage the public in a positive, health-focused way while looking for the imminent Second Coming of Christ.
                    </p>
                    <p>
                      The wider vision is to unite communities under one shared voice
                      of faith, service, hope, and transformational witness.
                    </p>
                    <p>
                      It is a platform where the church engages the public in a warm,
                      practical, and mission-centered way.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* MISSION + VISION */}
          <section className="relative overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-28">
            <div className="absolute inset-0">
              <img
                src="/elegant.jpg"
                alt="Mission background"
                className="h-full w-full object-cover opacity-14"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.82),rgba(0,0,0,0.94))]" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
              <div className="text-center">
                <SectionBadge text="Mission and Vision" />
                <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                  One Voice.
                  <span className="block text-red-700">One Purpose.</span>
                </h2>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
                  <h3 className="text-2xl font-black text-red-700">Our Mission</h3>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-white/78 sm:text-base">
                    {[
                      "Proclaim the Gospel of Jesus Christ boldly in the community",
                      "Unite churches, youth, and families under one voice",
                      "Promote spiritual strength and physical wellness",
                      "Create impactful faith-based community platforms",
                      "Empower the next generation with purpose and hope",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-red-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
                  <h3 className="text-2xl font-black text-red-700">Our Vision</h3>
                  <p className="mt-5 text-sm leading-7 text-white/78 sm:text-base">
                    To unite the Arusha community as one voice in Christ,
                    transforming lives spiritually, physically, and socially through
                    faith-driven initiatives that inspire health, purpose, and hope.
                  </p>

                  <div className="mt-7 overflow-hidden rounded-[1.5rem] ring-1 ring-white/10">
                    <img
                      src="/Mission.png"
                      alt="OneVoice mission"
                      className="h-64 w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DETAILS */}
          <section className="relative overflow-hidden bg-[#fafafa] py-20 sm:py-24 lg:py-28">
            <div className="absolute inset-0">
              <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-red-700/6 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
              <div className="text-center">
                <SectionBadge text="Event Overview" />
                <h2 className="mt-5 text-3xl font-black tracking-tight text-black sm:text-4xl lg:text-5xl">
                  Purpose, Audience,
                  <span className="block text-red-700">and Event Flow</span>
                </h2>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                <div className="rounded-[1.75rem] border border-black/8 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-red-700/10">
                      <Activity className="h-5 w-5 text-red-700" />
                    </div>
                    <h3 className="text-xl font-black text-black">Purpose</h3>
                  </div>

                  <ul className="mt-5 space-y-3 text-sm leading-7 text-black/70">
                    {purposeItems.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.75rem] border border-black/8 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-red-700/10">
                      <Users className="h-5 w-5 text-red-700" />
                    </div>
                    <h3 className="text-xl font-black text-black">Audience</h3>
                  </div>

                  <ul className="mt-5 space-y-3 text-sm leading-7 text-black/70">
                    {targetAudience.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.75rem] border border-black/10 bg-black p-7 text-white shadow-[0_22px_55px_rgba(0,0,0,0.14)]">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-red-700/15">
                      <Trophy className="h-5 w-5 text-red-700" />
                    </div>
                    <h3 className="text-xl font-black">Event Details</h3>
                  </div>

                  <div className="mt-5 space-y-2 text-sm leading-7 text-white/78">
                    <p>
                      <span className="font-bold text-red-700">Event Name:</span>{" "}
                      OneVoice27 Fun Run
                    </p>
                    <p>
                      <span className="font-bold text-red-700">Distance:</span> 5KM
                    </p>
                    <p>
                      <span className="font-bold text-red-700">Start:</span> Silver
                      Leaf Academy
                    </p>
                    <p>
                      <span className="font-bold text-red-700">Finish:</span>{" "}
                      University of Arusha
                    </p>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <h4 className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
                      Activities
                    </h4>
                    <ul className="mt-4 space-y-2 text-sm leading-7 text-white/78">
                      {activities.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="relative overflow-hidden bg-white py-24 sm:py-28">
            <div className="absolute inset-0">
              <div className="absolute left-1/2 top-0 h-[28rem] w-[38rem] -translate-x-1/2 rounded-full bg-red-700/6 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-5xl px-6 text-center">
              <SectionBadge text="Final Invitation" />

              <h2 className="mt-6 text-3xl font-black tracking-tight text-black sm:text-4xl lg:text-5xl">
                Be Part of
                <span className="block text-red-700">OneVoice27</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black/65 sm:text-lg">
                This is more than a run. It is a graceful expression of unity,
                mission, hope, wellness, and community. Join us and take part in
                something meaningful for Arusha.
              </p>

              <div className="mt-10">
                <Button
                  asChild
                  className="h-12 rounded-2xl bg-red-700 px-8 text-base font-bold text-white shadow-[0_18px_45px_-18px_rgba(185,28,28,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-800"
                >
                 <a 
  href="https://events.ntucadventist.org/FunRun.php" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2"
>
  Register Now <ArrowRight className="h-4 w-4" />
</a>
                </Button>
              </div>
            </div>
          </section>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}