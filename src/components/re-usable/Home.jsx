import React from "react";

import { Link } from "@reach/router";

const Home = () => {
  return (
    <section className="home-wrapper">
      <Link to="/event-creation">
        <button className="event-button">
          <span className="event-button-span">Create Event</span>
        </button>
      </Link>

      <Link to="/swipe/5ee78d3917a61c0017e5ecc1">
        <button className="event-button">
          <span className="event-button-span">Join Event</span>
        </button>
      </Link>

      <Link to="/winner/5ee7804f8d9b7f0017637b48">
        <button className="event-button">
          <span className="event-button-span">See winner</span>
        </button>
      </Link>
      

    </section>
  );
};

export default Home;
