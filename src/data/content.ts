export const profile = {
  name: "Nishita Shah",
  email: "nishitashah118@gmail.com",
  school: "IGDTUW",
  degree: "B.Tech Computer Science (Artificial Intelligence) · Class of 2027",
  github: "https://github.com/Nishita-shah1",
  linkedin: "https://www.linkedin.com/in/nishita-shah1/",
  instagram: "https://www.instagram.com/nis_verse",
  poetry: "https://www.instagram.com/nis_tales",
};

export const roles = [
  "Spring Boot microservices",
  "agentic products on Vertex AI",
  "interactive graphics in R",
  "interfaces people enjoy using",
];

export const marquee = [
  "Python",
  "C++",
  "Java",
  "Spring Boot",
  "TypeScript",
  "React",
  "Next.js",
  "R",
  "Vertex AI",
  "TensorFlow",
  "MongoDB",
  "GCP",
  "Figma",
  "Git",
];

export type Experience = {
  period: string;
  company: string;
  role: string;
  place: string;
  summary: string;
  points: string[];
  certificate?: string;
  journal?: string;
};

export const experiences: Experience[] = [
  {
    period: "May 25 - Sep 7, 2026",
    company: "Google Summer of Code",
    role: "Contributor",
    place: "R Project for Statistical Computing",
    summary:
      "A full coding period on open-source interactive graphics, completed with the official contributor certificate.",
    points: [
      "Contributed to the R Project for Statistical Computing through animint2, where plots, selections, and animation are declared in R and rendered for the web.",
      "Worked across the program window from May 25 to September 7, 2026.",
      "Finished as a GSoC 2026 contributor.",
      "Kept a public journal of the Animint2 work: polygon holes, the C++ path for getCommonChunk(), and the weekly review notes.",
    ],
    certificate: "/certificate",
    journal: "https://nishitagsocblog.netlify.app/",
  },
  {
    period: "May 2026 - Jul 2026",
    company: "Goldman Sachs",
    role: "Summer Analyst, Software Engineering",
    place: "Bengaluru",
    summary:
      "Backend engineering on services that have to stay clear as they grow.",
    points: [
      "Worked on Spring Boot microservices and the surrounding backend architecture.",
      "Focused on code that stays scalable and maintainable once other teams depend on it.",
      "Reached this seat after the Goldman Sachs India Hackathon: CS top 21 of 10,000+.",
    ],
  },
  {
    period: "Feb 2026 - Apr 2026",
    company: "Department of Defence Production",
    role: "Artificial Intelligence Intern",
    place: "Ministry of Defence, Government of India",
    summary: "An AI video-generation pipeline, from quality to the way the pieces connect.",
    points: [
      "Contributed to an AI video-generation system and tightened the pipeline's technical robustness.",
      "Improved generation workflows and how components integrate across the project.",
      "Received an official appreciation letter from the CEO of the DPIT Division.",
    ],
  },
  {
    period: "Aug 2025 - Jan 2026",
    company: "Smapit Media",
    role: "Artificial Intelligence Intern",
    place: "Gurugram",
    summary: "Image generation and generative AI pipelines for a 3D, animation, and AR studio.",
    points: [
      "Built image-generation workflows with advanced models, fine-tuned on custom datasets for domain-specific accuracy.",
      "Designed end-to-end generative AI pipelines that automate content creation and cut manual production time.",
      "Researched emerging AI tools and architectures, then turned those findings into implementations the team could use.",
    ],
  },
  {
    period: "Jun 2025 - Jul 2025",
    company: "Greensizz",
    role: "Research Associate, Agentic AI",
    place: "Research",
    summary: "Agents, a full-stack app, and Google Cloud in the same product.",
    points: [
      "Built a full-stack web application with agentic AI on Vertex AI and Google Cloud Platform.",
      "Aimed the system at intelligent automation that can scale with the product.",
    ],
  },
  {
    period: "Aug 2024 - May 2025",
    company: "Greensizz",
    role: "Research Associate, Web Development",
    place: "Research",
    summary: "The full-stack GreenSizz site, with UI and UX in the same build.",
    points: [
      "Coded the full-stack website for GreenSizz.",
      "Paired the engineering with interface design so the product felt clear to use.",
    ],
  },
  {
    period: "Jun 2024 - Aug 2024",
    company: "Sponsogram",
    role: "User Interface Designer",
    place: "Rohini, Delhi",
    summary: "An end-to-end website, from the layout to the graphics.",
    points: [
      "Created the website design from responsive layouts through to custom graphics.",
      "Shaped the interface so the experience stayed clear and engaging.",
    ],
  },
  {
    period: "Apr 2024 - Jun 2024",
    company: "logistriX",
    role: "UI/UX Designer",
    place: "Rohini, Delhi",
    summary: "A responsive site and the graphics that held the brand together.",
    points: [
      "Designed and developed a fully responsive website.",
      "Made the supporting graphics so the visual experience stayed cohesive.",
    ],
  },
  {
    period: "Feb 2024 - Apr 2024",
    company: "PHICSIT",
    role: "Graphic Designer",
    place: "Design",
    summary: "Banners and graphics for the brand's digital presence.",
    points: [
      "Designed banners and graphics for the company's digital identity.",
      "Used the work to strengthen how the brand showed up online.",
    ],
  },
];

export type ProjectCategory = "All" | "AI" | "Web" | "Open Source" | "Systems";

export type Project = {
  name: string;
  blurb: string;
  category: Exclude<ProjectCategory, "All">;
  tags: string[];
  github?: string;
  live?: string;
  points?: string[];
};

export const projects: Project[] = [
  {
    name: "Farmeal",
    blurb:
      "Good food, greater impact. The live Greensizz platform, built as a full product people can open and use.",
    category: "Web",
    tags: ["Next.js", "Product"],
    github: "https://github.com/devgreensizz/farmeal",
    live: "https://www.farmeal.co.in/",
  },
  {
    name: "Curio",
    blurb:
      "A discovery space for young explorers. Science, art, robotics, nature, and music, with small steps that turn into bigger builds.",
    category: "Web",
    tags: ["Next.js", "Learning"],
    github: "https://github.com/Nishita-shah1/curio",
    live: "https://curio-phi-khaki.vercel.app/",
  },
  {
    name: "TrueTake",
    blurb:
      "A Spring Boot API for real campaign profit on retail media. It counts COGS, referral fees, fulfillment, and returns, then recommends whether to pause, cut, or raise the bid.",
    category: "Systems",
    tags: ["Java", "Spring Boot", "API"],
    github: "https://github.com/Nishita-shah1/TrueTake",
    live: "https://truetake.onrender.com/swagger-ui/index.html",
  },
  {
    name: "ToolBox",
    blurb:
      "Free image and productivity tools that run in the browser. Background removal, upscaling, compression, OCR, and more, with files that never leave the device.",
    category: "Web",
    tags: ["Next.js", "Privacy"],
    github: "https://github.com/Nishita-shah1/pixelforge",
    live: "https://pixelforge-tan.vercel.app/",
  },
  {
    name: "Kisan",
    blurb:
      "A voice-first farming assistant. Crop diagnosis, live market prices, government schemes, and advice in Kannada, Hindi, and English, including over WhatsApp.",
    category: "AI",
    tags: ["Next.js", "AI", "Agriculture"],
    github: "https://github.com/Nishita-shah1/kisan",
    live: "https://kisan-nu.vercel.app/",
  },
  {
    name: "NisVerse",
    blurb: "AI for prompts, scripts, and content.",
    category: "AI",
    tags: ["AI", "Content"],
    live: "https://prompt-0pjx.onrender.com/",
    points: [
      "Built an AI-powered prompt generator to create high-quality prompts and reduce hallucinations.",
      "Engineered an automated script generator for video and content creators to streamline content production.",
      "Developed a content analysis tool for automated media evaluation and actionable insights.",
    ],
  },
  {
    name: "Redoit",
    blurb:
      "An AI prioritizer that ranks work by deadline and effort, guards against burnout, and drops tasks onto Google and Outlook calendars so they actually fit the day.",
    category: "AI",
    tags: ["TypeScript", "AI", "Calendar"],
    github: "https://github.com/Nishita-shah1/redoit",
    live: "https://redoit-six.vercel.app/",
  },
  {
    name: "EchoLeaks",
    blurb:
      "Client-side encrypted file sharing. Files are encrypted in a browser worker before upload, storage only sees ciphertext, and each recipient gets a separately wrapped key.",
    category: "Systems",
    tags: ["Next.js", "E2EE"],
    github: "https://github.com/Nishita-shah1/minor",
  },
];

export const studies = [
  {
    title: "Young artisans",
    text: "A UX case study on how handmade and DIY makers get seen, and what a dedicated platform would need.",
    image: "/ui1.png",
    href: "/uicase1",
    external: false,
  },
  {
    title: "Aquanidhi landing",
    text: "The public face of the fisheries repository: geo-referenced catch data for marine researchers.",
    image: "/ui2.png",
    href: "/uicase2",
    external: false,
  },
  {
    title: "Netflix wireframe",
    text: "A mobile wireframe for browsing, recommendations, trending rows, and a watchlist.",
    image: "/ui3.png",
    href: "/uicase3",
    external: false,
  },
];

export const skills: { name: string; group: string; note: string }[] = [
  { name: "C++", group: "Languages", note: "Competitive programming and the Arduino firmware. Team CPHOLIC, ICPC Amritapuri regionals 2025." },
  { name: "Python", group: "Languages", note: "Models, summarizers, and data pipelines. The language I reach for when the problem is still fuzzy." },
  { name: "Java", group: "Languages", note: "Spring Boot services, including the TrueTake API and the summer at Goldman Sachs." },
  { name: "R", group: "Languages", note: "Google Summer of Code 2026 with the R Project for Statistical Computing. animint2 turns plots, selections, and animation into interactive web graphics." },
  { name: "TypeScript", group: "Web", note: "The product UI for Farmeal, Kisan, Curio, Redoit, and ToolBox." },
  { name: "React", group: "Web", note: "Component interfaces with real interaction, not just a static layout." },
  { name: "Next.js", group: "Web", note: "App router, server and client boundaries, and the deploys on Vercel." },
  { name: "Spring Boot", group: "Web", note: "Microservices and REST APIs with a structure other people can keep working in." },
  { name: "MongoDB", group: "Web", note: "Document data for the fisheries platform and other product backends." },
  { name: "SQL", group: "Web", note: "Relational modelling, queries, and the DBMS coursework that still shows up in API design." },
  { name: "TensorFlow", group: "AI", note: "Browser-side price forecasts in GreenSizz, plus earlier model work in Python." },
  { name: "Vertex AI", group: "AI", note: "Agentic workflows on Google Cloud during the Greensizz research stint." },
  { name: "scikit-learn", group: "AI", note: "Classical models for user analysis and the notebooks under the ML repo." },
  { name: "GCP", group: "Tools", note: "The cloud side of the agentic app: deployment, scale, and the Vertex stack." },
  { name: "Figma", group: "Tools", note: "Interfaces before they are code. Case studies, wireframes, and product UI." },
  { name: "Git", group: "Tools", note: "Fifty-five public repositories, open-source reviews, and one more commit before sleeping." },
];
