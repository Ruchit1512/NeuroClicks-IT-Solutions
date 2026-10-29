import React from "react";
import type { Metadata } from "next";
import { AboutClient } from "@/components/about/AboutClient";

export const metadata: Metadata = {
  title: "About Us — Engineering Philosophy & Team | NeuroClicks Media",
  description:
    "We partner with businesses to design, develop, and maintain software that fits their workflows, supports their teams, and adapts as they grow.",
};

export default function AboutPage() {
  return <AboutClient />;
}
