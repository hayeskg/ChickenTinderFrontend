import Loader from "../components/re-usable/Loader";
import React, { useEffect, useRef } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "@reach/router";
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

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
    <Grid>
      <label htmlFor="event-name" className="event-label">
        <p className="event-date">{new Date(eventDate).toDateString()}:</p>
        <p>{name}</p>
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
                <Button size="small" color="primary" variant="contained" >
                  <span className="event-button-span">SEE WINNER</span>
                </Button>
              </Link>
              : <Link to={`/event/${id}`}>
                <Button size="small" color="primary" variant="outlined">
                  <span className="event-button-span">VOTE</span>
                </Button>
              </Link>;
          }}
        </Query>
      </label>
    </Grid>
  );
};

export default CheckForVoteEnd;