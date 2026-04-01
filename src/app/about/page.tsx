import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Christine Dunn | 20+ Years Mobile Pet Grooming Experience",
  description:
    "Meet Christine Dunn, owner of Howl We Roll. With 20+ years of professional pet grooming experience and former owner of Apple Hill Pet Grooming in Mars PA, Christine grooms dogs and cats of all breeds in Canonsburg & Pittsburgh suburbs.",
  alternates: {
    canonical: "https://howlweroll.com/about",
  },
};

const qualities = [
  {
    title: "20+ Years of Expertise",
    description:
      "From traditional salons to her own shop to mobile grooming, Christine has seen and groomed it all. Every breed, every temperament, every coat type.",
    icon: (
      <svg
        className="w-8 h-8 text-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>
    ),
  },
  {
    title: "Gentle with Anxious & Senior Pets",
    description:
      "Specialized techniques for nervous, reactive, or senior pets. Patience is never in short supply — every animal gets the time they need to feel safe.",
    icon: (
      <svg
        className="w-8 h-8 text-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
  },
  {
    title: "Honest & Transparent Pricing",
    description:
      "Upfront pricing with no hidden fees. If your pet doesn't need a service, Christine will tell you — not upsell you.",
    icon: (
      <svg
        className="w-8 h-8 text-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
  },
  {
    title: "Reliable — Shows Up On Time, Every Time",
    description:
      "When Christine says she'll be there at 10, she's there at 10. Your time matters, and so does your pet's routine.",
    icon: (
      <svg
        className="w-8 h-8 text-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO SPLIT ===== */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="img-zoom rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto md:max-w-none">
              <Image
                src="/images/christine-grooming.png"
                alt="Christine Dunn grooming a dog in her Howl We Roll mobile van"
                width={700}
                height={900}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            {/* Story */}
            <div>
              <p className="font-accent text-gold font-semibold tracking-wide uppercase text-sm mb-4">
                Your Groomer
              </p>
              <h1 className="font-heading text-4xl md:text-5xl leading-tight text-dark mb-6">
                Meet Christine &mdash; Your Mobile Groomer in Canonsburg
              </h1>
              <div className="space-y-4 font-body text-dark/80 text-lg leading-relaxed">
                <p>
                  Hi, I&rsquo;m Christine Dunn &mdash; and I&rsquo;ve spent over
                  20 years making pets look and feel their best. I started my
                  career at traditional grooming shops, eventually opening my own
                  salon, Apple Hill Pet Grooming in Mars, PA. After years of
                  seeing how stressful the grooming experience can be for pets, I
                  knew there had to be a better way.
                </p>
                <p>
                  That&rsquo;s when Howl We Roll was born.
                </p>
                <p>
                  Now I bring everything &mdash; the tub, the dryer, the table,
                  the love &mdash; right to your driveway. Your pet stays in
                  their own neighborhood, hears their own birds, and gets my
                  complete, undivided attention. No other animals. No cages. No
                  stress.
                </p>
                <p>
                  I groom dogs and cats of all breeds, sizes, and temperaments.
                  Whether it&rsquo;s a nervous rescue or a show-quality poodle,
                  every pet gets the same level of care and patience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== CREDENTIALS BAR ===== */}
      <ScrollReveal>
        <section className="bg-forest py-14 lg:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedCounter
                end={20}
                suffix="+"
                label="Years Experience"
              />
              <AnimatedCounter
                end={1000}
                suffix="+"
                label="Pets Groomed"
              />
              <div className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-gold">
                  Dogs &amp; Cats
                </div>
                <div className="text-white/60 text-sm mt-1 font-body">
                  All Breeds Welcome
                </div>
              </div>
              <div className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-gold">
                  5.0
                </div>
                <div className="text-white/60 text-sm mt-1 font-body">
                  Star Rating
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== WHY CLIENTS CHOOSE CHRISTINE ===== */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <p className="font-accent text-gold font-semibold tracking-wide uppercase text-sm mb-3">
              The Howl We Roll Difference
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-dark font-bold">
              Why Clients Choose Christine
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {qualities.map((q) => (
              <div
                key={q.title}
                className="card-hover bg-white rounded-2xl p-8 border border-gold/10"
              >
                <div className="mb-4">{q.icon}</div>
                <h3 className="font-heading text-xl text-dark mb-2 font-bold">
                  {q.title}
                </h3>
                <p className="text-dark/70 leading-relaxed font-body">
                  {q.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ===== THE VAN ===== */}
      <ScrollReveal>
        <section className="bg-cream-dark py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-accent text-gold font-semibold tracking-wide uppercase text-sm mb-4">
                  The Mobile Salon
                </p>
                <h2 className="font-heading text-3xl md:text-4xl text-dark font-bold mb-6">
                  The Van
                </h2>
                <p className="font-body text-dark/80 text-lg leading-relaxed mb-6">
                  My mobile grooming van is a full salon on wheels &mdash;
                  professional-grade equipment, warm water, climate control, and
                  everything sanitized between every appointment. Your pet gets a
                  private, one-on-one grooming experience without ever leaving
                  your driveway.
                </p>
                <Link
                  href="/van-tour"
                  className="inline-flex items-center gap-2 text-forest font-semibold font-accent hover:text-forest-light transition-colors duration-300 group"
                >
                  Take a Van Tour
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
              <div className="img-zoom rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/christine-van.png"
                  alt="Christine Dunn standing next to the Howl We Roll mobile grooming van"
                  width={700}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== CTA ===== */}
      <ScrollReveal>
        <section className="bg-forest">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-cream mb-6 font-bold">
              Ready to Meet Christine?
            </h2>
            <p className="text-cream/80 text-lg mb-8 font-body leading-relaxed">
              Want to see if Christine is the right fit for your pet? Book a
              first appointment or call{" "}
              <a
                href="tel:7248981988"
                className="text-gold-light underline underline-offset-4 hover:text-gold transition-colors"
              >
                724-898-1988
              </a>
              .
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Book an Appointment
              </Link>
              <a
                href="tel:7248981988"
                className="inline-flex items-center justify-center border-2 border-cream/40 text-cream hover:bg-cream hover:text-forest font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300"
              >
                Call 724-898-1988
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
