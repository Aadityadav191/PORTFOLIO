import React from "react";
import "./Home.css";
import ShapeDivider from "../../Components/ShapeDivider/ShapeDivider.js";
import Socialicon from "../../Components/Socialicon/Socialicon.js";
import DownloadBtn from "../../Components/Buttons/DownloadBtn/DownloadBtn.js";
import shyam1 from "../../Assets/shyam1.png";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <main className="landing" id="home">
      <section className="hero-grid">
        <motion.div 
          className="content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h5 variants={itemVariants} className="greeting">
            Hi There 👋
          </motion.h5>
          
          <motion.h1 variants={itemVariants} className="name-title">
            I'm <span className="highlight">Aadit Yadav</span>
          </motion.h1>
          
          <motion.h4 variants={itemVariants} className="sub-text">
            Software Developer
          </motion.h4>

          <motion.div variants={itemVariants} className="cta-wrapper">
            <DownloadBtn />
            <div className="social-wrapper">
               <Socialicon />
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="blob-bg"></div>
          <img src={shyam1} className="profile-img" alt="Aadit Yadav" />
        </motion.div>
      </section>

      <div className="divider-container">
        <ShapeDivider />
      </div>
    </main>
  );
}