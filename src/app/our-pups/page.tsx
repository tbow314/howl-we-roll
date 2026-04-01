import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Happy Pups & Cats | Howl We Roll Grooming Gallery",
  description:
    "See the happy pups and cats Christine grooms! Real photos from Howl We Roll mobile grooming in Canonsburg, Cecil Township & Pittsburgh suburbs.",
};

const galleryImages = [
  {
    src: "/images/christine-grooming.png",
    alt: "Christine grooming a fluffy dog inside the Howl We Roll mobile van",
    caption: "Full groom in progress",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-[4/3]",
    width: 800,
    height: 600,
  },
  {
    src: "/images/cat-grooming.jpg",
    alt: "Persian cat being professionally groomed at Howl We Roll",
    caption: "Yes, we groom cats too!",
    span: "",
    aspect: "aspect-square",
    width: 500,
    height: 500,
  },
  {
    src: "/images/cocker-spaniels.jpg",
    alt: "Three beautifully groomed Cocker Spaniels after their appointments",
    caption: "Breed-standard Cocker Spaniel cuts",
    span: "",
    aspect: "aspect-square",
    width: 500,
    height: 500,
  },
  {
    src: "/images/lab-portrait.jpg",
    alt: "Yellow Labrador portrait after a fresh bath and groom",
    caption: "Fresh and handsome after bath day",
    span: "",
    aspect: "aspect-square",
    width: 500,
    height: 500,
  },
  {
    src: "/images/christine-van.png",
    alt: "Christine standing next to her white Howl We Roll mobile grooming van",
    caption: "The mobile salon, ready to roll!",
    span: "",
    aspect: "aspect-square",
    width: 500,
    height: 500,
  },
];

export default function OurPupsPage() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-16 text-center">
        <ScrollReveal>
          <p className="font-accent text-gold uppercase tracking-widest text-sm mb-4">
            Gallery
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark mb-6">
            Our Happy Pups <span className="text-gradient">(& Cats!)</span>
          </h1>
          <p className="text-lg text-dark/80 max-w-2xl mx-auto leading-relaxed font-body">
            Every pet that hops into my van leaves looking and feeling amazing.
            Here are some of my favorite transformations!
          </p>
        </ScrollReveal>
      </section>

      {/* Featured Masonry Gallery */}
      <section className="max-w-6xl mx-auto px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 auto-rows-auto">
          {galleryImages.map((img, index) => (
            <ScrollReveal
              key={img.src}
              className={`${img.span} group`}
              delay={index * 100}
            >
              <div
                className={`img-zoom rounded-2xl ${img.aspect} relative overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="object-cover w-full h-full"
                  sizes={
                    img.span
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                />
                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent p-4 pt-12 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <p className="text-white font-accent text-sm md:text-base font-medium">
                    {img.caption}
                  </p>
                </div>
                {/* Always-visible caption on mobile */}
                <div className="md:hidden absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/70 to-transparent p-3 pt-8">
                  <p className="text-white font-accent text-xs font-medium">
                    {img.caption}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Placeholder Grid — More Photos Coming */}
      <section className="max-w-6xl mx-auto px-6 pb-16 md:pb-24">
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl text-dark mb-8 text-center">
            More Transformations Coming Soon
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 stagger-children">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="group">
              <div className="aspect-square bg-cream-dark rounded-2xl flex flex-col items-center justify-center p-6 border-2 border-dashed border-gold/20 hover:border-gold/40 transition-colors duration-300">
                <svg
                  className="w-10 h-10 text-gold/30 mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
                  />
                </svg>
                <p className="text-dark/40 text-sm font-body text-center leading-snug">
                  More photos coming soon!
                </p>
                <p className="text-gold/60 text-xs font-accent mt-1 text-center">
                  Tag @howlweroll on Facebook
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest relative overflow-hidden">
        {/* Decorative paw prints */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-8 left-12 text-6xl rotate-12">&#128062;</div>
          <div className="absolute bottom-8 right-16 text-5xl -rotate-12">&#128062;</div>
        </div>
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-cream mb-6">
              Want Your Pup Featured?
            </h2>
            <p className="text-cream/80 text-lg mb-8 font-body leading-relaxed">
              Book a groom and share the results! Tag us on Facebook and your pup
              could end up right here in our gallery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book"
                className="inline-block bg-gold text-dark font-accent font-semibold px-8 py-4 rounded-full text-lg hover:bg-gold-light transition-colors duration-300 animate-pulse-glow"
              >
                Book a Groom
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-cream/10 text-cream font-accent font-semibold px-8 py-4 rounded-full text-lg border border-cream/20 hover:bg-cream/20 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Follow on Facebook
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
