import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const StyledSection = styled.section`
  background-color: #EB5E30;
  border-style: groove;
  border-color: black;
  padding: 20px;
  margin 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
 align-items: center;
  flex-direction: column;
  border-radius: 5px;
`;

const StyledReturnButton = styled.button`
  background-color: #5c8f22;
  padding: 20px;
  border-radius: 5px;
  font-size: 20px;
  margin: 20px;
  &:hover {
    background-color: #fd974f;
    transition: all 500ms ease;
  }
`;

const StyledWinnerButton = styled.button`
  background-color: #5c8f22;
  padding: 20px;
  border-radius: 5px;
  font-size: 20px;
  margin: 20px;
  &:hover {
    background-color: #fd974f;
    transition: all 500ms ease;
  }
`;

const EndOfList = ({ id }) => {
  return (
    <StyledSection>
      THE END
      <Link to="/">
        <StyledReturnButton>Back home</StyledReturnButton>
      </Link>
    </StyledSection>
  );
};

export default EndOfList;
