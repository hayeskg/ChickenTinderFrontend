import gql from "graphql-tag";

export const eventCreationMutation = gql`
mutation($name: String!, 
  $date: Date!, 
  $lat: String!, 
  $long: String!,
	$distance: String!) {
    addEvent (
        name: $name,
        date: $date,
        lat: $lat,
        long: $long,
    		distance: $distance
  ) {
    	id
  }
  }
`;

