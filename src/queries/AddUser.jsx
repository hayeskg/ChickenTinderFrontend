import gql from "graphql-tag";

export const addUser = gql`
  mutation($uid: String!, $username: String, $email: String!, $photo: String) {
    addUser(
      uid: $uid
      username: $displayName
      email: $email
      photo: $photoURL
    ) {
      uid
      username
      email
      photo
    }
  }
`;
