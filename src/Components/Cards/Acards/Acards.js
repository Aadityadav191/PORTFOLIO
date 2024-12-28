import React from 'react'
import './Acards.css';

export default function Acards(props) {
  return (
  <>
  
  {/* From Uiverse.io by Smit-Prajapati */ }

  <div className="parent">
    <div className="card">
      <div className="content-box">
        <span className="card-title">{props.Title}</span>
        <p className="card-content">
        <ul>
            <li>C</li>
            <li>C++</li>
            <li>JAVA</li>
            <li>PYTHON</li>
            <li>JAVASCRIPT</li>
        </ul>  
        </p>
      </div>
    </div>
  </div>
</>

  





    
  )
}
