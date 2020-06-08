import "./App.css";
import RestaurantCard from "./components/RestaurantCard";
import { Router } from "@reach/router";
// import UserProfile from "./components/UserProfile";

import React, { Component } from "react";
import RestaurantList from "./components/RestaurantList";

class App extends Component {
  state = {
    user: {
      email: "Zizi@chickenTinder.com",
      username: "Zizi",
      avatar_url:
        "https://i.pinimg.com/originals/8a/83/a6/8a83a6179c330eee3fb352ffdfa20bd5.jpg",
      friends_list: [1, 3, 4, 123], //user ids
    },
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Chicken Tinder</header>
        {/* <Router> */}
        <RestaurantList />
        {/* <UserProfile user={this.state.user} /> */}
        {/* </Router> */}
      </div>
    );
  }
}

export default App;
