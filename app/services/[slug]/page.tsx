import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, Phone, ArrowRight, MapPin } from "lucide-react";
import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { getService, generateStaticParams } from "@/lib/services";
import CTASection from "@/components/CTASection";

export { generateStaticParams };

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.name} in Bedford — AI Diagnostics Ltd`,
    description: service.metaDescription,
  };
}

const W = "w-full px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28";

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const totalItems = service.checklist.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e1e1e] pt-28 pb-14 border-b border-[#404040]">
        <div className={W}>
          <FadeIn>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-[#a0a0a0] mb-6">
              <Link href="/services" className="hover:text-[#29abe2] transition-colors">
                Services
              </Link>
              <span>&rsaquo;</span>
              <span className="text-white">{service.name}</span>
            </nav>

            {/* Badge */}
            <span className="text-[#29abe2] text-xs uppercase tracking-widest font-semibold">
              AI Diagnostics Ltd · Bedford
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-3 leading-tight">
              {service.name}
            </h1>

            {/* Tagline */}
            <p className="text-[#a0a0a0] text-lg max-w-2xl mb-6">{service.tagline}</p>

            {/* Price pill */}
            {service.isQuote ? (
              <span className="inline-block bg-[#404040] text-[#a0a0a0] text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
                Price on Application, Request a Free Quote
              </span>
            ) : (
              <span className="inline-block bg-[#29abe2]/10 border border-[#29abe2]/30 text-[#29abe2] text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
                From {service.price}
              </span>
            )}

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#book"
                className="bg-[#29abe2] hover:bg-[#1a7fb5] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                {service.isQuote ? "Request a Quote" : "Book Now"}{" "}
                <ArrowRight size={16} />
              </a>
              <a
                href="tel:07986848798"
                className="border border-[#404040] hover:border-[#29abe2] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <Phone size={16} className="text-[#29abe2]" /> Call Us
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About */}
      <section className="bg-[#2a2a2a] py-16">
        <div className={W}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Paragraphs — 2/3 width */}
            <FadeIn className="lg:col-span-2" direction="left">
              <span className="text-[#29abe2] text-xs font-semibold uppercase tracking-widest">
                About This Service
              </span>
              <h2 className="text-2xl font-bold text-white mt-2 mb-5">
                What Is a {service.name}?
              </h2>
              <div className="flex flex-col gap-4">
                {service.about.map((para, i) => (
                  <p key={i} className="text-[#a0a0a0] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </FadeIn>

            {/* Price card — 1/3 width */}
            <FadeIn direction="right" delay={0.1}>
              <div className="bg-[#333] border border-[#404040] rounded-2xl p-7 sticky top-28">
                <p className="text-[#a0a0a0] text-xs uppercase tracking-widest mb-2">
                  Price
                </p>
                <p className="text-3xl font-bold text-white mb-1">
                  {service.isQuote ? "POA" : service.price}
                </p>
                {service.isQuote && (
                  <p className="text-[#a0a0a0] text-xs mb-4">
                    Price depends on vehicle and parts required
                  </p>
                )}
                <div className="border-t border-[#404040] my-4" />
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm text-[#d0d0d0]">
                    <CheckCircle size={14} className="text-[#29abe2] shrink-0" />
                    {totalItems} checklist points covered
                  </div>
                  {service.bundles && service.bundles.length > 0 && (
                    <div className="flex items-center gap-2 text-sm text-[#d0d0d0]">
                      <CheckCircle size={14} className="text-[#29abe2] shrink-0" />
                      Bundle deals available
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm text-[#d0d0d0]">
                    <CheckCircle size={14} className="text-[#29abe2] shrink-0" />
                    No deposit required
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#d0d0d0]">
                    <CheckCircle size={14} className="text-[#29abe2] shrink-0" />
                    All makes and models
                  </div>
                </div>
                <a
                  href="#book"
                  className="mt-6 w-full bg-[#29abe2] hover:bg-[#1a7fb5] text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  {service.isQuote ? "Request a Quote" : "Book This Service"}
                  <ArrowRight size={14} />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-[#1e1e1e] py-16">
        <div className={W}>
          <FadeIn>
            <span className="text-[#29abe2] text-xs font-semibold uppercase tracking-widest">
              Checklist
            </span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-10">
              What&apos;s Included
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
            {service.checklist.map((cat, i) => (
              <FadeIn key={cat.category} delay={i * 0.06}>
                <div className="bg-[#2a2a2a] border border-[#404040] rounded-xl p-6 h-full">
                  <h3 className="text-white font-bold text-base mb-4">{cat.category}</h3>
                  <ul className="flex flex-col gap-2.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[#d0d0d0]">
                        <CheckCircle size={14} className="text-[#29abe2] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Bundle deals */}
          {service.bundles && service.bundles.length > 0 && (
            <FadeIn delay={0.1}>
              <div className="bg-[#29abe2]/5 border border-[#29abe2]/20 rounded-2xl p-8">
                <h3 className="text-white font-bold text-xl mb-6">
                  Save with a Bundle
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.bundles.map((bundle) => (
                    <div
                      key={bundle.label}
                      className="bg-[#2a2a2a] border border-[#404040] rounded-xl px-5 py-4 flex items-center justify-between gap-4"
                    >
                      <p className="text-[#d0d0d0] text-sm font-medium">{bundle.label}</p>
                      <span className="text-[#29abe2] font-bold text-lg whitespace-nowrap">
                        {bundle.price}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-[#a0a0a0] text-xs mt-4">
                  Mention the bundle when booking. Prices include all items listed.
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <CTASection />

      {/* FAQ */}
      <section className="bg-[#1e1e1e] py-16">
        <div className={W}>
          <FadeIn>
            <span className="text-[#29abe2] text-xs font-semibold uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-10">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-5 max-w-3xl">
            {service.faq.map((item, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="bg-[#2a2a2a] border border-[#404040] rounded-xl p-6">
                  <p className="text-white font-semibold mb-2">{item.q}</p>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed">{item.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.15} className="mt-10">
            <p className="text-[#a0a0a0] text-sm">
              Have a question not listed here?{" "}
              <a href="tel:07986848798" className="text-[#29abe2] hover:underline">
                Call us on 07986 848798
              </a>{" "}
              or{" "}
              <Link href="/contact" className="text-[#29abe2] hover:underline">
                send us a message
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
