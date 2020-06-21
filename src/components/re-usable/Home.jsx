import React from 'react';
import fire from '../../fireAuth.js';
import GetUserEvents from '../../queries/GetUserEvents';
import { Link } from '@reach/router';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const Home = ({ query }) => {
  const logout = () => {
    fire.auth().signOut();
  };

  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={7}>
        <Button size="large" color="primary" variant="contained">
          <Link to={`/event-creation/${query.userByUID.id}`}>Create Event</Link>
        </Button>
      </Grid>
      <Grid item xs={7}>
        {/* <Button size="large" color="primary" variant="contained">
          <Link to="/swipe/5eea01585f92b200176ed2da">
            <span>Join Event</span>
          </Link>
        </Button> */}
        <GetUserEvents events={query.userByUID.eventIds} />
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
      {/* <Grid item xs={7}>
        <Button size="large" color="primary" variant="contained">
          <Link to="/winner/5ee8c10bc226cb0017638939">
            <span>See winner</span>
          </Link>
        </Button>
      </Grid> */}
    </Grid>
  );
};

export default Home;
