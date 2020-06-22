import React from "react";
import { Link } from "@reach/router";
import { Button, Grid } from "@material-ui/core";

const UserProfile = ({ user: { username, photo, email, uid } }) => {
  return (
    <Grid>
      <article id={uid} className="user-profile">
        <h2>{username || "New user"}</h2>
        <img
          src={
            photo ||
            "https://d29fhpw069ctt2.cloudfront.net/icon/image/120759/preview.svg"
          }
          alt=""
          className="user-avatar"
        />
        <h3>Email: {email}</h3>
        <Link to="/user-profile/update-info">
          <Button
            id="update-info-button"
            size="large"
            color="primary"
            variant="contained"
          >
            Update
          </Button>
        </Link>
      </article>
    </Grid>
  );
};

export default UserProfile;
