import React from "react";
import { Link } from "@reach/router";
import { ReactComponent as Logo } from "../../styling/assets/logo.svg";

const Header = ({ user: { email, photo, username } }) => {
  return (
    <header className="app-header">
      <Link to="/">
        <Logo width={"90%"} height={"90%"} alt={"Chicken Tinder Logo"} />
      </Link>
      {email ? (
        <section className="profile-header">
          <Link to="/user-profile">
            <button className="profile-button">
              <img
                className="header-photo"
                src={
                  photo ||
                  "https://d29fhpw069ctt2.cloudfront.net/icon/image/120759/preview.svg"
                }
                alt="avatar"
              />
              <span className="username-header">{username || "user"}</span>
            </button>
          </Link>
        </section>
      ) : (
          <></>
        )}
    </header>
  );
};

export default Header;
