import React from "react";
import ProjectInfo from "../components/ProjectsList/Detail/ProjectInfo/ProjectInfo";
import ProjectIntro from "../components/ProjectsList/Detail/ProjectIntro/ProjectIntro";
import "../style/ProjectDetailPage/ProjectDetailPage.css";
const ProjectDetailPage = ({data}) => {
  return (
    <>
      <div className="project-detail-page-container">
        <ProjectIntro data={data}></ProjectIntro>
        <ProjectInfo></ProjectInfo>
      </div>
    </>
  );
};

export default ProjectDetailPage;
