export interface TechCategory {
  title: string;
  categoryCode: string;
  description: string;
  technologies: {
    name: string;
    description: string;
    useCase: string;
    level: string;
  }[];
}

export const techCapabilities: TechCategory[] = [
  {
    title: "Frontend Engineering",
    categoryCode: "01",
    description: "Modern web architectures prioritized for sub-second rendering, type safety, and rich user interactions.",
    technologies: [
      {
        name: "Next.js",
        description: "App Router, Server Components, streaming SSR, and edge API routes.",
        useCase: "Production web applications & digital flagships",
        level: "Primary Framework",
      },
      {
        name: "React",
        description: "Component-driven user interfaces with predictable state lifecycle management.",
        useCase: "Complex dashboards & interactive portals",
        level: "Core Capability",
      },
      {
        name: "TypeScript",
        description: "Strict compile-time type safety preventing runtime regressions across large codebases.",
        useCase: "Universal client-server contracts",
        level: "Standard Protocol",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first design tokens with zero runtime overhead and tight responsive control.",
        useCase: "Design systems & accessible styling",
        level: "Core Styling Engine",
      },
    ],
  },
  {
    title: "Backend & Systems",
    categoryCode: "02",
    description: "Modular, high-throughput backend services and clean API contracts engineered for durability.",
    technologies: [
      {
        name: "Node.js",
        description: "Asynchronous, event-driven runtime ideal for low-latency I/O operations and microservices.",
        useCase: "API gateways & real-time backends",
        level: "Primary Backend",
      },
      {
        name: "Python",
        description: "Clean syntax with extensive libraries for data pipelines, AI modeling, and automation.",
        useCase: "Data engineering & AI services",
        level: "Data & ML Stack",
      },
      {
        name: "REST APIs",
        description: "Strict OpenAPI 3.0 standardized endpoints with idempotent verbs and structured errors.",
        useCase: "Third-party & internal integrations",
        level: "Integration Protocol",
      },
    ],
  },
  {
    title: "Database Architecture",
    categoryCode: "03",
    description: "Relational integrity, ACID compliance, and low-latency storage strategies suited to business domain needs.",
    technologies: [
      {
        name: "PostgreSQL",
        description: "Robust open-source relational database with advanced JSONB, RLS, and indexing capabilities.",
        useCase: "Core enterprise transactional data",
        level: "Primary Relational DB",
      },
      {
        name: "MySQL",
        description: "Proven relational engine optimized for read-heavy transactional web applications.",
        useCase: "Legacy modernization & commerce",
        level: "Supported Relational DB",
      },
      {
        name: "MongoDB",
        description: "Flexible document-oriented database for rapidly evolving schemas and unstructured logs.",
        useCase: "Content catalogs & telemetry",
        level: "Document Store",
      },
    ],
  },
  {
    title: "Infrastructure & DevOps",
    categoryCode: "04",
    description: "Automated deployment pipelines, reproducible environments, and resilient cloud architectures.",
    technologies: [
      {
        name: "AWS",
        description: "Comprehensive cloud services including ECS, RDS, S3, CloudFront, and Lambda.",
        useCase: "Scalable enterprise cloud hosting",
        level: "Primary Cloud Platform",
      },
      {
        name: "Docker",
        description: "Containerization guaranteeing environment parity between developer machines and production.",
        useCase: "Microservices & container isolation",
        level: "Standard Packaging",
      },
      {
        name: "CI/CD",
        description: "Automated test, lint, build, and zero-downtime release pipelines via GitHub Actions.",
        useCase: "Automated release engineering",
        level: "Continuous Deployment",
      },
    ],
  },
  {
    title: "Mobile Platforms",
    categoryCode: "05",
    description: "Native handheld application experiences optimized for battery life, offline resilience, and touch ergonomics.",
    technologies: [
      {
        name: "React Native",
        description: "Unified cross-platform framework delivering native performance across iOS and Android.",
        useCase: "Enterprise & field workforce apps",
        level: "Primary Mobile Framework",
      },
    ],
  },
];
