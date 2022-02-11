import React, { useState } from "react";
import "./Styles.css";
import ProjectCard from "./Project/ProjectCard";
import { Grid } from "../../style/GridStyle";

function ProjectList({ data }) {
  const [projects, setProject] = useState(data);
  return (
    <>
      <div className="project-list-container">
        <h1>My Recent Projects</h1>
        <p>
          Here are a few design projects I've worked on recently. Want to see
          more? Email me.
        </p>
        <Grid>
          <ProjectCard projects={projects} />
        </Grid>
      </div>
    </>
  );
}

export default ProjectList;
