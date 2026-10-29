import React from "react";
import type { Metadata } from "next";
import { ContactClient } from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Project Inquiries & Architecture Advisory | NeuroClicks Media",
  description:
    "Let's build something useful. Share a little about your business, your idea, or the challenge you're trying to solve. We'll take it from there.",
};

export default function ContactPage() {
  return <ContactClient />;
}
