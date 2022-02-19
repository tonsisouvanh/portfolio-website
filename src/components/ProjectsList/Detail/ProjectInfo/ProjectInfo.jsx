import React from "react";
import technicalImg from "../../../../images/technical_undraw.svg";
import "./Styles.css";
import TeamWorkSvg from "./team_work/TeamWorkSvg";
const ProjectInfo = () => {
  return (
    <>
      <section className="project-info-container">
        <div className="wrapper __about">
          <h1 className="topic">About This Project</h1>
          <div className="text-container">
            <p className="about-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="image-container">
            {/* <img src={aboutImg} alt="image" /> */}
            <TeamWorkSvg className="image__active"/>
          </div>
        </div>

        <div className="wrapper __technical">
          <h1 className="topic">Technical Sheet</h1>
          <div className="text-container">
            <p className="technical-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <ul className="list-container">
              <li className="li">UI/UX Design</li>
              <li className="li">UI/UX Architecture</li>
              <li className="li">HTML5 – semantic, audio, video, canvas</li>
              <li className="li">CSS3 – preprocessed with LESS + LESSHAT</li>
              <li className="li">UI/UX Design</li>
            </ul>
          </div>
          <div className="image-container">
            <img className="image__active" src={technicalImg} alt="img" />
          </div>
        </div>

        <div className="wrapper __resouces">
          <h1 className="topic">About this project</h1>
          <ul className="list-container">
            <li className="li">UI/UX Design</li>
            <li className="li">UI/UX Architecture</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ProjectInfo;
