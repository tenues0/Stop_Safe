const { User, Police } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth.js');
const { trusted } = require('mongoose');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v' -password)
                return userData;
            }
            throw new AuthenticationError('Not Logged In');
        },
        policeme: async (parent, args, context) => {
            if(context.police) {
                const policeData = await Police.findOne({ _id: context.police._id })
                .select('-__v' -password)
                return policeData;
            }
            throw new AuthenticationError('Not Logged In');
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne( { email });
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
        loginpolice: async (parent, { email, password }) => {
            const police = await Police.findOne( { email });
            if(!police) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const correctPassword = await police.isCorrectPassword(password);
            if(!correctPassword) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const token = signToken(police);
            return { token, police };
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        addPolice: async (parent, args) => {
            const police = await Police.create(args);
            const token = signToken(police);

            return { token, police };
        },
        saveInsurance: async (parent, { input }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { insuranceInfo: input } },
                    { new: true, runValidators: true }
                )
                return updatedUser;
            }
            throw new AuthenticationError('Need to be logged in.')
        },
        deleteInsurance: async (parent, { policyId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    { $pull: { insuranceInfo: { policyId: policyId } } },
                    { new: true }                   
                )
                return updatedUser;
            }
            throw new AuthenticationError("Need to be logged in.");
        },

        saveRegistration: async (parent, { input }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { registrationInfo: input } },
                    { new: true, runValidators: true }
                )
                return updatedUser;
            }
            throw new AuthenticationError('Need to be logged in.')
        },
        deleteRegistration: async (parent, { registrationId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    { $pull: { registrationInfo: { registrationId: registrationId } } },
                    { new: true }                   
                )
                return updatedUser;
            }
            throw new AuthenticationError("Need to be logged in.");
        },

        saveTicket: async (parent, { input }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { ticketsInfo: input } },
                    { new: true, runValidators: true }
                )
                return updatedUser;
            }
            throw new AuthenticationError('Need to be logged in.')
        },
        deleteTicket: async (parent, { ticketId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    { $pull: { ticketsInfo: { ticketId: ticketId } } },
                    { new: true }                   
                )
                return updatedUser;
            }
            throw new AuthenticationError("Need to be logged in.");
        },

    },
};

module.exports = resolvers;