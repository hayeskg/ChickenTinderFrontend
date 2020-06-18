import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";

const WinnerDisplayer = ({ data }) => {
    
    const {
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
        dietRestrictions } = data;

    const firstCuisine = cuisine && cuisine.length > 0 ? cuisine[0] : 'Not available';
    
    return (
        <article>
            <h2>YOUR MATCH</h2>
            <div className="winner-card">
                <section className="restaurant-card">
                    <h2>{name}</h2>
                    <p>{firstCuisine}</p>
                    <p>{dietRestrictions.join(", ")}</p>
                    <div className="price-rating">
                        <p>
                            <FontAwesomeIcon icon="dollar-sign" className="icon" />
                            {price}
                        </p>
                        <p>
                            <FontAwesomeIcon icon="star" className="icon" />
                            {rating}
                        </p>
                    </div>
                    <p>{description}</p>
                </section>
                <img src={photo} alt={name} className="restaurant-image" />
                <p>
                    <FontAwesomeIcon icon="map-marker-alt" className="icon" />
                    {address}</p>
                <a href={website}>
                    <button>{name} website</button>
                </a>
                <p>Phone Number: {phone}</p>
            </div>
            <Link to="/">
                <button>Home</button>
            </Link>
        </article>
    )
}

export default WinnerDisplayer;