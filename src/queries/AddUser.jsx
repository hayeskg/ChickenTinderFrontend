import gql from "graphql-tag";

export const addUser = gql`
  mutation($uid: String!, $email: String!) {
    addUser(uid: $uid, email: $email) {
      uid
      email
    }
  }
`;
