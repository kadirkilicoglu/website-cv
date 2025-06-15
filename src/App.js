// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetail from './components/ProjectDetail';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import About from './components/About'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Hero />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;