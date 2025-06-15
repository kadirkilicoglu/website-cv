import React from 'react';
import { Link } from 'react-router-dom';
import './ContentStyles.css'; // Ortak stil dosyası

const projects = [
  {
    id: 1,
    title: 'E-Ticaret Platformu',
    description: 'React & Node.js ile Full Stack Çözüm',
    date: '15 Mart 2024',
    image: 'https://www.nemutlu.net/images/blog-olusturma-nedira676a3e8-1632-477c-993b-93cb1af29de8.jpg'
  },
  {
    id: 2,
    title: 'Mobil Uygulama',
    description: 'Flutter ile Cross-Platform Geliştirme',
    date: '28 Şubat 2024',
    image: 'https://www.nemutlu.net/images/blog-olusturma-nedira676a3e8-1632-477c-993b-93cb1af29de8.jpg'
  }
];

const ProjectsPage = () => {
  return (
    <section className="content-section">
      <div className="page-header">
        <h1 className="section-title">Projelerim</h1>
        <p className="section-subtitle">Tamamlanan Çalışmalarım</p>
      </div>

      <div className="card-container">
        {projects.map((project) => (
          <article className="content-card" key={project.id}>
            <img 
              src={project.image} 
              alt={project.title} 
              className="card-image"
              loading="lazy"
            />
            <div className="card-content">
              <h2>{project.title}</h2>
              <div className="meta-info">
                <span className="date">{project.date}</span>
              </div>
              <p className="description">{project.description}</p>
              <Link to={`/projects/${project.id}`} className="card-button">
                Detayları Gör
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;