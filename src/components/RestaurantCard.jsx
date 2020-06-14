import React from "react";
import TinderCard from "react-tinder-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { voteMutation } from "../queries/voteMutation";
import { useMutation } from "@apollo/react-hooks";
import { useEffect } from "react";
import { useRef } from "react";

const RestaurantCard = (
  {
    eventRef,
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
  const [d, setDirection] = React.useState("");
  const [votes, setPosNegVotes] = React.useState({
    positiveVote: 0,
    negativeVote: 0
  });
  const initialRender = useRef(true)
  const [setVotes, {
    loading: eventLoading,
    error: eventError
  }] = useMutation(voteMutation);

  useEffect(() => {
    if(initialRender.current) {
      initialRender.current = false;
    } else {
      setVotes({variables: {
        eventRef: eventRef,
        restaurantRef: _id,
        positiveVote: votes.positiveVote,
        negativeVote: votes.negativeVote
      }})
      .then((response) => {
        console.log(response)
      })
    }
    
  }, [votes, _id, eventRef, setVotes]);

  

  const onSwipe = (direction) => {
    direction === "left" ? setPosNegVotes({positiveVote: 0, negativeVote: 1}) : setPosNegVotes({positiveVote: 1, negativeVote: 0})

  };

const onCardLeftScreen = () => {
  console.log()
  };


    return (
      
      <TinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={onCardLeftScreen}
        preventSwipe={["up", "down"]}
        className="Tinder-card"
      >
        <article className="restaurant-card">
          <section>
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
