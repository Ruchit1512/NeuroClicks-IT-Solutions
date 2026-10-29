"use client";

import React, { useEffect, useRef } from "react";
import { registerGSAP, isPrefersReducedMotion } from "@/lib/gsap";

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  effect?: "clip" | "scale" | "curtain" | "fade";
  triggerOnScroll?: boolean;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  children,
  className = "",
  delay = 0.1,
  duration = 1.1,
  effect = "clip",
  triggerOnScroll = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPrefersReducedMotion()) return;
    const gsap = registerGSAP();
    const el = containerRef.current;
    const media = mediaRef.current;
    if (!el || !media) return;

    const ctx = gsap.context(() => {
      const scrollTriggerConfig = triggerOnScroll
        ? {
            trigger: el,
            start: "top 85%",
            once: true,
          }
        : undefined;

      if (effect === "clip") {
        gsap.fromTo(
          el,
          { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" },
          {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration,
            delay,
            ease: "power4.inOut",
            scrollTrigger: scrollTriggerConfig,
          }
        );
        gsap.fromTo(
          media,
          { scale: 1.15 },
          {
            scale: 1,
            duration: duration * 1.2,
            delay,
            ease: "power3.out",
            scrollTrigger: scrollTriggerConfig,
          }
        );
      } else if (effect === "curtain") {
        const curtain = curtainRef.current;
        if (curtain) {
          const tl = gsap.timeline({
            scrollTrigger: scrollTriggerConfig,
            delay,
          });
          tl.fromTo(
            curtain,
            { scaleY: 1, transformOrigin: "bottom" },
            { scaleY: 0, duration, ease: "power4.inOut" }
          );
          tl.fromTo(
            media,
            { scale: 1.12 },
            { scale: 1, duration: duration * 0.9, ease: "power2.out" },
            "-=0.6"
          );
        }
      } else if (effect === "scale") {
        gsap.fromTo(
          media,
          { scale: 1.15, opacity: 0.6 },
          {
            scale: 1,
            opacity: 1,
            duration,
            delay,
            ease: "power3.out",
            scrollTrigger: scrollTriggerConfig,
          }
        );
      } else {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease: "power3.out",
            scrollTrigger: scrollTriggerConfig,
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [delay, duration, effect, triggerOnScroll]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ willChange: "transform, clip-path" }}
    >
      <div ref={mediaRef} className="h-full w-full will-change-transform">
        {children}
      </div>
      {effect === "curtain" && (
        <div
          ref={curtainRef}
          className="absolute inset-0 z-10 bg-brand-navy pointer-events-none"
        />
      )}
    </div>
  );
};
