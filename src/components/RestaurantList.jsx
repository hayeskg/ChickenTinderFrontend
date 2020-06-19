import React, { Component } from 'react';
import RestaurantCard from './RestaurantCard';
import EndOfList from './EndOfList';
import Loader from './re-usable/Loader';
import { Grid } from '@material-ui/core';

class RestaurantList extends Component {
  state = {
    restaurants: [],
    endOfList: false,
    loading: true,
    vote: '',
  };
  componentDidMount() {
    console.log(this.props.query);
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
      this.setState({ endOfList: true });
    }
  };

  render() {
    const { loading } = this.state;
    const { eventId } = this.props;
    if (loading) return <Loader />;
    return (
      <Grid container justify="center">
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
      </Grid>
    );
  }
}

export default RestaurantList;
