import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
      
        <h1 className="section-title">Bana Ulaşın</h1>

        <div className="contact-card">
          <div className="social-grid">
            <a href="https://github.com" className="social-item">
              <FaGithub className="social-icon" />
              <span>GitHub</span>
            </a>
            
            <a href="https://linkedin.com" className="social-item">
              <FaLinkedin className="social-icon" />
              <span>LinkedIn</span>
            </a>
            
            <a href="https://instagram.com" className="social-item">
              <FaInstagram className="social-icon" />
              <span>Instagram</span>
            </a>
            
            <a href="mailto:email@example.com" className="social-item">
              <FaEnvelope className="social-icon" />
              <span>E-posta</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;