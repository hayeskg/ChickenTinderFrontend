import React from "react";
import TinderCard from "react-tinder-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { voteMutation } from "../queries/voteMutation";
import { useMutation } from "@apollo/react-hooks";
import { useEffect, useRef } from "react";

const RestaurantCard = ({
  eventRef,
  checkForEndOfList,
  restaurant: {
    _id,
    name,
    rating,
    price,
    location_string,
    photo,
    cuisine,
    location_id,
  },
}
) => {
  const [direction, setDirection] = React.useState("");
  const [votes, setPosNegVotes] = React.useState({
    positiveVote: 0,
    negativeVote: 0
  });
  const initialRender = useRef(true)
  const [setVotes, {
    loading: voteLoading,
    error: voteError
  }] = useMutation(voteMutation);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      setVotes({
        variables: {
          eventRef: eventRef,
          restaurantRef: _id,
          positiveVote: votes.positiveVote,
          negativeVote: votes.negativeVote
        }
      })
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [votes, _id, eventRef, setVotes]);

  const onSwipe = (direction) => {
    setDirection(direction)
    direction === "left"
      ? setPosNegVotes({ positiveVote: 0, negativeVote: 1 })
      : setPosNegVotes({ positiveVote: 1, negativeVote: 0 })
  };

  const onCardLeftScreen = () => {
    checkForEndOfList(_id)
  };

  return (
    <TinderCard
      onSwipe={onSwipe}
      onCardLeftScreen={() => onCardLeftScreen()}
      preventSwipe={["up", "down"]}
      className="Tinder-card"
    >
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
          <p>
            <FontAwesomeIcon icon="map-marker-alt" className="icon" />
            {location_string}
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
      </article>
    </TinderCard>
  );
}


export default RestaurantCard;
