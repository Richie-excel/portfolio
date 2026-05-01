import type { ContactDetails, Testimonial, Document, TimelineItem, TimelineType, Project } from "@/types";
import { Briefcase, Component, FileText, Globe, Mail, Play, Radio, Smartphone, Video, Webhook, Lightbulb } from "lucide-react";
import { BiMapPin } from "react-icons/bi";
import { FaBookOpen, FaCertificate, FaGithub, FaLinkedin, FaTiktok, FaTrafficLight } from "react-icons/fa";

export const COLORS = {
  emerald: { 400: "#34d399", 500: "#10b981", 600: "#059669" },
  slate: { 800: "#1e293b", 900: "#0f172a", 950: "#020617" },
};

export const IDENTITY = {
  name: "Richmos Ngwese",
  email: "ngweserichmond1@gmail.com",
  town: "Douala",
  country: "Cameroon",
  availability: "Available for work"
}

export const SOCIALS = [
  { label: "GitHub", icon: FaGithub, href: "https://github.com/Richie-excel/Richie-excel/blob/main/README.md" },
  { label: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/ngwese-richmond-a659501a3" },
  { label: "Tiktok", icon: FaTiktok, href: "https://www.tiktok.com/@techwithrichie" },
  {
  label: "Email",
  icon: Mail,
  href: `https://mail.google.com/mail/?view=cm&fs=1&to=${IDENTITY.email}`,
}
]
export const TAGS = ["Scalability", "Clean Code", "Clean architecture", "Optimal systems", "Performance"]
export const DESCRIPTIONS = {
  "hire_me": "Hire Me",
  "about_1": "I'm a full-stack developer specializing in web and mobile applications. I focus on building responsive, maintainable systems with attention to performance, usability, and clean architecture.",
  "about_2": "I'm currently expanding my expertise toward cybersecurity, with an interest in secure systems design, application protection, and understanding vulnerabilities in modern software. I’m committed to continuous learning through projects and practical experience.",
  "introduction": "I build scalable systems, beautiful interfaces, and intelligent solutions. Passionate about transforming complex problems into elegant, production-ready software."
}
export const CONTACT_INFO: ContactDetails[] = [
  {
    icon: Mail,
    label: "Email",
    value: IDENTITY.email,
    href: `mailto:${IDENTITY.email}`,
  },
  {
    icon: BiMapPin,
    label: "Location",
    value: `${IDENTITY.town}, ${IDENTITY.country}`,
    href: "#",
  },
  {
    icon: Briefcase,
    label: "Availability",
    value: `${IDENTITY.availability}`,
    href: "#",
  },
]

export const NAV_ITEMS = ["About", "Skills", "Projects", "Experience", "Services", "Documents", "Contact"];

export const ROLES = ["Full Stack Developer", "Mobile App Developer"];

export const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects worked on" },
  { value: "5+", label: "Technologies" },
  { value: "10+", label: "Collaborations" },
];


export const SKILL_COLORS = {
  Frontend: "#34d399",
  Backend: "#60a5fa",
  Mobile: "#a78bfa",
  Database: "#fb923c",
  DevOps: "#f472b6",
} as const;

export type SkillCategory = keyof typeof SKILL_COLORS;

export const SKILLS: Record<
  SkillCategory,
  { name: string; level: number }[]
> = {
  Frontend: [
    { name: "React", level: 80 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwindcss", level: 80 },
    { name: "HTML/CSS", level: 90 },
  ],

  Backend: [
    { name: "Node.js", level: 90 },
    { name: "Python", level: 75 },
    { name: "Java", level: 60 },
    { name: "Django", level: 60 },
    { name: "NestJs", level: 50 },
    { name: "Springboot", level: 50 },
    { name: "REST", level: 85 },
  ],

  Mobile: [
    { name: "React Native", level: 70 },
    { name: "Flutter", level: 45 },
    { name: "Expo", level: 65 },
  ],

  Database: [
    { name: "PostgreSQL", level: 90 },
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 95 },
    { name: "Firebase", level: 70 },
  ],

  DevOps: [
    { name: "Docker", level: 65 },
    { name: "Github Actions", level: 65 },
    { name: "CI/CD", level: 60 },
    { name: "Linux", level: 80 },
  ],

};
export const PROJECTS: Project[] = [
  {
    title: "Library Management System",
    desc: "A web-based Library Management System built with Java JSP and MySQL to digitize and streamline library operations such as book cataloging, user management, and borrowing workflows.",
    
    impact: "Replaced manual record-keeping with a centralized digital system, improving efficiency in book tracking, borrowing, and returns.",
    
    tags: ["Java", "JSP", "MySQL", "Servlets", "HTML", "CSS"],
    icon: FaBookOpen,
    gradient: "from-blue-500/20 to-indigo-600/10",
    githubUrl: "https://github.com/Richie-excel/LMS",
    glow: "#3b82f6",
    features: [
      "Book inventory and catalog management",
      "User authentication and role-based access",
      "Borrowing and return tracking system",
      "Admin dashboard for system control",
    ],
  },

  {
    title: "Traffic Symbol Predictor",
    desc: "A machine learning-based system that classifies and predicts traffic road signs from images using computer vision techniques.",
    
    impact: "Helps improve road safety and driver assistance systems by enabling automated recognition of traffic symbols in real-world environments.",

    tags: ["Python", "TensorFlow", "OpenCV", "CNN", "Computer Vision", "Flask"],
    
    icon: FaTrafficLight,
    gradient: "from-indigo-500/20 to-purple-600/10",
    
    githubUrl: "https://github.com/Richie-excel/traffic_symbol_predictor",
    
    glow: "#6366f1",
    
    features: [
      "Real-time traffic sign classification",
      "Deep learning CNN model training",
      "Image preprocessing with OpenCV",
      "Web-based prediction interface",
    ],
  },

  {
    title: "Video Streaming Recommendation System",
    
    desc: "A class-based project focused on building a movie recommendation system using watch history and user interaction data, integrated into a video streaming UI.",
    
    impact: "Improves content discovery by recommending movies based on user viewing patterns and watch frequency using an AI-driven classification approach.",
    
    tags: ["Python", "Machine Learning", "React", "Data Analysis"],
    
    icon: Video,
    gradient: "from-yellow-500/20 to-orange-600/10",
    
    githubUrl: "https://github.com/Richie-excel/Video_streaming",
    
    glow: "#f59e0b",
    
    features: [
      "AI-based recommendation system using watch history",
      "Movie classification based on user interaction patterns",
      "Frontend UI for browsing recommended content",
    ],
  },

  {
    title: "Movie Streaming System",
    
    desc: "A Netflix-inspired movie browsing platform built using TheMovieDB API, featuring trending movies, categorized listings, and a personalized watch-based classification system.",
    
    impact: "Improves content discovery by organizing movies based on user watch behavior and trending data, providing a more personalized browsing experience.",
    
    tags: ["React", "TheMovieDB API", "Appwrite", "JavaScript", "Tailwind CSS"],
    
    icon: Play,
    gradient: "from-red-500/20 to-pink-600/10",
    
    githubUrl: "https://github.com/Richie-excel/movie-app",
    
    glow: "#ef4444",
    
    features: [
      "Integration with TheMovieDB API for real-time movie data",
      "Trending movies and category-based browsing",
      "Watch-frequency based classification system",
      "Appwrite used for data storage and user tracking",
    ],
  },

  {
    title: "Product Showcase Web Application",
    desc: "A modern web application for displaying and managing product listings with an intuitive admin interface and structured backend API integration. Development ongoing.",

    impact: "Improves product visibility and management efficiency by providing a centralized, scalable platform for showcasing items and tracking product data.",

    tags: ["React", "NestJS", "PostgreSQL", "TailwindCSS", "Swagger"],

    icon: Globe,
    gradient: "from-purple-500/20 to-violet-600/10",

    githubUrl: "https://github.com/Richie-excel/mfglobal",

    glow: "#a855f7",

    features: [
      "Product catalog management",
      "RESTful API with Swagger documentation",
      "Admin dashboard for content control",
      "Structured database architecture",
    ],
  },

  {
    title: "AgroKare IoT Mobile App",
    desc: "A mobile application for smart agriculture that collects environmental data from IoT sensors and provides actionable farming insights.",
    
    impact: "Helps farmers make informed decisions through real-time monitoring of soil and environmental conditions.",
    
    tags: ["React Native", "Expo", "Arduino", "MongoDB"],
    icon: Radio,
    gradient: "from-teal-500/20 to-cyan-600/10",
    githubUrl: "",
    glow: "#14b8a6",
    features: [
      "IoT sensor data collection",
      "Real-time farm condition monitoring",
    ],
  },
];

export const TIMELINE: TimelineItem[] = [
  { year: "2022", title: "Started Developer Journey", desc: "Began university studies in Computer Science. Fell in love with algorithms, data structures, and the art of problem-solving.", type: "education" },
  { year: "2024", title: "First Full-Stack Project", desc: "Built my first end-to-end mobile application — a mobile app to monitor a farm — using React Native, Node.js and Arduino.", type: "milestone" },
  { year: "2024", title: "Completed an Academic Internship", desc: "Built user interfaces and learned design and code best practives", type: "education" },
  { year: "2025", title: "Collaborated on a Project", desc: "Worked with a team on an app to enable students market their skills on campus. Learned collaboration workflows and code review best practices.", type: "milestone" },
  { year: "2026", title: "Professional Internship", desc: "Joined a tech startup as a junior intern. Collaborated with other team members to produce an efficient system to enable restaurant clients to order food from their device thereby reducing queues and waiting time.", type: "work" },
];

export const typeColors: Record<TimelineType, string> = {
  education: "#34d399",
  work: "#60a5fa",
  milestone: "#fbbf24",
};

export const typeLabels: Record<TimelineType, string> = {
  education: "Education",
  work: "Work",
  milestone: "Milestone",
};


export const SERVICES = [
  {
    icon: Globe,
    title: "Full Stack Development",
    desc: "End-to-end web applications with modern React frontends and scalable Node.js/Python backends.",
    color: "#34d399",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform iOS & Android apps using React Native and Flutter with smooth, native-like performance.",
    color: "#60a5fa",
  },
  {
    icon: Webhook,
    title: "API Development",
    desc: "Secure and scalable RESTful APIs with proper documentation, testing, and clean architecture.",
    color: "#f59e0b",
  },
  {
    icon: Component,
    title: "UI/UX Integration",
    desc: "Pixel-perfect conversion of designs into responsive, accessible, and interactive interfaces.",
    color: "#a855f7",
  },
  {
    icon: Briefcase,
    title: "Freelancing",
    desc: "Available for freelance projects including web, mobile, and backend systems with reliable delivery and clean code.",
    color: "#14b8a6",
  },
  {
    icon: Lightbulb,
    title: "Tech Consultancy",
    desc: "Helping teams design scalable architectures, improve system performance, and choose the right technology stack.",
    color: "#f97316",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Daniel NDELOGAKEH NDABOSE",
    role: "CEO, REALIZE TECH Startup",
    text: "A highly motivated and innovative developer with a strong work ethic and excellent collaboration skills. Consistently approached challenges with professionalism, adapted quickly to project needs, and played an important role in delivering impactful digital solutions for the organization.",
    avatar: "DN",
    rating: 4,
  },
  {
    name: "Andre TOKAM",
    role: "CTO, REALIZE TECH Startup",
    text: "Demonstrated strong problem-solving skills and a solid understanding of modern software engineering practices. Contributed effectively to the development process, maintained clean and scalable code, and consistently showed commitment to delivering reliable and maintainable solutions.",
    avatar: "AT",
    rating: 3.5,
  },
  {
    name: "Yvanna TATANG",
    role: "CCO, REALIZE TECH Startup",
    text: "An exceptionally reliable and detail-oriented developer who consistently delivers high-quality solutions. Demonstrated strong technical expertise, professionalism, and the ability to translate complex business requirements into efficient, scalable products. A valuable contributor to any engineering team.",
    avatar: "YT",
    rating: 4.5,
  },
  {
    name: "Anderson AGBOR",
    role: "HOD - Software Engineering, IAI-CAMEROUN",
    text: "A disciplined and technically capable software engineering student who consistently demonstrates curiosity, commitment, and strong analytical thinking. Shows great potential in both academic and practical software development environments, with an impressive ability to learn modern technologies and apply them effectively to real-world projects.",
    avatar: "AA",
    rating: 4.5,
  },
];

export const DOCUMENTS: Document[] = [
  {
    id: "cv",
    icon: FileText,
    title: "Curriculum Vitae",
    subtitle: "Full professional resume",
    desc: "Complete overview of my education, work history, technical skills, and achievements",
    meta: ["PDF", "2 pages", "updated April 2026"],
    glow: "#34d399",
    gradient: "from-emerald-500/15 to-teal-600/5",
    href: "/public/documents/CV_NGWESE.pdf",
    filename: "richmos_cv.pdf",
  },
  {
    id: "cert-internship",
    icon: Briefcase,
    title: "Internship Completion Letter",
    subtitle: "Employer reference document",
    desc: "Official letter from Fintech startup confirming senior developer internship, role, and accomplishments.",
    meta: ["PDF", "Signed", "2024"],
    glow: "#a78bfa",
    gradient: "from-purple-500/15 to-violet-600/5",
    href: "/public/documents/internship_certificate.pdf",
    filename: "internship-completion-letter.pdf",
  },
  {
  id: "bsc",
  icon: FaCertificate,
  title: "Bachelor's Degree",
  subtitle: "Academic qualification in Software Engineering",
  desc: "Official Bachelor's degree certificate in Software Engineering, validating foundational knowledge in algorithms, software design, databases, and full-stack development principles.",
  meta: ["PDF", "Certified", "2025"],
  glow: "#a78bfa",
  gradient: "from-purple-500/15 to-violet-600/5",
  href: "/public/documents/certificate.pdf.pdf",
  filename: "bachelor-degree-software-engineering.pdf",
}
];