import React from "react";
import TinderCard from "react-tinder-card";

const RestaurantCard = ({
  handleUpvote,
  handleDownvote,
  onSwipe,
  onCardLeftScreen,
  restaurant: { name, rating, price_level, location_string, image, cuisine },
}) => {
  return (
    <TinderCard
      onSwipe={onSwipe}
      onCardLeftScreen={() => onCardLeftScreen("fooBar")}
      preventSwipe={["up", "down"]}
      className="Tinder-card"
    >
      <article className="restaurant-card">
        <section>
          <h2>{name}</h2>
          <p>
            {cuisine} price:{price_level} rating:{rating} location:
            {location_string}
          </p>
        </section>
        <img src={image} alt={name} className="restaurant-image" />
        <br />
        <button className="btn-red" onClick={handleDownvote}>
          RED
        </button>
        <button className="btn-green" onClick={handleUpvote}>
          GREEN
        </button>
      </article>
    </TinderCard>
  );
};

export default RestaurantCard;
