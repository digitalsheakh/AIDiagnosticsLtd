import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ChatBot from "@/components/ChatBot";

export const metadata: Metadata = {
  title: "Book a Car Service or MOT in Bedford | AI Diagnostics Ltd",
  description:
    "Book your MOT, car service, diagnostic check or repair in Bedford online. AI Diagnostics Ltd — 18 College St, Bedford MK42 8LU. No deposit required. DVSA authorised.",
  keywords:
    "book MOT Bedford, car service booking Bedford, garage Bedford MK42, MOT test Bedford, car repair Bedford, book service online Bedford",
};

const W = "w-full px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28";

const hours = [
  { day: "Mon – Fri", time: "9:00 AM – 6:00 PM", open: true },
  { day: "Saturday", time: "9:00 AM – 4:00 PM", open: true },
  { day: "Sunday", time: "Closed", open: false },
];

export default function BookingPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            name: "AI Diagnostics Ltd",
            telephone: "07986848798",
            email: "ismail@aidiagnosticsltd.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "18 College St",
              addressLocality: "Bedford",
              postalCode: "MK42 8LU",
              addressCountry: "GB",
            },
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "18:00" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "16:00" },
            ],
          }),
        }}
      />

      {/* Page header */}
      <section className="relative bg-gradient-to-b from-[#1e1e1e] to-[#252525] pt-28 pb-16 border-b border-[#404040] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        <div className={`${W} text-center relative z-10`}>
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#29abe2]/10 border border-[#29abe2]/20 text-[#29abe2] text-xs font-bold px-4 py-2 rounded-full mb-4">
              <CheckCircle size={14} />
              Quick & Easy Booking
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 mb-5">
              Book Your <span className="text-[#29abe2]">Appointment</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-6">
              Enter your registration plate to get started. Quick, easy, and no deposit required.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-[#29abe2]" />
                <span className="text-white font-medium">No Deposit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-[#29abe2]" />
                <span className="text-white font-medium">Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-[#29abe2]" />
                <span className="text-white font-medium">24/7 Online</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="bg-[#2a2a2a] py-16">
        <div className={W}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">

            {/* Booking form */}
            <FadeIn className="lg:col-span-2">
              <div className="bg-[#333] border border-[#404040] rounded-2xl overflow-hidden shadow-xl">
                <div className="bg-[#1e1e1e] px-8 py-6 border-b border-[#404040]">
                  <h2 className="text-white text-2xl font-bold">Send a Booking Enquiry</h2>
                </div>
                <Suspense
                  fallback={
                    <div className="p-8 animate-pulse">
                      <div className="h-12 bg-[#404040] rounded-lg mb-4" />
                      <div className="h-8 bg-[#404040] rounded-lg w-1/3" />
                    </div>
                  }
                >
                  <BookingForm />
                </Suspense>
              </div>
            </FadeIn>

            {/* Sidebar */}
            <div className="flex flex-col gap-5 lg:sticky lg:top-24">

              {/* Contact */}
              <FadeIn delay={0.1}>
                <div className="bg-[#29abe2] rounded-2xl p-6">
                  <h3 className="text-white font-bold text-lg mb-3">Need Help?</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Call us and we'll book you in straight away.
                  </p>
                  <a
                    href="tel:07986848798"
                    className="flex items-center justify-center gap-2 bg-white text-[#29abe2] hover:bg-white/90 font-bold py-3 px-4 rounded-xl transition-all duration-200 hover:scale-105"
                  >
                    <Phone size={16} />
                    07986 848798
                  </a>
                </div>
              </FadeIn>

              {/* Hours */}
              <FadeIn delay={0.2}>
                <div className="bg-[#333] border border-[#404040] rounded-2xl p-6 hover:border-[#29abe2]/30 transition-colors">
                  <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <Clock size={18} className="text-[#29abe2]" /> Opening Hours
                  </h3>
                  <div className="flex flex-col gap-3">
                    {hours.map(({ day, time, open }) => (
                      <div key={day} className="flex items-center justify-between text-sm">
                        <span className="text-white font-medium">{day}</span>
                        <span className={open ? "text-white/80" : "text-red-400 font-medium"}>{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Map */}
              <FadeIn delay={0.3}>
                <div className="bg-[#333] border border-[#404040] rounded-2xl overflow-hidden">
                  <div className="p-4 bg-[#2a2a2a] border-b border-[#404040]">
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                      <MapPin size={18} className="text-[#29abe2]" /> Our Location
                    </h3>
                    <address className="not-italic text-white/90 text-sm mt-2">
                      18 College St, Bedford, MK42 8LU
                    </address>
                  </div>
                  <div className="relative w-full h-64">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.8!2d-0.4659!3d52.1359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48765101e3b3e3e3%3A0x1!2s18%20College%20St%2C%20Bedford%20MK42%208LU!5e0!3m2!1sen!2suk!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-4 bg-[#2a2a2a]">
                    <a
                      href="https://maps.google.com/?q=18+College+St,+Bedford+MK42+8LU"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#29abe2] hover:bg-[#1a7fb5] text-white font-semibold py-2.5 px-4 rounded-lg transition-colors text-sm"
                    >
                      <MapPin size={16} />
                      Get Directions
                    </a>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </div>
      </section>
      
      <ChatBot />
    </>
  );
}
