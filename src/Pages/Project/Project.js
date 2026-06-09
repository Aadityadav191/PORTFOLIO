import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Project.css";
import Pcards from "./../../Components/Cards/Pcards/Pcards.js";
import { projects } from "../../data/projects.js";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

export default function Project() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div id="projects" className="ProjectPage">
      <div className="project-header-section">
        <h1 className="Protitle">
          My <span className="accent">Works</span>
        </h1>
        <div className="title-underline"></div>
      </div>

      <div className="project">
        <motion.div
          layout
          className="projectscards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Pcards
                  Project_Name={project.name}
                  image={project.image}
                  Description={project.description}
                  link={project.link}
                  Github={project.github}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="see-more-container">
        <button className="see-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
}
