"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Users, Mic, Calendar } from "lucide-react";

type Speaker = {
  name: string;
  title: string;
  org: string;
  image?: string;
};

/* ✅ ORDER UPDATED */
const SPEAKERS: Speaker[] = [
  {
    name: "Dr Sam Neves",
    title: "Vice President for Advancement & Communication",
    org: "Hope Channel International",
    image: "./sam-neves.jpg",
  },
  {
    name: "Ramiro Quero",
    title: "Associate for Digital Technologies and Learning Communities",
    org: "Andrews University",
    image: "./ramiro-quero.jpg",
  },
  {
    name: "Haggai Abuto",
    title: "ICT Director",
    org: "East-Central Africa Region (ECD)",
    image: "/Haggai.jpg",
  },
  {
    name: "Dr Christopher Ngani",
    title: "Director, Hope Media Network",
    org: "East-Central Africa Division",
    image: "/speakers/christopher-ngani.jpg",
  },
];

function SpeakerCard({ s, i }: { s: Speaker; i: number }) {
  const img = s.image?.trim() ? s.image : "/profile.jpg";

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      className="group overflow-hidden rounded-3xl bg-white ring-1 ring-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
    >
      {/* BIG CONFERENCE IMAGE */}
      <div className="relative w-full h-72 sm:h-80 lg:h-84 overflow-hidden">
        <Image
          src={img}
          alt={s.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* RED accent */}
      <div className="h-1 w-full bg-red-600" />

      {/* Content */}
      <div className="p-6 sm:p-7">
        <h3 className="text-2xl font-black text-black tracking-tight">
          {s.name}
        </h3>

        <p className="mt-2 text-[15px] font-semibold text-black/85 leading-snug">
          {s.title}
        </p>

        <p className="mt-2 text-sm text-black/65">{s.org}</p>
      </div>
    </motion.article>
  );
}

export default function PresentersPage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">

      {/* soft background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[540px] w-[760px] bg-black/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 h-44 w-44 bg-red-600/10 blur-2xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* HEADER */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-black"
          >
            Conference Presenters
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-6 max-w-3xl mx-auto text-lg text-black/75 leading-relaxed"
          >
            GAiN Tanzania features media leaders, communication strategists,
            and digital mission pioneers shaping the future of technology and ministry.
          </motion.p>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <div className="px-4 py-2 rounded-2xl ring-1 ring-black/10 text-sm flex items-center gap-2 text-black/80">
              <Users className="h-4 w-4 text-red-600" />
              {SPEAKERS.length} Featured Speakers
            </div>
            <div className="px-4 py-2 rounded-2xl ring-1 ring-black/10 text-sm flex items-center gap-2 text-black/80">
              <Mic className="h-4 w-4 text-red-600" />
              Keynotes & Workshops
            </div>
            <div className="px-4 py-2 rounded-2xl ring-1 ring-black/10 text-sm flex items-center gap-2 text-black/80">
              <Calendar className="h-4 w-4 text-red-600" />
              Program Updates Ongoing
            </div>
          </div>
        </div>

        {/* SPEAKERS GRID */}
        <section className="mt-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {SPEAKERS.map((s, i) => (
              <SpeakerCard key={s.name} s={s} i={i} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-3xl bg-white ring-1 ring-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">
          <div className="h-1 bg-red-600 w-full" />
          <div className="p-10 text-center">
            <h3 className="text-2xl font-black text-black">
              Register and Stay Updated
            </h3>
            <p className="mt-3 text-black/70">
              More presenters and session details will be announced soon.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-red-600 hover:bg-red-600/90 text-white rounded-2xl px-7"
              >
                <Link href="/register">Register Now</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-2xl border-black/20 text-black"
              >
                <Link href="/events">View Program</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
