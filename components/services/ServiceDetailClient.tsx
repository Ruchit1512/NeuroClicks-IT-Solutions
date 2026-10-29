"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Layers,
  Sparkles,
  Cpu,
  Terminal,
  Activity,
  Code2,
} from "lucide-react";
import { ServiceDetail } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/ui/Container";
import { SectionHeader } from "@/ui/SectionHeader";
import { Button } from "@/ui/Button";
import { Badge } from "@/ui/Badge";
import { Breadcrumbs } from "@/ui/Breadcrumbs";
import { Accordion } from "@/ui/Accordion";
import { HeroHeadingReveal } from "@/animations/HeroHeadingReveal";
import { ScrollReveal } from "@/animations/ScrollReveal";
import { ImageReveal } from "@/animations/ImageReveal";

interface ServiceDetailClientProps {
  service: ServiceDetail;
  relatedServices: ServiceDetail[];
}

export const ServiceDetailClient: React.FC<ServiceDetailClientProps> = ({
  service,
  relatedServices,
}) => {
  const faqAccordionItems = service.faqs.map((faq, idx) => ({
    id: `faq-${idx}`,
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <div className="pt-28 pb-20 bg-dark-900 text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="py-12 md:py-20 border-b border-border-default relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-brand-electric border border-brand-primary/30 text-xs font-mono font-medium">
                  {service.category}
                </span>
                <span className="text-xs font-mono text-dark-400 font-bold">
                  PRACTICE // {service.number}
                </span>
              </div>

              <HeroHeadingReveal
                lines={[service.title]}
                className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-[1.08]"
              />

              <ScrollReveal delay={0.25}>
                <p className="text-lg sm:text-xl text-dark-300 font-normal leading-relaxed pt-2 max-w-2xl">
                  {service.heroSubtitle}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Button href="/contact" variant="primary" size="lg" withArrow>
                    Request Architecture Consultation
                  </Button>
                  <Button href="#deliverables" variant="outline" size="lg">
                    View Specifications
                  </Button>
                </div>
              </ScrollReveal>

              {/* Service Quick Tags */}
              <ScrollReveal delay={0.55}>
                <div className="pt-6 border-t border-border-default flex flex-wrap gap-2">
                  <span className="text-xs font-mono text-dark-400 py-1 mr-2">Key Tech:</span>
                  {service.techCapabilities.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-dark-300 px-2.5 py-1 rounded bg-dark-850 border border-border-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right Hero Image Showcase Mockup */}
            <div className="lg:col-span-5">
              <ImageReveal effect="clip" delay={0.2} duration={1.2}>
                <div className="relative rounded-2xl overflow-hidden border border-border-default bg-dark-850 shadow-2xl shadow-brand-navy/60 group">
                  {/* Browser Chrome Header */}
                  <div className="px-4 py-3 border-b border-border-default bg-dark-900 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-500/80" />
                      <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                      <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="px-3 py-1 rounded bg-dark-950/80 border border-white/5 text-[11px] font-mono text-dark-400 truncate max-w-[200px]">
                      neuroclicks.internal/{service.slug}
                    </div>
                    <div className="h-2 w-2 rounded-full bg-brand-electric animate-pulse" />
                  </div>

                  {/* Main Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-dark-950">
                    <Image
                      src={service.image}
                      alt={`${service.title} interface and software architecture`}
                      fill
                      priority
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Bottom Metrics Bar */}
                  <div className="p-4 border-t border-border-default bg-dark-900/90 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2 text-dark-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span>PRODUCTION READY</span>
                    </div>
                    <span className="text-brand-electric font-semibold">
                      100% CODE OWNERSHIP
                    </span>
                  </div>
                </div>
              </ImageReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. THE BUSINESS PROBLEM VS OUR SOLUTION */}
      <section className="py-20 md:py-28 border-b border-border-default bg-dark-950">
        <Container size="wide">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-electric block mb-3">
                [ 01 / PROBLEM &amp; ARCHITECTURAL SOLUTION ]
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                The Operational Bottleneck We Eliminate
              </h2>
            </div>
          </ScrollReveal>

          {/* Side-by-Side Comparison: Without vs With NeuroClicks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Fragile Status Quo */}
            <ScrollReveal direction="left">
              <div className="rounded-2xl border border-red-500/20 bg-dark-850 p-8 sm:p-10 h-full flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-red-500/40" />
                <div>
                  <div className="flex items-center gap-2 mb-4 text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                    <XCircle className="h-4 w-4 text-red-400 shrink-0" />
                    <span>Without NeuroClicks // The Fragile Status Quo</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4">
                    Rigid tools, fragmented data, and mounting monthly debt.
                  </h3>
                  <p className="text-dark-300 text-sm sm:text-base leading-relaxed mb-6">
                    {service.problemStatement}
                  </p>
                </div>
                <div className="pt-4 border-t border-border-default text-xs font-mono text-red-400/80">
                  Risk: High user churn, data synchronization delays, and vendor lock-in
                </div>
              </div>
            </ScrollReveal>

            {/* The NeuroClicks Engineered Solution */}
            <ScrollReveal direction="right">
              <div className="rounded-2xl border border-brand-electric/40 bg-dark-850 p-8 sm:p-10 h-full flex flex-col justify-between relative overflow-hidden group shadow-lg shadow-brand-navy/30">
                <div className="absolute top-0 left-0 right-0 h-1 bg-brand-electric" />
                <div>
                  <div className="flex items-center gap-2 mb-4 text-xs font-mono text-brand-electric font-bold uppercase tracking-wider">
                    <CheckCircle2 className="h-4 w-4 text-brand-electric shrink-0" />
                    <span>With NeuroClicks // The Engineered Advantage</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4">
                    Purpose-built architecture that mirrors your exact workflows.
                  </h3>
                  <p className="text-dark-200 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {service.overview}
                  </p>
                </div>
                <div className="pt-4 border-t border-border-default text-xs font-mono text-brand-cyan">
                  Advantage: Sub-second latency, zero subscription bloat, and total IP ownership
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 3. DELIVERABLES & FEATURES */}
      <section id="deliverables" className="py-20 md:py-28 border-b border-border-default bg-dark-900">
        <Container size="wide">
          <ScrollReveal>
            <SectionHeader
              label="[ 02 / SCOPE & DELIVERABLES ]"
              title="What this engagement delivers."
              description="Clear, tangible outputs engineered to enterprise standards with full intellectual property ownership."
              align="split"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Tangible Deliverables */}
            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl border border-border-default bg-dark-850 p-8 h-full">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border-default">
                  <ShieldCheck className="h-5 w-5 text-brand-electric" />
                  <h3 className="text-xl font-display font-bold text-white">
                    Concrete Deliverables
                  </h3>
                </div>
                <ul className="space-y-4">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-dark-300">
                      <CheckCircle2 className="h-5 w-5 text-brand-electric shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Core Architectural Features */}
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl border border-border-default bg-dark-850 p-8 h-full">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border-default">
                  <Layers className="h-5 w-5 text-brand-electric" />
                  <h3 className="text-xl font-display font-bold text-white">
                    Architectural Features
                  </h3>
                </div>
                <div className="space-y-5">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="pb-4 border-b border-border-default last:border-0 last:pb-0">
                      <h4 className="text-base font-display font-bold text-white">
                        {feat.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-dark-300 leading-relaxed mt-1">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Target Industries */}
          <ScrollReveal delay={0.3}>
            <div className="rounded-2xl border border-border-default bg-dark-850 p-6 sm:p-8">
              <span className="text-xs font-mono uppercase tracking-widest text-dark-400 block mb-3">
                Relevant Target Domains &amp; Use Cases
              </span>
              <div className="flex flex-wrap gap-2.5">
                {service.industries.map((ind) => (
                  <span
                    key={ind}
                    className="px-3.5 py-1.5 rounded-full bg-dark-900 text-dark-200 text-xs font-mono border border-border-default hover:border-brand-electric/50 transition-colors"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 4. DEVELOPMENT APPROACH & METHODOLOGY */}
      <section className="py-20 md:py-28 border-b border-border-default bg-dark-950">
        <Container size="wide">
          <ScrollReveal>
            <SectionHeader
              label="[ 03 / EXECUTION ROADMAP ]"
              title="Our development approach."
              description="A battle-tested four-step delivery process ensuring full transparency, verified quality gates, and on-schedule releases."
              align="split"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.approach.map((step, sIdx) => (
              <ScrollReveal key={step.step} delay={sIdx * 0.1}>
                <div className="rounded-2xl border border-border-default bg-dark-850 p-6 flex flex-col justify-between h-full hover:border-brand-electric/50 transition-colors">
                  <div>
                    <span className="font-mono text-2xl font-bold text-brand-electric block mb-3">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-display font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-dark-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. TECHNOLOGY CAPABILITIES MATRIX */}
      <section className="py-20 md:py-28 border-b border-border-default bg-dark-900">
        <Container size="wide">
          <ScrollReveal>
            <SectionHeader
              label="[ 04 / TECH CAPABILITIES ]"
              title="Technology capabilities for this service."
              description="The core libraries, frameworks, database systems, and infrastructure tools utilized for this discipline."
            />

            <div className="flex flex-wrap gap-2.5">
              {service.techCapabilities.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-dark-850 text-dark-200 text-sm font-mono border border-border-default hover:border-brand-electric/60 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 6. SERVICE-SPECIFIC FAQS */}
      <section className="py-20 md:py-28 border-b border-border-default bg-dark-950">
        <Container size="narrow">
          <ScrollReveal>
            <SectionHeader
              label="[ 05 / COMMON QUESTIONS ]"
              title={`Frequently asked questions about ${service.title}.`}
              description="Answers to common technical, timeline, and commercial questions."
            />

            <Accordion items={faqAccordionItems} isDark={true} />
          </ScrollReveal>
        </Container>
      </section>

      {/* 7. RELATED SERVICES WITH VISUAL PREVIEWS */}
      {relatedServices.length > 0 && (
        <section className="py-20 md:py-28 border-b border-border-default bg-dark-900">
          <Container size="wide">
            <ScrollReveal>
              <SectionHeader
                label="[ 06 / COMPLEMENTARY PRACTICES ]"
                title="Related practice disciplines."
                description="These practice areas are frequently integrated alongside this service to deliver complete end-to-end systems."
              />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel, rIdx) => (
                <ScrollReveal key={rel.slug} delay={rIdx * 0.1}>
                  <Link
                    href={`/services/${rel.slug}`}
                    className="group rounded-2xl border border-border-default bg-dark-850 overflow-hidden flex flex-col justify-between hover:border-brand-electric/60 hover:shadow-xl transition-all duration-300 h-full"
                  >
                    {/* Visual Preview */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-dark-900">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-850 via-transparent to-transparent opacity-70" />
                      <div className="absolute top-3 left-3">
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-dark-950/80 backdrop-blur-md border border-white/10 text-brand-electric">
                          #{rel.number}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-mono text-dark-500 uppercase block mb-1 font-bold">
                          {rel.category}
                        </span>
                        <h3 className="text-xl font-display font-bold text-white group-hover:text-brand-electric transition-colors mb-2">
                          {rel.title}
                        </h3>
                        <p className="text-xs text-dark-300 line-clamp-2 leading-relaxed">
                          {rel.shortDescription}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-border-default flex items-center justify-between text-xs font-mono uppercase tracking-wider text-dark-300 group-hover:text-white transition-colors">
                        <span>Explore Specifications</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 8. BOTTOM CTA */}
      <section className="py-20 md:py-28 bg-dark-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-pattern opacity-30 pointer-events-none" />
        <Container size="narrow" className="relative z-10 text-center space-y-6">
          <ScrollReveal>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-electric">
              [ NEXT STEPS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mt-2">
              Ready to engineer your {service.title.toLowerCase()}?
            </h2>
            <p className="text-base sm:text-lg text-dark-300 max-w-xl mx-auto leading-relaxed">
              Share your technical requirements with our engineering team to receive an architectural review and estimated milestone breakdown.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Start This Project
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
};
