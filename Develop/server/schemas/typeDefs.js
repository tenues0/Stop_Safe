const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Police {
        _id:ID
        fullname: String!
        
        
        badgeNumber:String
        
        email:String!
        password:String!
        
    }

    type Auth {
        token: ID!
        profile:Police
    }
    type Query {
     profiles:[Police]!
     profile(profileId: ID!): Police
    }
   
    
    type Mutation {
        addPolice(fullname: String!,email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        loginPolice(email: String!, password: String!): Auth
        
        addEmail(profileId: ID!, email: String!): Police
        addBadgeNumber(profileId: ID!,badgeNumber:String!):Police
        
        removePolice(profileId:ID!) :Police
        removeEmail(profileId: ID!): Police
        removeBadgeNumber(profileId: ID!,badgeNumber:String!):Police
}
`;

module.exports = typeDefs;