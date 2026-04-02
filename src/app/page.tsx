import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Mobile Dog Grooming Canonsburg PA | Howl We Roll",
  description:
    "Howl We Roll brings professional mobile dog and cat grooming to your door in Canonsburg, Cecil Township & Pittsburgh suburbs. 20+ years experience. Stress-free, one-on-one care. Book today! 724-898-1988",
  alternates: {
    canonical: "https://howlweroll.com",
  },
};

const faqItems = [
  {
    question: "How much does mobile grooming cost?",
    answer:
      "Our prices start at $45 for a Puppy's First Groom, $55 for a Bath & Brush, $65 for Cat Grooming, and $75 for a Full Groom. Final pricing depends on your pet's size, coat type, and condition. We believe in transparent pricing with no hidden fees — you'll always know the cost before we begin.",
  },
  {
    question: "Do you groom cats too?",
    answer:
      "Yes! Christine has extensive experience grooming cats of all breeds and temperaments. Cat grooming starts at $65 and includes a gentle bath, blow dry, brush out, nail trim, and ear cleaning. The calm, one-on-one environment of the mobile van is especially ideal for feline clients.",
  },
  {
    question: "Do I need to be home during the grooming?",
    answer:
      "Yes, we ask that you be home during the appointment. However, you don't need to do anything — Christine handles everything in the fully equipped grooming van in your driveway. You're welcome to relax inside while your pet gets pampered.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Howl We Roll serves Canonsburg, Cecil Township, McMurray, Peters Township, Bridgeville, Upper St. Clair, Washington, Southpointe, and surrounding communities in the greater Pittsburgh south suburbs. If you're within about 20 miles of Canonsburg, give us a call!",
  },
  {
    question: "How long does an appointment take?",
    answer:
      "A typical appointment takes between 1 and 2 hours, depending on your pet's size, coat condition, and the services you choose. Because your pet gets one-on-one attention with no distractions, we can work efficiently without rushing.",
  },
  {
    question: "Is mobile grooming safe for anxious pets?",
    answer:
      "Absolutely — mobile grooming is actually better for anxious pets. Your pet stays in familiar surroundings, there are no other animals around, and they receive calm, one-on-one attention from the same groomer every time. Many anxious pets who struggle at traditional salons do wonderfully with mobile grooming.",
  },
  {
    question: "What if my dog has matted fur?",
    answer:
      "Christine will assess the matting during the appointment. Light matting can often be brushed out, but severe matting may require a shorter clip for your pet's comfort and skin health. We'll always discuss options with you before proceeding, and we'll give you tips to prevent matting between grooms.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

/* ---------- icon helpers ---------- */
function StarRating() {
  return (
    <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-forest flex-shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function LocationPinIcon() {
  return (
    <svg
      className="w-5 h-5 text-gold flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ========== HOME PAGE ========== */
export default function HomePage() {
  const services = [
    {
      name: "Full Groom",
      price: "from $75",
      image: "/images/christine-grooming.png",
      alt: "Christine grooming a fluffy dog in her mobile grooming van",
      desc: "Complete haircut, bath, blow dry, brush out, ear cleaning, nail trim, sanitary trim & bandana.",
    },
    {
      name: "Cat Grooming",
      price: "from $65",
      image: "/images/cat-grooming.jpg",
      alt: "Beautiful Persian cat being professionally groomed",
      desc: "Gentle feline grooming including bath, blow dry, brush out, nail trim, ear cleaning & lion cuts available.",
    },
    {
      name: "Bath & Brush",
      price: "from $55",
      image: "/images/cocker-spaniels.jpg",
      alt: "Three beautifully groomed Cocker Spaniels with shiny coats",
      desc: "Full bath, blow dry, thorough brush out, ear cleaning, nail trim & a fresh bandana to show off.",
    },
    {
      name: "Puppy's First Groom",
      price: "$45",
      image: "/images/lab-portrait.jpg",
      alt: "Happy yellow Labrador portrait after professional grooming",
      desc: "A gentle introduction to grooming with mini bath, light brush, nail trim & lots of treats and patience.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Christine is amazing with my anxious rescue. He used to panic at the groomer, but now he actually wags his tail when the van pulls up!",
      name: "Sarah M.",
      location: "Cecil Township",
      initials: "SM",
    },
    {
      quote:
        "Best mobile groomer in the area, hands down. My golden always comes out looking and smelling incredible. Worth every penny for the convenience.",
      name: "Mike T.",
      location: "Canonsburg",
      initials: "MT",
    },
    {
      quote:
        "So convenient and professional. The van is spotless and Christine treats our dogs like her own. We've been coming back for 3 years now.",
      name: "Lisa K.",
      location: "McMurray",
      initials: "LK",
    },
  ];

  const serviceAreas = [
    "Canonsburg",
    "Cecil Township",
    "McMurray",
    "Peters Township",
    "Bridgeville",
    "Upper St. Clair",
    "Washington",
    "Southpointe",
  ];

  const mobileAdvantages = [
    {
      mobile: "Your pet stays home — no car anxiety",
      traditional: "Stressful car rides each way",
    },
    {
      mobile: "One-on-one attention, no other animals",
      traditional: "Caged with strangers for hours",
    },
    {
      mobile: "No waiting — your time slot is yours",
      traditional: "Drop off and wait 3-4 hours",
    },
    {
      mobile: "Same groomer every visit — consistency",
      traditional: "Rotating staff your pet doesn't know",
    },
    {
      mobile: "Less exposure to illness",
      traditional: "Shared spaces with unknown pets",
    },
    {
      mobile: "I come to YOU — zero effort on your part",
      traditional: "You drive there and back",
    },
  ];

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Full-bleed background image */}
        <Image
          src="/images/christine-van.png"
          alt="Howl We Roll mobile pet grooming van in Canonsburg PA"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/70 to-dark/40" />
        {/* Gold accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 font-accent font-semibold text-sm tracking-wide uppercase px-4 py-2 rounded-full mb-6 border border-white/10">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Canonsburg &bull; Cecil Township &bull; Pittsburgh Suburbs
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              We Come to You.{" "}
              <span className="block text-gold mt-2">Your Pet Stays Home.</span>
            </h1>

            <p className="font-body text-lg sm:text-xl text-white/80 leading-relaxed mb-3 max-w-lg">
              Professional mobile dog &amp; cat grooming with 20+ years of experience. One-on-one care in our fully equipped van&nbsp;&mdash; right in your driveway.
            </p>

            <p className="font-accent italic text-gold-light text-lg mb-8">
              &ldquo;Squeaky clean from pawz to schnawz&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 animate-pulse-glow"
              >
                Book Your Appointment
              </Link>
              <a
                href="tel:7248981988"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-full text-base transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                Call 724-898-1988
              </a>
            </div>

            {/* Photo strip */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  { src: "/images/lab-portrait.jpg", alt: "Happy groomed Labrador" },
                  { src: "/images/cocker-spaniels.jpg", alt: "Groomed Cocker Spaniels" },
                  { src: "/images/cat-grooming.jpg", alt: "Cat being groomed" },
                  { src: "/images/christine-grooming.png", alt: "Christine grooming a dog" },
                ].map((img, i) => (
                  <div
                    key={i}
                    className="w-11 h-11 rounded-full border-2 border-white/30 overflow-hidden"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={44}
                      height={44}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/60 text-xs font-accent">
                  1,000+ happy pets groomed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="bg-white border-y border-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={20} suffix="+" label="Years Experience" />
            <AnimatedCounter
              end={1000}
              suffix="+"
              label="Happy Pets Groomed"
            />
            <AnimatedCounter end={3} suffix=".9" label="Google Rating" />
            <AnimatedCounter end={100} suffix="%" label="Facebook Recommend" />
          </div>
        </div>
      </section>

      {/* ===== ANSWER CAPSULE 1 ===== */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div
            className="answer-capsule"
            role="note"
            aria-label="About Howl We Roll"
          >
            <p className="font-body text-dark/80">
              Howl We Roll is a professional mobile dog and cat grooming service
              based in Canonsburg, PA. Owner Christine Dunn brings over 20 years
              of grooming experience and a fully equipped van directly to your
              home in Cecil Township, McMurray, Peters Township, and the greater
              Pittsburgh suburbs. Every pet receives one-on-one attention with no
              cages and no stress.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== WHY MOBILE > TRADITIONAL ===== */}
      <ScrollReveal>
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="font-accent text-gold font-semibold tracking-wide uppercase text-sm mb-3">
                The Smart Choice
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
                Why Mobile Grooming{" "}
                <span className="text-gradient">Beats the Shop</span>
              </h2>
            </div>

            {/* Comparison table */}
            <div className="rounded-2xl overflow-hidden border border-gold/15 shadow-lg">
              {/* Header */}
              <div className="grid grid-cols-2">
                <div className="bg-forest px-6 py-4">
                  <p className="font-heading text-lg font-bold text-white text-center">
                    Mobile Grooming
                  </p>
                  <p className="font-accent text-white/70 text-sm text-center">
                    Howl We Roll
                  </p>
                </div>
                <div className="bg-dark/80 px-6 py-4">
                  <p className="font-heading text-lg font-bold text-white/70 text-center">
                    Traditional Shop
                  </p>
                  <p className="font-accent text-white/40 text-sm text-center">
                    The Old Way
                  </p>
                </div>
              </div>
              {/* Rows */}
              {mobileAdvantages.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${
                    i % 2 === 0 ? "bg-cream/50" : "bg-white"
                  }`}
                >
                  <div className="px-6 py-4 flex items-start gap-3 border-r border-gold/10">
                    <CheckIcon />
                    <span className="font-body text-dark text-sm sm:text-base">
                      {row.mobile}
                    </span>
                  </div>
                  <div className="px-6 py-4 flex items-start gap-3">
                    <XIcon />
                    <span className="font-body text-dark/50 text-sm sm:text-base">
                      {row.traditional}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== SERVICES PREVIEW ===== */}
      <ScrollReveal>
        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="font-accent text-gold font-semibold tracking-wide uppercase text-sm mb-3">
                Transparent Pricing
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
                Popular Services
              </h2>
              <p className="font-body text-dark/60 mt-3 max-w-2xl mx-auto">
                No hidden fees, no surprises. Here&rsquo;s what we offer&nbsp;&mdash; and what it costs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="bg-white rounded-2xl overflow-hidden border border-gold/15 card-hover"
                >
                  <div className="img-zoom aspect-[4/3] relative">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold text-dark mb-1">
                      {service.name}
                    </h3>
                    <p className="font-accent text-gold font-bold text-xl mb-3">
                      {service.price}
                    </p>
                    <p className="font-body text-dark/60 text-sm leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <Link
                      href="/book"
                      className="inline-flex items-center justify-center w-full bg-forest hover:bg-forest-light text-white font-semibold py-2.5 rounded-full text-sm transition-all duration-300"
                    >
                      Book This
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-forest font-semibold hover:text-forest-light transition-colors group"
              >
                View All Services &amp; Pricing
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== ABOUT PREVIEW ===== */}
      <ScrollReveal>
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left — Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gold/15">
                <Image
                  src="/images/christine-van.png"
                  alt="Christine Dunn standing proudly in front of her white Howl We Roll mobile grooming van"
                  width={700}
                  height={525}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/60 to-transparent p-6">
                  <p className="font-accent text-white/90 text-sm font-semibold">
                    Christine Dunn &bull; Owner &amp; Lead Groomer
                  </p>
                </div>
              </div>

              {/* Right — Copy */}
              <div>
                <p className="font-accent text-gold font-semibold tracking-wide uppercase text-sm mb-3">
                  Meet Your Groomer
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark mb-6">
                  Hi, I&rsquo;m Christine
                </h2>
                <div className="space-y-4 font-body text-dark/70 text-lg leading-relaxed">
                  <p>
                    I&rsquo;ve been grooming pets for over 20 years. I
                    previously ran Apple Hill Pet Grooming in Mars, PA before
                    launching Howl We Roll to bring that same quality directly to
                    your door.
                  </p>
                  <p>
                    Every pet gets my full, undivided attention. No cages, no
                    assembly lines, no rotating staff. Just me, your pet, and a
                    fully equipped grooming van parked right in your driveway.
                  </p>
                  <p>
                    I treat every dog and cat like they&rsquo;re my own&nbsp;&mdash; because that&rsquo;s
                    what they deserve.
                  </p>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-forest font-semibold mt-6 hover:text-forest-light transition-colors group"
                >
                  Read Christine&rsquo;s Full Story
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== ANSWER CAPSULE 2 ===== */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div
            className="answer-capsule"
            role="note"
            aria-label="Mobile grooming pricing info"
          >
            <p className="font-body text-dark/80">
              Mobile dog grooming in the Canonsburg and Cecil Township area costs
              between $45 and $95, depending on your pet&rsquo;s size, coat
              type, and services selected. Cat grooming starts at $65. Howl We
              Roll offers transparent pricing with no hidden fees. Call{" "}
              <a
                href="tel:7248981988"
                className="text-forest font-semibold underline"
              >
                724-898-1988
              </a>{" "}
              or book online for an exact quote.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== TESTIMONIALS ===== */}
      <ScrollReveal>
        <section className="bg-forest py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="font-accent text-gold-light font-semibold tracking-wide uppercase text-sm mb-3">
                Happy Pups, Happy Parents
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                What Our Clients Say
              </h2>
              <p className="font-body text-white/60 mt-3 max-w-lg mx-auto">
                3.9 stars on Google &middot; 100% recommended on Facebook &middot; BBB Accredited
              </p>
              <p className="font-body text-white/40 mt-2 text-xs">
                Sample reviews shown &mdash; real reviews will be connected at launch
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 stagger-children">
              {testimonials.map((review) => (
                <div
                  key={review.name}
                  className="bg-white rounded-2xl p-8 shadow-lg card-hover relative"
                >
                  {/* Decorative quote mark */}
                  <div className="absolute top-4 right-6 text-gold/15 text-6xl font-heading leading-none select-none pointer-events-none">
                    &ldquo;
                  </div>
                  <StarRating />
                  <blockquote className="font-body text-dark/80 leading-relaxed mb-6 text-base relative z-10">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-gold rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-white font-bold text-sm">
                        {review.initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-dark text-sm">
                        {review.name}
                      </p>
                      <p className="text-dark/50 text-xs">{review.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== FAQ SECTION ===== */}
      <ScrollReveal>
        <section className="py-20 lg:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="font-accent text-gold font-semibold tracking-wide uppercase text-sm mb-3">
                Got Questions?
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
                Frequently Asked Questions
              </h2>
            </div>

            <FAQAccordion items={faqItems} />

            <p className="text-center mt-8 font-body text-dark/50 text-sm">
              Have another question?{" "}
              <a
                href="tel:7248981988"
                className="text-forest font-semibold underline"
              >
                Call 724-898-1988
              </a>{" "}
              or{" "}
              <a
                href="mailto:christine@howlweroll.com"
                className="text-forest font-semibold underline"
              >
                email Christine
              </a>
              .
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== SERVICE AREA MAP ===== */}
      <ScrollReveal>
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="font-accent text-gold font-semibold tracking-wide uppercase text-sm mb-3">
                Where We Groom
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark mb-4">
                Service Area
              </h2>
              <p className="font-body text-dark/60 max-w-2xl mx-auto">
                Howl We Roll proudly serves pets across Washington County and
                Pittsburgh&rsquo;s south suburbs. If you&rsquo;re within about
                20 miles of Canonsburg, we can come to you!
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto stagger-children">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="bg-cream rounded-xl px-5 py-4 flex items-center gap-3 border border-gold/15 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <LocationPinIcon />
                  <p className="font-body text-dark font-medium text-sm">
                    {area}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center mt-8 font-body text-dark/50 text-sm">
              Don&rsquo;t see your area?{" "}
              <a
                href="tel:7248981988"
                className="text-forest font-semibold underline"
              >
                Call us
              </a>
              &nbsp;&mdash; we may still be able to come to you!
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-gold py-20 lg:py-24 relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready for a Stress-Free Groom?
          </h2>
          <p className="font-body text-white/90 text-lg sm:text-xl mb-10 leading-relaxed">
            Join 1,000+ happy pet parents in the Pittsburgh suburbs. Your pet
            deserves one-on-one attention in the comfort of home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
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
          <p className="font-accent text-white/70 text-sm">
            Same-week appointments available &bull; No hidden fees &bull;
            Satisfaction guaranteed
          </p>
        </div>
      </section>
    </>
  );
}
