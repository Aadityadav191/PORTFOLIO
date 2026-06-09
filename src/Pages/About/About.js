import React from "react";
import "./About.css";
import Acards from "../../Components/Cards/Acards/Acards.js";
import { IconCloud } from "../../Components/IconCloud/IconCloud.jsx";
import { motion } from "framer-motion";

import { cardData, iconSlugs, aboutText } from "../../data/about.js";

function About() {
  return (
    <main id="about" className="aboutpage">
      <h1 className="Abtheader">
        About <u style={{ textDecorationColor: "#d18700" }}>Me</u>
      </h1>

      <section className="about-Container">
        <div
          style={{
            position: "relative",
            display: "flex",
            height: "100%",
            width: "100%",
            maxWidth: "32rem",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            borderRadius: "0.5rem",
            padding: "2rem 5rem 5rem 5rem",
          }}
        >
          <IconCloud iconSlugs={iconSlugs} />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 1 }}
          viewport={{ once: true }}
        >
          <blockquote className="Atext">
            {aboutText.split("\n\n").map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph}
                <br />
                <br />
              </React.Fragment>
            ))}
          </blockquote>
        </motion.div>
      </section>

      <section className="Acards">
        {cardData.map((card) => (
          <Acards key={card.title} Title={card.title} skills={card.skills} />
        ))}
      </section>
    </main>
  );
}

export default About;
