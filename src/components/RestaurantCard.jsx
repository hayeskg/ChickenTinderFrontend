import React, { Component } from "react";

class RestaurantCard extends Component {
  state = {
    count: 0,
    restaurant: {
      name: "Pappa's Pizza",
      location_id: "",
      location_string: "Manchester",
      rating: "5",
      price_level: "£",
      image:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/alpine_pizza_32132_16x9.jpg",
      cuisine: "Italian",
    },
  };

  handleUpvote = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };
  handleDownvote = () => {
    this.setState({ count: this.state.count - 1 });
    console.log(this.state.count);
  };
  render() {
    const {
      name,
      rating,
      price_level,
      location_string,
      image,
      cuisine,
    } = this.state.restaurant;
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
        <button className="btn-red" onClick={this.handleDownvote}>
          RED
        </button>
        <button className="btn-green" onClick={this.handleUpvote}>
          GREEN
        </button>
      </article>
    );
  }
}

export default RestaurantCard;
