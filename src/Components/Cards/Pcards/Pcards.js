import React from "react";
import "./Pcards.css";

export default function Pcards(props) {
  return (
    <>
      <div className="Pcard">
        <img
          src={props.image}
          alt="Dashboard"
          className="card-image"
          style={{
            width: "100%", // Makes the image take up 100% of the card's width
            height: "auto", // Keeps the image's aspect ratio intact
            borderRadius: "8px", 
          }}
        />
        <div className="Pcard__content">
          <p className="Pcard__title">{props.Project_Name}</p>
          <p className="Pcard__description">
            {props.Description}
          </p>

          <a href={props.link} target="blank">
            <button className="Pcard__button">Live Demo</button>
          </a>

          <a href={props.Github} target="blank">
            <button className="Pcard__button secondary">Source Code</button>
          </a>
        </div>
      </div>
    </>
  );
}
