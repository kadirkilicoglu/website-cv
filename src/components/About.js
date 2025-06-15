import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="page-header">
        <h1 className="section-title">Hakkımda</h1>
        <p className="section-subtitle">Becerilerim ve Deneyimlerim</p>
      </div>

      <div className="about-content">
        <div className="profile-section">
          <div className="profile-image">
            <img 
              src="https://www.nemutlu.net/images/blog-olusturma-nedira676a3e8-1632-477c-993b-93cb1af29de8.jpg" 
              alt="Jey Austen" 
            />
          </div>
          
          <div className="profile-info">
            <h2>Jey Austen</h2>
            <h3>Full Stack Developer</h3>
            <p className="bio">
              Bilgisayar mühendisliği öğrencisi ve tutkulu bir geliştirici olarak 
              modern web teknolojileri üzerine uzmanlaşıyorum.
            </p>
          </div>
        </div>

        <div className="details-grid">
          <div className="detail-card">
            <h4>Teknik Beceriler</h4>
            <ul>
              <li>React & Next.js</li>
              <li>Node.js & Express</li>
              <li>Python & Django</li>
              <li>MongoDB & PostgreSQL</li>
              <li>Docker & AWS</li>
            </ul>
          </div>

          <div className="detail-card">
            <h4>Profesyonel Deneyim</h4>
            <ul>
              <li>XYZ Şirketi - Frontend Developer (2023-Present)</li>
              <li>ABC StartUp - Full Stack Developer (2021-2023)</li>
              <li>Freelance Projects (2019-2021)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;