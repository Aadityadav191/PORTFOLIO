import React from "react";
import "./About.css";
import Acards from "../../Components/Cards/Acards/Acards.js";
// import AboutIcon from "../../Assets/abouticon.svg";
import { IconCloud } from "../../Components/IconCloud/IconCloud.jsx";

import { motion } from "framer-motion";
function About() {
  const cardData = [
    {
      title: "Languages",
      skills: ["C", "C++", "Javascript", "Java", "Python"],
    },
    {
      title: "Experience",
      skills: [
        "Hacakthons ",
        "workshops",
        "College Projects",
        "Full-stack developing",
        "Backend developing",
      ],
    },
    {
      title: "Services",
      skills: [
        "Web Development",
        "UI/UX Design",
        "React Testing ",
        "Performance Optimization",
      ],
    },
  ];

  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  return (
    <>
      <main id="about" className="aboutpage">
        <h1 className="Abtheader">
          {" "}
          About<u style={{ textDecorationColor: "#d18700" }}> Me</u>{" "}
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
            <IconCloud iconSlugs={slugs} />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 1 }}
            viewport={{ once: true }}
          >
            <blockquote className="Atext">
              I'm Aadit Yadav , a passionate software engineering student with a
              keen interest in web development (Backend, Frontend), data science
              and machine learning. Currently, I'm honing my skills in Python
              development, building intuitive web applications using React, and
              exploring the world of AI and data-driven technologies.
              <br />
              <br />
              Throughout my learning journey, I've worked on projects involving
              API like fetching and posting API , and full-stack web
              development.
              <br />
              <br />
              In addition to coding, I'm always curious about new tools and
              technologies, and I'm constantly looking for opportunities to
              expand my knowledge. I'm excited about contributing to innovative
              projects and connecting with others in the tech
              community."Passionate about turning ideas into impactful digital
              experiences"
              <br />
              Feel free to explore my work, and let's collaborate!
            </blockquote>
          </motion.div>
        </section>

        <section className="Acards">
          {cardData.map((card, index) => (
            <Acards key={index} Title={card.title} skills={card.skills} />
          ))}
        </section>
      </main>
    </>
  );
}
export default About;
