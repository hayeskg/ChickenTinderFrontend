import React from "react";

import { Link } from "@reach/router";

const Home = () => {
  return (
    <section>
      <Link to="/event-creation">
        {" "}
        <button>
          <span>Create Event</span>
        </button>
      </Link>
      <button>Join Event</button>
    </section>
  );
};

export default Home;
