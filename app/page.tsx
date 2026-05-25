import Link from "next/link";
import {
  CheckCircle, Star, ArrowRight, Phone, Clock, Shield, Zap, Award, MapPin,
  Wrench, Settings, Cpu, RefreshCw, Car, Wind, Disc, MessageCircle,
} from "lucide-react";
import VehicleLookup from "@/components/VehicleLookup";
import HeroSection from "@/components/HeroSection";
import FadeIn from "@/components/FadeIn";
import { services as allServices } from "@/lib/services";

const W = "w-full px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28";

const featuredSlugs = [
  "mot-testing",
  "full-service",
  "diagnostic-check",
  "clutch-replacement",
  "brake-repairs",
  "air-con-regas",
];

const slugIcons: Record<string, React.ElementType> = {
  "mot-testing": Wrench,
  "full-service": Settings,
  "diagnostic-check": Cpu,
  "clutch-replacement": RefreshCw,
  "brake-repairs": Disc,
  "air-con-regas": Wind,
};

const featuredServices = featuredSlugs
  .map((slug) => {
    const s = allServices.find((x) => x.slug === slug)!;
    return { ...s, Icon: slugIcons[slug] };
  });

const steps = [
  { title: "Choose Your Service", desc: "Enter your car registration for an instant vehicle check. Browse our services and find the right one for you.", Icon: Zap },
  { title: "Book Your Appointment", desc: "Request a time and date that suits you, available online 24/7. We'll confirm your booking promptly.", Icon: Clock },
  { title: "Pay When It's Done", desc: "No deposit, no upfront payment. You only pay once the work is completed to your satisfaction.", Icon: Shield },
];

const stats = [
  { value: "11+", label: "Years Experience" },
  { value: "£40", label: "MOT from" },
  { value: "5★", label: "Customer Rating" },
  { value: "DVSA", label: "Authorised" },
];

const testimonials = [
  { name: "Sarah M.", text: "Friendly customer service with a smile, efficient and very reasonable with the pricing. Highly recommend and will be back again. It's good to know this business is also offering breakdown recovery, useful number to have saved!", rating: 5 },
  { name: "James T.", text: "Excellent service at short notice, really impressed. Came in for a service without prior booking and they sorted me out straight away. Would highly recommend.", rating: 5 },
  { name: "Priya K.", text: "Helpful team, kept me informed throughout and sorted a previous garage issue another place couldn't fix. Honest and transparent, exactly what you want from a garage.", rating: 5 },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Vehicle Lookup */}
      <section className="bg-[#1e1e1e] py-16 border-y border-[#404040]">
        <div className={W}>
          <FadeIn className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Get an Instant Quote</h2>
            <p className="text-white/90">Enter your registration to check your vehicle and get prices</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <VehicleLookup />
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#29abe2] py-12">
        <div className={W}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map(({ value, label }, i) => (
              <FadeIn key={label} delay={i * 0.07}>
                <p className="text-3xl sm:text-4xl font-bold text-white">{value}</p>
                <p className="text-white/80 text-sm mt-1">{label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#2a2a2a] py-24">
        <div className={W}>
          <FadeIn className="text-center mb-14">
            <span className="text-[#29abe2] text-xs font-semibold uppercase tracking-widest">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">Our Services</h2>
            <p className="text-white/90 max-w-xl mx-auto">
              A full-service garage in Bedford, from routine MOTs and servicing to specialist diagnostics.
              All services under one roof.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {featuredServices.map(({ Icon, name, slug, tagline, price, isQuote }, i) => (
              <FadeIn key={slug} delay={i * 0.06}>
                <Link
                  href={`/services/${slug}`}
                  className="group bg-[#333] border border-[#404040] hover:border-[#29abe2] rounded-xl p-7 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 bg-[#29abe2]/10 border border-[#29abe2]/20 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-[#29abe2]" />
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap ml-3 ${isQuote ? "text-[#a0a0a0] bg-white/5" : "text-[#29abe2] bg-[#29abe2]/10"}`}>
                      {isQuote ? "POA" : price}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#29abe2] transition-colors">
                    {name}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed flex-1">{tagline}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[#29abe2] text-sm font-medium">
                    View & Book <ArrowRight size={13} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12" delay={0.1}>
            <Link
              href="/services"
              className="border-2 border-[#29abe2] text-[#29abe2] hover:bg-[#29abe2] hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200"
            >
              View All Services
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#1e1e1e] py-24 border-y border-[#404040]">
        <div className={W}>
          <FadeIn className="text-center mb-20">
            <span className="text-[#29abe2] text-xs font-semibold uppercase tracking-widest">Simple Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">How It Works</h2>
            <p className="text-white/90 max-w-lg mx-auto">
              Three steps from your screen to a sorted car, no faff, no deposit.
            </p>
          </FadeIn>

          <div className="relative">
            {/* Connecting line — desktop only, sits behind the nodes */}
            <div
              aria-hidden
              className="hidden md:block absolute top-[52px] h-px bg-[#29abe2]/20"
              style={{ left: "calc(16.666% + 52px)", right: "calc(16.666% + 52px)" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
              {steps.map(({ title, desc, Icon }, i) => (
                <FadeIn key={title} delay={i * 0.14} className="flex flex-col items-center text-center">

                  {/* Node */}
                  <div className="relative mb-8">
                    {/* outer glow ring */}
                    <div className="absolute -inset-3 rounded-full border border-[#29abe2]/15" />
                    <div className="relative z-10 w-[104px] h-[104px] rounded-full bg-[#252525] border border-[#29abe2]/40 flex items-center justify-center">
                      <Icon size={36} className="text-[#29abe2]" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed max-w-[260px]">{desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn className="mt-16 text-center" delay={0.25}>
            <Link
              href="/booking"
              className="bg-[#29abe2] hover:bg-[#1a7fb5] text-white font-semibold px-9 py-4 rounded-xl transition-colors inline-flex items-center gap-2"
            >
              Book Now <ArrowRight size={15} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* About */}
      <section className="bg-[#2a2a2a] py-24">
        <div className={W}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <span className="text-[#29abe2] text-xs font-semibold uppercase tracking-widest">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-5">
                Your Local Garage in Bedford
              </h2>
              <p className="text-white/90 leading-relaxed mb-4">
                We&apos;re proud to be a modern, customer-focused garage in Bedford, offering expert vehicle
                diagnostics, servicing, MOTs, and specialist repairs. With over 11 years of industry experience,
                including time spent working with main dealerships, we&apos;ve built a reputation for quality,
                reliability, and efficiency.
              </p>
              <p className="text-white/90 leading-relaxed mb-7">
                AI Diagnostics Ltd was founded with one goal: to offer Bedford drivers a more personal, transparent,
                and time-saving alternative to dealership garages. No hard upsell, just honest advice and the kind
                of service that earns your trust.
              </p>
              <div className="flex flex-col gap-3 mb-9">
                {[
                  "11+ years of industry experience",
                  "Main dealership expertise, independent prices",
                  "Advanced OBD & diagnostic equipment",
                  "All makes and models welcome",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle size={16} className="text-[#29abe2] shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
              <Link
                href="/booking"
                className="bg-[#29abe2] hover:bg-[#1a7fb5] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                Book an Appointment <ArrowRight size={16} />
              </Link>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <div className="bg-[#333] border border-[#404040] rounded-2xl p-8 space-y-6">
                {[
                  { Icon: Award, title: "Dealership Quality", desc: "Same tools and expertise as a franchised dealer, without the premium price tag." },
                  { Icon: Shield, title: "Pay Nothing Until Done", desc: "No deposit, no credit card required. Pay only when you're happy with the work." },
                  { Icon: MapPin, title: "Conveniently Located", desc: "18 College St, Bedford, MK42 8LU, easy access, central Bedford location." },
                ].map(({ Icon, title, desc }, i) => (
                  <div key={title} className={`flex items-start gap-4 ${i < 2 ? "pb-6 border-b border-[#404040]" : ""}`}>
                    <div className="w-10 h-10 bg-[#29abe2]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-[#29abe2]" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{title}</p>
                      <p className="text-white/80 text-sm mt-1">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#1e1e1e] py-24 border-y border-[#404040]">
        <div className={W}>
          <FadeIn className="text-center mb-14">
            <span className="text-[#29abe2] text-xs font-semibold uppercase tracking-widest">Reviews</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">What Our Customers Say</h2>
            <p className="text-white/90">Trusted by hundreds of drivers across Bedford</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, text, rating }, i) => (
              <FadeIn key={name} delay={i * 0.08}>
                <div className="bg-[#2a2a2a] border border-[#404040] rounded-xl p-7 flex flex-col gap-4 h-full">
                  <div className="flex gap-1">
                    {Array.from({ length: rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-[#29abe2] text-[#29abe2]" />
                    ))}
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed flex-1">&ldquo;{text}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-[#404040]">
                    <div className="w-9 h-9 rounded-full bg-[#29abe2]/20 flex items-center justify-center text-[#29abe2] font-bold text-sm">
                      {name[0]}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{name}</p>
                      <p className="text-[#a0a0a0] text-xs">Verified Customer</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#29abe2] py-20">
        <div className={`${W} text-center`}>
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Ready to Book?</h2>
            <p className="text-white/80 text-lg mb-10">
              Book online 24/7 — no deposit needed. Or give us a call and we&apos;ll sort you out.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/booking"
                className="bg-white text-[#29abe2] hover:bg-[#f0f9ff] font-bold px-9 py-4 rounded-lg transition-colors"
              >
                Book Online
              </Link>
              <a
                href="tel:07986848798"
                className="border-2 border-white text-white hover:bg-white/10 font-bold px-9 py-4 rounded-lg transition-colors flex items-center gap-2"
              >
                <Phone size={16} />
                07986 848798
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/447986848798"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 flex items-center gap-2"
      >
        <MessageCircle size={24} />
        <span className="hidden sm:inline font-semibold">WhatsApp</span>
      </a>
    </>
  );
}
