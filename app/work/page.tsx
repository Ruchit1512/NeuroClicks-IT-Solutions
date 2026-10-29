import React from "react";
import type { Metadata } from "next";
import { WorkClient } from "@/components/work/WorkClient";

export const metadata: Metadata = {
  title: "Selected Work — Concept Projects & Case Studies | NeuroClicks Media",
  description:
    "Explore our technical concept case studies across e-commerce platforms (Shopora), custom CRM systems (NeuroCRM), and business SaaS applications (GrowSuite).",
};

export default function WorkPage() {
  return <WorkClient />;
}
