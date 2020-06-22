import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { updateUsername } from "../../queries/UpdateUser.jsx";
import Loader from "./Loader.jsx";
import ErrorDisplayer from "./ErrorDisplayer.jsx";
import fire from "../../fireAuth.js";
import { Button, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const UpdateUserInfo = ({ user: { uid } }) => {
  const [username, setUsername] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [
    setUpdatedUser,
    { loading: loading, error: updateError },
  ] = useMutation(updateUsername);

  async function handleSubmit() {
    setUpdatedUser({
      username: username,
      uid: uid,
      photo: photo,
    });
    let updatedUser = {
      displayName: username,
      photoURL: photo,
    };

    await fire.auth().currentUser.updateProfile(updatedUser);
  }

  return (
    <Grid container justify="center">
      <form>
        <label id="user-update">
          <h4>Username</h4>
          <TextField
            fullWidth
            required
            margin="normal"
            variant="outlined"
            label="Username"
            type="text"
            name="username"
            placeholder="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          <h4>Image URL</h4>
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="ImageURL"
            type="text"
            name="image"
            onChange={(event) => setPhoto(event.target.value)}
          />
        </label>

        <Button
          id="user-update-button"
          size="large"
          color="primary"
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        {loading && <Loader />}
        {updateError && <ErrorDisplayer msg={updateError} />}
      </form>
    </Grid>
  );
};

export default UpdateUserInfo;
