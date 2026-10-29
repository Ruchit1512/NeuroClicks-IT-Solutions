export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  industry: string;
  projectScope: string;
  avatarInitials: string;
}

export const sampleTestimonials: Testimonial[] = [
  {
    id: "sample-1",
    quote:
      "Working with NeuroClicks felt like an extension of our internal core team. They don't just take specifications and write code; they challenged our operational assumptions and helped us build a much simpler, faster system than we originally envisioned.",
    clientName: "Anand R. Verma",
    role: "VP of Product Engineering",
    company: "Apex Fleet Systems (Illustrative Client)",
    industry: "Logistics & Fleet Telematics",
    projectScope: "Field Operations & Dispatch Platform",
    avatarInitials: "AV",
  },
  {
    id: "sample-2",
    quote:
      "Their architectural discipline is what sets them apart. When our customer transaction volume doubled in Q3, the backend didn't flinch. Every deployment pipeline, database index, and API contract was built to withstand real pressure.",
    clientName: "Elena Rostova",
    role: "Chief Operating Officer",
    company: "Crestline Financial (Illustrative Client)",
    industry: "Fintech & Wealth Advisory",
    projectScope: "Core Ledger & Customer Portal",
    avatarInitials: "ER",
  },
  {
    id: "sample-3",
    quote:
      "Too many agencies deliver bloated templates. NeuroClicks gave us an editorial digital flagship that accurately represents our engineering quality. Our inbound project inquiries and enterprise conversations tripled within sixty days of launch.",
    clientName: "Siddharth Menon",
    role: "Managing Partner",
    company: "Kinetix Capital Partners (Illustrative Client)",
    industry: "Venture & Advisory",
    projectScope: "Brand Positioning & Flagship Web Application",
    avatarInitials: "SM",
  },
];
