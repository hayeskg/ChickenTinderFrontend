import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loader = () => {
  return (
    <div className="loader-div">
      <FontAwesomeIcon
        icon="spinner"
        rotation={270}
        size="6x"
        spin
        pulse
        color="#black"
        className="loader"
      />
    </div>
  );
};

export default Loader;
