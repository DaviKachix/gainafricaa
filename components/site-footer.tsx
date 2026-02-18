"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[420px] w-[760px] bg-blue-900/12 blur-3xl rounded-full" />
        <div className="absolute -bottom-56 right-[-140px] h-[560px] w-[560px] bg-red-600/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              {/* Logo */}
              <div className="relative h-12 w-12 rounded-full overflow-hidden bg-white/10 ring-1 ring-white/18 shadow-[0_14px_32px_rgba(0,0,0,0.45)]">
                <Image
                  src="/icon.jpg"
                  alt="GAiN Tanzania"
                  fill
                  priority
                  className="object-cover"
                />
                {/* red accent */}
                <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-red-600/20" />
              </div>

              {/* Name */}
              <div className="leading-tight">
                <div className="text-2xl font-extrabold tracking-tight text-white">
                  GAiN <span className="text-white/90">Tanzania</span>
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/55 font-semibold">
                  Integrated for Mission
                </div>
              </div>
            </Link>

            <p className="mt-5 text-sm sm:text-base text-white/70 max-w-md leading-relaxed">
              Global Adventist Internet Network — bringing together Adventist media and communication professionals
              to strengthen collaboration and advance the mission of the Church.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: FaFacebookF, label: "Facebook" },
                { Icon: FaTwitter, label: "Twitter" },
                { Icon: FaInstagram, label: "Instagram" },
                { Icon: FaLinkedinIn, label: "LinkedIn" },
              ].map(({ Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  className="h-10 w-10 rounded-full bg-white/5 ring-1 ring-white/14 flex items-center justify-center text-white/70
                             hover:text-white hover:bg-white/10 hover:ring-red-600/30 transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { href: "/events", label: "Events" },
                { href: "/presenters", label: "Presenters" },
                { href: "/resources", label: "Resources" },
                { href: "/register", label: "Register" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-white transition inline-flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600/60" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a href="mailto:info@gainafrica.org" className="hover:text-white transition">
                  info@gainafrica.org
                </a>
              </li>
              <li className="text-white/50">Follow us on social platforms</li>
            </ul>

            {/* Small CTA */}
            <div className="mt-6">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-semibold
                           bg-white text-red-700 hover:bg-white/90 transition
                           shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
            <div>© {year} GAiN Tanzania. All rights reserved.</div>

            <div className="flex items-center gap-5 text-xs">
              <Link href="/privacy" className="hover:text-white transition">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:hidden z-50">
        <Link
          href="/register"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-red-700 font-semibold
                     shadow-lg shadow-black/30 hover:bg-white/90 transition"
        >
          Register Now
        </Link>
      </div>
    </footer>
  );
}
