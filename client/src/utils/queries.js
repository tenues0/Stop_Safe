import gql from "graphql-tag";

export const GET_ME = gql`
  {
    me {
      _id
      fullname
      licenseNumber
      phoneNumber
      email
      ticketCount
      insuranceInfo {
        policyId
        vehicleMake
        vehicleModel
      }
      registrationInfo {
        registrationId
        expirationDate
        vehicleMake
        vehicleModel
      }
      ticketsInfo {
        ticketId
        description
        vehicleMake
        vehicleModel
      }
    }

    policeme {
      _id
      fullname
      agencyAffiliation
      supervisor
      badgeNumber
      phoneNumber
      email
    }
  }
`;