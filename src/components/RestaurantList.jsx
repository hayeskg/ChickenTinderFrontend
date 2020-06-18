import React, { Component } from "react";
import RestaurantCard from "./RestaurantCard";
import EndOfList from "./EndOfList";
import Loader from "./re-usable/Loader";
import ErrorDisplayer from "./re-usable/ErrorDisplayer";

class RestaurantList extends Component {
  state = {
    restaurants: [],
    endOfList: false,
    loading: true,
    vote: "",
    error: { message: "" },
  };
  componentDidMount() {
    this.setState({
      restaurants: this.props.query.event.restaurants,
      loading: false,
    });
  }

  checkForEndOfList = (id) => {
    if (
      this.state.restaurants.findIndex((restaurant) => restaurant.id === id) ===
      0
    ) {
      this.setState({ endOfList: true, loading: false });
    }
  };

  render() {
    const { loading, error } = this.state;
    const { message } = this.state.error;
    const { eventId } = this.props;
    if (loading) return <Loader />;
    if (message) return <ErrorDisplayer msg={error} />;
    return (
      <section className="restaurant-list">
        {this.state.restaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              handleUpvote={this.handleUpvote}
              handleDownvote={this.handleDownvote}
              eventRef={this.props.query.event.id}
              checkForEndOfList={this.checkForEndOfList}
            />
          );
        })}
        {this.state.endOfList && <EndOfList id={eventId} />}
      </section>
    );
  }
}

export default RestaurantList;
