export const siteConfig = {
  name: "Ansh Kumar",
  title: "AI Engineer | Full-Stack Developer | SaaS Builder",
  tagline:
    "I build AI-powered products that ship fast, scale hard, and drive real results.",
  email: "anshr795@gmail.com",
  phone: "+91-8700696847",
  github: "https://github.com/AnshKr2004",
  linkedin: "https://www.linkedin.com/in/ansh-kumar-277260260",
  location: "New Delhi, India",
};

export const about = {
  summary: `I'm a full-stack engineer with deep expertise in AI — building production SaaS, LLM-powered agent platforms, and real-time edge inference systems. From decoupling C++ simulation engines with Node.js microservices to shipping YOLOv8-Pose detection on 1.5 TOPS embedded cameras, I work end-to-end across cloud, web, and the edge.`,
  highlights: [
    { label: "Production Systems Shipped", value: "8+" },
    { label: "Countries Worked Remotely With", value: "4" },
    { label: "AI / Edge AI Projects", value: "3+" },
    { label: "Cloud & Edge Platforms", value: "AWS · Scaleway · HEOP" },
  ],
  detail: `My approach combines startup-speed execution with enterprise-grade architecture. I've built revenue-generating SaaS with payment integrations, real-time computer vision pipelines optimized for sub-50 MB edge budgets, and microservices that bridge decades-old legacy binaries with modern HTTP/JSON interfaces. Whether the constraint is GPU memory, monthly bandwidth caps, or a tight release window, I ship software that works.`,
};

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  bullets: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Innovative Coating Solutions",
    role: "Node.js API Developer",
    duration: "Apr 2026 — May 2026",
    location: "Belgium · Remote",
    bullets: [
      "Designed a Node.js + Express Web API to decouple a C++ simulation engine from its legacy Java Swing GUI, unlocking both on-premise and cloud deployment paths.",
      "Built JSON ↔ TOML translation and ASCII/CSV → JSON result parsers, bridging a decades-old C++ binary with a modern HTTP/JSON interface.",
      "Implemented job orchestration via child-process spawning of Optima.exe with real-time stdout streaming to clients over Server-Sent Events (SSE).",
      "Defined a 4-phase migration roadmap (Java GUI → Electron) backed by GitHub Actions CI/CD and Grafana monitoring.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "TOML",
      "SSE",
      "Electron",
      "GitHub Actions",
      "Grafana",
      "Docker",
    ],
  },
  {
    company: "TimeLapseLab",
    role: "Edge AI / Computer Vision Engineer",
    duration: "Apr 2026 — May 2026",
    location: "Italy · Remote",
    bullets: [
      "Built real-time person-lying detection on Hikvision HEOP 2.0 cameras (~1.5 TOPS) using YOLOv8n-Pose with a 5-second temporal verification window.",
      "Optimized a PyTorch → ONNX pipeline (416×416, motion-gated, adaptive FPS) to stay within a <50 MB model / <250 MB RAM edge budget.",
      "Designed a LAN-only architecture emitting ~1 KB JSON alerts, holding internet use under 0.1 GB/month against a 10–50 GB cap.",
      "Cut false positives with a rolling-vote posture smoother, geometric filters, and exclusion zones — validated with 38 unit and soak tests.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "ONNX",
      "YOLOv8",
      "OpenCV",
      "Hikvision HEOP SDK",
      "Embedded Systems",
    ],
  },
  {
    company: "Penny FS Technologies",
    role: "Junior Software Engineer",
    duration: "Mar 2026 — May 2026",
    location: "Ireland · Remote",
    bullets: [
      "Maintained the Penny App, admin panel, and Webflow marketing site as a contractor for the Ireland-based team.",
      "Built and maintained integrations across HubSpot, LinkedIn, Calendly, Stripe, and Google Analytics to enable accurate lead and campaign tracking.",
      "Monitored site performance and resolved integration, tracking, and form issues to keep marketing operations unblocked.",
      "Collaborated remotely through stand-ups and sprints, delivering weekly tech reports and stack documentation.",
    ],
    technologies: [
      "Next.js",
      "Webflow",
      "HubSpot",
      "Stripe",
      "Calendly",
      "Google Analytics",
      "LinkedIn API",
    ],
  },
  {
    company: "Penny FS Technologies",
    role: "Junior Software Engineer",
    duration: "Jul 2025 — Dec 2025",
    location: "Ireland · Remote",
    bullets: [
      "Maintained and optimized core platform features across multiple web applications using Vite and Next.js.",
      "Shipped new features on Next.js 15 to improve platform performance and scalability.",
      "Integrated Supabase for backend services and real-time data handling across products.",
      "Streamlined development and deployment workflows with Docker and CI/CD pipelines, deploying production workloads on Scaleway.",
    ],
    technologies: [
      "Next.js 15",
      "Vite",
      "Supabase",
      "Docker",
      "CI/CD",
      "Scaleway",
      "TypeScript",
    ],
  },
  {
    company: "Penny FS Technologies",
    role: "Junior Software Engineer Intern",
    duration: "Apr 2025 — Jul 2025",
    location: "Ireland · Remote",
    bullets: [
      "Maintained and enhanced core platform features across multiple web apps using Vite and Next.js.",
      "Developed and debugged frontend components in both JavaScript and TypeScript.",
      "Integrated Firebase for real-time database management and secure authentication.",
      "Collaborated on CI/CD-driven deployments and resolved production-level issues to ensure cross-platform responsiveness.",
    ],
    technologies: [
      "Next.js",
      "Vite",
      "Firebase",
      "JavaScript",
      "TypeScript",
      "CI/CD",
    ],
  },
  {
    company: "The RD Group of Industries",
    role: "Full Stack Developer Intern",
    duration: "Nov 2024 — Jan 2025",
    location: "India · Remote",
    bullets: [
      "Built and maintained web applications including an LMS, chat and meeting platforms, e-commerce, and a Vulnerability Report Generator and Repository using Next.js and TypeScript.",
      "Built scalable, responsive solutions with MongoDB, PostgreSQL, Prisma, TailwindCSS, and SCSS.",
      "Integrated third-party libraries to extend application functionality and optimize performance.",
      "Implemented JWT-based authentication and authorization to harden API security across services.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "JWT",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  features: string[];
  highlight: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "PRIMALYX",
    description:
      "AI Agent Platform — Build, deploy, and share domain-specific conversational AI assistants.",
    longDescription:
      "A full-stack AI agent marketplace where users can create custom conversational assistants powered by Groq's Llama LLM. Features multi-modal support, dynamic knowledge bases, conversation persistence, and a public agent marketplace.",
    liveUrl: "https://www.primalyx.com",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Groq LLM",
      "NextAuth",
    ],
    features: [
      "Multi-modal AI queries (text + image)",
      "Dynamic knowledge base uploads",
      "Public agent marketplace",
      "Message streaming & conversation history",
      "Rate limiting & secure auth flows",
    ],
    highlight: "Production AI SaaS with LLM integration",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    title: "PEPPY MAIL",
    description:
      "Email Automation SaaS — Extract, manage, and campaign emails at scale from any file format.",
    longDescription:
      "A production SaaS platform that automates email extraction from PDFs, Excel, Word, and CSV files. Features a tiered subscription system with Razorpay payment integration, bulk campaign functionality, and a beautifully animated UI.",
    liveUrl: "https://peppymail.com",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Razorpay",
      "Framer Motion",
      "NextAuth",
    ],
    features: [
      "Multi-format email extraction engine",
      "Tiered subscription (Free/Starter/Pro)",
      "Razorpay payment gateway with webhooks",
      "Bulk email campaigns with attachments",
      "Chunked upload handling & usage limits",
    ],
    highlight: "Revenue-generating SaaS with payment integration",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Google Maps Data Scraper",
    description:
      "Chrome Extension — One-click automated business data extraction from Google Maps.",
    longDescription:
      "A Chrome extension built on Manifest V3 that automates Google Maps data collection with intelligent pagination, throttling, retries, and de-duplication. Features one-click CSV/JSON export and optimized runtime performance.",
    githubUrl: "https://github.com/AnshKr2004/google-maps-scraper",
    technologies: [
      "JavaScript",
      "Chrome APIs",
      "Manifest V3",
      "DOM Parsing",
      "CSV/JSON",
    ],
    features: [
      "Automated pagination & data collection",
      "Intelligent throttling & retry logic",
      "One-click CSV/JSON export",
      "De-duplication & error reporting",
      "Optimized batching for speed",
    ],
    highlight: "Automated data extraction at scale",
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "Portfolio",
    description:
      "Personal Portfolio — A premium, animated developer portfolio showcasing projects, skills, and experience.",
    longDescription:
      "A meticulously crafted personal portfolio website built with Next.js 15 and React 19. Features buttery-smooth scroll animations powered by Framer Motion, a responsive dark-mode-first design, dynamic project showcases, and an interactive contact form with data persistence. Designed to leave a lasting impression on recruiters and clients alike.",
    liveUrl: "https://new-portfolio-gamma-seven-79.vercel.app",
    githubUrl: "https://github.com/AnshKr2004/new-portfolio",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Vercel",
    ],
    features: [
      "Smooth scroll-driven animations & transitions",
      "Dark-mode-first responsive design",
      "Dynamic project cards with gradient highlights",
      "Interactive contact form with persistence",
      "SEO-optimized with semantic HTML",
    ],
    highlight: "Premium developer portfolio with stunning animations",
    gradient: "from-cyan-500 to-blue-600",
  },
];

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "💻",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Bash",
      "SQL",
      "HTML",
      "CSS",
      "TOML",
      "JSON",
    ],
  },
  {
    name: "Frameworks & Libraries",
    icon: "⚡",
    skills: [
      "React",
      "Next.js",
      "Vite",
      "Node.js",
      "Express.js",
      "Electron",
      "LangChain",
      "Three.js",
      "GSAP",
      "Chart.js / D3.js / Plotly.js",
    ],
  },
  {
    name: "AI / ML & Computer Vision",
    icon: "🧠",
    skills: [
      "LLMs",
      "RAG",
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "Computer Vision",
      "Edge / Embedded AI",
      "Real-Time Inference",
      "PyTorch",
      "OpenCV",
    ],
  },
  {
    name: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "AWS",
      "Scaleway",
      "Firebase",
      "Nginx",
      "Grafana",
      "Vercel",
    ],
  },
  {
    name: "Databases & Backend",
    icon: "🗄️",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Prisma",
      "Supabase",
      "Firebase RTDB",
      "REST API Design",
      "Microservices",
      "Webhooks",
    ],
  },
  {
    name: "Tools & Other",
    icon: "🛠️",
    skills: [
      "Git",
      "VS Code",
      "Vim",
      "Postman",
      "Redux",
      "Socket.io",
      "MUI",
      "TailwindCSS",
      "Hikvision HEOP SDK",
      "Linux",
    ],
  },
];

export const freelanceServices = [
  {
    title: "AI-Powered SaaS",
    description:
      "Custom SaaS platforms with LLM integration, intelligent automation, and scalable architecture.",
    icon: "🚀",
  },
  {
    title: "AI Agents & Chatbots",
    description:
      "Domain-specific conversational AI with knowledge bases, multi-modal support, and real-time streaming.",
    icon: "🤖",
  },
  {
    title: "Automation Tools",
    description:
      "Web scrapers, data pipelines, Chrome extensions, and workflow automation that save thousands of hours.",
    icon: "⚙️",
  },
  {
    title: "Full-Stack Web Apps",
    description:
      "Production-grade applications with modern frameworks, real-time features, and payment integration.",
    icon: "🌐",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
