import React from 'react'
import './Benefit.css';
import recommendationicon from './Homeimages/recommendationicon.png';
import simpleicon from './Homeimages/simpleicon.png';
import accessableicon from './Homeimages/accessableicon.png';
import affordableicon from './Homeimages/affordableicon.png';

export default function benefit() {
  return (
    <div>
      {/* https://careers.jio.com/frmStudentIntern.aspx?fbclid=PAAaYWa-NL_AhXxblwXEr-TGp_ITHfydWpeA04x2PL8DuSPQFIXx3UAU3GlQ8 */}
      <div className='main-benefit'>
        <div className='benefit-banner'>
          <h1><b>Why is DermAssist worth using?</b>
          </h1>
        </div>
        <div className='benefit-list'>
          <div className='list1'>
            <div className='listimg'>
              <img src={recommendationicon}>
              </img>
            </div>
            <div className='listcontent'>
              <p><b>Smart</b></p>
              <p>AI Dermatologist is created on the basis of artificial intelligence as a result of joint work of IT specialists and doctors. Our app has the Same accuracy as a professional dermatologist
              </p>
            </div>
          </div>
          {/* list 2 */}
          <div className='list1'>
            <div className='listimg'>
              <img src={simpleicon}>
              </img>
            </div>
            <div className='listcontent'>
              <p><b>Simple</b></p>
              <p>You bring the phone to a mole or other formation on the skin, and in 1 minute you will know if there is any reason for concern.
              </p>
            </div>
          </div>
          {/* list 3 */}
          <div className='list1'>
            <div className='listimg'>
              <img src={accessableicon}>
              </img>
            </div>
            <div className='listcontent'>
              <p><b>Accessible</b></p>
              <p>AI Dermatologist is available anytime, anywhere. Keep your health in check at your fingertips even when you are on the go.
              </p>
            </div>
          </div>
          {/* list3 */}
          <div className='list1'>
            <div className='listimg'>
              <img src={affordableicon}>
              </img>
            </div>
            <div className='listcontent'>
              <p><b>Affordable</b></p>
              <p>AI Dermatologist’s leading image analytics features come at an unbeatable price, fit for any request or budget. Flexible pricing plans and customizable bundles will save your practice both time and money.


              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}