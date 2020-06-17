import gql from "graphql-tag";

export const addUser = gql`
  mutation($uid: String!, $username: String, $email: String!, $photo: String) {
    addUser(
      uid: $uid
      email: $email
    ) {
      uid
      email  
    }
  }
`;
