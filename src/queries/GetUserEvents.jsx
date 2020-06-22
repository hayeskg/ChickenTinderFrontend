import Loader from "../components/re-usable/Loader";
import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import CheckForVoteEnd from "./CheckForVoteEnd";
import Grid from '@material-ui/core/Grid';

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

const GetUserEvents = ({ events }) => {
  return (
    <Grid>
      <ul>
        {events.map((id) => {
          return <li key={id}>
            <Query query={getUserEventsById} variables={{ id }}>
              {({ loading, error, data }) => {
                if (loading) return <Loader />;
                if (error) console.log(error);

                return <CheckForVoteEnd id={id} name={data.event.name} eventDate={data.event.endDate} />
              }}
            </Query>
          </li>
        })}
      </ul>
    </Grid>
  );
};

export default GetUserEvents;