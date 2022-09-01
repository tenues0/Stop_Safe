const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        fullname: String
        licenseNumber: Number
        phoneNumber: Number
        email: String
        password: String
             
    }
    input saveInsurance {
        policyId: String
        vehicleMake: String
        vehicleModel: String
    }
    input saveRegistration {
        registrationId: String
        expirationDate: Number
        vehicleMake: String
        vehicleModel: String

    }
    input saveTicket {
        ticketId: String
        description: String
        vehicleMake: String
        vehicleModel: String
    }
    type Police {
        fullname: String
        agencyAffiliation: String
        supervisor: String
        badgeNumber: Number
        email: String
        password: String
    }
    input saveTicket {
        ticketId: String
        description: String
        vehicleMake: String
        vehicleModel: String
    }
 
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveInsurance(User: saveInsurance): User
        deleteInsurance(policyId: String!): User
        saveRegistration(User: saveRegistration): User
        deleteRegistration(registrationId: String!): User
        saveTicket(User: saveTicket): User
        deleteticket(ticketId: String!):User
}
`;

module.exports = typeDefs;