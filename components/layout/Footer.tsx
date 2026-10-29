import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/ui/Container";
import { Logo } from "@/ui/Logo";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 text-white border-t border-border-default pt-20 pb-12 transition-colors">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-border-default">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <Logo size="lg" />

            <p className="text-dark-300 text-sm leading-relaxed max-w-md pt-2">
              {siteConfig.description}
            </p>

            {/* Direct Contact Placeholders */}
            <div className="space-y-2 pt-2 text-xs font-mono text-dark-300">
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-brand-electric shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-brand-electric shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-brand-electric shrink-0" />
                <span>{siteConfig.location.city}, {siteConfig.location.country}</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-850 border border-border-default text-xs font-mono text-dark-300">
              <span className="h-2 w-2 rounded-full bg-brand-electric animate-pulse" />
              <span>{siteConfig.availability}</span>
            </div>
          </div>

          {/* Quick Links & Services */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-dark-400 block mb-4">
                Navigation
              </span>
              <ul className="space-y-2.5 font-mono text-xs">
                {siteConfig.navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-dark-300 hover:text-brand-electric transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/privacy" className="text-dark-300 hover:text-brand-electric transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-dark-300 hover:text-brand-electric transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1 sm:col-span-2">
              <span className="text-xs font-mono uppercase tracking-widest text-dark-400 block mb-4">
                Practice Disciplines
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 font-mono text-xs">
                <Link
                  href="/services/custom-software-development"
                  className="text-dark-300 hover:text-brand-electric transition-colors flex items-center justify-between group"
                >
                  <span>Custom Software</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="/services/crm-erp-solutions"
                  className="text-dark-300 hover:text-brand-electric transition-colors flex items-center justify-between group"
                >
                  <span>CRM & ERP Solutions</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="/services/website-web-application-development"
                  className="text-dark-300 hover:text-brand-electric transition-colors flex items-center justify-between group"
                >
                  <span>Web Applications</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="/services/mobile-app-development"
                  className="text-dark-300 hover:text-brand-electric transition-colors flex items-center justify-between group"
                >
                  <span>Mobile Applications</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="/services/ecommerce-development"
                  className="text-dark-300 hover:text-brand-electric transition-colors flex items-center justify-between group"
                >
                  <span>E-commerce Platforms</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="/services/ai-integration-business-automation"
                  className="text-dark-300 hover:text-brand-electric transition-colors flex items-center justify-between group"
                >
                  <span>AI & Automation</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-dark-400">
          <div>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            {siteConfig.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-electric transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};
