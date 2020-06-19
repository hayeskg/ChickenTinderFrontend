import gql from "graphql-tag";
import React from "react";
import { useMutation } from "@apollo/react-hooks";
import Loader from "../components/re-usable/Loader";
import WinnerDisplayer from "../components/WinnerDisplayer";
import { useState, useEffect } from "react";
import ErrorDisplayer from "../components/re-usable/ErrorDisplayer";

export const getWinner = gql`
  mutation($eventId: ID!) {
    getWinner(eventId: $eventId) {
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
  const [data, setData] = useState(null);

  const [setWinner, { loading, error }] = useMutation(getWinner, {
    onCompleted(response) {
      setData(response.getWinner);
    },
  });

  useEffect(() => {
    setWinner({ variables: { eventId: id } });
  }, []);

  if (loading || !data) return <Loader />;
  if (error) return <ErrorDisplayer msg={error} />;

  return <WinnerDisplayer data={data} />;
};

export default FetchWinner;
