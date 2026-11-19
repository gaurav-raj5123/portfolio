export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  link?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  highlights?: string[];
}

export interface ProjectItem {
  title: string;
  period: string;
  techStack: string[];
  description: string[];
  github?: string;
  live?: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface AchievementItem {
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  iconName: "trophy" | "code" | "award" | "target" | "users";
}

export const portfolioData = {
  personal: {
    name: "Gaurav Raj",
    monogram: "GR",
    tagline: "Information Technology Engineer & Data Analyst",
    bio: "Undergraduate student in Information Technology at Delhi Technological University (DTU). Specialized in Data Analytics, LLM-based vector retrieval pipelines, high-performance graph algorithms, and full-stack data applications.",
    email: "gauravraj5123@gmail.com",
    phone: "+91 7033272879",
    location: "New Delhi, India",
    university: "Delhi Technological University (DTU)",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    resumeUrl: "/resume.pdf",
    stats: [
      { label: "CGPA (DTU)", value: "8.55" },
      { label: "Grad Year", value: "2027" },
      { label: "Experience", value: "Data Analyst" },
      { label: "Location", value: "Delhi, IN" },
    ],
    roles: [
      "Information Technology Engineer",
      "Data Analyst Intern",
      "AI & LLM Pipeline Developer",
      "Algorithmic Problem Solver",
    ],
  },

  about: {
    title: "Who I Am",
    heading: "Passionate about building scalable systems, AI pipelines, and uncovering insights from data.",
    paragraphs: [
      "I am an Information Technology student at Delhi Technological University (DTU), holding an 8.55 CGPA. My journey is driven by a strong passion for solving real-world challenges through data science, machine learning, and clean software architecture.",
      "From analyzing healthcare operational KPIs during my Data Analyst Internship at Jiva Health Innovation to designing topological dependency validation graphs and vector retrieval systems with Gemini and ChromaDB, I love taking ideas from concept to production-ready applications.",
      "Beyond coding, I led a 20+ member team as Co-Head at DTU's Entrepreneurship Cell (E-Cell), driving an 18% YoY surge in event engagement, and won a Gold Medal at the IIT Mandi Sports Fest 1500m race.",
    ],
  },

  experience: [
    {
      role: "Data Analyst Intern",
      company: "Jiva Health Innovation Pvt. Ltd.",
      location: "Noida, India",
      period: "Jun 2026 – Jul 2026",
      description: [
        "Analyzed healthcare service operations data using SQL, Python, and Pandas to track service demand, fulfillment, turnaround time, and transaction metrics.",
        "Evaluated customer feedback, support-ticket trends, and provider-level metrics to identify operational patterns and areas requiring further investigation.",
        "Developed an interactive Streamlit dashboard to monitor operational KPIs and compare service performance across locations, service categories, and booking channels.",
      ],
      skills: ["SQL", "Python", "Pandas", "Streamlit", "Data Analytics", "KPI Dashboards"],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "Delhi Technological University (DTU / DCE)",
      location: "New Delhi, India",
      period: "Aug 2023 – Jul 2027",
      grade: "CGPA: 8.55 / 10",
      highlights: [
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, System Design Fundamentals",
      ],
    },
    {
      degree: "CBSE Class XII (Senior Secondary)",
      institution: "Gyan Bharti Model Resi Complex",
      location: "Hisua, Nawada, Bihar",
      period: "2022",
      grade: "89.6%",
    },
    {
      degree: "CBSE Class X (Secondary)",
      institution: "Modern English School",
      location: "Kunti Nagar, Nawada, Bihar",
      period: "2021",
      grade: "94.16%",
    },
  ] as EducationItem[],

  projects: [
    {
      title: "Placement Intelligence Engine",
      period: "Apr 2026",
      category: "Data & Systems",
      techStack: ["Python", "GraphQL", "Pandas", "Plotly", "Streamlit", "Topological Sort", "Heaps"],
      github: "https://github.com",
      live: "https://github.com",
      description: [
        "Engineered an end-to-end application integrating the LeetCode GraphQL API to ingest user activity data and generate company-specific skill-gap and preparation recommendations.",
        "Designed a 30-node prerequisite graph with Kahn's Topological Sort for dependency validation and a heap-based priority queue for dynamically prioritizing tasks under user time constraints.",
        "Built a multi-stage data-processing and scoring pipeline using difficulty-weighted scoring, smoothing, and normalization to transform raw interview data into actionable readiness scores.",
        "Implemented capacity-constrained scheduling with automated LEARN/REVISION mode switching, enabling dynamic task allocation based on user progress and available study time.",
      ],
    },
    {
      title: "CodeInsight AI",
      period: "May 2026",
      category: "AI & Vector Search",
      techStack: ["Python", "ChromaDB", "SentenceTransformers", "Gemini API", "Streamlit", "AST Parsing"],
      github: "https://github.com",
      live: "https://github.com",
      description: [
        "Built an AI-assisted developer tool for GitHub repository indexing, semantic code search, and repository-level analysis using vector retrieval and LLM-based reasoning.",
        "Developed a language-aware code processing pipeline using Python AST parsing, regex-based parsing, and adaptive chunking to preserve logical code boundaries.",
        "Combined vector retrieval with LLM-based reasoning to generate grounded architecture and execution-flow explanations with file- and line-level references.",
      ],
    },
  ] as ProjectItem[],

  skillCategories: [
    {
      title: "Programming Languages",
      skills: ["C++", "Java", "Python", "C", "SQL", "GraphQL"],
    },
    {
      title: "Computer Science Core",
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "System Design Fundamentals",
      ],
    },
    {
      title: "Backend & APIs",
      skills: ["REST API Fundamentals", "GraphQL APIs", "Microservice Concepts", "FastAPI / Flask"],
    },
    {
      title: "Databases & Data Processing",
      skills: ["SQL", "Pandas", "NumPy", "ChromaDB (Vector DB)"],
    },
    {
      title: "Developer Tools & DevOps",
      skills: ["Git", "GitHub", "VS Code", "Streamlit", "Vercel", "Docker Basics"],
    },
    {
      title: "ML, Vector Search & Visualization",
      skills: ["Scikit-learn", "SentenceTransformers", "Plotly", "Gemini API", "ChromaDB"],
    },
  ] as SkillCategory[],

  achievements: [
    {
      title: "500+ Algorithmic Problems",
      subtitle: "Competitive Programming",
      description: "Solved 500+ challenging problems across LeetCode, Codeforces, and GeeksforGeeks, demonstrating mastery in graph algorithms, DP, and heaps.",
      tag: "Problem Solving",
      iconName: "code",
    },
    {
      title: "Top 1% in NPTEL (Joy of Computing)",
      subtitle: "IIT Madras Examination",
      description: "Recognized among the top 1% performers nationwide in the elite NPTEL certification course conducted by IIT Madras.",
      tag: "National Top 1%",
      iconName: "award",
    },
    {
      title: "98.6 Percentile in JEE Mains",
      subtitle: "99.9 Percentile in Physics",
      description: "Ranked among the top engineering aspirants in India, with a near-perfect 99.9 percentile in Physics.",
      tag: "Competitive Exam",
      iconName: "target",
    },
    {
      title: "Gold Medal – IIT Mandi Sports Fest",
      subtitle: "1500m Race · Rann-Niti",
      description: "Champion runner securing 1st place in the 1500-meter track event at the annual sports festival of IIT Mandi.",
      tag: "Athletics Champion",
      iconName: "trophy",
    },
    {
      title: "Co-Head – E-Cell DTU",
      subtitle: "Entrepreneurship Cell (Aug 2024 – Jul 2025)",
      description: "Led a 20+ member operations, hospitality, and outreach team. Steered corporate outreach resulting in an 18% YoY rise in event engagement.",
      tag: "Leadership",
      iconName: "users",
    },
  ] as AchievementItem[],
};
