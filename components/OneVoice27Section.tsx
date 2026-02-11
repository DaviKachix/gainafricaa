"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OneVoiceSection() {
  const logos = [
    { src: "/SDA-Logo.png", alt: "SDA" },
    { src: "/icon.jpg", alt: "GAiN" },
    { src: "/Hope Channel.png", alt: "Hope Channel" },
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[500px] w-[700px] bg-blue-900/5 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/10"
        >
          <Image
            src="/OneVoice.jpg"
            alt="OneVoice27"
            width={1200}
            height={800}
            className="h-[350px] w-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-900/10 ring-1 ring-blue-900/20 text-xs font-semibold uppercase tracking-[0.2em] text-blue-900">
            Global SDA Initiative
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-gray-900">
            OneVoice27
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            A worldwide Adventist initiative calling the Church to unified communication,
            digital evangelism, and coordinated mission focus leading toward 2027.
          </p>

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
      </div>
    </section>
  );
}
