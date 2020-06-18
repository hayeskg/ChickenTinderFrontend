import React, { Component } from "react";
import fire from "../../fireAuth.js";
import styled from "styled-components";
import { useMutation } from "react-apollo";
import { addUser } from "../../queries/AddUser.jsx";
import ErrorDisplayer from "./ErrorDisplayer.jsx";

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

  const [setSignedUpUser, { loading: loading, signUpError }] = useMutation(
    addUser
  );

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
      {error && <ErrorDisplayer msg={error} />}
      {signUpError && <ErrorDisplayer msg={signUpError} />}
    </StyledLogin>
  );
};

export default Login;
