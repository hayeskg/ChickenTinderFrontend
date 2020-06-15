import gql from "graphql-tag";

export const voteMutation = gql`
mutation($eventRef: ID!, 
    $restaurantRef: ID!, 
    $positiveVote: Int!, 
    $negativeVote: Int!) {
      createVote(
        voteInput: {
          eventRef: $eventRef,
          restaurantRef: $restaurantRef,
          positiveVote: $positiveVote,
          negativeVote: $negativeVote
        }) {
          _id
        eventRef
        restaurantRef
        positiveVote
        negativeVote
    }
}
`;