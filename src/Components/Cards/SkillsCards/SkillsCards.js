import React from "react";
import { motion } from "framer-motion"; 
import "./SkillsCards.css";

export default function SkillsCards(props) {
  return (
    <motion.div
      className="Scard"
      initial={{ opacity: 0, y: 70 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.75}} 
        viewport={{ once: true }} 
    >
      <div className="Scard-image-container">
        <img
          src={props.logo}
          alt={props.title}
          style={{ width: "100px", height: "auto" }}
        />
      </div>
      <p className="Scard-title">{props.title}</p>
      <p className="Scard-des">{props.description}</p>
    </motion.div>
  );
}
