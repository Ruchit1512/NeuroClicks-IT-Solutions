"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, ShieldCheck, Sparkles, Terminal, Activity } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/ui/Container";
import { Breadcrumbs } from "@/ui/Breadcrumbs";
import { ContactForm } from "@/ui/ContactForm";
import { HeroHeadingReveal } from "@/animations/HeroHeadingReveal";
import { ScrollReveal } from "@/animations/ScrollReveal";
import { ImageReveal } from "@/animations/ImageReveal";

export const ContactClient: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-dark-900 text-white min-h-screen">
      <section className="py-12 md:py-20 border-b border-border-default relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <Container size="wide">
          <Breadcrumbs items={[{ label: "Contact Us" }]} className="mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading and Contact Form */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-default bg-dark-850 text-xs font-mono text-dark-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-electric animate-pulse" />
                  <span className="uppercase tracking-widest text-white">
                    [ INITIATE A PROJECT // ARCHITECTURE ADVISORY ]
                  </span>
                </div>

                <HeroHeadingReveal
                  lines={[
                    "Let's Build Something Useful.",
                    "Start Your Architecture Call.",
                  ]}
                  className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-[1.08]"
                />

                <ScrollReveal delay={0.25}>
                  <p className="text-base sm:text-lg md:text-xl text-dark-300 font-normal leading-relaxed pt-1 max-w-2xl">
                    Share a little about your business, your current infrastructure, or the software challenge you&apos;re trying to solve. You will hear back directly from a senior engineer within 24 hours.
                  </p>
                </ScrollReveal>
              </div>

              {/* Interactive Demo Contact Form */}
              <ScrollReveal delay={0.35}>
                <div className="rounded-2xl border border-border-default bg-dark-850 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-electric via-brand-primary to-brand-cyan" />
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Visual Panel & Direct Engineering Details */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
              {/* Engineering Consultation Visual Hub */}
              <ImageReveal effect="clip" delay={0.2} duration={1.1}>
                <div className="rounded-2xl border border-border-default bg-dark-850 overflow-hidden shadow-2xl group">
                  {/* HUD Header */}
                  <div className="px-4 py-3 border-b border-border-default bg-dark-900 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-white font-medium">ENGINEERING CONSULTATION HUB</span>
                    </div>
                    <span className="text-brand-electric text-[11px]">ACTIVE</span>
                  </div>

                  {/* Visual Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-dark-900">
                    <Image
                      src="/images/contact/consultation-hub.webp"
                      alt="NeuroClicks Media engineering collaboration and architecture advisory hub"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60" />

                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-dark-950/85 backdrop-blur-md border border-white/10 text-xs font-mono text-dark-200">
                      <div className="flex items-center gap-2 text-brand-electric font-semibold mb-0.5">
                        <Terminal className="h-3.5 w-3.5" />
                        <span>DIRECT ARCHITECT ADVISORY</span>
                      </div>
                      <p className="text-[11px] text-dark-300">
                        Zero sales reps. Discuss API contracts, PostgreSQL schemas, and milestones directly with the engineering leads.
                      </p>
                    </div>
                  </div>
                </div>
              </ImageReveal>

              {/* Direct Inquiry Channels */}
              <ScrollReveal delay={0.3}>
                <div className="rounded-2xl border border-border-default bg-dark-850 p-8 space-y-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-dark-400 block pb-3 border-b border-border-default">
                    Direct Engineering Channels
                  </span>

                  <div className="space-y-4 text-sm font-mono">
                    <div className="flex items-start gap-3">
                      <Mail className="h-4 w-4 text-brand-electric mt-1 shrink-0" />
                      <div>
                        <span className="block text-xs text-dark-500">Project Scoping &amp; RFCs</span>
                        <a
                          href={`mailto:${siteConfig.contact.inquiriesEmail}`}
                          className="font-medium text-white hover:text-brand-electric underline transition-colors"
                        >
                          {siteConfig.contact.inquiriesEmail}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-4 w-4 text-brand-electric mt-1 shrink-0" />
                      <div>
                        <span className="block text-xs text-dark-500">Direct Telephone</span>
                        <a
                          href={`tel:${siteConfig.contact.phone}`}
                          className="font-medium text-white hover:text-brand-electric transition-colors"
                        >
                          {siteConfig.contact.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-4 w-4 text-brand-cyan mt-1 shrink-0" />
                      <div>
                        <span className="block text-xs text-dark-500">Response Commitment</span>
                        <span className="text-dark-200">
                          {siteConfig.contact.responseTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Office Location */}
                  <div className="pt-4 border-t border-border-default space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-dark-400 block">
                      Engineering Office
                    </span>
                    <p className="text-xs sm:text-sm text-dark-300 leading-relaxed font-mono">
                      {siteConfig.location.address}
                    </p>
                    <div className="pt-1 text-[11px] font-mono text-dark-500 flex items-center gap-1.5">
                      <MapPin className="h-3 w-3 text-brand-electric" />
                      <span>Coordinates: {siteConfig.location.coordinates}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Security & Confidentiality Notice */}
              <ScrollReveal delay={0.4}>
                <div className="rounded-2xl border border-border-default bg-dark-850 p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-brand-electric" />
                    <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                      Mutual NDA &amp; IP Protection
                    </span>
                  </div>
                  <p className="text-xs text-dark-300 leading-relaxed">
                    All project discussions, wireframes, and proprietary business workflows are protected under standard mutual NDA confidentiality before review.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
