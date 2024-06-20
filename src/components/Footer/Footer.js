import React from 'react';
import '../../styles/components/_footer.sass';
import insta from '../../img/instagram.png';
import youtube from '../../img/youtube.png';
import blogger from '../../img/blogger.png';

const Footer = () => {
  return (
    <footer className="footer" id="footer" role="contentinfo">
      <div className="page--full">
        <div className="footer--top">
          <div className="social--follow">
            <ul>
              <li className="social--follow-item">
                <a aria-label="YouTube" className="social-follow-link" href="https://www.youtube.com/@PetMeet-group/videos" target="_blank" rel="noopener noreferrer">
                  <img className="social--icon" src={youtube} alt='YouTube PetMeets' />
                </a>
              </li>
              <li className="social--follow-item">
                <a aria-label="LinkedIn" className="social-follow-link" href="https://www.linkedin.com/showcase/googleworkspace/" target="_blank" rel="noopener noreferrer">
                  <img className="social--icon" src={insta} alt='Instagram PetMeets' />
                </a>
              </li>
              <li className="social--follow-item">
                <a aria-label="Instagram" className="social-follow-link" href="https://www.instagram.com/googleworkspace/" target="_blank" rel="noopener noreferrer">
                  <img className="social--icon" src={blogger} alt='Blogger PetMeets' />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer--middle">
          <ul className="navbar-links">
            <li><a href="#home"><span>Home</span></a></li>
            <li><a href="#partners"><span>Parceiros</span></a></li>
            <li><a href="#blog"><span>Blog</span></a></li>
          </ul>
        </div>
        <div className="footer--bottom">
          <ul>
            <li>
              <a href="https://policies.google.com/privacy?hl=pt-BR&fg=1" target="_blank" rel="noopener noreferrer">Politica de privacidade</a>
            </li>
            <li>
              <a href="#home">©PetMeets - 2024</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
