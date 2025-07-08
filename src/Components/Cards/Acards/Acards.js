import React from "react";
import { motion } from "framer-motion";
import "./Acards.css";

export default function Acards(props) {
  return (
    <>
      <motion.div
        className="parent"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration:0.5, delay: 0.75}} 
        viewport={{ once: true }}
      >
        <div className="card">
          <div className="content-box">
            <span className="card-title">{props.Title}</span>
            <p className="card-content">
              <ul>
                {props.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
