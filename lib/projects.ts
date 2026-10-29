export interface ProjectFeature {
  title: string;
  description?: string;
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  industry: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  technologies: string[];
  isConcept: boolean;
  accentColor: string;
  stats: { label: string; value: string }[];
  uiMockup: {
    browserUrl: string;
    badgeLabel: string;
    heroMetric: { label: string; value: string; detail?: string };
    interfaceHighlights: string[];
    subPreviewLabel?: string;
  };
}

export const projectsData: Project[] = [
  // Project 01 — E-commerce Platform
  {
    id: "shopora",
    slug: "shopora",
    number: "01",
    title: "Shopora",
    category: "E-commerce Development",
    industry: "High-Growth Digital Retail & Storefront Systems",
    description:
      "A modern e-commerce platform designed to deliver a seamless shopping experience, simplify product management, and help businesses sell online.",
    features: [
      "Premium product listing and detail pages",
      "Product categories and search",
      "Shopping cart and checkout UI",
      "Product management dashboard",
      "Sales and order analytics",
    ],
    image: "/images/projects/shopora-ecommerce.webp",
    imageAlt: "Shopora modern e-commerce storefront and digital retail interface",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    isConcept: true,
    accentColor: "#405ECC",
    stats: [
      { label: "Checkout Conversion", value: "4.8%" },
      { label: "Catalog Filter Latency", value: "< 35ms" },
      { label: "Mobile Cart Drop", value: "-34%" },
    ],
    uiMockup: {
      browserUrl: "shopora.store/collections/spring-curated",
      badgeLabel: "STOREFRONT + ADMIN",
      heroMetric: {
        label: "Real-Time Cart Value",
        value: "$14,920.00",
        detail: "99.99% payment gateway uptime",
      },
      interfaceHighlights: [
        "Faceted instant category search with autocomplete",
        "Streamlined one-page checkout with Apple Pay & card tokens",
        "Backoffice inventory sync across multi-warehouse channels",
      ],
      subPreviewLabel: "Responsive Mobile Storefront Included",
    },
  },

  // Project 02 — CRM Software
  {
    id: "neurocrm",
    slug: "neurocrm",
    number: "02",
    title: "NeuroCRM",
    category: "Custom CRM Development",
    industry: "Enterprise Sales Intelligence & Pipeline Management",
    description:
      "A centralized CRM platform that helps teams manage leads, organize customer relationships, monitor sales pipelines, and track business performance.",
    features: [
      "Sales pipeline dashboard",
      "Lead and customer management",
      "Follow-up and task tracking",
      "Revenue and conversion charts",
      "Customer activity timeline",
    ],
    image: "/images/projects/neurocrm-dashboard.webp",
    imageAlt: "NeuroCRM centralized sales pipeline dashboard and customer management interface",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    isConcept: true,
    accentColor: "#3B82F6",
    stats: [
      { label: "Deal Velocity Gain", value: "+42%" },
      { label: "Daily Rep Adoption", value: "98.2%" },
      { label: "Pipeline Visibility", value: "Real-Time" },
    ],
    uiMockup: {
      browserUrl: "neurocrm.internal.app/pipeline/active-deals",
      badgeLabel: "SALES COMMAND CENTER",
      heroMetric: {
        label: "Weighted Active Pipeline",
        value: "$3.84M",
        detail: "+28.4% conversion this quarter",
      },
      interfaceHighlights: [
        "Interactive drag-and-drop opportunity stages with win probability",
        "Unified customer activity timeline across email, calls, and notes",
        "Automated follow-up queue with smart SLA expiration alerts",
      ],
      subPreviewLabel: "Custom Customer Timeline & Reports",
    },
  },

  // Project 03 — Business Website + SaaS Application
  {
    id: "growsuite",
    slug: "growsuite",
    number: "03",
    title: "GrowSuite",
    category: "Business Website & SaaS Product",
    industry: "Complete Platform: Public Marketing + Cloud Application",
    description:
      "A complete digital platform combining a professional business website with a SaaS application for managing customers, tracking performance, and simplifying daily operations.",
    features: [
      "Premium business landing page",
      "SaaS application dashboard",
      "User authentication interface",
      "Subscription and account management UI",
      "Reports, analytics, and workflow management",
    ],
    image: "/images/projects/growsuite-website-saas.webp",
    imageAlt: "GrowSuite connected business website and functional SaaS software product dashboard",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    isConcept: true,
    accentColor: "#38A8B0",
    stats: [
      { label: "Platform Signups", value: "12.4k" },
      { label: "Onboarding Flow", value: "94% Complete" },
      { label: "Monthly Recurring", value: "$64.8k" },
    ],
    uiMockup: {
      browserUrl: "growsuite.io/platform/overview",
      badgeLabel: "WEBSITE + SAAS ENGINE",
      heroMetric: {
        label: "Active Workspaces",
        value: "2,480",
        detail: "Unified marketing & app ecosystem",
      },
      interfaceHighlights: [
        "Conversion-optimized marketing landing page with custom demo tours",
        "Multi-tenant SaaS dashboard for workspace and team member control",
        "Role-based authentication with self-serve billing and plan tiers",
      ],
      subPreviewLabel: "Marketing Website + Operating Application",
    },
  },
];
