import React from "react";
import "./Acards.css";

export default function Acards(props) {
  return (
    <>
      <div className="parent">
        <div className="card">
          <div className="content-box">
            <span className="card-title">{props.Title}</span>
            <p className="card-content">
              <ul>
                {props.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
