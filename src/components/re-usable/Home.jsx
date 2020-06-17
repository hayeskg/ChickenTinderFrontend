import React from 'react';
import fire from '../../fireAuth.js';
import { Button, Typography } from '@material-ui/core';
import { Link } from '@reach/router';

const Home = () => {
  const logout = () => {
    fire.auth().signOut();
  };
  return (
    <section className="home-wrapper">
      <Button color="primary" variant="contained">
        <Link to="/event-creation">Create Event</Link>
      </Button>

      <Button color="primary" variant="contained">
        <Link to="/swipe/5ee8c10bc226cb0017638939">
          <span>Join Event</span>
        </Link>
      </Button>
      <Button color="secondary" variant="contained" onClick={logout}>
        Logout
      </Button>
      <Button color="primary" variant="contained">
        <Link to="/winner/5ee8c10bc226cb0017638939">
          <span>See winner</span>
        </Link>
      </Button>
    </section>
  );
};

export default Home;
