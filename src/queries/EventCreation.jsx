import gql from "graphql-tag";

export const eventCreationMutation = gql`
mutation($name: String!, 
  $endDate: Date!,
  $voteDate: Date!, 
  $lat: String!, 
  $long: String!,
  $distance: String!,
  $organiser: ID,
  $guests: [ID]) {
    addEvent (
        name: $name,
        endDate: $endDate,
        voteDate: $voteDate,
        lat: $lat,
        long: $long,
        distance: $distance,
        organiser: $organiser,
        guests: $guests
  ) {
    	id
  }
  }
`;

