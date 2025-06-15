import React from 'react';
import { NavLink } from 'react-router-dom'; // Link yerine NavLink
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Kadir.</div>
      
      <div className="nav-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "active-link" : ""}
          end // Ana sayfa için tam eşleşme
        >Home</NavLink>

        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >About</NavLink>

        <NavLink 
          to="/projects" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >Portfolio</NavLink>

        <NavLink 
          to="/blog" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >Blog</NavLink>

        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;