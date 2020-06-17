import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import RestaurantList from "../components/RestaurantList";
import Loader from "../components/re-usable/Loader";

const getEventByID = gql`
query($id: ID!) { 
  event(id: $id)
      { id
      	name
        endDate
        voteDate
      	lat
      	long
        distance	
      	restaurants {
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
} 
`;

const GetRestaurantsByEventId = ({ id }) => {

  return (
    <div>
      <Query query={getEventByID} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) console.log(error);

          return <RestaurantList query={data} eventId={id}/>;
        }}
      </Query>
    </div>
  );
};

export default GetRestaurantsByEventId;