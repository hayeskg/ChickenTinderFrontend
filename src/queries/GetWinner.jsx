import gql from "graphql-tag";

export const getWinner = gql`
query {
    winner (eventId:"5ee7804f8d9b7f0017637b48")
   {
    name
    description
    photo
    price
    ranking
    rating
    phone
    website
    address
    cuisine
    dietRestrictions
  }
  }
  `;