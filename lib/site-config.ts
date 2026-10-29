export const siteConfig = {
  name: "NeuroClicks Media",
  shortName: "NeuroClicks",
  wordmark: "NEUROCLICKS MEDIA",
  brandLabel: "IT SOLUTIONS",
  tagline: "Technology That Moves Your Business Forward.",
  description:
    "We design and build custom software, digital products, websites, and intelligent business systems that help companies work smarter and grow faster.",
  url: "https://neuroclicksmedia.com",
  ogImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  foundedYear: 2021,
  location: {
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    address: "Tower 4, Equinox Business Park, LBS Marg, Kurla West, Mumbai 400070, India",
    region: "Maharashtra",
    coordinates: "19.0688° N, 72.8703° E",
  },
  contact: {
    email: "neuroclicksmedia@gmail.com",
    inquiriesEmail: "neuroclicksmedia@gmail.com",
    careersEmail: "neuroclicksmedia@gmail.com",
    phone: "+919343204997",
    phoneDisplay: "+91 93432 04997",
    hours: "Monday to Friday: 9:00 AM – 7:00 PM IST (Global overlap with US & EU business hours)",
    responseTime: "We reply within 1 business day — direct technical conversations with engineering leads.",
  },
  social: [
    { name: "LinkedIn", href: "https://linkedin.com/company/neuroclicks-media", handle: "@neuroclicks-media" },
    { name: "GitHub", href: "https://github.com/neuroclicks-media", handle: "@neuroclicks" },
    { name: "Twitter / X", href: "https://x.com/neuroclicksmedia", handle: "@neuroclicksmedia" },
  ],
  stats: [
    { label: "Production Platforms", value: "90+" },
    { label: "Core Availability", value: "99.98%" },
    { label: "Client IP Ownership", value: "100%" },
    { label: "Sprint Cadence", value: "2 Weeks" },
  ],
  navLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ],
  availability: "Available for select Q1/Q2 enterprise discovery",
};

export type SiteConfig = typeof siteConfig;
