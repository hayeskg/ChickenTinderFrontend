import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  background-colour: white;
  border-style: groove;
  border-colour: black;
  padding: 20px;
  margin 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
 align-items: center;
  flex-direction: column;
`;

const StyledReturnButton = styled.button`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  font-size: 20px;
`;

const EndOfList = () => {
  return <StyledSection>THE END</StyledSection>;
};

export default EndOfList;
