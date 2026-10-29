export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceApproachStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  category: ServiceCategoryGroup;
  iconName: string;
  isPrimary: boolean;
  image: string;
  heroSubtitle: string;
  problemStatement: string;
  overview: string;
  deliverables: string[];
  features: { title: string; description: string }[];
  industries: string[];
  approach: ServiceApproachStep[];
  techCapabilities: string[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
}

export type ServiceCategoryGroup =
  | "Software Engineering"
  | "Web and Mobile Development"
  | "Business Systems"
  | "AI, Cloud, and Infrastructure";

export const serviceCategoryGroups: {
  id: string;
  name: ServiceCategoryGroup;
  code: string;
  description: string;
  slugs: string[];
}[] = [
  {
    id: "software-engineering",
    name: "Software Engineering",
    code: "01",
    description: "Bespoke backend architectures, scalable SaaS engines, and legacy system modernization built for longevity.",
    slugs: ["custom-software-development", "saas-product-development", "maintenance-modernization"],
  },
  {
    id: "web-mobile",
    name: "Web and Mobile Development",
    code: "02",
    description: "High-performance web applications, responsive digital storefronts, cross-platform mobile apps, and refined UI/UX design.",
    slugs: [
      "website-web-application-development",
      "mobile-app-development",
      "ecommerce-development",
      "ui-ux-design",
    ],
  },
  {
    id: "business-systems",
    name: "Business Systems",
    code: "03",
    description: "Tailored CRM and ERP platforms, automated workflows, and enterprise API integrations configured for your team.",
    slugs: ["crm-erp-solutions", "api-integrations"],
  },
  {
    id: "ai-cloud",
    name: "AI, Cloud, and Infrastructure",
    code: "04",
    description: "Intelligent automation, production machine learning pipelines, cloud DevOps, and automated quality engineering.",
    slugs: ["ai-integration-business-automation", "cloud-devops", "software-testing-qa"],
  },
];

export const servicesData: ServiceDetail[] = [
  // 1. Custom Software Development (Primary 1)
  {
    id: "custom-software-development",
    slug: "custom-software-development",
    number: "01",
    title: "Custom Software Development",
    shortDescription:
      "Bespoke software systems engineered to solve operational bottlenecks, automate workflows, and power proprietary business logic.",
    category: "Software Engineering",
    iconName: "Code2",
    isPrimary: true,
    image: "/images/services/custom-software.webp",
    heroSubtitle:
      "Purpose-built software systems with clean domain architecture, high reliability, and zero licensing bloat.",
    problemStatement:
      "Off-the-shelf software forces businesses to contort their operating processes into rigid, pre-packaged workflows. As your team grows, you end up juggling brittle spreadsheets, disconnected tools, and rising subscription fees without truly owning your technology.",
    overview:
      "NeuroClicks Media builds tailored software applications from the ground up, designed specifically around your operational structure, team permissions, and long-term business goals. Every line of code is written for maintainability, security, and scalability.",
    deliverables: [
      "Full-stack proprietary application architecture",
      "Role-based access control (RBAC) and audit logging",
      "Automated CI/CD deployment pipelines",
      "Comprehensive API documentation and schema specifications",
      "Source code ownership with zero vendor lock-in",
      "Post-launch telemetry and operational runbooks",
    ],
    features: [
      {
        title: "Domain-Driven Design",
        description: "Software modeled accurately after your actual business entities and operational rules.",
      },
      {
        title: "Modular Monoliths & Microservices",
        description: "Architectural choices driven by realistic scale, keeping maintenance overhead lean.",
      },
      {
        title: "Enterprise-Grade Security",
        description: "Built-in data encryption at rest and in transit, OWASP compliance, and granular permissions.",
      },
      {
        title: "Long-Term Maintainability",
        description: "Clean TypeScript/Node or Python codebases with high test coverage and transparent documentation.",
      },
    ],
    industries: ["Logistics & Fleet Management", "Fintech & Wealth", "Healthcare Operations", "B2B Professional Services"],
    approach: [
      { step: "01", title: "Domain Mapping", description: "Deep-dive workshops to outline your business domain, data flows, and pain points." },
      { step: "02", title: "Technical Blueprint", description: "Data modeling, API schema definitions, and cloud architecture blueprinting." },
      { step: "03", title: "Iterative Sprints", description: "Two-week agile delivery cycles with demonstrable progress and continuous testing." },
      { step: "04", title: "Hardening & Handover", description: "Load testing, penetration auditing, staging dry-runs, and seamless deployment." },
    ],
    techCapabilities: ["TypeScript", "Node.js", "Python", "Go", "PostgreSQL", "Redis", "Docker", "AWS"],
    faqs: [
      {
        question: "How do we decide between custom software and off-the-shelf SaaS?",
        answer: "If your workflow represents your unique competitive advantage or off-the-shelf tools require constant manual workarounds and expensive per-seat licenses, custom software provides vastly better ROI and proprietary enterprise value.",
      },
      {
        question: "Do we retain full intellectual property of the source code?",
        answer: "Yes, 100%. Upon project milestone completion, all source code, architecture diagrams, deployment keys, and documentation are entirely your property.",
      },
      {
        question: "How do you handle post-launch maintenance and updates?",
        answer: "We offer structured Service Level Agreements (SLAs) covering active monitoring, security patches, library upgrades, and ongoing feature sprints.",
      },
    ],
    relatedSlugs: ["saas-product-development", "maintenance-modernization", "cloud-devops"],
  },

  // 2. CRM & ERP Solutions (Primary 2)
  {
    id: "crm-erp-solutions",
    slug: "crm-erp-solutions",
    number: "02",
    title: "CRM & ERP Solutions",
    shortDescription:
      "Centralized customer relationship and enterprise resource planning platforms tailored to your sales cycles and operational rhythms.",
    category: "Business Systems",
    iconName: "Users",
    isPrimary: true,
    image: "/images/services/crm-erp.webp",
    heroSubtitle:
      "Empower your sales, account management, and resource planning teams with unified business systems that mirror your exact workflows.",
    problemStatement:
      "Generic commercial CRMs and ERPs are either bloated with hundreds of unused menu items or too rigid for dynamic operations. Teams waste countless hours manually copying invoice numbers, tracking inventory statuses, and updating spreadsheets.",
    overview:
      "We design and build bespoke CRM and ERP platforms, or integrate and extend existing systems, to unify client pipelines, resource allocation, invoice tracking, and interdepartmental approvals into a single, intuitive interface.",
    deliverables: [
      "Custom multi-stage sales pipeline and opportunity boards",
      "Unified customer and contact interaction timelines",
      "Automated inventory, purchase order, and invoice tracking",
      "Cross-departmental approval workflows and notification routing",
      "Executive business intelligence and cashflow dashboards",
      "Granular permission matrices and data masking",
    ],
    features: [
      {
        title: "Interactive Pipeline Boards",
        description: "Fluid drag-and-drop opportunity tracking with real-time probability recalculation and velocity alerts.",
      },
      {
        title: "Unified Customer Histories",
        description: "Consolidate emails, invoices, support tickets, and contracts into one chronological view.",
      },
      {
        title: "Real-Time Resource Tracking",
        description: "Track inventory, staffing, billable hours, and project margins with zero spreadsheet friction.",
      },
      {
        title: "Automated Document Workflows",
        description: "Generate compliant quotes, purchase orders, and PDF invoices with one-click approval trails.",
      },
    ],
    industries: ["Manufacturing & Distribution", "Wholesale Trading", "Real Estate Asset Management", "Professional Services"],
    approach: [
      { step: "01", title: "Workflow Audit", description: "Mapping every operational step from inbound lead to order fulfillment and invoicing." },
      { step: "02", title: "Data Architecture", description: "Configuring relational schemas, approval rules, and audit logging parameters." },
      { step: "03", title: "Core Development", description: "Building responsive web interfaces, automated calculation engines, and sync workers." },
      { step: "04", title: "Training & Cutover", description: "Interactive team training, phased data cutover, and real-time operational monitoring." },
    ],
    techCapabilities: ["React", "Next.js", "Node.js", "PostgreSQL", "Prisma", "Redis", "SendGrid", "Tailwind CSS"],
    faqs: [
      {
        question: "Can you migrate data from our current spreadsheets and old CRM?",
        answer: "Yes. We perform structured data cleansing, deduplication, schema normalization, and automated migration scripts with zero business disruption.",
      },
      {
        question: "Can this ERP integrate with our existing accounting software?",
        answer: "Yes, we build secure two-way integrations with platforms like QuickBooks, Xero, Tally, and custom banking APIs.",
      },
      {
        question: "How long does a custom CRM or ERP implementation take?",
        answer: "Initial functioning modules are typically live in production within 6 to 8 weeks, with iterative feature rollouts every two weeks thereafter.",
      },
    ],
    relatedSlugs: ["custom-software-development", "api-integrations", "ai-integration-business-automation"],
  },

  // 3. Website & Web Application Development (Primary 3)
  {
    id: "website-web-application-development",
    slug: "website-web-application-development",
    number: "03",
    title: "Website & Web Application Development",
    shortDescription:
      "Interactive, responsive, and secure web applications built on modern frameworks for high conversion, accessibility, and speed.",
    category: "Web and Mobile Development",
    iconName: "Globe2",
    isPrimary: true,
    image: "/images/services/web-development.webp",
    heroSubtitle:
      "Enterprise web applications and digital platforms combining desktop responsiveness with global web accessibility.",
    problemStatement:
      "Sluggish web applications with poor user experience, laggy state management, and bloated codebases drive users away, reduce conversions, and harm brand authority in competitive markets.",
    overview:
      "We build resilient, server-rendered and single-page web applications using Next.js, React, and TypeScript. We prioritize Core Web Vitals, bulletproof state handling, and intuitive navigation that turns visitors into engaged customers.",
    deliverables: [
      "Responsive Next.js application with App Router architecture",
      "Type-safe API routes and server actions",
      "Optimized client state management and cache hydration",
      "Internationalization (i18n) and accessibility (WCAG AA)",
      "High-speed CDN caching and asset optimization",
      "Comprehensive analytics and conversion tracking integration",
    ],
    features: [
      {
        title: "Sub-Second Page Loads",
        description: "Optimized server rendering, route prefetching, and progressive image hydration.",
      },
      {
        title: "Complex Interactive Workflows",
        description: "Multi-step onboarding wizards, real-time filtering, dynamic calculators, and data visualizations.",
      },
      {
        title: "Flawless Cross-Device Experience",
        description: "Pixel-perfect responsiveness across mobile phones, tablets, laptops, and ultra-wide displays.",
      },
      {
        title: "Modern SEO Architecture",
        description: "Structured JSON-LD schema, dynamic OpenGraph cards, and semantic HTML for search engines.",
      },
    ],
    industries: ["B2B SaaS", "Corporate Portals", "Fintech & Banking", "Media & Publishing"],
    approach: [
      { step: "01", title: "Information Architecture", description: "Auditing user personas, wireframing interaction flows, and defining content hierarchy." },
      { step: "02", title: "Design Systems", description: "Establishing cohesive typography, color tokens, and interactive component libraries." },
      { step: "03", title: "Next.js Build", description: "Developing responsive frontend components with clean TypeScript and modular styling." },
      { step: "04", title: "Performance Audits", description: "Lighthouse 95+ score optimization, cross-browser verification, and global CDN setup." },
    ],
    techCapabilities: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Vercel", "GraphQL", "REST APIs"],
    faqs: [
      {
        question: "Why do you use Next.js App Router for web applications?",
        answer: "Next.js provides hybrid rendering (Server Components, Static Generation, and Streaming SSR), resulting in instant initial loads, zero bundle bloat, and top SEO ranking.",
      },
      {
        question: "Will the web application be easy for our internal team to update?",
        answer: "Yes. We configure intuitive headless CMS platforms (such as Sanity, Strapi, or Contentful) so your marketing team can publish new content without coding.",
      },
      {
        question: "How do you ensure security against web vulnerabilities?",
        answer: "We implement strict Content Security Policies (CSP), parameterized database queries, CSRF tokens, rate limiting, and regular dependency vulnerability scanning.",
      },
    ],
    relatedSlugs: ["mobile-app-development", "ui-ux-design", "ecommerce-development"],
  },

  // 4. Mobile App Development (Primary 4)
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    number: "04",
    title: "Mobile App Development",
    shortDescription:
      "Native and cross-platform iOS and Android mobile apps engineered with 60fps performance, offline resilience, and intuitive touch UX.",
    category: "Web and Mobile Development",
    iconName: "Smartphone",
    isPrimary: true,
    image: "/images/services/mobile-apps.webp",
    heroSubtitle:
      "Engaging mobile experiences designed for speed, intuitive gestures, and seamless mobile-first operations.",
    problemStatement:
      "Users abandon mobile apps that stutter, consume excessive battery, or fail when network connectivity dips. Maintaining two completely separate native codebases often doubles maintenance costs without delivering better outcomes.",
    overview:
      "We build production-grade mobile applications using React Native and Flutter, sharing up to 90% of business logic across iOS and Android while ensuring native performance, secure keychain storage, and fluid 60fps animations.",
    deliverables: [
      "Universal iOS & Android mobile application codebase",
      "App Store & Google Play Store submission management",
      "Push notification architecture via Firebase Cloud Messaging",
      "Offline-first local database caching and background synchronization",
      "Biometric authentication (FaceID, TouchID, Fingerprint)",
      "In-app purchase and mobile subscription integration",
    ],
    features: [
      {
        title: "Native Feel & 60fps Animations",
        description: "Smooth gesture navigation and responsive micro-interactions using native thread execution.",
      },
      {
        title: "Offline-First Reliability",
        description: "Local data persistence ensuring the app functions seamlessly in subways and weak connectivity areas.",
      },
      {
        title: "Hardware Integration",
        description: "Camera scanning, geolocation tracking, Bluetooth, and biometric security integration.",
      },
      {
        title: "Automated Mobile CI/CD",
        description: "Fastlane and cloud build pipelines that deploy test builds automatically to TestFlight and Play Console.",
      },
    ],
    industries: ["Field Service Management", "Health & Wellness", "Consumer Retail", "On-Demand Logistics"],
    approach: [
      { step: "01", title: "Mobile UX Mapping", description: "Designing touch-optimized ergonomic interfaces, bottom sheets, and thumb-zone flows." },
      { step: "02", title: "App Architecture", description: "Configuring state containers, offline SQLite/WatermelonDB storage, and API sync queues." },
      { step: "03", title: "Sprint Releases", description: "Releasing weekly builds through TestFlight and Google Play Internal Testing tracks." },
      { step: "04", title: "Store Submission", description: "Handling app store metadata, compliance checks, privacy disclosures, and public launch." },
    ],
    techCapabilities: ["React Native", "Flutter", "TypeScript", "iOS / Swift", "Android / Kotlin", "Firebase", "SQLite"],
    faqs: [
      {
        question: "Can React Native match native Swift or Kotlin performance?",
        answer: "Yes. With the modern React Native New Architecture (Fabric renderer and TurboModules), UI updates run directly on native threads with zero bridge overhead.",
      },
      {
        question: "Do you help us publish the app to the Apple App Store and Google Play Store?",
        answer: "Yes, we handle the entire submission lifecycle: screenshots, app descriptions, privacy policies, provisioning profiles, and review approval.",
      },
      {
        question: "How do you handle mobile app updates after launch?",
        answer: "We implement Over-The-Air (OTA) updates for quick bug fixes and UI updates without waiting for prolonged app store review cycles.",
      },
    ],
    relatedSlugs: ["website-web-application-development", "ui-ux-design", "custom-software-development"],
  },

  // 5. E-commerce Development (Primary 5)
  {
    id: "ecommerce-development",
    slug: "ecommerce-development",
    number: "05",
    title: "E-commerce Development",
    shortDescription:
      "High-converting digital storefronts, headless commerce architectures, custom checkout flows, and multi-channel inventory sync.",
    category: "Web and Mobile Development",
    iconName: "ShoppingBag",
    isPrimary: true,
    image: "/images/services/ecommerce.webp",
    heroSubtitle:
      "Transform your online sales with high-speed storefronts, frictionless checkout, and synchronized inventory operations.",
    problemStatement:
      "Standard template stores slow down under traffic spikes, exhibit high mobile cart abandonment, and struggle with custom pricing tiers, B2B wholesale rules, or international payment currencies.",
    overview:
      "We engineer modern commerce platforms using headless architectures (Next.js + Medusa, Shopify Plus, or WooCommerce). We build blazing-fast shopping experiences, personalized recommendation engines, and streamlined one-page checkouts.",
    deliverables: [
      "Custom headless or specialized e-commerce storefront",
      "Sub-50ms product catalog search and multi-facet filtering",
      "Optimized one-page checkout with Apple Pay, Google Pay, and UPI",
      "Multi-currency, localized tax, and shipping calculation engine",
      "Centralized ERP/warehouse inventory synchronization",
      "Automated abandoned cart recovery workflows",
    ],
    features: [
      {
        title: "Instant Product Discovery",
        description: "Zero-latency search with instant autocomplete, category filters, and live stock availability.",
      },
      {
        title: "Frictionless Checkout",
        description: "Streamlined checkout reducing form fields to the absolute minimum to maximize conversion rates.",
      },
      {
        title: "B2B & B2C Capabilities",
        description: "Custom volume tier pricing, bulk purchasing, Net-30 invoicing, and consumer retail in one portal.",
      },
      {
        title: "Omnichannel Sync",
        description: "Keep inventory, orders, and customer profiles in sync across online channels and physical retail POS.",
      },
    ],
    industries: ["D2C Lifestyle Brands", "B2B Wholesale & Industrial", "Specialty Food & Beverage", "Luxury Goods"],
    approach: [
      { step: "01", title: "Merchandising Audit", description: "Catalog structure analysis, variant modeling, and payment gateway requirements." },
      { step: "02", title: "Storefront UX", description: "Designing high-conversion product pages, trust badges, cart drawers, and checkout funnels." },
      { step: "03", title: "Commerce Integration", description: "Connecting payment gateways, shipping webhooks, inventory trackers, and marketing tools." },
      { step: "04", title: "Stress & Load Testing", description: "Simulating peak flash sales to guarantee 100% uptime and sub-second response times." },
    ],
    techCapabilities: ["Next.js", "Shopify Storefront API", "Medusa.js", "Stripe", "Algolia", "Tailwind CSS", "Redis"],
    faqs: [
      {
        question: "What is headless commerce and why should we consider it?",
        answer: "Headless commerce decouples the frontend display from the backend commerce engine. This enables sub-second page loads, completely customized checkout designs, and freedom from template constraints.",
      },
      {
        question: "Can we support international customers with local currencies and languages?",
        answer: "Yes. We configure multi-currency billing, localized tax rates, international shipping rules, and multi-language routing.",
      },
      {
        question: "Which payment gateways do you support?",
        answer: "We support Stripe, Razorpay, PayPal, Apple Pay, Google Pay, Klarna, Authorize.Net, and local enterprise payment gateways.",
      },
    ],
    relatedSlugs: ["website-web-application-development", "custom-software-development", "api-integrations"],
  },

  // 6. AI Integration & Business Automation (Primary 6)
  {
    id: "ai-integration-business-automation",
    slug: "ai-integration-business-automation",
    number: "06",
    title: "AI Integration & Business Automation",
    shortDescription:
      "Intelligent LLM integration, automated document processing, conversational assistants, and operational event-driven workflows.",
    category: "AI, Cloud, and Infrastructure",
    iconName: "Cpu",
    isPrimary: true,
    image: "/images/services/ai-automation.webp",
    heroSubtitle:
      "Deploy practical AI systems and autonomous workflows that eliminate repetitive human overhead and accelerate decisions.",
    problemStatement:
      "Companies drown in repetitive data entry, unindexed documentation, and slow customer support response times, while generic AI chatbots produce hallucinations and fail to connect with real company databases.",
    overview:
      "We design and integrate proprietary AI automation workflows. From private Retrieval-Augmented Generation (RAG) knowledge systems to automated invoice OCR pipelines and intelligent event triggers, we turn AI into a measurable business asset.",
    deliverables: [
      "Custom RAG pipeline connecting company documents with internal LLMs",
      "Intelligent document classification, OCR extraction, and validation",
      "Domain-specific customer support and internal helpdesk agents",
      "Automated event-driven workflow automation queues",
      "Data privacy sanitization layer preventing confidential data leaks",
      "Executive telemetry tracking AI accuracy, latency, and cost per token",
    ],
    features: [
      {
        title: "Grounded Enterprise Knowledge",
        description: "Vector database search that ensures answers are strictly verified against internal documentation.",
      },
      {
        title: "Intelligent Document Ingestion",
        description: "Extract structured JSON from PDFs, scanned contracts, receipts, and invoices with 99%+ accuracy.",
      },
      {
        title: "Deterministic Fallbacks",
        description: "Hybrid AI systems combining probabilistic language models with strict deterministic validation rules.",
      },
      {
        title: "Private & Secure Architecture",
        description: "Zero data retention agreements and self-hosted open models ensuring sensitive company data stays private.",
      },
    ],
    industries: ["Legal & Compliance", "Healthcare Administration", "Logistics & Supply Chain", "Customer Service Centers"],
    approach: [
      { step: "01", title: "Feasibility Assessment", description: "Identifying high-friction manual bottlenecks where AI delivers immediate ROI." },
      { step: "02", title: "Vector & Prompt Design", description: "Chunking domain data, benchmarking embeddings, and authoring rigorous system prompts." },
      { step: "03", title: "Pipeline Development", description: "Connecting APIs, fallback logic, rate limiters, and human-in-the-loop validation tools." },
      { step: "04", title: "Evaluation & Tuning", description: "Running automated evaluation suites against gold-standard test datasets." },
    ],
    techCapabilities: ["Python", "LangChain", "OpenAI API", "Anthropic Claude", "Pinecone", "pgvector", "FastAPI", "Docker"],
    faqs: [
      {
        question: "How do you prevent AI models from hallucinating false information?",
        answer: "We use Retrieval-Augmented Generation (RAG) with strict semantic constraints, citations, and deterministic validation guardrails that decline to answer if confidence thresholds are not met.",
      },
      {
        question: "Is our proprietary company data used to train public AI models?",
        answer: "Never. We use enterprise zero-data-retention APIs and self-hosted private models where customer data is never stored or used for retraining.",
      },
      {
        question: "Can AI connect to our existing ERP or database to take real actions?",
        answer: "Yes, via function calling and secure tool calling protocols with strict permission checks and rollback capabilities.",
      },
    ],
    relatedSlugs: ["custom-software-development", "crm-erp-solutions", "cloud-devops"],
  },

  // 7. SaaS Product Development
  {
    id: "saas-product-development",
    slug: "saas-product-development",
    number: "07",
    title: "SaaS Product Development",
    shortDescription:
      "End-to-end engineering for software-as-a-service products: multi-tenant architecture, billing tiers, authentication, and telemetry.",
    category: "Software Engineering",
    iconName: "Layers",
    isPrimary: false,
    image: "/images/services/saas-product.webp",
    heroSubtitle:
      "From MVP validation to multi-tenant enterprise scale: engineering SaaS platforms built to acquire, retain, and scale.",
    problemStatement:
      "Launching a software product requires far more than basic application logic. Founder teams frequently struggle with tenant isolation, tiered usage metering, automated provisioning, and churn reduction.",
    overview:
      "We partner with ambitious startups and corporate ventures to engineer commercial SaaS products from initial architecture to enterprise maturity. We build scalable multi-tenant backends, automated subscription billing, and frictionless self-serve onboarding.",
    deliverables: [
      "Multi-tenant database schema with strict tenant isolation",
      "Stripe Billing integration with metered usage and tier management",
      "Self-serve team workspaces, invitations, and role management",
      "Event-driven customer analytics and product usage telemetry",
      "High-availability cloud deployment with automated scaling policies",
    ],
    features: [
      {
        title: "Tenant Isolation",
        description: "Row-level security and schema-per-tenant isolation preventing data leakage between accounts.",
      },
      {
        title: "Turnkey Billing Engine",
        description: "Support for monthly, annual, seat-based, and usage-metered recurring subscriptions.",
      },
      {
        title: "Enterprise SSO & SCIM",
        description: "SAML 2.0 / Okta integration allowing enterprise customers to log in with their corporate identity.",
      },
    ],
    industries: ["B2B Productivity", "Developer Tools", "HR Tech", "Vertical Industry SaaS"],
    approach: [
      { step: "01", title: "Product Blueprint", description: "Defining core user loops, monetization model, and data boundary requirements." },
      { step: "02", title: "MVP Sprints", description: "Building the core functional differentiator with production-quality code." },
      { step: "03", title: "Growth Instrumentation", description: "Integrating telemetry, onboarding checklists, and conversion tracking." },
    ],
    techCapabilities: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Stripe", "Redis", "Docker", "AWS"],
    faqs: [
      {
        question: "Can you help us build a rapid MVP to pitch investors?",
        answer: "Yes. We focus on your core proprietary feature set, building a polished, production-ready MVP in 6 to 8 weeks.",
      },
    ],
    relatedSlugs: ["custom-software-development", "website-web-application-development", "cloud-devops"],
  },

  // 8. UI/UX Product Design
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    number: "08",
    title: "UI/UX Product Design",
    shortDescription:
      "User research, wireframing, high-fidelity Figma prototypes, and cohesive design systems engineered for complex digital workflows.",
    category: "Web and Mobile Development",
    iconName: "PenTool",
    isPrimary: false,
    image: "/images/services/ui-ux-design.webp",
    heroSubtitle:
      "Turn complex enterprise requirements into intuitive, elegant digital interfaces that users love.",
    problemStatement:
      "Software that is visually cluttered or difficult to navigate frustrates users, drives up support tickets, and increases churn. Beautiful design without functional clarity fails in real-world use.",
    overview:
      "Our design philosophy blends refined aesthetics with deep cognitive ergonomics. We design interfaces for clarity, speed of task completion, and visual satisfaction across web, mobile, and desktop software.",
    deliverables: [
      "Interactive Figma prototypes with comprehensive component libraries",
      "User journey maps, wireframes, and edge-case interaction states",
      "Design tokens (colors, typography, spacing, elevations)",
      "Developer-ready design specs with pixel-perfect handoff documentation",
    ],
    features: [
      {
        title: "Design Systems at Scale",
        description: "Reusable component tokens ensuring visual and functional consistency across entire product suites.",
      },
      {
        title: "Keyboard-First Workflows",
        description: "Ergonomic shortcuts and command palettes designed for high-frequency professional users.",
      },
    ],
    industries: ["Enterprise Software", "Fintech Dashboards", "Consumer Mobile Apps"],
    approach: [
      { step: "01", title: "User Research", description: "Interviews, workflow shadowing, and cognitive friction audits." },
      { step: "02", title: "Interactive Wireframes", description: "Prototyping core task paths and validating with real users." },
      { step: "03", title: "High-Fidelity System", description: "Complete design tokens, micro-interactions, and component states." },
    ],
    techCapabilities: ["Figma", "Design Systems", "Prototyping", "Design Tokens", "Tailwind CSS"],
    faqs: [
      {
        question: "Do you supply Figma files our developers can easily code?",
        answer: "Yes, our designs use auto-layout, named design tokens, and components mapped directly to Tailwind utility classes.",
      },
    ],
    relatedSlugs: ["website-web-application-development", "mobile-app-development"],
  },

  // 9. API Integrations
  {
    id: "api-integrations",
    slug: "api-integrations",
    number: "09",
    title: "API Integrations & Middleware",
    shortDescription:
      "Secure REST and GraphQL API middleware, webhook ingestion pipelines, third-party system connectors, and legacy data bridges.",
    category: "Business Systems",
    iconName: "Share2",
    isPrimary: false,
    image: "/images/services/api-integrations.webp",
    heroSubtitle:
      "Connect your disparate tools and legacy databases with resilient, fault-tolerant integration pipelines.",
    problemStatement:
      "Disconnected business applications create data silos, requiring repetitive manual synchronization that leads to data discrepancies and delayed business reporting.",
    overview:
      "We design and build robust API middleware that connects your internal databases, CRMs, payment gateways, and third-party SaaS tools. We engineer queue-backed ingestion workers with automatic retries and dead-letter handling.",
    deliverables: [
      "Custom REST / GraphQL API middleware and webhook listeners",
      "Asynchronous message queue architecture (RabbitMQ, Kafka, SQS)",
      "Automated payload transformation and data validation filters",
      "OAuth 2.0 / API key authentication and rate-limiting gateways",
    ],
    features: [
      {
        title: "Guaranteed Delivery",
        description: "Queue-backed retry mechanisms ensuring zero dropped webhooks during downstream outages.",
      },
      {
        title: "Bi-Directional Sync",
        description: "Keep records synchronized across multiple third-party systems without data race conditions.",
      },
    ],
    industries: ["Fintech", "Logistics Telematics", "Multi-Store Retail", "Insurance Data Exchanges"],
    approach: [
      { step: "01", title: "Endpoint Mapping", description: "Documenting source and destination schemas, rate limits, and authentication protocols." },
      { step: "02", title: "Middleware Architecture", description: "Building queue processors, schema transformers, and error-handling pipelines." },
      { step: "03", title: "Load Validation", description: "Testing high-throughput webhook bursts and simulating gateway failures." },
    ],
    techCapabilities: ["Node.js", "Python", "FastAPI", "Kafka", "RabbitMQ", "Redis", "Docker"],
    faqs: [
      {
        question: "How do you handle third-party API rate limits and unexpected downtimes?",
        answer: "We use Redis-backed token bucket rate limiters and persistent message queues that buffer requests and retry with exponential backoff.",
      },
    ],
    relatedSlugs: ["custom-software-development", "crm-erp-solutions"],
  },

  // 10. Cloud & DevOps Engineering
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    number: "10",
    title: "Cloud & DevOps Engineering",
    shortDescription:
      "Cloud architecture on AWS and GCP, Docker containerization, Kubernetes orchestration, Infrastructure as Code, and automated CI/CD.",
    category: "AI, Cloud, and Infrastructure",
    iconName: "Cloud",
    isPrimary: false,
    image: "/images/services/cloud-devops.webp",
    heroSubtitle:
      "Reliable cloud infrastructure engineered for 99.98% uptime, zero-downtime deployments, and optimal monthly spend.",
    problemStatement:
      "Unmanaged cloud infrastructure leads to spiraling monthly bills, security vulnerabilities, manual deployment errors, and sudden downtime during peak user traffic.",
    overview:
      "We design, build, and optimize scalable cloud environments on AWS and GCP. Using Infrastructure as Code (Terraform) and automated CI/CD pipelines, we ensure your code ships safely and runs with bulletproof reliability.",
    deliverables: [
      "Reproducible Infrastructure as Code (Terraform / Pulumi)",
      "Automated GitHub Actions CI/CD pipelines with preview environments",
      "Docker containerization and container orchestration",
      "Cloud security hardening (VPC, IAM, secret management, WAF)",
      "Comprehensive telemetry, Prometheus/Grafana dashboards, and alerts",
    ],
    features: [
      {
        title: "Zero-Downtime Deployments",
        description: "Blue-green and rolling release configurations ensuring seamless updates without user disruption.",
      },
      {
        title: "Cost Optimization",
        description: "Right-sizing instances, auto-scaling groups, and caching tiers to reduce cloud bills by 30-50%.",
      },
    ],
    industries: ["SaaS Startups", "E-Commerce", "High-Traffic Content Platforms", "Fintech"],
    approach: [
      { step: "01", title: "Infrastructure Audit", description: "Evaluating existing cloud configurations, security gaps, and cost inefficiencies." },
      { step: "02", title: "IaC Blueprinting", description: "Writing modular Terraform definitions for VPCs, compute clusters, and databases." },
      { step: "03", title: "Pipeline Automation", description: "Automating linting, testing, security scanning, and deployment stages." },
    ],
    techCapabilities: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus"],
    faqs: [
      {
        question: "Can you help us migrate our on-premise servers to AWS or GCP?",
        answer: "Yes, we plan and execute zero-downtime cloud migrations with comprehensive rollback strategies.",
      },
    ],
    relatedSlugs: ["custom-software-development", "software-testing-qa"],
  },

  // 11. Software Testing & QA
  {
    id: "software-testing-qa",
    slug: "software-testing-qa",
    number: "11",
    title: "Software Testing & QA",
    shortDescription:
      "Comprehensive automated testing suites, Playwright E2E testing, API contract verification, load testing, and regression prevention.",
    category: "AI, Cloud, and Infrastructure",
    iconName: "ShieldCheck",
    isPrimary: false,
    image: "/images/services/software-testing.webp",
    heroSubtitle:
      "Prevent bugs, regressions, and security flaws before they ever reach your paying production customers.",
    problemStatement:
      "Manual testing cannot keep pace with rapid development. Undetected regressions cause embarrassing production outages, broken checkout flows, and erosion of customer trust.",
    overview:
      "We design automated testing strategies that give engineering teams the confidence to deploy multiple times a day. We build end-to-end browser test suites, API contract validation, and automated load tests that run on every commit.",
    deliverables: [
      "End-to-End browser test automation with Playwright",
      "API test suites validating status codes, payloads, and response times",
      "Stress and load testing scripts simulating thousands of concurrent users",
      "Automated regression gates integrated directly into GitHub Actions",
    ],
    features: [
      {
        title: "Simulated User Journeys",
        description: "Headless browser tests that automatically verify logins, checkouts, and critical business flows.",
      },
      {
        title: "Continuous Regression Gates",
        description: "Prevent broken code from merging to main with automated test validation.",
      },
    ],
    industries: ["Fintech & Trading", "E-Commerce", "Mission-Critical SaaS"],
    approach: [
      { step: "01", title: "Risk Matrix", description: "Identifying high-value revenue paths and vulnerability zones." },
      { step: "02", title: "Automated Suite Build", description: "Writing robust Playwright and Vitest test fixtures." },
      { step: "03", title: "CI Integration", description: "Running test matrix on every pull request with visual artifacts." },
    ],
    techCapabilities: ["Playwright", "Vitest", "Jest", "k6", "Postman", "GitHub Actions"],
    faqs: [
      {
        question: "Can you write automated tests for an existing codebase without tests?",
        answer: "Yes, we start by wrapping critical user journeys in high-level E2E tests before implementing unit and integration tests.",
      },
    ],
    relatedSlugs: ["custom-software-development", "cloud-devops"],
  },

  // 12. Maintenance & Legacy Modernization
  {
    id: "maintenance-modernization",
    slug: "maintenance-modernization",
    number: "12",
    title: "Maintenance & Legacy Modernization",
    shortDescription:
      "Refactoring legacy monoliths, upgrading outdated frameworks, improving system security, and providing proactive ongoing maintenance.",
    category: "Software Engineering",
    iconName: "Wrench",
    isPrimary: false,
    image: "/images/services/maintenance-modernization.webp",
    heroSubtitle:
      "Breathe new life into aging codebases, eliminate technical debt, and ensure 24/7 operational stability.",
    problemStatement:
      "Aging legacy systems become slow, vulnerable to security exploits, and nearly impossible to modify without introducing catastrophic bugs. Yet rebuilding from scratch is often too risky.",
    overview:
      "We provide targeted legacy modernization and ongoing technical support. Using the strangler fig pattern and progressive refactoring, we upgrade outdated frameworks, optimize performance, and secure your software without operational downtime.",
    deliverables: [
      "Codebase health and technical debt audit",
      "Incremental migration roadmap using the Strangler pattern",
      "Framework upgrades (e.g., PHP/Python/React major version upgrades)",
      "Proactive 24/7 uptime monitoring and vulnerability patching",
    ],
    features: [
      {
        title: "Zero-Downtime Migration",
        description: "Modernize backend components incrementally without interrupting daily business operations.",
      },
      {
        title: "Guaranteed SLA Support",
        description: "Contractual response times for urgent patches, server maintenance, and critical bug fixes.",
      },
    ],
    industries: ["Enterprise Portals", "Government & Education", "Legacy Industrial Systems"],
    approach: [
      { step: "01", title: "Technical Audit", description: "Deep inspection of dependencies, security vulnerabilities, and code complexity." },
      { step: "02", title: "Refactoring Plan", description: "Decomposing monoliths into clean, modular services with automated test boundaries." },
      { step: "03", title: "Ongoing SLAs", description: "Active monitoring, scheduled dependency upgrades, and continuous performance tuning." },
    ],
    techCapabilities: ["TypeScript", "Python", "Docker", "PostgreSQL", "Next.js", "AWS", "Datadog"],
    faqs: [
      {
        question: "Can we modernize our software without rebuilding everything from scratch?",
        answer: "Yes. We specialize in incremental modernization, refactoring critical bottlenecks and modules while keeping your current system operating smoothly.",
      },
    ],
    relatedSlugs: ["custom-software-development", "cloud-devops"],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getPrimaryServices(): ServiceDetail[] {
  return servicesData.filter((s) => s.isPrimary);
}

export function getServicesByCategory(category: ServiceCategoryGroup): ServiceDetail[] {
  return servicesData.filter((s) => s.category === category);
}
