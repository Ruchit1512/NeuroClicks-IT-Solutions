"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Terminal, Activity, ShieldCheck, Database, Cpu, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/ui/Button";
import { Container } from "@/ui/Container";
import { registerGSAP, isPrefersReducedMotion } from "@/lib/gsap";

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isPrefersReducedMotion()) return;
    const gsap = registerGSAP();
    const el = heroRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // 1. Headline line reveal
      const lines = el.querySelectorAll(".hero-headline-line");
      gsap.fromTo(
        lines,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.12,
          ease: "power4.out",
          delay: 0.1,
        }
      );

      // 2. Supporting text and CTAs stagger
      if (textGroupRef.current) {
        gsap.fromTo(
          textGroupRef.current.children,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.4,
          }
        );
      }

      // 3. Hero interface visual reveal
      if (visualRef.current) {
        gsap.fromTo(
          visualRef.current,
          { opacity: 0, scale: 0.96, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      }

      // 4. Subtle bounce on scroll indicator
      if (scrollIndicatorRef.current) {
        gsap.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.8,
            ease: "power2.out",
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-between overflow-hidden bg-dark-900 text-white"
    >
      {/* Ambient Electric Blue Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] bg-brand-blue/20 rounded-full blur-[170px] pointer-events-none" />

      {/* Subtle technical background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <Container size="wide" className="relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Headline & Copy */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border-default bg-dark-850/90 text-xs font-mono text-dark-300 mb-6 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-brand-electric animate-pulse" />
              <span className="font-semibold uppercase tracking-widest text-white">
                DIGITAL ENGINEERING / IT SOLUTIONS
              </span>
            </div>

            {/* Oversized Headline with line reveal overflow wrappers */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-bold tracking-tight text-white leading-[1.05] mb-6">
              <div className="overflow-hidden">
                <span className="hero-headline-line block">Technology That Moves</span>
              </div>
              <div className="overflow-hidden">
                <span className="hero-headline-line block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-electric">
                  Your Business Forward.
                </span>
              </div>
            </h1>

            {/* Supporting Copy & CTAs */}
            <div ref={textGroupRef} className="space-y-8 max-w-2xl">
              <p className="text-lg sm:text-xl text-dark-300 font-normal leading-relaxed">
                We design and build custom software, digital products, websites, and intelligent business systems that help companies work smarter and grow faster.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Button href="/contact" variant="primary" size="lg" withArrow arrowDirection="up-right">
                  Start a Project
                </Button>
                <Button href="#work" variant="secondary" size="lg">
                  Explore Our Work
                </Button>
              </div>

              {/* Verified Metrics Strip */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border-default">
                <div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-white">
                    99.98%
                  </div>
                  <div className="text-xs font-mono text-dark-400 mt-1 uppercase tracking-wider">
                    Core Uptime SLA
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-brand-electric">
                    100%
                  </div>
                  <div className="text-xs font-mono text-dark-400 mt-1 uppercase tracking-wider">
                    IP Code Ownership
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-white">
                    2-Week
                  </div>
                  <div className="text-xs font-mono text-dark-400 mt-1 uppercase tracking-wider">
                    Sprint Velocity
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Software Interface Mockup */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div
              ref={visualRef}
              className="rounded-3xl border border-border-default bg-dark-850 p-5 sm:p-7 shadow-2xl relative overflow-hidden group hover:border-brand-electric/40 transition-colors duration-500"
            >
              {/* Subtle top neon border beam */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-electric to-brand-cyan" />

              {/* Interface Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border-default mb-5 text-xs font-mono text-dark-400">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-electric" />
                  <span className="ml-2 text-dark-300 text-[11px]">neuroclicks.system.core</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-brand-blueMuted text-brand-electric border border-brand-electric/30 text-[10px]">
                  <Activity className="h-3 w-3" />
                  <span>ONLINE &bull; 34ms</span>
                </div>
              </div>

              {/* High-Resolution System Overview Visual */}
              <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden border border-border-default mb-5 group">
                <Image
                  src="/images/services/saas-product.webp"
                  alt="NeuroClicks Media enterprise software telemetry interface"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />

                {/* Overlaid Live Telemetry Pill */}
                <div className="absolute bottom-3 left-3 right-3 bg-dark-900/90 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-border-default flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-electric animate-pulse" />
                    <span className="text-white font-medium">Global Workload Orchestration</span>
                  </div>
                  <span className="text-brand-electric font-semibold">4.8k ops/sec</span>
                </div>
              </div>

              {/* Technical Capability Checkpoints */}
              <div className="grid grid-cols-2 gap-2.5 mb-4 text-xs font-mono text-dark-300">
                <div className="p-2.5 rounded-xl bg-dark-900/70 border border-border-default flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-electric shrink-0" />
                  <span className="truncate">Automated CI/CD Gates</span>
                </div>
                <div className="p-2.5 rounded-xl bg-dark-900/70 border border-border-default flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-electric shrink-0" />
                  <span className="truncate">Type-Safe Schema APIs</span>
                </div>
                <div className="p-2.5 rounded-xl bg-dark-900/70 border border-border-default flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-electric shrink-0" />
                  <span className="truncate">End-to-End Encryption</span>
                </div>
                <div className="p-2.5 rounded-xl bg-dark-900/70 border border-border-default flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-electric shrink-0" />
                  <span className="truncate">Sub-50ms Edge Queries</span>
                </div>
              </div>

              {/* Terminal Execution Strip */}
              <div className="p-3 rounded-xl bg-black border border-border-default text-xs font-mono text-dark-300 flex items-center gap-2">
                <Terminal className="h-4 w-4 text-brand-electric shrink-0" />
                <span className="truncate text-dark-300 text-[11px]">
                  $ npx neuroclicks build --target=production --zero-downtime
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Subtle Scroll Down Prompt */}
      <div className="relative z-10 pt-12 flex justify-center">
        <a
          ref={scrollIndicatorRef}
          href="#services"
          className="group flex flex-col items-center gap-2 text-xs font-mono text-dark-400 hover:text-white transition-colors"
          aria-label="Scroll to services"
        >
          <span className="uppercase tracking-widest text-[10px]">SCROLL TO EXPLORE</span>
          <div className="h-8 w-5 rounded-full border border-border-default flex items-start justify-center p-1 group-hover:border-brand-electric transition-colors">
            <div className="h-1.5 w-1 rounded-full bg-brand-electric animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
