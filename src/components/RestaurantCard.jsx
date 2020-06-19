import React from 'react';
import TinderCard from 'react-tinder-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { voteMutation } from '../queries/voteMutation';
import { useMutation } from '@apollo/react-hooks';
import { useEffect, useRef } from 'react';
import ErrorDisplayer from './re-usable/ErrorDisplayer';
import Loader from './re-usable/Loader';
import { Paper, Grid } from '@material-ui/core';

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
  const [setVotes, { loading: voteLoading, error: voteError }] = useMutation(
    voteMutation
  );

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
      <Paper elevation={1}>
        <article className="restaurant-card">
          <section className={direction}>
            <h2>{name}</h2>
            {/* <p>{cuisine} </p> */}
            <p>
              <FontAwesomeIcon icon="dollar-sign" className="icon" /> {price}
            </p>
            <p>
              <FontAwesomeIcon icon="star" className="icon" />
              {rating}
            </p>
          </section>
          <img src={photo} alt={name} className="restaurant-image" />
          <section className="swipe-buttons">
            <button className="button-red">
              <span>
                <FontAwesomeIcon icon="times" className="icon" />
              </span>
            </button>
            <button className="button-green">
              <span>
                <FontAwesomeIcon icon="check" className="icon" />
              </span>
            </button>
          </section>
          {voteLoading && <Loader />}
          {error && <ErrorDisplayer msg={error} />}
          {voteError && <ErrorDisplayer msg={voteError} />}
        </article>
      </Paper>
    </TinderCard>
  );
};

export default RestaurantCard;
