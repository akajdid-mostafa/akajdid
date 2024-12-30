// eslint-disable-next-line no-unused-vars
import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container">
        <h1 className="footer__title"> Portfolio</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#work" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/mostafaakajdidm/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mostafa-akajdid-774735232/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/akajdid-mostafa"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; MostafaAkajdid. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
