import React from "react";
import skills from "./Skills";
import Item from "./Item";
import "./SkillList.css";

function SkillList(props) {
  // function handle(e) {
  //   const name = e.Name;
  //   const image = e.Image;

  return (
    <div className="skill__list">
      {skills.map((skill) => {
        let name = skill.Name;
        let image = skill.Image;
        return <Item image={image} name={name} />;
      })}
    </div>
  );
}

export default SkillList;
