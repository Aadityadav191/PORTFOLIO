import React from "react";
import "./Contact.css";
import Forms from "../../Components/Forms/Forms.js";
import Massege from "../../Assets/Massege.svg";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <div id="contact" className="contactpage">
        <h1 align="center" className="ContHeader">
          {" "}
          Get in Touch{" "}
        </h1>

        <div className="container">
          <div>
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.75 }}
              viewport={{ once: true }}
              src={Massege}
              alt="Message Icon"
              className="contactimage"
            />
          </div>

          <div>
            <Forms />
          </div>
        </div>
      </div>
    </>
  );
}
