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

  handleUpvote = (id) => {
    const newArray = this.state.restaurants.map((restaurant) => {
      if (id === restaurant.location_id) {
        return { ...restaurant, count: restaurant.count += 1 };
      } else {
        return { ...restaurant }
      }
    });
    this.setState({ restaurants: newArray })
  };

  handleDownvote = (id) => {
    const newArray = this.state.restaurants.map((restaurant) => {
      if (id === restaurant.location_id) {
        return { ...restaurant, count: restaurant.count -= 1 };
      } else {
        return { ...restaurant }
      }
    });
    this.setState({ restaurants: newArray })
  };

  render() {
    console.log(this.state.restaurants)
    return (
      <section className="restaurant-list">
        {
          this.state.restaurants.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant.location_id}
                restaurant={restaurant}
                handleUpvote={this.handleUpvote}
                handleDownvote={this.handleDownvote}
              />
            );
          })
        }
      </section>
    );
  };
};

export default RestaurantList;
