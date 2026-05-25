import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { services } from "@/lib/services";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pricing – AI Diagnostics Ltd Bedford",
  description:
    "Transparent, fixed prices for MOT testing, vehicle servicing, diagnostics and more at AI Diagnostics Ltd in Bedford. No hidden charges.",
};

const W = "w-full px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28";

const motPricing = [
  { label: "MOT Testing", price: "£40", note: "DVSA authorised test" },
  { label: "Pre MOT Check", price: "£20", note: "Catch failures early" },
  { label: "MOT + Interim Service", price: "£194.57", note: "Save money vs separate", highlight: true },
  { label: "MOT + Full Service", price: "£227.53", note: "Save money vs separate", highlight: true },
  { label: "MOT + Major Service", price: "£311.28", note: "Best value bundle", highlight: true },
];

const servicePkgs = [
  {
    name: "Interim Service",
    price: "£154.57",
    items: "25 point check",
    freq: "Every 6 months or 6,000 miles",
    desc: "Essential oil service to keep your engine healthy between full services.",
    includes: [
      "Engine oil & filter change",
      "Tyre pressures & condition",
      "Brake pad & fluid level check",
      "Screen wash & fluid top ups",
      "Lights & battery visual",
      "Air filter visual inspection",
    ],
  },
  {
    name: "Full Service",
    price: "£187.53",
    items: "40 point check",
    freq: "Every 12 months or 12,000 miles",
    desc: "Comprehensive annual service covering 40 items to manufacturer specification.",
    includes: [
      "All Interim Service items",
      "Air filter replacement",
      "Cabin / pollen filter replacement",
      "Coolant & power steering fluid check",
      "Battery health test",
      "Brake disc & caliper inspection",
    ],
    popular: true,
  },
  {
    name: "Major Service",
    price: "£271.28",
    items: "60 point check",
    freq: "Every 24 months or 24,000 miles",
    desc: "The most thorough care for your vehicle, everything in a full service, plus more.",
    includes: [
      "All Full Service items",
      "Spark plug replacement",
      "Fuel filter replacement",
      "Coolant flush & refill",
      "Brake fluid flush",
      "Suspension & wheel bearing inspection",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e1e1e] pt-28 pb-16 border-b border-[#404040]">
        <div className={`${W} text-center`}>
          <FadeIn>
            <span className="text-[#29abe2] text-xs font-semibold uppercase tracking-widest">No Hidden Charges</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">Transparent Pricing</h1>
            <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
              Fixed, upfront prices, no surprises. All work explained before we start, and you only pay when it&apos;s done.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* MOT */}
      <section className="bg-[#2a2a2a] py-16">
        <div className={W}>
          <FadeIn className="mb-10">
            <span className="text-[#29abe2] text-xs font-semibold uppercase tracking-widest">MOT Testing</span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-2">MOT & Bundle Prices</h2>
            <p className="text-[#a0a0a0]">Combine your MOT with a service and save, one visit, everything done.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {motPricing.map(({ label, price, note, highlight }, i) => (
              <FadeIn key={label} delay={i * 0.06}>
                <div className={`rounded-xl p-5 border flex flex-col gap-1 h-full transition-colors ${
                  highlight
                    ? "bg-[#29abe2]/10 border-[#29abe2]/40"
                    : "bg-[#333] border-[#404040]"
                }`}>
                  <p className="text-white font-semibold text-sm leading-snug">{label}</p>
                  <p className="text-[#29abe2] font-bold text-2xl">{price}</p>
                  {note && <p className="text-[#a0a0a0] text-xs mt-0.5">{note}</p>}
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="text-[#606060] text-xs mt-5">
            * Bundle prices apply when MOT and service are booked together. Free retest on items repaired with us.
          </p>
        </div>
      </section>

      {/* Service Packages */}
      <section className="bg-[#1e1e1e] py-16 border-y border-[#404040]">
        <div className={W}>
          <FadeIn className="text-center mb-12">
            <span className="text-[#29abe2] text-xs font-semibold uppercase tracking-widest">Service Packages</span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-3">Choose Your Service Level</h2>
            <p className="text-[#a0a0a0] max-w-lg mx-auto">
              All services use quality parts and follow manufacturer guidelines to protect your warranty.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicePkgs.map(({ name, price, items, freq, desc, includes, popular }, i) => (
              <FadeIn key={name} delay={i * 0.08}>
                <div className={`relative rounded-2xl border p-7 flex flex-col h-full ${
                  popular
                    ? "bg-[#29abe2]/8 border-[#29abe2]/50"
                    : "bg-[#2a2a2a] border-[#404040]"
                }`}>
                  {popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#29abe2] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                      Most Popular
                    </span>
                  )}
                  <div className="mb-5">
                    <h3 className="text-white font-bold text-xl mb-1">{name}</h3>
                    <p className="text-[#606060] text-xs mb-3">{freq}</p>
                    <div className="flex items-end gap-2 mb-3">
                      <span className="text-[#29abe2] font-bold text-3xl">{price}</span>
                      <span className="text-[#a0a0a0] text-sm mb-1">{items}</span>
                    </div>
                    <p className="text-[#a0a0a0] text-sm leading-relaxed">{desc}</p>
                  </div>
                  <ul className="flex flex-col gap-2.5 flex-1 mb-7">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#d0d0d0]">
                        <CheckCircle size={13} className="text-[#29abe2] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/booking"
                    className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2 ${
                      popular
                        ? "bg-[#29abe2] hover:bg-[#1a7fb5] text-white"
                        : "border border-[#29abe2] text-[#29abe2] hover:bg-[#29abe2] hover:text-white"
                    }`}
                  >
                    Book This Service <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="bg-[#2a2a2a] py-16">
        <div className={W}>
          <FadeIn className="mb-10">
            <span className="text-[#29abe2] text-xs font-semibold uppercase tracking-widest">All Services</span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-2">Complete Service List</h2>
            <p className="text-[#a0a0a0]">
              POA (price on application) services are quoted after a free diagnostic or assessment.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {services.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 0.02}>
                <Link
                  href={`/services/${service.slug}`}
                  className="bg-[#333] border border-[#404040] hover:border-[#29abe2]/50 rounded-xl px-5 py-4 flex items-center justify-between transition-all hover:-translate-y-0.5 group"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm group-hover:text-[#29abe2] transition-colors">{service.name}</p>
                    <p className="text-[#606060] text-xs mt-0.5 truncate">{service.tagline}</p>
                  </div>
                  <span className={`font-bold text-base ml-4 shrink-0 ${service.isQuote ? "text-[#a0a0a0]" : "text-[#29abe2]"}`}>
                    {service.price}
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.1}>
            <p className="text-[#606060] text-sm mt-6 text-center">
              Can&apos;t see what you need?{" "}
              <Link href="/contact" className="text-[#29abe2] hover:underline">
                Get in touch for a free quote →
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
