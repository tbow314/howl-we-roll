import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Mobile Grooming Van Tour | Fully Equipped Salon on Wheels",
  description:
    "Take a tour of the Howl We Roll mobile grooming van. Fully equipped, spotlessly clean, and designed for your pet's comfort. Serving Canonsburg & Pittsburgh suburbs.",
};

const features = [
  {
    title: "Professional Grooming Table",
    description:
      "Adjustable table with safety harness for secure, comfortable grooming sessions.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: "Warm Water Bath System",
    description:
      "On-board water heater ensures a comfortable bath every time — never cold water.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
  },
  {
    title: "High-Velocity Dryer",
    description:
      "Powerful drying with a quiet mode for sensitive or anxious pups.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
      </svg>
    ),
  },
  {
    title: "Professional Shampoos",
    description:
      "Full range of premium, pet-safe products for every coat type and skin sensitivity.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Sanitized Every Visit",
    description:
      "Every surface, tool, and tub is thoroughly cleaned and disinfected after each appointment.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    title: "Climate Controlled",
    description:
      "Heating and air conditioning keep the van comfortable no matter the season.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    title: "Fully Self-Contained",
    description:
      "On-board water tank and generator — no need for your water or electricity.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: "Well-Lit Workspace",
    description:
      "Bright, even lighting for precision grooming — no detail is missed.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "Do you need my water or electricity?",
    answer:
      "Nope! The van is fully self-contained with its own fresh water tank and generator. I don't need anything from you except a place to park.",
  },
  {
    question: "Where do you park?",
    answer:
      "Your driveway is ideal, but I can also use the nearest available street parking. I just need enough space for the van and a relatively flat surface.",
  },
  {
    question: "Is it noisy?",
    answer:
      "Very quiet! The generator is whisper-level, and I have a low-noise dryer option for sound-sensitive pets and neighborhoods.",
  },
];

export default function VanTourPage() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Hero with Van Image */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full aspect-[21/9] md:aspect-[3/1]">
            <Image
              src="/images/christine-van.png"
              alt="Christine standing next to the Howl We Roll mobile grooming van"
              width={1400}
              height={500}
              className="object-cover w-full h-full"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-16 px-6 text-center">
              <ScrollReveal>
                <p className="font-accent text-gold-light uppercase tracking-widest text-sm mb-3">
                  Van Tour
                </p>
                <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white mb-4 drop-shadow-lg">
                  The Howl We Roll Grooming Van
                </h1>
                <p className="text-white/90 text-lg md:text-xl max-w-2xl font-body leading-relaxed drop-shadow-md">
                  This is where the magic happens! A full-service grooming salon
                  on wheels, fully equipped and ready to pamper your pet.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Van Features Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl text-dark mb-4 text-center">
            What&apos;s Inside
          </h2>
          <p className="text-dark/60 font-body text-center mb-12 max-w-xl mx-auto">
            Everything your pet needs for a spa-quality experience, right in your driveway.
          </p>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-hover bg-white rounded-2xl p-6 border border-gold/10 hover:border-gold/30"
            >
              <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center text-forest mb-4">
                {f.icon}
              </div>
              <h3 className="font-heading text-lg text-dark mb-2">
                {f.title}
              </h3>
              <p className="text-dark/70 text-sm leading-relaxed font-body">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Section */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-dark mb-8 text-center">
              Safety First &mdash; Always
            </h2>
            <div className="answer-capsule">
              <p className="text-dark/80 leading-relaxed font-body">
                Your pet&apos;s safety is my #1 priority. The van is equipped with
                non-slip surfaces, safety harnesses on the grooming table, and proper
                ventilation at all times. I carry a pet first aid kit on every visit,
                and every tool, tub, and surface is fully sanitized between appointments.
                Your fur baby is in the safest hands possible.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Before You Ask — FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl text-dark mb-4 text-center">
            Before You Ask
          </h2>
          <p className="text-dark/60 font-body text-center mb-12 max-w-lg mx-auto">
            Quick answers to the most common questions about the van.
          </p>
        </ScrollReveal>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={index * 100}>
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gold/10 card-hover">
                <h3 className="font-heading text-lg md:text-xl text-dark mb-3 flex items-start gap-3">
                  <span className="text-gold text-2xl leading-none shrink-0">Q</span>
                  {faq.question}
                </h3>
                <p className="text-dark/70 font-body leading-relaxed pl-9">
                  {faq.answer}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-6 right-12 text-6xl rotate-12">&#128662;</div>
          <div className="absolute bottom-6 left-16 text-5xl -rotate-6">&#128062;</div>
        </div>
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-cream mb-6">
              Ready to See the Van in Person?
            </h2>
            <p className="text-cream/80 text-lg mb-8 font-body leading-relaxed">
              Book your appointment and I&apos;ll pull right up to your driveway.
              Your pet gets the VIP treatment without ever leaving home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/book"
                className="inline-block bg-gold text-dark font-accent font-semibold px-8 py-4 rounded-full text-lg hover:bg-gold-light transition-colors duration-300 animate-pulse-glow"
              >
                Book an Appointment
              </a>
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
