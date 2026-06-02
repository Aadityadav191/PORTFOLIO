import React from "react";
import { motion } from "framer-motion"; 
import "./Project.css";
import Pcards from "./../../Components/Cards/Pcards/Pcards.js";
import DashBoard from "../../Assets/DashBoard.png";
import Plant from "../../Assets/Plant.png";
import Bookrenting from "../../Assets/Bookrenting.png";
import PortfolioIMG from "../../Assets/PortfolioIMG.png";
import ChatBot from "../../Assets/ChatBot.png";
import shipifyy from "../../Assets/shipifyy.png";
import Core from "../../Assets/Core.png";
import MobileApp from "../../Assets/MobileApp.png";

const projects = [
  {
    name: "Personal-AI-Chatbot-App",
    image: ChatBot,
    Description: "A personal AI Chatbot App built with React.js...",
    link: "https://aadit-ai.netlify.app/",
    Github: "https://github.com/Aadityadav191/Personal-AI-Chatbot-App.git",
  },
  {
    name: "shipify Website",
    image: shipifyy,
    Description: " A shipify website built with React.js...",
    link: "https://shipifyy.netlify.app/",
    Github: "https://github.com/Aadityadav191/shipifyy.git",
  },
  {
    name: "React Dashboard",
    image: DashBoard,
    Description: "A dynamic and interactive dashboard...",
    link: "https://react-dashboard-adminpannel.netlify.app/",
    Github: "https://github.com/Aadityadav191/React-Dashboard.git",
  },
  {
    name: "Coffee Website",
    image: Plant,
    Description: "This project is a clone of the Java Coffee website...",
    link: "https://himalayanjavacoffee.netlify.app/",
    Github: "https://github.com/Aadityadav191/Himalayan-Java-Coffee.git",
  },
  {
    name: "Core Developers",
    image: Core,
    Description: "Core Developers is a website built with React.js...",
    link: "https://Coredevelopers.org/",
    Github: "https://github.com/Aadityadav191/Core-Developers-",
  },
  {
    name: "Portfolio Website",
    image: PortfolioIMG,
    Description: "A personal portfolio website built with React.js...",
    link: "https://aadityadav.netlify.app/",
    Github: "https://github.com/Aadityadav191/React-Dashboard.git",
  },
  {
    name: "BookRenting Website",
    image: Bookrenting,
    Description: "A user-friendly Book Renting Website...",
    link: "https://RentaBook.netlify.app/",
    Github: "https://github.com/Aadityadav191/React-Dashboard.git",
  },
  {
    name: "Mobile App",
    image: MobileApp,
    Description: "Developed a cross-platform mobile app...",
    Github: "https://github.com/Aadityadav191/Mobile-APP.git",
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 70, 
      damping: 15 
    } 
  },
};

export default function Project() {
  return (
    <div id="projects" className="ProjectPage">
      <h1 className="Protitle" align="center">
        My Wo<u style={{ textDecorationColor: '#d18700' }}>rks</u>
      </h1>

      <div className="project">

        <motion.div 
          className="projectscards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} 
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Pcards
                Project_Name={project.name}
                image={project.image}
                Description={project.Description}
                link={project.link}
                Github={project.Github}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}