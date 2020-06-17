import React from 'react';
import fire from '../../fireAuth.js';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import { Link } from '@reach/router';

const Home = ({ user }) => {
  const logout = () => {
    fire.auth().signOut();
  };

  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={8}>
        <Button color="primary" variant="contained">
          <Link to="/event-creation">Create Event</Link>
        </Button>
      </Grid>
      <Grid item xs={8}>
        <Button color="primary" variant="contained">
          <Link to="/swipe/5eea01585f92b200176ed2da">
            <span>Join Event</span>
          </Link>
        </Button>
      </Grid>
      <Grid item xs={8}>
        <Button color="secondary" variant="contained" onClick={logout}>
          Logout
        </Button>
      </Grid>
      <Grid item xs={8}>
        <Button color="primary" variant="contained">
          <Link to="/winner/5ee8c10bc226cb0017638939">
            <span>See winner</span>
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
