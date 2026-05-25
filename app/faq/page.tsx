"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import CTASection from "@/components/CTASection";

const faqs = [
  {
    category: "MOT",
    questions: [
      {
        q: "How much does an MOT cost?",
        a: "Our standard MOT is £40. You can save money by combining it with a service. MOT + Interim Service is £194.57, MOT + Full Service is £227.53, and MOT + Major Service is £311.28. Check our Pricing page for the full breakdown.",
      },
      {
        q: "How long does an MOT take?",
        a: "A standard MOT usually takes around 45 to 60 minutes. If any advisory or failure items are found and you'd like them repaired on the same day, we'll give you an honest estimate first.",
      },
      {
        q: "Can I book an MOT and service together?",
        a: "Yes, and we'd recommend it. Booking both at the same time saves you money on the MOT and means your car only needs to come in once. You can book online or give us a call.",
      },
      {
        q: "What happens if my car fails its MOT?",
        a: "We'll explain exactly what failed and why, and provide a clear quote to fix it. If you choose to have us carry out the repairs, we offer a free retest. We'll never pressure you into unnecessary work.",
      },
      {
        q: "Do you do a pre-MOT check?",
        a: "Yes — a Pre MOT check is £20. We'll inspect the most common failure points so you know what to expect before the official test. Any issues found can be discussed and quoted for in advance.",
      },
    ],
  },
  {
    category: "Servicing",
    questions: [
      {
        q: "Which service does my car need?",
        a: "It depends on your car's age and mileage. As a guide: an Interim Service (£154.57) every 6 months or 6,000 miles, a Full Service (£187.53) every 12 months or 12,000 miles, and a Major Service (£271.28) every 2 years or 24,000 miles. If you're unsure, tell us your registration and mileage and we'll advise you.",
      },
      {
        q: "Will servicing with you affect my manufacturer warranty?",
        a: "No. EU block exemption regulations allow you to service your car at any reputable independent garage without voiding your warranty, as long as manufacturer-specified parts and fluids are used. We follow manufacturer service schedules and use quality parts.",
      },
      {
        q: "How long does a service take?",
        a: "An Interim Service typically takes 1 to 1.5 hours. A Full or Major Service can take 2 to 3 hours depending on the vehicle. We'll give you a realistic time estimate when you book.",
      },
    ],
  },
  {
    category: "Diagnostics",
    questions: [
      {
        q: "My warning light is on, what should I do?",
        a: "Book a diagnostic check. We use professional-grade diagnostic equipment to read fault codes across all vehicle systems and identify the root cause. The check is £60 and we'll provide a clear report before any repair work is authorised.",
      },
      {
        q: "Do you specialise in German vehicles?",
        a: "Yes. We have specialist knowledge and tooling for BMW, Mercedes-Benz, Audi, and Volkswagen Group vehicles (VW, Seat, Skoda). We can carry out coding, programming and manufacturer specific diagnostics that many independents can't.",
      },
    ],
  },
  {
    category: "Booking & Payment",
    questions: [
      {
        q: "Do I need to pay a deposit to book?",
        a: "No deposit is required. You book for free and pay only when the work is completed to your satisfaction. We believe you should see the quality of our work before you pay for it.",
      },
      {
        q: "Can I book online out of hours?",
        a: "Yes. Our online booking system is available 24/7. You can submit a booking request at any time and we'll confirm it as soon as we're open.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash and card payments. Payment is taken on collection of your vehicle once all work has been completed.",
      },
      {
        q: "Do you offer a Blue Light Card discount?",
        a: "Yes, Blue Light Card holders receive a discount. Please mention this when booking and we'll apply the discount to your service."
      },
    ],
  },
  {
    category: "General",
    questions: [
      {
        q: "Where are you located?",
        a: "We're at 18 College St, Bedford, MK42 8LU. We're easy to find and centrally located in Bedford town centre.",
      },
      {
        q: "What are your opening hours?",
        a: "Monday to Friday: 9:00 AM – 6:00 PM. Saturday: 9:00 AM – 4:00 PM. Sunday: Closed.",
      },
      {
        q: "Do you work on all makes and models?",
        a: "Yes. We work on all makes and models, from small city cars and family hatchbacks to vans and performance vehicles. We have particular expertise in German marques (BMW, Mercedes, Audi, VW Group)."
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#404040] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
      >
        <span className="text-white group-hover:text-[#29abe2] font-medium transition-colors text-sm sm:text-base">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#29abe2] shrink-0 mt-0.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-[#a0a0a0] text-sm leading-relaxed pr-8">{a}</p>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="bg-[#1e1e1e] pt-28 pb-16 border-b border-[#404040]">
        <div className="w-full px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28 text-center">
          <span className="text-[#29abe2] text-xs font-semibold uppercase tracking-widest">Got Questions?</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">Frequently Asked Questions</h1>
          <p className="text-[#a0a0a0] text-lg max-w-xl mx-auto">
            Everything you need to know about our services, pricing and how we work.
          </p>
        </div>
      </section>

      <section className="bg-[#2a2a2a] py-20">
        <div className="w-full px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28 max-w-4xl mx-auto">
          <div className="flex flex-col gap-10">
            {faqs.map(({ category, questions }) => (
              <div key={category}>
                <h2 className="text-[#29abe2] font-bold text-xs uppercase tracking-widest mb-4">{category}</h2>
                <div className="bg-[#333] border border-[#404040] rounded-2xl px-6">
                  {questions.map(({ q, a }) => (
                    <FAQItem key={q} q={q} a={a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 bg-[#29abe2]/10 border border-[#29abe2]/30 rounded-2xl p-8 text-center">
            <h3 className="text-white font-bold text-xl mb-2">Still have a question?</h3>
            <p className="text-[#a0a0a0] text-sm mb-6">
              We&apos;re happy to help. Get in touch and we&apos;ll get back to you quickly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#29abe2] hover:bg-[#1a7fb5] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Send a Message
              </Link>
              <a
                href="tel:07986848798"
                className="border border-[#404040] hover:border-[#29abe2] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm flex items-center gap-2"
              >
                <Phone size={14} className="text-[#29abe2]" />
                07986 848798
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
