"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Presenters", href: "/presenters" },
  { name: "Resources", href: "/resources" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const active = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  // Close menu on route change
  useEffect(() => setMobileMenuOpen(false), [pathname]);

  // Lock background scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={cn(
            "mt-3 flex items-center justify-between rounded-2xl border",
            "border-white/10 bg-black/70 backdrop-blur-xl",
            "shadow-[0_12px_50px_rgba(0,0,0,0.45)]",
            "px-4 py-3 sm:px-5"
          )}
        >
          {/* Logo (round) + Name */}
          <Link href="/Gain.png" className="flex items-center gap-3 group">
            <div
              className={cn(
                "h-10 w-10 sm:h-11 sm:w-11 rounded-full overflow-hidden",
                "ring-1 ring-white/20 bg-white/10",
                "shadow-[0_8px_28px_rgba(0,0,0,0.35)]"
              )}
              aria-label="GAiN logo"
            >
              {/* Put your real file in /public then use this:
                  <img src="/gain-logo.png" alt="GAiN logo" className="h-full w-full object-cover" />
               */}
              <div className="h-full w-full grid place-items-center">
                <span className="text-xs font-black tracking-tight text-white/90">GAiN</span>
              </div>
            </div>

            <div className="leading-tight">
              <div className="text-base sm:text-lg font-extrabold tracking-tight text-white">
                GAiN Africa
              </div>
              <div className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-white/60">
                Integrated for Mission
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const isOn = active(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative rounded-xl px-4 py-2 text-sm font-semibold transition",
                    isOn
                      ? "text-white bg-white/10 ring-1 ring-white/15"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.name}
                  {isOn && (
                    <span className="absolute left-1/2 -bottom-[6px] h-1 w-1 -translate-x-1/2 rounded-full bg-blue-400" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop CTA */}
            <Button
              asChild
              className={cn(
                "hidden sm:inline-flex h-10 rounded-2xl px-4 text-sm font-semibold",
                "bg-blue-600 hover:bg-blue-600/90 shadow-lg shadow-blue-500/15"
              )}
            >
              <Link href="/register" className="inline-flex items-center gap-2">
                Register <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            {/* Mobile Toggle */}
            <button
              type="button"
              className={cn(
                "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-2xl",
                "bg-white/5 ring-1 ring-white/15 text-white hover:bg-white/10 transition"
              )}
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu (sheet) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

            {/* Panel */}
            <motion.div
              initial={{ y: -14, opacity: 0, scale: 0.985 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -14, opacity: 0, scale: 0.985 }}
              transition={{ type: "tween", duration: 0.22 }}
              className={cn(
                "absolute left-1/2 top-3 w-[calc(100%-2rem)] -translate-x-1/2",
                "rounded-3xl border border-white/10 bg-black/85 backdrop-blur-xl",
                "shadow-[0_22px_80px_rgba(0,0,0,0.6)] p-4"
              )}
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                  <div className="h-10 w-10 rounded-full overflow-hidden ring-1 ring-white/20 bg-white/10 grid place-items-center">
                    <span className="text-xs font-black text-white/90">GAiN</span>
                  </div>
                  <div className="leading-tight">
                    <div className="text-base font-extrabold text-white">GAiN Africa</div>
                    <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60">
                      Annual Conference
                    </div>
                  </div>
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/15 text-white hover:bg-white/10 transition"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 grid gap-2">
                {navigation.map((item) => {
                  const isOn = active(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold transition",
                        isOn
                          ? "bg-white/10 text-white ring-1 ring-white/15"
                          : "bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      <span>{item.name}</span>
                      <span className={cn("text-xs", isOn ? "text-blue-300" : "text-white/40")}>
                        {isOn ? "Active" : ""}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4 grid gap-2">
                <Button
                  asChild
                  className="h-11 w-full rounded-2xl bg-blue-600 hover:bg-blue-600/90 font-semibold"
                >
                  <Link href="/register" className="inline-flex items-center justify-center gap-2">
                    Register <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-11 w-full rounded-2xl bg-white/5 text-white border-white/15 hover:bg-white/10 font-semibold"
                >
                  <Link href="/events">View Events</Link>
                </Button>
              </div>

              <div className="mt-4 border-t border-white/10 pt-3 text-center text-xs text-white/55">
                “Integrated for Mission” • © {new Date().getFullYear()} GAiN Africa
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
