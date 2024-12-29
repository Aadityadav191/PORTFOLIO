import React from 'react'
import './SkillsCards.css';
export default function SkillsCards(props) {
  return (
    <>
  
  <div className="Scard">
    <div className="Scard-inner">
      <div className="Scard-front">
        <h3>{props.title}</h3>
        <img src={props.logo} alt='fuck man' style={{ width: "100px", height: "auto" }}/>
      </div>
      <div className="Scard-back">
        <p>{props.description}</p>
      </div>
    </div>
  </div>



    </>
  )
}
