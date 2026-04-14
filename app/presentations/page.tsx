"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Presentation {
  title: string;
  presenter: string;
  fileName: string;
  viewId: string;
  preview?: string;
}

const PRESENTATIONS: Presentation[] = [
  {
    title: "Integrating Digital Tools Into Pastoral Ministry",
    presenter: "Pr Azza Nyamakababi",
    fileName:
      "03.02.2026 Intergrating Digital Tools Into Pastoral Ministry.pptx",
    viewId: "https://docs.google.com/presentation/d/1CDhUBbVHfh9IBbX-yexwtmMN1m-uB3BW/edit?usp=drive_link&ouid=113483345363854961033&rtpof=true&sd=true",
    preview:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Digital Fishermen",
    presenter: "Ramiro Quero",
    fileName: "Digital Fishermen PDF GAiN 2026 TZ.pdf",
    viewId: "FILE_ID_2",
    preview:
      "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Christ Method Alone - Mission Intelligence",
    presenter: "Sam Neves, PhD",
    fileName: "GAiN26 TZ Christ Method Alone - Mission Intelligence.pdf",
    viewId: "FILE_ID_3",
    preview:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "GAiN Opening Speech 2026",
    presenter: "Pr David Mpwani",
    fileName: "GAIN OPENING SPEECH 2026.pptx",
    viewId: "FILE_ID_4",
    preview:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mission Intelligence HCI Slide Deck",
    presenter: "Ramiro Quero",
    fileName:
      "Quero Mission Intelligence HCI Slide Deck GAiN 2026 TZ.pptx",
    viewId: "FILE_ID_5",
    preview:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  },
];

function getDriveViewLink(id: string) {
  return `https://drive.google.com/file/d/${id}/view`;
}

function getDriveDownloadLink(id: string) {
  return `https://drive.google.com/uc?export=download&id=${id}`;
}

function getFileType(name: string) {
  if (name.includes(".pdf")) return "PDF";
  if (name.includes(".ppt") || name.includes(".pptx")) return "PPT";
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
              key={p.fileName}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >

              {/* Image */}
              <div className="relative h-44 w-full bg-gray-100">
                {p.preview && (
                  <Image
                    src={p.preview}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                )}

                <span className="absolute top-2 right-2 text-[10px] bg-black/70 text-white px-2 py-1 rounded">
                  {getFileType(p.fileName)}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-sm">
                  {p.title}
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  {p.presenter}
                </p>

                {/* Actions */}
                <div className="flex gap-2 mt-4">
                  <a
                    href={getDriveViewLink(p.viewId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold px-3 py-1.5 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
                  >
                    View
                  </a>

                  <a
                    href={getDriveDownloadLink(p.viewId)}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-red-700 text-white hover:bg-red-800 transition"
                  >
                    Download
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
      </div>

      <footer className="border-t border-gray-100 mt-10 py-6 text-center text-xs text-gray-400">
        GAiN Tanzania 2026 · Presentation Materials
      </footer>
    </main>
  );
}