import Loader from "../components/re-usable/Loader";
import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import EventCreationForm from "../components/EventCreationForm"

const getUsers = gql`
query  {
  users 
   {
     id
    uid
    email
  }
  }
  `;

  const GetUsers = ({ userid }) => {

    return (
      <div>
        <Query query={getUsers}>
          {({ loading, error, data }) => {
            if (loading) return <Loader />;
            if (error) console.log(error);
            console.log(data)
            return <EventCreationForm query={data} organiser={userid}/>;
          }}
        </Query>
      </div>
    );
  };

  export default GetUsers;