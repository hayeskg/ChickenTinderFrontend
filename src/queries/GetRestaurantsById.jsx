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
      	date
      	lat
      	long
      	distance
      	organiser {
      	  id
      	}
      	members {
      	  id
      	}
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
    votes {
      id
    }
    winner {
      id
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

                    return <RestaurantList query={data} />;
                }}
            </Query>
        </div>
    );
};

export default GetRestaurantsByEventId;