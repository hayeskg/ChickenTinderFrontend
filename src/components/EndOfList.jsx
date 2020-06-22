import React from 'react';
import { Link } from '@reach/router';
import { Grid, Button } from '@material-ui/core';

const EndOfList = ({ id }) => {
  return (
    <Grid container justify="center">
      <Grid item xs={6}>
        <h2>Thanks for your votes!</h2>
        <Link to="/">
          <Button variant="contained" color="primary" size="large">
            Home
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default EndOfList;
