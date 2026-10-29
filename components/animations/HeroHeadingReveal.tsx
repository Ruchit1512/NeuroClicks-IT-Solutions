"use client";

import React, { useEffect, useRef } from "react";
import { registerGSAP, isPrefersReducedMotion } from "@/lib/gsap";

interface HeroHeadingRevealProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
}

export const HeroHeadingReveal: React.FC<HeroHeadingRevealProps> = ({
  lines,
  className = "",
  lineClassName = "",
  delay = 0.2,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (isPrefersReducedMotion()) return;
    const gsap = registerGSAP();
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const lineElements = el.querySelectorAll(".hero-line-inner");

      gsap.fromTo(
        lineElements,
        {
          yPercent: 120,
          rotateZ: 2,
          opacity: 0,
        },
        {
          yPercent: 0,
          rotateZ: 0,
          opacity: 1,
          duration: 1.1,
          delay,
          stagger: 0.12,
          ease: "power4.out",
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay]);

  return (
    <h1 ref={containerRef} className={className}>
      {lines.map((line, idx) => (
        <span key={idx} className="block overflow-hidden pb-1 leading-[1.08]">
          <span className={`hero-line-inner block will-change-transform ${lineClassName}`}>
            {line}
          </span>
        </span>
      ))}
    </h1>
  );
};
