import React from 'react';
import './Skills.css';
import SkillsCards from './../../Components/Cards/SkillsCards/SkillsCards.js';
import Reactjs from "../../Assets/Reactjs.png";
import nextjs from "../../Assets/nextjs.png";
import UIUX from "../../Assets/UIUX.png";
import wordpress from "../../Assets/wordpress.png";
import python from "../../Assets/python.png";
import git from "../../Assets/git.png";
import ReactNative from "../../Assets/ReactNative.png";
const skillsData = [
  {
    title: "ReactJS ",
    logo: Reactjs,
    description: "Skilled in building responsive web apps with React.js, using components, hooks, and state management.",
  },
  {
    title: "NextJS  ",
    logo: nextjs,
    description: "Experienced in building fast, SEO-friendly web applications, leveraging server-side rendering, dynamic routing.",
  },
  {
    title: "Python (django) ",
    logo: python,
    description: "Building applications using Django, with expertise in RESTful APIs, database integration, and backend optimization.",
  },
  {
    title: "UI/UX Design",
    logo: UIUX,
    description: "Proficient in crafting visually appealing interfaces, focusing on user-centric design and seamless experiences in figma ",
  },
  {
    title: "React Native ",
    logo: ReactNative,
    description: "Skilled in building cross-platform mobile apps with React Native, using components, hooks, and native modules.",
  },
  {
    title: "WordPress ",
    logo: wordpress,
    description: "Experienced in creating and customizing WordPress websites, optimizing themes, plugins, and performance.",
  },
  {
    title: "GIT",
    logo: git,
    description: "Experienced in working with Git commands such as clone, commit, branch, merge, and pull to maintain and organize projects.",
  },
];

export default function Skills() {
  return (
    <div id="skills" className="SkillsPage">
      <h1 className="skilltitle">Ski<u style={{ textDecorationColor: '#d18700' }}>lls</u></h1>
      <div className="skillsCards">
        {skillsData.map((skill, index) => (
          <SkillsCards
            key={index}
            title={skill.title}
            description={skill.description}
            logo={skill.logo}
            delay={index * 2}
          />
        ))}
      </div>
    </div>
  );
}
