import React from "react";
import "./Contact.css";
import Forms from "../../Components/Forms/Forms.js";
import Massege from "../../Assets/Massege.svg";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact-section">
      <div className="section-header">
        <h2 className="contact-title">
          Let's <span className="accent">Connect</span>
        </h2>
        <div className="title-underline"></div>
        <p className="contact-subtitle">Have a project in mind? Reach out and let's build something great.</p>
      </div>

      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={Massege} alt="Contact Illustration" className="contact-svg" />
          <div className="contact-details">
             {/* You can add your email or location here later */}
             <p>Ready to collaborate on your next digital adventure.</p>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Forms />
        </motion.div>
      </div>
    </section>
    </>
  );
}
