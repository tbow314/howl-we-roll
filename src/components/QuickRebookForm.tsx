"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const lastServiceOptions = [
  "Bath & Brush",
  "Full Groom",
  "Cat Groom",
  "Nail Trim",
  "Other",
];

const timeOptions = [
  "Morning (8-10am)",
  "Mid-Morning (10am-12pm)",
  "Afternoon (12-3pm)",
  "Late Afternoon (3-5pm)",
];

export function QuickRebookForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    petName: "",
    lastService: "",
    sameService: false,
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const target = e.target;
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setFormData((prev) => ({ ...prev, [target.name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [target.name]: target.value }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    if (!formData.name.trim() || !formData.phone.trim() || !formData.petName.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formType: "rebook",
          service: formData.sameService ? `Same as last: ${formData.lastService}` : formData.lastService,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please call us at 724-898-1988.");
    }
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-dark font-body text-sm placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-200";

  const labelClasses = "block font-body text-sm font-medium text-dark/80 mb-1.5";

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 border border-gold/10 text-center">
        {/* Animated checkmark */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 bg-forest/10 rounded-full animate-ping opacity-20" />
          <div className="relative w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-forest"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
                style={{
                  strokeDasharray: 24,
                  strokeDashoffset: 24,
                  animation: "drawCheck 0.5s ease-out 0.3s forwards",
                }}
              />
            </svg>
          </div>
        </div>
        <h2 className="font-heading text-2xl font-bold text-dark mb-3">
          You&apos;re all set!
        </h2>
        <p className="font-body text-dark/60 mb-6 max-w-md mx-auto">
          Christine will confirm your rebooking shortly.
          Thanks for being a loyal Howl We Roll client!
        </p>
        <p className="font-body text-dark/50 text-sm mb-8">
          Need it sooner? Call{" "}
          <a href="tel:7248981988" className="text-forest font-semibold hover:text-forest-light transition-colors">
            724-898-1988
          </a>
        </p>
        <Link
          href="/"
          className="inline-block bg-forest hover:bg-forest-light text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors"
        >
          Back to Home
        </Link>
        <style>{`
          @keyframes drawCheck {
            to { stroke-dashoffset: 0; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 border border-gold/10"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
          <span className="text-xl">⚡</span>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold text-dark">
            Quick Rebook
          </h2>
          <p className="font-body text-xs text-dark/50">
            Streamlined for returning clients
          </p>
        </div>
      </div>

      {status === "error" && errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
          <p className="font-body text-red-700 text-sm">{errorMessage}</p>
        </div>
      )}

      <div className="space-y-5">
        {/* Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="rebook-name" className={labelClasses}>
              Your Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="rebook-name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="rebook-phone" className={labelClasses}>
              Phone <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              id="rebook-phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="(724) 555-1234"
              className={inputClasses}
            />
          </div>
        </div>

        {/* Pet Name */}
        <div>
          <label htmlFor="rebook-petName" className={labelClasses}>
            Pet Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="rebook-petName"
            name="petName"
            required
            value={formData.petName}
            onChange={handleChange}
            placeholder="Biscuit"
            className={inputClasses}
          />
        </div>

        {/* Last Service */}
        <div>
          <label htmlFor="rebook-lastService" className={labelClasses}>
            Last Service
          </label>
          <select
            id="rebook-lastService"
            name="lastService"
            value={formData.lastService}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select your last service</option>
            {lastServiceOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Same service checkbox */}
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="sameService"
            checked={formData.sameService}
            onChange={handleChange}
            className="w-5 h-5 rounded border-cream-dark text-forest focus:ring-gold focus:ring-2 cursor-pointer accent-forest"
          />
          <span className="font-body text-sm text-dark/70 group-hover:text-dark transition-colors">
            Same service as last time
          </span>
        </label>

        {/* Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="rebook-date" className={labelClasses}>
              Preferred Date
            </label>
            <input
              type="date"
              id="rebook-date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="rebook-time" className={labelClasses}>
              Preferred Time
            </label>
            <select
              id="rebook-time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="">Select a time</option>
              {timeOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="rebook-notes" className={labelClasses}>
            Any changes or notes?
          </label>
          <textarea
            id="rebook-notes"
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            placeholder="Different style, new concern, or just say hi..."
            className={`${inputClasses} resize-y`}
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full mt-8 bg-forest hover:bg-forest-light disabled:bg-forest/50 text-white font-heading font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer disabled:cursor-not-allowed animate-pulse-glow"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Rebook My Appointment"
        )}
      </button>

      <p className="font-body text-dark/40 text-xs text-center mt-4">
        Christine will confirm your rebooking within a few hours.
      </p>
    </form>
  );
}
