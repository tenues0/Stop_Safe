const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhha';
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: function (req, res, next) {
    // allows token to be sent via  req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return { message: "No tokens" };
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
      return res.status(400).json({ message: 'invalid token!' });
    }

    // send to next endpoint
    return req;
  },
  signToken: function ({ fullname, email, _id }) {
    const payload = { fullname, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};