import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import RestaurantList from "../components/RestaurantList";
import Loader from "../components/re-usable/Loader";

const getRestaurantsTripAdvisorQuery = gql`
  query {
    getRestaurantsTripAdvisor(
      tripAdvisorInput: {
        distance: "2"
        latitude: "53.4789028"
        longitude: "-2.2378771"
      }
    ) {
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
`;

const GetRestaurantsTripAdvisor = () => {
  return (
    <div>
      <Query query={getRestaurantsTripAdvisorQuery}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) console.log(error);

          return <RestaurantList query={data} />;
        }}
      </Query>
    </div>
  );
};

export default GetRestaurantsTripAdvisor;
