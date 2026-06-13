import React from "react";

import { Herosection } from "./component/Herosection";
import { Skillsction } from "./component/Skillsction";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import Aboutme from "./component/Aboutme";
import Contactme from "./component/Contactme";
import { SkillsMarquee } from "./component/SkillsMarquee"
import { Projector } from "lucide-react";
import Projects from "./component/Projects";

// import email from "./assets/gmail-svgrepo-com.svg"

export const App = () => {
  const array = [
    "Java Script",
    "Svelte",
    " React JS",
    " Tailwind CSS",
    "HTML & CSS ",
    "Frontend Development",
    "UI Design",
    "Figma",
    "Adobe XD",
    "GitHub",
    "VS Code",
    "Web Animation",
    "Framer Motion",
    "GSAP",
    "Responsive Design",
    "Cross-Browser Compatibility",
    "Performance Optimization",
    "SEO Basics",
    "Agile Methodologies",
    "Problem Solving",
    "Communication Skills",
    "Team Collaboration",
    "Continuous Learning",
  ];

  const skills = [
    {
      name: "Frontend Development",
      names: "React.js, Svelte, JavaScript, TypeScript, HTML5",
      icons: [
        "/assets/react.svg",
        "/assets/js.svg",
        "/assets/HTML.svg",
        "/assets/svelte.svg",
        "/assets/ts.svg",
      ],
      description:
        "Building modern, responsive, and high-performance user interfaces using contemporary frontend frameworks and web technologies.",
    },

    {
      name: "UI Styling & Design",
      names: "CSS3, Tailwind CSS, Sass, Bootstrap",
      icons: [
        "/assets/css.svg",
        "/assets/tailwind.svg",
        "/assets/sass.svg",
        "/assets/bootstarp.svg",
      ],
      description:
        "Creating visually appealing, responsive, and accessible user experiences with modern styling frameworks and design practices.",
    },

    {
      name: "Programming Languages",
      names: "Java, Python, SQL",
      icons: ["/assets/java.svg", "/assets/python.svg", "/assets/sql.svg"],
      description:
        "Applying strong programming fundamentals, problem-solving skills, and database concepts to develop efficient and scalable solutions.",
    },

    {
      name: "Backend & Databases",
      names: "Node.js, PostgreSQL, JSON",
      icons: ["/assets/node.svg", "/assets/postgress.svg", "/assets/json.svg"],
      description:
        "Developing server-side applications, managing databases, and building reliable APIs for full-stack web applications.",
    },

    {
      name: "Development Tools",
      names: "Git, GitHub, Postman, Figma",
      icons: [
        "/assets/git.svg",
        "/assets/github-bg.svg",
        "/assets/postman.svg",
        "/assets/figma.svg",
      ],
      description:
        "Utilizing industry-standard tools for version control, API testing, collaboration, and UI/UX design workflows.",
    },

    {
      name: "Core Concepts",
      badge: [
        "Redux Toolkit",
        "React Hooks",
        "State Management",
        "REST APIs",
        "Authentication",
        "Authorization",
        "Testing & Debugging",
        "Version Control",
        "Responsive Design",
        "Web Performance Optimization",
      ],
      description:
        "Strong understanding of modern frontend architecture, application state management, API integration, security, testing, and performance optimization.",
    },
  ];
  return (
<div className="relative min-h-screen bg-[#D7D7D7]">
  {/* Navbar */}
  <div className="lg:block hidden fixed top-0 right-0 w-[55%] z-[999]">
    <Navbar />
  </div>

  {/* Hero */}
  <section id="home">
    <Herosection />
  </section>

  {/* Skills */}
  <section id="skills">
    <SkillsMarquee array={array} />
    <Skillsction skills={skills} />
  </section>

  {/* Projects */}
  <section
    id="projects"
    className="min-h-screen bg-[#C4C4C4] py-20 overflow-hidden"
  >
    <motion.h1
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-8xl text-center font-bold bg-gradient-to-r from-[#0b0b0b] to-[#c4c4c4] text-transparent bg-clip-text"
    >
      Projects
      <span className="block text-xl text-[#0B0B0B] mt-2">
        See What I Developed
      </span>
    </motion.h1>

    {/* Project Cards */}
    {/* <div id="projects" className="container mx-auto mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
      {[1, 2, 3].map((item) => (
        <motion.div
          key={item}
          whileHover={{ y: -10, scale: 1.02 }}
          className="
            bg-[#D7D7D7]
            rounded-3xl
            overflow-hidden
            border border-[#b5b5b5]
            shadow-lg
            hover:shadow-[0_0_40px_rgba(11,11,11,0.15)]
            transition-all
            duration-500
          "
        >
          <div className="h-52 bg-[#0B0B0B]" />

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-3">
              Project Name
            </h3>

            <p className="text-gray-700">
              Modern web application built using React,
              Tailwind CSS and Framer Motion.
            </p>

            <button
              className="
                mt-5
                bg-[#0B0B0B]
                text-white
                px-5
                py-2
                rounded-xl
                hover:scale-105
                transition-all
              "
            >
              View Project
            </button>
          </div>
        </motion.div>
      ))}
    </div> */}
    <Projects></Projects>
  </section>

  {/* About */}
  <section id="about">
    <Aboutme />
  </section>

  {/* Contact */}
  <section id="contact">
    <Contactme />
  </section>
</div>
  );
};
