"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar } from "lucide-react";
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
    const onScroll = () => setScrolled(window.scrollY > 30);
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
            <div className="relative w-40 h-10">
              <Image
                src="/Diagnostics Ltd-bedford-logo.png"
                alt="AI Diagnostics Ltd"
                fill
                className="object-contain object-left mix-blend-screen"
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

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-[#b0b0b0] hover:text-white p-1.5 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>
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
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-[#141414] border-l border-[#252525] shadow-2xl z-50 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#252525]">
                <div className="relative w-28 h-9">
                  <Image src="/Diagnostics Ltd-bedford-vecot-icon.png" alt="AI Diagnostics Ltd" fill className="object-contain object-left" />
                </div>
                <button onClick={() => setOpen(false)} className="text-[#606060] hover:text-white p-1 transition-colors">
                  <X size={18} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 p-4 flex-1 overflow-y-auto">
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`px-4 py-3 rounded-xl text-sm transition-colors ${
                      pathname === href
                        ? "text-[#29abe2] bg-[#29abe2]/10 font-medium"
                        : "text-[#b0b0b0] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="p-4 border-t border-[#252525] flex flex-col gap-3">
                <a
                  href="tel:07986848798"
                  className="flex items-center gap-2 text-[#29abe2] text-sm px-4 py-2"
                >
                  <Phone size={14} />
                  07986 848798
                </a>
                <Link
                  href="/booking"
                  className="bg-[#29abe2] hover:bg-[#1a7fb5] text-white text-sm font-semibold px-5 py-3 rounded-xl text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <Calendar size={14} />
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
