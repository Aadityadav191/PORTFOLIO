import React from "react";
import "./Home.css";
import ShapeDivider from "../../Components/ShapeDivider/ShapeDivider.js";
import Socialicon from "../../Components/Socialicon/Socialicon.js";
import DownloadBtn from "../../Components/Buttons/DownloadBtn/DownloadBtn.js";
import shyammmmmmmmmmmmm from "../../Assets/HEROIMAGE.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main className="landing" id="home">
        <section className="content">
          <text className="text1">
            <h4> Hi There , </h4>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 2.5 }}
              className="typing-text"
            >
              I'm Aadit Yadav
            </motion.span>
            <h3>A software Engineer. </h3>
          </text>

          <DownloadBtn />
          <Socialicon />
        </section>

        <section className="imagesection">
          <img
            src={shyammmmmmmmmmmmm}
            className="image"
            alt="Aadit Yadav"
          />
        </section>

        <section>
          <ShapeDivider />
        </section>
      </main>
    </>
  );
}
