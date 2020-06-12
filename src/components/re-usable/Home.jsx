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
      <Link to="/swipe/5ee25c3e976ee6001793e4c9">
      <button>Join Event</button>
      </Link>
    </section>
  );
};

export default Home;
