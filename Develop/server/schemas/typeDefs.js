const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Police {
        fullname: String!
        
        
        badgeNumber:String!
        
        email:String!
        password:String!
        image: String
        link: String
        title: String
    }
    
    type Query {
        me:Police
    }
    type Auth {
    token: ID!
    
    police:[Police]

    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addPolice(fullname: String!) :Police
        addEmail(profileId: ID!, email: String!): Police
        addbadgeNumber(profileId: ID!,badgeNumber:String!):Police
        
        removePolice(fullname: String!) :Police
        removeEmail(profileId: ID!, email: String!): Police
        removebadgeNumber(profileId: ID!,badgeNumber:String!):Police
}
`;

module.exports = typeDefs;