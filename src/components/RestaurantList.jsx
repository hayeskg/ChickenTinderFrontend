import React, { Component } from "react";
import RestaurantCard from "./RestaurantCard";
import EndOfList from "./EndOfList";

class RestaurantList extends Component {
  state = {
    restaurants: [],
    endOfList: false,
    loading: true,
  };
  componentDidMount() {
    this.setState({
      restaurants: this.props.query.getRestaurantsTripAdvisor,
    });
    console.log(this.props.query.getRestaurantsTripAdvisor);
  }

  handleUpvote = (id) => {
    let newArray = this.state.restaurants.map((restaurant) => {
      if (id === restaurant.location_id) {
        return { ...restaurant, count: (restaurant.count += 1) };
      } else {
        return { ...restaurant };
      }
    });
    if (newArray[0]) {
      this.setState({ restaurants: newArray, endOfList: true });
    } else {
      this.setState({ restaurants: newArray, endOfList: false });
    }
  };

  handleDownvote = (id) => {
    let newArray = this.state.restaurants.map((restaurant) => {
      if (id === restaurant.location_id) {
        return { ...restaurant, count: (restaurant.count -= 1) };
      } else {
        return { ...restaurant };
      }
    });
    if (newArray[0]) {
      this.setState({ restaurants: newArray, endOfList: true });
    } else {
      this.setState({ restaurants: newArray, endOfList: false });
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
              handleUpvote={this.handleUpvote}
              handleDownvote={this.handleDownvote}
            />
          );
        })}
        {this.state.endOfList && <EndOfList key />}
      </section>
    );
  }
}

export default RestaurantList;
