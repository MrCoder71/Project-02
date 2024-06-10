import React from 'react';

import './ImageSlider.css'
function ImageSlider() {
  return (

    <div className="Img-Slider-text">

    Image Slider Animation
    
    <div className="outer-container">

      <div className="container">
      
        <img src='./src/assets/Jumanji.jpg'       alt="movie" />
        <img src='./src/assets/Godzilaxkong.jpg'  alt="movie" />
        <img src='./src/assets/Venom.jpg'         alt="movie" />
        <img src='./src/assets/Beekeeper.jpg'     alt="movie" />
        <img src='./src/assets/Aquaman.jpg'       alt="movie" />
      
      </div>
    </div>
  </div>

  )
}

export default ImageSlider