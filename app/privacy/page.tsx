import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – AI Diagnostics Ltd",
};

export default function PrivacyPage() {
  return (
    <section className="bg-[#2a2a2a] pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-[#a0a0a0] text-sm mb-10">Last updated: May 2025</p>
        <div className="prose prose-invert prose-blue max-w-none text-[#a0a0a0] text-sm leading-relaxed space-y-6">
          <p>AI Diagnostics Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your personal data. This policy explains how we collect, use and store information submitted through our website.</p>
          <h2 className="text-white font-semibold text-base">Information We Collect</h2>
          <p>When you submit a booking enquiry, we collect your name, email address, phone number, vehicle registration, and the message you provide. Vehicle lookup data is retrieved from the DVLA API and is not stored by us.</p>
          <h2 className="text-white font-semibold text-base">How We Use Your Information</h2>
          <p>We use your contact details solely to respond to your enquiry and confirm your appointment. We do not sell, share, or market your data to third parties.</p>
          <h2 className="text-white font-semibold text-base">Contact</h2>
          <p>For any data-related queries, contact us at <a href="mailto:ismail@aidiagnosticsltd.com" className="text-[#29abe2] hover:underline">ismail@aidiagnosticsltd.com</a>.</p>
        </div>
      </div>
    </section>
  );
}
