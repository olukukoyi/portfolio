import React, { useRef, useEffect } from "react";
import "./Showcase.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typewriter from "typewriter-effect"; // Library fro typewriter animation
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import resume from "./assets/oluwanifesimiResume.pdf";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

function Showcase() {
  const navigate = useNavigate();
  function contactNavigation() {
    navigate("/contact");
  }
  return (
    <div className="showcase">
      <div className="media-container">
        <ul className="media-container__list">
          <li className="media-container__list-item nav-links__down-animation">
            <a
              href="https://github.com/olukukoyi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>

          <li className="media-container__list-item">
            <a
              href="https://www.linkedin.com/in/oluwanifesimi-kukoyi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className="media-container__list-item">
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFilePdf} />
            </a>
          </li>
        </ul>
      </div>
      <div class="row">
        <h1 class="showcase__name">
          <Typewriter
            onInit={(typewritter) => {
              typewritter
                .pauseFor(1000)
                .typeString("Oluwanifesimi Kukoyi")
                .start();
            }}
          />
        </h1>
        <p class="showcase__para">
          <Typewriter
            onInit={(typewritter) => {
              typewritter.pauseFor(3100).typeString("I create things").start();
            }}
          />
        </p>
        <button onClick={contactNavigation} class="showcase__btn">
          about me
        </button>
      </div>
    </div>
  );
}

export default Showcase;
