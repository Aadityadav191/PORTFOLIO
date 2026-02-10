import React from "react";
import "./background.css";
import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="background-container">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="parallax-bg"
      >
        <div className="overlay-gradient"></div>
        
        {/* Content goes here */}
        <div className="background-content">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
             {/* <Album /> */}
             <h2 className="bg-text-hint">Capturing Moments & Code</h2>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}