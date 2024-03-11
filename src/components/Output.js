import React, { useState } from "react";
import axios from "axios";
import './Output.css';
import Navbar1 from './Navbar1';



const Home = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [percentage, setPercentage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handlePredict = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData
      );
      setResult(response.data.result);
      setPercentage(response.data.percentage);
      setSelectedImage(URL.createObjectURL(file)); // Set selected image
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <>
    <Navbar1 />
      <div className="flex flex-col justify-center items-center h-screen main_container mt-5">
        <div className="mb-4">
          <h1 className="text-3xl font-bold">
            Skin Disease detection Using Deep Learning
          </h1>
        </div>

        <div className="mb-4">
          <input
            type="file"
            onChange={handleFileChange}
            className=""
            style={{
              marginTop: "-1rem",
            }}
          />
          {file && <p>Selected file: {file.name}</p>}
        </div>

        <div className="mb-4">
          <button
            onClick={handlePredict}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
            style={{
              marginTop:"-1rem",
            }}
          >
            {loading ? "Predicting..." : "Predict"}
          </button>
        </div>

        {/* Display selected image */}
        {selectedImage && (
          <div className="mb-4">
            <img src={selectedImage} alt="Selected" className="max-w-full h-auto" style={{border:"2px solid black"}} />
          </div>
        )}

        <div>
          {result && (
            <div>
              <p className="text-xl">Result: {result}</p>
              <p className="text-xl text_percentage">Percentage: {percentage}%</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;