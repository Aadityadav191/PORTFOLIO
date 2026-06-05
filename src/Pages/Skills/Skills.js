import React from "react";
import "./Skills.css";
import Reactjs from "../../Assets/Reactjs.png";
import nextjs from "../../Assets/nextjs.png";
import UIUX from "../../Assets/UIUX.png";
import wordpress from "../../Assets/wordpress.png";
import python from "../../Assets/python.png";
import git from "../../Assets/git.png";
import NodeJS from "../../Assets/NodeJS.jpg";
import ReactNative from "../../Assets/ReactNative.png";
import docker from "../../Assets/docker.png"; // Added Docker asset import
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "MERN Stack",
    logo: NodeJS,
    description: "Building efficient backend and full-stack architectures.",
  },
  {
    title: "ReactJS",
    logo: Reactjs,
    description: "Building responsive web apps with components and hooks.",
  },
  {
    title: "NextJS",
    logo: nextjs,
    description: "Fast, SEO-friendly apps with SSR and dynamic routing.",
  },
  {
    title: "Python (Django)",
    logo: python,
    description: "RESTful APIs and optimized backend integrations.",
  },
  {
    title: "UI/UX Design",
    logo: UIUX,
    description: "Crafting modern, user-centric experiences in Figma.",
  },
  {
    title: "React Native",
    logo: ReactNative,
    description: "Cross-platform mobile apps with native capabilities.",
  },
  {
    title: "WordPress",
    logo: wordpress,
    description: "Customizing themes, plugins, and site performance.",
  },
  {
    title: "Docker",
    logo: docker,
    description: "Containerizing applications for seamless deployment.",
  },
  {
    title: "GIT",
    logo: git,
    description: "Version control, branching, and team collaboration.",
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="SkillsPage">
      <div className="section-header">
        <h2 className="skilltitle">
          My <span className="accent">Tech Stack</span>
        </h2>
        <div className="title-underline"></div>
      </div>

      <motion.div
        className="skillsListGrid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="skill-list-item"
          >
            <div className="small-icon-box">
              <img src={skill.logo} alt={skill.title} />
            </div>
            <div className="skill-text">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}