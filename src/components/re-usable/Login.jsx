<<<<<<< HEAD
import React from 'react';
import fire from '../../fireAuth.js';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
import { useMutation } from 'react-apollo';
import { addUser } from '../../queries/AddUser.jsx';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [setSignedUpUser, { loading, error }] = useMutation(addUser);
=======
import React from "react";
import fire from "../../fireAuth.js";
import styled from "styled-components";
import { useMutation } from "react-apollo";
import { addUser } from "../../queries/AddUser.jsx";
import ErrorDisplayer from "./ErrorDisplayer.jsx";
import Loader from "./Loader.jsx";

const StyledLogin = styled.form`
  background-color: white;
  border-style: groove;
  border-color: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;
  margin: 10px;
`;
const StyledInput = styled.input`
  padding: 10px;
  margin: 10px;
`;
const StyledButton = styled.button`
  padding: 10px;
  margin: 10px;
`;

const Login = () => {
  const [error, setError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [
    setSignedUpUser,
    { loading: signUpLoad, error: signUpError },
  ] = useMutation(addUser);
>>>>>>> e45ed961abbe1e3ff161e3971753473d61c90506

  const login = (event) => {
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((cred) => {
        console.log(cred);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const signup = (event) => {
    event.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user: { uid, email } }) => {
        setSignedUpUser({
          variables: {
            uid: uid,
            email: email,
          },
        });
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
<<<<<<< HEAD
    <Grid container justify="center">
      <Grid item xs={8}>
        <h1>Swipe. Match. Eat</h1>
      </Grid>
      <form id="login">
        <TextField
          fullWidth
          required
          margin="normal"
          variant="outlined"
          label="Email"
          type="email"
          name="email"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          fullWidth
          required
          margin="normal"
          variant="outlined"
          label="Password"
          type="password"
          name="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          size="large"
          color="primary"
          variant="contained"
          onClick={login}
        >
          Login
        </Button>
        <Button
          size="large"
          color="secondary"
          variant="contained"
          onClick={signup}
        >
          Signup
        </Button>
      </form>
    </Grid>
=======
    <StyledLogin>
      <label htmlFor="email">Email: </label>
      <StyledInput
        type="email"
        name="email"
        placeholder="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="password">Password: </label>
      <StyledInput
        type="password"
        name="password"
        placeholder="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <StyledButton onClick={login}>Login</StyledButton>
      <StyledButton onClick={signup}>Signup</StyledButton>
      {signUpLoad && <Loader />}
      {error && <ErrorDisplayer msg={error} />}
      {signUpError && <ErrorDisplayer msg={signUpError} />}
    </StyledLogin>
>>>>>>> e45ed961abbe1e3ff161e3971753473d61c90506
  );
};

export default Login;
