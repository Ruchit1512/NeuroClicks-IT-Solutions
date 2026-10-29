export interface ProcessStage {
  number: string;
  phase: string;
  title: string;
  description: string;
  keyActivities: string[];
  outputs: string[];
  durationEstimate: string;
}

export const processStages: ProcessStage[] = [
  {
    number: "01",
    phase: "Discover",
    title: "Understanding business goals, users, and constraints.",
    description:
      "We begin by unpacking how your business actually operates. We interview key stakeholders, analyze your existing tools and data models, identify bottlenecks, and clarify real technical and operational constraints.",
    keyActivities: [
      "Executive stakeholder alignment & objective setting",
      "End-user workflow shadowing and pain point mapping",
      "Legacy codebase & data schema technical audit",
      "Security, compliance, and integration boundary discovery",
    ],
    outputs: [
      "Technical Discovery Document",
      "Domain entity relationship model",
      "Risk assessment matrix",
      "Target milestone roadmap",
    ],
    durationEstimate: "Week 1 – 2",
  },
  {
    number: "02",
    phase: "Define & Design",
    title: "Planning the solution, architecture, and user experience.",
    description:
      "We translate operational needs into technical blueprints and interactive interfaces. We map data flows, design database schemas, and create design systems in Figma with real-time feedback loops.",
    keyActivities: [
      "Database schema normalization and API contract design",
      "High-fidelity Figma wireframes and tokenized UI design system",
      "Cloud infrastructure topology blueprinting (AWS / GCP)",
      "Interactive clickable prototypes for early user validation",
    ],
    outputs: [
      "Figma design system with developer tokens",
      "API schema contracts (OpenAPI / GraphQL)",
      "Database ERD & architectural specification",
      "Agile sprint backlog and acceptance criteria",
    ],
    durationEstimate: "Week 2 – 4",
  },
  {
    number: "03",
    phase: "Build & Validate",
    title: "Developing the product and testing critical flows.",
    description:
      "We engineer the solution in two-week agile sprints. Every commit is tested, typed, and reviewed. You get access to living staging environments where you can test features as they are built, not months later.",
    keyActivities: [
      "Full-stack development in modular, type-safe TypeScript/Node",
      "Automated unit, integration, and Playwright E2E testing",
      "Bi-weekly sprint demos on live staging environments",
      "Database performance profiling and security vulnerability audits",
    ],
    outputs: [
      "Production-ready, documented source code",
      "Automated CI/CD deployment pipelines",
      "Comprehensive automated test suites",
      "Sprint demo recordings and sprint logs",
    ],
    durationEstimate: "Week 4 – 12",
  },
  {
    number: "04",
    phase: "Launch & Evolve",
    title: "Deploying the solution and supporting future improvements.",
    description:
      "We execute a zero-downtime production launch with comprehensive monitoring and telemetry. Post-launch, we provide active observation, team training runbooks, and ongoing iterative feature support.",
    keyActivities: [
      "Production DNS cutover and zero-downtime deployment",
      "Real-time telemetry, error alerting, and log aggregation",
      "Team handover workshops, admin runbooks, and video walkthroughs",
      "Structured ongoing maintenance SLAs and feature iterations",
    ],
    outputs: [
      "Live production environment with auto-scaling",
      "Operational runbooks & disaster recovery protocols",
      "Full IP & repository access transfer",
      "Post-launch telemetry and performance baseline report",
    ],
    durationEstimate: "Ongoing & Evolution",
  },
];
