import './styling/App.css';
import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import fire from './fireAuth';
import Header from './components/re-usable/Header';
import Login from './components/re-usable/Login';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSpinner,
  faCheck,
  faTimes,
  faStar,
  faMapMarkerAlt,
  faMoneyBillAlt,
  faDollarSign,
<<<<<<< HEAD
} from '@fortawesome/free-solid-svg-icons';
import Home from './components/re-usable/Home';
import { Router } from '@reach/router';
import EventCreationForm from './components/EventCreationForm';
import GetRestaurantsByEventId from './queries/GetRestaurantsById';
import FetchWinner from './queries/GetWinner';
import GetUsers from './queries/GetUsers';
=======
} from "@fortawesome/free-solid-svg-icons";
import { Router } from "@reach/router";

import GetRestaurantsByEventId from "./queries/GetRestaurantsById";
import FetchWinner from "./queries/GetWinner";
import GetUsers from "./queries/GetUsers"
import GetUserByUID from "./queries/GetUserByUID";
import GetUserEvents from "./queries/GetUserEvents"

import ErrorDisplayer from "./components/re-usable/ErrorDisplayer";

>>>>>>> e45ed961abbe1e3ff161e3971753473d61c90506

const client = new ApolloClient({
  uri: 'https://chicken-tinder-backend.herokuapp.com/graphql',
});

class App extends Component {
  state = {
<<<<<<< HEAD
    user: {
      email: '',
      uid: '',
    },
=======

     user: null,

>>>>>>> e45ed961abbe1e3ff161e3971753473d61c90506
  };
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
<<<<<<< HEAD
        this.setState({
          user: { username: user.email, email: user.email, uid: user.uid },
        });
=======

        this.setState({
          user: { username: user.email, email: user.email, uid: user.uid },
        });

>>>>>>> e45ed961abbe1e3ff161e3971753473d61c90506
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
