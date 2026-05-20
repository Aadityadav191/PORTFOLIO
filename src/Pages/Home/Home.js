import React, { useState, useEffect } from "react";
import "./Home.css";
import ShapeDivider from "../../Components/ShapeDivider/ShapeDivider.js";
import Socialicon from "../../Components/Socialicon/Socialicon.js";
import DownloadBtn from "../../Components/Buttons/DownloadBtn/DownloadBtn.js";
import shyam1 from "../../Assets/9999.jpeg";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const roles = ["Software Engineer", "Full-Stack Developer", "Tech Enthusiast"];
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <main className="landing" id="home">
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>
      <div className="bg-grid-overlay"></div>

      <section className="hero-grid">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <h5 className="greeting">Hi there, my name is</h5>
          <h1 className="name-title">
            Aadit <span className="highlight">Yadav</span>
          </h1>
          
          {/* Animated Role Text Carousel */}
          <div className="role-container">
            <AnimatePresence mode="wait">
              <motion.span 
                key={currentRoleIdx}
                className="role-text"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                {roles[currentRoleIdx]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="hero-description">
            I craft scalable web applications and high-performance digital experiences with an unwavering focus on clean architecture and intuitive user design.
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Professional Minimalist Geometric Frame */}
          <div className="image-frame-deco"></div>
          <div className="image-border-gradient">
            <div className="image-inner-container">
                <img src={shyam1} className="profile-img" alt="Aadit Yadav" />
            </div>
          </div>
          
          {/* Ultra-Modern Glassmorphic Floating Card */}
          <motion.div 
            className="floating-card"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-accent"></div>
            <span className="stat-number">10+</span>
            <span className="stat-text">Production Projects</span>
          </motion.div>
        </motion.div>
      </section>

      <div className="divider-container">
        <ShapeDivider />
      </div>
    </main>
  );
}