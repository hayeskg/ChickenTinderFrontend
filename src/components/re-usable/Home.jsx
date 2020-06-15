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

      <Link to="/swipe/5ee753b5483ee00017bc26e3">
        <button className="event-button">
          <span className="event-button-span">Join Event</span>
        </button>
      </Link>

    </section>
  );
};

export default Home;
