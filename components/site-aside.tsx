"use client";

import Image from "next/image";

export default function SiteAside() {
  return (
    <aside
      className="
        hidden sm:flex
        fixed top-0 right-0 h-screen
        w-20 lg:w-24
        z-40
        bg-gradient-to-b from-slate-950 via-white to-black
        border-l border-white/10
        shadow-[0_0_60px_rgba(0,0,0,0.6)]
        flex-col
      "
    >
      {/* Spacer for header height */}
      <div className="h-[88px]" />

      {/* Middle Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Divider */}
        <div className="h-32 w-px bg-white/10" />

        {/* Vertical Text */}
        <div className="mt-10 rotate-90 text-xs tracking-[0.35em] uppercase text-white/40 font-semibold whitespace-nowrap">
          Seventh-day Adventist
        </div>
      </div>

      {/* Bottom Logo Section */}
      <div className="pb-8 flex flex-col items-center">
        {/* Soft Glow */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-red-600/20 blur-xl" />

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
      </div>
    </aside>
  );
}
