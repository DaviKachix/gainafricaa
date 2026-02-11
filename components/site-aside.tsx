"use client";

import Image from "next/image";

export default function SiteAside() {
  return (
    <aside
      className="
        hidden sm:flex fixed top-0 right-0 h-screen 
        w-20 lg:w-24 
        bg-gradient-to-b from-slate-950 via-blue-950 to-black
        backdrop-blur-xl
        z-[50] flex-col items-center py-8
        border-l border-white/10
        shadow-[0_0_60px_rgba(0,0,0,0.6)]
      "
    >
      {/* Logo Container */}
      <div className="relative mt-4">
        {/* Soft Glow */}
        <div className="absolute inset-0 rounded-full bg-blue-900/30 blur-xl" />

        {/* Perfect Round Logo */}
        <div
          className="
            relative w-14 h-14 lg:w-16 lg:h-16
            rounded-full overflow-hidden
            ring-2 ring-white/20
            shadow-[0_10px_40px_rgba(0,0,0,0.5)]
            transition duration-300 hover:scale-105
          "
        >
          <Image
            src="/SDA-Logo.png"
            alt="Seventh-day Adventist Logo"
            fill
            className="object-cover scale-110"
            priority
          />
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 h-32 w-px bg-white/10" />

      {/* Vertical Text */}
      <div className="mt-10 rotate-90 text-xs tracking-[0.35em] uppercase text-white/40 font-semibold">
        Seventh-day Adventist
      </div>
    </aside>
  );
}
