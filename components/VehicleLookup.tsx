"use client";

import { useState } from "react";
import { Search, Car, Loader2, AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

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
  taxDueDate?: string;
  registrationNumber: string;
}

export default function VehicleLookup() {
  const [reg, setReg] = useState("");
  const [vehicle, setVehicle] = useState<VehicleData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLookup = async () => {
    const cleaned = reg.replace(/\s/g, "").toUpperCase();
    if (!cleaned) return;
    setLoading(true);
    setError("");
    setVehicle(null);

    try {
      const res = await fetch("/api/vehicle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ registrationNumber: cleaned }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Vehicle not found. Please check the registration.");
        return;
      }
      const data = await res.json();
      setVehicle(data);
    } catch {
      setError("Unable to look up vehicle. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const motStatusColor = (status: string) => {
    if (status?.toLowerCase().includes("valid")) return "text-green-400";
    if (status?.toLowerCase().includes("no result")) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Input */}
      <div className="flex gap-3">
        <div className="flex-1 relative">
          {/* UK plate yellow strip */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-yellow-400 rounded-l-xl flex items-center justify-center">
            <span className="text-blue-900 font-black text-xs leading-tight text-center">
              GB
            </span>
          </div>
          <input
            type="text"
            value={reg}
            onChange={(e) => setReg(e.target.value.toUpperCase())}
            onKeyDown={(e) => e.key === "Enter" && handleLookup()}
            placeholder="AB12 CDE"
            maxLength={8}
            className="w-full pl-16 pr-4 py-4 bg-white text-[#1e1e1e] font-bold text-xl tracking-widest uppercase rounded-xl border-2 border-yellow-400 focus:outline-none focus:border-[#29abe2] placeholder:text-gray-300 placeholder:font-normal placeholder:text-base placeholder:tracking-normal"
          />
        </div>
        <button
          onClick={handleLookup}
          disabled={loading || !reg.trim()}
          className="bg-[#29abe2] hover:bg-[#1a7fb5] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-4 rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          {loading ? <Loader2 size={18} className="animate-spin" /> : <Search size={18} />}
          {loading ? "Checking..." : "Check Vehicle"}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="mt-4 flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm">
          <AlertCircle size={16} className="shrink-0" />
          {error}
        </div>
      )}

      {/* Result */}
      {vehicle && (
        <div className="mt-6 bg-[#2a2a2a] border border-[#404040] rounded-2xl overflow-hidden">
          <div className="bg-[#29abe2]/10 border-b border-[#404040] px-6 py-4 flex items-center gap-3">
            <Car size={20} className="text-[#29abe2]" />
            <div>
              <p className="text-white font-bold text-lg">{vehicle.registrationNumber}</p>
              <p className="text-[#a0a0a0] text-sm">
                {vehicle.yearOfManufacture} {vehicle.make} {vehicle.model || ""}
              </p>
            </div>
          </div>
          <div className="p-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: "Make", value: vehicle.make },
              { label: "Model", value: vehicle.model || "N/A" },
              { label: "Colour", value: vehicle.colour },
              { label: "Fuel Type", value: vehicle.fuelType },
              { label: "Year", value: vehicle.yearOfManufacture?.toString() },
              {
                label: "Engine",
                value: vehicle.engineCapacity ? `${vehicle.engineCapacity}cc` : "N/A",
              },
              {
                label: "MOT Status",
                value: vehicle.motStatus,
                className: motStatusColor(vehicle.motStatus),
              },
              { label: "MOT Expiry", value: vehicle.motExpiryDate || "N/A" },
              { label: "Tax Status", value: vehicle.taxStatus },
            ].map(({ label, value, className }) => (
              <div key={label}>
                <p className="text-[#a0a0a0] text-xs uppercase tracking-wider mb-1">{label}</p>
                <p className={`text-sm font-semibold capitalize ${className || "text-white"}`}>{value || "N/A"}</p>
              </div>
            ))}
          </div>
          <div className="px-6 pb-6">
            <Link
              href={`/booking?reg=${vehicle.registrationNumber}`}
              className="w-full bg-[#29abe2] hover:bg-[#1a7fb5] text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              Book Service for This Vehicle
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
