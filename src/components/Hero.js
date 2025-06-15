// Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleDownloadCV = () => {
    const pdfUrl = '/cv/Masum_Rana_CV.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Masum_Rana_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="header-group">
          <h4 className="greeting">Hello I'm</h4>
          <h1 className="name">Abdulkadir Kılıçoğlu</h1>
          <div className="title-container">
            <span className="main-title">Computer</span>
            <span className="sub-title">& Electrical Engineer</span>
          </div>
        </div>

        <p className="description">
          <span className="specialty">Solution Architect</span> specializing in 
          <span className="focus-area"> AI Systems & IoT Networks</span>
        </p>

        <div className="action-section">
          <button className="cv-button" onClick={handleDownloadCV}>
            Download CV
            <div className="button-glow"></div>
          </button>
          
          <div className="achievements">
            <div className="achievement-item">
              <span className="number">5+</span>
              <span className="label">Years Experience</span>
            </div>
            <div className="achievement-item">
              <span className="number">25+</span>
              <span className="label">Completed Projects</span>
            </div>
          </div>
        </div>
      </div>

      <div className="tech-effects">
  <div className="circuit-grid"></div>
  <div className="signal-dots">
    <div className="dot pulse-1"></div>
    <div className="dot pulse-2"></div>
    <div className="dot pulse-3"></div>
  </div>
  
  {/* Yeni Eklenen Elementler */}
  <div className="energy-flow"></div>
  <div className="floating-chip"></div>
  <div className="binary-stream">01101010011001010110100101101110</div>
</div>
    </section>
  );
};

export default Hero;