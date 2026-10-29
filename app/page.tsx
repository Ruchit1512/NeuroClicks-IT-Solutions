import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSlider } from "@/components/sections/ServicesSlider";
import { CapabilitiesMarquee } from "@/components/sections/CapabilitiesMarquee";
import { PinnedProjects } from "@/components/sections/PinnedProjects";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — Header + Hero */}
      <HeroSection />

      {/* SECTION 2 — Services Automatic Swiper.js Slider */}
      <ServicesSlider />

      {/* SECTION 3 — Infinite Marquee Automatic Motion */}
      <CapabilitiesMarquee />

      {/* SECTION 4 — Featured Work / GSAP Pinned Horizontal Scroll */}
      <PinnedProjects />

      {/* SECTION 5 — About NeuroClicks Media */}
      <AboutSection />

      {/* SECTION 6 — Our Process and Technology Strip */}
      <ProcessTimeline />

      {/* SECTION 7 — Final Call to Action */}
      <FinalCTA />
    </>
  );
}
