export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  year: string;
  grade?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Skills {
  name: string;
  logo: string;
  category:
    | "Frontend"
    | "Backend"
    | "UI"
    | "Tools"
    | "Testing"
    | "Auth"
    | "State"
    | "Problem Solving";
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  images: string[];
  technologies: string[];
  githubUrl: string;
  githubBackend?: string;
  liveUrl: string;
  featured: boolean;
  completedAt: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

// Personal Information
export const personalInfo = {
  name: "Ahad Ahamed Akash",
  title: "Full Stack Developer | React & Next.js",
  subtitle:
    "Love to building clean, fast & thoughtful web apps with modern web technologies",
  bio: "I'm a frontend-focused developer with a knack for crafting responsive and smooth user experiences using React, Next.js, and Tailwind CSS. Over the past 1.5+ years, I’ve worked on a variety of projects — from full-stack MERN applications to modern dashboards with ShadCN and MUI — always putting performance, accessibility, and clean design at the heart of my work. I enjoy turning ideas into real, usable interfaces and constantly push myself to learn and grow with every project.",
  resumeUrl: "/Resume-of-Ahad-Ahamed-Akash.pdf",
};

// Education Data
export const education: Education[] = [
  {
    id: "1",
    institution: "University of Technology",
    degree: "Bachelor of Science",
    field: "Computer Science",
    year: "2019 - 2023",
    grade: "3.8 GPA",
  },
  {
    id: "2",
    institution: "Tech Institute",
    degree: "Diploma",
    field: "Web Development",
    year: "2018 - 2019",
    grade: "Distinction",
  },
];

// Experience Data
export const experience: Experience[] = [
  {
    id: "1",
    company: "AB Software Solutions",
    position: "Frontend Web Developer",
    duration: "Nov 2023 - Feb 2025",
    location: "Lebanon",
    description: [
      "Developed and maintained robust user interfaces using React.js and Next.js.",
      "Implemented fully responsive and visually consistent designs across diverse devices using Tailwind CSS, Bootstrap, ShadCN and MUI, significantly improving user experience",
      "Built and integrated state management using Redux for complex application logic.",
      "Collaborated with Backend developers and designers to ensure user experience.",
    ],
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
      "MUI",
    ],
  },
  {
    id: "2",
    company: "Talentship Global Advisory Forum",
    position: "Web Developer",
    duration: "Sept 2023 - Oct 2023",
    location: "Noida, India",
    description: [
      "Collaborated with a non-profit startup dedicated to social impact and community empowerment.",
      "Utilized a stack of web development technologies including HTML, CSS, React, React Router DOM, JavaScript, Tailwind CSS, Daisy UI, and Firebase.",
      "Contributed to exciting projects aligned with my interests and the organization's mission.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "Tailwind CSS",
      "Daisy Ui",
      "Firebase",
      "Git",
      "Github",
    ],
  },
];

// Skills Data
export const skills: Skills[] = [
  // Frontend Core
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Frontend",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "Frontend",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "Frontend",
  },
  {
    name: "ES6+",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Frontend",
  },

  // State & Data
  {
    name: "Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    category: "State",
  },
  {
    name: "Redux Toolkit",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    category: "State",
  },
  {
    name: "TanStack Query",
    logo: "https://cdn.simpleicons.org/reactquery",
    category: "State",
  },
  {
    name: "React Context",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "State",
  },
  {
    name: "React Hook Form",
    logo: "https://cdn.simpleicons.org/reacthookform",
    category: "State",
  },

  // UI & Styling
  {
    name: "Tailwind CSS",
    logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    category: "UI",
  },
  {
    name: "shadcn/ui",
    logo: "https://cdn.simpleicons.org/shadcnui",
    category: "UI",
  },
  {
    name: "Material UI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    category: "UI",
  },
  {
    name: "Framer Motion",
    logo: "https://cdn.simpleicons.org/framer",
    category: "UI",
  },
  {
    name: "DaisyUI",
    logo: "https://cdn.simpleicons.org/daisyui",
    category: "UI",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    category: "UI",
  },

  // Backend
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "Backend",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    category: "Backend",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Backend",
  },
  {
    name: "Mongoose",
    logo: "https://cdn.simpleicons.org/mongoose",
    category: "Backend",
  },
  {
    name: "REST APIs",
    logo: "https://cdn.simpleicons.org/openapiinitiative",
    category: "Backend",
  },

  // Authentication & Services
  {
    name: "JWT",
    logo: "https://cdn.simpleicons.org/jsonwebtokens",
    category: "Auth",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    category: "Auth",
  },
  {
    name: "Clerk",
    logo: "https://cdn.simpleicons.org/clerk",
    category: "Auth",
  },
  {
    name: "NextAuth.js",
    logo: "https://authjs.dev/img/logo-sm.png",
    category: "Auth",
  },
  {
    name: "Axios",
    logo: "https://cdn.simpleicons.org/axios",
    category: "Auth",
  },

  // Tools & Deployment
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "Tools",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: "Tools",
  },
  {
    name: "Vercel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    category: "Tools",
  },
  {
    name: "Netlify",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
    category: "Tools",
  },
  {
    name: "Postman",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    category: "Tools",
  },

  // Testing
  {
    name: "Jest",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    category: "Testing",
  },
  {
    name: "Vitest",
    logo: "https://cdn.simpleicons.org/vitest",
    category: "Testing",
  },
  {
    name: "React Testing Library",
    logo: "https://cdn.simpleicons.org/testinglibrary",
    category: "Testing",
  },
  {
    name: "ESLint",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
    category: "Testing",
  },

  // Problem Solving
  {
    name: "Codeforces",
    logo: "https://cdn.simpleicons.org/codeforces",
    category: "Problem Solving",
  },
  {
    name: "LeetCode",
    logo: "https://cdn.simpleicons.org/leetcode",
    category: "Problem Solving",
  },
  {
    name: "CodeChef",
    logo: "https://cdn.simpleicons.org/codechef",
    category: "Problem Solving",
  },
];

// Projects Data
export const projects: Project[] = [
  {
    slug: "stock-management-app",
    title: "Alishan - Stock Management App",
    shortDescription:
      "Alishan is a modern, role-based stock management web application built with React 19, Redux Toolkit, Tailwind CSS, and Vite.",
    fullDescription:
      "Alishan is a modern, role-based stock management web application built with React 19, Redux Toolkit, Tailwind CSS, and Vite. This project serves as the frontend of a MERN stack solution, designed to streamline inventory control, invoice processing, expense tracking, and financial analytics in a structured and scalable way.",
    image: "/images/project/alishan/alishan-analytics.png",
    images: [
      "/images/project/alishan/alishan-analytics.png",
      "/images/project/alishan/alishan-login-page.png",
      "/images/project/alishan/alishan-invoice-details.png",
      "/images/project/alishan/alishan-employee-form.png",
      "/images/project/alishan/alishan-product-page.png",
    ],
    technologies: [
      "React 19",
      "ShadCN",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Hook Form",
      "YUP",
      "Node.js",
      "Express.js",
      "Mongoose",
      "TypeScript",
      "JWT",
    ],
    githubUrl:
      "https://github.com/ahadahamedakash/alishan-stock-management-client",
    githubBackend:
      "https://github.com/ahadahamedakash/alishan-stock-management-server",
    liveUrl: "https://alishan-stock-management.vercel.app",
    featured: true,
    completedAt: "2023-11-20",
  },
  {
    slug: "tech-store",
    title: "TechStore - E-commerce",
    shortDescription:
      "A modern, responsive e-commerce web application built with React 19, featuring a comprehensive public-facing site with authentication, product catalog, shopping cart, and more.",
    fullDescription:
      "A modern, responsive e-commerce web application built with React 19, featuring a comprehensive public-facing site with authentication, product catalog, shopping cart, and more.",
    image: "/images/project/tech-store/tech-store-home-page.png",
    images: [
      "/images/project/tech-store/tech-store-home-page.png",
      "/images/project/tech-store/product-page.png",
      "/images/project/tech-store/category-dashboard-page.png",
    ],
    technologies: [
      "React 19",
      "ShadCN",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Hook Form",
      "YUP",
      "Node.js",
      "Express.js",
      "Mongoose",
      "TypeScript",
      "JWT",
    ],
    githubUrl: "https://github.com/ahadahamedakash/TechStore",
    githubBackend: "https://github.com/ahadahamedakash/TechStore-Server",
    liveUrl: "https://tech-store-mu-ashen.vercel.app/",
    featured: true,
    completedAt: "2025-01-15",
  },
  {
    slug: "tech-trove",
    title: "TechTrove",
    shortDescription:
      "TechTrove is a responsive e-commerce web application built with React, featuring a comprehensive public-facing site with authentication, product catalog, shopping cart, and more.",
    fullDescription:
      "TechTrove is a responsive e-commerce web application built with React, featuring a comprehensive public-facing site with authentication, product catalog, shopping cart, and more.",
    image: "/images/project/techtrove/tech-trove-home.png",
    images: [
      "/images/project/techtrove/tech-trove-home.png",
      "/images/project/techtrove/tech-trove-products.png",
      "/images/project/techtrove/tech-trove-about.png",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Redux",
      "Redux",
      "React Icon",
      "Swiper",
    ],
    githubUrl: "https://github.com/ahadahamedakash/tech-trove",
    liveUrl: "https://calm-profiterole-7eb5b7.netlify.app",
    featured: false,
    completedAt: "2023-09-10",
  },
  {
    slug: "skinofairy",
    title: "Skinofairy",
    shortDescription:
      "Skinofairy is a blog website dedicated to skincare, offering tips, product reviews, and routines to help users achieve healthy, glowing skin.",
    fullDescription:
      "Skinofairy is a modern blog website dedicated to skincare, offering expert tips, product reviews, and personalized routines to help users achieve healthy, glowing skin. Built with Next.js for fast, SEO-friendly performance, the site features a sleek and responsive UI powered by ShadCN and Tailwind CSS. Content is managed using markdown files, parsed with Remark HTML and Gray Matter for flexible, easy publishing. The platform supports dark and light modes via next-themes, ensuring a comfortable reading experience on any device. Skinofairy is designed for both readers and content creators, making it easy to share and discover the latest in skincare.",
    image: "/images/project/skinofairy/skinofairy-home.png",
    images: [
      "/images/project/skinofairy/skinofairy-home.png",
      "/images/project/skinofairy/skinofairy-blogs.png",
      "/images/project/skinofairy/skinofairy-blog-details.png",
    ],
    technologies: [
      "Next.js",
      "ShadCN",
      "Tailwind CSS",
      "Framer Motion",
      "Next Themes",
      "Remark HTML",
      "React Scroll Parallax",
    ],
    githubUrl: "https://github.com/ahadahamedakash/skinofairy",
    liveUrl: "https://skinofairy.vercel.app",
    featured: true,
    completedAt: "2023-07-25",
  },
  {
    slug: "medai-assistant",
    title: "Medai Assistant - Your AI Health Assistant",
    shortDescription:
      "MedAI Assistant is a modular AI-powered healthcare assistant built with Next.js 15, Vercel AI SDK, Tailwind CSS, and ShadCN UI. It provides personalized, interactive AI services for medical use cases such as symptom checking, report analysis, nutrition guidance, and more — all in one modern, responsive application.",
    fullDescription:
      "MedAI Assistant is a modular AI-powered healthcare assistant built with Next.js 15, Vercel AI SDK, Tailwind CSS, and ShadCN UI. It provides personalized, interactive AI services for medical use cases such as symptom checking, report analysis, nutrition guidance, and more — all in one modern, responsive application.",
    image: "/images/project/medai/medai-home.png",
    images: [
      "/images/project/medai/medai-home.png",
      "/images/project/medai/medai-symptoms-checker.png",
      "/images/project/medai/medai-emergency-guide.png",
    ],
    technologies: [
      "Next.js",
      "ShadCN",
      "Tailwind CSS",
      "Vercel",
      "MongoDB",
      "Mongoose",
      "Open AI",
    ],
    githubUrl: "https://github.com/ahadahamedakash/medAI-assistant",
    liveUrl: "https://medai-assistant-two.vercel.app",
    featured: true,
    completedAt: "2023-05-15",
  },
];

// Contact Information
export const contactInfo: ContactInfo = {
  email: "ahadahamedakash@gmail.com",
  phone: "+88 01636428995",
  address: "Narayanganj, Bangladesh",
  socialLinks: {
    github: "https://github.com/ahadahamedakash",
    linkedin: "https://linkedin.com/in/ahadahamed",
    twitter: "https://twitter.com/ahadahamedakash",
  },
};

// Get featured projects
export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);

// Get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects?.find((project) => project.slug === slug);
};
