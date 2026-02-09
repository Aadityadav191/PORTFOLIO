import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home.js";
import About from "./Pages/About/About.js";
import Contact from "./Pages/Contact/Contact.js";
import NavBar from "./Components/NavBar/NavBar.js";
import Project from "./Pages/Project/Project.js";  
import Skills from "./Pages/Skills/Skills.js";  
import Footer from "./Components/Footer/Footer.js"; 
import Background from "./Pages/background/background.js";
import TimelinePage from "./Pages/TimelinePage/TimelinePage.jsx";

function App() {
  return (
    <>
      <NavBar />

      <Home />
      <About />
      <TimelinePage />
      <Skills /> 
      <Project />
      <Background />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
