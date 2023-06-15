/* eslint-disable no-unused-vars */
import styled from "styled-components";

const MainContainer = styled.main`
  margin-left: 8rem;
  margin-right: 8rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  transition: all 0.3s ease;
  @media only screen and (max-width: 65em) {
    margin-left: 4rem;
    transition: all 0.2s ease;
  }
  @media only screen and (max-width: 56.25em) {
    margin-left: 2rem;
    margin-right: 2rem;
    transition: all 0.2s ease;
  }
`;

export { MainContainer };
