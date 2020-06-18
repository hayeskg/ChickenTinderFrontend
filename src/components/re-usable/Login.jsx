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

  const login = (event) => {
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((cred) => {
        console.log(cred);
      })
      .catch((err) => {
        console.log(err);
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
      .catch((err) => {
        console.log(err);
      });
  };

  return (
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
  );
};

export default Login;
