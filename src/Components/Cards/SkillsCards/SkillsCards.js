import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./SkillsCards.css";

export default function SkillsCards(props) {
  return (
    <motion.div
      className="Scard"
      initial={{ opacity: 0, y: 70 }} // Start with the card hidden and below the view
        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position when in view
        transition={{ duration: 0.5, delay: 0.75}} // Duration for the animation
        viewport={{ once: true }} // Only trigger animation once when in view
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
