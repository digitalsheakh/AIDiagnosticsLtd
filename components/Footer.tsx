import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const services = [
  "MOT Testing",
  "Interim Service",
  "Full Service",
  "Major Service",
  "Diagnostic Check",
  "Clutch Replacement",
  "Brake Repairs",
  "Air Con Re-gas",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const W = "px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white">
      <div className={`${W} w-full pt-12 pb-10`}>

        {/* Brand heading */}
        <div className="mb-10 pb-8 border-b border-white/8">
          <div className="relative w-48 h-14">
            <Image
              src="/Diagnostics Ltd-bedford-logo.png"
              alt="AI Diagnostics Ltd"
              fill
              className="object-contain object-left mix-blend-screen"
            />
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">

          {/* About */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 pl-3 border-l-2 border-[#29abe2]">
              About Us
            </h4>
            <p className="text-white/45 text-sm leading-relaxed mb-5 max-w-[230px]">
              AI Diagnostics Ltd is Bedford&apos;s trusted garage for professional MOT testing, vehicle servicing,
              and advanced diagnostics. Dealer-level quality at honest independent prices.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {[
                { label: "F", title: "Facebook" },
                { label: "In", title: "Instagram" },
                { label: "G", title: "Google" },
              ].map(({ label, title }) => (
                <a
                  key={title}
                  href="#"
                  aria-label={title}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:border-[#29abe2] hover:text-[#29abe2] hover:bg-[#29abe2]/10 transition-all text-xs font-bold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 pl-3 border-l-2 border-[#29abe2]">
              Our Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#29abe2] rounded-sm shrink-0" />
                  <Link href="/services" className="text-white/45 text-sm hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 pl-3 border-l-2 border-[#29abe2]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#29abe2] rounded-sm shrink-0" />
                  <Link href={href} className="text-white/45 text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 pl-3 border-l-2 border-[#29abe2]">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#29abe2] rounded-sm shrink-0 mt-1.5" />
                <span className="text-white/45 text-sm leading-relaxed">
                  18 College St, Bedford<br />MK42 8LU, United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#29abe2] rounded-sm shrink-0" />
                <a href="tel:07986848798" className="text-white/45 text-sm hover:text-white transition-colors">
                  Phone: 07986 848798
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#29abe2] rounded-sm shrink-0" />
                <a href="mailto:ismail@aidiagnosticsltd.com" className="text-white/45 text-sm hover:text-white transition-colors break-all">
                  ismail@aidiagnosticsltd.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 pt-1">
                <span className="w-1.5 h-1.5 bg-[#29abe2] rounded-sm shrink-0" />
                <Link
                  href="/booking"
                  className="text-sm font-semibold text-[#29abe2] hover:text-white transition-colors"
                >
                  Book an Appointment →
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className={`${W} w-full py-4 flex flex-col sm:flex-row items-center justify-between gap-2`}>
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} AI Diagnostics Ltd. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs text-white/30">
            <Link href="/faq" className="hover:text-white transition-colors">FAQs</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
