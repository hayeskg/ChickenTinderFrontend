import React, { Component } from "react";
import RestaurantCard from "./RestaurantCard";

class RestaurantList extends Component {
  state = {
    direction: "",
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.restaurants !== this.state.restaurants) {
      console.log("not matching");
    } else {
      console.log("not updated");
    }
  }

  handleUpvote = (id) => {
    this.state.restaurants.map((restaurant) => {
      if (id === restaurant.location_id) {
        console.log(restaurant.location_id);
        this.setState({
          ...restaurant,
          count: restaurant.count + 1,
          newProperty: "test",
        });
        console.log(restaurant);
      }
    });
    console.log(this.state.restaurants);
  };
  handleDownvote = (id) => {
    console.log(this.state.restaurants);
    return this.state.restaurants.map((restaurant) => {
      if (id === restaurant.location_id) {
        this.setState({ ...restaurant, count: restaurant.count - 1 });
      }
    });
  };
  onSwipe = (direction) => {
    console.log("You swiped: " + direction);
    this.setState({ direction: direction });
  };

  onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen " + this.state.direction);
    if (this.state.direction === "left") {
      this.handleDownvote(myIdentifier);
    } else if (this.state.direction === "right") {
      this.handleUpvote(myIdentifier);
    }
  };

  render() {
    return (
      <section className="restaurant-list">
        {this.state.restaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.location_id}
              restaurant={restaurant}
              onSwipe={this.onSwipe}
              onCardLeftScreen={this.onCardLeftScreen}
            />
          );
        })}
      </section>
    );
  }
}

export default RestaurantList;
