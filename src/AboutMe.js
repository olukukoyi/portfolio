import React from "react";
import "./AboutMe.css";
import SkillList from "./SkillList";
import Form from "./Form";

function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="aboutMe__content">
        <div className="aboutMe__info">
          <h1>Hey i'm Olu</h1>
          <h3>Heres a bit about me....</h3>I am a frontend web developer, and
          publishing industries for previewing layouts and visual mockups.Lorem
          ipsum is placeholder text commonly used in the graphic, print, and
          publishing industries for previewing layouts and visual mockups.
          <div className="aboutMe__skills">
            <SkillList />
          </div>
        </div>
        <div className="aboutMe__form">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
