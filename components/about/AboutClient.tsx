"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Code2,
  Users,
  ShieldCheck,
  Zap,
  Terminal,
  Activity,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/ui/Container";
import { Button } from "@/ui/Button";
import { Breadcrumbs } from "@/ui/Breadcrumbs";
import { HeroHeadingReveal } from "@/animations/HeroHeadingReveal";
import { ScrollReveal } from "@/animations/ScrollReveal";
import { ImageReveal } from "@/animations/ImageReveal";
import { registerGSAP, isPrefersReducedMotion } from "@/lib/gsap";

const approachSteps = [
  {
    step: "01",
    phase: "Phase 01",
    title: "Discovery & Domain Architecture",
    description:
      "We interrogate operational bottlenecks, model database entities, and blueprint clean system boundaries before writing a single line of code.",
    deliverables: ["Domain Entity Diagrams", "Technical Scope & RFC", "Interactive Wireframes"],
  },
  {
    step: "02",
    phase: "Phase 02",
    title: "High-Velocity Sprint Iteration",
    description:
      "Engineers ship weekly working increments to isolated preview environments. You test real workflows with real team data from week two onward.",
    deliverables: ["Weekly Staging Builds", "CI/CD Deployment Gates", "Direct Engineer Access"],
  },
  {
    step: "03",
    phase: "Phase 03",
    title: "Automated QA & Security Hardening",
    description:
      "Every user journey is protected by Playwright automated browser tests, strict API schemas, and OWASP-compliant security audits.",
    deliverables: ["Playwright E2E Suites", "Zero-Regression Gates", "Penetration Testing"],
  },
  {
    step: "04",
    phase: "Phase 04",
    title: "Production Deployment & Hypercare",
    description:
      "Zero-downtime blue/green deployment paired with Prometheus telemetry, automated database backups, and dedicated 24/7 hypercare support.",
    deliverables: ["Zero-Downtime Rollout", "Real-Time Telemetry", "Comprehensive SLA"],
  },
];

const featuredCapabilities = [
  {
    title: "Custom Software Development",
    slug: "custom-software-development",
    code: "CAP_01",
    image: "/images/services/custom-software.webp",
    tagline: "Bespoke backend systems and proprietary logic",
    tags: ["Node.js", "Python", "PostgreSQL", "Docker"],
  },
  {
    title: "CRM & ERP Solutions",
    slug: "crm-erp-solutions",
    code: "CAP_02",
    image: "/images/services/crm-erp.webp",
    tagline: "Unified sales pipelines and automated inventory",
    tags: ["Enterprise CRM", "ERP Sync", "Role Permissions"],
  },
  {
    title: "Web Application Engineering",
    slug: "website-web-application-development",
    code: "CAP_03",
    image: "/images/services/web-development.webp",
    tagline: "High-speed Next.js platforms with sub-second page loads",
    tags: ["Next.js", "TypeScript", "Tailwind", "Edge SSR"],
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    code: "CAP_04",
    image: "/images/services/mobile-apps.webp",
    tagline: "60fps iOS and Android applications with offline resilience",
    tags: ["React Native", "Flutter", "iOS / Swift", "Android"],
  },
];

const coreValues = [
  {
    name: "Architectural Clarity",
    code: "01",
    tagline: "No jargon. No black-box complexity.",
    description:
      "We explain architectural tradeoffs in plain language. If a system is too convoluted to sketch on a whiteboard, it is too fragile to maintain in production.",
  },
  {
    name: "Complete Ownership",
    code: "02",
    tagline: "We treat your software as our own.",
    description:
      "We don't disappear once code is shipped. We proactively monitor edge cases, verify security patches, and take pride in uptime and long-term durability.",
  },
  {
    name: "Zero Technical Debt",
    code: "03",
    tagline: "Speed without technical debt.",
    description:
      "We write code that is clean, typed, and structured for the developers who will maintain it years down the road. Shortcuts taken in haste become permanent handicaps.",
  },
  {
    name: "Root-Cause Inquiry",
    code: "04",
    tagline: "Relentless curiosity.",
    description:
      "We dig beneath feature requests to find operational bottlenecks. We ask 'why' until the true business problem is completely understood.",
  },
  {
    name: "Trench Collaboration",
    code: "05",
    tagline: "True engineering partners.",
    description:
      "We embed alongside your leadership and operators. We share staging links daily and welcome rapid feedback loops throughout the sprint cycle.",
  },
];

export const AboutClient: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPrefersReducedMotion()) return;
    const gsap = registerGSAP();
    const timelineEl = timelineRef.current;
    const progressEl = progressBarRef.current;
    if (!timelineEl || !progressEl) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressEl,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineEl,
            start: "top 70%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );
    }, timelineEl);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-28 pb-20 bg-dark-900 text-white min-h-screen overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="py-12 md:py-20 border-b border-border-default relative">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <Container size="wide">
          <Breadcrumbs items={[{ label: "About Us" }]} className="mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-default bg-dark-850 text-xs font-mono text-dark-300">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-electric animate-pulse" />
                <span className="uppercase tracking-widest text-white">
                  [ WHO WE ARE // ENGINEERING FIRM ]
                </span>
              </div>

              <HeroHeadingReveal
                lines={[
                  "We Build Technology",
                  "That Moves Businesses Forward.",
                ]}
                className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white leading-[1.05]"
              />

              <ScrollReveal delay={0.35} duration={0.9}>
                <p className="text-lg sm:text-xl text-dark-300 font-normal leading-relaxed max-w-2xl">
                  {siteConfig.name} is an elite digital engineering and IT solutions firm. We design, build, and scale proprietary software systems with architectural discipline, high velocity, and transparent communication.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.5} duration={0.9}>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button href="/contact" variant="primary" size="lg" withArrow>
                    Schedule an Architecture Call
                  </Button>
                  <Button href="/services" variant="outline" size="lg">
                    Explore Services
                  </Button>
                </div>
              </ScrollReveal>

              {/* Quick Trust Indicators */}
              <ScrollReveal delay={0.65} duration={0.9}>
                <div className="pt-6 grid grid-cols-3 gap-6 border-t border-border-default max-w-lg">
                  <div>
                    <div className="font-display text-2xl sm:text-3xl font-bold text-white">
                      100%
                    </div>
                    <div className="text-xs font-mono text-dark-400 uppercase tracking-wider mt-0.5">
                      Code Ownership
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-2xl sm:text-3xl font-bold text-white">
                      99.98%
                    </div>
                    <div className="text-xs font-mono text-dark-400 uppercase tracking-wider mt-0.5">
                      Production SLA
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-2xl sm:text-3xl font-bold text-brand-electric">
                      0%
                    </div>
                    <div className="text-xs font-mono text-dark-400 uppercase tracking-wider mt-0.5">
                      License Bloat
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <ImageReveal effect="clip" delay={0.2} duration={1.2}>
                <div className="relative rounded-2xl overflow-hidden border border-border-default bg-dark-850 shadow-2xl shadow-brand-navy/60 group">
                  {/* Aspect Ratio Container */}
                  <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full">
                    <Image
                      src="/images/about/engineering-hero.webp"
                      alt="NeuroClicks Media senior software engineering and architecture culture"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
                  </div>

                  {/* Editorial Floating Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <div className="px-3 py-1.5 rounded-full bg-dark-900/85 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      ENGINEERING LAB ACTIVE
                    </div>
                    <div className="px-2.5 py-1 rounded bg-dark-900/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-brand-electric">
                      v2.4
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-dark-900/90 backdrop-blur-md border border-white/10">
                    <div className="text-xs font-mono uppercase tracking-widest text-brand-electric mb-1">
                      Architectural Discipline
                    </div>
                    <div className="text-sm font-semibold text-white">
                      High-concurrency systems, zero-trust security, and scalable cloud engines.
                    </div>
                  </div>
                </div>
              </ImageReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. EDITORIAL INTRODUCTION */}
      <section className="py-20 md:py-28 border-b border-border-default bg-dark-950 relative">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Editorial Visual */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ImageReveal effect="scale" delay={0.2} duration={1.1}>
                <div className="relative rounded-2xl overflow-hidden border border-border-default bg-dark-850 group">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/about/workspace-collaboration.webp"
                      alt="NeuroClicks Media engineering team collaborative sprint session"
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
                  </div>

                  <div className="p-5 border-t border-border-default bg-dark-900/90 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-dark-400">
                        Sprint Operations
                      </div>
                      <div className="text-sm font-medium text-white">
                        Direct engineer collaboration & rapid feedback loops
                      </div>
                    </div>
                    <span className="font-mono text-xs text-brand-electric font-semibold">
                      [SYNC]
                    </span>
                  </div>
                </div>
              </ImageReveal>
            </div>

            {/* Right Editorial Narrative */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <ScrollReveal>
                <span className="text-xs font-mono uppercase tracking-widest text-brand-electric block">
                  [ 01 / STORY & PURPOSE ]
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight mt-2">
                  Built to bridge real business workflows with senior engineering rigor.
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="space-y-4 text-base sm:text-lg text-dark-300 leading-relaxed font-normal">
                  <p>
                    In 2021, we set out with a clear observation: companies looking for software development were caught between generic template agencies delivering unmaintainable code and bloated legacy consultancies charging exorbitant retainers for sluggish progress.
                  </p>
                  <p>
                    We established <strong>{siteConfig.name}</strong> to offer an intentional alternative: modern senior engineering craft, high velocity, and deep empathy for how businesses actually function.
                  </p>
                  <p>
                    Today, our team of systems architects, full-stack engineers, and product designers partners with ambitious businesses across domestic and international markets to build mission-critical digital products that stand the test of time.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="pt-4 flex items-center gap-6 text-sm font-mono text-dark-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-electric" />
                    <span>No Outsourced Subcontractors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-electric" />
                    <span>Senior-Only Core Team</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. APPROACH / PROCESS TIMELINE */}
      <section className="py-20 md:py-32 border-b border-border-default bg-dark-900 relative">
        <Container size="wide">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-electric block mb-3">
              [ 02 / OUR METHODOLOGY ]
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              A 4-Step Engineering Discipline
            </h2>
            <p className="text-base sm:text-lg text-dark-300 mt-4 leading-relaxed">
              Predictable execution from architecture blueprint to production hypercare. We eliminate guesswork with documented milestones and automated verification.
            </p>
          </div>

          {/* Connected Timeline Container */}
          <div ref={timelineRef} className="relative">
            {/* ScrollTrigger Vertical Progress Line (Desktop) */}
            <div className="hidden lg:block absolute left-8 top-6 bottom-6 w-0.5 bg-border-default">
              <div
                ref={progressBarRef}
                className="w-full h-full bg-gradient-to-b from-brand-electric via-brand-primary to-brand-cyan origin-top"
              />
            </div>

            <div className="space-y-8 lg:space-y-12">
              {approachSteps.map((step, idx) => (
                <ScrollReveal key={step.step} delay={idx * 0.1} duration={0.8}>
                  <div className="relative lg:pl-24 group">
                    {/* Step Indicator Dot (Desktop) */}
                    <div className="hidden lg:flex absolute left-5 top-8 -translate-x-1/2 h-6 w-6 rounded-full border-2 border-brand-electric bg-dark-900 items-center justify-center transition-transform group-hover:scale-125 z-10">
                      <div className="h-2 w-2 rounded-full bg-brand-electric" />
                    </div>

                    {/* Step Card */}
                    <div className="rounded-2xl border border-border-default bg-dark-850 p-6 sm:p-8 hover:border-brand-electric/50 transition-all duration-300">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        <div className="lg:col-span-4">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-mono text-xs font-bold text-brand-electric px-2.5 py-1 rounded bg-brand-primary/10 border border-brand-primary/30">
                              {step.phase}
                            </span>
                            <span className="font-mono text-xs text-dark-400">
                              STEP_{step.step}
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-brand-electric transition-colors">
                            {step.title}
                          </h3>
                        </div>

                        <div className="lg:col-span-5 text-sm sm:text-base text-dark-300 leading-relaxed">
                          {step.description}
                        </div>

                        <div className="lg:col-span-3 pt-2 lg:pt-0 border-t lg:border-t-0 lg:border-l border-border-default lg:pl-6 space-y-1.5">
                          <div className="text-xs font-mono uppercase tracking-wider text-dark-400 mb-2">
                            Key Outputs
                          </div>
                          {step.deliverables.map((item, dIdx) => (
                            <div
                              key={dIdx}
                              className="flex items-center gap-2 text-xs font-mono text-dark-200"
                            >
                              <span className="h-1 w-1 rounded-full bg-brand-cyan" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. CAPABILITIES WITH VISUAL THUMBNAILS */}
      <section className="py-20 md:py-32 border-b border-border-default bg-dark-950 relative">
        <Container size="wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-electric block mb-3">
                [ 03 / CAPABILITIES & ARCHITECTURE ]
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                Core Engineering Disciplines
              </h2>
              <p className="text-base sm:text-lg text-dark-300 mt-4 leading-relaxed">
                Specialized teams building robust backend systems, intuitive frontends, and cross-platform native experiences.
              </p>
            </div>
            <Button href="/services" variant="outline" size="md" withArrow>
              View All 12 Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredCapabilities.map((cap, idx) => (
              <ScrollReveal key={cap.slug} delay={idx * 0.12} duration={0.8}>
                <Link
                  href={`/services/${cap.slug}`}
                  className="group block rounded-2xl border border-border-default bg-dark-850 overflow-hidden hover:border-brand-electric/50 transition-all duration-300"
                >
                  {/* Thumbnail Image Container */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-dark-900">
                    <Image
                      src={cap.image}
                      alt={cap.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="font-mono text-xs px-2.5 py-1 rounded bg-dark-950/80 backdrop-blur-md border border-white/10 text-brand-electric">
                        {cap.code}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 h-9 w-9 rounded-full bg-brand-primary/80 backdrop-blur-md flex items-center justify-center text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-brand-electric transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-dark-300 leading-relaxed">
                      {cap.tagline}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-border-default">
                      {cap.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono text-dark-400 px-2 py-0.5 rounded bg-dark-900 border border-border-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. MISSION, VISION & CORE VALUES */}
      <section className="py-20 md:py-28 border-b border-border-default bg-dark-900">
        <Container size="wide">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-electric block mb-3">
              [ 04 / ETHOS & VALUES ]
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Principles That Shape Every System
            </h2>
          </div>

          {/* Mission & Vision 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ScrollReveal direction="left">
              <div className="rounded-2xl border border-border-default bg-dark-850 p-8 sm:p-10 flex flex-col justify-between h-full hover:border-brand-electric/40 transition-colors">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="h-2 w-2 rounded-full bg-brand-electric" />
                    <span className="text-xs font-mono uppercase tracking-widest text-dark-400">
                      Our Mission
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                    To eliminate operational friction through durable software engineering.
                  </h3>
                  <p className="text-dark-300 text-sm sm:text-base leading-relaxed">
                    We exist to empower teams with proprietary software systems that fit their exact operating rhythm. We replace chaotic spreadsheets and inflexible commercial tools with secure, fast, and maintainable software.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-border-default text-xs font-mono text-dark-400">
                  Pillar: Long-term business utility over short-lived trends
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="rounded-2xl border border-border-default bg-dark-850 p-8 sm:p-10 flex flex-col justify-between h-full hover:border-brand-cyan/40 transition-colors">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="h-2 w-2 rounded-full bg-brand-cyan" />
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan">
                      Our Vision
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                    To be the benchmark for software craftsmanship and integrity.
                  </h3>
                  <p className="text-dark-300 text-sm sm:text-base leading-relaxed">
                    We envision a technology ecosystem where software engineering is recognized for global architectural excellence, meticulous code quality, and honest, high-trust business relationships.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-border-default text-xs font-mono text-dark-400">
                  Goal: Building generational engineering excellence and reliability
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* 5 Core Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <ScrollReveal key={val.code} delay={idx * 0.08}>
                <div className="rounded-2xl border border-border-default bg-dark-850 p-7 flex flex-col justify-between h-full hover:border-brand-electric/50 transition-all group">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-border-default mb-4">
                      <span className="font-mono text-xs text-dark-500 font-bold">
                        VAL_{val.code}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-electric" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-brand-electric transition-colors">
                      {val.name}
                    </h3>
                    <p className="text-xs font-mono text-brand-electric mb-3">
                      {val.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-dark-300 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="py-20 md:py-32 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-pattern opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-brand-primary/15 blur-[160px] pointer-events-none" />

        <Container size="narrow" className="relative z-10 text-center space-y-6">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-electric/30 bg-brand-navy/60 text-xs font-mono text-brand-cyan mb-2">
              <Sparkles className="h-3.5 w-3.5 text-brand-electric animate-spin" />
              <span>READY TO ARCHITECT YOUR NEXT SYSTEM</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-[1.08]">
              Let&apos;s build software that becomes your company&apos;s unfair advantage.
            </h2>

            <p className="text-base sm:text-lg text-dark-300 max-w-xl mx-auto leading-relaxed pt-2">
              Connect with our senior engineering team to discuss scope, timelines, or review your existing architecture.
            </p>

            <div className="pt-6 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Schedule an Architecture Call
              </Button>
              <Button href="/work" variant="outline" size="lg">
                View Concept Projects
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
};
