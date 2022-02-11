import React from "react";
import Slider from "../components/ProjectsList/Detail/Slider/Slider";

import a from "../images/facebook.png";
import b from "../images/me.png";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
const TestPage = () => {
  const images = [{ a }, { b }];
  return (
    <>
      <AwesomeSlider>
        <div data-src={a} />
      </AwesomeSlider>
    </>
  );
};

export default TestPage;
