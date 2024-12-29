import React from 'react'
import './Skills.css';
import SkillsCards from './../../Components/Cards/SkillsCards/SkillsCards';
import Reactjs from "../../Assets/Reactjs.png";
import nextjs from "../../Assets/nextjs.png";
import UIUX from "../../Assets/UIUX.png";
import wordpress from "../../Assets/wordpress.png";
import python from "../../Assets/python.png";




const skillsData = [
  {
    title: "ReactJS Development",
    logo:Reactjs,
    description: "Skilled in building responsive web apps with React.js, using components, hooks, and state management to create dynamic and user-friendly interfaces.",
  },

  {
    title: "NextJS  Development",
    logo:nextjs,
    description: "Experienced in building fast, SEO-friendly web applications with Next.js, leveraging server-side rendering, dynamic routing, and API integration."
  },

  {
    title: "UI/UX Design",
    logo:UIUX,
    description: "Proficient in crafting visually appealing interfaces, focusing on user-centric design and seamless experiences across web and mobile platforms."
  },

  {
    title: "WordPress Development",
    logo:wordpress,
    description: "Experienced in creating and customizing WordPress websites, optimizing themes, plugins, and performance for diverse business needs."
  },

  {
    title: "Python(Django) Development",
    logo:python,
    description: "Skilled in building  scalable web applications using Django, with expertise in RESTful APIs, database integration, and backend optimization."
  }
  
];

export default function Skills() {
  return (
    <div className='SkillsPage'>
      <h1 className='skilltitle'> <u> Skills </u> </h1>
      <div className='skillsCards'>
        {skillsData.map((skill, index) => (
          <SkillsCards key={index} title={skill.title} description={skill.description} logo={skill.logo}  />
        ))}
      </div>
    </div>
  )
}
   

// import React from 'react'
// import './Skills.css';
// import SkillsCards from './../../Components/Cards/SkillsCards/SkillsCards';


// export default function Skills() {
//   return (
//     <>

  

//   <div className='SkillsPage'>
//     <h1  className='skilltitle'> <u> Skills </u> </h1>
    
//     <div className='skillsCards'>
//        <SkillsCards title={"React Development"} description={" If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets"} link={"https://aadityadav.com.np/"} />
//        <SkillsCards title={"UI/UX Design"} description={"Props are also how you pass data from one component to another, as parameters. "}/>
//        <SkillsCards title={"WordPress Development"} description={" If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets"}/>
//        <SkillsCards title={"Python Development"} description={" If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets"}/>
//        <SkillsCards title={"Django Development"} description={" If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets"}/>
//     </div>
       
//     </div>
//   </>
//   )}