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

/* SPEAKERS */
const SPEAKERS: Speaker[] = [
    {
    name: "Ayssa Truman",
    title: "Director, Communication Department of the General Conference of Seventh-day Adventist",
    org: "General Conference of Seventh-day Adventist, GC.",
    image: "/Trumann.jpg",
  },

  {
    name: "Pastor Sam Neves, PHD",
    title: "Vice President",
    org: "Hope Channel International, Inc.",
    image: "/sam-neves.jpg",
  },
  {
    name: "Ramiro Quero",
    title: "Director of Network Strategies, Development, and Training",
    org: "Hope Channel International, Inc.",
    image: "/ramiro-quero.jpg",
  },
  {
    name: "Haggai Abuto",
    title: "ICT Director",
    org: "East-Central African Division - ECD",
    image: "/Haggai.jpg",
  },
  {
    name: "Pastor Christopher Ungani",
    title: "Director, Communication and Media Evangelism",
    org: "East-Central African Division",
    image: "/Ungani.jpg",
  },
  {
    name: "Pastor Immanuel Ogwal",
    title: "Africa Regional Director for Adventist World Radio (AWR)",
    org: "East-Central African Division",
    image: "/Ogwal.jpg",
  },
  {
    name: "Pr. Dr David Mpwani",
    title: "President",
    org: "Northern Tanzania Union Conference",
    image: "/mpwani.webp",
  },
  {
    name: "Pr Joseph Mngwabi",
    title: "President",
    org: "Southern Tanzania Union Mission",
    image: "/mngwabi.webp",
  },
  {
    name: "Pastor Enoch M. Sando",
    title: "Executive Secretary",
    org: "Northern Tanzania Union Conference",
    image: "/Sando.png",
  },
  {
    name: "Pastor Magulilo Mwakalonge",
    title: "Executive Secretary",
    org: "Southern Tanzania Union Mission",
    image: "/Mwakalonge.jpg",
  },
  {
    name: "Elder Mathias Mavanza",
    title: "Treasurer",
    org: "Northern Tanzania Union Conference",
    image: "/Mavanza.jpg",
  },
  {
    name: "Elder Shabatu Msaki",
    title: "Treasurer",
    org: "Southern Tanzania Union Mission",
    image: "/Msaki.jpg",
  },
  {
    name: "Elder Gideon Msambwa",
    title: "Communication Director",
    org: "Northern Tanzania Union Conference",
    image: "/Msambwa.jpg",
  },
  {
    name: "Pastor Nasibu James",
    title: "Communication Director",
    org: "Southern Tanzania Union Mission",
    image: "/james.jpg",
  },
];

function SpeakerCard({ s, i }: { s: Speaker; i: number }) {
  const img = s.image?.trim() ? s.image : "/profile.jpg";

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: i * 0.04 }}
      className="group overflow-hidden rounded-xl bg-white ring-1 ring-black/10 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* IMAGE */}
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={img}
          alt={s.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* RED LINE */}
      <div className="h-[2px] bg-red-600 w-full" />

      {/* TEXT */}
      <div className="p-3">

        <h3 className="text-sm font-semibold text-black leading-snug">
          {s.name}
        </h3>

        <p className="mt-1 text-xs font-medium text-black/80">
          {s.title}
        </p>

        <p className="mt-1 text-[11px] text-black/60">
          {s.org}
        </p>

      </div>
    </motion.article>
  );
}
export default function PresentersPage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">

      {/* BACKGROUND EFFECT */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] bg-black/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 h-60 w-60 bg-red-600/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-red-600 font-semibold tracking-widest uppercase text-sm">
            GAiN Tanzania 2026
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black text-black"
          >
            Conference Presenters
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-black/70 leading-relaxed"
          >
            GAiN Tanzania brings together media leaders, digital missionaries,
            and communication strategists shaping the future of our mission with Technology across Africa.
          </motion.p>
        </div>

        {/* SPEAKER GRID */}
        <section className="mt-20">
          <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            {SPEAKERS.map((s, i) => (
              <SpeakerCard key={s.name} s={s} i={i} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 rounded-3xl bg-white ring-1 ring-black/10 shadow-lg overflow-hidden">
          <div className="h-1 bg-red-600 w-full" />

          <div className="p-12 text-center">

            <h3 className="text-2xl font-black text-black">
              Register for GAiN Tanzania
            </h3>

            <p className="mt-3 text-black/70">
              More presenters and session topics will be announced soon.
              Register today to stay updated.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

              <Button
                asChild
                className="bg-red-600 hover:bg-red-600/90 text-white rounded-2xl px-7"
              >
                <Link href="/register">
                  Register Now
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-2xl border-black/20 text-black"
              >
                <Link href="/events">
                  View Program
                </Link>
              </Button>

            </div>

          </div>
        </section>

      </div>
    </main>
  );
}