import React from "react";
import { Link } from "@reach/router";

const UserProfile = ({ user: { username, photo, email, uid } }) => {
  return (
    <article id={uid}>
      <h2>Username: {username || "New user"}</h2>
      <img
        src={
          photo ||
          "https://d29fhpw069ctt2.cloudfront.net/icon/image/120759/preview.svg"
        }
        alt=""
        className="user-avatar"
      />
      <p>Email: {email}</p>
      <Link to="/user-profile/update-info">
        <button>Update info</button>
      </Link>
    </article>
  );
};

export default UserProfile;
