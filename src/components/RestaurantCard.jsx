import React, { Component } from "react";

class RestaurantCard extends Component {
  state = {
    count: 0,
  };

  handleUpvote = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };
  handleDownvote = () => {
    this.setState({ count: this.state.count - 1 });
    console.log(this.state.count);
  };
  render() {
    return (
      <article className="restaurant-card">
        <button className="btn-red" onClick={this.handleDownvote}>
          RED
        </button>
        <button className="btn-green" onClick={this.handleUpvote}>
          GREEN
        </button>
      </article>
    );
  }
}

export default RestaurantCard;
