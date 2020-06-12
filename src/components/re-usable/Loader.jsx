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
        color="#fef2e4"
        className="loader"
      />
      <img
        src="https://prods3.imgix.net/images/articles/2015_04/Web-Article-Chef-Marcus-Samuelsson-Streetbird-Red-Rooster-Harlem-Tips-on-Roasting-Brining-a-Perfect-Chicken-Rotisserie-Recipe1.gif"
        alt=""
        className="chicken-loader"
      />
    </div>
  );
};

export default Loader;
