import React, { Component } from "react";
import fire from "../../fireAuth.js";
import styled from "styled-components";

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

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  login = (event) => {
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((cred) => {
        console.log(cred);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  signup = (event) => {
    event.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((cred) => {
        console.log(cred);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <StyledLogin>
        <label htmlFor="email">Email: </label>
        <StyledInput
          type="email"
          name="email"
          placeholder="email"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password: </label>
        <StyledInput
          type="password"
          name="password"
          placeholder="password"
          onChange={this.handleChange}
        />
        <StyledButton onClick={this.login}>Login</StyledButton>
        <StyledButton onClick={this.signup}>Signup</StyledButton>
      </StyledLogin>
    );
  }
}

export default Login;
