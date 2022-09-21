import React from "react";
import "./Banner.css";

function Banner({ image, blurimage }) {
  return (
    <div className="banner">
      <img src="/images/heading-image.png" alt="heading" />
      <div className="banner-caption">
        <div className="banner-title">Pelumi</div>
        <p>A musical play by Muyiwa Adigun</p>
      </div>
    </div>
  );
}

export default Banner;
