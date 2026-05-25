"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Loader2, Car, CheckCircle, AlertCircle, Send } from "lucide-react";
import Image from "next/image";

const services = [
  "MOT Only",
  "MOT + Interim Service",
  "MOT + Full Service",
  "MOT + Major Service",
  "Pre MOT Check",
  "Interim Service",
  "Full Service",
  "Major Service",
  "Oil & Filter Change",
  "Diagnostic Check",
  "Timing Belt Replacement",
  "Clutch Replacement",
  "Air Conditioning Re-gas",
  "Brake Fluid Replacement",
  "Coolant Change",
  "Front Wheel Alignment",
  "Vehicle Safety Check",
  "General Repair / Other",
];

interface VehicleData {
  make: string;
  colour: string;
  fuelType: string;
  yearOfManufacture: number;
  engineCapacity: number;
  motStatus: string;
  motExpiryDate?: string;
  taxStatus: string;
  registrationNumber: string;
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [reg, setReg] = useState("");
  const [vehicle, setVehicle] = useState<VehicleData | null>(null);
  const [lookupLoading, setLookupLoading] = useState(false);
  const [lookupError, setLookupError] = useState("");

  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const regParam = searchParams?.get("reg");
    if (regParam) {
      setReg(regParam);
      handleLookupFor(regParam);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleLookupFor = async (registration: string) => {
    const cleaned = registration.replace(/\s/g, "").toUpperCase();
    if (!cleaned) return;
    setLookupLoading(true);
    setLookupError("");
    setVehicle(null);

    try {
      const res = await fetch("/api/vehicle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ registrationNumber: cleaned }),
      });
      if (!res.ok) {
        const data = await res.json();
        setLookupError(data.error || "Vehicle not found.");
        return;
      }
      setVehicle(await res.json());
    } catch {
      setLookupError("Unable to look up vehicle. Please continue without lookup.");
    } finally {
      setLookupLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          registration: reg,
          vehicleInfo: vehicle,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        setSubmitError(data.error || "Failed to send. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError("Network error. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#333] border border-[#404040] rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-green-400" />
        </div>
        <h2 className="text-white font-bold text-2xl mb-3">Booking Request Sent!</h2>
        <p className="text-[#a0a0a0] mb-2">
          Thanks {form.name}, we&apos;ve received your enquiry and will be in touch shortly to confirm your appointment.
        </p>
        <p className="text-[#a0a0a0] text-sm">
          For urgent queries call us on{" "}
          <a href="tel:07986848798" className="text-[#29abe2] hover:underline">07986 848798</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#333] border border-[#404040] rounded-2xl p-7">
      {/* Vehicle lookup */}
      <div className="mb-6 p-5 bg-[#2a2a2a] border border-[#404040] rounded-xl">
        <p className="text-white text-sm font-semibold mb-3">Look Up Your Vehicle (Optional)</p>
        <div className="flex gap-3">
          <div className="flex-1 flex rounded-lg overflow-hidden border-2 border-[#404040] focus-within:border-[#29abe2] transition-colors bg-white shadow-lg">
            <div className="w-12 bg-[#FCD116] flex items-center justify-center shrink-0 px-2">
              <Image src="/uk-flag.png" alt="GB" width={28} height={28} className="w-full h-auto" />
            </div>
            <input
              type="text"
              value={reg}
              onChange={(e) => setReg(e.target.value.toUpperCase())}
              onKeyDown={(e) => e.key === "Enter" && handleLookupFor(reg)}
              placeholder="AB12 CDE"
              maxLength={8}
              className="flex-1 px-4 py-3 text-[#1e1e1e] font-bold tracking-[0.15em] uppercase bg-transparent focus:outline-none placeholder:text-gray-400 placeholder:font-normal placeholder:tracking-normal"
            />
          </div>
          <button
            type="button"
            onClick={() => handleLookupFor(reg)}
            disabled={lookupLoading || !reg.trim()}
            className="bg-[#29abe2] hover:bg-[#1a7fb5] disabled:opacity-50 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-2"
          >
            {lookupLoading ? <Loader2 size={15} className="animate-spin" /> : <Search size={15} />}
            {lookupLoading ? "..." : "Look Up"}
          </button>
        </div>

        {lookupError && (
          <p className="mt-2 text-red-400 text-xs flex items-center gap-1">
            <AlertCircle size={12} /> {lookupError}
          </p>
        )}

        {vehicle && (
          <div className="mt-3 flex items-center gap-3 bg-[#29abe2]/10 border border-[#29abe2]/30 rounded-lg p-3">
            <Car size={16} className="text-[#29abe2] shrink-0" />
            <p className="text-white text-sm font-medium">
              {vehicle.yearOfManufacture} {vehicle.make}, {vehicle.colour}, {vehicle.fuelType}
            </p>
            <CheckCircle size={14} className="text-green-400 ml-auto shrink-0" />
          </div>
        )}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-[#d0d0d0] mb-1.5">Full Name *</label>
            <input
              required
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="John Smith"
              className="w-full bg-[#2a2a2a] border border-[#404040] focus:border-[#29abe2] text-white placeholder:text-[#606060] rounded-lg px-4 py-3 text-sm outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#d0d0d0] mb-1.5">Email Address *</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="john@example.com"
              className="w-full bg-[#2a2a2a] border border-[#404040] focus:border-[#29abe2] text-white placeholder:text-[#606060] rounded-lg px-4 py-3 text-sm outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-[#d0d0d0] mb-1.5">Phone Number</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="07000 000000"
              className="w-full bg-[#2a2a2a] border border-[#404040] focus:border-[#29abe2] text-white placeholder:text-[#606060] rounded-lg px-4 py-3 text-sm outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#d0d0d0] mb-1.5">Service Required</label>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full bg-[#2a2a2a] border border-[#404040] focus:border-[#29abe2] text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors appearance-none"
            >
              <option value="">Select a service...</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#d0d0d0] mb-1.5">Message *</label>
          <textarea
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us about your vehicle and what you need, any issues, warning lights, or specific concerns..."
            className="w-full bg-[#2a2a2a] border border-[#404040] focus:border-[#29abe2] text-white placeholder:text-[#606060] rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none"
          />
        </div>

        {submitError && (
          <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">
            <AlertCircle size={14} /> {submitError}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="bg-[#29abe2] hover:bg-[#1a7fb5] disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          {submitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={16} />}
          {submitting ? "Sending..." : "Send Booking Enquiry"}
        </button>

        <p className="text-[#a0a0a0] text-xs text-center">
          No deposit required. We&apos;ll confirm your appointment by phone or email.
        </p>
      </form>
    </div>
  );
}
