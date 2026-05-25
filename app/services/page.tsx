import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Phone, ArrowRight, Send, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { services } from "@/lib/services";
import ChatBot from "@/components/ChatBot";

export const metadata: Metadata = {
  title: "Car Services in Bedford — AI Diagnostics Ltd",
  description:
    "MOT testing, servicing, diagnostics, timing belt, clutch, brake fluid, air con re-gas and more in Bedford. All makes and models. DVSA authorised. AI Diagnostics Ltd.",
};

const W = "w-full px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28";

const WHY_ITEMS = [
  { label: "DVSA Authorised MOT" },
  { label: "11+ Years Experience" },
  { label: "Dealer-Level Equipment" },
  { label: "Genuine Parts Used" },
];

// To add a real photo for a service, drop a .jpg into /public/services/
// using the service slug as the filename, e.g. /public/services/mot-testing.jpg
// Then replace PLACEHOLDER below with serviceImage(service.slug) in the grid.
const serviceImage = (slug: string) => `/services/${slug}.jpg`;
void serviceImage; // referenced above — remove when images are added

const PLACEHOLDER = "/Diagnostics Ltd-bedford.png";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e1e1e] pt-28 pb-16">
        <div className={`${W} text-center`}>
          <FadeIn>
            <span className="inline-block bg-[#29abe2]/10 border border-[#29abe2]/30 text-[#29abe2] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Bedford Car Specialists
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4 leading-tight">
              Expert Car Services in Bedford
            </h1>
            <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto mb-8">
              From routine MOTs and servicing to specialist diagnostics and German vehicle
              expertise — everything your car needs, under one roof.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/booking"
                className="bg-[#29abe2] hover:bg-[#1a7fb5] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                Book Online <ArrowRight size={16} />
              </Link>
              <a
                href="tel:07986848798"
                className="border border-[#404040] text-white hover:border-[#29abe2] font-semibold px-8 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <Phone size={16} className="text-[#29abe2]" /> Call Us
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#2a2a2a] py-20">
        <div className={W}>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {services.map((service, i) => {
              const isPoa = service.price === "POA" || service.isQuote;
              return (
                <FadeIn key={service.slug} delay={i * 0.04}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group bg-[#333] border border-[#404040] hover:border-[#29abe2]/60 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                  >
                    {/* Image — swap PLACEHOLDER for serviceImage(service.slug) once real photos are added */}
                    <div className="relative w-full h-32 sm:h-44 shrink-0 overflow-hidden">
                      <Image
                        src={PLACEHOLDER}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                      {/* dark overlay so text on top stays legible */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#333]/80 via-transparent to-transparent" />
                      {/* Price badge overlaid on image */}
                      <span
                        className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${
                          isPoa
                            ? "bg-[#1e1e1e]/80 text-[#a0a0a0]"
                            : "bg-[#29abe2] text-white"
                        }`}
                      >
                        {isPoa ? "POA" : service.price}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-3 sm:p-5">
                      <h2 className="text-white font-bold text-sm sm:text-lg group-hover:text-[#29abe2] transition-colors leading-snug mb-1 sm:mb-2">
                        {service.name}
                      </h2>
                      <p className="text-[#a0a0a0] text-xs sm:text-sm leading-relaxed flex-1 line-clamp-2 sm:line-clamp-none">
                        {service.tagline}
                      </p>
                      <span className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 text-[#29abe2] text-xs sm:text-sm font-medium group-hover:gap-2.5 transition-all">
                        View <ArrowRight size={12} className="sm:hidden" />
                        <span className="hidden sm:inline">& Book</span> <ArrowRight size={13} className="hidden sm:inline" />
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us strip */}
      <section className="bg-[#1e1e1e] py-14 border-y border-[#404040]">
        <div className={W}>
          <FadeIn className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {WHY_ITEMS.map(({ label }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 bg-[#29abe2]/10 border border-[#29abe2]/20 rounded-xl flex items-center justify-center">
                  <CheckCircle size={20} className="text-[#29abe2]" />
                </div>
                <p className="text-white font-semibold text-sm">{label}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Bottom CTA banner */}
      <section className="bg-[#29abe2] py-14">
        <div className={`${W} text-center`}>
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Not Sure What You Need?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Give us a call or send an enquiry — we will advise you honestly on the best
              service for your vehicle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:07986848798"
                className="bg-white text-[#29abe2] hover:bg-[#f0f9ff] font-bold px-8 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <Phone size={16} /> 07986 848798
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <Send size={15} /> Send Enquiry
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <ChatBot />
    </>
  );
}
