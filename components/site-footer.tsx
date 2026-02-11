import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export function SiteFooter() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Soft Background Accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] bg-blue-900/10 blur-3xl rounded-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          
          {/* Logo & Mission */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              {/* Round Logo */}
              <div className="h-12 w-12 rounded-full overflow-hidden bg-white/10 ring-1 ring-white/20 grid place-items-center shadow-lg">
                {/* Replace with real logo */}
                <span className="text-xs font-black tracking-tight text-white">
                  GAiN
                </span>
              </div>

              <div>
                <div className="text-2xl font-extrabold tracking-tight">
                  GAiN Africa
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/60 font-semibold">
                  Integrated for Mission
                </div>
              </div>
            </Link>

            <p className="mt-6 text-sm sm:text-base text-white/70 max-w-md leading-relaxed">
              Global Adventist Internet Network — bringing together Adventist
              media and communication professionals across Africa to strengthen
              collaboration and advance the mission of the Church.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="h-10 w-10 rounded-full bg-white/5 ring-1 ring-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-blue-900/40 transition"
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <Link href="/events" className="text-white/70 hover:text-white transition">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/presenters" className="text-white/70 hover:text-white transition">
                  Presenters
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-white/70 hover:text-white transition">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-white/70 hover:text-white transition">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Contact
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="mailto:info@gainafrica.org"
                  className="hover:text-white transition"
                >
                  info@gainafrica.org
                </a>
              </li>
              <li className="text-white/50">
                Follow us on social platforms
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} GAiN Africa. All rights reserved.
        </div>
      </div>

      {/* Mobile Bottom CTA (refined) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:hidden z-50">
        <Link
          href="/register"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-900 text-white font-semibold shadow-lg shadow-blue-900/20 hover:bg-blue-900/90 transition"
        >
          Register Now
        </Link>
      </div>
    </footer>
  );
}
