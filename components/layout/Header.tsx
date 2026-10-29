"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/ui/Button";
import { Container } from "@/ui/Container";
import { Logo } from "@/ui/Logo";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-dark-900/90 backdrop-blur-md border-b border-border-default py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      )}
    >
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-dark-850/85 border border-border-default backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-200",
                    isActive
                      ? "bg-brand-blue text-white font-semibold shadow-sm"
                      : "text-dark-300 hover:text-white hover:bg-dark-800"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 px-3.5 py-1 rounded-full border border-border-default bg-dark-850/60 text-xs font-mono text-dark-300">
              <span className="h-2 w-2 rounded-full bg-brand-electric animate-pulse" />
              <span>Available for Select Projects</span>
            </div>

            <Button href="/contact" variant="primary" size="sm" withArrow arrowDirection="up-right">
              Start a Project
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden p-2 rounded-xl text-dark-200 hover:text-white hover:bg-dark-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bottom-0 bg-dark-950/98 backdrop-blur-xl border-t border-border-default p-6 flex flex-col justify-between z-50">
          <div className="space-y-6">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "block py-3.5 text-2xl font-display font-bold border-b border-border-default tracking-tight",
                    pathname === link.href ? "text-brand-electric" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="p-4 rounded-xl border border-border-default bg-dark-850 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-electric">
                <span className="h-2 w-2 rounded-full bg-brand-electric animate-pulse" />
                <span>SYSTEM ONLINE &bull; {siteConfig.location.city}, {siteConfig.location.country}</span>
              </div>
              <p className="text-xs text-dark-300">
                Custom software, intelligent business systems, web applications, and mobile digital products built for scale.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-border-default space-y-3">
            <Button href="/contact" variant="primary" size="lg" className="w-full" withArrow>
              Start a Project
            </Button>
            <div className="text-center text-xs font-mono text-dark-300">
              {siteConfig.contact.email}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
