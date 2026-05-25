import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Calendar, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ChatBot from "@/components/ChatBot";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | AI Diagnostics Ltd Bedford Garage",
  description:
    "Get in touch with AI Diagnostics Ltd in Bedford. Call us on 07986 848798, email ismail@aidiagnosticsltd.com or visit us at 18 College St, Bedford MK42 8LU. Online booking available.",
  keywords:
    "contact AI Diagnostics Bedford, garage Bedford phone number, Bedford mechanic contact, AI Diagnostics address",
};

const W = "w-full px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28";

const hours = [
  { day: "Monday", time: "9:00 AM – 6:00 PM", open: true },
  { day: "Tuesday", time: "9:00 AM – 6:00 PM", open: true },
  { day: "Wednesday", time: "9:00 AM – 6:00 PM", open: true },
  { day: "Thursday", time: "9:00 AM – 6:00 PM", open: true },
  { day: "Friday", time: "9:00 AM – 6:00 PM", open: true },
  { day: "Saturday", time: "9:00 AM – 4:00 PM", open: true },
  { day: "Sunday", time: "Closed", open: false },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#1e1e1e] pt-28 pb-16 border-b border-[#404040]">
        <div className={`${W} text-center`}>
          <FadeIn>
            <span className="text-[#29abe2] text-xs font-semibold uppercase tracking-widest">Get In Touch</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">Contact Us</h1>
            <p className="text-[#a0a0a0] text-lg max-w-xl mx-auto">
              Have a question or need help? Send us a message using the form below or find our contact details.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#2a2a2a] py-20 border-b border-[#404040]">
        <div className={W}>
          <div className="max-w-3xl mx-auto">
            <FadeIn className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-3">Send Us a Message</h2>
              <p className="text-[#a0a0a0]">
                Fill out the form below for general enquiries. For bookings, please use our{" "}
                <Link href="/booking" className="text-[#29abe2] hover:underline">
                  online booking page
                </Link>
                .
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#2a2a2a] py-16 border-b border-[#404040]">
        <div className={W}>
          <FadeIn className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Find Us</h2>
            <p className="text-[#a0a0a0]">Visit us at our Bedford location</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-[#404040] shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.8!2d-0.4664!3d52.1359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48765304c4c4c4c5%3A0x1!2s18%20College%20St%2C%20Bedford%20MK42%208LU!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://maps.google.com/?q=18+College+St,+Bedford+MK42+8LU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#29abe2] hover:text-[#1a7fb5] font-semibold transition-colors"
              >
                <MapPin size={16} />
                Open in Google Maps
                <ArrowRight size={14} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#1e1e1e] py-20 border-b border-[#404040]">
        <div className={W}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {/* Address */}
            <FadeIn>
              <div className="bg-[#2a2a2a] border border-[#404040] rounded-2xl p-7 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-[#29abe2]/10 rounded-xl flex items-center justify-center">
                    <MapPin size={22} className="text-[#29abe2]" />
                  </div>
                  <h2 className="text-white font-bold text-xl">Our Location</h2>
                </div>
                <address className="not-italic text-[#a0a0a0] leading-relaxed mb-6">
                  <strong className="text-white block mb-2 text-lg">AI Diagnostics Ltd</strong>
                  18 College St<br />
                  Bedford<br />
                  MK42 8LU<br />
                  United Kingdom
                </address>
                <div className="pt-5 border-t border-[#404040]">
                  <p className="text-[#606060] text-sm">
                    Centrally located in Bedford town centre with easy access and parking nearby.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Contact details */}
            <FadeIn delay={0.08}>
              <div className="bg-[#2a2a2a] border border-[#404040] rounded-2xl p-7 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#29abe2]/10 rounded-xl flex items-center justify-center">
                    <Phone size={22} className="text-[#29abe2]" />
                  </div>
                  <h2 className="text-white font-bold text-xl">Contact Details</h2>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="bg-[#333] border border-[#404040] rounded-xl p-4">
                    <p className="text-[#a0a0a0] text-xs uppercase tracking-widest mb-2">Phone</p>
                    <a
                      href="tel:07986848798"
                      className="text-white font-bold text-xl hover:text-[#29abe2] transition-colors"
                    >
                      07986 848798
                    </a>
                  </div>
                  <div className="bg-[#333] border border-[#404040] rounded-xl p-4">
                    <p className="text-[#a0a0a0] text-xs uppercase tracking-widest mb-2">Email</p>
                    <a
                      href="mailto:ismail@aidiagnosticsltd.com"
                      className="text-white font-semibold hover:text-[#29abe2] transition-colors break-all"
                    >
                      ismail@aidiagnosticsltd.com
                    </a>
                  </div>
                  <div className="flex flex-col gap-3 pt-2">
                    <a
                      href="tel:07986848798"
                      className="flex items-center justify-center gap-2 bg-[#29abe2] hover:bg-[#1a7fb5] text-white font-bold px-5 py-3.5 rounded-xl transition-colors"
                    >
                      <Phone size={16} /> Call Now
                    </a>
                    <a
                      href="mailto:ismail@aidiagnosticsltd.com"
                      className="flex items-center justify-center gap-2 border-2 border-[#404040] hover:border-[#29abe2] text-white font-semibold px-5 py-3.5 rounded-xl transition-colors"
                    >
                      <Mail size={16} /> Send Email
                    </a>
                  </div>
                  <div className="pt-4 border-t border-[#404040]">
                    <p className="text-[#606060] text-sm leading-relaxed">
                      We respond to enquiries within a few hours during business hours. For urgent matters, please call.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Opening hours */}
            <FadeIn delay={0.15}>
              <div className="bg-[#2a2a2a] border border-[#404040] rounded-2xl p-7 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#29abe2]/10 rounded-xl flex items-center justify-center">
                    <Clock size={22} className="text-[#29abe2]" />
                  </div>
                  <h2 className="text-white font-bold text-xl">Opening Hours</h2>
                </div>
                <div className="flex flex-col gap-2.5">
                  {hours.map(({ day, time, open }) => (
                    <div key={day} className="flex items-center justify-between bg-[#333] border border-[#404040] rounded-lg px-4 py-3">
                      <span className="text-white font-semibold text-sm">{day}</span>
                      <span className={`text-sm font-medium ${open ? "text-[#29abe2]" : "text-red-400"}`}>{time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-[#29abe2]/10 border border-[#29abe2]/30 rounded-xl">
                  <p className="text-[#29abe2] text-sm font-semibold text-center">
                    📅 Online booking available 24/7
                  </p>
                  <p className="text-[#a0a0a0] text-xs text-center mt-1">
                    We confirm appointments the next business day
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection />
      
      <ChatBot />
    </>
  );
}
