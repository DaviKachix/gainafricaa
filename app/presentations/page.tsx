"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Presentation {
  title: string;
  presenter: string;
  file: string;
  preview?: string;
}

const PRESENTATIONS: Presentation[] = [
  {
    title: "Integrating Digital Tools Into Pastoral Ministry",
    presenter: "Pr Azza Nyamakababi",
    file: "https://docs.google.com/presentation/d/1CDhUBbVHfh9IBbX-yexwtmMN1m-uB3BW/edit?usp=drive_link&ouid=113483345363854961033&rtpof=true&sd=true",
    preview:
      "gain2.jpg",
  },
  {
    title: "Digital Fishermen",
    presenter: "Ramiro Quero",
    file: "https://drive.google.com/file/d/1cm-B1lfA592z7NE80UfzjPl52cDzIg8j/view?usp=drive_link",
    preview:
      "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Christ Method Alone - Mission Intelligence",
    presenter: "Sam Neves, PhD",
    file: "https://drive.google.com/file/d/1O0ZRh0affQElNkFN3InxdbuxSVZ78zmj/view?usp=drive_link",
    preview:
      "compressed_sam.jpg",
  },
  {
    title: "GAiN Opening Speech 2026",
    presenter: "Pr David Mpwani",
    file: "https://docs.google.com/presentation/d/1n_NMkAbcWOqUp6l_5O-nRs1LetnsaZKU/edit?usp=drive_link&ouid=113483345363854961033&rtpof=true&sd=true",
    preview:
      "gain1.jpg",
  },
  {
    title: "Mission Intelligence HCI Slide Deck",
    presenter: "Ramiro Quero",
    file: "https://docs.google.com/presentation/d/1v6JLpwq3OZxcVniry3Rj5Zfwk56LVftx/edit?usp=drive_link&ouid=113483345363854961033&rtpof=true&sd=true",
    preview:
      "compressed_bassetiII.jpg",
  },
];

function getFileType(file: string) {
  if (file.includes(".pdf")) return "PDF";
  if (file.includes(".ppt") || file.includes(".pptx") || file.includes("presentation")) return "PPT";
  return "FILE";
}

export default function PresentationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* Header */}
        <header className="mb-10 pb-5 border-b border-gray-100">
          <span className="inline-block text-[10px] font-semibold tracking-widest uppercase bg-red-100 text-red-700 px-2.5 py-1 rounded-full">
            GAiN Tanzania 2026
          </span>

          <h1 className="mt-2 text-2xl md:text-3xl font-black text-gray-900">
            Presentations <span className="text-red-600">Materials</span>
          </h1>

          <p className="mt-3 text-sm text-gray-500 max-w-2xl">
            Access and download all session presentations, slides, and documents.
          </p>
        </header>

        {/* Grid */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRESENTATIONS.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative h-44 w-full bg-gray-100">
                {p.preview ? (
                  <Image
                    src={p.preview}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 text-xs">
                    No preview
                  </div>
                )}

                {/* File badge */}
                <span className="absolute top-2 right-2 text-[10px] bg-black/70 text-white px-2 py-1 rounded">
                  {getFileType(p.file)}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-sm leading-snug">
                  {p.title}
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  {p.presenter}
                </p>

                {/* Actions */}
                <div className="flex gap-2 mt-4">
                  <a
                    href={p.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold px-3 py-1.5 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
                  >
                    View
                  </a>

                  <a
                    href={p.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-red-700 text-white hover:bg-red-800 transition"
                  >
                    Open Drive
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-10 py-6 text-center text-xs text-gray-400 tracking-wide">
        GAiN Tanzania 2026 · Presentation Materials
      </footer>
    </main>
  );
}