import React from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg custom-nav">
      <div className="container-nav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link" to="home" smooth={true} duration={200}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about" smooth={true} duration={200}>About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="skills" smooth={true} duration={200}>Skills</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="projects" smooth={true} duration={200}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="contact" smooth={true} duration={200}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}