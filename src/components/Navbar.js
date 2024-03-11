import React from 'react';
import DermImage from './Homeimages/Derm.png'; // Adjust the filename accordingly
import main_img from './Homeimages/main_img.png'; // Adjust the filename accordingly
import './Navbar.css'; // Assuming you put the styles in a separate CSS file
import { NavLink } from 'react-router-dom';
import Feature from './Feature';
import How_works from './How_works';
import DAbanner from './DAbanner';
import Benefit from './Benefit';
import Footer from './Footer';
import Pop1 from './Pop1';
import pop1image from './images/pop1image.png'; // Adjust the filename accordingly
import './pop1.css';

export default function Navbar() {
  const closePopup = () => {
    let popup = document.querySelector('.main-pop');
    popup.classList.remove('show'); // Remove the 'show' class to hide the popup
    document.body.style.overflow = ''; // Enable scrolling on body
  };

  const popups = () => {
    let popup = document.querySelector('.main-pop'); // Add dot before 'main-pop'
    console.log("ko")
    popup.classList.toggle('show');
    document.body.style.overflow = 'hidden'; // Disable scrolling on body
  };


  return (
    <>
    
      <div className="image-container">
        <div>
          <a className="navbar-brand" to="#">
            <div className="main-image-container">
              <img src={main_img} alt="" className="main-image" />
              <div className="text-overlay">
              <h1 style={{ color: 'white', fontFamily: 'math', marginTop: '8rem' ,marginBottom:'-1rem',marginLeft:'0rem' }}>Reject Skin Ailments!</h1><br />
                {/* 
                   */}
                <h4 style={{ color: 'white', fontFamily: 'math' }}>Say Farewell to Skin Diseases!</h4>
                <p className='mb-1' style={{ color: 'white', fontFamily: 'math', position: 'absolute' }}>
                  Inspect your skin using a smartphone and receive rapid
                </p><br />
                <p className='' style={{ color: 'white', fontFamily: 'math', position: 'absolute' }}>
                  results within one minute.
                </p><br /><br/>
                <div className="d-grid gap-2 col-8 mx-auto">
                  <button
                    type="button"
                    className="btn btn-danger rounded-button"
                    style={{ fontFamily: 'math' }}
                    onClick={popups}
                  >

                    Check Skin Now
                  </button>
                  {/* The outcome of the scan is not equivalent to a diagnosis. For an accurate diagnosis and treatment recommendation, please consult with your doctor. */}
                </div>


              </div>
            </div>
          </a>
        </div>
        <div className="navbar">
          <img src={DermImage} alt="" className="logo" />
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="#">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/FeatureInfo">
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/How_It_Works">
                How It Works
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/Benefit">
                Benefit
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="Diseaseinfo">
                Disease Info
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>

      <div className='main-pop'>
      <div className="left_inner">
        <div className='left-pop'>
          <h1>How to Click Photo</h1>
          <img className='two_img' src={pop1image} alt="Pop-up Image" />
          <div className="d-grid gap-2 col-4 mx-auto">
          {/* Use a label or a span to provide additional text */}
          <NavLink htmlFor="file-upload" className="btn rounded-button" to='/Output' style={{
            fontFamily: 'math',
            background: '#3361a5',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            color:'white',
          }}>
            {/* <input
              id="file-upload"
              type="file"
              style={{ display: 'none',  }}
            /> */}
            Click Photo 
          </NavLink>
        </div>
        </div>
        </div>
        <div className='right-pop'>
        <div className="outter">
        <button className="close-btn" onClick={closePopup} 
     style={{
    position: 'absolute',
    right: '11rem',
    margintop: '-2rem'
  }}

        >X</button> {/* Attach closePopup function to the close button */}
          <div className='poplist'>
            <li>Take the photo about 4 inches away from the problem area</li>
            <li>Center your symptom in the photo</li>
            <li>Make sure there is good lighting</li>
            <li>Ensure your photo isn't blurry</li>
          </div>
        </div>
        </div>
      </div>

      {/* <div className="d-grid gap-6 col-9 mx-auto"></div>
      <div className="featureinfo" style={{ marginLeft: '2rem' }}>
        <h1>What do you know in 1 minute?</h1>
      </div>
      <div className="featuredetail" style={{ marginLeft: '2.4rem' }}>
        <h4>Risks Detection and Assessment of 10 diseases:</h4>
      </div> */}
      <Pop1/>
      <Feature/>
      <How_works/>
      <DAbanner/>
      <Benefit/>
      <Footer/>
    </>
  );
}