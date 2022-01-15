import React from "react";
import skills from "./Skills";
import Item from "./Item";
import "./SkillList.css";

function SkillList(props) {
  // function handle(e) {
  //   const name = e.Name;
  //   const image = e.Image;

  return (
    <div className="skills">
      <div className="skills__info">
        <h1>Hey i'm Olu</h1>
        <h3>Heres a bit about me....</h3>
        <p>
          I am a frontend web developer, and publishing industries for
          previewing layouts and visual mockups.Lorem ipsum is placeholder text
          commonly used in the graphic, print, and publishing industries for
          previewing layouts and visual mockups.
        </p>
      </div>
      <div className="skills__list">
        {skills.map((skill) => {
          let name = skill.Name;
          let image = skill.Image;
          return <Item image={image} name={name} />;
        })}
      </div>
    </div>
  );
}

export default SkillList;
