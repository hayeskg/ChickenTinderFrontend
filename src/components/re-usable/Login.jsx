import React, { Component } from "react";
import fire from "../../fireAuth.js";

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
      <div>
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={this.handleChange}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={this.handleChange}
        />

        <button onClick={this.login}>Login</button>
        <button onClick={this.signup}>Signup</button>
      </div>
    );
  }
}

export default Login;
