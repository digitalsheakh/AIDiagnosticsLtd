"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const badges = [
  "No Payment Upfront",
  "All Makes & Models",
  "Dealer-Level Equipment",
  "Genuine Parts Used",
  "11+ Years Experience",
  "DVSA Authorised MOT",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#2a2a2a] overflow-hidden">
      {/* Background Video/Image - Uncomment to use */}
      {/* 
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      */}
      
      {/* Or use a background image instead: */}
      {/* 
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
      />
      */}
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a2a]/80 via-[#2a2a2a]/90 to-[#2a2a2a]" />
      
      {/* Main content area */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28 pt-20 pb-8">
        <div className="w-full max-w-4xl text-center">

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
          >
            
            <motion.h1
              variants={item}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Expert Car Care in{" "}
              <span className="text-[#29abe2]">Bedford</span>
            </motion.h1>

            <motion.p
              variants={item}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-white text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Professional MOT testing, servicing, and diagnostics with{" "}
              <span className="font-bold">11+ years experience</span>. 
              Dealership quality at honest prices.
            </motion.p>

            <motion.div
              variants={item}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <Link
                href="/booking"
                className="bg-[#29abe2] hover:bg-[#1a7fb5] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Book Appointment
              </Link>
              <a
                href="tel:07986848798"
                className="border-2 border-[#404040] hover:border-[#29abe2] bg-[#1e1e1e]/50 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 flex items-center gap-2 hover:bg-[#1e1e1e]"
              >
                <Phone size={18} className="text-[#29abe2]" />
                07986 848798
              </a>
            </motion.div>
            
            <motion.div
              variants={item}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap justify-center items-center gap-6 text-base"
            >
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-[#29abe2]" />
                <span className="text-white font-medium">No Upfront Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-[#29abe2]" />
                <span className="text-white font-medium">DVSA Authorised</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-[#29abe2]" />
                <span className="text-white font-medium">All Makes & Models</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Trust badges strip — marquee on all sizes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="relative z-10 w-full border-t border-[#404040] bg-[#242424] overflow-hidden"
      >
        <div className="flex animate-marquee gap-12 py-4 w-max">
          {[...badges, ...badges].map((b, i) => (
            <span key={`${b}-${i}`} className="flex items-center gap-2.5 text-sm text-white font-medium shrink-0 whitespace-nowrap">
              <CheckCircle size={15} className="text-[#29abe2]" />
              {b}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
