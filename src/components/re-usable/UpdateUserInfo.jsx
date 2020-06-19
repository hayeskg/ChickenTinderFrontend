import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { updateUser } from "../../queries/UpdateUser.jsx";
import Loader from "./Loader.jsx";
import ErrorDisplayer from "./ErrorDisplayer.jsx";

const UpdateUserInfo = ({ email, uid }) => {
  const [username, setUsername] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [
    setUpdatedUser,
    { loading: loading, error: updateError },
  ] = useMutation(updateUser);

  const handleSubmit = () => {
    setUpdatedUser({
      email: email,
      username: username,
      uid: uid,
      photo: photo,
    });
  };
  return (
    <form>
      <label>
        <h4>Username</h4>
        <input
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        <h4>Image URL</h4>
        <input type="text" onChange={(event) => setPhoto(event.target.value)} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
      {loading && <Loader />}
      {updateError && <ErrorDisplayer msg={updateError} />}
    </form>
  );
};

export default UpdateUserInfo;
