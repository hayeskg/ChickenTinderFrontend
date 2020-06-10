import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: black;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-around;
`;
const Header = () => {
  return (
    <StyledHeader>
      <h1>Chicken Tinder</h1>
    </StyledHeader>
  );
};

export default Header;
