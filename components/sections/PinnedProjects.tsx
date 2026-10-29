"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ShoppingBag,
  BarChart3,
  Globe,
  Sparkles,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { projectsData } from "@/lib/projects";
import { Container } from "@/ui/Container";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { registerGSAP, ScrollTrigger, isPrefersReducedMotion } from "@/lib/gsap";

const projectIconMap: Record<string, React.ReactNode> = {
  shopora: <ShoppingBag className="h-4 w-4 text-brand-electric" />,
  neurocrm: <BarChart3 className="h-4 w-4 text-brand-electric" />,
  growsuite: <Globe className="h-4 w-4 text-brand-electric" />,
};

export const PinnedProjects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const handleImageLoad = useCallback(() => {
    if (typeof window !== "undefined") {
      ScrollTrigger.refresh();
    }
  }, []);

  useEffect(() => {
    if (isPrefersReducedMotion()) return;
    const gsap = registerGSAP();
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const mm = gsap.matchMedia();

    // Helper: update slide widths to match viewport clientWidth exactly
    const syncSlideWidths = () => {
      const isDesktop = window.innerWidth >= 1024;
      const slides = track.querySelectorAll<HTMLElement>(".project-slide-item");
      if (isDesktop && viewport) {
        const exactWidth = viewport.clientWidth;
        slides.forEach((slide) => {
          slide.style.width = `${exactWidth}px`;
        });
      } else {
        slides.forEach((slide) => {
          slide.style.width = "";
        });
      }
    };

    // Desktop: Pin the dedicated horizontal project viewport (min-width: 1024px)
    mm.add("(min-width: 1024px)", () => {
      syncSlideWidths();

      // Total horizontal distance to scrub: track scroll width minus the viewport client width
      const getScrollAmount = () => -(track.scrollWidth - viewport.clientWidth);

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: viewport,
          pin: true,
          scrub: 1,
          // Starts when the top of the horizontal viewport reaches 72px (directly below the fixed header)
          start: "top 72px",
          // Ends immediately once the track has completed translation across all 3 cards
          end: () => `+=${track.scrollWidth - viewport.clientWidth}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const idx = Math.min(
              projectsData.length - 1,
              Math.floor(self.progress * projectsData.length + 0.05)
            );
            setActiveProjectIndex(idx);

            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${Math.round(self.progress * 100)}%`;
            }
          },
        },
      });

      const handleResize = () => {
        syncSlideWidths();
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      if (document.fonts) {
        document.fonts.ready.then(() => {
          syncSlideWidths();
          ScrollTrigger.refresh();
        });
      }

      return () => {
        window.removeEventListener("resize", handleResize);
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    // Mobile: Disable pinning, reset widths, natural vertical document flow
    mm.add("(max-width: 1023px)", () => {
      syncSlideWidths();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="bg-dark-900 text-white relative border-b border-border-default"
    >
      {/* ========================================================
          LAYER 1: Section Heading & Introduction (Normal Document Flow)
          Completely OUTSIDE the pinned project viewport.
          ======================================================== */}
      <div className="pt-20 md:pt-28 pb-10 border-b border-border-default bg-dark-900">
        <Container size="wide">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-electric animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-dark-300">
                  [ 04 / FEATURED WORK ]
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-[1.1]">
                Selected Work. Built for Real Business Needs.
              </h2>
            </div>

            <div className="lg:max-w-md flex flex-col gap-3.5">
              <p className="text-sm sm:text-base text-dark-300 leading-relaxed font-normal">
                From online stores to customer management and SaaS platforms, we create digital experiences designed around how businesses actually work.
              </p>

              {/* Progress counter and concept label in document flow */}
              <div className="flex items-center justify-between pt-2.5 border-t border-border-default text-xs font-mono">
                <span className="px-3 py-1 rounded-full border border-border-default bg-dark-850 text-brand-electric font-semibold flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-electric" />
                  Concept Project
                </span>
                <span className="text-white font-bold">
                  PROJECT 0{activeProjectIndex + 1} / 0{projectsData.length}
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Progress Bar Line */}
          <div className="hidden lg:block w-full h-1 bg-dark-800 mt-8 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-brand-blue via-brand-electric to-brand-cyan transition-all duration-150"
              style={{ width: "33%" }}
            />
          </div>
        </Container>
      </div>

      {/* ========================================================
          LAYER 2: Dedicated Wrapper around Horizontal Project Viewport
          Independently pinned by GSAP ScrollTrigger.
          Explicit responsive height on desktop; natural vertical flow on mobile.
          ======================================================== */}
      <div ref={pinWrapperRef} className="relative w-full bg-dark-900">
        <div
          ref={viewportRef}
          className="relative w-full overflow-hidden bg-dark-900 py-8 lg:py-0 lg:h-[calc(100vh-72px)] lg:min-h-[580px] lg:max-h-[760px] flex items-center"
        >
          {/* Subtle Ambient Background Glow behind pinned viewport */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-blue/10 rounded-full blur-[160px] pointer-events-none" />

          {/* ========================================================
              LAYER 3: Horizontal Track (Scrubbed with GSAP)
              Contains exactly the three project cards.
              Each desktop slide has its width synced to the viewport clientWidth,
              so exactly ONE card is displayed at a time with NO premature peeking!
              ======================================================== */}
          <div
            ref={trackRef}
            className="flex flex-col lg:flex-row w-full lg:w-max h-full lg:items-center will-change-transform"
          >
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="project-slide-item w-full shrink-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-4 lg:py-5"
              >
                {/* Individual Project Card: fits completely within viewport with consistent margins */}
                <div className="w-full max-w-5xl xl:max-w-6xl rounded-3xl border border-border-default bg-dark-850 p-5 sm:p-7 lg:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between group/card">
                  {/* Subtle Ambient Backing Accent per Project */}
                  <div
                    className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[130px] pointer-events-none opacity-20"
                    style={{ backgroundColor: project.accentColor }}
                  />

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
                    {/* Left Side: Context, Features, Stats, Tech, and CTAs */}
                    <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
                      {/* Top Meta Tag Row */}
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-dark-400 font-bold">
                          PROJECT // {project.number}
                        </span>
                        <Badge variant="blue" size="sm">
                          {project.category}
                        </Badge>
                        <span className="px-2 py-0.5 rounded-full bg-dark-900 border border-border-default text-[10px] font-mono text-dark-300">
                          Concept
                        </span>
                      </div>

                      {/* Title & Industry */}
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2.5">
                          <div className="h-8 w-8 rounded-lg bg-dark-900 border border-border-default flex items-center justify-center shrink-0">
                            {projectIconMap[project.id] || (
                              <Layers className="h-4 w-4 text-brand-electric" />
                            )}
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight leading-tight">
                            {project.title}
                          </h3>
                        </div>
                        <span className="text-xs font-mono text-dark-400 block pl-0.5">
                          {project.industry}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-dark-300 font-normal leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Core Features Checklist */}
                      <div className="space-y-1.5 pt-2 border-t border-border-default">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-dark-400 block">
                          Key Features
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1">
                          {project.features.map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-center gap-2 text-xs text-dark-200"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-brand-electric shrink-0" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Operational Stats Strip */}
                      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border-default">
                        {project.stats.map((stat, sIdx) => (
                          <div key={sIdx}>
                            <span className="block text-base sm:text-lg font-mono font-bold text-white leading-none">
                              {stat.value}
                            </span>
                            <span className="text-[10px] font-mono text-dark-400 block mt-1">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies Tags */}
                      <div className="space-y-1 pt-1">
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded-md bg-dark-900 text-dark-300 text-[11px] font-mono border border-border-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTAs: Never clipped */}
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Button
                          href="/contact"
                          variant="primary"
                          size="sm"
                          withArrow
                          arrowDirection="up-right"
                        >
                          Request Similar Build
                        </Button>
                        <Button href="/work" variant="secondary" size="sm">
                          Case Study Spec
                        </Button>
                      </div>
                    </div>

                    {/* Right Side: High-Quality Browser Mockup Window */}
                    <div className="lg:col-span-7">
                      <div className="rounded-2xl border border-border-default bg-dark-900 p-3.5 sm:p-5 text-white shadow-2xl relative overflow-hidden group">
                        {/* Realistic Browser Window Header */}
                        <div className="flex items-center justify-between pb-2.5 border-b border-border-default mb-3 text-xs font-mono text-dark-400">
                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-brand-electric" />
                            <span className="ml-2 text-dark-300 text-[11px] truncate max-w-[180px] sm:max-w-xs">
                              {project.uiMockup.browserUrl}
                            </span>
                          </div>
                          <span className="text-[10px] text-brand-electric font-mono uppercase shrink-0 font-semibold">
                            {project.uiMockup.badgeLabel}
                          </span>
                        </div>

                        {/* Storefront / Dashboard Interface Image Preview */}
                        <div className="relative h-44 sm:h-52 lg:h-56 xl:h-64 w-full rounded-xl overflow-hidden border border-border-default mb-3 group/img">
                          <Image
                            src={project.image}
                            alt={project.imageAlt}
                            fill
                            priority={project.number === "01"}
                            onLoad={handleImageLoad}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/25 to-transparent" />

                          {/* Overlaid Live Hero Metric Card */}
                          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between bg-dark-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-border-default text-xs font-mono">
                            <div>
                              <span className="text-white font-medium block text-xs">
                                {project.uiMockup.heroMetric.label}
                              </span>
                              {project.uiMockup.heroMetric.detail && (
                                <span className="text-[10px] text-dark-400 block">
                                  {project.uiMockup.heroMetric.detail}
                                </span>
                              )}
                            </div>
                            <span className="text-brand-electric font-bold text-sm sm:text-base">
                              {project.uiMockup.heroMetric.value}
                            </span>
                          </div>
                        </div>

                        {/* Interface Highlights Strip */}
                        <div className="space-y-1.5 mb-2.5">
                          {project.uiMockup.interfaceHighlights.map((hl, hIdx) => (
                            <div
                              key={hIdx}
                              className="flex items-center gap-2 text-xs text-dark-300 font-mono bg-dark-850/70 p-1.5 px-2.5 rounded-lg border border-border-default"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-brand-electric shrink-0" />
                              <span className="truncate">{hl}</span>
                            </div>
                          ))}
                        </div>

                        {/* Sub-Preview Status Footer */}
                        <div className="p-2 rounded-lg bg-black border border-border-default text-[11px] font-mono text-dark-400 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Sparkles className="h-3.5 w-3.5 text-brand-electric shrink-0" />
                            <span className="truncate">{project.uiMockup.subPreviewLabel}</span>
                          </div>
                          <span className="text-brand-electric uppercase text-[10px] font-bold shrink-0">
                            VERIFIED_SPEC
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
