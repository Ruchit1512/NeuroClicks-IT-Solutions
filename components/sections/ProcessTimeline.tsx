"use client";

import React, { useEffect, useRef } from "react";
import { Container } from "@/ui/Container";
import { registerGSAP, isPrefersReducedMotion } from "@/lib/gsap";

const TECH_ITEMS = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "React Native",
  "AWS",
];

export const ProcessTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPrefersReducedMotion()) return;
    const gsap = registerGSAP();
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const steps = el.querySelectorAll(".process-step-node");
      gsap.fromTo(
        steps,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Discover",
      summary: "Understanding business goals, users, and constraints.",
      detail:
        "We unpack how your business operates, identify core bottlenecks, and define technical boundaries before writing a single line of code.",
    },
    {
      number: "02",
      title: "Design & Plan",
      summary: "System architecture, database modeling, and UI prototypes.",
      detail:
        "We model normalized schemas, create API specifications, and design tokenized interactive prototypes in Figma.",
    },
    {
      number: "03",
      title: "Develop & Test",
      summary: "Two-week agile sprints with working software demos.",
      detail:
        "Full-stack engineering in type-safe TypeScript. Automated unit and Playwright integration tests run on every commit.",
    },
    {
      number: "04",
      title: "Launch & Support",
      summary: "Zero-downtime deployment, telemetry, and continuous SLAs.",
      detail:
        "Live production cutover with real-time error tracking, full IP handoff, operational runbooks, and ongoing maintenance.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-dark-900 text-white border-b border-border-default relative overflow-hidden"
    >
      <Container size="wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-border-default">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-electric animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-dark-300">
                [ 06 / OUR PROCESS ]
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white">
              From Idea to Implementation.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-dark-300 max-w-md">
            A disciplined four-stage engineering methodology designed to eliminate ambiguity, de-risk scope, and ship production-ready platforms on schedule.
          </p>
        </div>

        {/* 4 Process Stages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-16">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="process-step-node rounded-2xl border border-border-default bg-dark-850 p-6 sm:p-7 flex flex-col justify-between hover:border-brand-electric/50 hover:bg-dark-800 transition-all duration-300 relative group"
            >
              {/* Top Accent Line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-border-default group-hover:bg-brand-electric transition-colors" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-border-default mb-5">
                  <span className="text-3xl font-mono font-bold text-dark-500 group-hover:text-brand-electric transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-mono text-dark-400 uppercase tracking-widest">
                    STAGE // 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-brand-electric transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs font-mono text-brand-electric/90 mb-3 font-medium">
                  {step.summary}
                </p>

                <p className="text-xs sm:text-sm text-dark-300 leading-relaxed">
                  {step.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-default flex items-center justify-between text-[11px] font-mono text-dark-400">
                <span>PHASE {step.number}</span>
                <span className="text-dark-300 group-hover:text-white transition-colors">
                  VERIFIED OUTPUT &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Technology Strip */}
        <div className="rounded-2xl border border-border-default bg-dark-850 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-brand-electric animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-dark-300 font-semibold">
              ENGINEERING FOUNDATION
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 font-mono text-xs sm:text-sm text-dark-300">
            {TECH_ITEMS.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span className="text-white hover:text-brand-electric transition-colors font-medium">
                  {tech}
                </span>
                {idx < TECH_ITEMS.length - 1 && (
                  <span className="text-brand-electric select-none">&bull;</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="text-[11px] font-mono text-dark-400">
            MODERN &bull; RESILIENT &bull; TYPE-SAFE
          </div>
        </div>
      </Container>
    </section>
  );
};
