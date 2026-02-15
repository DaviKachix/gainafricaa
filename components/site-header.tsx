"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Presenters", href: "/presenters" },
  { name: "Resources", href: "/resources" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  // Add “WP smooth” header behavior on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth WP-like easing
  const easeOutSoft: any = [0.16, 1, 0.3, 1];

  // Subtle reveal only once (keeps it “sweet”, not noisy)
  const topBarAnim = useMemo(
    () =>
      reduceMotion
        ? {}
        : {
            initial: { y: -8, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.55, ease: easeOutSoft },
          },
    [reduceMotion]
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          {...topBarAnim}
          className={cn(
            "mt-3 flex items-center justify-between rounded-2xl border px-4 py-3 sm:px-5",
            // WP clean glass that deepens on scroll
            scrolled
              ? "border-black/10 bg-white/92 backdrop-blur-xl shadow-[0_14px_45px_rgba(0,0,0,0.14)]"
              : "border-black/10 bg-white/78 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.10)]",
            "transition-[background,box-shadow] duration-300"
          )}
        >
          {/* Logo (round) + Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={cn(
                "relative h-10 w-10 sm:h-11 sm:w-11 rounded-full overflow-hidden",
                "ring-1 ring-black/10 bg-white",
                "shadow-[0_10px_30px_rgba(0,0,0,0.10)]"
              )}
              aria-label="GAiN logo"
            >
              {/* red accent ring */}
              <span className="absolute inset-0 rounded-full ring-2 ring-red-600/20" />
                  <img src="/icon.jpg" alt="GAiN logo" className="h-full w-full object-cover" />
              <div className="h-full w-full grid place-items-center">
                <span className="text-xs font-black tracking-tight text-black">GAiN</span>
              </div>
            </div>

            <div className="leading-tight">
              <div className="flex items-center gap-2">
                <div className="text-base sm:text-lg font-extrabold tracking-tight text-black">
                  GAiN Tanzania
                </div>
                {/* small red dot accent */}
                <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-red-600" />
              </div>
              <div className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-black/60">
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
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/30",
                    isOn
                      ? "text-black bg-black/5 ring-1 ring-black/10"
                      : "text-black/70 hover:text-black hover:bg-black/5"
                  )}
                >
                  {item.name}
                  {isOn && (
                    <span className="absolute left-1/2 -bottom-[6px] h-1 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-red-600 to-red-600/30" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">

            {/* Mobile Toggle */}
            <button
              type="button"
              className={cn(
                "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-2xl",
                "bg-black text-white ring-1 ring-black/10 hover:bg-black/90 transition",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/30"
              )}
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu (slide from left, WHITE, smooth + premium) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16, ease: easeOutSoft }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close menu backdrop"
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/45"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={reduceMotion ? undefined : { opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.18, ease: easeOutSoft }}
            />

            {/* Panel (Left slide) */}
            <motion.aside
              initial={reduceMotion ? { x: 0 } : { x: "-100%" }}
              animate={{ x: 0 }}
              exit={reduceMotion ? { x: 0 } : { x: "-100%" }}
              transition={{ type: "tween", duration: 0.28, ease: easeOutSoft }}
              className={cn(
                "absolute left-0 top-0 h-full w-[86%] max-w-sm",
                "bg-white border-r border-black/10",
                "shadow-[0_24px_90px_rgba(0,0,0,0.22)]"
              )}
            >
              {/* Header */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="flex items-center gap-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="relative h-10 w-10 rounded-full overflow-hidden ring-1 ring-black/10 bg-white grid place-items-center">
                      <span className="absolute inset-0 rounded-full ring-2 ring-red-600/20" />
                      <img src="/icon.jpg"/>
                      <span className="text-xs font-black text-black">GAiN</span>
                    </div>
                    <div className="leading-tight">
                      <div className="text-base font-extrabold text-black">GAiN Tanzania</div>
                      <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-black/55">
                        Integrated for Mission
                      </div>
                    </div>
                  </Link>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-white hover:bg-black/90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/30"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Red accent line */}
                <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-red-600 via-red-600/35 to-transparent" />
              </div>

              {/* Nav */}
              <div className="px-4 pb-4">
                <div className="grid gap-2">
                  {navigation.map((item, idx) => {
                    const isOn = active(item.href);
                    return (
                      <motion.div
                        key={item.name}
                        initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                        animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                        transition={{ delay: 0.03 + idx * 0.04, duration: 0.35, ease: easeOutSoft }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold transition",
                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/25",
                            isOn
                              ? "bg-black/5 text-black ring-1 ring-black/10"
                              : "bg-white text-black/80 hover:bg-black/5"
                          )}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={cn(
                                "h-2 w-2 rounded-full",
                                isOn ? "bg-red-600" : "bg-black/15"
                              )}
                            />
                            {item.name}
                          </span>

                          {/* keep this detail: active label */}
                          <span className={cn("text-xs", isOn ? "text-red-600" : "text-black/35")}>
                            {isOn ? "Active" : ""}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTAs */}
                <div className="mt-4 grid gap-2">
                  <Button
                    asChild
                    className="h-11 w-full rounded-2xl bg-black text-white hover:bg-black/90 font-semibold shadow-[0_14px_30px_rgba(0,0,0,0.14)]"
                  >
                    <Link href="/register" className="inline-flex items-center justify-center gap-2">
                      Register <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-11 w-full rounded-2xl bg-white text-black border-black/10 hover:bg-black/5 font-semibold"
                  >
                    <Link href="/events">View Events</Link>
                  </Button>
                </div>

                {/* Footer note (kept) */}
                <div className="mt-4 border-t border-black/10 pt-3 text-center text-xs text-black/55">
                  “Integrated for Mission” • © {new Date().getFullYear()} GAiN Tanzania
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
