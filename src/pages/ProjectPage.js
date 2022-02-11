import React from "react";
import ProjectList from "../components/ProjectsList/ProjectList";
function Projects({ data }) {
  return (
    <>
      <ProjectList data={data} />
    </>
  );
}

export default Projects;
