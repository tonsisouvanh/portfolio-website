import React, { useState } from "react";
import { useParams } from "react-router";
import Slider from "../Slider/Slider";
import "./Styles.css";

const ProjectIntro = ({ data }) => {
  const [projects] = useState(data);
  let { id } = useParams();
  return (
    <>
      <section className="product-intro-container">
        {projects
          .filter((p) => p.id === id)
          .map((project) => {
            return (
              <div key={project.id} className="product-name-container">
                <h1 className="name">{project.name}</h1>
                <p className="description"> Description about the project</p>
                {/* <a
                  className="visit-text"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.url}
                >
                  <button className="button-29">VISIT NOW</button>
                </a> */}
                <div className="text-box">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-white btn-animate"
                  >
                    VISIT NOW
                  </a>
                </div>

                <Slider images={project.images}></Slider>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default ProjectIntro;
