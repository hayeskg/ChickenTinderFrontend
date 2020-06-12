import gql from "graphql-tag";

export const eventCreationMutation = gql`
mutation($eventName: String!,
   $eventDate: String!, 
   $eventClosingDate: String!, 
   $eventLat: String!, 
   $eventLong: String!, 
   $eventDistance: String!, 
   $eventOrganiser: String!, 
   $attendees: [String!]) {
  createEvent( eventInput: {
    eventName: $eventName,
    eventDate: $eventDate,
    eventClosingDate: $eventClosingDate,
    eventLat: $eventLat,
    eventLong: $eventLong,
    eventDistance: $eventDistance,
    eventOrganiser: $eventOrganiser,
    attendees: $attendees
  }){
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
