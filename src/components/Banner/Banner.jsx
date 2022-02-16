import React from "react";
import topvt from "../../images/top_vector.svg";
import midpvt from "../../images/mid_vector.svg";
import btmvt from "../../images/bottom_vector.svg";
import tons from "../../images/me.png";
import SocialMedia from "../SocialMedia/SocialMedia";

import "./Styles.css";
const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <SocialMedia />
        <div className="left-col-container">
          <img className="vector-img top" src={topvt} alt="vector" />
          <img className="vector-img mid" src={midpvt} alt="vector" />
          <img className="vector-img bottom" src={btmvt} alt="vector" />
          <img className="vector-img tons-img" src={tons} alt="vector" />
        </div>
        <div className="right-col-container">
          <div className="intro-container">
            <h1>Hi,</h1>
            <h1>
              I am <span>Tons</span>
            </h1>
            <h1>HCMUS Student</h1>
          </div>
          <div className="major-container">
            <p>
              I am senior student, <br></br>major in Information Tecnology
            </p>
            <button className="btn btn-background">About me</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
