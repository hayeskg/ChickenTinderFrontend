import React, { Component } from "react";
import RestaurantCard from "./RestaurantCard";
import EndOfList from "./EndOfList";
import Loader from "./re-usable/Loader";

class RestaurantList extends Component {
  state = {
    restaurants: [],
    endOfList: false,
    loading: true,
  };
  componentDidMount() {
    this.setState({
      restaurants: this.props.query.getRestaurantsTripAdvisor,
      loading: false,
    });
    console.log(this.props.query.getRestaurantsTripAdvisor);
  }

  handleUpvote = (id) => {
    let newArray = this.state.restaurants.map((restaurant) => {
      if (id === restaurant.location_id) {
        return {
          ...restaurant,
          count: (restaurant.count += 1),
        };
        //{voteObj: {positiveVote: (restaurant.voteObj.upvote += 1), negativeVote: 0, _id: restaurant.location_id, eventRef: ""}}
        //backend gets restaurant.voteObj back
      } else {
        return { ...restaurant };
      }
    });
    if (newArray[0]) {
      this.setState({ restaurants: newArray, endOfList: true, loading: false });
    } else {
      this.setState({
        restaurants: newArray,
        endOfList: false,
        loading: false,
      });
    }
  };

  handleDownvote = (id) => {
    let newArray = this.state.restaurants.map((restaurant) => {
      if (id === restaurant.location_id) {
        return {
          ...restaurant,
          count: (restaurant.count -= 1),
        };
        //{voteObj: {downvote: (restaurant.voteObj.downvote += 1), upvote: 0, id: restaurant.location_id}}
      } else {
        return { ...restaurant };
      }
    });
    if (newArray[0]) {
      this.setState({ restaurants: newArray, endOfList: true, loading: false });
    } else {
      this.setState({
        restaurants: newArray,
        endOfList: false,
        loading: false,
      });
    }
  };

  render() {
    const { loading } = this.state;
    if (loading) return <Loader />;
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
