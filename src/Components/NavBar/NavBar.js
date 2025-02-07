import React from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <b>Aadityadav</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="home" smooth={true} duration={500}>
                <b>Home</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about" smooth={true} duration={500}>
                <b>About</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="skills" smooth={true} duration={500}>
                <b>Skills</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="projects" smooth={true} duration={500}>
                <b>Projects</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" smooth={true} duration={500}>
                <b>Contact</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
