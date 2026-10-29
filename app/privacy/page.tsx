import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/ui/Container";
import { Breadcrumbs } from "@/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and client data handling commitments for NeuroClicks IT Solutions.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 bg-dark-900 text-white min-h-screen">
      <section className="py-16 md:py-24 border-b border-border-subtle">
        <Container size="narrow">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} className="mb-8" />

          <div className="space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-dark-400 block">
              [ LEGAL & COMPLIANCE ]
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs font-mono text-dark-400">
              Last updated: January 2026 &bull; Status: Active Policy
            </p>
          </div>

          <div className="rounded-2xl border border-border-default bg-dark-850 p-8 sm:p-10 space-y-8 text-sm sm:text-base text-dark-300 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-display font-bold text-white">
                1. Data Confidentiality & Non-Disclosure
              </h2>
              <p>
                At {siteConfig.name}, we treat all client inquiries, architecture blueprints, proprietary codebases, and business data with the strictest standards of enterprise confidentiality. We sign mutual Non-Disclosure Agreements (NDAs) prior to accessing any client repository or staging server.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-bold text-white">
                2. Information Collected via Website Inquiries
              </h2>
              <p>
                When you submit an inquiry through our contact form, we collect your name, work email, company name, phone number (optional), and project description solely for the purpose of scheduling technical consultations and providing project estimates. We never sell, lease, or distribute contact information to third-party marketing brokers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-bold text-white">
                3. Codebase & Intellectual Property Ownership
              </h2>
              <p>
                All software, documentation, architecture diagrams, and database schemas created for client engagements become the exclusive intellectual property of the client upon milestone settlement. We do not retain proprietary rights to client source code.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-bold text-white">
                4. Cookies and Telemetry
              </h2>
              <p>
                This website uses minimal essential session cookies to preserve user navigation preferences and performance metrics. We do not run intrusive behavioral tracking pixels.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-bold text-white">
                5. Contacting Our Data Controller
              </h2>
              <p>
                For data privacy requests or to execute a mutual NDA prior to sharing proprietary specifications, please reach out directly to:
              </p>
              <p className="font-mono text-xs text-white bg-dark-900 p-3.5 rounded-xl border border-border-subtle">
                Email: {siteConfig.contact.email} &bull; Attention: Legal & Privacy Operations
              </p>
            </section>
          </div>
        </Container>
      </section>
    </div>
  );
}
