"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  /** Divide the animated value by this number for display (e.g. end=39, divisor=10 shows "3.9") */
  divisor?: number;
}

export function AnimatedCounter({ end, suffix = "", prefix = "", duration = 2000, label, divisor }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  const startAnimation = useCallback(() => {
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);

    // Fallback: if observer doesn't fire within 3s, animate anyway
    const fallback = setTimeout(() => startAnimation(), 3000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [startAnimation]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl md:text-5xl font-bold text-gold">
        {prefix}{divisor ? (count / divisor).toFixed(1) : count}{suffix}
      </div>
      <div className="text-dark/60 text-sm mt-1 font-body">{label}</div>
    </div>
  );
}
