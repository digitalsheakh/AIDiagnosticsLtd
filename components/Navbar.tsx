"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
        <div
          className={`pointer-events-auto w-full max-w-5xl flex items-center justify-between gap-4 h-14 px-4 rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "bg-[#141414]/95 backdrop-blur-xl border-[#2a2a2a]"
              : "bg-[#1a1a1a]/80 backdrop-blur-md border-[#303030]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <div className="relative w-44 h-11">
              <Image
                src="/logo.png"
                alt="AI Diagnostics Ltd"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3.5 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                  pathname === href
                    ? "text-[#29abe2] bg-[#29abe2]/10 font-medium"
                    : "text-[#b0b0b0] hover:text-white hover:bg-white/5 font-normal"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="https://maps.google.com/?q=18+College+St,+Bedford+MK42+8LU"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#b0b0b0] hover:text-[#29abe2] text-xs transition-colors"
            >
              <MapPin size={13} className="text-[#29abe2]" />
              18 College St, Bedford
            </a>
            <a
              href="tel:07986848798"
              className="flex items-center gap-1.5 text-[#29abe2] text-sm hover:text-[#4dc3f0] transition-colors"
            >
              <Phone size={13} />
              07986 848798
            </a>
            <Link
              href="/booking"
              className="bg-[#29abe2] hover:bg-[#1a7fb5] text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Calendar size={13} />
              Book Now
            </Link>
          </div>

          {/* Mobile right */}
          <div className="lg:hidden flex items-center gap-2">
            {scrolled && (
              <>
                <a
                  href="https://maps.google.com/?q=18+College+St,+Bedford+MK42+8LU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#29abe2] hover:text-[#4dc3f0] p-2 transition-colors"
                  aria-label="View location"
                >
                  <MapPin size={18} />
                </a>
                <a
                  href="tel:07986848798"
                  className="text-[#29abe2] hover:text-[#4dc3f0] p-2 transition-colors"
                  aria-label="Call us"
                >
                  <Phone size={18} />
                </a>
                <Link
                  href="/booking"
                  className="bg-[#29abe2] hover:bg-[#1a7fb5] text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors flex items-center gap-1"
                >
                  <Calendar size={14} />
                  Book
                </Link>
              </>
            )}
            <button
              className="text-[#b0b0b0] hover:text-white p-2 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-gradient-to-b from-[#1a1a1a] to-[#141414] border-l border-[#2a2a2a] shadow-2xl z-50 lg:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#2a2a2a]">
                <div className="relative w-36 h-10">
                  <Image src="/logo.png" alt="AI Diagnostics Ltd" fill className="object-contain object-left" />
                </div>
                <button onClick={() => setOpen(false)} className="text-[#808080] hover:text-white p-2 hover:bg-white/5 rounded-lg transition-all">
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1.5 p-5 flex-1 overflow-y-auto">
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`px-5 py-3.5 rounded-xl text-base font-medium transition-all ${
                      pathname === href
                        ? "text-white bg-[#29abe2] shadow-lg shadow-[#29abe2]/20"
                        : "text-[#b0b0b0] hover:text-white hover:bg-white/5 active:scale-95"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              {/* Bottom Actions */}
              <div className="p-5 border-t border-[#2a2a2a] bg-[#0f0f0f]/50 flex flex-col gap-3">
                <a
                  href="https://maps.google.com/?q=18+College+St,+Bedford+MK42+8LU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#b0b0b0] hover:text-[#29abe2] text-sm px-4 py-2.5 hover:bg-white/5 rounded-lg transition-all"
                >
                  <MapPin size={16} className="text-[#29abe2]" />
                  <span>18 College St, Bedford MK42 8LU</span>
                </a>
                <a
                  href="tel:07986848798"
                  className="flex items-center gap-3 text-[#29abe2] hover:text-[#4dc3f0] text-base font-medium px-4 py-2.5 hover:bg-[#29abe2]/5 rounded-lg transition-all"
                >
                  <Phone size={16} />
                  <span>07986 848798</span>
                </a>
                <Link
                  href="/booking"
                  className="bg-gradient-to-r from-[#29abe2] to-[#1a7fb5] hover:from-[#1a7fb5] hover:to-[#29abe2] text-white text-base font-bold px-6 py-4 rounded-xl text-center flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#29abe2]/20 active:scale-95"
                >
                  <Calendar size={16} />
                  Book an Appointment
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
