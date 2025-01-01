import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import NavBar from './Components/NavBar/NavBar';
import Project from './Pages/Project/Project';
import Skills from './Pages/Skills/Skills';
import Footer from './Components/Footer/Footer';
import { BrowserRouter } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";



function App() {
  return ( 
    <>
    <BrowserRouter>
    <NavBar/>

      
      <Home/>
      <About/>
      <Skills/>
      <Project/> 
      <Contact/>
      <Footer/>
      
      {/* <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/> 
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Project" element={<Project/>} />
        <Route path="/Skills" element={<Skills/>} />
        <Route path="/Footer" element={<Footer/>} />
        <Route path="*" element={<404NotFoundPage/>} />
        <Route path="*" element={<>Oops Not Found </>} /> //This is for user when they click unknown page
      </Routes> */}
    
    </BrowserRouter>
    </>
  );
}

export default App;
