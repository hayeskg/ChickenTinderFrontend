import "./App.css";
import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import fire from "./fireAuth";
import GetRestaurantsTripAdvisor from "./queries/GetRestaurantsTripAdvisor";
import Header from "./components/re-usable/Header";
import Login from "./components/re-usable/Login";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpinner,
  faCheck,
  faTimes,
  faStar,
  faMapMarkerAlt,
  faMoneyBillAlt,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import Home from "./components/re-usable/Home";
import { Router } from "@reach/router";
import EventCreationForm from "./components/EventCreationForm";
import GetRestaurantsByEventId from "./queries/GetRestaurantsById";

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
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user.email);
      if (user) {
        this.setState({ user: { username: user.email } });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <Router>
            {this.state.user ? <Home path="/" /> : <Login path="/" />}

            <GetRestaurantsTripAdvisor path="/swipe"/> 

            <GetRestaurantsByEventId path="/swipe/:eventID" />



            <EventCreationForm path="/event-creation" />
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}
library.add(
  faSpinner,
  faCheck,
  faTimes,
  faStar,
  faMapMarkerAlt,
  faMoneyBillAlt,
  faDollarSign
);

export default App;
