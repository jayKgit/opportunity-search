export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  posted: string;
  description: string;
  requirements: string[];
  logo: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechNova Inc.",
    location: "San Francisco, CA",
    salary: "$140,000 - $180,000",
    type: "Full-time",
    posted: "2 days ago",
    description: "We are looking for an experienced Frontend Developer to join our team and help build cutting-edge web applications using React and TypeScript.",
    requirements: ["5+ years React experience", "TypeScript proficiency", "Experience with state management", "Strong CSS/Tailwind skills"],
    logo: "TN",
  },
  {
    id: "2",
    title: "Product Designer",
    company: "DesignCraft Studio",
    location: "New York, NY",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    posted: "5 days ago",
    description: "Join our design team to create beautiful, user-centered products. You'll work closely with engineers and product managers to ship world-class experiences.",
    requirements: ["3+ years product design", "Figma proficiency", "User research experience", "Portfolio required"],
    logo: "DC",
  },
  {
    id: "3",
    title: "Backend Engineer",
    company: "CloudScale Systems",
    location: "Remote",
    salary: "$130,000 - $170,000",
    type: "Remote",
    posted: "1 day ago",
    description: "Build and maintain scalable backend services that power our cloud infrastructure platform used by thousands of companies worldwide.",
    requirements: ["Node.js or Python", "Database design", "API development", "Cloud services (AWS/GCP)"],
    logo: "CS",
  },
  {
    id: "4",
    title: "Data Scientist",
    company: "Analytix AI",
    location: "Austin, TX",
    salary: "$150,000 - $190,000",
    type: "Full-time",
    posted: "3 days ago",
    description: "Apply machine learning and statistical methods to solve complex business problems and drive data-informed decision making.",
    requirements: ["Python & R proficiency", "ML frameworks (TensorFlow/PyTorch)", "SQL expertise", "Statistics background"],
    logo: "AA",
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "InfraCore Solutions",
    location: "Seattle, WA",
    salary: "$135,000 - $165,000",
    type: "Full-time",
    posted: "1 week ago",
    description: "Design, implement, and manage CI/CD pipelines and cloud infrastructure to ensure high availability and scalability of our services.",
    requirements: ["Kubernetes & Docker", "CI/CD pipelines", "Infrastructure as Code", "Monitoring & logging"],
    logo: "IC",
  },
  {
    id: "6",
    title: "Mobile App Developer",
    company: "AppWave Digital",
    location: "Los Angeles, CA",
    salary: "$125,000 - $155,000",
    type: "Contract",
    posted: "4 days ago",
    description: "Develop cross-platform mobile applications using React Native. Work on exciting consumer-facing products with millions of users.",
    requirements: ["React Native experience", "iOS & Android knowledge", "REST API integration", "App Store deployment"],
    logo: "AW",
  },
  {
    id: "7",
    title: "UX Researcher",
    company: "UserFirst Labs",
    location: "Chicago, IL",
    salary: "$100,000 - $130,000",
    type: "Full-time",
    posted: "6 days ago",
    description: "Conduct user research studies to uncover insights that shape product strategy and design decisions across our suite of products.",
    requirements: ["Qualitative & quantitative research", "Usability testing", "Survey design", "Research presentation skills"],
    logo: "UF",
  },
  {
    id: "8",
    title: "Marketing Manager",
    company: "GrowthPulse Co.",
    location: "Remote",
    salary: "$110,000 - $140,000",
    type: "Remote",
    posted: "3 days ago",
    description: "Lead our digital marketing efforts including SEO, content strategy, paid advertising, and brand development to drive user acquisition.",
    requirements: ["5+ years digital marketing", "SEO/SEM expertise", "Analytics tools", "Content strategy"],
    logo: "GP",
  },
];
