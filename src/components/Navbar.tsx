"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/our-pups", label: "Our Pups" },
  { href: "/van-tour", label: "The Van" },
  { href: "/reviews", label: "Reviews" },
  { href: "/members", label: "Members" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gold text-white text-xs sm:text-sm font-semibold py-2 text-center overflow-hidden relative z-50">
        <div className="flex items-center justify-center gap-2">
          <span className="hidden sm:inline">&#127775;</span>
          <span>Now Accepting New Clients!</span>
          <span className="mx-1">|</span>
          <a href="tel:7248981988" className="underline underline-offset-2 hover:text-cream transition-colors">
            Call 724-898-1988
          </a>
          <span className="hidden sm:inline">&#127775;</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gold/20">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col">
              <span className="font-heading text-2xl sm:text-3xl font-bold text-gradient">
                Howl We Roll
              </span>
              <span className="font-accent italic text-xs text-gold/80 hidden sm:block tracking-wide">
                Squeaky clean from pawz to schnawz
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-dark/70 hover:text-forest font-body text-sm font-medium transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:7248981988"
                className="text-forest font-semibold text-sm"
              >
                724-898-1988
              </a>
              <Link
                href="/book"
                className="bg-gold hover:bg-gold-light text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-colors shadow-md animate-pulse-glow"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-forest"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Nav */}
          {isOpen && (
            <div className="lg:hidden pb-4 border-t border-gold/20 pt-4">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-dark/70 hover:text-forest font-body text-base px-2 py-1"
                  >
                    {link.label}
                  </Link>
                ))}
                <a href="tel:7248981988" className="text-forest font-semibold px-2 py-1">
                  724-898-1988
                </a>
                <Link
                  href="/book"
                  onClick={() => setIsOpen(false)}
                  className="bg-gold hover:bg-gold-light text-white font-semibold px-6 py-2.5 rounded-full text-sm text-center transition-colors mt-2 animate-pulse-glow"
                >
                  Book Now
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
