"use client";

import React, { useEffect, useRef } from "react";
import { registerGSAP, isPrefersReducedMotion } from "@/lib/gsap";

const MARQUEE_ITEMS = [
  "SOFTWARE DEVELOPMENT",
  "DIGITAL EXPERIENCES",
  "WEB APPLICATIONS",
  "CRM & BUSINESS SYSTEMS",
  "MOBILE APPLICATIONS",
  "AI AUTOMATION",
];

export const CapabilitiesMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (isPrefersReducedMotion()) return;
    const gsap = registerGSAP();
    const track = trackRef.current;
    if (!track) return;

    // Linear continuous infinite scroll using GSAP
    // We animate from xPercent: 0 to -50% because the inner content is duplicated once
    const tween = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 28,
      repeat: -1,
    });

    tweenRef.current = tween;

    return () => {
      tween.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (tweenRef.current) {
      tweenRef.current.timeScale(0.3); // Smooth slowdown on hover
    }
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) {
      tweenRef.current.timeScale(1); // Resume normal speed
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="py-8 md:py-12 bg-dark-850 border-y border-border-default overflow-hidden relative select-none"
      aria-label="Capabilities Marquee"
    >
      {/* Left/Right Edge Fades for seamless visual blend */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-dark-850 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-dark-850 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track: duplicated twice for 0 to -50% continuous translation */}
      <div
        ref={trackRef}
        className="flex items-center w-max whitespace-nowrap will-change-transform"
      >
        {/* Set 1: Visible to Screen Readers */}
        <div className="flex items-center">
          {MARQUEE_ITEMS.map((item, idx) => (
            <div key={`item-1-${idx}`} className="flex items-center">
              <span className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase px-6 sm:px-10 transition-colors hover:text-brand-electric">
                {idx % 2 === 1 ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-electric">
                    {item}
                  </span>
                ) : (
                  item
                )}
              </span>

              {/* Minimal geometric separator */}
              <div className="flex items-center gap-1.5 px-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-electric" />
                <span className="text-xs font-mono text-dark-500">//</span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-electric" />
              </div>
            </div>
          ))}
        </div>

        {/* Set 2: Duplicate for seamless loop, hidden from screen readers */}
        <div className="flex items-center" aria-hidden="true">
          {MARQUEE_ITEMS.map((item, idx) => (
            <div key={`item-2-${idx}`} className="flex items-center">
              <span className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase px-6 sm:px-10 transition-colors hover:text-brand-electric">
                {idx % 2 === 1 ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-electric">
                    {item}
                  </span>
                ) : (
                  item
                )}
              </span>

              {/* Minimal geometric separator */}
              <div className="flex items-center gap-1.5 px-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-electric" />
                <span className="text-xs font-mono text-dark-500">//</span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-electric" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
