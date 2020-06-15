import React from "react";
import fire from "../../fireAuth.js";

import { Link } from "@reach/router";

const Home = () => {
  const logout = () => {
    fire.auth().signOut();
  };
  return (
    <section className="home-wrapper">
      <Link to="/event-creation">
        <button className="event-button">
          <span className="event-button-span">Create Event</span>
        </button>
      </Link>

      <Link to="/swipe/5ee372f3594aa40017024aef">
        <button className="event-button">
          <span className="event-button-span">Join Event</span>
        </button>
      </Link>

      <button onClick={logout}>Logout</button>
    </section>
  );
};

export default Home;
