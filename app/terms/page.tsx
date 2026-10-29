import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/ui/Container";
import { Breadcrumbs } from "@/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Engagement",
  description: "Terms of software engineering engagement, milestone deliveries, and warranty terms for NeuroClicks IT Solutions.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-dark-900 text-white min-h-screen">
      <section className="py-16 md:py-24 border-b border-border-subtle">
        <Container size="narrow">
          <Breadcrumbs items={[{ label: "Terms of Engagement" }]} className="mb-8" />

          <div className="space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-dark-400 block">
              [ LEGAL & COMPLIANCE ]
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Terms of Engagement
            </h1>
            <p className="text-xs font-mono text-dark-400">
              Last updated: January 2026 &bull; Master Services Agreement Framework
            </p>
          </div>

          <div className="rounded-2xl border border-border-default bg-dark-850 p-8 sm:p-10 space-y-8 text-sm sm:text-base text-dark-300 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-display font-bold text-white">
                1. Scope of Work & Agile Sprint Commitments
              </h2>
              <p>
                All development engagements are executed under explicit Statements of Work (SOWs) defining milestones, sprint cadence, user acceptance criteria, and technical deliverables. Modifications to scope are documented transparently through mutual sprint planning.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-bold text-white">
                2. Acceptance Criteria & Quality Gates
              </h2>
              <p>
                Each delivery milestone undergoes automated unit testing, end-to-end regression verification, and collaborative staging reviews. Clients have a defined 10-business-day acceptance period to verify functionality against agreed specifications before sprint sign-off.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-bold text-white">
                3. Intellectual Property Assignment
              </h2>
              <p>
                Upon receipt of milestone payments, {siteConfig.name} irrevocably assigns to the client all right, title, and interest in and to the custom deliverables, including source code, database structures, graphics, and documentation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-bold text-white">
                4. Warranty & Post-Launch Support
              </h2>
              <p>
                We provide a standard 30-day post-launch warranty covering any defects or bugs that deviate from the approved functional specifications. Ongoing maintenance, security patches, and cloud scaling retainers are governed under separate Service Level Agreements (SLAs).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-bold text-white">
                5. Jurisdiction & Governance
              </h2>
              <p>
                Engagements are governed by and construed in accordance with the laws of Bengaluru, Karnataka, India, unless mutually specified otherwise in customized international enterprise agreements.
              </p>
            </section>
          </div>
        </Container>
      </section>
    </div>
  );
}
