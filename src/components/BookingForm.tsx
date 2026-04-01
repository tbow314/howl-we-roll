"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const weightOptions = [
  "Under 25 lbs",
  "25-50 lbs",
  "50-80 lbs",
  "80+ lbs",
];

const serviceOptions = [
  "Bath & Brush",
  "Full Groom",
  "Cat Groom",
  "Puppy's First Groom",
  "Nail Trim",
  "Not Sure",
];

const timeOptions = [
  "Morning (8-10am)",
  "Mid-Morning (10am-12pm)",
  "Afternoon (12-3pm)",
  "Late Afternoon (3-5pm)",
];

export function BookingForm() {
  const [formData, setFormData] = useState({
    petType: "dog",
    name: "",
    phone: "",
    email: "",
    dogName: "",
    dogBreed: "",
    dogWeight: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    location: "",
    preferredContact: "call",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.dogName.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType: "booking" }),
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
                className="animate-[drawCheck_0.5s_ease-out_0.3s_both]"
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
          Thanks! Your request is in.
        </h2>
        <p className="font-body text-dark/60 mb-6 max-w-md mx-auto">
          Christine will get back to you within a few hours to confirm
          your appointment. Keep an eye on your phone and email!
        </p>
        <p className="font-body text-dark/50 text-sm mb-8">
          Need it sooner? Give us a call at{" "}
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
      <h2 className="font-heading text-2xl font-bold text-dark mb-6">
        Request an Appointment
      </h2>

      {status === "error" && errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
          <p className="font-body text-red-700 text-sm">{errorMessage}</p>
        </div>
      )}

      {/* Pet Type Selection */}
      <fieldset className="mb-8">
        <legend className="font-heading text-base font-semibold text-dark mb-4 border-b border-cream-dark pb-2 w-full">
          Is this for a dog or cat?
        </legend>
        <div className="flex gap-4">
          <label
            className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
              formData.petType === "dog"
                ? "border-gold bg-gold/5 shadow-sm"
                : "border-cream-dark hover:border-gold/40"
            }`}
          >
            <input
              type="radio"
              name="petType"
              value="dog"
              checked={formData.petType === "dog"}
              onChange={handleChange}
              className="sr-only"
            />
            <span className="text-2xl">🐕</span>
            <span className="font-body font-semibold text-dark">Dog</span>
          </label>
          <label
            className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
              formData.petType === "cat"
                ? "border-gold bg-gold/5 shadow-sm"
                : "border-cream-dark hover:border-gold/40"
            }`}
          >
            <input
              type="radio"
              name="petType"
              value="cat"
              checked={formData.petType === "cat"}
              onChange={handleChange}
              className="sr-only"
            />
            <span className="text-2xl">🐈</span>
            <span className="font-body font-semibold text-dark">Cat</span>
          </label>
        </div>
      </fieldset>

      {/* Your Info */}
      <fieldset className="mb-8">
        <legend className="font-heading text-base font-semibold text-dark mb-4 border-b border-cream-dark pb-2 w-full">
          Your Information
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className={labelClasses}>
              Your Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone Number <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="(724) 555-1234"
              className={inputClasses}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className={labelClasses}>
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className={inputClasses}
            />
          </div>
        </div>
      </fieldset>

      {/* Pet Info */}
      <fieldset className="mb-8">
        <legend className="font-heading text-base font-semibold text-dark mb-4 border-b border-cream-dark pb-2 w-full">
          About Your {formData.petType === "cat" ? "Cat" : "Dog"}
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="dogName" className={labelClasses}>
              {formData.petType === "cat" ? "Cat" : "Dog"}&apos;s Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="dogName"
              name="dogName"
              required
              value={formData.dogName}
              onChange={handleChange}
              placeholder={formData.petType === "cat" ? "Whiskers" : "Biscuit"}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="dogBreed" className={labelClasses}>
              Breed
            </label>
            <input
              type="text"
              id="dogBreed"
              name="dogBreed"
              value={formData.dogBreed}
              onChange={handleChange}
              placeholder={formData.petType === "cat" ? "Maine Coon" : "Golden Retriever"}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="dogWeight" className={labelClasses}>
              Weight
            </label>
            <select
              id="dogWeight"
              name="dogWeight"
              value={formData.dogWeight}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="">Select weight range</option>
              {weightOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="service" className={labelClasses}>
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      {/* Scheduling */}
      <fieldset className="mb-8">
        <legend className="font-heading text-base font-semibold text-dark mb-4 border-b border-cream-dark pb-2 w-full">
          Scheduling Preference
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="preferredDate" className={labelClasses}>
              Preferred Date
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="preferredTime" className={labelClasses}>
              Preferred Time
            </label>
            <select
              id="preferredTime"
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
          <div className="sm:col-span-2">
            <label htmlFor="location" className={labelClasses}>
              Your Location / City
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Canonsburg, PA"
              className={inputClasses}
            />
          </div>
        </div>
      </fieldset>

      {/* Preferred Contact Method */}
      <fieldset className="mb-8">
        <legend className="font-heading text-base font-semibold text-dark mb-4 border-b border-cream-dark pb-2 w-full">
          Preferred Contact Method
        </legend>
        <div className="flex gap-3">
          {[
            { value: "call", label: "Call", icon: "📞" },
            { value: "text", label: "Text", icon: "💬" },
            { value: "email", label: "Email", icon: "📧" },
          ].map((method) => (
            <label
              key={method.value}
              className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 text-sm ${
                formData.preferredContact === method.value
                  ? "border-gold bg-gold/5 shadow-sm"
                  : "border-cream-dark hover:border-gold/40"
              }`}
            >
              <input
                type="radio"
                name="preferredContact"
                value={method.value}
                checked={formData.preferredContact === method.value}
                onChange={handleChange}
                className="sr-only"
              />
              <span>{method.icon}</span>
              <span className="font-body font-medium text-dark">{method.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Notes */}
      <div className="mb-8">
        <label htmlFor="notes" className={labelClasses}>
          Anything else we should know?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Allergies, behavior notes, special requests..."
          className={`${inputClasses} resize-y`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-forest hover:bg-forest-light disabled:bg-forest/50 text-white font-heading font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer disabled:cursor-not-allowed animate-pulse-glow"
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
          "Request Appointment"
        )}
      </button>

      <p className="font-body text-dark/40 text-xs text-center mt-4">
        We&apos;ll never share your information. Christine will
        respond within a few hours during business hours.
      </p>
    </form>
  );
}
