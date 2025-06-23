import React, { useState } from "react";
import "./Forms.css";
import { motion } from "framer-motion";

export default function Forms() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Thank you for contacting me, I will get back to you soon!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="contact-form">
      <span className="heading">Contact Me :</span>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <motion.input
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.75 }}
          viewport={{ once: true }}
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "error-input" : ""}
        />
        {errors.name && <div className="error">{errors.name}</div>}

        <label htmlFor="email">Email:</label>
        <motion.input
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.85 }}
          viewport={{ once: true }}
          type="text"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "error-input" : ""}
        />
        {errors.name && <div className="error">{errors.name}</div>}

        <label htmlFor="message">Message:</label>
        <motion.textarea
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.95}}
          viewport={{ once: true }}
          name="message"
          placeholder="Write your Message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <div className="error">{errors.message}</div>}

        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}
