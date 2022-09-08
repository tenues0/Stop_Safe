import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        fullname
        email
        password
        
      }
    }
  }
`;

export const ADD_USER = gql`
mutation Mutation($fullname: String!, $email: String!, $password: String!) {
  addPolice(fullname: $fullname, email: $email, password: $password) {
    token
    profile {
      _id
      fullname
      email
      password
    }
  }
}
`;

