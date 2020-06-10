import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loader = () => {
  return (
    <div className="loader">
      <FontAwesomeIcon
        icon="spinner"
        rotation={270}
        size="6x"
        spin
        pulse
        color="black"
      />

      {/* <img
        src="https://prods3.imgix.net/images/articles/2015_04/Web-Article-Chef-Marcus-Samuelsson-Streetbird-Red-Rooster-Harlem-Tips-on-Roasting-Brining-a-Perfect-Chicken-Rotisserie-Recipe1.gif"
        alt=""
        className="loader"
      /> CHICKEN SPINNER*/}
    </div>
  );
};

export default Loader;
