"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, ShieldCheck, Laptop, HeartHandshake } from "lucide-react";
import { Container } from "@/ui/Container";
import { Button } from "@/ui/Button";
import { ScrollReveal } from "@/animations/ScrollReveal";

export const AboutSection: React.FC = () => {
  const capabilities = [
    {
      title: "Business-first software engineering",
      description:
        "We evaluate architecture against operational viability and business ROI. We write code only when code is the best, most profitable solution for your business.",
      icon: <Layers className="h-5 w-5 text-brand-electric" />,
    },
    {
      title: "Scalable and maintainable architecture",
      description:
        "From normalized relational schemas to stateless container deployments, our systems are built with clean boundaries that withstand real-world growth.",
      icon: <ShieldCheck className="h-5 w-5 text-brand-electric" />,
    },
    {
      title: "User-focused digital experiences",
      description:
        "We engineer high-speed, intuitive interfaces that eliminate cognitive friction, streamline daily task completion, and delight end customers.",
      icon: <Laptop className="h-5 w-5 text-brand-electric" />,
    },
    {
      title: "Long-term technical support",
      description:
        "Software is a living asset. We provide structured maintenance SLAs, dependency upgrades, telemetry observation, and continuous performance tuning.",
      icon: <HeartHandshake className="h-5 w-5 text-brand-electric" />,
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-dark-950 text-white border-b border-border-default relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[150px] pointer-events-none" />

      <Container size="wide">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading, Narrative, Supporting Visual */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-default bg-dark-850 text-xs font-mono text-dark-300">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-electric animate-pulse" />
                <span className="uppercase tracking-widest text-white">
                  [ 05 / ABOUT NEUROCLICKS MEDIA ]
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-[1.1]">
                We Turn Complex Ideas Into Practical Technology.
              </h2>

              <p className="text-base sm:text-lg text-dark-300 leading-relaxed font-normal pt-1">
                NeuroClicks Media helps businesses translate their ideas and operational challenges into thoughtfully designed digital products and software solutions.
              </p>

              {/* Supporting Visual: Engineering Collaboration */}
              <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-border-default mt-6 group">
                <Image
                  src="/images/about/workspace-collaboration.webp"
                  alt="NeuroClicks Media engineering team in collaborative architectural review"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white bg-dark-900/90 backdrop-blur-md p-3 rounded-xl border border-border-default">
                  <span>Digital Engineering Studio</span>
                  <span className="text-brand-electric font-semibold">Technical Excellence</span>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/about" variant="secondary" size="md" withArrow>
                  Learn More About Us
                </Button>
              </div>
            </div>

            {/* Right Column: 4 Capabilities */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border-default bg-dark-850 p-6 flex flex-col justify-between hover:border-brand-electric/50 hover:bg-dark-800 transition-all duration-300 group"
                >
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-dark-900 border border-border-default flex items-center justify-center mb-5 group-hover:border-brand-electric/50 transition-colors">
                      {cap.icon}
                    </div>

                    <h3 className="text-lg font-display font-bold text-white mb-2.5 group-hover:text-brand-electric transition-colors">
                      {cap.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-dark-300 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border-default flex items-center gap-1.5 text-[11px] font-mono text-dark-400">
                    <span className="h-1 w-1 rounded-full bg-brand-electric" />
                    <span>ENGINEERED FOR VALUE</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
