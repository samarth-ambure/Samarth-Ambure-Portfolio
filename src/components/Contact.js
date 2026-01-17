import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <footer id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-info">
        <p>Location: Pune, India</p>
        <p>Email: <a href="mailto:samarthambure08@gmail.com">samarthambure08@gmail.com</a></p>
        <p>Phone: +91 7350576767</p>
      </div>
      <div className="social-links">
        <a href="https://github.com/samarth-ambure" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <p className="footer-note">© 2026 Samarth Ambure. All rights reserved.</p>
    </footer>
  );
}

export default Contact;