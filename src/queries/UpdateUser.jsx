import gql from "graphql-tag";

export const updateUsername = gql`
  mutation($uid: String!, $username: String, $photoURL: String) {
    updateUsername(uid: $uid, username: $username, photoUrl: $photoURL) {
      uid
      username
      photo
    }
  }
`;
