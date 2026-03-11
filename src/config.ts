import { Course, Testimonial, Benefit } from "./types";

/**
 * CONFIGURATION
 * Edit your WhatsApp number and other details here.
 */
export const ACADEMY_CONFIG = {
  name: "GifTechAcademy",
  whatsappNumber: "2349072570287", // Replace with your actual WhatsApp number (include country code, no +)
  email: "giftechacademy@gmail.com",
  resumePrice: "₦2,000",
  heroImage: "/images/hero4.png", // Replace with your hero image path or URL
  aboutImage: "/images/hero3.jpg", // Replace with your about image path or URL
  productImage: "https://picsum.photos/seed/resume/800/1000", // Replace with your product image path or URL
  studentImages: [
    "https://picsum.photos/seed/student1/40/40",
    "https://picsum.photos/seed/student2/40/40",
    "https://picsum.photos/seed/student3/40/40",
    "https://picsum.photos/seed/student4/40/40",
  ],
  socials: {
    facebook: "#",
    twitter: "#",
    instagram: "https://www.instagram.com/giftechacademy/",
    linkedin: "https://www.linkedin.com/in/faithful-edema-303849285",
  },
};

export const COURSES: Course[] = [
  {
    id: "html-css-series",
    title: "The Ultimate HTML5 & CSS3 Series",
    description:
      "Everything you need to build fast and stunning websites with HTML5 and CSS3 in one bundle",
    skills: [
      "HTML5 Semantic Tags",
      "CSS3 Flexbox & Grid",
      "Responsive Design",
      "Web Animations",
    ],
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    duration: "14h",
    price: "NGN 15,000",
    originalPrice: "NGN 208,171",
  },
  {
    id: "fullstack-js-bundle",
    title: "The Ultimate Full-stack JavaScript Developer Bundle",
    description:
      "Master all the JavaScript skills you need to land a full-stack developer job",
    skills: [
      "React & Next.js",
      "Node.js & Express",
      "MongoDB & SQL",
      "Deployment",
    ],
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    duration: "50h",
    price: "NGN 15,000",
    originalPrice: "NGN 697,163",
  },
  {
    id: "js-series",
    title: "The Ultimate JavaScript Series",
    description:
      "Master JavaScript: Go from Novice to Professional. Everything you need to code in JavaScript in one bundle!",
    skills: [
      "ES6+ Features",
      "Asynchronous JS",
      "DOM Manipulation",
      "Functional Programming",
    ],
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    duration: "10h",
    price: "NGN 15,000",
    originalPrice: "NGN 96,401",
  },
  {
    id: "git-course",
    title: "The Ultimate Git Course",
    description:
      "Everything you need to know to use Git & GitHub to work effectively as a team",
    skills: [
      "Branching & Merging",
      "Pull Requests",
      "Conflict Resolution",
      "Git Workflow",
    ],
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    duration: "6h",
    price: "NGN 15,000",
    originalPrice: "NGN 68,459",
  },
  {
    id: "python-projects",
    title: "Python Projects for Beginners",
    description:
      "Sharpen your problem-solving skills with curated, real-world Python projects",
    skills: ["Web Scraping", "Data Analysis", "GUI Apps", "Game Dev"],
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    duration: "5h",
    price: "NGN 15,000",
    originalPrice: "NGN 68,459",
  },
  {
    id: "nodejs-course",
    title: "The Complete Node.js Course",
    description:
      "Learn to build highly-scalable, fast and secure RESTful APIs with Node, Express, and MongoDB.",
    skills: ["REST APIs", "Authentication", "Mongoose", "Middleware"],
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    duration: "15h",
    price: "NGN 15,000",
    originalPrice: "NGN 138,315",
  },
  {
    id: "sql-mastery",
    title: "Complete SQL Mastery",
    description:
      "Everything you need to design and query databases—without the fluff.",
    skills: [
      "Database Design",
      "Joins & Unions",
      "Stored Procedures",
      "Triggers",
    ],
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    duration: "11h",
    price: "NGN 15,000",
    originalPrice: "NGN 208,171",
  },
  {
    id: "ai-apps",
    title: "Build AI-Powered Apps",
    description:
      "Learn how to integrate AI into your apps - no ML background needed",
    skills: [
      "OpenAI API",
      "Prompt Engineering",
      "Vector Databases",
      "AI Agents",
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    duration: "7h",
    price: "NGN 15,000",
    originalPrice: "NGN 278,027",
  },
  {
    id: "python-mastery",
    title: "Complete Python Mastery",
    description:
      "Everything you need to program in Python in one course (includes 3 real-world projects)",
    skills: ["Python Basics", "Data Structures", "OOP", "Automation"],
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg",
    duration: "12h",
    price: "NGN 15,000",
    originalPrice: "NGN 208,171",
  },
  {
    id: "react-beginners",
    title: "React 18 for Beginners",
    description:
      "A step-by-step guide to building web apps with React 18+ and TypeScript",
    skills: [
      "React Hooks",
      "State Management",
      "TypeScript",
      "Component Design",
    ],
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    duration: "8h",
    price: "NGN 15,000",
    originalPrice: "NGN 208,171",
  },
  {
    id: "cpp",
    title: "C++ Programming",
    description: "Master low-level programming and system design with C++",
    skills: ["Memory Management", "Pointers", "STL", "Algorithms"],
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    duration: "15h",
    price: "NGN 15,000",
    originalPrice: "NGN 250,000",
  },
  {
    id: "nextjs",
    title: "Next.js Fullstack",
    description:
      "Build production-ready fullstack applications with Next.js and App Router.",
    skills: ["Server Components", "Server Actions", "Auth.js", "Prisma"],
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    duration: "10h+",
    price: "NGN 15,000",
    originalPrice: "NGN 300,000",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Etsano",
    role: "Frontend Developer",
    content:
      "GifTechAcademy changed my life. I went from knowing nothing about code to landing my first junior role in 6 months!",
    avatar: "https://picsum.photos/seed/sarah/100/100",
  },
  {
    id: "2",
    name: "Akpobasah wellington",
    role: "UI Designer",
    content:
      "The mentorship here is top-notch. The instructors actually care about your progress and help you build a real portfolio.",
    avatar: "https://picsum.photos/seed/david/100/100",
  },
  {
    id: "3",
    name: "Blessing Adebayo",
    role: "Data Analyst",
    content:
      "Affordable and practical. I highly recommend GifTechAcademy for anyone looking to start their tech journey.",
    avatar: "https://picsum.photos/seed/blessing/100/100",
  },
];

export const WHY_CHOOSE_US: Benefit[] = [
  {
    title: "Beginner Friendly",
    description:
      "Our courses are designed for absolute beginners. No prior experience needed.",
    icon: "Users",
  },
  {
    title: "Practical Skills",
    description:
      "We focus on real-world projects that you can actually use in your portfolio.",
    icon: "Briefcase",
  },
  {
    title: "Affordable Learning",
    description:
      "Quality tech education shouldn't break the bank. We offer competitive pricing.",
    icon: "CreditCard",
  },
  {
    title: "Direct Mentorship",
    description:
      "Get direct access to industry experts who guide you every step of the way.",
    icon: "MessageSquare",
  },
];
