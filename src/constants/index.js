import { path } from "motion/react-client";

export const myProjects = [
  {
    id: 1,
    title: "Prep Interview",
    description:
      "A platform for preparing and practicing technical interviews with real-world scenarios provided by AI.",
    subDescription: [
      "Implemented a full-stack web application using React for the frontend and Node.js for the backend.",
      "Integrated OpenAI's GPT-3 API to generate realistic interview questions and scenarios.",
      "Designed a user-friendly interface with Tailwind CSS for an optimal user experience.",
      "Implemented user authentication and data storage using MongoDB for personalized interview preparation.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "Vapi",
        path: "/assets/logos/vapi.svg",
      },
      {
        id: 2,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 3,
        name: "firebase",
        path: "/assets/logos/firebase.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Book Library",
    description:
      "A web application for managing and organizing a personal book collection with features like adding, editing, and categorizing books.",
    subDescription: [
      "Developed a responsive web application using React for the frontend and Node.js for the backend.",
      "Implemented CRUD operations for managing book entries, including adding, editing, and deleting books.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "Auth0",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },

      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "redis",
        path: "/assets/logos/redis.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/elvan-surahmat-9057a6200/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Digilife",
    job: "Front-End Developer",
    date: "2024-2026",
    contents: [
      "Developed and maintained responsive web applications using React, ensuring optimal performance and user experience.",
      "Collaborated with cross-functional teams to design and implement new features, resulting in a 20% increase in user engagement.",
      "implemented figma designs into pixel-perfect web pages, enhancing the visual appeal and usability of the applications.",
      "Implemented state management solutions using Redux, improving application scalability and maintainability.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2026-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
