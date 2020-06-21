import React from "react";
import { Link } from "@reach/router";

const UserProfile = ({ user: { username, photo, email, uid } }) => {
  return (
    <article id={uid}>
      <h2>Username: {username}</h2>
      <img src={photo} alt="" className="user-avatar" />
      <p>{email}</p>
      <Link to="/user-profile/update-info">
        <button>Update info</button>
      </Link>
    </article>
  );
};

export default UserProfile;
