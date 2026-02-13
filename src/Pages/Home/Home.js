import React from "react";
import "./Home.css";
import ShapeDivider from "../../Components/ShapeDivider/ShapeDivider.js";
import Socialicon from "../../Components/Socialicon/Socialicon.js";
import DownloadBtn from "../../Components/Buttons/DownloadBtn/DownloadBtn.js";
import shyam1 from "../../Assets/shyam1.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="landing" id="home">
      {/* Decorative background elements */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      <section className="hero-grid">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge">Available for Work</div>
          <h5 className="greeting">Hi There, I'm</h5>
          <h1 className="name-title">
            Aadit <span className="highlight">Yadav</span>
          </h1>
          
          <div className="role-container">
            <span className="role-text">Software Developer</span>
            <div className="role-underline"></div>
          </div>

          <p className="hero-description">
            Crafting scalable web applications and intuitive digital experiences with a focus on modern performance and clean code.
          </p>

          <div className="cta-group">
            <DownloadBtn />
            <div className="social-container">
               <Socialicon />
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="image-border-gradient">
            <div className="image-inner-container">
                <img src={shyam1} className="profile-img" alt="Aadit Yadav" />
            </div>
          </div>
          
          {/* Floating Experience Card */}
          <motion.div 
            className="floating-card"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="stat-number">10+</span>
            <span className="stat-text">Projects Finished</span>
          </motion.div>
        </motion.div>
      </section>

      <div className="divider-container">
        <ShapeDivider />
      </div>
    </main>
  );
}