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
          I am Olu Kukoyi, a sophomore at The City College of New York pursuing
          a bachelors degree in computer science. I have experience as a
          Front-End/Full-stack Developer. I enjoy working with all layers of the
          stack and building user friendly and efficient web applications!
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
