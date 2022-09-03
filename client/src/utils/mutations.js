import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        fullname
      }
    }
  }
`;

export const LOGIN_POLICE = gql`
  mutation loginpolice($email: String!, $password: String!) {
    loginpolice(email: $email, password: $password) {
      token
      police {
        _id
        fullname
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($fullname: String!, $email: String!, $password: String!) {
    addUser(fullname: $fullname, email: $email, password: $password) {
      token
      user {
        _id
        fullname
      }
    }
  }
`;

export const ADD_POLICE = gql`
  mutation addPolice($fullname: String!, $email: String!, $password: String!) {
    addPolice(fullname: $fullname, email: $email, password: $password) {
      token
      police {
        _id
        fullname
      }
    }
  }
`;

export const SAVE_INSURANCE = gql`
  mutation saveInsurance($insurance: saveInsuranceInput!) {
    saveInsurance(insurance: $insurance) {
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
    }
  }
`;

export const DELETE_INSURANCE = gql`
  mutation deleteInsurance($policyId: String!) {
    deleteInsurance(policyId: String!) {
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
    }
  }
`;

export const SAVE_REGISTRATION = gql`
  mutation saveRegistration($registration: saveRegistrationInput!) {
    saveRegistration(registration: $registration) {
      fullname
      licenseNumber
      phoneNumber
      email
      ticketCount
      registrationInfo {
        registrationId
        expirationDate
        vehicleMake
        vehicleModel
      }
    }
  }
`;

export const DELETE_REGISTRATION = gql`
  mutation deleteInsurance($registrationId: String!) {
    deleteInsurance(registrationId: String!) {
      fullname
      licenseNumber
      phoneNumber
      email
      ticketCount
      registrationInfo {
        registrationId
        expirationDate
        vehicleMake
        vehicleModel
      }
    }
  }
`;

export const SAVE_TICKET = gql`
  mutation saveTicket($ticket: saveTicketInput!) {
    saveTicket(ticket: $ticket) {
      fullname
      licenseNumber
      phoneNumber
      email
      ticketCount
      ticketsInfo {
        ticketId
        description
        vehicleMake
        vehicleModel
      }
    }
  }
`;

export const DELETE_TICKET = gql`
  mutation deleteticket($ticketId: String!) {
    deleteticket(ticketId: String!) {
      fullname
      licenseNumber
      phoneNumber
      email
      ticketCount
      ticketsInfo {
        ticketId
        description
        vehicleMake
        vehicleModel
      }
    }
  }
`;