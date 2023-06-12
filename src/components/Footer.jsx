import React from 'react';
import '../CSS/footer.css';
import '../CSS/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section left-section">
        <span className="text-white font-semibold text-xl mr-8 gr-text footer-heading">UNITEUP</span>
        <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="footer-copy">© 2023 UniteUp. All rights reserved.</p>
      </div>
      <div className="footer-section center-section">
        <div className="social-icons">
          <a href="https://github.com"><FontAwesomeIcon icon={faGithub} className="social-icon" /></a>
          <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} className="social-icon" /></a>
          <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} className="social-icon" /></a>
          <a href="mailto:example@example.com"><FontAwesomeIcon icon={faYoutubeSquare} className="social-icon" /></a>
        </div>
      </div>
      <div className="footer-section right-section">
        <span className="text-white font-semibold text-xl mr-8 gr-text footer-heading">Quick Links</span>
        <ul className="footer-links">
          <li className="footer-links-item"><a href="#" className="footer-links-link">Link 1</a></li>
          <li className="footer-links-item"><a href="#" className="footer-links-link">Link 2</a></li>
          <li className="footer-links-item"><a href="#" className="footer-links-link">Link 3</a></li>
          <li className="footer-links-item"><a href="#" className="footer-links-link">Link 4</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
