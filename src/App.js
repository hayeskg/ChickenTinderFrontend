import "./styling/App.css";
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
import GetUsers from "./queries/GetUsers";
import GetUserByUID from "./queries/GetUserByUID";
import GetUserEvents from "./queries/GetUserEvents";
import ErrorDisplayer from "./components/re-usable/ErrorDisplayer";
import UserProfile from "./components/re-usable/UserProfile";
import UpdateUserInfo from "./components/re-usable/UpdateUserInfo";

const client = new ApolloClient({
  uri: "https://chicken-tinder-backend.herokuapp.com/graphql",
});

class App extends Component {
  state = {
    user: {
      username: "",
      email: "",
      photo: "",
      uid: "",
    },
  };
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user.email) {
        this.setState({
          user: {
            username: user.displayName,
            email: user.email,
            uid: user.uid,
            photo: user.photoURL,
          },
        });
      } else {
        this.setState({
          user: { username: "", email: "", photo: "", uid: "" },
        });
      }
    });
  }

  updateUserState = ({ user }) => {
    this.setState({ user: user });
  };

  render() {
    return (
      <ApolloProvider client={client} className="App">
        <div className="App">
          <Header user={this.state.user} />
          <Router>
            {this.state.user.email ? (
              <GetUserByUID
                path="/"
                uid={this.state.user.uid}
                updateUserState={this.updateUserState}
              />
            ) : (
              <Login path="/" />
            )}
            <GetUserEvents path="/events/:userid" />
            <GetRestaurantsByEventId path="/event/:id" />
            <GetUsers path="/event-creation/:userid" />
            <FetchWinner path="/winner/:id" />
            <UserProfile path="/user-profile" user={this.state.user} />
            <UpdateUserInfo
              path="/user-profile/update-info"
              user={this.state.user}
            />
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
