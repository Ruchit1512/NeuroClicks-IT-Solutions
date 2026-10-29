import React from "react";
import type { Metadata } from "next";
import { ServicesClient } from "@/components/services/ServicesClient";

export const metadata: Metadata = {
  title: "All Services & Capabilities — IT Solutions Directory | NeuroClicks Media",
  description:
    "Explore our complete IT solutions and software development services: custom software, CRM/ERP platforms, web apps, mobile apps, e-commerce, AI automation, and cloud engineering.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
