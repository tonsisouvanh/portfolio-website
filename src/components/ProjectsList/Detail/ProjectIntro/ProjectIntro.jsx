import React, { useState } from "react";
import { useParams } from "react-router";
import Slider from "../Slider/Slider";
import "./Styles.css";

const ProjectIntro = ({ data }) => {
  const [projects, setProjects] = useState(data);
  let { id } = useParams();
  return (
    <>
      <section className="product-intro-container">
        {projects
          .filter((p) => p.id === id)
          .map((project) => {
            return (
              <div className="product-name-container">
                <h1 className="name">{project.name}</h1>
                <p className="description"> Description about the project</p>
                <button className="visit-btn rounded">
                  <a className="visit-text" href="">
                    VISIT NOW
                  </a>
                </button>

                <Slider images={project.images}></Slider>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default ProjectIntro;
