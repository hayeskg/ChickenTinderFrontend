import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import RestaurantList from "../components/RestaurantList";

const getRestaurantsTripAdvisorQuery = gql`
  query {
    getRestaurantsTripAdvisor {
      name
      location_id
      photo
    }
  }
`;

const GetRestaurantsTripAdvisor = () => {
  return (
    <div>
      <Query query={getRestaurantsTripAdvisorQuery}>
        {({ loading, error, data }) => {
          if (loading) return <h1>LOADING</h1>;
          if (error) console.log(error);

          return <RestaurantList query={data} />;
        }}
      </Query>
    </div>
  );
};

export default GetRestaurantsTripAdvisor;
