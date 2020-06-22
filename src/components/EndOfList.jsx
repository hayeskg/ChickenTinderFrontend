import React from 'react';
import { Link } from '@reach/router';
import { Grid, Button } from '@material-ui/core';

const EndOfList = ({ id }) => {
  return (
    <Grid container justify="center">
      <Grid item xs={6}>
        <h2>Thanks for your votes!</h2>
        <Button variant="contained" color="primary" size="large">
          <Link to="/">Home</Link>
        </Button>
      </Grid>
    </Grid>
  );
};

export default EndOfList;
