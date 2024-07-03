// src/components/Contact.js
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., sending the data to a server
    console.log("Form submitted:", formData);
    // Reset the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>
        If you have any questions or would like to get in touch, please use the
        contact form below:
      </p>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
