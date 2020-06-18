import Loader from "../components/re-usable/Loader";
import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "@reach/router";

const isVotingDone = gql`
query ($eventId: ID!){
    isVotingDone (
      eventId: $eventId
    )
    }
    `;
 
  const CheckForVoteEnd = ({id, name}) => {
    const eventId = id
    return (
      <div>
           <Query query={isVotingDone} variables={{eventId}}>
            {({ loading, error, data }) => {
              if (loading) return <Loader />;
              if (error) console.log(error);
            return data.isVotingDone ? 
            <Link to={`/winner/${id}`}>
            <button className="event-button">
              <span className="event-button-span">{name} SEE WINNER</span>
            </button>
          </Link>
            : <Link to={`/event/${id}`}>
            <button className="event-button">
              <span className="event-button-span">{name} VOTE</span>
            </button>
          </Link>;
            }}
          </Query>
      </div>
    );
  };

  export default CheckForVoteEnd;