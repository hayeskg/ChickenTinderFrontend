import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const StyledHeader = styled.header`
  background-color: #752a07;
  background-image: radial-gradient(#bd6140, #752a07);
  color: #fef2e4;
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  text-shadow: 3px 3px #752a07, 1px 1px 5px #fbcb7b;
`;
const Header = () => {
  return (
    <StyledHeader>
      <img
        src="https://www.pinclipart.com/picdir/big/444-4446655_cartoon-chicken-transparent-background-clipart.png"
        alt=""
        className="header-icon"
      />
      <Link to="/">
        <h1>Chicken Tinder</h1>
      </Link>

      <Link to="/user-profile">
        <button>Profile</button>
      </Link>
    </StyledHeader>
  );
};

export default Header;
