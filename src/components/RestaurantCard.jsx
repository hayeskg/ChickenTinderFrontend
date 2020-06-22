import React from 'react';
import TinderCard from 'react-tinder-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { voteMutation } from '../queries/voteMutation';
import { useMutation } from '@apollo/react-hooks';
import { useEffect, useRef } from 'react';
import ErrorDisplayer from './re-usable/ErrorDisplayer';
import { Paper, Grid, Box, SvgIcon, Button } from '@material-ui/core';
import {
  CheckCircleRounded,
  CancelRounded,
  DoubleArrowRounded,
} from '@material-ui/icons';

const RestaurantCard = ({
  checkForEndOfList,
  restaurant: { id, eventId, name, rating, price, photo, cuisine, location_id },
}) => {
  const [error, setError] = React.useState('');
  const [direction, setDirection] = React.useState('');
  const [votes, setPosNegVotes] = React.useState({
    positiveVote: 0,
    negativeVote: 0,
  });
  const initialRender = useRef(true);
  const [setVotes, { error: voteError }] = useMutation(voteMutation);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      setVotes({
        variables: {
          eventId,
          restaurantId: id,
          userId: '52',
          positiveVote: votes.positiveVote,
          negativeVote: votes.negativeVote,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          setError(err);
        });
    }
  }, [votes, id, eventId, setVotes]);

  const onSwipe = (direction) => {
    setDirection(direction);
    direction === 'left'
      ? setPosNegVotes({ positiveVote: 0, negativeVote: 1 })
      : setPosNegVotes({ positiveVote: 1, negativeVote: 0 });
  };

  const onCardLeftScreen = () => {
    checkForEndOfList(id);
  };

  return (
    <TinderCard
      onSwipe={onSwipe}
      onCardLeftScreen={() => onCardLeftScreen()}
      preventSwipe={['up', 'down']}
      className="Tinder-card"
    >
      <Paper elevation={3}>
        <Box className="card" width={400} height={520}>
          <article className="restaurant-card">
            <section className={direction}>
              <h2>{name}</h2>
              {/* <p>{cuisine} </p> */}
              <p>
                {price}
              </p>
              <p>
                <FontAwesomeIcon icon="star" className="icon" />
                {rating}
              </p>
            </section>
            <Box className="restaurant-image-box" height={280} width="100%">
              <img src={photo} alt={name} className="restaurant-image" />
            </Box>
            <Grid container>
              <Grid item xs={6}>
                <Button className="cancel-arrows">
                  <SvgIcon
                    className="back-arrow"
                    component={DoubleArrowRounded}
                    style={{ fontSize: 60, color: '#F21D2F' }}
                  />
                  <SvgIcon
                    component={CancelRounded}
                    style={{ fontSize: 80, color: '#F21D2F' }}
                  />
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button>
                  <SvgIcon
                    component={CheckCircleRounded}
                    style={{ fontSize: 80, color: '#41BF49' }}
                  />
                  <SvgIcon
                    component={DoubleArrowRounded}
                    style={{ fontSize: 60, color: '#41BF49' }}
                  />
                </Button>
              </Grid>
            </Grid>
            {error && <ErrorDisplayer msg={error} />}
            {voteError && <ErrorDisplayer msg={voteError} />}
          </article>
        </Box>
      </Paper>
    </TinderCard>
  );
};

export default RestaurantCard;
