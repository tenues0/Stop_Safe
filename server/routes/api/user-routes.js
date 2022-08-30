const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveInsurance,
  deleteInsurance,
  saveRegistration,
  deleteRegistration,
  saveTicket,
  deleteTicket,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveInsurance).put(authMiddleware, saveRegistration).put(authMiddleware, saveTicket);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/insurance/:policyId').delete(authMiddleware, deleteInsurance);

router.route('/registration/:registrationId').delete(authMiddleware, deleteRegistration);

router.route('/ticket/:ticketId').delete(authMiddleware, deleteTicket);

module.exports = router;
