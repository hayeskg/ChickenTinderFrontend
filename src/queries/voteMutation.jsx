import gql from "graphql-tag";

export const voteMutation = gql`
mutation($eventId: ID!,
  $restaurantId: ID!,
  $userId: ID!,
  $positiveVote: Int!,
  $negativeVote: Int!) {
    addVote (
      eventId: $eventId,
      restaurantId: $restaurantId,
      userId: $userId,
      positiveVote: $positiveVote,
      negativeVote: $negativeVote
    ) {
      id
      eventId
      positiveVote
      negativeVote
    }
  }
`;