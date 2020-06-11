import React from "react";
import TinderCard from "react-tinder-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RestaurantCard extends React.Component {
  state = {
    direction: "",
  };

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
        price,
        location_string,
        photo,
        cuisine,
        location_id,
      },
    } = this.props;

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
}

export default RestaurantCard;
