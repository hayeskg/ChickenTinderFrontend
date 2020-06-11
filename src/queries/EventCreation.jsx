import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import Loader from "../components/re-usable/Loader";

const eventCreationMutation = gql`
  mutation {
      createEvent(eventInput: {
        eventName
        eventDate
        eventClosingDate
        eventLat
        eventLong
        eventDistance
        eventOrganiser
        attendees
      }){
        _id
        eventName
        eventDate
        evenClosingDate
        eventLat
        eventLong
        eventDistance
        eventOrganiser
        attendees
        restaurantList
        restaurants {
            location_id
        location_string
        name
        description
        cuisine
        photo
        price
        ranking
        rating
        phone
        website
        address
        dietary_restrictions
        num_reviews
        } 
      }
  }
`;

const EventCreation = () => {
    return (
        <div>
            <Mutation mutation={eventCreationMutation}>
                {({ loading, error, data }) => {
                    if (loading) return <Loader />;
                    if (error) console.log(error);

                    console.log({data})
                }}
            </Mutation>
        </div>
    );
};

export default EventCreation;