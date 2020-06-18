import "./App.css";
import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import fire from "./fireAuth";
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
import FetchWinner from "./queries/GetWinner";
import GetUsers from "./queries/GetUsers";
import ErrorDisplayer from "./components/re-usable/ErrorDisplayer";

const client = new ApolloClient({
  uri: "https://chicken-tinder-backend.herokuapp.com/graphql",
});

class App extends Component {
  state = {
    user: {
      email: "",
      uid: "",
    },
  };
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: { username: user.email, email: user.email, uid: user.uid },
        });
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
            <GetRestaurantsByEventId path="/swipe/:id" />
            <GetUsers path="/event-creation" />
            <FetchWinner path="/winner/:id" />
            <ErrorDisplayer default />
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
