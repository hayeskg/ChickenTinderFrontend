import React from "react";

const RestaurantCard = ({
  handleUpvote,
  handleDownvote,
  restaurant: { name, rating, price_level, location_string, image, cuisine },
}) => {
  return (
    <article className="restaurant-card">
      <section>
        <h2>{name}</h2>
        <p>
          {cuisine} price:{price_level} rating:{rating} location:
          {location_string}
        </p>
      </section>
      <img src={image} alt="restaurant-image" className="restaurant-image" />
      <br />
      <button className="btn-red" onClick={handleDownvote}>
        RED
      </button>
      <button className="btn-green" onClick={handleUpvote}>
        GREEN
      </button>
    </article>
  );
};

export default RestaurantCard;
