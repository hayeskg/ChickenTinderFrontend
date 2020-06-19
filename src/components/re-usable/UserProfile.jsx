import React from "react";
import { Link } from "@reach/router";
import UpdateUserInfo from "./UpdateUserInfo";

const UserProfile = ({ user: { username, photo, email, uid } }) => {
  return (
    <article>
      <h2>Username: {username}</h2>
      <img src={photo} alt="" />
      <p>{email}</p>
      <Link to="/user-profile/update-info">
        <button>Update info</button>
      </Link>
      <UpdateUserInfo uid={uid} email={email} />
    </article>
  );
};

export default UserProfile;
