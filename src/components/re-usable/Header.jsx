import React from "react";
import { Link } from "@reach/router";
import { ReactComponent as Logo } from "../../styling/assets/logo.svg";

const Header = ({ user: { email, photo, username } }) => {
  return (
    <header>
      <Link to="/">
        <Logo width={"40%"} height={"40%"} alt={"Chicken Tinder Logo"} />
      </Link>
      {email ? (
        <section className="profile-header">
          <h4>Logged in: {username || "user"}</h4>
          <Link to="/user-profile">
            <button className="profile-button">
              <img
                className="friend-photo"
                src={
                  photo ||
                  "https://d29fhpw069ctt2.cloudfront.net/icon/image/120759/preview.svg"
                }
                alt="avatar"
              />
            </button>
          </Link>
        </section>
      ) : (
        <p>Please log in to see your profile or sign up to start swiping!</p>
      )}
    </header>
  );
};

export default Header;
