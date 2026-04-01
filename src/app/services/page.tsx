import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Mobile Pet Grooming Prices | Dogs & Cats | Canonsburg PA",
  description:
    "Transparent mobile pet grooming prices for dogs and cats in Canonsburg & Pittsburgh suburbs. Bath & Brush from $55, Full Groom from $75, Cat Grooming from $65. No hidden fees. Book Howl We Roll today!",
  alternates: {
    canonical: "https://howlweroll.com/services",
  },
};

const addOns = [
  { name: "Teeth brushing", price: "$10" },
  { name: "Flea & tick treatment", price: "$15" },
  { name: "De-shedding treatment", price: "$20" },
  { name: "Blueberry facial", price: "$10" },
  { name: "Nail grinding (Dremel)", price: "$5" },
];

const sizeGuide = [
  { size: "Small", weight: "Under 25 lbs", adjustment: "Base price" },
  { size: "Medium", weight: "25 - 50 lbs", adjustment: "+$10 - $15" },
  { size: "Large", weight: "50 - 80 lbs", adjustment: "+$20 - $30" },
  { size: "XL", weight: "80+ lbs", adjustment: "+$30 - $45" },
];

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-forest shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}

function PawIcon() {
  return (
    <svg
      className="w-5 h-5 text-gold shrink-0 mt-0.5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 18.5c-1.5 1.5-4 2-5.5.5s-1-4 .5-5.5c1-1 2.5-2 5-2s4 1 5 2c1.5 1.5 2 4 .5 5.5s-4 1-5.5-.5zM7.5 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM16.5 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5 14.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM19 14.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <section className="bg-forest py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-accent text-gold-light font-semibold tracking-wide uppercase text-sm mb-4">
            Transparent, Honest Pricing
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Mobile Pet Grooming Services &amp; Prices
          </h1>
          <p className="font-body text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            I believe in honest, transparent pricing. No surprises, no hidden
            fees. Every groom is tailored to your pet&rsquo;s needs.
          </p>
        </div>
      </section>

      {/* ===== ANSWER CAPSULE 1 ===== */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div
            className="answer-capsule"
            role="note"
            aria-label="Services overview"
          >
            <p className="font-body text-dark/80">
              Howl We Roll offers a full range of mobile pet grooming services
              for dogs and cats in Canonsburg, Cecil Township, and
              Pittsburgh&rsquo;s south suburbs. From basic baths to full grooms,
              every appointment happens in a clean, fully equipped grooming van
              right in your driveway. Pricing depends on size, coat type, and
              services selected.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== DOG GROOMING SERVICE CARDS ===== */}
      <ScrollReveal>
        <section className="pb-20 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="font-accent text-gold font-semibold tracking-wide uppercase text-sm mb-3">
                For Your Dog
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
                Dog Grooming Services
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Bath & Brush */}
              <div className="card-hover bg-white rounded-2xl border-t-4 border-gold shadow-sm overflow-hidden">
                <div className="img-zoom aspect-[4/3] relative">
                  <Image
                    src="/images/cocker-spaniels.jpg"
                    alt="Three freshly groomed Cocker Spaniels with beautiful coats"
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-xl font-bold text-dark">
                      Bath &amp; Brush
                    </h3>
                    <span className="bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                      Popular
                    </span>
                  </div>
                  <p className="font-accent text-dark/50 text-sm mb-1">
                    Starting at
                  </p>
                  <p className="font-heading text-4xl font-bold text-gold mb-5">
                    $55
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Warm bath with premium shampoo & conditioner",
                      "Blow dry & thorough brush out",
                      "Ear cleaning",
                      "Nail trim & filing",
                      "Bandana or bow",
                    ].map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 font-body text-dark/80 text-sm"
                      >
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-cream rounded-xl px-4 py-3 mb-6">
                    <p className="font-accent text-sm text-dark/60">
                      <span className="font-semibold text-forest">
                        Best for:
                      </span>{" "}
                      Short-coated breeds, regular maintenance
                    </p>
                  </div>
                  <Link
                    href="/book"
                    className="block w-full text-center bg-gold hover:bg-gold-light text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Book This Service
                  </Link>
                </div>
              </div>

              {/* Full Groom */}
              <div className="card-hover bg-white rounded-2xl border-t-4 border-gold shadow-sm overflow-hidden">
                <div className="img-zoom aspect-[4/3] relative">
                  <Image
                    src="/images/christine-grooming.png"
                    alt="Christine Dunn grooming a dog in her mobile van"
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-xl font-bold text-dark mb-2">
                    Full Groom
                  </h3>
                  <p className="font-accent text-dark/50 text-sm mb-1">
                    Starting at
                  </p>
                  <p className="font-heading text-4xl font-bold text-gold mb-5">
                    $75
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Everything in Bath & Brush, plus:",
                      "Haircut & styling (breed standard or your preference)",
                      "Sanitary trim",
                      "Paw pad trim",
                      "Light dematting",
                    ].map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 font-body text-dark/80 text-sm"
                      >
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-cream rounded-xl px-4 py-3 mb-6">
                    <p className="font-accent text-sm text-dark/60">
                      <span className="font-semibold text-forest">
                        Best for:
                      </span>{" "}
                      All breeds needing haircuts
                    </p>
                  </div>
                  <Link
                    href="/book"
                    className="block w-full text-center bg-gold hover:bg-gold-light text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Book This Service
                  </Link>
                </div>
              </div>

              {/* Puppy's First Groom */}
              <div className="card-hover bg-white rounded-2xl border-t-4 border-gold shadow-sm overflow-hidden">
                <div className="img-zoom aspect-[4/3] relative">
                  <Image
                    src="/images/lab-portrait.jpg"
                    alt="Yellow Labrador portrait looking happy after grooming"
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-xl font-bold text-dark mb-2">
                    Puppy&rsquo;s First Groom
                  </h3>
                  <p className="font-heading text-4xl font-bold text-gold mb-5">
                    $45
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Gentle introduction to grooming",
                      "Mini bath & blow dry",
                      "Light brush",
                      "Nail trim",
                      "Lots of treats & positive reinforcement",
                    ].map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 font-body text-dark/80 text-sm"
                      >
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-cream rounded-xl px-4 py-3 mb-6">
                    <p className="font-accent text-sm text-dark/60">
                      <span className="font-semibold text-forest">
                        Best for:
                      </span>{" "}
                      Puppies under 6 months
                    </p>
                  </div>
                  <Link
                    href="/book"
                    className="block w-full text-center bg-gold hover:bg-gold-light text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Book This Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== CAT GROOMING — DIFFERENTIATOR ===== */}
      <ScrollReveal>
        <section className="bg-forest py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="img-zoom rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/cat-grooming.jpg"
                  alt="Cat being gently groomed in the Howl We Roll mobile van"
                  width={700}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-light font-accent font-semibold text-sm px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
                  <PawIcon />
                  Yes, Cats Too!
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                  Cat Grooming
                </h2>
                <p className="font-accent text-gold-light text-sm mb-1">
                  Starting at
                </p>
                <p className="font-heading text-5xl font-bold text-gold mb-6">
                  $65
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Gentle bath with cat-safe products",
                    "Blow dry & brush",
                    "Nail trim",
                    "Ear cleaning",
                    "Lion cuts available",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 font-body text-white/85 text-sm"
                    >
                      <svg
                        className="w-5 h-5 text-gold shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-white/10 rounded-xl px-5 py-4 mb-8 border border-white/10">
                  <p className="font-body text-white/90 text-sm leading-relaxed italic">
                    &ldquo;Cats are welcome in my van! I have 20+ years of
                    experience handling cats of all temperaments.&rdquo;
                  </p>
                  <p className="font-accent text-gold-light text-sm mt-2">
                    &mdash; Christine Dunn
                  </p>
                </div>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-white font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Book Cat Grooming
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== ADD-ONS ===== */}
      <ScrollReveal>
        <section className="bg-cream-dark py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="font-accent text-gold font-semibold tracking-wide uppercase text-sm mb-3">
                Customize Your Visit
              </p>
              <h2 className="font-heading text-3xl font-bold text-dark">
                Add-On Services
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {addOns.map((addon) => (
                <div
                  key={addon.name}
                  className="card-hover bg-white rounded-xl px-6 py-4 flex items-center justify-between border border-gold/10 shadow-sm"
                >
                  <span className="font-body text-dark font-medium">
                    {addon.name}
                  </span>
                  <span className="font-heading text-gold font-bold text-lg">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== SIZE GUIDE ===== */}
      <ScrollReveal>
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="font-accent text-gold font-semibold tracking-wide uppercase text-sm mb-3">
                Good to Know
              </p>
              <h2 className="font-heading text-3xl font-bold text-dark mb-3">
                Size Guide
              </h2>
              <p className="font-body text-dark/60">
                Prices vary based on your pet&rsquo;s size. Here&rsquo;s a
                general guide:
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gold/15 overflow-hidden shadow-sm">
              {/* Table header */}
              <div className="grid grid-cols-3 bg-forest text-white px-6 py-4 font-accent font-semibold text-sm">
                <span>Size</span>
                <span>Weight</span>
                <span>Price Adjustment</span>
              </div>
              {sizeGuide.map((row, i) => (
                <div
                  key={row.size}
                  className={`grid grid-cols-3 px-6 py-4 font-body text-sm ${
                    i % 2 === 0 ? "bg-cream/50" : "bg-white"
                  }`}
                >
                  <span className="font-semibold text-dark">{row.size}</span>
                  <span className="text-dark/70">{row.weight}</span>
                  <span className="text-gold font-semibold">
                    {row.adjustment}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== ANSWER CAPSULE 2 ===== */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div
            className="answer-capsule"
            role="note"
            aria-label="Free consultation"
          >
            <p className="font-body text-dark/80">
              Not sure which service your pet needs? Call Christine at{" "}
              <a
                href="tel:7248981988"
                className="text-forest font-semibold underline"
              >
                724-898-1988
              </a>{" "}
              for a free phone consultation. She&rsquo;ll recommend the right
              package based on your pet&rsquo;s breed, coat condition, and your
              preferences. No pressure, no upsells &mdash; just honest advice
              from a groomer with 20+ years of experience.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== FINAL CTA ===== */}
      <ScrollReveal>
        <section className="bg-gold py-20 lg:py-24 mt-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Book?
            </h2>
            <p className="font-body text-white/90 text-lg mb-8 leading-relaxed">
              Pick the service that fits your pet, and Christine will handle the
              rest. Convenient, professional grooming for dogs and cats right at
              your door.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-forest hover:bg-forest-light text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Book Now
              </Link>
              <a
                href="tel:7248981988"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-gold font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300"
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
