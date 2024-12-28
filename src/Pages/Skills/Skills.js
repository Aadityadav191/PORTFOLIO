import React from 'react'
import './Skills.css';
import SkillsCards from './../../Components/Cards/SkillsCards/SkillsCards';

const skillsData = [
  {
    title: "ReactJS Development",
    description: "Skilled in building responsive web apps with React.js, using components, hooks, and state management to create dynamic and user-friendly interfaces.",
    link: "https://aadityadav.com.np/",
  },

  {
    title: "NextJS  Development",
    description: "Experienced in building fast, SEO-friendly web applications with Next.js, leveraging server-side rendering, dynamic routing, and API integration."
  },

  {
    title: "UI/UX Design",
    description: "Proficient in crafting visually appealing interfaces, focusing on user-centric design and seamless experiences across web and mobile platforms."
  },

  {
    title: "WordPress Development",
    description: "Experienced in creating and customizing WordPress websites, optimizing themes, plugins, and performance for diverse business needs."
  },

  {
    title: "Python(Django) Development",
    description: "Skilled in building  scalable web applications using Django, with expertise in RESTful APIs, database integration, and backend optimization."
  }
  
];

export default function Skills() {
  return (
    <div className='SkillsPage'>
      <h1 className='skilltitle'> <u> Skills </u> </h1>
      <div className='skillsCards'>
        {skillsData.map((skill, index) => (
          <SkillsCards key={index} title={skill.title} description={skill.description} link={skill.link} />
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