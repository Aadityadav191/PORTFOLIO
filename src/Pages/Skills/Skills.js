import React from 'react'
import './Skills.css';
import SkillsCards from './../../Components/Cards/SkillsCards/SkillsCards';
import Reactjs from "../../Assets/Reactjs.png";
import nextjs from "../../Assets/nextjs.png";
import UIUX from "../../Assets/UIUX.png";
import wordpress from "../../Assets/wordpress.png";
import python from "../../Assets/python.png";
import git from "../../Assets/git.png";




const skillsData = [
  {
    title: "ReactJS Development",
    logo:Reactjs,
    description: "Skilled in building responsive web apps with React.js, using components, hooks, and state management.",
  },

  {
    title: "NextJS  Development",
    logo:nextjs,
    description: "Experienced in building fast, SEO-friendly web applications, leveraging server-side rendering, dynamic routing ."
  },

  {
    title: "Python(Django)",
    logo:python,
    description: "Building applications using Django, with expertise in RESTful APIs, database integration, and backend optimization."
  },

  {
    title: "UI/UX Design",
    logo:UIUX,
    description: "Proficient in crafting visually appealing interfaces, focusing on user-centric design and seamless experiences."
  },

  {
    title: "WordPress Development",
    logo:wordpress,
    description: "Experienced in creating and customizing WordPress websites, optimizing themes, plugins, and performance."
  },
  {
    title: "GIT",
    logo:git,
    description: "Experienced in working with Git commands such as clone, commit, branch, merge, and pull to maintain and organize projects."
  },
  
];

export default function Skills() {
  return (
    <div className='SkillsPage'>
      <h1 className='skilltitle'> Skills  </h1>
      <div className='skillsCards'>
        {skillsData.map((skill, index) => (
          <SkillsCards key={index} title={skill.title} description={skill.description} logo={skill.logo}  />
        ))}
      </div>
    </div>
  )
}
   
