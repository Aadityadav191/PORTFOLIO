import React, { useState, useEffect } from "react";
import "./Home.css";
import ShapeDivider from "../../Components/ShapeDivider/ShapeDivider.js";
import Socialicon from "../../Components/Socialicon/Socialicon.js";
import DownloadBtn from "../../Components/Buttons/DownloadBtn/DownloadBtn.js";
import shyam1 from "../../Assets/9999.jpeg";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const ROLES = ["Software Developer", "Full-Stack Developer", "Tech Enthusiast"];

export default function Home() {
  const [roleIdx, setRoleIdx] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 3200);
    return () => clearInterval(id);
  }, []);


  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.09 } },
  };
  const item = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <main className="hm" id="home">
      <div className="hm-shell">
        <motion.div className="hm-copy" variants={container} initial="hidden" animate="show">

          <motion.h1 variants={item} className="hm-name">
            Aadit Yadav
          </motion.h1>

          <motion.div variants={item} className="hm-role" aria-live="polite">
            <span className="hm-role-prefix">a</span>
            <span className="hm-role-window">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIdx}
                  className="hm-role-text"
                  initial={{ opacity: 0, y: reduceMotion ? 0 : "60%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduceMotion ? 0 : "-60%" }}
                  transition={{ duration: 0.35 }}
                >
                  {ROLES[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p variants={item} className="hm-desc">
           Architecting fast, reliable digital products so you never have to see a 404 page again. Clean code on the inside, eye candy on the outside..
          </motion.p>

          <motion.div variants={item} className="hm-actions">
            <DownloadBtn />
            <Socialicon />
          </motion.div>

        </motion.div>

        <motion.div
          className="hm-visual"
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hm-photo-offset" aria-hidden="true" />
          <figure className="hm-photo">
            <img src={shyam1} alt="Portrait of Aadit Yadav" />
          </figure>
          
        </motion.div>
      </div>

      <div className="hm-divider">
        <ShapeDivider />
      </div>
    </main>
  );
}