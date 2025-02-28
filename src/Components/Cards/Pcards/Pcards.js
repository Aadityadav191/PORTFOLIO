import React from "react";
import { motion } from "framer-motion"; 
import "./Pcards.css";

export default function Pcards(props) {
  return (
    <>
      <motion.div
        className="Pcard"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1}} 
        viewport={{ once: true }}
      >
        <img
          src={props.image}
          alt="Dashboard"
          className="card-image"
          style={{
            width: "100%", 
            height: "auto", 
            borderRadius: "8px", 
          }}
        />
        <div className="Pcard__content">
          <p className="Pcard__title">{props.Project_Name}</p>
          <p className="Pcard__description">
            {props.Description}
          </p>

          <a href={props.link} target="blank">
            <button className="Pcard__button">Live Demo</button>
          </a>

          <a href={props.Github} target="blank">
            <button className="Pcard__button secondary">Source Code</button>
          </a>
        </div>
      </motion.div>
    </>
  );
}


