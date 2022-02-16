import React, { useState } from "react";
import "./Styles.css";
import ProjectCard from "./Project/ProjectCard";
import { Grid } from "../../style/GridStyle";
import styled from "styled-components";
function ProjectList({ data }) {
  const [projects] = useState(data);
  return (
    <>
      <div className="project-list-container">
        <h1>My Recent Projects</h1>
        <p>
          Here are a few design projects I've worked on recently. Want to see
          more? Email me.
        </p>
        <GridContainer>
          <ProjectCard projects={projects} />
        </GridContainer>
      </div>
    </>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  grid-template-rows: auto;
  grid-gap: 1rem;
  div {
    background-color: red;
    width: 20rem;
    height: 30rem;
  }
`;

export default ProjectList;
