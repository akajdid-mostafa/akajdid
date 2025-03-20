// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./work.css";
import Projects from "./Projects";
import {
  disney,
  eventplanner360,
  exedoestate,
  gemini,
  modernbank,
  nike,
  shoppingcart,
  smarthost,
  realstate,
  glassOcean,
  piolecImage,
} from "../../assets/projects";

const projects = [
  {
    name: "Real Estate Platform",
    description:
      "A full-stack real estate app built with Next.js, Chakra UI, and Prisma. Features property listings, advanced search, and user authentication.",
    stacks: ["Next.js", "Chakra UI", "Prisma", "PostgreSQL", "JWT"],
    link: "https://realestat.vercel.app/Index", 
    github: "https://github.com/akajdid-mostafa/realestat",
    image: realstate, 
    category: "Fullstack",
  },
  {
    name: "Glass Ocean",
    description:
    "A visually stunning portfolio or landing page built with Next.js and Material-UI. Features a glass morphism design, smooth animations, and responsive layout.",
  stacks: ["Next.js", "Material-UI", "JavaScript", "GSAP", "Responsive Design"],
  link: "https://glass-ocean.vercel.app/en", // Live demo link added
  github: "https://github.com/akajdid-mostafa/glass-ocean",
  image: glassOcean, // Replace with the actual image variable or path
  category: "Frontend",
  },
  {
    "name": "Piolec",
    "description": "A dynamic web application built with Next.js and Tailwind CSS, designed for managing and exploring electrical products efficiently. Features an intuitive UI, responsive design, and seamless navigation.",
    "stacks": ["Next.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
    "link": "https://piolec.vercel.app/", 
    "github": "https://github.com/akajdid-mostafa/Piolec",
    "image": piolecImage, // Replace with the actual image variable or path
    "category": "Frontend"
  },
  {
    name: "Gemini",
    description:
      "A generative AI application utilizing the Gemini API, with efficient state management via Context API.",
    stacks: ["React", "Gemini API", "Vercel"],
    link: "https://gemini-kappa-azure.vercel.app/",
    github: "https://github.com/sayyidmarvanvt/Gemini",
    image: gemini,
    category: "React",
  },
  {
    name: "Exedo Estate",
    description:
      "A property listing application using the MERN stack with secure authentication and CRUD operations for managing property listings.",
    stacks: ["React", "Redux Toolkit", "Node.js", "Express.js", "MongoDB"],
    link: "https://real-estate-mhee.onrender.com",
    github: "https://github.com/sayyidmarvanvt/Exedo-estate",
    image: exedoestate,
    category: "Fullstack",
  },
  {
    name: "Mentorow Technology Website",
    description:
      "Developed a dynamic website using Node.js, Express.js, and React.js. Designed and animated engaging UI components using Framer Motion, reducing bounce rate by 20%.",
    stacks: [
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Framer Motion",
      "React.js",
      "MongoDB",
      "Context API",
    ],
    link: "https://footer-mu.vercel.app/",
    github: "https://github.com/sayyidmarvanvt/Footer",
    image: "path_to_image",
    category: "Fullstack",
  },
  {
    name: "SmartHost",
    description:
      "A responsive website for the architectural sector with an animated navigation bar using Framer Motion",
    stacks: ["React.js", "Framer Motion", "Tailwind CSS", "Nodemailer"],
    link: "http://www.smarthost.org.uk",
    github: "https://github.com/sayyidmarvanvt/jmk",
    image: smarthost,
    category: "React",
  },
  {
    name: "ModernBank",
    description:
      "A responsive UI for a banking web application, designed to enhance user satisfaction with effective UI/UX practices.",
    stacks: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    link: "https://modern-bankapp.vercel.app/",
    github: "https://github.com/sayyidmarvanvt/modern-bankapp",
    image: modernbank,
    category: "React",
  },
  {
    name: "Disney+ Clone",
    description:
      "A React-based clone of Disney+, optimized with React Router and Axios for dynamic content fetching.",
    stacks: ["React", "TMDB API", "Axios", "Styled-Components", "Tailwind CSS"],
    link: "https://disney-clone-sable-one.vercel.app",
    github: "https://github.com/sayyidmarvanvt/Disney-clone",
    image: disney,
    category: "React",
  },
  {
    name: "Small Shopping Cart",
    description:
      "A small shopping cart page built with React, featuring a functional cart page for managing items.",
    stacks: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    link: "https://small-shopping-cart-peach.vercel.app",
    github: "https://github.com/sayyidmarvanvt/small-shopping-cart",
    image: shoppingcart,
    category: "React,",
  },
  {
    name: "Nike Poster",
    description:
      "A front page for Nike, showcasing a visually engaging design with React.",
    stacks: ["React"],
    link: "https://nike-front-dusky.vercel.app",
    github: "https://github.com/sayyidmarvanvt/nike-front",
    image: nike,
    category: "React",
  },
  {
    name: "EventPlanner360",
    description:
      "An event planning platform for creating events, managing vendors and guests, tracking RSVPs, and sending invitations.",
    stacks: ["React.js","React.js", "Node.js", "Express", "MongoDB", "Nodemailer"],
    link: "https://eventplanner-frontend-sdjb.onrender.com/",
    github: "https://github.com/sayyidmarvanvt/CBT-CIP",
    image: eventplanner360,
    category: "Fullstack",
  },
];

const Work = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section__title">Work</h2>
      <span className="section__subtitle">Most recent works</span>
      <Projects projects={projects} />
    </section>
  );
};

export default Work;
