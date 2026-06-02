import React from "react";
import { motion } from "framer-motion";
import "./BlogCards.css";

const BlogCards = ({ title, description, image, tag, date, readTime, link }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.article
      className="interactive-card"
      onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // triggers when 30% is visible
    >
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" loading="lazy" />
        <span className="card-badge">{tag}</span>
      </div>
      <div className="card-content">
        <div className="card-meta">
          <time>{date}</time>
          <span className="meta-divider">•</span>
          <span>{readTime}</span>
        </div>
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <span className="footer-text">Read Full Article</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="footer-arrow"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCards;