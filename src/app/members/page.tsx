import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import { QuickRebookForm } from "@/components/QuickRebookForm";

export const metadata: Metadata = {
  title: "Returning Clients | Quick Rebook | Howl We Roll",
  description:
    "Already a Howl We Roll client? Quick rebook your mobile grooming appointment, check loyalty perks, and get grooming tips. 724-898-1988.",
};

const loyaltyPerks = [
  {
    icon: "🎁",
    title: "Refer a Friend",
    description:
      "Send a friend our way and you both get $10 off your next groom!",
  },
  {
    icon: "📅",
    title: "Monthly Regulars",
    description:
      "Book monthly and lock in your preferred time slot. Regulars always get priority scheduling.",
  },
  {
    icon: "💬",
    title: "Facebook VIP Group",
    description:
      "Join our private Facebook group for grooming tips, appointment reminders, and behind-the-scenes content.",
    link: "https://facebook.com/howlweroll",
    linkText: "Join the Group",
  },
];

const groomingTips = [
  {
    icon: "🪮",
    title: "Brush Regularly",
    tip: "Between grooms, brush your dog 2-3 times a week to prevent matting. This keeps their coat healthy and makes their next groom smoother.",
  },
  {
    icon: "👂",
    title: "Ear Care",
    tip: "Keep ears dry after baths to prevent infections. Gently wipe the outer ear with a soft cloth — never insert anything into the ear canal.",
  },
  {
    icon: "✂️",
    title: "Nail Maintenance",
    tip: "Regular nail trims every 3-4 weeks keep your pet comfortable. Long nails can affect their posture and cause pain over time.",
  },
];

export default function MembersPage() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="pt-16 sm:pt-24 pb-12 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2 mb-6">
              <span className="text-lg">🐾</span>
              <span className="font-body text-sm font-semibold text-dark">
                Returning Clients
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-dark mb-4">
              Welcome Back!
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-body text-lg text-dark/60 max-w-2xl mx-auto">
              Already part of the Howl We Roll family? I appreciate your loyalty!
              Use this quick form to rebook, or join our Facebook community for
              exclusive updates and grooming tips.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Rebook Form */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <QuickRebookForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Loyalty Perks */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark mb-3">
                Loyalty Perks
              </h2>
              <p className="font-body text-dark/60">
                Because our regulars deserve something extra.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loyaltyPerks.map((perk, i) => (
              <ScrollReveal key={perk.title} delay={i * 100}>
                <div className="bg-cream rounded-2xl p-8 border border-gold/10 card-hover h-full flex flex-col">
                  <span className="text-4xl mb-4 block">{perk.icon}</span>
                  <h3 className="font-heading text-xl font-bold text-dark mb-3">
                    {perk.title}
                  </h3>
                  <p className="font-body text-dark/70 leading-relaxed mb-4 flex-1">
                    {perk.description}
                  </p>
                  {perk.link && (
                    <a
                      href={perk.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-body text-sm font-semibold text-forest hover:text-forest-light transition-colors group"
                    >
                      <span>{perk.linkText}</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Grooming Tips */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark mb-3">
                Grooming Tips from Christine
              </h2>
              <p className="font-body text-dark/60">
                Keep your pet happy and healthy between appointments.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {groomingTips.map((tip, i) => (
              <ScrollReveal key={tip.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 border border-gold/10 card-hover h-full">
                  <span className="text-3xl mb-4 block">{tip.icon}</span>
                  <h3 className="font-heading text-lg font-bold text-dark mb-3">
                    {tip.title}
                  </h3>
                  <p className="font-body text-dark/70 leading-relaxed text-sm">
                    {tip.tip}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="bg-forest rounded-3xl p-10 sm:p-14">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                Questions? Call Christine directly.
              </h2>
              <p className="font-body text-white/70 mb-8 max-w-lg mx-auto">
                Whether you need to reschedule, have a question about your pet&apos;s
                coat, or just want to chat — I&apos;m always happy to help.
              </p>
              <a
                href="tel:7248981988"
                className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-dark font-heading font-bold py-4 px-10 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                724-898-1988
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
