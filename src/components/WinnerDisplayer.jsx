import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@reach/router';
import { Paper, Grid, Box, SvgIcon, Button } from '@material-ui/core';
import { PhoneIphoneRounded } from '@material-ui/icons';

const WinnerDisplayer = ({ data }) => {
  const {
    id,
    eventId,
    name,
    description,
    photo,
    price,
    ranking,
    rating,
    phone,
    website,
    address,
    cuisine,
    dietRestrictions,
  } = data;

  const firstCuisine =
    cuisine && cuisine.length > 0 ? cuisine[0] : 'Cuisine not available';

  return (
    <article>
      <h2>YOUR MATCH</h2>
      <Grid container justify="center">
        <Paper elevation={3}>
          <Box className="winning-card" width={600} height="100%">
            <section
              className="restaurant-card"
              event={eventId}
              mongoId={id}
              ranking={ranking}
            >
              <h2>{name}</h2>
              <p>{firstCuisine}</p>
              <p>{dietRestrictions.join(', ')}</p>
              <div className="price-rating">
                <p>
                  {price}
                </p>
                <p>
                  <FontAwesomeIcon icon="star" className="icon" />
                  {rating}
                </p>
              </div>
              <p className="description">{description}</p>
            </section>
            <Box className="winning-restaurant-img" height={300} width="100%">
              <img src={photo} alt={name} className="restaurant-image" />
            </Box>
            <p>
              <FontAwesomeIcon icon="map-marker-alt" className="icon" />
              {address}
            </p>
            <Button
              className="restaurant-website-btn"
              variant="contained"
              color="primary"
            >
              <a href={website}>{name} website</a>
            </Button>
            <p>
              <SvgIcon
                component={PhoneIphoneRounded}
                style={{
                  fontSize: 14,
                }}
              />
              Phone Number: {phone}
            </p>
          </Box>
          <Grid item xs={12}>
            <Button
              className="home-btn"
              variant="contained"
              color="primary"
              size="large"
            >
              <Link to="/">Home</Link>
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </article>
  );
};

export default WinnerDisplayer;
