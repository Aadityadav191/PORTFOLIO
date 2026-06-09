import DashBoard from "../Assets/DashBoard.png";
import Plant from "../Assets/Plant.png";
import Bookrenting from "../Assets/Project6.png";
import PortfolioIMG from "../Assets/PortfolioIMG.png";
import ChatBot from "../Assets/ChatBot.png";
import shipifyy from "../Assets/shipifyy.png";
import Core from "../Assets/Core.png";
import MobileApp from "../Assets/MobileApp.png";
import Project3 from "../Assets/Project3.png";

export const projects = [
  {
    id: 1,
    name: "Shipify Website",
    image: shipifyy,
    description: "A modern shipping and logistics website built with React.js featuring responsive design and smooth user experience.",
    link: "https://shipifyy.netlify.app/",
    github: "https://github.com/Aadityadav191/shipifyy.git",
    techStack: ["React", "CSS", "JavaScript"],
    featured: true,
  },

  {
    id: 2,
    name: "E-Commerce Website",
    image: Project3,
    description: "A fully responsive e-commerce platform with product listings, modern UI, and seamless shopping experience.",
    link: "https://bazaaaaar.netlify.app/",
    github: "https://github.com/Aadityadav191/Bazaar.com.git",
    techStack: ["React", "CSS", "JavaScript"],
    featured: true,
  },

  {
    id: 3,
    name: "Core Developers",
    image: Core,
    description: "A professional company website built with React.js showcasing services, projects, and team information.",
    link: "https://Coredevelopers.org/",
    github: "https://github.com/Aadityadav191/Core-Developers-",
    techStack: ["React", "CSS", "JavaScript"],
    featured: true,
  },

  {
    id: 4,
    name: "React Dashboard",
    image: DashBoard,
    description: "A dynamic admin dashboard with analytics, charts, and interactive UI components.",
    link: "https://react-dashboard-adminpannel.netlify.app/",
    github: "https://github.com/Aadityadav191/React-Dashboard.git",
    techStack: ["React", "CSS", "Charts"],
    featured: true,
  },

  {
    id: 5,
    name: "Personal AI Chatbot",
    image: ChatBot,
    description: "An AI-powered chatbot application with a modern interface and interactive conversation experience.",
    link: "https://aadit-ai.netlify.app/",
    github: "https://github.com/Aadityadav191/Personal-AI-Chatbot-App.git",
    techStack: ["React", "AI API", "JavaScript"],
    featured: true,
  },

  {
    id: 6,
    name: "Coffee Website",
    image: Plant,
    description: "A responsive coffee shop website inspired by Himalayan Java, featuring elegant UI and smooth navigation.",
    link: "https://himalayanjavacoffee.netlify.app/",
    github: "https://github.com/Aadityadav191/Himalayan-Java-Coffee.git",
    techStack: ["React", "CSS", "JavaScript"],
    featured: false,
  },

  {
    id: 7,
    name: "Portfolio Website",
    image: PortfolioIMG,
    description: "A personal portfolio website showcasing projects, skills, and professional experience.",
    link: "https://aadityadav.netlify.app/",
    github: "https://github.com/Aadityadav191/React-Dashboard.git",
    techStack: ["React", "Framer Motion", "CSS"],
    featured: false,
  },

  {
    id: 8,
    name: "Book Renting Website",
    image: Bookrenting,
    description: "A user-friendly book rental platform designed to simplify book discovery and rental management.",
    link: "https://RentaBook.netlify.app/",
    github: "https://github.com/Aadityadav191/React-Dashboard.git",
    techStack: ["React", "CSS", "JavaScript"],
    featured: false,
  },

  {
    id: 9,
    name: "Mobile App",
    image: MobileApp,
    description: "A cross-platform mobile application focused on delivering a smooth and responsive user experience.",
    github: "https://github.com/Aadityadav191/Mobile-APP.git",
    techStack: ["React Native", "Mobile Development"],
    featured: false,
  },
];