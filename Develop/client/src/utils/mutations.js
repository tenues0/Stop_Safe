import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      police {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($fullname: String!, $email: String!, $password: String!) {
    addUser(fullname: $fullname, email: $email, password: $password) {
      token
      police {
        _id
        fullname
        badgeNumber
        email

      }
    }
  }
`;

