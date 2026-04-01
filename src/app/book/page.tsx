import type { Metadata } from "next";
import Link from "next/link";
import { BookingForm } from "@/components/BookingForm";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Book Mobile Dog & Cat Grooming | Canonsburg PA",
  description:
    "Book your mobile dog or cat grooming appointment with Howl We Roll in Canonsburg, Cecil Township & Pittsburgh suburbs. Easy online form or call 724-898-1988.",
};

const serviceAreas = [
  "Canonsburg",
  "Cecil Township",
  "McMurray",
  "Peters Township",
  "Washington",
  "Bridgeville",
  "Upper St. Clair",
  "Southpointe",
  "Houston",
  "Chartiers Township",
];

export default function BookPage() {
  return (
    <div className="bg-cream">
      {/* Page Header */}
      <section className="pt-16 sm:pt-24 pb-8 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-dark mb-4">
            Book Your Mobile Grooming Appointment
          </h1>
          <p className="font-body text-lg text-dark/60">
            Fill out the form below and Christine will confirm your appointment
            within a few hours.
          </p>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="sticky top-28">
                <ScrollReveal>
                  <p className="font-body text-dark/70 leading-relaxed mb-6 text-base">
                    Ready to give your pet the spa treatment? Fill out the form
                    and I&apos;ll get back to you within a few hours to confirm
                    your appointment.
                  </p>
                </ScrollReveal>

                {/* Urgency Badge */}
                <ScrollReveal delay={100}>
                  <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold-light rounded-full px-4 py-2 mb-8">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold" />
                    </span>
                    <span className="font-body text-sm font-semibold text-dark">
                      This week&apos;s availability: <span className="text-gold">3 slots remaining</span>
                    </span>
                  </div>
                </ScrollReveal>

                {/* Contact Details */}
                <ScrollReveal delay={200}>
                  <div className="space-y-5 mb-8">
                    {/* Phone - Big and prominent */}
                    <a
                      href="tel:7248981988"
                      className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gold/10 card-hover group"
                    >
                      <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0 group-hover:bg-forest/20 transition-colors">
                        <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-body text-xs font-medium text-dark/50 uppercase tracking-wider">Call or Text</p>
                        <p className="font-heading text-xl font-bold text-forest group-hover:text-forest-light transition-colors">
                          724-898-1988
                        </p>
                      </div>
                    </a>

                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-body text-sm font-medium text-dark/50">Email</p>
                        <a href="mailto:christine@howlweroll.com" className="font-body text-forest font-semibold hover:text-forest-light transition-colors">
                          christine@howlweroll.com
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-body text-sm font-medium text-dark/50">Address</p>
                        <p className="font-body text-dark font-medium">
                          33 Vertical Dr, Canonsburg PA 15317
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-body text-sm font-medium text-dark/50">Hours</p>
                        <p className="font-body text-dark font-medium">Mon-Fri: 8am - 5pm</p>
                        <p className="font-body text-dark font-medium">Sat: 9am - 3pm</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* First-time promo */}
                <ScrollReveal delay={300}>
                  <div className="bg-forest/5 border border-forest/15 rounded-2xl p-5 mb-8">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">🎉</span>
                      <div>
                        <p className="font-heading text-sm font-bold text-dark mb-1">
                          First-time client?
                        </p>
                        <p className="font-body text-sm text-dark/70">
                          Your first groom includes a free teeth brushing!
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Service Areas */}
                <ScrollReveal delay={400}>
                  <div className="bg-white rounded-2xl p-6 border border-gold/10">
                    <h3 className="font-heading text-lg font-bold text-dark mb-3">
                      Service Areas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {serviceAreas.map((area) => (
                        <span
                          key={area}
                          className="font-body text-xs bg-cream-dark text-dark/70 px-3 py-1.5 rounded-full"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <BookingForm />

              {/* Returning client link */}
              <div className="text-center mt-6">
                <Link
                  href="/members"
                  className="inline-flex items-center gap-2 font-body text-sm text-forest hover:text-forest-light transition-colors group"
                >
                  <span>Returning client? Quick rebook</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
