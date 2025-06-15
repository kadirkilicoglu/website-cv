import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects"> {/* ID ekleyin */}
      <h2>Projelerim</h2>
      <div className="projects-grid">
        <div className="project-item">Proje 1</div>
        <div className="project-item">Proje 2</div>
        <div className="project-item">Proje 3</div>
      </div>
    </section>
  );
};

export default Projects;