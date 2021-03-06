import React from "react";
import "./Styles.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Slider = ({ images }) => {
  return (
    <>
      <AwesomeSlider className="slide-container">
        {images.map((i,index) => {
          return <div key={index} className="image" data-src={i} />;
        })}
      </AwesomeSlider>
    </>
  );
};

export default Slider;
