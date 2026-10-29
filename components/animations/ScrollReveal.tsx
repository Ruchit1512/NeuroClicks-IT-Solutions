"use client";

import React, { useEffect, useRef } from "react";
import { registerGSAP, isPrefersReducedMotion } from "@/lib/gsap";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  triggerHook?: string;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  y = 30,
  stagger = 0.1,
  direction = "up",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPrefersReducedMotion()) return;
    const gsap = registerGSAP();
    const el = containerRef.current;
    if (!el) return;

    let initialX = 0;
    let initialY = 0;

    if (direction === "up") initialY = y;
    if (direction === "down") initialY = -y;
    if (direction === "left") initialX = 40;
    if (direction === "right") initialX = -40;

    const ctx = gsap.context(() => {
      const targets = el.children.length > 1 ? el.children : el;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y: initialY,
          x: initialX,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          delay,
          stagger: el.children.length > 1 ? stagger : 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, direction, duration, stagger, y]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};
