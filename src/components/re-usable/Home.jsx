import React from "react";

import { Link } from "@reach/router";

const Home = () => {
  return (
    <section>
      <Link to="/event-creation">
       
        <button>
          <span>Create Event</span>
        </button>
      </Link>
      <Link to="/swipe">
      <button>Join Event</button>
      </Link>
    </section>
  );
};

export default Home;
