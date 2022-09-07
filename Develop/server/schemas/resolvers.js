const { Police } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { trusted } = require('mongoose');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await Police.findOne({ _id: context.user._id })
                .select('-__v' -password)
                return userData;
            }
            throw new AuthenticationError('Not Logged In');
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await Police.findOne( { email });
            if(!user) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const correctPassword = await user.isCorrectPassword(password);
            if(!correctPassword) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const token = signToken(user);
            return { token, user };
        },
        addPolice: async (parent, args) => {
            const user = await Police.create(args);
            const token = signToken(user);

            return { token, user };
        },
        
        
    },
};

module.exports = resolvers;