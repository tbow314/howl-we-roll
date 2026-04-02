import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Reviews | Howl We Roll Mobile Grooming Canonsburg PA",
  description:
    "See what pet parents say about Howl We Roll mobile dog and cat grooming. Rated 3.9 stars on Google with 11 reviews. 100% recommended on Facebook. 724-898-1988",
};

const featuredReview = {
  quote:
    "Christine is a miracle worker with my anxious rescue pup, Biscuit. He used to shake the whole drive to the groomer. Now Christine comes to us and he actually gets excited! Best decision we ever made.",
  name: "Sarah M.",
  location: "Cecil Township",
  pet: "Biscuit, Lab Mix",
};

const reviews = [
  {
    quote:
      "My golden retriever Bailey comes out looking like she just left a 5-star spa. Christine takes her time and does incredible work. Plus, the convenience of not leaving home? Game changer.",
    name: "Mike T.",
    location: "Canonsburg",
    pet: "Bailey, Golden Retriever",
  },
  {
    quote:
      "We have three dogs — two Beagles and a Dachshund — and getting them all to a groomer was a nightmare. Christine grooms them all in our driveway, one at a time, no rushing. The van is immaculate.",
    name: "Lisa K.",
    location: "McMurray",
    pet: "Ginger, Pickles & Maple — Beagles & Dachshund",
  },
  {
    quote:
      "Finally found a groomer who actually listens! I showed Christine a picture of how I wanted Teddy's cut and she nailed it. Every. Single. Time.",
    name: "Jennifer R.",
    location: "Peters Township",
    pet: "Teddy, Bichon Frise",
  },
  {
    quote:
      "Christine noticed a skin issue on my German Shepherd Rocky that I hadn't even seen. She's not just a groomer — she genuinely cares about the animals.",
    name: "David P.",
    location: "Bridgeville",
    pet: "Rocky, German Shepherd",
  },
  {
    quote:
      "Our senior beagle Henry has arthritis and can't do car rides anymore. Mobile grooming has been a lifesaver. Christine is so gentle and patient with him.",
    name: "Carol S.",
    location: "Upper St. Clair",
    pet: "Henry, Beagle (12 years old)",
  },
  {
    quote:
      "I was skeptical about mobile grooming but Christine converted me. The van is better equipped than most brick-and-mortar places I've been to. And my Standard Poodle Coco has never looked better.",
    name: "Amanda W.",
    location: "Washington",
    pet: "Coco, Standard Poodle",
  },
  {
    quote:
      "Punctual, professional, and my Labradoodle Duke absolutely loves her. What more could you ask for? We've been monthly regulars for over a year now.",
    name: "Tom H.",
    location: "Canonsburg",
    pet: "Duke, Labradoodle",
  },
];

function StarRating({ size = "text-xl" }: { size?: string }) {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-gold ${size}`}>
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Rating Hero */}
      <section className="pt-20 pb-8 md:pt-28 md:pb-12 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-accent text-gold uppercase tracking-widest text-sm mb-4">
              Reviews
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-dark mb-10">
              What Pet Parents Are Saying
            </h1>
          </ScrollReveal>

          {/* Big Rating Display */}
          <ScrollReveal delay={200}>
            <div className="inline-flex flex-col items-center bg-white rounded-3xl shadow-lg px-12 py-10 border border-gold/15">
              <div className="flex gap-3 mb-6">
                <div className="text-center">
                  <div className="font-heading text-5xl md:text-6xl font-bold text-dark">3.9</div>
                  <div className="flex gap-1 mt-1 justify-center">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-gold text-xl">&#9733;</span>
                    ))}
                    <span className="text-gold/40 text-xl">&#9733;</span>
                  </div>
                  <p className="font-body text-dark/50 text-xs mt-1">Google (11 reviews)</p>
                </div>
                <div className="w-px bg-cream-dark mx-2" />
                <div className="text-center">
                  <div className="font-heading text-5xl md:text-6xl font-bold text-dark">100%</div>
                  <div className="flex gap-1 mt-1 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-gold text-xl">&#9733;</span>
                    ))}
                  </div>
                  <p className="font-body text-dark/50 text-xs mt-1">Facebook (7 recommend)</p>
                </div>
              </div>
              <div className="pt-3 border-t border-cream-dark w-full">
                <p className="font-accent text-forest font-semibold text-sm">
                  BBB Accredited Business
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Review */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
        <ScrollReveal>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border-2 border-gold/30 relative overflow-hidden">
            {/* Gold accent corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-full" />

            {/* Large quote mark */}
            <div className="text-gold/20 font-heading text-8xl md:text-9xl leading-none absolute top-4 left-6 select-none">
              &ldquo;
            </div>

            <div className="relative z-10">
              <StarRating size="text-2xl" />
              <blockquote className="font-body text-dark/90 text-lg md:text-xl leading-relaxed mt-6 mb-8">
                &ldquo;{featuredReview.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center">
                  <span className="font-heading text-forest text-lg font-bold">
                    {featuredReview.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body font-semibold text-dark">
                    {featuredReview.name}
                  </p>
                  <p className="font-body text-dark/50 text-sm">
                    {featuredReview.location}
                  </p>
                  <p className="font-accent italic text-gold text-sm mt-0.5">
                    {featuredReview.pet}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Review Grid */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reviews.map((review, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <div className="card-hover bg-white rounded-2xl p-6 sm:p-8 border border-gold/10 flex flex-col h-full">
                  <StarRating />
                  <blockquote className="font-body text-dark/80 leading-relaxed mt-4 mb-6 flex-1">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-cream-dark pt-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-cream-dark flex items-center justify-center shrink-0">
                      <span className="font-heading text-forest text-sm font-bold">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-dark text-sm">
                        {review.name}
                      </p>
                      <p className="font-body text-dark/50 text-xs">
                        {review.location}
                      </p>
                      <p className="font-accent italic text-gold text-xs mt-0.5">
                        {review.pet}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Review Platforms / Trust Signals */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-14 md:py-20 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl text-dark mb-3">
              Find Us On
            </h2>
            <p className="font-body text-dark/60 text-sm mb-10">
              Leave us a review or check what others are saying.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
              {/* Google */}
              <a
                href="https://www.google.com/search?q=howl+we+roll+mobile+pet+grooming+canonsburg+pa"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center group-hover:bg-cream-dark transition-colors">
                  <svg className="w-7 h-7 text-dark/60" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
                <span className="font-accent text-dark/70 text-sm font-medium">Google</span>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/howlweroll/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center group-hover:bg-cream-dark transition-colors">
                  <svg className="w-7 h-7 text-dark/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <span className="font-accent text-dark/70 text-sm font-medium">Facebook</span>
              </a>

              {/* BBB */}
              <a
                href="https://www.bbb.org/us/pa/canonsburg/profile/pet-grooming/howl-we-roll-mobile-pet-grooming-0141-71105129"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center group-hover:bg-cream-dark transition-colors">
                  <svg className="w-7 h-7 text-dark/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <span className="font-accent text-dark/70 text-sm font-medium">BBB</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-8 left-12 text-6xl rotate-12">&#9733;</div>
          <div className="absolute bottom-8 right-16 text-5xl -rotate-12">&#9733;</div>
          <div className="absolute top-1/2 right-1/4 text-4xl rotate-45">&#9733;</div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl text-cream mb-4">
              Ready to See Why Pet Parents Love Us?
            </h2>
            <p className="font-body text-cream/80 mb-8 text-lg leading-relaxed">
              Give your pup the stress-free, 5-star grooming experience they
              deserve — right in your own driveway.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/book"
                className="bg-gold hover:bg-gold-light text-dark font-accent font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-300 animate-pulse-glow"
              >
                Book an Appointment
              </Link>
              <a
                href="tel:7248981988"
                className="text-cream/90 hover:text-cream font-body font-medium text-base transition-colors"
              >
                or call 724-898-1988
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
