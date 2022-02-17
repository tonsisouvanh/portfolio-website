/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";
import { Status } from "./Status";
// import { useParams } from "react-router";
import styled from "styled-components";
function ProjectCard({ id, imagesA, imagesB, status, tools }) {
  return (
    <>
      <Container key={id} className="project-card-container">
        <img className="main__img" src={imagesA} alt="img" />

        <img className="img" src={imagesB} alt="" />
        <Status status={status}>{status}</Status>

        <div className="info-hover-container">
          <Link className="btn__link" to={`/projects/${id}`}>
            <button className="more-btn">More</button>
          </Link>

          <div className="tool-container">
            {tools.map((t, index) => (
              <p key={index} className="tool-name">
                {t}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    border: none;
  }

  &:hover {
    .img {
      visibility: visible;
      transform: translateY(0);
    }
    .info-hover-container {
      visibility: visible;
      background-color: transparent;
      .more-btn {
        transform: translateY(0);
        opacity: 1;
        transition: all 0.3s ease-in-out 0.3s;
      }
      .tool-container {
        transition: all 0.3s ease-in-out 0.5s;
        transform: translateY(0);
        opacity: 1;
        /* background-color: transparent; */
      }
    }
  }

  .img {
    visibility: hidden;
    transform: translateY(-100%);
    transition: all 0.4s ease-in-out;
    object-fit: fill;
  }
  .info-hover-container {
    visibility: hidden;
    background-color: transparent;
    .more-btn {
      transform: translateY(-30%);
      opacity: 0;
    }
    .tool-container {
      transform: translateY(-30%);
      opacity: 0;
      /* background-color: transparent; */
    }
  }

  .info-hover-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    isolation: isolate;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease-in-out;
    background-color: transparent;

    .more-btn {
      width: 94px;
      height: 30px;
      border: none;
      border-radius: 24px;
      font-family: "Ubuntu", sans-serif;
      font-size: 1rem;
      color: #ffffff;
      background-color: #00b0ff;
      margin-bottom: 1rem;
      cursor: pointer;
      // transition: all 0.2s ease-in-out 0.3s;
    }
    .tool-container {
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      // transition: all 0.2s ease-in-out 0.5s;
      background-color: transparent;

      p {
        background-color: #818181;
        border-radius: 2px;
        font-size: 0.8rem;
        color: #ffffff;
        text-align: center;
        padding: 0.2rem 0.3rem;
        margin: 0 0.6rem 0.6rem 0;
        border: 1px solid rgb(214, 214, 214);
      }
    }
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgb(35, 35, 35);
      opacity: 0.6;
      z-index: -1;
      /* background-color: transparent; */
    }
  }
`;

export default ProjectCard;
