import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

import { skillsData } from "../../data/Skills.js";

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
