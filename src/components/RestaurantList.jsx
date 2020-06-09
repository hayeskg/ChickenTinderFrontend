import React, { Component } from "react";
import RestaurantCard from "./RestaurantCard";
import EndOfList from "./EndOfList"


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
    endOfList: false
  };

  handleUpvote = (id) => {
    let newArray = this.state.restaurants.map((restaurant) => {
      if (id === restaurant.location_id) {
        return { ...restaurant, count: restaurant.count += 1 }
      } else {
        return { ...restaurant }
      }
    });
    if (newArray[0]) {
      this.setState({ restaurants: newArray, endOfList: true })
    } else {
      this.setState({ restaurants: newArray, endOfList: false })
    }
  };

  handleDownvote = (id) => {
    let newArray = this.state.restaurants.map((restaurant) => {
      if (id === restaurant.location_id) {
        return { ...restaurant, count: restaurant.count -= 1 };

      } else {
        return { ...restaurant }
      }
    });
    if (newArray[0]) {
      this.setState({ restaurants: newArray, endOfList: true })
    } else {
      this.setState({ restaurants: newArray, endOfList: false })
    }
  };

  render() {
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
        {
          this.state.endOfList &&
          <EndOfList key />
        }
      </section>
    );
  };
};

export default RestaurantList;
