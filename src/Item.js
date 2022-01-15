import React from "react";
import "./Item.css";

function item(props) {
  return (
    <div className="item">
      <figure className="item__wrapper">
        <img className="item__image" src={props.image} alt="" />
        <p className="item__name">{props.name}</p>
      </figure>
    </div>
  );
}

export default item;
