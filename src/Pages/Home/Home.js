import React from "react";
import "./Home.css";
import ShapeDivider from "../../Components/ShapeDivider/ShapeDivider.js";
import Socialicon from "../../Components/Socialicon/Socialicon.js";
import DownloadBtn from "../../Components/Buttons/DownloadBtn/DownloadBtn.js";
import shyam1 from "../../Assets/shyam1.png";
import { motion } from "framer-motion";
// import ParticlesBackground from "../../Components/ParticleBackground/ParticleBackground.js";

export default function Home() {
  return (
    <>
      <main className="landing" id="home">
        {/* <ParticlesBackground /> */}
        <section className="content">
          <div className="text1">
            <h5> Hi There 👋 , </h5>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 2.5 }}
              className="aadityadav"
            >
              I'm Aadit Yadav
            </motion.span>
            <h4>A Software Developer </h4>
          </div>

          <DownloadBtn />
          <Socialicon />
        </section>

        <section className="imagesection">
          <img src={shyam1} className="image" alt="Aadit Yadav" loading="lazy" />
        </section>

        <section>
          <ShapeDivider />
        </section>
      </main>
    </>
  );
}
