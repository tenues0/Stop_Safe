const { Police } = require('../models');
// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
  // get a single police by either their id or their badgeNumber
  async getSinglePolice({ police = null, params }, res) {
    const foundPolice = await Police.findOne({
      $or: [{ _id: police ? police._id : params.id }, { badgeNumber: params.badgeNumber }],
    });

    if (!foundPolice) {
      return res.status(400).json({ message: 'Cannot find a police with this id!' });
    }

    res.json(foundPolice);
  },
  // create a police, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createPolice({ body }, res) {
    const police = await Police.create(body);

    if (!police) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(police);
    res.json({ token, police });
  },
  // login a police, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login({ body }, res) {
    const police = await Police.findOne({ $or: [{ badgeNumber: body.badgeNumber }, { email: body.email }] });
    if (!police) {
      return res.status(400).json({ message: "Can't find this police" });
    }

    const correctPw = await police.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(police);
    res.json({ token, police });
  },

    // save ticket info to a user's `ticketsInfo` field by adding it to the set (to prevent duplicates)
  // user comes from `req.user` created in the auth middleware function
  async saveTicket({ user, body }, res) {
    console.log(user);
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { ticketsInfo: body } },
        { new: true, runValidators: true }
      );
      return res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
  // remove a ticket from `ticketsInfo`
  async deleteTicket({ user, params }, res) {
    const updatedUser = await User.findOneAndUpdate(
      { _id: user._id },
      { $pull: { ticketsInfo: { ticketId: params.ticketId } } },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "Couldn't find user with this id!" });
    }
    return res.json(updatedUser);
  },

};