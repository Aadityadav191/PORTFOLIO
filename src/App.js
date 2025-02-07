import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import NavBar from "./Components/NavBar/NavBar";
import Project from "./Pages/Project/Project";
import Skills from "./Pages/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import Background from "./Pages/background/background";

function App() {
  return (
    <>
      <NavBar />

      <Home />
      <About />
      <Skills />
      <Project />
      <Background />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
