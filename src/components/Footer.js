import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <> 
    <footer className="footer">
        <div className="cont-2">
            <div className="left">
                <p style={{color:'white'}}>
                Derm Assist is not intended to perform diagnosis, but rather to provide users the 
                ability to image, track, and better understand their moles.
                </p>
                <p className="copyright gray">DermAssist | All Rights Reserved. Copyright © 2024 </p>
            </div>
            <div className="center">
                <div className="footer-menu">
                    <div className="col">
                        <ul>
                            <li> 
                                <a href="" className >Home</a>
                            </li>
                            <li> 
                                <a href="" className >Early Detection</a>
                            </li>
                            <li> 
                                <a href="" className >How it works</a>
                            </li>
                            <li> 
                                <a href="" className >DermAssist</a>
                            </li>
                        </ul>

                    </div>
                    <div className="col">
                        <ul>
                            <li> 
                                <a href="" className >Feature</a>
                            </li>
                            <li> 
                                <a href="" className >Early Detection</a>
                            </li>
                            <li> 
                                <a href="" className >How it works</a>
                            </li>
                            <li> 
                                <a href="" className >DermAssiat</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="right">
                <p className="gray"> If you have any question about our DA system - contact with us 
                through email:
                </p>
                <p >
                    <a href="" > <b style={{color:'white'}}>Support@dermassist.com </b></a>
                </p>
                <div className="social" style={{filter: 'invert(1)',marginLeft:'1rem'}}>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
                </div>
            </div>
        </div>

    </footer>
    </>
  )
}