import React from 'react';
import './LearnMoreDisese.css';
import main_img1 from './images/main_img1.png';
import Navbar1 from './Navbar1';


export default function LearnMoreDisease(props) {
  window.onscroll = function() {
    var side = document.querySelector('.side');
    var upperBody = document.querySelector('.upper_body');
    var offset = upperBody.clientHeight + 3; // Adjust this value as needed


   
    if (window.innerWidth > 730) {
        if (window.pageYOffset > offset) {
            side.style.position = 'fixed';
            side.style.top = '0';
            side.style.width="15rem";
            // side.style.margin="1rem";  

        } else {
            side.style.position = 'static';
            side.style.width="16rem"
            // side.style.margin="2rem";

        }
    } else {
        // Reset the position to static when the screen width is less than or equal to 730px
        side.style.position = 'static';
    }
};

const imageStyle = {
  width: '18rem', // Set your desired width
  height: '12rem', // Set your desired height
  objectFit: 'cover', // This property will make sure the image covers the specified dimensions
};

  let {title,text1,text2,text3,img1,img2,img3,img4,causes,causes2,sym1,sym2,sym3,sym4} =props
  


  return (

    <>
  <Navbar1 />

      <div className="container">
        <div className="upper_body">
          <div className="text">
            <h1>{title}</h1>
          </div>
          <div className="img">
            <img src={main_img1} alt="" />
          </div>
        </div>
<div className="bottom">
        <div className="sidebar">
          <div className="side">
            <div className="upper_content">
              <h2 style={{fontSize:'2rem'}}>If you think you have a {title} get a second option with Derm Assists.  </h2>
            </div>
            <div className="lower_content">
              <div className="elem">
                <h3>
                  <a href="#overview_data">Overview</a>
                </h3>
              </div>
              <div className="elem">
                <h3>
                  <a href="#photo_data">Photos</a>
                </h3>
              </div>
              <div className="elem">
                <h3>
                  <a href="#cause_data">Causes</a>
                </h3>
              </div>
              <div className="elem">
                <h3>
                  <a href="#symptoms_data">Symptoms</a>
                </h3>
              </div>
              
            </div>
          </div>
        </div>

        <div className="other">
          <div id="overview_data">
            <h1>{props.title}</h1>
            <p className="first">{text1}</p>
            <p className="first">{text2}</p>
            <p className="first">{text3}</p>

          </div>

          <div id="photo_data">
            <h2>Photos of {title}</h2>
            <div className="image_set">
              <img className="set1" src={img1} style={imageStyle} alt="" />
              <img className="set1" src={img2} style={imageStyle} alt="" />
              <img className="set1" src={img3} style={imageStyle} alt="" />
              <img className="set1" src={img4} style={imageStyle} alt="" />
              
            </div>
          </div>

          <div id="cause_data">
            <h1>Causes of {title}</h1>
            <p className="first">
              {causes}
            </p>
            <p className="first">
              {causes2}
            </p>
          </div>

          <div id="symptoms_data">
            <h1>Symptoms of {title}</h1>
            <ul>
              <li className="symptoms_list">{sym1}</li>
              <li className="symptoms_list">{sym2}</li>
              <li className="symptoms_list">{sym3}</li>
              <li className="symptoms_list">{sym4}</li>
            </ul>
          </div>

          
        </div>
        </div>
      </div>
    </>
  );
}
