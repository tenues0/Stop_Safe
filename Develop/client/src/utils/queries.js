import gql from "graphql-tag";

export const QUERY_PROFILES = gql`
  {
    me {
      _id
      fullname
      badgeNumber
      email
      password
     
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      fullname
      
    }
  }
`;
