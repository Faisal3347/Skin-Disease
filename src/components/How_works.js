import React from 'react'
import Howworks from './Homeimages/howwork.jpg'; 
import Howworks2 from './Homeimages/howwork2.png'; 
import Howworks3 from './Homeimages/howwork3.PNG'; 
import './Howworks.css';


export default function Feature() {
  return (
    <> 
    <div className="how-to-block" id="hiw">
      <div className="cont">
        <h1>How to use DermAssist?</h1>
        <div className="list">
          <div className="item">
            <span className="icon">
             <img src={Howworks} alt="" className="image-1" />
            </span>
            <p> <b> Take a photo* </b></p>
            <p> Inspect your skin using a smartphone and receive rapid results within one minute.</p>
          </div>

          <div className="item">
            <span className="icon">
             <img src={Howworks2} alt="" className="image-1" />
            </span>
            <p> <b> Write the required input* </b></p>
            <p> Inspect your skin using a smartphone and receive rapid results within one minute.</p>
          </div>

          <div className="item">
            <span className="icon">
             <img src={Howworks3} alt="" className="image-1" />
            </span>
            <p> <b> Know your skin Disease* </b></p>
            <p> Inspect your skin using a smartphone and receive rapid results within one minute.</p>
          </div>
        </div>
        <p className="small">
            "* Yoy can take a photo on your mobile phone or upload a photo from your gallery."
          </p>
          <p className="small">
            "* You can view results easily."
          </p>

      </div>
        
    </div>
    </>
  )
}