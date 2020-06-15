import React, { Component } from "react";
import RestaurantCard from "./RestaurantCard";
import EndOfList from "./EndOfList";
import Loader from "./re-usable/Loader";

class RestaurantList extends Component {
  state = {
    restaurants: [],
    endOfList: false,
    loading: true,
    vote: "",
  };
  componentDidMount() {
    this.setState({
      restaurants: this.props.query.getEventByID.restaurants,
      loading: false,
    });
  }

  checkForEndOfList = (_id) => {
    if (this.state.restaurants.findIndex(restaurant => restaurant._id === _id) === 0) {
      this.setState({ endOfList: true })
    }
  }

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
              checkForEndOfList={this.checkForEndOfList}
            />
          );
        })}
        {this.state.endOfList && <EndOfList key />}
      </section>
    );
  }
}

export default RestaurantList;
