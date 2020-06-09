import React from "react";
import TinderCard from "react-tinder-card";

class RestaurantCard extends React.Component {
  state = {
    direction: '',
  }

  onSwipe = (direction) => {
    this.setState({ direction });
  };

  onCardLeftScreen = (myIdentifier, index) => {
    const { direction } = this.state;
    const { handleDownvote, handleUpvote } = this.props;

    if (direction === "left") {
      handleDownvote(myIdentifier, index);
    } else if (direction === "right") {
      handleUpvote(myIdentifier);
    }
  };

  render() {
    const {
      restaurant: {
        name,
        rating,
        price_level,
        location_string,
        image,
        cuisine,
        location_id,
      },
    } = this.props

    return (
      <TinderCard
        onSwipe={this.onSwipe}
        onCardLeftScreen={() => this.onCardLeftScreen(location_id)}
        preventSwipe={["up", "down"]}
        className="Tinder-card"
      >
        <article className="restaurant-card">
          <section>
            <h2>{name}</h2>
            <p>
              {cuisine} price: {price_level} rating: {rating} location: {location_string}
            </p>
          </section>
          <img src={image} alt={name} className="restaurant-image" />
          <br />
        </article>
      </TinderCard>
    );
  };
};

export default RestaurantCard;
