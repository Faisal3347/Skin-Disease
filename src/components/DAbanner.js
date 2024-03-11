import React from 'react'
import image_2 from './Homeimages/DAbannerimg.jpg';
import './DAbanner.css'; 
export default function DAbanner() {
  return (
    <>
    <div className="da-banner" id="da">
        <div className="cont-1">
            <div className="text-1">
                <h2>
                    <b> How does Derm Assist analyze images? </b>
                </h2>
                <p>
                "AI Dermatologist uses a deep machine learning algorithm (AI-algorithm). The human ability 
                to learn from examples and experiences has been transferred to a computer. For this purpose, 
                the neural network has been trained using a dermoscopic imaging database containing tens of 
                thousands of examples that have confirmed diagnosis and assessment by dermatologists."
                </p>
                <p>
                    "The AI is able to distinguish between benign and malignant tumors, similar to the 
                    ABCDE rule (5 main signs of oncology: asymmetry, boundary, color, diameter, and change 
                    over time). The difference between them is that the algorithm can analyze thousands of
                    features, but not only 5 of them. Of course, only a machine can detect that amount of 
                    evidence."
                </p>
                {/* <p>
                    "Due to the productive cooperation with doctors, the quality of the algorithm 
                    performance is constantly being improved. Based on growing experience and its own 
                    autonomous rules, the AI is able to distinguish between benign and malignant tumors, 
                    find risks of human papillomavirus, and classify different types of acne…"
                </p> */}
            </div>
                <div className="imgs">
                <img src={image_2} alt="" width="350" height="320"/>
                </div>                
        </div>

    </div>
    </>
  )
}