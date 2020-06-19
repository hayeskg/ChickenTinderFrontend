<<<<<<< HEAD
import React from 'react';
import fire from '../../fireAuth.js';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import { Link } from '@reach/router';

const Home = ({ user }) => {
=======
import React from "react";
import fire from "../../fireAuth.js";
import GetUserEvents from "../../queries/GetUserEvents";
import { Link } from "@reach/router";

const Home = ({ query }) => {
>>>>>>> e45ed961abbe1e3ff161e3971753473d61c90506
  const logout = () => {
    fire.auth().signOut();
  };

  return (
<<<<<<< HEAD
    <Grid container justify="center" spacing={3}>
      <Grid item xs={7}>
        <Button size="large" color="primary" variant="contained">
          <Link to="/event-creation">Create Event</Link>
        </Button>
      </Grid>
      <Grid item xs={7}>
        <Button size="large" color="primary" variant="contained">
          <Link to="/swipe/5eea01585f92b200176ed2da">
            <span>Join Event</span>
          </Link>
        </Button>
      </Grid>
      <Grid item xs={7}>
        <Button
          size="large"
          color="secondary"
          variant="contained"
          onClick={logout}
        >
          Logout
        </Button>
      </Grid>
      <Grid item xs={7}>
        <Button size="large" color="primary" variant="contained">
          <Link to="/winner/5ee8c10bc226cb0017638939">
            <span>See winner</span>
          </Link>
        </Button>
      </Grid>
    </Grid>
=======
    <section className="home-wrapper">
      <Link to={`/event-creation/${query.userByUID.id}`}>
        <button className="event-button">
          <span className="event-button-span">Create Event</span>
        </button>
      </Link>
      <br />
      <GetUserEvents events={query.userByUID.eventIds} />
      <button onClick={logout} className="event-button">
        <span className="event-button-span">Logout</span>
      </button>
    </section>
>>>>>>> e45ed961abbe1e3ff161e3971753473d61c90506
  );
};

export default Home;
