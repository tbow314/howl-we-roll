import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="py-24 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-heading text-5xl font-bold text-forest mb-4">
          Ruh Roh!
        </h1>
        <p className="text-xl text-dark/70 mb-8">
          Looks like this page ran off. Let&apos;s get you back on the right trail.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-gold hover:bg-gold-light text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/book"
            className="border-2 border-forest text-forest hover:bg-forest hover:text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
        <p className="mt-8 text-dark/50">
          Or call Christine at{" "}
          <a href="tel:7248981988" className="text-forest font-semibold hover:text-gold">
            724-898-1988
          </a>
        </p>
      </div>
    </section>
  );
}
