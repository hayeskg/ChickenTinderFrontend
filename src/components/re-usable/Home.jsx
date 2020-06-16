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
      <Link to="/swipe/5ee8c10bc226cb0017638939">
        <button className="event-button">
          <span className="event-button-span">Join Event</span>
        </button>
      </Link>
      <button onClick={logout}>Logout</button>
      <Link to="/winner/5ee8c10bc226cb0017638939">
        <button className="event-button">
          <span className="event-button-span">See winner</span>
        </button>
      </Link>
    </section>
  );
};

export default Home;
