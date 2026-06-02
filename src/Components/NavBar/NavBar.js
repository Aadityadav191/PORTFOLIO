import React from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

// 1. Define your nav items in an array
const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "Blogs", label: "Blogs" }, 
  { id: "contact", label: "Contact" },
];

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg custom-nav">
      <div className="container-nav">
        <ul className="navbar-nav mx-auto">
          {NAV_LINKS.map(({ id, label }) => (
            <li className="nav-item" key={id}>
              <Link 
                className="nav-link" 
                to={id} 
                smooth={true} 
                duration={200}
                spy={true}           
                activeClass="active" 
                offset={-70}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}