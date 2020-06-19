import Loader from "../components/re-usable/Loader";
import React, { useEffect, useRef } from "react";
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

   

const CheckForVoteEnd = ({ id, name, eventDate }) => {

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    }
  }, []);

  const initialRender = useRef(true);
  const eventId = id
  return (
    <div>
      <label htmlFor="event-name">{new Date(eventDate).toDateString()}: {name}
        <Query query={isVotingDone} variables={{ eventId }}>
          {({ loading, error, data, refetch }) => {
            if (loading) return <Loader />;
            if (error) console.log(error);
            if (data && initialRender.current) {
              console.log('refetching');
              refetch();           
            }

            return data.isVotingDone ?
              <Link to={`/winner/${id}`}>
                <button className="event-button">
                  <span className="event-button-span">SEE WINNER</span>
                </button>
              </Link>
              : <Link to={`/event/${id}`}>
                <button className="event-button">
                  <span className="event-button-span">VOTE</span>
                </button>
              </Link>;
          }}
        </Query>
      </label>
    </div>
  );
};

export default CheckForVoteEnd;