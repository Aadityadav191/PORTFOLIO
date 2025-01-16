
import React from "react";
import "./SkillsCards.css";
export default function SkillsCards(props) {
  return (
    <>
      <div className="Scard">
        <div className="Scard-image-container">
        <img src={props.logo}
         alt={props.title}
         style={{ width: "100px", height: "auto" }}/>
        </div>
        <p className="Scard-title">{props.title}</p>
        <p className="Scard-des">
        {props.description}
        </p>
      </div>
    </>
  );
}
