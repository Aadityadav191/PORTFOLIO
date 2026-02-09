import React from "react";

import "./Skills.css";

import SkillsCards from "./../../Components/Cards/SkillsCards/SkillsCards.js";

import Reactjs from "../../Assets/Reactjs.png";

import nextjs from "../../Assets/nextjs.png";

import UIUX from "../../Assets/UIUX.png";

import wordpress from "../../Assets/wordpress.png";

import python from "../../Assets/python.png";

import git from "../../Assets/git.png";

import ReactNative from "../../Assets/ReactNative.png";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "ReactJS ",

    logo: Reactjs,

    description:
      "Skilled in building responsive web apps with React.js, using components, hooks, and state management.",
  },

  {
    title: "NextJS ",

    logo: nextjs,

    description:
      "Experienced in building fast, SEO-friendly web applications, leveraging server-side rendering, dynamic routing.",
  },

  {
    title: "Python (django) ",

    logo: python,

    description:
      "Building applications using Django, with expertise in RESTful APIs, database integration, and backend optimization.",
  },

  {
    title: "UI/UX Design",

    logo: UIUX,

    description:
      "Proficient in crafting visually appealing interfaces, focusing on user-centric design and seamless experiences in figma ",
  },

  {
    title: "React Native ",

    logo: ReactNative,

    description:
      "Skilled in building cross-platform mobile apps with React Native, using components, hooks, and native modules.",
  },

  {
    title: "WordPress ",

    logo: wordpress,

    description:
      "Experienced in creating and customizing WordPress websites, optimizing themes, plugins, and performance.",
  },

  {
    title: "GIT",

    logo: git,

    description:
      "Experienced in working with Git commands such as clone, commit, branch, merge, and pull to maintain and organize projects.",
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
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
        className="skillsGrid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="skill-card-wrapper"
          >
            <div className="skill-card-inner">
              <div className="icon-box">
                <img src={skill.logo} alt={skill.title} />
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="card-glow"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
