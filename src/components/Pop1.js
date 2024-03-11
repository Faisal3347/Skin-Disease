import React, { useRef } from 'react';
import pop1image from './images/pop1image.png'; // Adjust the filename accordingly

import './pop1.css';
export default function Pop1() {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Handle the file upload here
    console.log('Selected file:', file.name);
  };

  return (
    <></>
  )
}
