import React from "react";
import CLeft from "../assets/cleft.jpg";
import "../styles/Contact.css";
import emailjs from '@emailjs/browser';
function Contact() {

    const sendEmail = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_bufr6pb', 'template_4xsmxou', e.target, 'M7IwF2KnFPDkd7iWQ');
    }
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${CLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" onSubmit={sendEmail}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;