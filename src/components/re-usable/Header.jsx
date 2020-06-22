import React from "react";
import { Link } from "@reach/router";
import { ReactComponent as Logo } from "../../styling/assets/logo.svg";

const Header = ({ user: { email, photo, username } }) => {
  return (
    <header>
      <Link to="/">
        <Logo width={"60%"} height={"60%"} alt={"Chicken Tinder Logo"} />
      </Link>
      {email ? (
        <Link to="/user-profile">
          <button>Logged in as: {username}</button>
        </Link>
      ) : (
        <p>Please log in to see your profile or sign up to start swiping!</p>
      )}
    </header>
  );
};

export default Header;
