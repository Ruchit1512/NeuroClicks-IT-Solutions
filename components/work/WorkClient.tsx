"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShoppingBag,
  BarChart3,
  Globe,
  Sparkles,
  Maximize2,
  X,
  Code2,
  Layers,
  Database,
  ExternalLink,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { projectsData, Project } from "@/lib/projects";
import { Container } from "@/ui/Container";
import { Breadcrumbs } from "@/ui/Breadcrumbs";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { HeroHeadingReveal } from "@/animations/HeroHeadingReveal";
import { ScrollReveal } from "@/animations/ScrollReveal";
import { ImageReveal } from "@/animations/ImageReveal";

const categories = ["All Projects", "E-commerce", "Business Systems", "SaaS & Web"] as const;

export const WorkClient: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All Projects") return true;
    if (activeCategory === "E-commerce") return project.category.toLowerCase().includes("e-commerce");
    if (activeCategory === "Business Systems") return project.category.toLowerCase().includes("crm");
    if (activeCategory === "SaaS & Web") return project.category.toLowerCase().includes("saas") || project.category.toLowerCase().includes("website");
    return true;
  });

  return (
    <div className="pt-28 pb-20 bg-dark-900 text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="py-16 md:py-24 border-b border-border-default relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <Container size="wide">
          <Breadcrumbs items={[{ label: "Work" }]} className="mb-8" />

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-default bg-dark-850 text-xs font-mono text-dark-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-electric animate-pulse" />
              <span className="uppercase tracking-widest text-white">
                [ PORTFOLIO &amp; ARCHITECTURAL BENCHMARKS ]
              </span>
            </div>

            <HeroHeadingReveal
              lines={[
                "Selected Systems.",
                "Engineered For Scale & Clarity.",
              ]}
              className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white leading-[1.05]"
            />

            <ScrollReveal delay={0.3} duration={0.8}>
              <p className="text-lg sm:text-xl md:text-2xl text-dark-300 font-normal leading-relaxed pt-2 max-w-3xl">
                Explore our technical concept case studies across high-concurrency e-commerce, real-time CRM operations, and end-to-end B2B SaaS platforms.
              </p>
            </ScrollReveal>

            {/* Concept Notice */}
            <ScrollReveal delay={0.45} duration={0.8}>
              <div className="mt-8 rounded-2xl border border-border-default bg-dark-850/80 p-4 text-xs font-mono text-dark-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-brand-electric shrink-0" />
                  <span>
                    <strong>Architecture Notice:</strong> The three systems below represent verified concept benchmarks engineered to demonstrate full-stack performance and domain boundaries.
                  </span>
                </div>
                <span className="uppercase tracking-wider text-brand-electric font-semibold shrink-0">
                  3 Production Specs
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Category Filter Tabs */}
          <ScrollReveal delay={0.55} duration={0.8}>
            <div className="mt-12 flex flex-wrap items-center gap-3 pt-8 border-t border-border-default">
              <span className="text-xs font-mono text-dark-400 mr-2">Filter discipline:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-brand-primary text-white shadow-lg shadow-brand-navy/60 font-semibold"
                      : "bg-dark-850 text-dark-300 border border-border-default hover:border-brand-electric hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 2. DETAILED PROJECTS LIST */}
      <section className="py-20 md:py-28 bg-dark-950">
        <Container size="wide">
          <div className="space-y-28 md:space-y-36">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 1;

              return (
                <ScrollReveal key={project.id} delay={0.1} duration={0.9}>
                  <div
                    id={project.slug}
                    className="rounded-3xl border border-border-default bg-dark-850 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden group hover:border-brand-electric/50 transition-all duration-500"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                      {/* Editorial Column */}
                      <div className={`lg:col-span-5 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-dark-400 font-bold">
                            PROJECT // {project.number}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-brand-primary/10 text-brand-electric border border-brand-primary/30 text-[11px] font-mono">
                            {project.category}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-dark-900 border border-border-default text-[10px] font-mono text-dark-400">
                            SPEC BENCHMARK
                          </span>
                        </div>

                        <div className="space-y-2">
                          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                            {project.title}
                          </h2>
                          <span className="text-xs font-mono text-brand-cyan block">
                            {project.industry}
                          </span>
                        </div>

                        <p className="text-base sm:text-lg text-dark-300 font-normal leading-relaxed">
                          {project.description}
                        </p>

                        {/* Key Features */}
                        <div className="space-y-2.5 pt-4 border-t border-border-default">
                          <span className="text-xs font-mono uppercase tracking-wider text-dark-400 block mb-1">
                            Key Software Capabilities
                          </span>
                          {project.features.map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-center gap-2.5 text-xs sm:text-sm text-dark-200"
                            >
                              <CheckCircle2 className="h-4 w-4 text-brand-electric shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Metrics Bar */}
                        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border-default">
                          {project.stats.map((stat, mIdx) => (
                            <div key={mIdx}>
                              <span className="block text-xl font-mono font-bold text-white">
                                {stat.value}
                              </span>
                              <span className="text-[10px] font-mono text-dark-400 block mt-0.5">
                                {stat.label}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Technologies Tags */}
                        <div className="space-y-2 pt-2">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-dark-400 block">
                            Technologies &amp; Protocols
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-md bg-dark-900 text-dark-300 text-xs font-mono border border-border-default"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Interactive Blueprint Inspection Trigger */}
                        <div className="pt-4">
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-brand-electric/40 bg-brand-primary/10 hover:bg-brand-primary text-white text-xs font-mono transition-all duration-300 group/btn"
                          >
                            <Maximize2 className="h-4 w-4 text-brand-electric group-hover/btn:text-white" />
                            <span>Inspect Technical Blueprint &amp; Specs</span>
                          </button>
                        </div>
                      </div>

                      {/* Image & Interactive Mockup Column */}
                      <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                        <div className="rounded-2xl border border-border-default bg-dark-900 p-4 sm:p-6 text-white shadow-2xl relative overflow-hidden">
                          {/* Browser Chrome Header */}
                          <div className="flex items-center justify-between pb-3.5 border-b border-border-default mb-4 text-xs font-mono text-dark-400">
                            <div className="flex items-center gap-2">
                              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                              <span className="ml-2 text-dark-300 text-[11px] truncate max-w-[200px] sm:max-w-xs font-mono">
                                {project.uiMockup.browserUrl}
                              </span>
                            </div>
                            <span className="text-[10px] text-brand-electric font-mono uppercase font-semibold">
                              {project.uiMockup.badgeLabel}
                            </span>
                          </div>

                          {/* Image Preview with Mask / Hover Scale */}
                          <div
                            onClick={() => setSelectedProject(project)}
                            className="relative h-64 sm:h-80 lg:h-96 w-full rounded-xl overflow-hidden border border-border-default mb-4 cursor-pointer group/img bg-dark-950"
                          >
                            <Image
                              src={project.image}
                              alt={project.imageAlt}
                              fill
                              sizes="(max-width: 1024px) 100vw, 60vw"
                              className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />

                            {/* Center Hover Magnifier Pill */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none">
                              <div className="px-4 py-2 rounded-full bg-dark-900/90 backdrop-blur-md border border-brand-electric/50 text-xs font-mono text-white flex items-center gap-2 shadow-xl">
                                <Maximize2 className="h-3.5 w-3.5 text-brand-electric" />
                                <span>Click to Expand Blueprint</span>
                              </div>
                            </div>

                            {/* Floating Hero Metric Overlay */}
                            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-dark-900/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-border-default text-xs font-mono">
                              <div>
                                <span className="text-white font-medium block">
                                  {project.uiMockup.heroMetric.label}
                                </span>
                                {project.uiMockup.heroMetric.detail && (
                                  <span className="text-[10px] text-dark-400 block">
                                    {project.uiMockup.heroMetric.detail}
                                  </span>
                                )}
                              </div>
                              <span className="text-brand-electric font-bold text-base sm:text-lg">
                                {project.uiMockup.heroMetric.value}
                              </span>
                            </div>
                          </div>

                          {/* Highlights List */}
                          <div className="space-y-2 mb-3">
                            {project.uiMockup.interfaceHighlights.map((feat, fIdx) => (
                              <div
                                key={fIdx}
                                className="flex items-center gap-2.5 text-xs text-dark-300 font-mono bg-dark-850/60 p-2.5 rounded-lg border border-border-default"
                              >
                                <CheckCircle2 className="h-3.5 w-3.5 text-brand-electric shrink-0" />
                                <span className="truncate">{feat}</span>
                              </div>
                            ))}
                          </div>

                          {/* Dual Interface Note for GrowSuite */}
                          {project.id === "growsuite" && (
                            <div className="p-3 mb-3 rounded-lg bg-brand-primary/10 border border-brand-primary/30 text-xs font-mono text-brand-cyan flex items-center gap-2">
                              <Sparkles className="h-3.5 w-3.5 text-brand-electric shrink-0" />
                              <span>
                                Dual-Architecture: Synchronized Public Next.js Storefront + Private Multi-Tenant SaaS Workspace
                              </span>
                            </div>
                          )}

                          {/* Footer Strip */}
                          <div className="p-2.5 rounded-lg bg-black border border-border-default text-[11px] font-mono text-dark-400 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Sparkles className="h-3.5 w-3.5 text-brand-electric shrink-0" />
                              <span>{project.uiMockup.subPreviewLabel}</span>
                            </div>
                            <span className="text-brand-electric uppercase text-[10px] font-bold">
                              VERIFIED_SPEC
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. TECHNICAL BLUEPRINT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border-default bg-dark-900 p-6 sm:p-10 text-white shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 h-10 w-10 rounded-full border border-border-default bg-dark-850 flex items-center justify-center text-dark-300 hover:text-white hover:border-brand-electric transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-brand-electric font-bold">
                  PROJECT SPECIFICATION // #{selectedProject.number}
                </span>
                <Badge variant="blue" size="sm">
                  {selectedProject.category}
                </Badge>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
                {selectedProject.title} — Architectural Blueprint
              </h3>

              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border-default bg-dark-950">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border-default">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-brand-electric mb-3 font-semibold">
                    System Architecture &amp; Data Pipeline
                  </h4>
                  <p className="text-sm text-dark-300 leading-relaxed">
                    {selectedProject.description} Designed with modular domain logic, parameterized PostgreSQL storage, and strict row-level tenant security.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-brand-electric mb-3 font-semibold">
                    Core Metrics &amp; Benchmarks
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.stats.map((stat, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-dark-850 border border-border-default text-xs font-mono"
                      >
                        <span className="text-dark-300">{stat.label}</span>
                        <span className="text-white font-bold">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border-default flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand-electric" />
                  <span className="text-xs font-mono text-dark-300">
                    Production Architecture Ready for Deployment
                  </span>
                </div>
                <Button href="/contact" variant="primary" size="md" withArrow>
                  Request Similar System Scope
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. BOTTOM CTA */}
      <section className="py-20 md:py-28 bg-dark-900 border-t border-border-default relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-pattern opacity-30 pointer-events-none" />
        <Container size="narrow" className="relative z-10 text-center space-y-6">
          <ScrollReveal>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-electric">
              [ CUSTOM SOFTWARE SCOPE ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mt-2">
              Ready to engineer your custom system?
            </h2>
            <p className="text-base sm:text-lg text-dark-300 max-w-xl mx-auto leading-relaxed">
              We translate business goals into measurable software architectures. Schedule a technical discussion with our engineering leads.
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
