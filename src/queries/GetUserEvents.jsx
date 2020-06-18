import Loader from "../components/re-usable/Loader";
import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import CheckForVoteEnd from "./CheckForVoteEnd";

const getUserEventsById = gql`
query ($id: ID!){
    event (
      id: $id
    ){
      id
        name
      endDate
      voteDate
    }
    }
    `;
 
  const GetUserEvents = ({events}) => {
    return (
      <div>
          <ul>
        {events.map((id) => {
           return <li key={id}>
           <Query query={getUserEventsById} variables={{id}}>
            {({ loading, error, data }) => {
              if (loading) return <Loader />;
              if (error) console.log(error);
  
            return <CheckForVoteEnd id={id} name={data.event.name}/>
            }}
          </Query>
            </li>
      })}
        </ul>
      </div>
    );
  };

  export default GetUserEvents;