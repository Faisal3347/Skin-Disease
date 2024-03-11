import React from 'react';
import DermImage from './Homeimages/Derm.png'; // Adjust the filename accordingly
import { NavLink } from 'react-router-dom';
import './Navbar1.css'; // Assuming you put the styles in a separate CSS file



export default function FirstNavbar() {
  return (
    <>
      <style>
        {`
      
          .nav {
            list-style: none;
            display: flex;
          }
          
          .nav-link {
            text-decoration: none;
            color: black; 
          }

          ,navlink:hover{
            color:gray;
          }

        `}
      </style>

<div className="main">
      <nav className="navbar  "  style={{
                marginTop:'-1.8rem',
              }}>
        <div className="container-fluid">
          <img src={DermImage} alt="" className="logo" style={{ filter: 'invert(1)'}}
 />
          <NavLink className="navbar-brand" to="#">
          </NavLink>
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/FeatureInfo">Features</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/How_It_Works">How It Works</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/diseaseinfo">Disease Info</NavLink>
            </li>
            <li className="nav-item">
            </li>
          </ul>
        </div>
      </nav>
      </div>
    </>

  );
}
