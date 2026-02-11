"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Calendar, Mic } from "lucide-react";

export default function PresentersPage() {
  return (
    <main className="relative min-h-screen bg-gray-50 overflow-hidden">
      
      {/* Background Soft Accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] bg-blue-900/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight"
        >
          Conference Presenters
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 max-w-3xl mx-auto text-gray-700 text-lg sm:text-xl leading-relaxed"
        >
          GAiN Africa 2026 will feature experienced 
          <span className="font-semibold text-gray-900"> media leaders</span>, 
          <span className="font-semibold text-blue-900"> communication strategists</span>, 
          and <span className="font-semibold text-gray-900"> digital mission pioneers</span> 
          from across the continent and beyond.
        </motion.p>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-16 mx-auto max-w-2xl rounded-3xl bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5 p-10"
        >
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-blue-900/10 ring-1 ring-blue-900/20 flex items-center justify-center">
              <Mic className="h-8 w-8 text-blue-900" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            Speaker Lineup Coming Soon
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our keynote and workshop presenters are being finalized. 
            Stay tuned as we prepare a powerful lineup of leaders committed 
            to strengthening digital mission across Africa.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="rounded-2xl px-6 py-3 bg-blue-900 hover:bg-blue-900/90 text-white font-semibold"
            >
              <Link href="/register">Register Now</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-2xl px-6 py-3 border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold"
            >
              <Link href="/events">View Program</Link>
            </Button>
          </div>
        </motion.div>

        {/* Footer Note */}
        <div className="mt-20 text-sm text-gray-500">
          More updates will be announced soon. Follow official GAiN Africa channels for updates.
        </div>
      </div>
    </main>
  );
}
