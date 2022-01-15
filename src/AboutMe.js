import React from "react";
import "./AboutMe.css";
import SkillList from "./SkillList";
import Form from "./Form";
import { CloseRounded } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { Link } from "@material-ui/core";

function AboutMe() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div className="aboutMe">
      <div className="aboutMe__content">
        <CloseRounded
          className="aboutMe__close"
          style={{ fontSize: 40 }}
          onClick={handleClick}
        />
        <SkillList />
        asdsadasdasd asdsadasdasd123
        <div className="aboutMe__form">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
