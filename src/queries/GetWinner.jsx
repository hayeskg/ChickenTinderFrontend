import gql from "graphql-tag";
import React from "react";
import { useMutation } from "@apollo/react-hooks";
import Loader from '../components/re-usable/Loader';
import WinnerDisplayer from '../components/WinnerDisplayer';
import { useState, useEffect } from "react";

export const getWinner = gql`
mutation ($eventId: ID!) {
  getWinner (
    eventId: $eventId
  )
   {
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
    console.log(id);
    const [data, setData] = useState(null);

    const [setWinner, { loading, error }] = useMutation(getWinner, {
      onCompleted(response) {
        console.log(response);
        setData(response.getWinner);
      }
    });

    useEffect(() => {
      // code to run on component mount
      console.log('here');
      setWinner({ variables: { eventId: id } });
    }, [])

    console.log(data);
    console.log(loading, error);
    if (loading || !data) return <Loader />;
    if (error) return <p>An error occurred</p>;

    return <WinnerDisplayer data={data} />;
  };
  
  export default FetchWinner;