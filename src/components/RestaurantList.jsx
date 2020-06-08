import React, { Component } from "react";
import RestaurantCard from "./RestaurantCard";

class RestaurantList extends Component {
  state = {
    restaurants: [
      {
        name: "Pappa's Pizza",
        location_id: "2131514",
        location_string: "Manchester",
        rating: "5",
        price_level: "£",
        image:
          "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/alpine_pizza_32132_16x9.jpg",
        cuisine: "Italian",
        count: 0,
      },
      {
        name: "Momma's Pizza",
        location_id: "112345",
        location_string: "Manchester",
        rating: "5",
        price_level: "££",
        image:
          "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/alpine_pizza_32132_16x9.jpg",
        cuisine: "Italian",
        count: 0,
      },
      {
        name: "Brother's Pizza",
        location_id: "456344",
        location_string: "Manchester",
        rating: "5",
        price_level: "£",
        image:
          "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/alpine_pizza_32132_16x9.jpg",
        cuisine: "Italian",
        count: 0,
      },
    ],
  };
  handleUpvote = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };
  handleDownvote = (event) => {
    console.log(event.target);
    this.setState({ count: this.state.count - 1 });
    console.log(this.state.count);
  };
  render() {
    return (
      <div>
        {this.state.restaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.location_id}
              restaurant={restaurant}
              handleDownvote={this.handleDownvote}
              handleUpvote={this.handleUpvote}
            />
          );
        })}
      </div>
    );
  }
}

export default RestaurantList;
