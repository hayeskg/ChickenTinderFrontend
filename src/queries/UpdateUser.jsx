import gql from "graphql-tag";

export const updateUser = gql`
  mutation($uid: String!, $username: String, $email: String!, $photo: String) {
    addUser(uid: $uid, username: $username, email: $email, photo: $photo) {
      uid
      username
      email
      photo
    }
  }
`;
