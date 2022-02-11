import React from "react";
import "./Styles.css";
import facebook from "../../images/facebook.png";
import github from "../../images/github.png";
import twitter from "../../images/twitter.png";
import tiktok from "../../images/tiktok.png";
function SocialMedia() {
  const icons = [
    { icon: facebook },
    { icon: github },
    { icon: twitter },
    { icon: tiktok },
  ];

  return (
    <>
      <div className="icon-container">
        {icons.map((i, index) => (
          <img key={index} src={i.icon} alt="" />
        ))}
      </div>
    </>
  );
}

export default SocialMedia;
