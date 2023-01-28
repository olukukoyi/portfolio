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
import { useNavigate } from "react-router-dom";
import resume from "./assets/olukukoyiresume.pdf";
AOS.init();

function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <div className="footer" data-aos="fade-left" data-aos-duration="2000">
      <div
        className="footer__content"
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        <h3 className="footer__title">
          <a className="name">Olu Kukoyi </a>
        </h3>
        <FontAwesomeIcon className="footer__arrow fa-3x" icon={faArrowUp} />
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
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="footer__item footer__hover-effect--white"
        >
          Resume
        </a>
        <Link
          onClick={() => {
            scroll.scrollToTop();
            navigate("/contact");
          }}
          target="_blank"
          rel="noopener noreferrer"
          className="footer__item footer__hover-effect--white"
        >
          Contact
        </Link>
      </div>
      <div className="footer__copyright">Copyright © {year}</div>
    </div>
  );
}

export default Footer;
