"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, FileText, Image as ImageIcon, Video, BookOpen, X } from "lucide-react";

type ResourceKey = "guide" | "media" | "slides" | "recordings";

export default function ResourcesPage() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<{ title: string; note: string } | null>(null);

  const openModal = (key: ResourceKey) => {
    const map: Record<ResourceKey, { title: string; note: string }> = {
      guide: { title: "Conference Guide", note: "This download is being prepared and will be published soon." },
      media: { title: "Media Kit", note: "Logos and official promo materials will be available soon." },
      slides: { title: "Session Slides", note: "Slides will be released after the conference sessions." },
      recordings: { title: "Recordings", note: "Session recordings will be posted as they are processed." },
    };
    setActive(map[key]);
    setOpen(true);
  };

  const closeModal = () => setOpen(false);

  // ESC to close + lock scroll
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <main className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Soft Background Accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] bg-blue-900/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
            Conference Resources
          </h1>

          <p className="mt-6 text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Access official materials, downloads, media assets, and supporting documents for{" "}
            <span className="font-semibold text-gray-900">GAiN Africa 2026</span>.
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Conference Guide */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-3xl bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
          >
            <div className="h-14 w-14 rounded-full bg-blue-900/10 ring-1 ring-blue-900/20 flex items-center justify-center mb-5">
              <BookOpen className="h-6 w-6 text-blue-900" />
            </div>

            <h3 className="text-xl font-bold text-gray-900">Conference Guide</h3>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Official event handbook including venue information, session tracks, and important announcements.
            </p>

            <Button
              onClick={() => openModal("guide")}
              variant="outline"
              className="mt-6 rounded-2xl w-full border-gray-300 text-gray-800 hover:bg-gray-100 font-semibold"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </motion.div>

          {/* Media Kit */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-3xl bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
          >
            <div className="h-14 w-14 rounded-full bg-blue-900/10 ring-1 ring-blue-900/20 flex items-center justify-center mb-5">
              <ImageIcon className="h-6 w-6 text-blue-900" />
            </div>

            <h3 className="text-xl font-bold text-gray-900">Media Kit</h3>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Download logos, posters, promotional materials, and official branding assets.
            </p>

            <Button
              onClick={() => openModal("media")}
              variant="outline"
              className="mt-6 rounded-2xl w-full border-gray-300 text-gray-800 hover:bg-gray-100 font-semibold"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </motion.div>

          {/* Session Slides */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-3xl bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
          >
            <div className="h-14 w-14 rounded-full bg-blue-900/10 ring-1 ring-blue-900/20 flex items-center justify-center mb-5">
              <FileText className="h-6 w-6 text-blue-900" />
            </div>

            <h3 className="text-xl font-bold text-gray-900">Session Slides</h3>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Access workshop presentations and keynote materials after the conference.
            </p>

            <Button
              onClick={() => openModal("slides")}
              variant="outline"
              className="mt-6 rounded-2xl w-full border-gray-300 text-gray-800 hover:bg-gray-100 font-semibold"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </motion.div>

          {/* Video Recordings */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-3xl bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
          >
            <div className="h-14 w-14 rounded-full bg-blue-900/10 ring-1 ring-blue-900/20 flex items-center justify-center mb-5">
              <Video className="h-6 w-6 text-blue-900" />
            </div>

            <h3 className="text-xl font-bold text-gray-900">Recordings</h3>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Replay key sessions and special moments from GAiN Africa 2026.
            </p>

            <Button
              onClick={() => openModal("recordings")}
              variant="outline"
              className="mt-6 rounded-2xl w-full border-gray-300 text-gray-800 hover:bg-gray-100 font-semibold"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </motion.div>
        </div>

        {/* Update Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-black/10 shadow-sm">
            <Download className="h-4 w-4 text-blue-900" />
            <span className="text-sm font-semibold text-gray-800">Resources will be updated regularly.</span>
          </div>

          <p className="mt-4 text-gray-500 text-sm">
            Please check back frequently for new materials and official downloads.
          </p>

          <div className="mt-8">
            <Button
              asChild
              className="rounded-2xl px-6 py-3 bg-blue-900 hover:bg-blue-900/90 text-white font-semibold"
            >
              <Link href="/register">Register for Conference</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Popup / Modal */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.18 }}
            >
              <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl ring-1 ring-black/10 overflow-hidden">
                <div className="p-5 flex items-center justify-between border-b border-black/5">
                  <div className="text-sm font-bold tracking-tight text-gray-900">
                    {active?.title ?? "Resource"}
                  </div>
                  <button
                    onClick={closeModal}
                    className="h-9 w-9 rounded-2xl bg-gray-50 ring-1 ring-black/5 grid place-items-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="p-7 text-center">
                  <div className="mx-auto h-14 w-14 rounded-full bg-blue-900/10 ring-1 ring-blue-900/15 grid place-items-center">
                    <Download className="h-6 w-6 text-blue-900" />
                  </div>

                  <h3 className="mt-4 text-xl font-black text-gray-900">Coming Soon</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {active?.note ?? "This resource is being prepared. Please check back soon."}
                  </p>

                  <div className="mt-6 flex gap-3 justify-center">
                    <Button
                      onClick={closeModal}
                      className="h-11 rounded-2xl px-6 bg-blue-900 hover:bg-blue-900/90 text-white font-semibold"
                    >
                      Close
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="h-11 rounded-2xl px-6 bg-white border-gray-300 text-gray-800 hover:bg-gray-50 font-semibold"
                    >
                      <Link href="/register">Register</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
