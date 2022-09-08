const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Insurance {
        policyId: String
        vehicleMake: String
        vehicleModel: String
    }
    type Registration {
        registrationId: String
        expirationDate: Int
        vehicleMake: String
        vehicleModel: String
    }
    type Ticket {
        ticketId: String
        description: String
        vehicleMake: String
        vehicleModel: String
    }
    type User {
        fullname: String
        licenseNumber: Int
        phoneNumber: Int
        email: String
        password: String      
    }
    type Police {
        fullname: String
        agencyAffiliation: String
        supervisor: String
        badgeNumber: Int
        phoneNumber: Int
        email: String
        password: String
    }
    type Query {
        me: User
        policeme: Police
    }
    type Auth {
        token: ID!
        user: User
        police: Police
    }
    input saveInsuranceInput {
        policyId: String
        vehicleMake: String
        vehicleModel: String
    }
    input saveRegistrationInput {
        registrationId: String
        expirationDate: Int
        vehicleMake: String
        vehicleModel: String
    }
    input saveTicketInput {
        ticketId: String
        description: String
        vehicleMake: String
        vehicleModel: String
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        loginpolice(email: String!, password: String!): Auth
        addUser(fullname: String!, email: String!, password: String!): Auth
        addPolice(fullname: String!, email: String!, password: String!): Auth
        saveInsurance(input: saveInsuranceInput): User
        deleteInsurance(policyId: String!): User
        saveRegistration(User: saveRegistrationInput): User
        deleteRegistration(registrationId: String!): User
        saveTicket(User: saveTicketInput): Police
        deleteTicket(ticketId: String!): Police
    }
`;

module.exports = typeDefs;