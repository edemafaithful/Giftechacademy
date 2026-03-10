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
    price: "NGN 27,803",
    originalPrice: "NGN 278,027",
  },
  {
    id: "python-mastery",
    title: "Complete Python Mastery",
    description:
      "Everything you need to program in Python in one course (includes 3 real-world projects)",
    skills: ["Python Basics", "Data Structures", "OOP", "Automation"],
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    duration: "12h",
    price: "NGN 20,817",
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
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    duration: "8h",
    price: "NGN 20,817",
    originalPrice: "NGN 208,171",
  },
  {
    id: "cpp",
    title: "C++ Programming",
    description: "Master low-level programming and system design with C++",
    skills: ["Memory Management", "Pointers", "STL", "Algorithms"],
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=800",
    duration: "15h",
    price: "NGN 25,000",
    originalPrice: "NGN 250,000",
  },
  {
    id: "sql",
    title: "SQL & Databases",
    description:
      "Learn to design, query and manage relational databases effectively.",
    skills: [
      "PostgreSQL",
      "Database Design",
      "Optimization",
      "Complex Queries",
    ],
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",
    duration: "6h",
    price: "NGN 15,000",
    originalPrice: "NGN 150,000",
  },
  {
    id: "nextjs",
    title: "Next.js Fullstack",
    description:
      "Build production-ready fullstack applications with Next.js and App Router.",
    skills: ["Server Components", "Server Actions", "Auth.js", "Prisma"],
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800",
    duration: "10h",
    price: "NGN 30,000",
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
