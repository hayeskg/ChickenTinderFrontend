import Loader from "../components/re-usable/Loader";
import React, { useEffect, useRef } from "react";
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

const GetUserByUID = ({uid}) => {
  console.log('in get user by uid', uid);
  const initialRender = useRef(true);


  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    }
  }, []);

  return (
    <div>
      <Query query={getUserByUID} variables={{uid}}>
        {({ loading, error, data, refetch }) => {
       
          if (loading) return <Loader />;

          if (error) console.log(error);

          if (data && initialRender.current) {
            console.log('refetching');
            refetch();           
          }
          return <Home query={data} />;
        }}
      </Query>
    </div>
  );
};

export default GetUserByUID;