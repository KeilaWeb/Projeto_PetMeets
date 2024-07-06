import React from 'react';
import '../../styles/components/_navbar.sass';
import logo from '../../img/logo_petmeets.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-container">
        <img alt="Logo PetMeets" loading="lazy" width="220" height="48" decoding="async" src={logo} className="navbar-logo" />
        <ul className="navbar-links">
          <li><a href="#home"><span>Home</span></a></li>
          <li><a href="#partners"><span>Parceiros</span></a></li>
          <li><a href="#blog"><span>Blog</span></a></li>
        </ul>
        <div className="navbar-buttons">
          <Link to="/login">
            <button className="navbar-button">Login</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
