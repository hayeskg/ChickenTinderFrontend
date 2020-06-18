import gql from "graphql-tag";
import WinnerDisplayer from "../components/WinnerDisplayer";
import React from "react";
import { Query } from "react-apollo";
import Loader from "../components/re-usable/Loader";
import ErrorDisplayer from "../components/re-usable/ErrorDisplayer";

export const getWinner = gql`
  query($eventId: ID!) {
    winner(eventId: $eventId) {
      id
      eventId
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

const FetchWinner = ({ id }) => {
  const eventId = id;
  return (
    <div>
      <Query query={getWinner} variables={{ eventId }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <ErrorDisplayer msg={error} />;
          return <WinnerDisplayer data={data} />;
        }}
      </Query>
    </div>
  );
};

export default FetchWinner;
