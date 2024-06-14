import React from 'react';
import '../../styles/components/_navbar.sass';
import logo from '../../img/logo_petmeets.png'; // Ajuste o caminho conforme necessário

export function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-container">
        <img
          alt="Logo PetMeets"
          loading="lazy"
          width="220"
          height="48"
          decoding="async"
          src={logo}
          className="navbar-logo"
        />
        <ul className="navbar-links">
          <li><a href="#home"><span>Home</span></a></li>
          <li><a href="#partners"><span>Parceiros</span></a></li>
          <li><a href="#blog"><span>Blog</span></a></li>
        </ul>
        <div className="navbar-buttons">
          <a target="_blank" href="https://app.tec.pet/#/auth/login">
            <button className="navbar-button">Login</button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;