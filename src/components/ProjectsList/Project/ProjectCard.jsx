/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import "./Styles.css";
import { Link } from "react-router-dom";
import { Status } from "./Status";
import { useParams } from "react-router";

function ProjectCard({ projects }) {
  const [color, setColor] = useState("red");
  const handleBackgroundColor = () => {
    if (1 === 1) {
      setColor("#00b0ff");
    }
    if (1 === 2) {
      setColor("green");
    }
  };

  useEffect(() => {
    handleBackgroundColor();
  }, []);

  return (
    <>
      {projects.map((p) => {
        return (
          <div className="project-card-container">
            <img className="main-img" src={p.images[0]} alt="image" />

            <img className="img" src={p.images[1]} alt="" />

            <Status status={p.status}>{p.status}</Status>

            <div className="info-hover-container">
              <Link to={`/projects/${p.id}`}>
                <button className="more-btn">More</button>
              </Link>

              <div className="tool-container">
                {p.tools.map((t, index) => (
                  <p key={index} className="tool-name">
                    {t}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProjectCard;