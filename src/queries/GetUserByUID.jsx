import Loader from "../components/re-usable/Loader";
import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Home from "../components/re-usable/Home";

const getUserByUID = gql`
query ($uid: String!){
    userByUID (
      uid: $uid
    ){
      id
      email
      uid
      eventIds
    }
}
`;

const GetUserByUID = (uid) => {
  
  return (
    <div>
      <Query query={getUserByUID} variables={uid}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;

          if (error) console.log(error);

          return <Home query={data} />;
        }}
      </Query>
    </div>
  );
};

export default GetUserByUID;