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
        this.setState({user:{username: user.email, email: user.email, uid: user.uid}});
      } else {
        this.setState({ user: null });
      }
    });
  } 

  render() {
    const { uid } = this.state.user
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <Router>
            {this.state.user ? <Home path="/" user={uid}/> : <Login path="/" />}
            <GetRestaurantsByEventId path="/swipe/:id" user={uid}/>
            <EventCreationForm path="/event-creation" user={uid}/>
            <FetchWinner path="/winner/:id" user={uid}/>
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
