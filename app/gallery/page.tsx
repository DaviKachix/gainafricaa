"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface GalleryItem {
  label: string;
  title: string;
  link: string;
  image: string;
}

const GALLERY: GalleryItem[] = [
  {
    label: "Day 1",
    title: "Day 1 Highlights",
    link: "https://photos.app.goo.gl/yjuuPZ353oCCcixRA",
    image: "/gain1.jpg",
  },
  {
    label: "Day 2",
    title: "Day 2 Highlights",
    link: "https://photos.app.goo.gl/vB4sq5XQ4o9PWJ4m8",
    image: "/gain2.jpg",
  },
  {
    label: "Day 3",
    title: "Day 3 Highlights",
    link: "https://photos.app.goo.gl/Gy88jzdjnbMn81LX6",
    image: "/enock.jpg",
  },
  {
    label: "Sabbath",
    title: "Sabbath Moments",
    link: "https://photos.app.goo.gl/VJkJwmKX2Q24MDWW9",
    image: "/gain5.jpg",
  },
  {
    label: "Awards",
    title: "Awards Ceremony",
    link: "https://photos.app.goo.gl/s3pL7UdPToZzPeWs6",
    image: "/gain5.jpg",
  },
  {
    label: "More Awards",
    title: "Additional Award Photos",
    link: "https://photos.app.goo.gl/2EyfaC1ue7yffLGR7",
    image: "/gain5.jpg",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-black text-gray-900">
            GAiN Tanzania 2026 Gallery
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto">
            Thank you for your support and for staying connected with the
            Communication & Media Department.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group block border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Image Preview */}
              <div className="relative h-52 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  Click to view full gallery →
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        GAiN Tanzania 2026 · Media Gallery
      </div>
    </main>
  );
}