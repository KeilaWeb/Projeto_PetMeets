import React from 'react';
import '../../styles/components/_footer.sass';

const Footer = () => {
  return (
    <footer className="footer" id="footer" role="contentinfo">
      <div className="page--full">
        <div className="footer--top">
          <div className="social--follow">
            <ul>
              <li className="social--follow-item">
                <a aria-label="Twitter" className="social--follow-link" href="https://x.com/home" target="_blank" rel="noopener noreferrer">
                  <svg className="icon-twitter social--icon" viewBox="0 0 273.4 222.2" xmlns="http://www.w3.org/2000/svg">
                    <path className="svg-icon" d="M273.4 26.3c-10.1 4.5-20.9 7.5-32.2 8.8 11.6-6.9 20.5-17.9 24.7-31-10.9 6.4-22.9 11.1-35.7 13.6A55.92 55.92 0 0 0 189.3 0c-31 0-56.1 25.1-56.1 56.1 0 4.4.5 8.7 1.5 12.8C88 66.5 46.7 44.2 19 10.3c-4.8 8.3-7.6 17.9-7.6 28.2 0 19.5 9.9 36.6 25 46.7-9.2-.3-17.8-2.8-25.4-7v.7c0 27.2 19.3 49.8 45 55-4.7 1.3-9.7 2-14.8 2-3.6 0-7.1-.4-10.6-1 7.1 22.3 27.9 38.5 52.4 39-19.2 15-43.4 24-69.7 24-4.5 0-9-.3-13.4-.8 24.8 15.9 54.3 25.2 86 25.2 103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3 11.1-8 20.6-17.9 28.1-29.1z"></path>
                  </svg>
                </a>
              </li>
              <li className="social--follow-item">
                <a aria-label="YouTube" className="social--follow-link" href="https://www.youtube.com/@PetMeet-group/videos" target="_blank" rel="noopener noreferrer">
                  <span aria-hidden="true" className="material-icons-extended">video_youtube</span>
                </a>
              </li>
              <li className="social--follow-item">
                <a aria-label="LinkedIn" className="social--follow-link" href="https://www.linkedin.com/showcase/googleworkspace/" target="_blank" rel="noopener noreferrer">
                  <svg className="icon-linkedin social--icon" viewBox="0 2 25.8 20.2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"></path>
                  </svg>
                </a>
              </li>
              <li className="social--follow-item">
                <a aria-label="Instagram" className="social--follow-link" href="https://www.instagram.com/googleworkspace/" target="_blank" rel="noopener noreferrer">
                  <svg className="icon-instagram social--icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20,2 L4,2 C2.9,2 2.01,2.9 2.01,4 L2,20 C2,21.1 2.9,22 4,22 L20,22 C21.1,22 22,21.1 22,20 L22,4 C22,2.9 21.1,2 20,2 Z M12,8 C14.21,8 16,9.79 16,12 C16,14.21 14.21,16 12,16 C9.79,16 8,14.21 8,12 C8,9.79 9.79,8 12,8 Z M4.5,20 C4.22,20 4,19.78 4,19.5 L4,11 L6.09,11 C6.04,11.33 6,11.66 6,12 C6,15.31 8.69,18 12,18 C15.31,18 18,15.31 18,12 C18,11.66 17.96,11.33 17.91,11 L20,11 L20,19.5 C20,19.78 19.78,20 19.5,20 L4.5,20 Z M20,6.5 C20,6.78 19.78,7 19.5,7 L17.5,7 C17.22,7 17,6.78 17,6.5 L17,4.5 C17,4.22 17.22,4 17.5,4 L19.5,4 C19.78,4 20,4.22 20,4.5 L20,6.5 Z"></path>
                  </svg>
                </a>
              </li>
              <li className="social--follow-item">
                <a aria-label="Facebook" className="social--follow-link" href="https://www.facebook.com/googleworkspace/" target="_blank" rel="noopener noreferrer">
                  <svg className="icon-facebook social--icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M20.896 22.8496C21.5056 22.8496 21.9998 22.3553 21.9998 21.7458V3.95349C21.9998 3.34374 21.5056 2.84961 20.896 2.84961H3.1038C2.49405 2.84961 2 3.34374 2 3.95349V21.7458C2 22.3553 2.49405 22.8496 3.1038 22.8496H20.896Z" fill="#5F6368" fillRule="evenodd"></path>
                    <path clipRule="evenodd" d="M15.7941 22.8495V15.1076H18.3928L18.7819 12.0904H15.7941V10.164C15.7941 9.29044 16.0367 8.69508 17.2894 8.69508L18.8871 8.69441V5.99583C18.6107 5.95913 17.6623 5.87695 16.559 5.87695C14.2554 5.87695 12.6784 7.28302 12.6784 9.86527V12.0904H10.0731V15.1076H12.6784V22.8495H15.7941Z" fill="white" fillRule="evenodd"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer--middle">
          <ul>
            <li>
              <a href="https://workspace.google.com/intl/pt-BR/products/workspace/" target="_blank" rel="noopener noreferrer">Todos os Produtos</a>
            </li>
            <li>
              <a href="https://workspace.google.com/intl/pt-BR/pricing.html" target="_blank" rel="noopener noreferrer">Preços</a>
            </li>
            <li>
              <a href="https://support.google.com/a#topic=7570177" target="_blank" rel="noopener noreferrer">Ajuda</a>
            </li>
            <li>
              <a href="https://support.google.com/a/contactupgradesupport" target="_blank" rel="noopener noreferrer">Suporte</a>
            </li>
            <li>
              <a href="https://workspace.google.com/intl/pt-BR/whatsnew.html" target="_blank" rel="noopener noreferrer">Novidades</a>
            </li>
            <li>
              <a href="https://workspace.google.com/intl/pt-BR/whatsnew/working-together.html" target="_blank" rel="noopener noreferrer">Trabalhando Juntos</a>
            </li>
          </ul>
        </div>
        <div className="footer--bottom">
          <ul>
            <li>
              <a href="https://policies.google.com/privacy?hl=pt-BR&fg=1" target="_blank" rel="noopener noreferrer">Privacidade</a>
            </li>
            <li>
              <a href="https://policies.google.com/terms?hl=pt-BR&fg=1" target="_blank" rel="noopener noreferrer">Termos</a>
            </li>
            <li>
              <a href="https://www.google.com/intl/pt-BR/workers/dpa/" target="_blank" rel="noopener noreferrer">Adenda de Processamento de Dados</a>
            </li>
            <li>
              <a href="https://policies.google.com/technologies/cookies?hl=pt-BR&fg=1" target="_blank" rel="noopener noreferrer">Configurações de Cookies</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
