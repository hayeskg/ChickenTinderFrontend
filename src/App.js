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
import { Router } from "@reach/router";
import GetRestaurantsByEventId from "./queries/GetRestaurantsById";
import FetchWinner from "./queries/GetWinner";
import GetUsers from "./queries/GetUsers"
import GetUserByUID from "./queries/GetUserByUID";
import GetUserEvents from "./queries/GetUserEvents"

const client = new ApolloClient({
  uri: "https://chicken-tinder-backend.herokuapp.com/graphql",
});

class App extends Component {
  state = {
     user: null,
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
   
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <Router>
            {this.state.user ? <GetUserByUID path="/" uid={this.state.user.uid}/> : <Login path="/" />}
            <GetUserEvents path="/events/:userid"/>
            <GetRestaurantsByEventId path="/event/:id" />
            <GetUsers path="/event-creation/:userid" />
            <FetchWinner path="/winner/:id" />
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
