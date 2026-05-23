import React from "react";
import "./Project.css";
import Pcards from "./../../Components/Cards/Pcards/Pcards.js";
// import projecticon from "../../Assets/projecticon.svg";
import DashBoard from "../../Assets/DashBoard.png";
import Plant from "../../Assets/Plant.png";
import Bookrenting from "../../Assets/Bookrenting.png";
import PortfolioIMG from "../../Assets/PortfolioIMG.png";
// import Dowry from "../../Assets/Dowry.png";
import ChatBot from "../../Assets/ChatBot.png";
import shipifyy from "../../Assets/shipifyy.png";
import Core from "../../Assets/Core.png";
import MobileApp from "../../Assets/MobileApp.png";

const projects = [
  {
    name: "Personal-AI-Chatbot-App",
    image: ChatBot,
    Description:
      "A personal AI Chatbot App built with React.js, designed to provide users with an interactive and engaging chatbot experience using OpenAI API.",
    link: "https://aadit-ai.netlify.app/",
    Github: "https://github.com/Aadityadav191/Personal-AI-Chatbot-App.git",
  },
  {
    name: "shipify Website",
    image: shipifyy,
    Description:
      " A shipify website built with React.js, designed to provide users with an interactive and engaging chatbot experience using OpenAI API.",
    link: "https://shipifyy.netlify.app/",
    Github: "https://github.com/Aadityadav191/shipifyy.git",
  },
  // {
  //   name: "Dowry Calculator App",
  //   image: Dowry,
  //   Description:
  //     "A Dowry Calculator App built with React.js, designed to help users calculate and understand dowry amounts based on various parameters.",
  //   link: "https://calculateyourdaijo.netlify.app/",
  //   Github: "https://github.com/Aadityadav191/Calculate-Your-Dowry.git",
  // },
  {
    name: "React Dashboard",
    image: DashBoard,
    Description:
      "A dynamic and interactive dashboard built with React.js, featuring responsive design .Includes components like charts, tables, and user management features.",
    link: "https://react-dashboard-adminpannel.netlify.app/",
    Github: "https://github.com/Aadityadav191/React-Dashboard.git",
  },
  {
    name: "Coffee Website",
    image: Plant,
    Description:
      "This project is a clone of the Java Coffee website built using Reactjs.The use of React components, state management, and routing for a seamless browsing experience for users.",
    link: "https://himalayanjavacoffee.netlify.app/",
    Github: "https://github.com/Aadityadav191/Himalayan-Java-Coffee.git",
  },
  {
    name: "Core Developers",
    image: Core,
    Description:
      "Core Developers is a website built with React.js, designed to showcase the profiles and projects of core developers in the tech industry. It features a clean and modern design, allowing users to explore the contributions",
    link: "https://Coredevelopers.org/",
    Github: "https://github.com/Aadityadav191/Core-Developers-",
  },
  
  {
    name: "Portfolio Website",
    image: PortfolioIMG,
    Description:
      "A personal portfolio website built with React.js, showcasing my skills, projects, and experience with a modern design and responsive layout",
    link: "https://aadityadav.netlify.app/",
    Github: "https://github.com/Aadityadav191/React-Dashboard.git",
  },
  {
    name: "BookRenting Website",
    image: Bookrenting,
    Description:
      "A user-friendly Book Renting Website developed with React.js, allowing users to browse, rent, and manage books online.It includes features like search filters, user accounts, and rental management. ",
    link: "https://RentaBook.netlify.app/",
    Github: "https://github.com/Aadityadav191/React-Dashboard.git",
  },
  {
    name: "Mobile App",
    image: MobileApp,
    Description:
      "Developed a cross-platform mobile app using React Native with Expo, implementing responsive UI and native features for both iOS and Android. ",
    Github: "https://github.com/Aadityadav191/Mobile-APP.git",
  },
];

export default function Project() {
  return (
    <div id="projects" className="ProjectPage">
      <h1 className="Protitle" align="center">
        My Wo<u style={{ textDecorationColor: '#d18700' }}>rks</u>
      </h1>

      <div className="project">

        <div className="projectscards">
          {projects.map((project, index) => (
            <Pcards
              key={index}
              Project_Name={project.name}
              image={project.image}
              Description={project.Description}
              link={project.link}
              Github={project.Github}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
