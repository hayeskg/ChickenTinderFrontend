import React from "react";
import fire from "../../fireAuth.js";
import GetUserEvents from "../../queries/GetUserEvents";
import { Link } from "@reach/router";

const Home = ({ query }) => {
  const logout = () => {
    fire.auth().signOut();
  };

  return (
    <section className="home-wrapper">
      <Link to={`/event-creation/${query.userByUID.id}`}>
        <button className="event-button">
          <span className="event-button-span">Create Event</span>
        </button>
      </Link>
      <GetUserEvents events={query.userByUID.eventIds}/>
      <button onClick={logout} className="event-button">
        <span className="event-button-span">Logout</span>
      </button>
    </section>
  );
};

export default Home;
