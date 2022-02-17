import React from "react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectsList/Project/ProjectCard";
function Projects({ data }) {
  return (
    <>
      <Container>
        <h1>My Recent Projects</h1>
        <p>
          Here are a few design projects I've worked on recently. Want to see
          more? Email me.
        </p>

        <Grid>
          {data.map((d) => {
            return (
              <ProjectCard
                key={d.id}
                id={d.id}
                imagesA={d.images[0]}
                imagesB={d.images[1]}
                status={d.status}
                tools={d.tools}
              />
            );
          })}
          {data.map((d) => {
            return (
              <ProjectCard
                key={d.id}
                id={d.id}
                imagesA={d.images[0]}
                imagesB={d.images[1]}
                status={d.status}
                tools={d.tools}
              />
            );
          })}
          


          {/* <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div> */}
        </Grid>
      </Container>
      {/* <ProjectList data={data} /> */}
    </>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 8vh);
  background-color: #2f2f2f;
  font-family: "Ubuntu", sans-serif;
  color: #cacaca;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h1 {
    font-size: 2.6rem;
    margin: 3rem 0 1rem 0;
    padding: 0 0.5rem;
  }
  p {
    font-size: 1.1rem;
    margin-bottom: 3rem;
    padding: 0 0.5rem;

  }
`;

const Grid = styled.div`
  max-width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  grid-gap: 2rem;
  justify-items: center;
  div {
    background-color: red;
    width: 24rem;
    height: 20rem;
  }
`;

export default Projects;
