"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Loader2, Car, CheckCircle, AlertCircle, Send, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  "MOT Testing",
  "MOT + Interim Service",
  "MOT + Full Service",
  "MOT + Major Service",
  "Pre MOT Check",
  "Interim Service",
  "Full Service",
  "Major Service",
  "Oil & Filter Change",
  "Diagnostic Check",
  "Clutch Replacement",
  "Air Conditioning Re-gas",
  "Brake Fluid Replacement",
  "Coolant Change",
  "Front Wheel Alignment",
  "General Car Repairs",
  "Brake Repairs",
  "Other / Not Sure",
];

interface VehicleData {
  make: string;
  model?: string;
  colour: string;
  fuelType: string;
  yearOfManufacture: number;
  engineCapacity: number;
  motStatus: string;
  motExpiryDate?: string;
  taxStatus: string;
  registrationNumber: string;
}

export default function BookingForm() {
  const searchParams = useSearchParams();

  const [reg, setReg] = useState(searchParams.get("reg") || "");
  const [vehicle, setVehicle] = useState<VehicleData | null>(null);
  const [lookupLoading, setLookupLoading] = useState(false);
  const [lookupError, setLookupError] = useState("");
  const [formVisible, setFormVisible] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", preferredDate: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const regParam = searchParams.get("reg");
    if (regParam) {
      setReg(regParam);
      lookupVehicle(regParam);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const lookupVehicle = async (registration: string) => {
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
        setLookupError(data.error || "Vehicle not found. Please check and try again.");
        return;
      }
      const data = await res.json();
      setVehicle(data);
      setFormVisible(true);
    } catch {
      setLookupError("Unable to look up vehicle.");
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
        body: JSON.stringify({ ...form, registration: reg, vehicleInfo: vehicle }),
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
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-8"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle size={40} className="text-white" strokeWidth={3} />
        </motion.div>
        <h2 className="text-white font-bold text-3xl mb-4">Booking Request Sent!</h2>
        <p className="text-white/90 text-lg mb-2 max-w-md mx-auto">
          Thanks <span className="text-[#29abe2] font-semibold">{form.name}</span>, we'll be in touch shortly to confirm your appointment.
        </p>
        <p className="text-white/70 text-sm mb-6">
          Check your email for confirmation details.
        </p>
        <div className="inline-flex items-center gap-2 bg-[#29abe2]/10 border border-[#29abe2]/20 text-[#29abe2] px-4 py-2 rounded-lg text-sm">
          Urgent? Call{" "}
          <a href="tel:07986848798" className="font-bold hover:underline">07986 848798</a>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col gap-0">
      {/* Vehicle Lookup Section */}
      <div className="p-8 pb-6 bg-[#2a2a2a] rounded-t-2xl">
        <h3 className="text-white text-lg font-semibold mb-4">Look Up Your Vehicle (Optional)</h3>
        <div className="flex gap-3">
          {/* UK plate input with flag */}
          <div className="flex-1 flex rounded-lg overflow-hidden border-2 border-[#404040] focus-within:border-[#29abe2] transition-colors bg-white shadow-lg">
            <div className="w-12 bg-[#FCD116] flex items-center justify-center shrink-0 px-2">
              <Image src="/uk-flag.png" alt="GB" width={28} height={28} className="w-full h-auto" />
            </div>
            <input
              type="text"
              value={reg}
              onChange={(e) => setReg(e.target.value.toUpperCase().replace(/[^A-Z0-9 ]/g, ""))}
              onKeyDown={(e) => e.key === "Enter" && lookupVehicle(reg)}
              placeholder="AB12 CDE"
              maxLength={8}
              className="flex-1 px-4 py-3.5 text-[#1e1e1e] font-bold tracking-[0.15em] uppercase bg-transparent focus:outline-none placeholder:text-gray-400 placeholder:font-normal placeholder:tracking-normal"
            />
          </div>
          <button
            type="button"
            onClick={() => lookupVehicle(reg)}
            disabled={lookupLoading || !reg.trim()}
            className="bg-[#29abe2] hover:bg-[#1a7fb5] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-3.5 rounded-lg transition-all flex items-center gap-2 shrink-0 shadow-lg"
          >
            {lookupLoading ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}
            {lookupLoading ? "Looking Up..." : "Look Up"}
          </button>
        </div>

        {lookupError && (
          <div className="mt-3 flex items-start gap-2 bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">
            <AlertCircle size={14} className="mt-0.5 shrink-0" /> {lookupError}
          </div>
        )}

        {vehicle && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 flex items-center gap-3 bg-[#29abe2]/10 border border-[#29abe2]/30 rounded-lg p-3"
          >
            <Car size={16} className="text-[#29abe2] shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold">
                {vehicle.yearOfManufacture} {vehicle.make} {vehicle.model || ""}
              </p>
              <p className="text-white/70 text-xs">{vehicle.colour} · {vehicle.fuelType}</p>
            </div>
            <CheckCircle size={16} className="text-green-400 shrink-0" />
          </motion.div>
        )}

        {!formVisible && !lookupLoading && (
          <button
            type="button"
            onClick={() => setFormVisible(true)}
            className="mt-3 text-white/60 hover:text-[#29abe2] text-xs transition-colors underline underline-offset-2 font-medium"
          >
            Skip vehicle lookup →
          </button>
        )}
      </div>

      {/* Step 2 — Full form (revealed after plate lookup) */}
      <AnimatePresence>
        {formVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="p-8 pt-6 flex flex-col gap-6 bg-[#2a2a2a]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full bg-[#333] border border-[#404040] focus:border-[#29abe2] text-white placeholder:text-[#606060] rounded-lg px-4 py-3.5 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-[#333] border border-[#404040] focus:border-[#29abe2] text-white placeholder:text-[#606060] rounded-lg px-4 py-3.5 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Phone Number *</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="07000 000000"
                    className="w-full bg-[#333] border border-[#404040] focus:border-[#29abe2] text-white placeholder:text-[#606060] rounded-lg px-4 py-3.5 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Preferred Date</label>
                  <input
                    type="date"
                    value={form.preferredDate}
                    onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                    className="w-full bg-[#333] border border-[#404040] focus:border-[#29abe2] text-white rounded-lg px-4 py-3.5 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Service Required</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-[#333] border border-[#404040] focus:border-[#29abe2] text-white rounded-lg px-4 py-3.5 outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Additional Notes (Optional)</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Any warning lights, specific issues or concerns..."
                  className="w-full bg-[#333] border border-[#404040] focus:border-[#29abe2] text-white placeholder:text-[#606060] rounded-lg px-4 py-3.5 outline-none transition-colors resize-none"
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
                className="bg-[#29abe2] hover:bg-[#1a7fb5] disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                {submitting ? (
                  <><Loader2 size={18} className="animate-spin" /> Sending...</>
                ) : (
                  <><Send size={16} /> Confirm Booking Request <ArrowRight size={16} /></>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-white/60 text-xs">
                <CheckCircle size={14} className="text-[#29abe2]" />
                <p>No deposit required. We'll confirm by phone or email.</p>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
