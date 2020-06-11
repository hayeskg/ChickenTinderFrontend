import gql from "graphql-tag";

export const eventCreationMutation = gql`
  mutation {
      createEvent(eventInput: {
        eventName: $eventName
        eventDate: $eventDate
        eventClosingDate: $eventClosingDate
        eventLat: $eventLat
        eventLong: $eventLong
        eventDistance: $eventDistance
        eventOrganiser: $eventOrganiser
        attendees: $attendees
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
