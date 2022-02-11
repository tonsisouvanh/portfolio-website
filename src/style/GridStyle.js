import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  /* width: ${(props) => props.width};
  row-gap: ${(props) => props.gap_row};
  column-gap: ${(props) => props.gap_col}; */
`;
