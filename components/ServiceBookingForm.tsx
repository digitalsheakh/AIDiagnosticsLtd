"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2, Send, ArrowRight } from "lucide-react";

const TIME_SLOTS = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

interface Props {
  serviceName: string;
  isQuote?: boolean;
}

export default function ServiceBookingForm({ serviceName, isQuote = false }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [registration, setRegistration] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [notes, setNotes] = useState("");
  const [faultDescription, setFaultDescription] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          registration,
          service: serviceName,
          preferredDate,
          preferredTime,
          notes,
          faultDescription: isQuote ? faultDescription : undefined,
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
      <div className="text-center py-14 px-8">
        <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-green-400" />
        </div>
        <h3 className="text-white font-bold text-2xl mb-3">Request Sent</h3>
        <p className="text-[#a0a0a0] mb-2 max-w-sm mx-auto">
          Thanks {name}, we will be in touch shortly to confirm your{" "}
          {isQuote ? "quote" : "appointment"}.
        </p>
        <p className="text-[#a0a0a0] text-sm">
          Urgent? Call{" "}
          <a href="tel:07986848798" className="text-[#29abe2] hover:underline">
            07986 848798
          </a>
        </p>
      </div>
    );
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-[#a0a0a0] mb-1.5">
            Full Name *
          </label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Smith"
            className="w-full bg-[#2a2a2a] border border-[#404040] focus:border-[#29abe2] text-white placeholder:text-[#606060] rounded-lg px-4 py-3 text-sm outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#a0a0a0] mb-1.5">
            Phone Number *
          </label>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="07000 000000"
            className="w-full bg-[#2a2a2a] border border-[#404040] focus:border-[#29abe2] text-white placeholder:text-[#606060] rounded-lg px-4 py-3 text-sm outline-none transition-colors"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-medium text-[#a0a0a0] mb-1.5">
          Email Address *
        </label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="john@example.com"
          className="w-full bg-[#2a2a2a] border border-[#404040] focus:border-[#29abe2] text-white placeholder:text-[#606060] rounded-lg px-4 py-3 text-sm outline-none transition-colors"
        />
      </div>

      {/* Registration + Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-[#a0a0a0] mb-1.5">
            Vehicle Registration
          </label>
          <div className="flex rounded-lg overflow-hidden border-2 border-yellow-400 focus-within:border-[#29abe2] transition-colors bg-white">
            <div className="w-10 bg-yellow-400 flex items-center justify-center shrink-0">
              <span className="text-blue-900 font-black text-[9px] leading-tight text-center">
                GB
              </span>
            </div>
            <input
              type="text"
              value={registration}
              onChange={(e) =>
                setRegistration(e.target.value.toUpperCase().replace(/[^A-Z0-9 ]/g, ""))
              }
              placeholder="AB12 CDE"
              maxLength={8}
              className="flex-1 px-3 py-3 text-[#1e1e1e] font-bold tracking-widest uppercase bg-transparent focus:outline-none text-sm placeholder:text-gray-300 placeholder:font-normal placeholder:tracking-normal"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-[#a0a0a0] mb-1.5">
            Preferred Date
          </label>
          <input
            type="date"
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
            min={today}
            className="w-full bg-[#2a2a2a] border border-[#404040] focus:border-[#29abe2] text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors"
          />
        </div>
      </div>

      {/* Time */}
      <div>
        <label className="block text-xs font-medium text-[#a0a0a0] mb-1.5">
          Preferred Time
        </label>
        <select
          value={preferredTime}
          onChange={(e) => setPreferredTime(e.target.value)}
          className="w-full bg-[#2a2a2a] border border-[#404040] focus:border-[#29abe2] text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors appearance-none"
        >
          <option value="">Select a time...</option>
          {TIME_SLOTS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Fault description (quote services) */}
      {isQuote && (
        <div>
          <label className="block text-xs font-medium text-[#a0a0a0] mb-1.5">
            Fault / Issue Description *
          </label>
          <textarea
            required
            rows={4}
            value={faultDescription}
            onChange={(e) => setFaultDescription(e.target.value)}
            placeholder="Please describe the fault, warning light, noise or issue you are experiencing..."
            className="w-full bg-[#2a2a2a] border border-[#404040] focus:border-[#29abe2] text-white placeholder:text-[#606060] rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none"
          />
        </div>
      )}

      {/* Notes */}
      <div>
        <label className="block text-xs font-medium text-[#a0a0a0] mb-1.5">
          Additional Notes
        </label>
        <textarea
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Any other information, specific concerns or questions..."
          className="w-full bg-[#2a2a2a] border border-[#404040] focus:border-[#29abe2] text-white placeholder:text-[#606060] rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none"
        />
      </div>

      {submitError && (
        <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">
          <AlertCircle size={14} className="shrink-0" />
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#29abe2] hover:bg-[#1a7fb5] disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
      >
        {submitting ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : isQuote ? (
          <>
            <Send size={15} /> Request a Quote <ArrowRight size={14} />
          </>
        ) : (
          <>
            <Send size={15} /> Confirm Booking Request <ArrowRight size={14} />
          </>
        )}
      </button>

      <p className="text-[#606060] text-xs text-center">
        No deposit required, we will confirm by phone or email.
      </p>
    </form>
  );
}
