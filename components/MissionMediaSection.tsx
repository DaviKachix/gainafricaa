"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MissionMediaSection() {
  const partners = [
    { title: "Hope Channel", desc: "Global faith-based television network." },
    { title: "Adventist World Radio", desc: "Mission-driven broadcast outreach." },
    { title: "Adventist News Network", desc: "Official news and mission updates." },
  ];

  const logos = [
    { src: "/SDA-Logo.png", alt: "SDA" },
    { src: "/Hope Channel.png", alt: "Hope Channel" },
    { src: "/icon.jpg", alt: "GAiN" },
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-blue-900/5 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-900/5 ring-1 ring-black/10 text-xs font-semibold uppercase tracking-[0.2em] text-gray-800">
            Mission Media
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-gray-900">
            Partners in Mission Media
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            GAiN Africa strengthens collaboration across Adventist media platforms
            to advance gospel communication through innovation and excellence.
          </p>

          <div className="mt-6 space-y-3">
            {partners.map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl ring-1 ring-black/5 shadow-sm">
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Logos */}
          <div className="mt-6 flex gap-3 flex-wrap">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="h-12 w-12 rounded-full overflow-hidden bg-white ring-1 ring-black/10 shadow-sm"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover scale-110"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/10"
        >
          <Image
            src="/bible-laptop.jpg"
            alt="Digital Mission"
            width={1200}
            height={800}
            className="h-[350px] w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
