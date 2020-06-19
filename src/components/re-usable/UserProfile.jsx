import React from "react";
import { Link } from "@reach/router";

const UserProfile = ({ user: { username, photo, email } }) => {
  return (
    <article>
      <h2>Username: {username}</h2>
      <img src={photo} alt="" />
      <p>{email}</p>
      <Link to="/user-profile/update-info">
        <button>Update info</button>
      </Link>
    </article>
  );
};

export default UserProfile;
