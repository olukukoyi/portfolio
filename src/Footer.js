import React, { useState } from "react";
import "./Footer.css";
import { faArrowUp, faChessKing } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
AOS.init();

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer" data-aos="fade-left" data-aos-duration="2000">
      <div className="footer__content">
        <h3 className="footer__title">
          <a className="name">Olu Kukoyi </a>
        </h3>
        <FontAwesomeIcon
          className="footer__arrow fa-3x"
          icon={faArrowUp}
          onClick={() => {
            scroll.scrollToTop();
          }}
        />
      </div>
      <div className="footer__media">
        <a
          href="https://github.com/olukukoyi"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__item footer__hover-effect--white"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/oluwanifesimi-kukoyi/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__item footer__hover-effect--white"
        >
          Linkedin
        </a>
        <a
          href="google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__item footer__hover-effect--white"
        >
          Resume
        </a>
        <a
          // href="https://github.com/olukukoyi"

          target="_blank"
          rel="noopener noreferrer"
          className="footer__item footer__hover-effect--white"
        >
          Contact
        </a>
      </div>
      <div className="footer__copyright">Copyright © {year}</div>
    </div>
  );
}

export default Footer;
