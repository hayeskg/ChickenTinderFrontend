import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import RestaurantList from "../components/RestaurantList";
import Loader from "../components/re-usable/Loader";
import { useQuery } from '@apollo/react-hooks';

const getEventByID = gql`
query($eventID: ID!) {
    getEventByID (
       eventID: $eventID
    ) {
        _id
      	eventName
      	eventDate
      eventClosingDate
      eventLat
      eventLong
      eventDistance
      eventOrganiser
      attendees
      restaurantList
      restaurants {
        _id
        location_id
        location_string
        name
        description
        photo
        price
        ranking
        rating
        phone
        website
        address
        num_reviews
      }
    }
  }
`;

const GetRestaurantsByEventId = ({ eventID }) => {

    console.log(typeof (eventID))
    return (
        <div>
            <Query query={getEventByID} variables={{ eventID }}>
                {({ loading, error, data }) => {
                    if (loading) return <Loader />;
                    if (error) console.log(error);

                    return <RestaurantList query={data} />;
                }}
            </Query>
        </div>
    );
};

export default GetRestaurantsByEventId;