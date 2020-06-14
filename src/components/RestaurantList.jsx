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
      restaurants: this.props.query.getEventByID.restaurants,
      loading: false,
    });
    console.log(this.props.query);
  }

  handleUpvote = (id) => {
    let newArray = this.state.restaurants.map((restaurant) => {
      if (id === restaurant.location_id) {
        return {
          ...restaurant,
          voteObj: {
            positiveVote: 1,
            negativeVote: 0,
            _id: restaurant.location_id,
            eventRef: "",
          },
        };
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
          voteObj: {
            positiveVote: 0,
            negativeVote: 1,
            _id: restaurant.location_id,
            eventRef: "",
          },
        };
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
              eventRef={this.props.query.getEventByID._id}
            />
          );
        })}
        {this.state.endOfList && <EndOfList key />}
      </section>
    );
  }
}

export default RestaurantList;
