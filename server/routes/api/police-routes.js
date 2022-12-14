const router = require('express').Router();
const {
  createPolice,
  getSinglePolice,
  saveTicket,
  deleteTicket,
  login,
} = require('../../controllers/police-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createPolice).put(authMiddleware, saveTicket);

router.route('/policelogin').post(login);

router.route('/policeme').get(authMiddleware, getSinglePolice);

router.route('/ticket/:ticketId').delete(authMiddleware, deleteTicket);

module.exports = router;