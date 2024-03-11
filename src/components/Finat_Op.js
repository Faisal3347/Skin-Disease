import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom'; // Import useHistory hook
import DermImage from './Homeimages/Derm.png';
import main_img from './Homeimages/main_img.png';
import './Navbar.css';

export default function Navbar() {
  const history = useHistory(); // Initializing useHistory hook

  const handleCheckSkin = () => {
    // Redirect to the Final_Op page when the button is clicked
    history.push('/final_op');
  };

  return (
    <>
      {/* Your existing Navbar code */}

      <div className="image-container">
        <div>
          <a className="navbar-brand" to="#">
            <div className="main-image-container">
              <img src={main_img} alt="" className="main-image" />
              <div className="text-overlay">
                {/* Your existing code */}
                <button
                  type="button"
                  className="btn btn-danger rounded-button"
                  style={{ fontFamily: 'math' }}
                  onClick={handleCheckSkin} // Call handleCheckSkin function onClick
                >
                  Check Skin Now
                </button>
                {/* Your existing code */}
              </div>
            </div>
          </a>
        </div>
        {/* Your existing code */}
      </div>
    </>
  );
}
