import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import proshop from "@/public/Proshop.png";
import newsapp from "@/public/news app.png";
import fyp from "@/public/FYP.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer Intern",
    location: "BtekUp (Remote)",
    description:
      // "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
      "I worked on a full-stack project for three months, utilizing React.js, SCSS, Node.js (Express), and MongoDB.",
    icon: React.createElement(FaReact),
    date: "Summer 2022",
  },
  {
    title: "Support Engineer",
    location: "MobiMind (Beirut)",
    description:
      "I provided technical support to service providers. I used SQL Server Management Studio, Postman, Skype, and Outlook in my work.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Present",
  },
  {
    title: "Computer and Communication Engineer",
    location: "Antonine University",
    description:
      "I graduated with a Bachelor of Engineering in Computer and Communications Engineering (CCE) with a focus in Software Engineering and Networks.",
    //   "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "Summer 2023",
  },
] as const;

export const projectsData = [
  {
    title: "The 961 clone",
    description:
      "I recreated 'The 961' news website using Next.js 14 and Tailwind CSS. By leveraging newsapi.org, I fetched real-time news articles for a seamless user experience.",
    tags: ["Next.js", "Tailwind CSS", "NewsAPI"],
    imageUrl: newsapp,
    github: "https://github.com/charbel-ayrouth/news-app",
    live: "https://the-961-clone.vercel.app/",
  },
  {
    title: "Proshop",
    description:
      "Developed a full-stack MERN application serving as an ecommerce platform. Featuring a comprehensive shopping cart and Stripe integration for seamless payments,",
    tags: ["React", "Redux Toolkit", "Stripe", "Node.js", "Express", "MongoDB"],
    imageUrl: proshop,
    github: "https://github.com/charbel-ayrouth/proshop",
    live: "https://proshop-tev6.onrender.com/",
  },
  {
    title: "FYP Proposal Management System",
    description:
      "Built with the MERN stack, this application streamlines the Final Year Project proposal process. It offer user role management and efficient communication tools to enhance collaboration among stakeholders",
    tags: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    imageUrl: fyp,
    github: "https://github.com/charbel-ayrouth/FYP-frontend",
    live: "https://fyp-schedule.onrender.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Redux Toolkit",
  "Express",
  "MongoDB",
  "SQL",
  "Framer Motion",
] as const;
