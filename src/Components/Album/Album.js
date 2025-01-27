import React from "react";
import "./Album.css";
import Image1 from './../../Assets/image1.jpg'; // Correct relative path
import Image2 from './../../Assets/image2.jpg';
import Image3 from './../../Assets/image3.jpg';
import Image4 from './../../Assets/image4.jpg';
import image5 from './../../Assets/image5.JPG';  
import image6 from './../../Assets/image6.JPG';  
import image7 from './../../Assets/image7.JPG';  
const Album = () => {
    return (
      <div className="wrapper">
        <div className="inner" style={{ "--quantity": 7 }}>
          <div className="albumcard" style={{ "--index": 0, "--color-albumcard": "142, 249, 252" }}>
            <div className="img">
            <img src={Image1} alt="A beautiful scenic view" />
            </div>
          </div>
          <div className="albumcard" style={{ "--index": 1, "--color-albumcard": "142, 252, 204" }}>
            <div className="img">
            <img src={Image2} alt="A beautiful scenic view" />
            </div>
          </div>
          <div className="albumcard" style={{ "--index": 2, "--color-albumcard": "142, 252, 157" }}>
            <div className="img">
            <img src={Image3} alt="A beautiful scenic view" /></div>
          </div>
          <div className="albumcard" style={{ "--index": 3, "--color-albumcard": "215, 252, 142" }}>
            <div className="img">
            <img src={Image4} alt="A beautiful scenic view" /></div>
          </div>
          <div className="albumcard" style={{ "--index": 4, "--color-albumcard": "252, 252, 142" }}>
            <div className="img">
            <img src={image5} alt="A beautiful scenic view" />
            </div>
          </div>
          <div className="albumcard" style={{ "--index": 5, "--color-albumcard": "252, 208, 142" }}>
            <div className="img">
            <img src={image6} alt="A beautiful scenic view" />
            </div>
          </div>
          <div className="albumcard" style={{ "--index": 6, "--color-albumcard": "252, 142, 142" }}>
            <div className="img">
            <img src={image7} alt="A beautiful scenic view" />
            </div>
          </div>
          <div className="albumcard" style={{ "--index": 7, "--color-albumcard": "252, 142, 239" }}>
            <div className="img"></div>
          </div>
          <div className="albumcard" style={{ "--index": 8, "--color-albumcard": "204, 142, 252" }}>
            <div className="img"></div>
          </div>
          <div className="albumcard" style={{ "--index": 9, "--color-albumcard": "142, 202, 252" }}>
            <div className="img"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Album;
 