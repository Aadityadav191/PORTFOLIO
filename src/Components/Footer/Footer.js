import React from "react";
import "./Footer.css";
import { FaUserAlt, FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-scroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="brand-logo">
            <FaUserAlt className="icon-gap" /> AADITYADAV
          </h2>
          <p className="brand-tagline">
            Building digital experiences with precision and passion.
          </p>
          <div className="social-links">
            <a href="https://github.com/Aadityadav191" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/aadit-yadav-b17636258/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/aadityadavvv/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/Aadityadav.comm" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <h3>Explore</h3>
          <ul>
            <li><Link to="home" smooth={true} duration={200}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={200}>About</Link></li>
            <li><Link to="skills" smooth={true} duration={200}>Skills</Link></li>
            <li><Link to="projects" smooth={true} duration={200}>Projects</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <div className="contact-item">
            <IoCall className="contact-icon" />
            <span>9821747900</span>
          </div>
          <div className="contact-item">
            <TfiEmail className="contact-icon" />
            <a href="mailto:aadityadav.dev@gmail.com">aadityadav.dev@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaLocationDot className="contact-icon" />
            <span>New Baneshwor, Kathmandu</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} AADITYADAV. All rights reserved.</p>
      </div>
    </footer>
  );
}