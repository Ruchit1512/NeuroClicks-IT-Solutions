"use client";

import React from "react";
import { Mail, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/ui/Container";
import { Button } from "@/ui/Button";
import { ScrollReveal } from "@/animations/ScrollReveal";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-dark-950 text-white relative overflow-hidden border-b border-border-default">
      {/* Deep blue and navy ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-blue/20 rounded-full blur-[170px] pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-default bg-dark-850 text-xs font-mono text-dark-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-electric animate-pulse" />
              <span className="uppercase tracking-widest text-white">
                [ 07 / INITIATE ENGAGEMENT ]
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white leading-[1.08]">
              Let&apos;s Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-electric to-brand-cyan">
                That Matters.
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-dark-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Have a business challenge or a product idea? Let&apos;s discuss how the right technology can help.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" withArrow arrowDirection="up-right">
                Start Your Project
              </Button>
              <Button href={`mailto:${siteConfig.contact.inquiriesEmail}`} variant="secondary" size="lg">
                Email Engineering Directly
              </Button>
            </div>

            {/* Quick contact metadata */}
            <div className="pt-12 border-t border-border-default flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-dark-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-electric" />
                <span>Response within 24 business hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-electric" />
                <a href={`mailto:${siteConfig.contact.inquiriesEmail}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.inquiriesEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-electric" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
