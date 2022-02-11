import styled from "styled-components";

export const Status = styled.p`
  background-color: ${(props) =>
    props.status === "IN-PROGRESS"
      ? "#00B0FF"
      : props.status === "DONE"
      ? "#FFC70E"
      : "#1DD05D"};
  position: absolute;
  z-index: 1;
  top: 27px;
  right: -43px;
  transform: rotate(42deg);
  font-weight: bold;
  width: 12rem;
  padding: 0.5rem 0;
  text-align: center;
  color: #ffffff;
  font-size: 0.9rem;
  margin: 0;
`;
