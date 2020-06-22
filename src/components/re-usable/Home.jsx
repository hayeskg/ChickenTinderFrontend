import React from 'react';
import fire from '../../fireAuth.js';
import GetUserEvents from '../../queries/GetUserEvents';
import { Link } from '@reach/router';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const Home = ({ updateUserState, query }) => {
  const logout = () => {
    fire.auth().signOut();
    updateUserState({ user: { username: '', email: '', uid: '', photo: '' } });
  };

  return (
    <Grid container justify="center">
      <Grid item xs={7}>
        <Link to={`/event-creation/${query.userByUID.id}`}>
          <Button
            size="large"
            color="primary"
            variant="contained"
            id="create-event-button"
          >
            Create Event
          </Button>
        </Link>
      </Grid>
      <Grid item xs={7}>
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
    </Grid>
  );
};

export default Home;
