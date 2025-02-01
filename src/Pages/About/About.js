import React from "react";
import "./About.css";
import Acards from "../../Components/Cards/Acards/Acards";
import AboutIcon from "../../Assets/abouticon.svg"; 
export default function About() {
  const cardData = [
    {
      title: "Languages",
      skills: ["C", "C++", "Javascript", "Java", "Python"],
    },
    {
      title: "Skills",
      skills: ["ReactJS", "Next.js", "Wordpress", "Django", "Git"],
    },
    {
      title: "Services",
      skills: [
        "Web Development",
        "UI/UX Design",
        "API Integration",
        "SEO",
        "Maintenance",
      ],
    },
  ];

  return (
    <>
      <main className="aboutpage">
        <h1 className="Abtheader">
          {" "}
          About Me
        </h1>

        <section className="about-Container">
          <div>
            <img src={AboutIcon} className="aboutimage" alt="Aadityadav" />
          </div>

          <div>
            <blockquote className="Atext">
              I'm <u>Aadit Yadav </u>, a passionate software engineering student
              with a keen interest in web development (Backend, Frontend), data
              science and machine learning. . Currently, I'm honing my skills in
              Python development, building intuitive web applications using
              React, and exploring the world of AI and data-driven technologies.
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
              experiences."
              <br />
              Feel free to explore my work, and let's collaborate!
            </blockquote>
          </div>
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
