import "./App.css";
import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import GetRestaurantsTripAdvisor from "./queries/GetRestaurantsTripAdvisor";

const client = new ApolloClient({
  uri: "https://chicken-tinder-backend.herokuapp.com/graphql",
});

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
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">Chicken Tinder</header>
          <GetRestaurantsTripAdvisor />

          {/* <RestaurantList /> */}
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
