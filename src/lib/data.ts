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
  summary: `I'm a full-stack engineer with deep expertise in AI, specializing in building production-grade SaaS products and intelligent systems. From architecting LLM-powered agent platforms to deploying scalable cloud infrastructure, I bridge the gap between cutting-edge AI and real-world product execution.`,
  highlights: [
    { label: "Production Apps Shipped", value: "5+" },
    { label: "Tech Stack Depth", value: "15+" },
    { label: "SaaS Products Built", value: "3" },
    { label: "Cloud Platforms", value: "AWS, Firebase, Scaleway" },
  ],
  detail: `My approach combines startup-speed execution with enterprise-grade architecture. I don't just write code — I build products that generate revenue, solve real problems, and scale under load. Whether it's a multi-tenant SaaS platform, an AI agent marketplace, or a Chrome extension scraping millions of data points, I ship software that works.`,
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
    company: "Penny FS Technologies",
    role: "Software Engineer",
    duration: "Jul 2025 — Dec 2025",
    location: "Ireland · Remote",
    bullets: [
      "Architected and optimized core platform features across multiple web applications, driving measurable performance improvements using Next.js 15 and Vite.",
      "Engineered real-time data pipelines with Supabase, enabling seamless backend integration and sub-second data synchronization across the platform.",
      "Designed and implemented CI/CD pipelines with Docker, reducing deployment cycles by 60% and ensuring zero-downtime releases.",
      "Deployed production-grade applications on Scaleway cloud infrastructure, supporting thousands of concurrent users.",
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
    role: "Software Engineer Intern",
    duration: "Apr 2025 — Jul 2025",
    location: "Ireland · Remote",
    bullets: [
      "Developed and shipped production features across multiple web applications using modern JavaScript and TypeScript frameworks.",
      "Integrated Firebase for real-time database management and secure authentication flows, handling thousands of daily active users.",
      "Collaborated on CI/CD pipeline architecture, accelerating feature delivery and eliminating manual deployment overhead.",
      "Resolved critical production issues and ensured cross-platform performance consistency.",
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
    company: "Fluxanix",
    role: "Full Stack Developer",
    duration: "Feb 2025 — Mar 2025",
    location: "Freelance · Remote",
    bullets: [
      "Designed and developed a high-performance web application from the ground up, delivering a polished product within a tight 6-week timeline.",
      "Built a responsive, component-driven frontend with Next.js and React, implementing dynamic UI interactions and seamless page transitions.",
      "Engineered RESTful APIs and server-side logic with Node.js and Express, integrating third-party services for payments and notifications.",
      "Implemented end-to-end authentication, role-based access control, and data validation to ensure platform security and reliability.",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "TailwindCSS",
      "REST APIs",
    ],
  },
  {
    company: "The RD Group of Industries",
    role: "Full Stack Developer Intern",
    duration: "Nov 2024 — Jan 2025",
    location: "India · Remote",
    bullets: [
      "Built and maintained enterprise-grade web applications including an LMS, real-time collaboration tools, and a Vulnerability Report Generator using Next.js and TypeScript.",
      "Engineered scalable backend systems with MongoDB, PostgreSQL, and Prisma ORM, handling complex data relationships and high-throughput queries.",
      "Implemented JWT-based authentication and API security protocols, hardening the platform against unauthorized access.",
      "Led cross-functional collaboration to deliver high-quality projects on aggressive timelines.",
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
    liveUrl: "",
    githubUrl: "",
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
      "SQL",
      "Bash",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "Frameworks",
    icon: "⚡",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Vite",
      "Three.js",
      "GSAP",
    ],
  },
  {
    name: "AI / ML",
    icon: "🧠",
    skills: [
      "LLMs",
      "RAG",
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "Groq",
    ],
  },
  {
    name: "DevOps",
    icon: "☁️",
    skills: [
      "Docker",
      "CI/CD",
      "AWS",
      "Firebase",
      "Scaleway",
      "Nginx",
      "Vercel",
    ],
  },
  {
    name: "Databases",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Supabase", "Firebase RTDB"],
  },
  {
    name: "Tools",
    icon: "🛠️",
    skills: [
      "Git",
      "VS Code",
      "Redux",
      "Postman",
      "Socket.io",
      "MUI",
      "TailwindCSS",
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
