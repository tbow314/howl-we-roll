"use client";

import { useState, useEffect } from "react";

export function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-forest/95 backdrop-blur-sm border-t border-gold/30 px-4 py-3 flex items-center justify-between gap-3">
      <a
        href="tel:7248981988"
        className="flex-1 text-center bg-white/10 text-white font-semibold py-2.5 rounded-full text-sm border border-white/20"
      >
        Call Now
      </a>
      <a
        href="/book"
        className="flex-1 text-center bg-gold text-white font-semibold py-2.5 rounded-full text-sm animate-pulse-glow"
      >
        Book Online
      </a>
    </div>
  );
}
