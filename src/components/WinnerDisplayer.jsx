import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WinnerDisplayer = ({data}) => {

    const { id,
        eventId,
        name,
        description,
        photo,
        price,
        ranking,
        rating,
        phone,
        website,
        address,
        cuisine,
        dietRestrictions} = data.winner

      return (
        <article>
            <h2>YOUR MATCH</h2>
            <div className="winner-card">
        <section className="restaurant-card">
          <h2>{name}</h2>
          <p>{cuisine[0]}</p>
            
            
          <p>
            <FontAwesomeIcon icon="dollar-sign" className="icon" /> {price}
          </p>
          <p>
            <FontAwesomeIcon icon="star" className="icon" />
            {rating}
          </p>
          <p>{description}</p>
          {/*<p>
            <FontAwesomeIcon icon="map-marker-alt" className="icon" />
            {location_string}
          </p>*/}
        </section>
        <img src={photo} alt={name} className="restaurant-image" />
        <p>Address: {address}</p>
        <p>{website}</p>
        <p>{phone}</p>
        </div>
      </article>   
      )
}

export default WinnerDisplayer;