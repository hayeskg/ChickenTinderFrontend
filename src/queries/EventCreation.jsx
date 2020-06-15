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
  }
}
`;
