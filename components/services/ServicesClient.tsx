"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Layers,
  Code2,
  Users,
  Smartphone,
  ShoppingBag,
  Cpu,
  PenTool,
  Share2,
  Cloud,
  ShieldCheck,
  Wrench,
  Globe2,
} from "lucide-react";
import { servicesData, serviceCategoryGroups } from "@/lib/services";
import { Container } from "@/ui/Container";
import { Button } from "@/ui/Button";
import { Breadcrumbs } from "@/ui/Breadcrumbs";
import { HeroHeadingReveal } from "@/animations/HeroHeadingReveal";
import { ScrollReveal } from "@/animations/ScrollReveal";
import { ImageReveal } from "@/animations/ImageReveal";

export const ServicesClient: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-dark-900 text-white min-h-screen">
      {/* 1. SERVICES HERO */}
      <section className="py-16 md:py-24 border-b border-border-default relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <Container size="wide">
          <Breadcrumbs items={[{ label: "Services" }]} className="mb-8" />

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-default bg-dark-850 text-xs font-mono text-dark-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-electric animate-pulse" />
              <span className="uppercase tracking-widest text-white">
                [ SERVICE DIRECTORY // 12 PRACTICES ]
              </span>
            </div>

            <HeroHeadingReveal
              lines={[
                "Software Solutions Engineered",
                "For The Way You Work.",
              ]}
              className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white leading-[1.05]"
            />

            <ScrollReveal delay={0.3} duration={0.8}>
              <p className="text-lg sm:text-xl md:text-2xl text-dark-300 font-normal leading-relaxed pt-2 max-w-3xl">
                Every business has proprietary operations and competitive advantages. We tailor our engineering around your specific workflows, team structure, and long-term scaling targets.
              </p>
            </ScrollReveal>
          </div>

          {/* Quick Jump Anchor Tabs */}
          <ScrollReveal delay={0.45} duration={0.8}>
            <div className="mt-12 flex flex-wrap items-center gap-2 pt-8 border-t border-border-default">
              <span className="text-xs font-mono text-dark-400 mr-2">Jump to category:</span>
              {serviceCategoryGroups.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="px-4 py-1.5 rounded-full border border-border-default bg-dark-850 text-xs font-mono text-dark-300 hover:text-white hover:border-brand-electric hover:bg-dark-800 transition-colors"
                >
                  {group.code} {group.name}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 2. CATEGORIZED SERVICE DEEP DIVES */}
      <section className="py-20 md:py-28 bg-dark-950">
        <Container size="wide">
          <div className="space-y-28">
            {serviceCategoryGroups.map((group) => {
              const allCategoryServices = servicesData.filter((s) =>
                group.slugs.includes(s.slug)
              );
              // Featured is primary or the first
              const featuredService =
                allCategoryServices.find((s) => s.isPrimary) || allCategoryServices[0];
              const secondaryServices = allCategoryServices.filter(
                (s) => s.slug !== featuredService.slug
              );

              return (
                <div key={group.id} id={group.id} className="scroll-mt-32">
                  {/* Category Header */}
                  <ScrollReveal>
                    <div className="pb-8 border-b border-border-default mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="h-2 w-2 rounded-full bg-brand-electric" />
                          <span className="text-xs font-mono uppercase tracking-widest text-brand-electric font-semibold">
                            Discipline {group.code}
                          </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                          {group.name}
                        </h2>
                      </div>
                      <p className="text-sm sm:text-base text-dark-300 max-w-lg leading-relaxed">
                        {group.description}
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Combination: Large Featured Card + Secondary Cards Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Featured Large Visual Card */}
                    <div className="lg:col-span-7 flex">
                      <ScrollReveal className="w-full h-full" duration={0.9}>
                        <Link
                          href={`/services/${featuredService.slug}`}
                          className="group flex flex-col justify-between rounded-2xl border border-border-default bg-dark-850 overflow-hidden hover:border-brand-electric/70 hover:shadow-2xl hover:shadow-brand-navy/60 transition-all duration-500 h-full"
                        >
                          {/* Image Visual with Mask / Clip Reveal */}
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-dark-900">
                            <Image
                              src={featuredService.image}
                              alt={featuredService.title}
                              fill
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                              sizes="(max-width: 1024px) 100vw, 60vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-850 via-dark-850/40 to-transparent" />

                            <div className="absolute top-4 left-4 flex items-center gap-2">
                              <span className="px-3 py-1 rounded-full bg-dark-950/85 backdrop-blur-md border border-white/10 text-xs font-mono text-brand-electric font-bold">
                                FEATURED PRACTICE
                              </span>
                              <span className="px-2.5 py-1 rounded-full bg-dark-950/85 backdrop-blur-md border border-white/10 text-xs font-mono text-dark-300">
                                #{featuredService.number}
                              </span>
                            </div>

                            <div className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-brand-primary text-white flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                              <ArrowRight className="h-5 w-5" />
                            </div>
                          </div>

                          {/* Featured Card Content */}
                          <div className="p-8 space-y-5 flex-1 flex flex-col justify-between">
                            <div>
                              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-brand-electric transition-colors">
                                {featuredService.title}
                              </h3>
                              <p className="text-dark-300 text-base leading-relaxed mt-3">
                                {featuredService.shortDescription}
                              </p>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-border-default">
                              <div className="text-xs font-mono uppercase tracking-wider text-dark-400">
                                Key Deliverables
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {featuredService.deliverables.slice(0, 4).map((deliv, dIdx) => (
                                  <div
                                    key={dIdx}
                                    className="flex items-center gap-2 text-xs font-mono text-dark-200"
                                  >
                                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-electric shrink-0" />
                                    <span className="truncate">{deliv}</span>
                                  </div>
                                ))}
                              </div>

                              <div className="flex items-center justify-between pt-3 text-xs font-mono text-brand-electric font-semibold group-hover:translate-x-1 transition-transform">
                                <span>Explore Architecture &amp; Case Studies</span>
                                <ArrowRight className="h-4 w-4" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </ScrollReveal>
                    </div>

                    {/* Secondary Services Compact List */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                      {secondaryServices.map((service, sIdx) => (
                        <ScrollReveal
                          key={service.slug}
                          delay={sIdx * 0.12}
                          duration={0.8}
                          className="flex-1"
                        >
                          <Link
                            href={`/services/${service.slug}`}
                            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-2xl border border-border-default bg-dark-850 p-6 hover:border-brand-electric/50 hover:bg-dark-800 transition-all duration-300 h-full gap-5 relative overflow-hidden"
                          >
                            <div className="flex items-start gap-4">
                              {/* Small Thumbnail Preview */}
                              <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-xl overflow-hidden shrink-0 border border-border-default bg-dark-900">
                                <Image
                                  src={service.image}
                                  alt={service.title}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                                  sizes="80px"
                                />
                              </div>

                              <div>
                                <div className="flex items-center gap-2 mb-1.5">
                                  <span className="font-mono text-[11px] text-dark-400">
                                    PRACTICE_{service.number}
                                  </span>
                                </div>
                                <h4 className="text-lg font-display font-bold text-white group-hover:text-brand-electric transition-colors">
                                  {service.title}
                                </h4>
                                <p className="text-xs text-dark-300 mt-1 line-clamp-2 leading-relaxed">
                                  {service.shortDescription}
                                </p>
                              </div>
                            </div>

                            <div className="h-8 w-8 rounded-full border border-border-default flex items-center justify-center text-dark-400 group-hover:text-white group-hover:border-brand-electric group-hover:bg-brand-primary shrink-0 transition-all">
                              <ArrowUpRight className="h-4 w-4" />
                            </div>
                          </Link>
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. FINAL CONSULTATION CTA */}
      <section className="py-20 md:py-32 bg-dark-900 border-t border-border-default relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-pattern opacity-30 pointer-events-none" />
        <Container size="narrow" className="relative z-10 text-center space-y-6">
          <ScrollReveal>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-electric">
              [ TECHNICAL CONSULTATION ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mt-2">
              Need a customized engineering scope?
            </h2>
            <p className="text-base sm:text-lg text-dark-300 max-w-xl mx-auto leading-relaxed">
              We provide upfront architectural breakdowns, stack recommendations, and milestone timelines tailored to your organization.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Schedule an Architecture Call
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
};
