import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const W = "w-full px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28";

export default function CTASection() {
  return (
    <section className="bg-[#29abe2] py-16">
      <div className={`${W} text-center`}>
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Ready to Book?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-md mx-auto">
            Book online 24/7, no deposit needed. Or give us a call and we&apos;ll sort you out.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="bg-white text-[#29abe2] hover:bg-[#f0f9ff] font-bold px-8 py-3.5 rounded-xl transition-colors inline-flex items-center gap-2"
            >
              Book Online <ArrowRight size={16} />
            </Link>
            <a
              href="tel:07986848798"
              className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3.5 rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <Phone size={16} /> 07986 848798
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
