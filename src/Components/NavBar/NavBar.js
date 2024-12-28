import React from 'react'
import './NavBar.css';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="http://localhost:3000/">
    <b>Aadityadav</b>
    {/* <img src="https://png.pngtree.com/png-clipart/20231020/original/pngtree-avatar-of-a-brunette-man-png-image_13379740.png" alt="Aadityadav" height={30}/> */}
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><b>Home</b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About"><b>About</b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Skills"><b>Skills</b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Project"><b>Project</b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact"><b>Contact</b></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
